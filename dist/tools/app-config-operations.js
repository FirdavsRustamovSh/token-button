System.register(["jimu-core","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************************************************************************!*\
  !*** ./your-extensions/widgets/custom-button/src/tools/app-config-operations.ts ***!
  \**********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppConfigOperation)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");


class AppConfigOperation {
    constructor() {
        this.id = 'button-app-config-operation';
    }
    /**
     * Cleanup the widget config when the useDataSource will be removed
     * @returns The updated appConfig
     */
    useDataSourceWillChange(appConfig, oldDataSourceId, newDataSourceId) {
        var _a, _b;
        const widgetJson = appConfig.widgets[this.widgetId];
        const config = widgetJson.config;
        const functionConfig = config.functionConfig;
        if (!functionConfig || !oldDataSourceId || !newDataSourceId) {
            return appConfig;
        }
        let newFunctionConfig;
        // If the new data source is derived from the same main data source with the old data source, replace the data source id in the expressions.
        if (jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.areDerivedFromSameMain(oldDataSourceId, newDataSourceId)) {
            newFunctionConfig = functionConfig
                .set('textExpression', jimu_core__WEBPACK_IMPORTED_MODULE_0__.expressionUtils.replaceDataSourceId(functionConfig.textExpression, oldDataSourceId, newDataSourceId))
                .set('toolTipExpression', jimu_core__WEBPACK_IMPORTED_MODULE_0__.expressionUtils.replaceDataSourceId(functionConfig.toolTipExpression, oldDataSourceId, newDataSourceId))
                .setIn(['linkParam', 'expression'], jimu_core__WEBPACK_IMPORTED_MODULE_0__.expressionUtils.replaceDataSourceId((_a = functionConfig.linkParam) === null || _a === void 0 ? void 0 : _a.expression, oldDataSourceId, newDataSourceId));
        }
        else { // If the new data source is not derived from the same main data source with the old data source, remove the expressions that use the old data source.
            const useDataSourceToRemove = widgetJson.useDataSources.find(useDs => useDs.dataSourceId === oldDataSourceId);
            if (useDataSourceToRemove) {
                newFunctionConfig = functionConfig.without('textExpression').without('toolTipExpression').set('linkParam', (_b = functionConfig.linkParam) === null || _b === void 0 ? void 0 : _b.without('expression'));
            }
        }
        if (newFunctionConfig) {
            const newAppConfig = appConfig.setIn(['widgets', this.widgetId, 'config', 'functionConfig'], newFunctionConfig);
            return newAppConfig;
        }
        else {
            return appConfig;
        }
    }
    /**
     * Update the button linkParam value when widget is copied
     * @returns The updated appConfig
     */
    afterWidgetCopied(sourceWidgetId, sourceAppConfig, destWidgetId, destAppConfig, contentMap) {
        if (!contentMap) { // no need to change widget linkage if it is not performed during a page copying
            return destAppConfig;
        }
        let newAppConfig = destAppConfig;
        const widgetJson = sourceAppConfig.widgets[sourceWidgetId];
        const config = widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.config;
        const originlinkParam = config.functionConfig.linkParam;
        const { linkParam, isChanged } = jimu_ui__WEBPACK_IMPORTED_MODULE_1__.utils.mapLinkParam(contentMap, originlinkParam);
        if (isChanged) {
            newAppConfig = newAppConfig.setIn(['widgets', destWidgetId, 'config', 'functionConfig', 'linkParam'], linkParam);
        }
        const textExpression = config.functionConfig.textExpression;
        const checkTextExpressionResult = jimu_core__WEBPACK_IMPORTED_MODULE_0__.expressionUtils.mapExpression(contentMap, textExpression);
        newAppConfig = checkTextExpressionResult.isChanged ? newAppConfig.setIn(['widgets', destWidgetId, 'config', 'functionConfig', 'textExpression'], checkTextExpressionResult.expression) : newAppConfig;
        const toolTipExpression = config.functionConfig.toolTipExpression;
        const checkToolTipExpressionResult = jimu_core__WEBPACK_IMPORTED_MODULE_0__.expressionUtils.mapExpression(contentMap, toolTipExpression);
        newAppConfig = checkToolTipExpressionResult.isChanged ? newAppConfig.setIn(['widgets', destWidgetId, 'config', 'functionConfig', 'toolTipExpression'], checkToolTipExpressionResult.expression) : newAppConfig;
        return newAppConfig;
    }
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jdXN0b20tYnV0dG9uL2Rpc3QvdG9vbHMvYXBwLWNvbmZpZy1vcGVyYXRpb25zLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7OztBQ0pzRTtBQUUxRjtBQUVoQixNQUFNLGtCQUFrQjtJQUF2QztRQUNFLE9BQUUsR0FBRyw2QkFBNkI7SUF3RXBDLENBQUM7SUFyRUM7OztPQUdHO0lBQ0gsdUJBQXVCLENBQUUsU0FBc0IsRUFBRSxlQUF1QixFQUFFLGVBQXVCOztRQUMvRixNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDbkQsTUFBTSxNQUFNLEdBQWEsVUFBVSxDQUFDLE1BQU07UUFDMUMsTUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWM7UUFFNUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQzVELE9BQU8sU0FBUztRQUNsQixDQUFDO1FBRUQsSUFBSSxpQkFBNkM7UUFDakQsNElBQTRJO1FBQzVJLElBQUksc0RBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLEVBQUUsZUFB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QWlCO1FBQ2pFLE1BQU0sNEJBQTRCLEdBQUcsc0RBQWUsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLGlCQUFpQixDQUFDO1FBQ2pHLFlBQVksR0FBRyw0QkFBNEIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxtQkFBbUIsQ0FBQyxFQUFFLDRCQUE0QixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZO1FBRTlNLE9BQU8sWUFBWTtJQUNyQixDQUFDO0NBRUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY3VzdG9tLWJ1dHRvbi9zcmMvdG9vbHMvYXBwLWNvbmZpZy1vcGVyYXRpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCB7IGRhdGFTb3VyY2VVdGlscywgdHlwZSBEdXBsaWNhdGVDb250ZXh0LCBleHByZXNzaW9uVXRpbHMsIHR5cGUgZXh0ZW5zaW9uU3BlYywgdHlwZSBJTUFwcENvbmZpZyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHR5cGUgeyBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IHsgdXRpbHMgfSBmcm9tICdqaW11LXVpJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwQ29uZmlnT3BlcmF0aW9uIGltcGxlbWVudHMgZXh0ZW5zaW9uU3BlYy5BcHBDb25maWdPcGVyYXRpb25zRXh0ZW5zaW9uIHtcclxuICBpZCA9ICdidXR0b24tYXBwLWNvbmZpZy1vcGVyYXRpb24nXHJcbiAgd2lkZ2V0SWQ6IHN0cmluZ1xyXG5cclxuICAvKipcclxuICAgKiBDbGVhbnVwIHRoZSB3aWRnZXQgY29uZmlnIHdoZW4gdGhlIHVzZURhdGFTb3VyY2Ugd2lsbCBiZSByZW1vdmVkXHJcbiAgICogQHJldHVybnMgVGhlIHVwZGF0ZWQgYXBwQ29uZmlnXHJcbiAgICovXHJcbiAgdXNlRGF0YVNvdXJjZVdpbGxDaGFuZ2UgKGFwcENvbmZpZzogSU1BcHBDb25maWcsIG9sZERhdGFTb3VyY2VJZDogc3RyaW5nLCBuZXdEYXRhU291cmNlSWQ6IHN0cmluZyk6IElNQXBwQ29uZmlnIHtcclxuICAgIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWcud2lkZ2V0c1t0aGlzLndpZGdldElkXVxyXG4gICAgY29uc3QgY29uZmlnOiBJTUNvbmZpZyA9IHdpZGdldEpzb24uY29uZmlnXHJcbiAgICBjb25zdCBmdW5jdGlvbkNvbmZpZyA9IGNvbmZpZy5mdW5jdGlvbkNvbmZpZ1xyXG5cclxuICAgIGlmICghZnVuY3Rpb25Db25maWcgfHwgIW9sZERhdGFTb3VyY2VJZCB8fCAhbmV3RGF0YVNvdXJjZUlkKSB7XHJcbiAgICAgIHJldHVybiBhcHBDb25maWdcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbmV3RnVuY3Rpb25Db25maWc6IElNQ29uZmlnWydmdW5jdGlvbkNvbmZpZyddXHJcbiAgICAvLyBJZiB0aGUgbmV3IGRhdGEgc291cmNlIGlzIGRlcml2ZWQgZnJvbSB0aGUgc2FtZSBtYWluIGRhdGEgc291cmNlIHdpdGggdGhlIG9sZCBkYXRhIHNvdXJjZSwgcmVwbGFjZSB0aGUgZGF0YSBzb3VyY2UgaWQgaW4gdGhlIGV4cHJlc3Npb25zLlxyXG4gICAgaWYgKGRhdGFTb3VyY2VVdGlscy5hcmVEZXJpdmVkRnJvbVNhbWVNYWluKG9sZERhdGFTb3VyY2VJZCwgbmV3RGF0YVNvdXJjZUlkKSkge1xyXG4gICAgICBuZXdGdW5jdGlvbkNvbmZpZyA9IGZ1bmN0aW9uQ29uZmlnXHJcbiAgICAgICAgLnNldCgndGV4dEV4cHJlc3Npb24nLCBleHByZXNzaW9uVXRpbHMucmVwbGFjZURhdGFTb3VyY2VJZChmdW5jdGlvbkNvbmZpZy50ZXh0RXhwcmVzc2lvbiwgb2xkRGF0YVNvdXJjZUlkLCBuZXdEYXRhU291cmNlSWQpKVxyXG4gICAgICAgIC5zZXQoJ3Rvb2xUaXBFeHByZXNzaW9uJywgZXhwcmVzc2lvblV0aWxzLnJlcGxhY2VEYXRhU291cmNlSWQoZnVuY3Rpb25Db25maWcudG9vbFRpcEV4cHJlc3Npb24sIG9sZERhdGFTb3VyY2VJZCwgbmV3RGF0YVNvdXJjZUlkKSlcclxuICAgICAgICAuc2V0SW4oWydsaW5rUGFyYW0nLCAnZXhwcmVzc2lvbiddLCBleHByZXNzaW9uVXRpbHMucmVwbGFjZURhdGFTb3VyY2VJZChmdW5jdGlvbkNvbmZpZy5saW5rUGFyYW0/LmV4cHJlc3Npb24sIG9sZERhdGFTb3VyY2VJZCwgbmV3RGF0YVNvdXJjZUlkKSlcclxuICAgIH0gZWxzZSB7IC8vIElmIHRoZSBuZXcgZGF0YSBzb3VyY2UgaXMgbm90IGRlcml2ZWQgZnJvbSB0aGUgc2FtZSBtYWluIGRhdGEgc291cmNlIHdpdGggdGhlIG9sZCBkYXRhIHNvdXJjZSwgcmVtb3ZlIHRoZSBleHByZXNzaW9ucyB0aGF0IHVzZSB0aGUgb2xkIGRhdGEgc291cmNlLlxyXG4gICAgICBjb25zdCB1c2VEYXRhU291cmNlVG9SZW1vdmUgPSB3aWRnZXRKc29uLnVzZURhdGFTb3VyY2VzLmZpbmQodXNlRHMgPT4gdXNlRHMuZGF0YVNvdXJjZUlkID09PSBvbGREYXRhU291cmNlSWQpXHJcbiAgICAgIGlmICh1c2VEYXRhU291cmNlVG9SZW1vdmUpIHtcclxuICAgICAgICBuZXdGdW5jdGlvbkNvbmZpZyA9IGZ1bmN0aW9uQ29uZmlnLndpdGhvdXQoJ3RleHRFeHByZXNzaW9uJykud2l0aG91dCgndG9vbFRpcEV4cHJlc3Npb24nKS5zZXQoJ2xpbmtQYXJhbScsIGZ1bmN0aW9uQ29uZmlnLmxpbmtQYXJhbT8ud2l0aG91dCgnZXhwcmVzc2lvbicpKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5ld0Z1bmN0aW9uQ29uZmlnKSB7XHJcbiAgICAgIGNvbnN0IG5ld0FwcENvbmZpZyA9IGFwcENvbmZpZy5zZXRJbihbJ3dpZGdldHMnLCB0aGlzLndpZGdldElkLCAnY29uZmlnJywgJ2Z1bmN0aW9uQ29uZmlnJ10sIG5ld0Z1bmN0aW9uQ29uZmlnKVxyXG4gICAgICByZXR1cm4gbmV3QXBwQ29uZmlnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gYXBwQ29uZmlnXHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSB0aGUgYnV0dG9uIGxpbmtQYXJhbSB2YWx1ZSB3aGVuIHdpZGdldCBpcyBjb3BpZWRcclxuICAgKiBAcmV0dXJucyBUaGUgdXBkYXRlZCBhcHBDb25maWdcclxuICAgKi9cclxuICBhZnRlcldpZGdldENvcGllZCAoXHJcbiAgICBzb3VyY2VXaWRnZXRJZDogc3RyaW5nLFxyXG4gICAgc291cmNlQXBwQ29uZmlnOiBJTUFwcENvbmZpZyxcclxuICAgIGRlc3RXaWRnZXRJZDogc3RyaW5nLFxyXG4gICAgZGVzdEFwcENvbmZpZzogSU1BcHBDb25maWcsXHJcbiAgICBjb250ZW50TWFwPzogRHVwbGljYXRlQ29udGV4dFxyXG4gICk6IElNQXBwQ29uZmlnIHtcclxuICAgIGlmICghY29udGVudE1hcCkgeyAvLyBubyBuZWVkIHRvIGNoYW5nZSB3aWRnZXQgbGlua2FnZSBpZiBpdCBpcyBub3QgcGVyZm9ybWVkIGR1cmluZyBhIHBhZ2UgY29weWluZ1xyXG4gICAgICByZXR1cm4gZGVzdEFwcENvbmZpZ1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBuZXdBcHBDb25maWcgPSBkZXN0QXBwQ29uZmlnXHJcbiAgICBjb25zdCB3aWRnZXRKc29uID0gc291cmNlQXBwQ29uZmlnLndpZGdldHNbc291cmNlV2lkZ2V0SWRdXHJcbiAgICBjb25zdCBjb25maWc6IElNQ29uZmlnID0gd2lkZ2V0SnNvbj8uY29uZmlnXHJcbiAgICBjb25zdCBvcmlnaW5saW5rUGFyYW0gPSBjb25maWcuZnVuY3Rpb25Db25maWcubGlua1BhcmFtXHJcbiAgICBjb25zdCB7IGxpbmtQYXJhbSwgaXNDaGFuZ2VkIH0gPSAgdXRpbHMubWFwTGlua1BhcmFtKGNvbnRlbnRNYXAsIG9yaWdpbmxpbmtQYXJhbSlcclxuICAgIGlmIChpc0NoYW5nZWQpIHtcclxuICAgICAgbmV3QXBwQ29uZmlnID0gbmV3QXBwQ29uZmlnLnNldEluKFsnd2lkZ2V0cycsIGRlc3RXaWRnZXRJZCwgJ2NvbmZpZycsICdmdW5jdGlvbkNvbmZpZycsICdsaW5rUGFyYW0nXSwgbGlua1BhcmFtKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRleHRFeHByZXNzaW9uID0gY29uZmlnLmZ1bmN0aW9uQ29uZmlnLnRleHRFeHByZXNzaW9uXHJcbiAgICBjb25zdCBjaGVja1RleHRFeHByZXNzaW9uUmVzdWx0ID0gZXhwcmVzc2lvblV0aWxzLm1hcEV4cHJlc3Npb24oY29udGVudE1hcCwgdGV4dEV4cHJlc3Npb24pXHJcbiAgICBuZXdBcHBDb25maWcgPSBjaGVja1RleHRFeHByZXNzaW9uUmVzdWx0LmlzQ2hhbmdlZCA/IG5ld0FwcENvbmZpZy5zZXRJbihbJ3dpZGdldHMnLCBkZXN0V2lkZ2V0SWQsICdjb25maWcnLCAnZnVuY3Rpb25Db25maWcnLCAndGV4dEV4cHJlc3Npb24nXSwgY2hlY2tUZXh0RXhwcmVzc2lvblJlc3VsdC5leHByZXNzaW9uKSA6IG5ld0FwcENvbmZpZ1xyXG5cclxuICAgIGNvbnN0IHRvb2xUaXBFeHByZXNzaW9uID0gY29uZmlnLmZ1bmN0aW9uQ29uZmlnLnRvb2xUaXBFeHByZXNzaW9uXHJcbiAgICBjb25zdCBjaGVja1Rvb2xUaXBFeHByZXNzaW9uUmVzdWx0ID0gZXhwcmVzc2lvblV0aWxzLm1hcEV4cHJlc3Npb24oY29udGVudE1hcCwgdG9vbFRpcEV4cHJlc3Npb24pXHJcbiAgICBuZXdBcHBDb25maWcgPSBjaGVja1Rvb2xUaXBFeHByZXNzaW9uUmVzdWx0LmlzQ2hhbmdlZCA/IG5ld0FwcENvbmZpZy5zZXRJbihbJ3dpZGdldHMnLCBkZXN0V2lkZ2V0SWQsICdjb25maWcnLCAnZnVuY3Rpb25Db25maWcnLCAndG9vbFRpcEV4cHJlc3Npb24nXSwgY2hlY2tUb29sVGlwRXhwcmVzc2lvblJlc3VsdC5leHByZXNzaW9uKSA6IG5ld0FwcENvbmZpZ1xyXG5cclxuICAgIHJldHVybiBuZXdBcHBDb25maWdcclxuICB9XHJcblxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==