System.register(["jimu-core","jimu-theme","jimu-ui","jimu-for-builder"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_theme__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_for_builder__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_theme__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_for_builder__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_theme__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_for_builder__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/custom-button/src/runtime/builder/quick-style.tsx":
/*!***********************************************************************************!*\
  !*** ./your-extensions/widgets/custom-button/src/runtime/builder/quick-style.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuickStyle: () => (/* binding */ QuickStyle)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_for_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-for-builder */ "jimu-for-builder");
/** @jsx jsx */




const THEMETYPES = [
    'default',
    'primary',
    'secondary',
    'tertiary',
    'danger',
    'link'
];
const getStyle = (appTheme, builderTheme) => {
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    width: 360px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${appTheme.sys.spacing[3]};
    padding: ${appTheme.sys.spacing[5]};
    .button-item{
      width: 100%;
      font-size: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(13)};
    }
    .quick-style-item{
      padding: ${appTheme.sys.spacing[2]};
      margin: 2px;
      &.quick-style-item-selected{
        outline: 2px solid ${builderTheme.sys.color.primary.light};
      }
      background-color: ${appTheme.sys.color.surface.background};
        cursor: pointer;
    }
  `;
};
const QuickStyle = (props) => {
    var _a, _b, _c;
    const { widgetId } = props;
    const config = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.useSelector((state) => {
        var _a;
        const appState = state.appStateInBuilder ? state.appStateInBuilder : state;
        return (_a = appState.appConfig.widgets[widgetId]) === null || _a === void 0 ? void 0 : _a.config;
    });
    const selectedType = !((_a = config === null || config === void 0 ? void 0 : config.styleConfig) === null || _a === void 0 ? void 0 : _a.useCustom) && ((_c = (_b = config === null || config === void 0 ? void 0 : config.styleConfig) === null || _b === void 0 ? void 0 : _b.themeStyle) === null || _c === void 0 ? void 0 : _c.quickStyleType) || 'default';
    const onChange = (t) => {
        let newConfig = config.setIn(['styleConfig', 'useCustom'], false);
        newConfig = newConfig.setIn(['styleConfig', 'themeStyle', 'quickStyleType'], t);
        newConfig = newConfig.set('styleConfig', newConfig.styleConfig.without('customStyle'));
        (0,jimu_for_builder__WEBPACK_IMPORTED_MODULE_3__.getAppConfigAction)().editWidgetConfig(widgetId, newConfig).exec();
    };
    const theme = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const theme2 = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_1__.useTheme2)();
    const isUseTheme2 = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_1__.useUseTheme2)();
    const appTheme = window.jimuConfig.isBuilder !== isUseTheme2 ? theme2 : theme;
    const builderTheme = window.jimuConfig.isBuilder !== isUseTheme2 ? theme : theme2;
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages);
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: getStyle(appTheme, builderTheme) },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_theme__WEBPACK_IMPORTED_MODULE_1__.ThemeSwitchComponent, { useTheme2: window.jimuConfig.isBuilder }, THEMETYPES.map((t, i) => (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: i, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('quick-style-item', { 'quick-style-item-selected': selectedType === t }), onClick: () => { onChange(t); } },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Link, { title: translate('variableButton'), role: "button", className: "button-item text-truncate", type: t }, translate('variableButton'))))));
};


/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-for-builder":
/*!***********************************!*\
  !*** external "jimu-for-builder" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_for_builder__;

/***/ }),

/***/ "jimu-theme":
/*!*****************************!*\
  !*** external "jimu-theme" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_theme__;

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
/*!*******************************************************************************!*\
  !*** ./your-extensions/widgets/custom-button/src/runtime/builder-support.tsx ***!
  \*******************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _builder_quick_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder/quick-style */ "./your-extensions/widgets/custom-button/src/runtime/builder/quick-style.tsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    QuickStyle: _builder_quick_style__WEBPACK_IMPORTED_MODULE_0__.QuickStyle
});

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jdXN0b20tYnV0dG9uL2Rpc3QvcnVudGltZS9idWlsZGVyLXN1cHBvcnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGVBQWU7QUFDb0w7QUFDL0c7QUFDbkI7QUFFWjtBQUVyRCxNQUFNLFVBQVUsR0FBc0I7SUFDcEMsU0FBUztJQUNULFNBQVM7SUFDVCxXQUFXO0lBQ1gsVUFBVTtJQUNWLFFBQVE7SUFDUixNQUFNO0NBQ1A7QUFFRCxNQUFNLFFBQVEsR0FBRyxDQUFDLFFBQTBCLEVBQUUsWUFBOEIsRUFBb0IsRUFBRTtJQUNoRyxPQUFPLDhDQUFHOzs7O1dBSUQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2VBQ25CLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs7O21CQUduQiwrQ0FBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7OztpQkFHbEIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzs7NkJBR1gsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUs7OzBCQUV2QyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVTs7O0dBRzVEO0FBQ0gsQ0FBQztBQUVNLE1BQU0sVUFBVSxHQUFHLENBQUMsS0FBNEQsRUFBRSxFQUFFOztJQUN6RixNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsS0FBSztJQUUxQixNQUFNLE1BQU0sR0FBRyxpREFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQWMsRUFBRSxFQUFFOztRQUN2RCxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsS0FBSztRQUMxRSxPQUFPLGNBQVEsQ0FBQyxTQUFTLENBQUMs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QyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7O0FDSkQ7QUFFbEQsaUVBQWU7SUFDYixVQUFVO0NBQ1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY3VzdG9tLWJ1dHRvbi9zcmMvcnVudGltZS9idWlsZGVyL3F1aWNrLXN0eWxlLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1mb3ItYnVpbGRlclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS10aGVtZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY3VzdG9tLWJ1dHRvbi9zcmMvcnVudGltZS9idWlsZGVyLXN1cHBvcnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIHR5cGUgVGhlbWVCdXR0b25UeXBlLCBjc3MsIHR5cGUgSU1UaGVtZVZhcmlhYmxlcywgdHlwZSBTZXJpYWxpemVkU3R5bGVzLCBjbGFzc05hbWVzLCBwb2xpc2hlZCwgaG9va3MsIHR5cGUgTW9iaWxlU2lkZVBhbmVsQ29udGVudE9wdGlvbnMsIFJlYWN0UmVkdXgsIHR5cGUgSU1TdGF0ZSB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgVGhlbWVTd2l0Y2hDb21wb25lbnQsIHVzZVRoZW1lLCB1c2VUaGVtZTIsIHVzZVVzZVRoZW1lMiB9IGZyb20gJ2ppbXUtdGhlbWUnXHJcbmltcG9ydCB7IExpbmssIGRlZmF1bHRNZXNzYWdlcyBhcyBqaW11VUlNZXNzYWdlcyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCB0eXBlIHsgVG9vbFNldHRpbmdQYW5lbFByb3BzIH0gZnJvbSAnamltdS1sYXlvdXRzL2xheW91dC1ydW50aW1lJ1xyXG5pbXBvcnQgeyBnZXRBcHBDb25maWdBY3Rpb24gfSBmcm9tICdqaW11LWZvci1idWlsZGVyJ1xyXG5cclxuY29uc3QgVEhFTUVUWVBFUzogVGhlbWVCdXR0b25UeXBlW10gPSBbXHJcbiAgJ2RlZmF1bHQnLFxyXG4gICdwcmltYXJ5JyxcclxuICAnc2Vjb25kYXJ5JyxcclxuICAndGVydGlhcnknLFxyXG4gICdkYW5nZXInLFxyXG4gICdsaW5rJ1xyXG5dXHJcblxyXG5jb25zdCBnZXRTdHlsZSA9IChhcHBUaGVtZTogSU1UaGVtZVZhcmlhYmxlcywgYnVpbGRlclRoZW1lOiBJTVRoZW1lVmFyaWFibGVzKTogU2VyaWFsaXplZFN0eWxlcyA9PiB7XHJcbiAgcmV0dXJuIGNzc2BcclxuICAgIHdpZHRoOiAzNjBweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gICAgZ2FwOiAke2FwcFRoZW1lLnN5cy5zcGFjaW5nWzNdfTtcclxuICAgIHBhZGRpbmc6ICR7YXBwVGhlbWUuc3lzLnNwYWNpbmdbNV19O1xyXG4gICAgLmJ1dHRvbi1pdGVte1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC1zaXplOiAke3BvbGlzaGVkLnJlbSgxMyl9O1xyXG4gICAgfVxyXG4gICAgLnF1aWNrLXN0eWxlLWl0ZW17XHJcbiAgICAgIHBhZGRpbmc6ICR7YXBwVGhlbWUuc3lzLnNwYWNpbmdbMl19O1xyXG4gICAgICBtYXJnaW46IDJweDtcclxuICAgICAgJi5xdWljay1zdHlsZS1pdGVtLXNlbGVjdGVke1xyXG4gICAgICAgIG91dGxpbmU6IDJweCBzb2xpZCAke2J1aWxkZXJUaGVtZS5zeXMuY29sb3IucHJpbWFyeS5saWdodH07XHJcbiAgICAgIH1cclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHthcHBUaGVtZS5zeXMuY29sb3Iuc3VyZmFjZS5iYWNrZ3JvdW5kfTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgYFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUXVpY2tTdHlsZSA9IChwcm9wczogVG9vbFNldHRpbmdQYW5lbFByb3BzIHwgTW9iaWxlU2lkZVBhbmVsQ29udGVudE9wdGlvbnMpID0+IHtcclxuICBjb25zdCB7IHdpZGdldElkIH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCBjb25maWcgPSBSZWFjdFJlZHV4LnVzZVNlbGVjdG9yKChzdGF0ZTogSU1TdGF0ZSkgPT4ge1xyXG4gICAgY29uc3QgYXBwU3RhdGUgPSBzdGF0ZS5hcHBTdGF0ZUluQnVpbGRlciA/IHN0YXRlLmFwcFN0YXRlSW5CdWlsZGVyIDogc3RhdGVcclxuICAgIHJldHVybiBhcHBTdGF0ZS5hcHBDb25maWcud2lkZ2V0c1t3aWRnZXRJZF0/LmNvbmZpZ1xyXG4gIH0pXHJcblxyXG4gIGNvbnN0IHNlbGVjdGVkVHlwZSA9ICFjb25maWc/LnN0eWxlQ29uZmlnPy51c2VDdXN0b20gJiYgY29uZmlnPy5zdHlsZUNvbmZpZz8udGhlbWVTdHlsZT8ucXVpY2tTdHlsZVR5cGUgfHwgJ2RlZmF1bHQnXHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKHQ6IFRoZW1lQnV0dG9uVHlwZSkgPT4ge1xyXG4gICAgbGV0IG5ld0NvbmZpZyA9IGNvbmZpZy5zZXRJbihbJ3N0eWxlQ29uZmlnJywgJ3VzZUN1c3RvbSddLCBmYWxzZSlcclxuICAgIG5ld0NvbmZpZyA9IG5ld0NvbmZpZy5zZXRJbihbJ3N0eWxlQ29uZmlnJywgJ3RoZW1lU3R5bGUnLCAncXVpY2tTdHlsZVR5cGUnXSwgdClcclxuICAgIG5ld0NvbmZpZyA9IG5ld0NvbmZpZy5zZXQoJ3N0eWxlQ29uZmlnJywgbmV3Q29uZmlnLnN0eWxlQ29uZmlnLndpdGhvdXQoJ2N1c3RvbVN0eWxlJykpXHJcbiAgICBnZXRBcHBDb25maWdBY3Rpb24oKS5lZGl0V2lkZ2V0Q29uZmlnKHdpZGdldElkLCBuZXdDb25maWcpLmV4ZWMoKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXHJcbiAgY29uc3QgdGhlbWUyID0gdXNlVGhlbWUyKClcclxuICBjb25zdCBpc1VzZVRoZW1lMiA9IHVzZVVzZVRoZW1lMigpXHJcbiAgY29uc3QgYXBwVGhlbWUgPSB3aW5kb3cuamltdUNvbmZpZy5pc0J1aWxkZXIgIT09IGlzVXNlVGhlbWUyID8gdGhlbWUyIDogdGhlbWVcclxuICBjb25zdCBidWlsZGVyVGhlbWUgPSB3aW5kb3cuamltdUNvbmZpZy5pc0J1aWxkZXIgIT09IGlzVXNlVGhlbWUyID8gdGhlbWUgOiB0aGVtZTJcclxuICBjb25zdCB0cmFuc2xhdGUgPSBob29rcy51c2VUcmFuc2xhdGlvbihqaW11VUlNZXNzYWdlcylcclxuXHJcbiAgcmV0dXJuIDxkaXYgY3NzPXtnZXRTdHlsZShhcHBUaGVtZSwgYnVpbGRlclRoZW1lKX0+XHJcbiAgICA8VGhlbWVTd2l0Y2hDb21wb25lbnQgdXNlVGhlbWUyPXt3aW5kb3cuamltdUNvbmZpZy5pc0J1aWxkZXJ9PlxyXG4gICAge1xyXG4gICAgICBUSEVNRVRZUEVTLm1hcCgodCwgaSkgPT5cclxuICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdxdWljay1zdHlsZS1pdGVtJywgeyAncXVpY2stc3R5bGUtaXRlbS1zZWxlY3RlZCc6IHNlbGVjdGVkVHlwZSA9PT0gdCB9KX0gb25DbGljaz17KCkgPT4geyBvbkNoYW5nZSh0KSB9fT5cclxuICAgICAgICAgIDxMaW5rIHRpdGxlPXt0cmFuc2xhdGUoJ3ZhcmlhYmxlQnV0dG9uJyl9XHJcbiAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24taXRlbSB0ZXh0LXRydW5jYXRlXCIgdHlwZT17dH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3RyYW5zbGF0ZSgndmFyaWFibGVCdXR0b24nKX1cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgPC9UaGVtZVN3aXRjaENvbXBvbmVudD5cclxuICA8L2Rpdj5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfZm9yX2J1aWxkZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV90aGVtZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHsgUXVpY2tTdHlsZSB9IGZyb20gJy4vYnVpbGRlci9xdWljay1zdHlsZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBRdWlja1N0eWxlXHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9