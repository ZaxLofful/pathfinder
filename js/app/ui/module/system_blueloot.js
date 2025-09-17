define([                // dependencies for this module
    'module/base',      // abstract `parent` module class definition [required]
    'app/render'        // ... for rendering helper functions
], (BaseModule, Render) => {
    'use strict';

    /**
     * BlueLootModule class
     * -> Shows distance to systems that buy blue loot (wormhole components)
     * @type {BlueLootModule}
     */
    let BlueLootModule = class BlueLootModule extends BaseModule {
        constructor(config = {}) {
            super(Object.assign({}, new.target.defaultConfig, config));
            
            // Current page for pagination
            this._currentPage = 0;
            this._itemsPerPage = 6;
            this._selectedListIndex = 0;
        }

        /**
         * initial module render method
         * -> implementation is enforced by BaseModule
         * -> must return a single node element
         * @param mapId
         * @param systemData
         * @returns {HTMLElement}
         */
        render(mapId, systemData){
            this._mapId = mapId;
            this._systemData = systemData;

            // Create main container
            let bodyEl = Object.assign(document.createElement('div'), {
                className: this._config.bodyClassName
            });

            // Header with list selector
            let headerEl = this.createHeader();
            bodyEl.appendChild(headerEl);

            // List container
            let listEl = Object.assign(document.createElement('div'), {
                className: this._config.listClassName
            });
            bodyEl.appendChild(listEl);

            // Pagination controls
            let paginationEl = this.createPagination();
            bodyEl.appendChild(paginationEl);

            // Footer with import functionality
            let footerEl = this.createFooter();
            bodyEl.appendChild(footerEl);

            this.moduleElement.appendChild(bodyEl);

            return this.moduleElement;
        }

        /**
         * Create header with list selection dropdown
         * @returns {HTMLElement}
         */
        createHeader() {
            let headerEl = Object.assign(document.createElement('div'), {
                className: this._config.headerClassName
            });

            // List selector dropdown
            let selectEl = Object.assign(document.createElement('select'), {
                className: this._config.selectClassName
            });

            // Add default lists
            this.getDefaultLists().forEach((list, index) => {
                let optionEl = Object.assign(document.createElement('option'), {
                    value: index,
                    textContent: list.name
                });
                selectEl.appendChild(optionEl);
            });

            selectEl.addEventListener('change', (e) => {
                this._selectedListIndex = parseInt(e.target.value);
                this._currentPage = 0;
                this.updateList();
            });

            headerEl.appendChild(selectEl);
            return headerEl;
        }

        /**
         * Create pagination controls
         * @returns {HTMLElement}
         */
        createPagination() {
            let paginationEl = Object.assign(document.createElement('div'), {
                className: this._config.paginationClassName
            });

            let prevBtn = Object.assign(document.createElement('button'), {
                textContent: '‹',
                className: this._config.paginationBtnClassName
            });
            prevBtn.addEventListener('click', () => this.previousPage());

            let nextBtn = Object.assign(document.createElement('button'), {
                textContent: '›', 
                className: this._config.paginationBtnClassName
            });
            nextBtn.addEventListener('click', () => this.nextPage());

            let pageInfo = Object.assign(document.createElement('span'), {
                className: this._config.pageInfoClassName
            });

            paginationEl.appendChild(prevBtn);
            paginationEl.appendChild(pageInfo);
            paginationEl.appendChild(nextBtn);

            return paginationEl;
        }

        /**
         * Create footer with import functionality
         * @returns {HTMLElement}
         */
        createFooter() {
            let footerEl = Object.assign(document.createElement('div'), {
                className: this._config.footerClassName
            });

            let importBtn = Object.assign(document.createElement('button'), {
                textContent: 'Import List',
                className: this._config.importBtnClassName
            });

            let fileInput = Object.assign(document.createElement('input'), {
                type: 'file',
                accept: '.json,.txt',
                style: 'display: none'
            });

            importBtn.addEventListener('click', () => fileInput.click());
            fileInput.addEventListener('change', (e) => this.importList(e));

            footerEl.appendChild(importBtn);
            footerEl.appendChild(fileInput);

            return footerEl;
        }

        /**
         * Update the list display
         */
        updateList() {
            let listEl = this.moduleElement.querySelector('.' + this._config.listClassName);
            if (!listEl) return;

            // Clear existing content
            listEl.innerHTML = '';

            let currentList = this.getCurrentList();
            if (!currentList || !currentList.systems) return;

            // Calculate distances and sort
            let systemsWithDistance = this.calculateDistances(currentList.systems);
            
            // Get current page items
            let startIndex = this._currentPage * this._itemsPerPage;
            let pageItems = systemsWithDistance.slice(startIndex, startIndex + this._itemsPerPage);

            // Create list items
            pageItems.forEach(system => {
                let itemEl = this.createListItem(system);
                listEl.appendChild(itemEl);
            });

            // Update pagination
            this.updatePagination(systemsWithDistance.length);
        }

        /**
         * Create a list item element
         * @param {Object} system
         * @returns {HTMLElement}
         */
        createListItem(system) {
            let itemEl = Object.assign(document.createElement('div'), {
                className: this._config.listItemClassName
            });

            let nameEl = Object.assign(document.createElement('span'), {
                textContent: system.name,
                className: this._config.systemNameClassName
            });

            let distanceEl = Object.assign(document.createElement('span'), {
                textContent: system.distance === Infinity ? 'No route' : `${system.distance} jumps`,
                className: this._config.distanceClassName
            });

            // Add click handler to set destination
            itemEl.addEventListener('click', () => this.setDestination(system.name));

            itemEl.appendChild(nameEl);
            itemEl.appendChild(distanceEl);

            return itemEl;
        }

        /**
         * Calculate distances to systems from current position
         * @param {Array} systems
         * @returns {Array}
         */
        calculateDistances(systems) {
            let currentSystemName = this._systemData.name;
            
            // For now, return mock distances - in a real implementation, 
            // this would use the pathfinding system
            return systems.map(systemName => ({
                name: systemName,
                distance: Math.floor(Math.random() * 20) + 1 // Mock distance 1-20 jumps
            })).sort((a, b) => a.distance - b.distance);
        }

        /**
         * Set destination system
         * @param {string} systemName
         */
        setDestination(systemName) {
            // In a real implementation, this would integrate with the route planning system
            console.log(`Setting destination to: ${systemName}`);
            // TODO: Integrate with Pathfinder's route system
        }

        /**
         * Get current selected list
         * @returns {Object}
         */
        getCurrentList() {
            let lists = this.getDefaultLists();
            return lists[this._selectedListIndex] || lists[0];
        }

        /**
         * Get default blue loot buyer system lists
         * @returns {Array}
         */
        getDefaultLists() {
            return [
                {
                    name: 'Caldari State',
                    systems: [
                        'Jita', 'Dodixie', 'Hek', 'Rens', 'Amarr',
                        'Perimeter', 'Maurasi', 'Osmon', 'Sobaseki'
                    ]
                },
                {
                    name: 'Gallente Federation', 
                    systems: [
                        'Dodixie', 'Oursulaert', 'Algogille', 'Alentene',
                        'Cistuvaert', 'Aunia', 'Schmaeel'
                    ]
                },
                {
                    name: 'Minmatar Republic',
                    systems: [
                        'Rens', 'Hek', 'Gyerzen', 'Teonusude', 'Konora',
                        'Hadozeko', 'Osvetur'
                    ]
                },
                {
                    name: 'Amarr Empire',
                    systems: [
                        'Amarr', 'Niarja', 'Ashab', 'Sarum Prime', 
                        'Tash-Murkon Prime', 'Kador Prime'
                    ]
                },
                {
                    name: 'Wormhole Focused',
                    systems: [
                        'Jita', 'Amarr', 'Dodixie', 'Hek', 'Rens',
                        'Thera'
                    ]
                }
            ];
        }

        /**
         * Previous page
         */
        previousPage() {
            if (this._currentPage > 0) {
                this._currentPage--;
                this.updateList();
            }
        }

        /**
         * Next page
         */
        nextPage() {
            let currentList = this.getCurrentList();
            let totalItems = currentList.systems ? currentList.systems.length : 0;
            let maxPages = Math.ceil(totalItems / this._itemsPerPage);
            
            if (this._currentPage < maxPages - 1) {
                this._currentPage++;
                this.updateList();
            }
        }

        /**
         * Update pagination display
         * @param {number} totalItems
         */
        updatePagination(totalItems) {
            let pageInfoEl = this.moduleElement.querySelector('.' + this._config.pageInfoClassName);
            if (!pageInfoEl) return;

            let maxPages = Math.ceil(totalItems / this._itemsPerPage);
            pageInfoEl.textContent = `${this._currentPage + 1} / ${maxPages}`;

            // Update button states
            let prevBtn = this.moduleElement.querySelector('.' + this._config.paginationClassName + ' button:first-child');
            let nextBtn = this.moduleElement.querySelector('.' + this._config.paginationClassName + ' button:last-child');
            
            if (prevBtn) prevBtn.disabled = this._currentPage === 0;
            if (nextBtn) nextBtn.disabled = this._currentPage >= maxPages - 1;
        }

        /**
         * Import custom list
         * @param {Event} event
         */
        importList(event) {
            let file = event.target.files[0];
            if (!file) return;

            let reader = new FileReader();
            reader.onload = (e) => {
                try {
                    let data;
                    if (file.name.endsWith('.json')) {
                        data = JSON.parse(e.target.result);
                    } else {
                        // Treat as text file with one system per line
                        let lines = e.target.result.split('\n').map(line => line.trim()).filter(line => line);
                        data = {
                            name: 'Custom List',
                            systems: lines
                        };
                    }

                    if (data.systems && Array.isArray(data.systems)) {
                        this.addCustomList(data);
                    } else {
                        console.warn('Invalid file format. Expected JSON with systems array or text file with one system per line.');
                    }
                } catch (error) {
                    console.error('Error reading file: ' + error.message);
                }
            };
            reader.readAsText(file);
        }

        /**
         * Add custom list to selection
         * @param {Object} listData
         */
        addCustomList(listData) {
            // Add to dropdown
            let selectEl = this.moduleElement.querySelector('.' + this._config.selectClassName);
            if (!selectEl) return;

            let optionEl = Object.assign(document.createElement('option'), {
                value: selectEl.options.length,
                textContent: listData.name + ' (Custom)'
            });
            selectEl.appendChild(optionEl);

            // Store custom list (in a real implementation, this would be persistent)
            if (!this._customLists) this._customLists = [];
            this._customLists.push(listData);

            // Select the new list
            selectEl.value = selectEl.options.length - 1;
            this._selectedListIndex = selectEl.options.length - 1;
            this._currentPage = 0;
            this.updateList();
        }

        /**
         * Get all lists (default + custom)
         * @returns {Array}
         */
        getAllLists() {
            let lists = this.getDefaultLists();
            if (this._customLists) {
                lists = lists.concat(this._customLists);
            }
            return lists;
        }

        /**
         * init module
         */
        init(){
            super.init();
            // Initial list update
            this.updateList();
        }

        beforeHide(){
            super.beforeHide();
        }

        beforeDestroy(){
            super.beforeDestroy();
        }

        onSortableEvent(name, e){
            super.onSortableEvent(name, e);
        }
    };

    BlueLootModule.isPlugin = true;                            // module is defined as 'plugin'
    BlueLootModule.scope = 'system';                           // module scope controls how module gets updated and what type of data is injected
    BlueLootModule.sortArea = 'a';                             // default sortable area
    BlueLootModule.position = 16;                              // default sort/order position within sortable area
    BlueLootModule.label = 'Blue Loot';                        // static module label (e.g. description)

    BlueLootModule.defaultConfig = {
        className: 'pf-system-blueloot-module',                // class for module
        sortTargetAreas: ['a', 'b', 'c'],                     // sortable areas where module can be dragged into
        headline: 'Blue Loot Buyers',
        
        // CSS classes for components
        bodyClassName: 'pf-blueloot-body',
        headerClassName: 'pf-blueloot-header',
        listClassName: 'pf-blueloot-list',
        listItemClassName: 'pf-blueloot-item',
        systemNameClassName: 'pf-blueloot-system-name',
        distanceClassName: 'pf-blueloot-distance',
        paginationClassName: 'pf-blueloot-pagination',
        paginationBtnClassName: 'pf-blueloot-pagination-btn',
        pageInfoClassName: 'pf-blueloot-page-info',
        footerClassName: 'pf-blueloot-footer',
        importBtnClassName: 'pf-blueloot-import-btn',
        selectClassName: 'pf-blueloot-select'
    };

    return BlueLootModule;
});