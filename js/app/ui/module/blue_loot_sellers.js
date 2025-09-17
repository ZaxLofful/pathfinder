/**
 * Blue Loot Sellers module
 * Shows nearby systems with NPC corporations that buy blue loot items
 */

define([
    'jquery',
    'app/init',
    'app/util',
    'app/map/util',
    'module/base'
], ($, Init, Util, MapUtil, BaseModule) => {
    'use strict';

    let BlueLootSellersModule = class BlueLootSellersModule extends BaseModule {
        constructor(config = {}) {
            super(Object.assign({}, new.target.defaultConfig, config));
            this._currentPage = 0;
            this._itemsPerPage = 6;
            this._customLists = this.getCustomLists();
        }

        /**
         * Default lists of systems with NPC corporations that buy blue loot
         * @returns {Object}
         */
        getDefaultLists() {
            return {
                'Sleeper Tech Research': [
                    'Jita', 'Amarr', 'Dodixie', 'Rens', 'Hek'
                ],
                'Deep Core Mining': [
                    'Nonni', 'Jouvulen', 'Sobaseki', 'Akiainavas', 'Jita'
                ],
                'Imperial Academy': [
                    'Amarr', 'Hedion', 'Conoban', 'Sehmy', 'Pator'
                ],
                'University Caille': [
                    'Dodixie', 'Cistuvaert', 'Alentene', 'Ourapheh', 'Luminaire'
                ],
                'Republic University': [
                    'Rens', 'Frarn', 'Malukker', 'Pator', 'Hek'
                ]
            };
        }

        /**
         * Get custom lists from local storage
         * @returns {Object}
         */
        getCustomLists() {
            const localStore = this.getLocalStore();
            return localStore.getItem('customBlueLootLists') || {};
        }

        /**
         * Save custom lists to local storage
         * @param {Object} lists
         */
        saveCustomLists(lists) {
            const localStore = this.getLocalStore();
            localStore.setItem('customBlueLootLists', lists);
            this._customLists = lists;
        }

        /**
         * Custom header for this module
         * @returns {HTMLDivElement}
         */
        newHeaderElement() {
            let headEl = super.newHeaderElement();
            let toolbarEl = this.newHeadlineToolbarElement();
            
            // Import button
            let importIconEl = this.newIconElement([
                'fa-upload', 'fa-fw',
                'txt-color', 'txt-color-info',
                this._config.moduleHeadlineIconClass
            ]);
            importIconEl.setAttribute('title', 'Import custom list');
            importIconEl.onclick = () => this.showImportDialog();

            // Refresh button
            let refreshIconEl = this.newIconElement([
                'fa-sync', 'fa-fw',
                'txt-color', 'txt-color-success',
                this._config.moduleHeadlineIconClass
            ]);
            refreshIconEl.setAttribute('title', 'Refresh distances');
            refreshIconEl.onclick = () => this.refreshData();

            toolbarEl.append(importIconEl, refreshIconEl);
            headEl.append(toolbarEl);
            return headEl;
        }

        /**
         * Initial module render method
         * @param {number} mapId
         * @param {Object} systemData
         * @returns {HTMLElement}
         */
        render(mapId, systemData) {
            this._systemData = systemData;
            this._mapId = mapId;

            // Create module body
            this._bodyEl = Object.assign(document.createElement('div'), {
                className: this._config.bodyClassName
            });

            // Create list selector
            this.createListSelector();

            // Create system list container
            this.createSystemList();

            // Create pagination controls
            this.createPaginationControls();

            this.moduleElement.append(this._bodyEl);

            // Initialize with first default list
            this.switchToList(Object.keys(this.getDefaultLists())[0], 'default');

            return this.moduleElement;
        }

        /**
         * Create list selector dropdown
         */
        createListSelector() {
            const selectorContainer = Object.assign(document.createElement('div'), {
                className: 'pf-module-selector-container'
            });

            const selectorLabel = Object.assign(document.createElement('label'), {
                textContent: 'Blue Loot Buyers:',
                className: 'pf-module-selector-label'
            });

            this._listSelector = Object.assign(document.createElement('select'), {
                className: 'pf-module-selector'
            });

            this.updateListSelector();

            this._listSelector.onchange = (e) => {
                const [listName, listType] = e.target.value.split('|');
                this.switchToList(listName, listType);
            };

            selectorContainer.append(selectorLabel, this._listSelector);
            this._bodyEl.append(selectorContainer);
        }

        /**
         * Update list selector options
         */
        updateListSelector() {
            this._listSelector.innerHTML = '';
            
            // Add default lists
            const defaultLists = this.getDefaultLists();
            if (Object.keys(defaultLists).length > 0) {
                const defaultGroup = Object.assign(document.createElement('optgroup'), {
                    label: 'Default Lists'
                });

                for (const [listName, systems] of Object.entries(defaultLists)) {
                    const option = Object.assign(document.createElement('option'), {
                        value: `${listName}|default`,
                        textContent: `${listName} (${systems.length})`
                    });
                    defaultGroup.append(option);
                }
                this._listSelector.append(defaultGroup);
            }

            // Add custom lists
            if (Object.keys(this._customLists).length > 0) {
                const customGroup = Object.assign(document.createElement('optgroup'), {
                    label: 'Custom Lists'
                });

                for (const [listName, systems] of Object.entries(this._customLists)) {
                    const option = Object.assign(document.createElement('option'), {
                        value: `${listName}|custom`,
                        textContent: `${listName} (${systems.length})`
                    });
                    customGroup.append(option);
                }
                this._listSelector.append(customGroup);
            }
        }

        /**
         * Create system list container
         */
        createSystemList() {
            this._systemListContainer = Object.assign(document.createElement('div'), {
                className: 'pf-module-system-list'
            });
            this._bodyEl.append(this._systemListContainer);
        }

        /**
         * Create pagination controls
         */
        createPaginationControls() {
            this._paginationContainer = Object.assign(document.createElement('div'), {
                className: 'pf-module-pagination'
            });

            this._prevButton = Object.assign(document.createElement('button'), {
                className: 'btn btn-sm btn-default',
                textContent: 'Previous'
            });
            this._prevButton.onclick = () => this.changePage(-1);

            this._pageInfo = Object.assign(document.createElement('span'), {
                className: 'pf-module-page-info'
            });

            this._nextButton = Object.assign(document.createElement('button'), {
                className: 'btn btn-sm btn-default',
                textContent: 'Next'
            });
            this._nextButton.onclick = () => this.changePage(1);

            this._paginationContainer.append(this._prevButton, this._pageInfo, this._nextButton);
            this._bodyEl.append(this._paginationContainer);
        }

        /**
         * Switch to a different list
         * @param {string} listName
         * @param {string} listType
         */
        switchToList(listName, listType) {
            this._currentListName = listName;
            this._currentListType = listType;
            this._currentPage = 0;
            
            const lists = listType === 'default' ? this.getDefaultLists() : this._customLists;
            this._currentSystems = lists[listName] || [];
            
            this.updateSystemList();
        }

        /**
         * Update system list with distance calculations
         */
        updateSystemList() {
            if (!this._currentSystems || this._currentSystems.length === 0) {
                this._systemListContainer.innerHTML = '<div class="text-muted">No systems in this list</div>';
                this.updatePagination();
                return;
            }

            // Calculate distances to all systems
            this.calculateDistances().then((systemsWithDistances) => {
                this.renderSystemList(systemsWithDistances);
                this.updatePagination();
            });
        }

        /**
         * Calculate distances to systems in current list
         * @returns {Promise<Array>}
         */
        calculateDistances() {
            return new Promise((resolve) => {
                const {config, data} = Util.getCurrentMapData(this._mapId);
                const currentSystemData = this._systemData;
                
                const systemsWithDistances = this._currentSystems.map(systemName => {
                    // Find system in map data by name
                    const systemData = data.systems.find(sys => 
                        sys.name && sys.name.toLowerCase() === systemName.toLowerCase()
                    );

                    if (systemData && systemData.id !== currentSystemData.id) {
                        // Calculate distance using existing utility function
                        const nearByData = Util.getNearBySystemData(currentSystemData, {data}, 20);
                        const distance = this.findDistanceInTree(nearByData, systemData.id, 0);
                        
                        return {
                            name: systemName,
                            systemData: systemData,
                            distance: distance !== null ? distance : 999
                        };
                    }

                    return {
                        name: systemName,
                        systemData: null,
                        distance: 999 // Unknown/unreachable
                    };
                }).filter(sys => sys.systemData !== null); // Remove unreachable systems

                // Sort by distance
                systemsWithDistances.sort((a, b) => a.distance - b.distance);
                resolve(systemsWithDistances);
            });
        }

        /**
         * Find distance to target system in nearBy tree
         * @param {Object} nearByData
         * @param {number} targetSystemId
         * @param {number} currentDistance
         * @returns {number|null}
         */
        findDistanceInTree(nearByData, targetSystemId, currentDistance) {
            if (nearByData.systemData.id === targetSystemId) {
                return currentDistance;
            }

            for (const [systemId, childData] of Object.entries(nearByData.tree)) {
                const result = this.findDistanceInTree(childData, targetSystemId, currentDistance + 1);
                if (result !== null) {
                    return result;
                }
            }

            return null;
        }

        /**
         * Render system list for current page
         * @param {Array} systemsWithDistances
         */
        renderSystemList(systemsWithDistances) {
            const startIndex = this._currentPage * this._itemsPerPage;
            const endIndex = startIndex + this._itemsPerPage;
            const pageItems = systemsWithDistances.slice(startIndex, endIndex);

            this._systemListContainer.innerHTML = '';

            if (pageItems.length === 0) {
                this._systemListContainer.innerHTML = '<div class="text-muted">No reachable systems found</div>';
                return;
            }

            const systemList = Object.assign(document.createElement('div'), {
                className: 'list-group'
            });

            pageItems.forEach(item => {
                const listItem = this.createSystemListItem(item);
                systemList.append(listItem);
            });

            this._systemListContainer.append(systemList);
        }

        /**
         * Create a system list item
         * @param {Object} item
         * @returns {HTMLElement}
         */
        createSystemListItem(item) {
            const listItem = Object.assign(document.createElement('div'), {
                className: 'list-group-item pf-module-system-item'
            });

            const nameSpan = Object.assign(document.createElement('span'), {
                textContent: item.name,
                className: 'pf-module-system-name'
            });

            const distanceSpan = Object.assign(document.createElement('span'), {
                textContent: item.distance === 999 ? 'N/A' : `${item.distance} jumps`,
                className: 'pf-module-system-distance pull-right'
            });

            if (item.distance <= 5) {
                distanceSpan.classList.add('text-success');
            } else if (item.distance <= 10) {
                distanceSpan.classList.add('text-warning');
            } else {
                distanceSpan.classList.add('text-danger');
            }

            // Set destination button
            const setDestButton = Object.assign(document.createElement('button'), {
                className: 'btn btn-xs btn-primary pf-module-set-dest-btn',
                textContent: 'Set Destination'
            });

            setDestButton.onclick = () => {
                if (item.systemData) {
                    Util.setDestination('set_destination', 'system', {
                        id: item.systemData.id,
                        name: item.name
                    });
                }
            };

            const buttonContainer = Object.assign(document.createElement('div'), {
                className: 'pf-module-system-actions'
            });
            buttonContainer.append(setDestButton);

            listItem.append(nameSpan, distanceSpan, buttonContainer);
            return listItem;
        }

        /**
         * Change page
         * @param {number} direction
         */
        changePage(direction) {
            const newPage = this._currentPage + direction;
            const maxPage = Math.max(0, Math.ceil(this._currentSystems.length / this._itemsPerPage) - 1);

            if (newPage >= 0 && newPage <= maxPage) {
                this._currentPage = newPage;
                this.updateSystemList();
            }
        }

        /**
         * Update pagination controls
         */
        updatePagination() {
            const totalPages = Math.max(1, Math.ceil(this._currentSystems.length / this._itemsPerPage));
            const currentPage = this._currentPage + 1;

            this._pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
            this._prevButton.disabled = this._currentPage === 0;
            this._nextButton.disabled = this._currentPage >= totalPages - 1;
        }

        /**
         * Show import dialog for custom lists
         */
        showImportDialog() {
            const modalHtml = `
                <div class="modal fade" tabindex="-1" role="dialog">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">Import Custom Blue Loot Seller List</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="listName">List Name:</label>
                                    <input type="text" class="form-control" id="listName" placeholder="Enter list name">
                                </div>
                                <div class="form-group">
                                    <label for="systemList">System Names (one per line):</label>
                                    <textarea class="form-control" id="systemList" rows="10" 
                                        placeholder="Jita&#10;Amarr&#10;Dodixie&#10;Rens&#10;Hek"></textarea>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                                <button type="button" class="btn btn-primary" id="importBtn">Import</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            const modal = $(modalHtml);
            $('body').append(modal);

            modal.find('#importBtn').on('click', () => {
                const listName = modal.find('#listName').val().trim();
                const systemListText = modal.find('#systemList').val().trim();

                if (!listName || !systemListText) {
                    this.showNotify({
                        title: 'Import Error',
                        text: 'Please enter both a list name and system names.',
                        type: 'error'
                    });
                    return;
                }

                const systems = systemListText.split('\n')
                    .map(s => s.trim())
                    .filter(s => s.length > 0);

                if (systems.length === 0) {
                    this.showNotify({
                        title: 'Import Error',
                        text: 'Please enter at least one system name.',
                        type: 'error'
                    });
                    return;
                }

                // Save the custom list
                this._customLists[listName] = systems;
                this.saveCustomLists(this._customLists);
                this.updateListSelector();

                // Switch to the new list
                this._listSelector.value = `${listName}|custom`;
                this.switchToList(listName, 'custom');

                modal.modal('hide');
            });

            modal.on('hidden.bs.modal', () => {
                modal.remove();
            });

            modal.modal('show');
        }

        /**
         * Refresh data
         */
        refreshData() {
            this.updateSystemList();
        }

        /**
         * Update module - called when system changes
         * @param {Object} systemData
         * @returns {Promise}
         */
        update(systemData) {
            return super.update(systemData).then(systemData => new Promise(resolve => {
                this._systemData = systemData;
                this.updateSystemList();

                resolve({
                    action: 'update',
                    data: {
                        module: this
                    }
                });
            }));
        }
    };

    BlueLootSellersModule.isPlugin = true;
    BlueLootSellersModule.scope = 'system';
    BlueLootSellersModule.sortArea = 'a';
    BlueLootSellersModule.position = 15;
    BlueLootSellersModule.label = 'Blue Loot Sellers';

    BlueLootSellersModule.defaultConfig = {
        className: 'pf-system-blue-loot-sellers-module',
        sortTargetAreas: ['a', 'b', 'c'],
        headline: 'Blue Loot Sellers',
        bodyClassName: 'pf-module-body'
    };

    return BlueLootSellersModule;
});