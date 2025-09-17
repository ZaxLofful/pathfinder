# Pathfinder Development Guide

## Overview
Pathfinder is a system mapping tool for EVE Online that helps players navigate wormhole space and k-space systems. It provides real-time collaboration features for corporation and alliance mapping operations.

## Project Structure

### Backend (PHP)
- `app/` - Main application code
  - `Controller/` - API controllers and web controllers
  - `Model/` - Database models for game data and user data
  - `Cron/` - Background tasks and data synchronization
  - `*.ini` - Configuration files

### Frontend (JavaScript)
- `js/app/` - Main application JavaScript
  - `ui/module/` - Modular components for the map interface
  - `util.js` - Utility functions for distance calculation, navigation, etc.
  - `init.js` - Application initialization and configuration
  - `module_map.js` - Module loading and management system

### Styling (SCSS)
- `sass/` - SCSS source files
  - `layout/module/` - Styles for individual modules
  - `_all.scss` - Module import manifest

### Build System
- `gulpfile.js` - Build configuration
- Uses Gulp for JavaScript concatenation, SCSS compilation, and asset optimization
- Key tasks:
  - `task:buildJs` - Build JavaScript files
  - `task:buildCss` - Build CSS from SCSS
  - `task:hintJS` - JavaScript linting

## Module Development

### Creating a New Plugin Module

1. **Create the module file** in `js/app/ui/module/your_module.js`:
```javascript
define([
    'jquery',
    'app/init', 
    'app/util',
    'module/base'
], ($, Init, Util, BaseModule) => {
    'use strict';

    let YourModule = class YourModule extends BaseModule {
        constructor(config = {}) {
            super(Object.assign({}, new.target.defaultConfig, config));
        }

        render(mapId, systemData) {
            // Required: implement module rendering
            this._bodyEl = Object.assign(document.createElement('div'), {
                className: this._config.bodyClassName
            });
            this.moduleElement.append(this._bodyEl);
            return this.moduleElement;
        }

        update(systemData) {
            // Handle system changes
            return super.update(systemData).then(systemData => new Promise(resolve => {
                // Your update logic here
                resolve({
                    action: 'update',
                    data: { module: this }
                });
            }));
        }
    };

    // Module configuration
    YourModule.isPlugin = true;
    YourModule.scope = 'system'; // 'system', 'connection', 'global', or 'plugin'
    YourModule.sortArea = 'a'; // 'a', 'b', or 'c'
    YourModule.position = 10; // Sort order within area
    YourModule.label = 'Your Module';

    YourModule.defaultConfig = {
        className: 'pf-your-module',
        sortTargetAreas: ['a', 'b', 'c'],
        headline: 'Your Module Title'
    };

    return YourModule;
});
```

2. **Add styling** in `sass/layout/module/_your_module.scss`:
```scss
.pf-your-module {
  .pf-module-body {
    // Your module styles
  }
}
```

3. **Import styles** in `sass/layout/module/_all.scss`:
```scss
@import "_your_module";
```

4. **Register the plugin** in `app/plugin.ini`:
```ini
[PLUGIN.MODULES]
YOUR_MODULE = ./app/ui/module/your_module
```

5. **Build the project**:
```bash
npx gulp task:buildJs
npx gulp task:buildCss
```

### Module Lifecycle

- `render(mapId, systemData)` - Initial rendering when module is created
- `init()` - Called after module is added to DOM
- `update(systemData)` - Called when current system changes
- `beforeHide()` - Called before module is hidden
- `beforeDestroy()` - Called before module is removed

### Utility Functions

Key utilities available in `Util`:
- `getNearBySystemData(currentSystemData, currentMapData, jumps)` - Calculate nearby systems within jump range
- `setDestination(type, destType, destData)` - Set navigation destination in-game
- `getCurrentMapData(mapId)` - Get current map data and configuration
- `getCurrentUserData()` - Get current user/character data

### Distance Calculation

```javascript
// Get systems within jump range
const nearByData = Util.getNearBySystemData(currentSystemData, {data: mapData}, maxJumps);

// Find specific system distance
function findDistanceInTree(nearByData, targetSystemId, currentDistance) {
    if (nearByData.systemData.id === targetSystemId) {
        return currentDistance;
    }
    for (const [systemId, childData] of Object.entries(nearByData.tree)) {
        const result = findDistanceInTree(childData, targetSystemId, currentDistance + 1);
        if (result !== null) return result;
    }
    return null;
}
```

### Local Storage

```javascript
// Module-scoped storage
const localStore = this.getLocalStore();
localStore.setItem('key', value);
const value = localStore.getItem('key');
```

## Database Models

### Key Models
- `SystemModel` - EVE Online solar systems
- `CorporationModel` - Corporation data (both player and NPC)
- `StationModel` - Stations and structures
- `MapModel` - User-created maps
- `CharacterModel` - Player characters

### NPC Corporation Systems
Many NPC corporations buy specific items. For "blue loot" (sleeper artifacts), key locations include:
- Research corporations in major trade hubs
- University corporations in faction space
- Deep Core Mining stations

## API Endpoints

### Key Endpoints
- `/api/System/setDestination` - Set in-game waypoints
- `/api/Rest/SystemSearch` - Search for systems by name
- Map data endpoints for real-time updates

## Testing and Development

### Build Process
1. Make changes to source files
2. Run `npx gulp task:buildJs` for JavaScript changes
3. Run `npx gulp task:buildCss` for style changes
4. Test in browser (module should appear in system information sidebar)

### Debugging
- Use browser dev tools to inspect module elements
- Console logging in module methods
- Check network tab for API calls

## Best Practices

### Module Development
- Always extend `BaseModule`
- Implement required `render()` method
- Use semantic CSS class names with `pf-` prefix
- Handle errors gracefully in async operations
- Clean up event listeners in `beforeDestroy()`

### Performance
- Use event delegation for dynamic content
- Limit DOM queries in update loops
- Cache expensive calculations
- Use pagination for large data sets

### UI/UX
- Follow existing design patterns
- Provide loading states for async operations
- Use consistent button styles and spacing
- Implement responsive design for smaller screens

## Game Integration

### EVE Online Integration
- Pathfinder connects to EVE's CREST/ESI API
- Character location updates automatically
- In-game waypoint setting via API
- Corporate and alliance data synchronization

### Wormhole Mechanics
- Wormhole connections have mass limits and lifespans
- Different wormhole types lead to different space types
- Pathfinder tracks connection status and stability

This guide should help you understand and contribute to the Pathfinder codebase effectively.