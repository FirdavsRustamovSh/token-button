System.register(["jimu-core","jimu-ui","jimu-for-builder","jimu-theme"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_for_builder__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_theme__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_for_builder__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_theme__, "__esModule", { value: true });
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
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_for_builder__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_theme__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./jimu-icons/svg/outlined/editor/brush.svg":
/*!**************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/brush.svg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M15.551.25c.45.356.58.989.307 1.496L11.696 9.49a1.967 1.967 0 0 1-2.958.621l-.996-.787a2.018 2.018 0 0 1-.12-3.054l6.42-5.959a1.16 1.16 0 0 1 1.509-.06m-.61.79a.18.18 0 0 0-.23.009l-6.42 5.96a1.01 1.01 0 0 0 .06 1.527l.997.787a.984.984 0 0 0 1.479-.31l4.162-7.745a.18.18 0 0 0-.047-.229M6.733 9.4l1.43 1.215a2.794 2.794 0 0 1-.507 4.602q-3.439 1.794-7.553-.522a.2.2 0 0 1 .087-.374q2.77-.164 2.771-2.334c0-1.063.299-1.96 1.18-2.59.88-.631 1.832-.457 2.592.003m.633 4.802c.125-.088.253-.178.353-.295a1.793 1.793 0 0 0-.205-2.53l-1.43-1.214a1 1 0 0 0-1.296-.002c-.56.472-.825 1.055-.825 1.826 0 1.22-1.19 2.713-1.987 2.713 1.3.517 3.745.799 5.212-.368q.086-.067.178-.13\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/*!*************************************************************************!*\
  !*** ./your-extensions/widgets/custom-button/src/tools/quick-style.tsx ***!
  \*************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuickStyle)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_icons_svg_outlined_editor_brush_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-icons/svg/outlined/editor/brush.svg */ "./jimu-icons/svg/outlined/editor/brush.svg");
/* harmony import */ var jimu_icons_svg_outlined_editor_brush_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jimu_icons_svg_outlined_editor_brush_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jimu_for_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-for-builder */ "jimu-for-builder");
/* harmony import */ var _runtime_builder_quick_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../runtime/builder/quick-style */ "./your-extensions/widgets/custom-button/src/runtime/builder/quick-style.tsx");
/** @jsx jsx */





class QuickStyle {
    constructor() {
        this.index = 2;
        this.id = 'button-quick-style';
        this.openWhenAdded = true;
    }
    visible(props) {
        return true;
    }
    getAppState() {
        const state = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState();
        const appState = state.appStateInBuilder ? state.appStateInBuilder : state;
        return appState;
    }
    getGroupId() {
        return null;
    }
    getTitle() {
        const intl = jimu_core__WEBPACK_IMPORTED_MODULE_0__.i18n.getIntl('_jimu');
        return intl ? intl.formatMessage({ id: 'quickStyle', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.quickStyle }) : 'Quick style';
    }
    getIcon() {
        return (jimu_icons_svg_outlined_editor_brush_svg__WEBPACK_IMPORTED_MODULE_2___default());
    }
    checked() {
        const state = this.getAppState();
        const browserSizeMode = state.browserSizeMode;
        if (browserSizeMode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.BrowserSizeMode.Small) {
            return this.isOpenInSidePanel;
        }
    }
    widgetToolbarStateChange(controllerId) {
        if (window.jimuConfig.isBuilder) {
            jimu_for_builder__WEBPACK_IMPORTED_MODULE_3__.builderAppSync.publishWidgetToolbarStateChangeToApp(controllerId, ['button-quick-style']);
        }
        else {
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetToolbarStateChange(controllerId, ['button-quick-style']));
        }
    }
    onClick(props) {
        const widgetId = props.layoutItem.widgetId;
        const state = this.getAppState();
        const browserSizeMode = state.browserSizeMode;
        if (browserSizeMode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.BrowserSizeMode.Small) {
            this.isOpenInSidePanel = !this.isOpenInSidePanel;
            const onClose = () => {
                this.isOpenInSidePanel = false;
                this.widgetToolbarStateChange(widgetId);
            };
            jimu_for_builder__WEBPACK_IMPORTED_MODULE_3__.appBuilderSync.publishSidePanelToApp({
                type: 'buttonQuickStyle',
                widgetId,
                uri: 'widgets/common/button/',
                onClose,
                active: this.isOpenInSidePanel
            });
        }
    }
    getSettingPanel(props) {
        const state = this.getAppState();
        const browserSizeMode = state.browserSizeMode;
        if (browserSizeMode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.BrowserSizeMode.Small) {
            return null;
        }
        return _runtime_builder_quick_style__WEBPACK_IMPORTED_MODULE_4__.QuickStyle;
    }
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jdXN0b20tYnV0dG9uL2Rpc3QvdG9vbHMvcXVpY2stc3R5bGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsZUFBZTtBQUNvTDtBQUMvRztBQUNuQjtBQUVaO0FBRXJELE1BQU0sVUFBVSxHQUFzQjtJQUNwQyxTQUFTO0lBQ1QsU0FBUztJQUNULFdBQVc7SUFDWCxVQUFVO0lBQ1YsUUFBUTtJQUNSLE1BQU07Q0FDUDtBQUVELE1BQU0sUUFBUSxHQUFHLENBQUMsUUFBMEIsRUFBRSxZQUE4QixFQUFvQixFQUFFO0lBQ2hHLE9BQU8sOENBQUc7Ozs7V0FJRCxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7ZUFDbkIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzs7bUJBR25CLCtDQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQzs7O2lCQUdsQixRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Ozs2QkFHWCxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSzs7MEJBRXZDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVOzs7R0FHNUQ7QUFDSCxDQUFDO0FBRU0sTUFBTSxVQUFVLEdBQUcsQ0FBQyxLQUE0RCxFQUFFLEVBQUU7O0lBQ3pGLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxLQUFLO0lBRTFCLE1BQU0sTUFBTSxHQUFHLGlEQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBYyxFQUFFLEVBQUU7O1FBQ3ZELE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxLQUFLO1FBQzFFLE9BQU8sY0FBUSxDQUFDLFNB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QzdDLElBQUksZUFBZSxLQUFLLHNEQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDOUMsT0FBTyxJQUFJO1FBQ2IsQ0FBQztRQUNELE9BQU8sb0VBQW1CO0lBQzVCLENBQUM7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9lZGl0b3IvYnJ1c2guc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jdXN0b20tYnV0dG9uL3NyYy9ydW50aW1lL2J1aWxkZXIvcXVpY2stc3R5bGUudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWZvci1idWlsZGVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXRoZW1lXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2N1c3RvbS1idXR0b24vc3JjL3Rvb2xzL3F1aWNrLXN0eWxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMTUuNTUxLjI1Yy40NS4zNTYuNTguOTg5LjMwNyAxLjQ5NkwxMS42OTYgOS40OWExLjk2NyAxLjk2NyAwIDAgMS0yLjk1OC42MjFsLS45OTYtLjc4N2EyLjAxOCAyLjAxOCAwIDAgMS0uMTItMy4wNTRsNi40Mi01Ljk1OWExLjE2IDEuMTYgMCAwIDEgMS41MDktLjA2bS0uNjEuNzlhLjE4LjE4IDAgMCAwLS4yMy4wMDlsLTYuNDIgNS45NmExLjAxIDEuMDEgMCAwIDAgLjA2IDEuNTI3bC45OTcuNzg3YS45ODQuOTg0IDAgMCAwIDEuNDc5LS4zMWw0LjE2Mi03Ljc0NWEuMTguMTggMCAwIDAtLjA0Ny0uMjI5TTYuNzMzIDkuNGwxLjQzIDEuMjE1YTIuNzk0IDIuNzk0IDAgMCAxLS41MDcgNC42MDJxLTMuNDM5IDEuNzk0LTcuNTUzLS41MjJhLjIuMiAwIDAgMSAuMDg3LS4zNzRxMi43Ny0uMTY0IDIuNzcxLTIuMzM0YzAtMS4wNjMuMjk5LTEuOTYgMS4xOC0yLjU5Ljg4LS42MzEgMS44MzItLjQ1NyAyLjU5Mi4wMDNtLjYzMyA0LjgwMmMuMTI1LS4wODguMjUzLS4xNzguMzUzLS4yOTVhMS43OTMgMS43OTMgMCAwIDAtLjIwNS0yLjUzbC0xLjQzLTEuMjE0YTEgMSAwIDAgMC0xLjI5Ni0uMDAyYy0uNTYuNDcyLS44MjUgMS4wNTUtLjgyNSAxLjgyNiAwIDEuMjItMS4xOSAyLjcxMy0xLjk4NyAyLjcxMyAxLjMuNTE3IDMuNzQ1Ljc5OSA1LjIxMi0uMzY4cS4wODYtLjA2Ny4xNzgtLjEzXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIHR5cGUgVGhlbWVCdXR0b25UeXBlLCBjc3MsIHR5cGUgSU1UaGVtZVZhcmlhYmxlcywgdHlwZSBTZXJpYWxpemVkU3R5bGVzLCBjbGFzc05hbWVzLCBwb2xpc2hlZCwgaG9va3MsIHR5cGUgTW9iaWxlU2lkZVBhbmVsQ29udGVudE9wdGlvbnMsIFJlYWN0UmVkdXgsIHR5cGUgSU1TdGF0ZSB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgVGhlbWVTd2l0Y2hDb21wb25lbnQsIHVzZVRoZW1lLCB1c2VUaGVtZTIsIHVzZVVzZVRoZW1lMiB9IGZyb20gJ2ppbXUtdGhlbWUnXHJcbmltcG9ydCB7IExpbmssIGRlZmF1bHRNZXNzYWdlcyBhcyBqaW11VUlNZXNzYWdlcyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCB0eXBlIHsgVG9vbFNldHRpbmdQYW5lbFByb3BzIH0gZnJvbSAnamltdS1sYXlvdXRzL2xheW91dC1ydW50aW1lJ1xyXG5pbXBvcnQgeyBnZXRBcHBDb25maWdBY3Rpb24gfSBmcm9tICdqaW11LWZvci1idWlsZGVyJ1xyXG5cclxuY29uc3QgVEhFTUVUWVBFUzogVGhlbWVCdXR0b25UeXBlW10gPSBbXHJcbiAgJ2RlZmF1bHQnLFxyXG4gICdwcmltYXJ5JyxcclxuICAnc2Vjb25kYXJ5JyxcclxuICAndGVydGlhcnknLFxyXG4gICdkYW5nZXInLFxyXG4gICdsaW5rJ1xyXG5dXHJcblxyXG5jb25zdCBnZXRTdHlsZSA9IChhcHBUaGVtZTogSU1UaGVtZVZhcmlhYmxlcywgYnVpbGRlclRoZW1lOiBJTVRoZW1lVmFyaWFibGVzKTogU2VyaWFsaXplZFN0eWxlcyA9PiB7XHJcbiAgcmV0dXJuIGNzc2BcclxuICAgIHdpZHRoOiAzNjBweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gICAgZ2FwOiAke2FwcFRoZW1lLnN5cy5zcGFjaW5nWzNdfTtcclxuICAgIHBhZGRpbmc6ICR7YXBwVGhlbWUuc3lzLnNwYWNpbmdbNV19O1xyXG4gICAgLmJ1dHRvbi1pdGVte1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC1zaXplOiAke3BvbGlzaGVkLnJlbSgxMyl9O1xyXG4gICAgfVxyXG4gICAgLnF1aWNrLXN0eWxlLWl0ZW17XHJcbiAgICAgIHBhZGRpbmc6ICR7YXBwVGhlbWUuc3lzLnNwYWNpbmdbMl19O1xyXG4gICAgICBtYXJnaW46IDJweDtcclxuICAgICAgJi5xdWljay1zdHlsZS1pdGVtLXNlbGVjdGVke1xyXG4gICAgICAgIG91dGxpbmU6IDJweCBzb2xpZCAke2J1aWxkZXJUaGVtZS5zeXMuY29sb3IucHJpbWFyeS5saWdodH07XHJcbiAgICAgIH1cclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHthcHBUaGVtZS5zeXMuY29sb3Iuc3VyZmFjZS5iYWNrZ3JvdW5kfTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgYFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUXVpY2tTdHlsZSA9IChwcm9wczogVG9vbFNldHRpbmdQYW5lbFByb3BzIHwgTW9iaWxlU2lkZVBhbmVsQ29udGVudE9wdGlvbnMpID0+IHtcclxuICBjb25zdCB7IHdpZGdldElkIH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCBjb25maWcgPSBSZWFjdFJlZHV4LnVzZVNlbGVjdG9yKChzdGF0ZTogSU1TdGF0ZSkgPT4ge1xyXG4gICAgY29uc3QgYXBwU3RhdGUgPSBzdGF0ZS5hcHBTdGF0ZUluQnVpbGRlciA/IHN0YXRlLmFwcFN0YXRlSW5CdWlsZGVyIDogc3RhdGVcclxuICAgIHJldHVybiBhcHBTdGF0ZS5hcHBDb25maWcud2lkZ2V0c1t3aWRnZXRJZF0/LmNvbmZpZ1xyXG4gIH0pXHJcblxyXG4gIGNvbnN0IHNlbGVjdGVkVHlwZSA9ICFjb25maWc/LnN0eWxlQ29uZmlnPy51c2VDdXN0b20gJiYgY29uZmlnPy5zdHlsZUNvbmZpZz8udGhlbWVTdHlsZT8ucXVpY2tTdHlsZVR5cGUgfHwgJ2RlZmF1bHQnXHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKHQ6IFRoZW1lQnV0dG9uVHlwZSkgPT4ge1xyXG4gICAgbGV0IG5ld0NvbmZpZyA9IGNvbmZpZy5zZXRJbihbJ3N0eWxlQ29uZmlnJywgJ3VzZUN1c3RvbSddLCBmYWxzZSlcclxuICAgIG5ld0NvbmZpZyA9IG5ld0NvbmZpZy5zZXRJbihbJ3N0eWxlQ29uZmlnJywgJ3RoZW1lU3R5bGUnLCAncXVpY2tTdHlsZVR5cGUnXSwgdClcclxuICAgIG5ld0NvbmZpZyA9IG5ld0NvbmZpZy5zZXQoJ3N0eWxlQ29uZmlnJywgbmV3Q29uZmlnLnN0eWxlQ29uZmlnLndpdGhvdXQoJ2N1c3RvbVN0eWxlJykpXHJcbiAgICBnZXRBcHBDb25maWdBY3Rpb24oKS5lZGl0V2lkZ2V0Q29uZmlnKHdpZGdldElkLCBuZXdDb25maWcpLmV4ZWMoKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXHJcbiAgY29uc3QgdGhlbWUyID0gdXNlVGhlbWUyKClcclxuICBjb25zdCBpc1VzZVRoZW1lMiA9IHVzZVVzZVRoZW1lMigpXHJcbiAgY29uc3QgYXBwVGhlbWUgPSB3aW5kb3cuamltdUNvbmZpZy5pc0J1aWxkZXIgIT09IGlzVXNlVGhlbWUyID8gdGhlbWUyIDogdGhlbWVcclxuICBjb25zdCBidWlsZGVyVGhlbWUgPSB3aW5kb3cuamltdUNvbmZpZy5pc0J1aWxkZXIgIT09IGlzVXNlVGhlbWUyID8gdGhlbWUgOiB0aGVtZTJcclxuICBjb25zdCB0cmFuc2xhdGUgPSBob29rcy51c2VUcmFuc2xhdGlvbihqaW11VUlNZXNzYWdlcylcclxuXHJcbiAgcmV0dXJuIDxkaXYgY3NzPXtnZXRTdHlsZShhcHBUaGVtZSwgYnVpbGRlclRoZW1lKX0+XHJcbiAgICA8VGhlbWVTd2l0Y2hDb21wb25lbnQgdXNlVGhlbWUyPXt3aW5kb3cuamltdUNvbmZpZy5pc0J1aWxkZXJ9PlxyXG4gICAge1xyXG4gICAgICBUSEVNRVRZUEVTLm1hcCgodCwgaSkgPT5cclxuICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdxdWljay1zdHlsZS1pdGVtJywgeyAncXVpY2stc3R5bGUtaXRlbS1zZWxlY3RlZCc6IHNlbGVjdGVkVHlwZSA9PT0gdCB9KX0gb25DbGljaz17KCkgPT4geyBvbkNoYW5nZSh0KSB9fT5cclxuICAgICAgICAgIDxMaW5rIHRpdGxlPXt0cmFuc2xhdGUoJ3ZhcmlhYmxlQnV0dG9uJyl9XHJcbiAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24taXRlbSB0ZXh0LXRydW5jYXRlXCIgdHlwZT17dH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3RyYW5zbGF0ZSgndmFyaWFibGVCdXR0b24nKX1cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgPC9UaGVtZVN3aXRjaENvbXBvbmVudD5cclxuICA8L2Rpdj5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfZm9yX2J1aWxkZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV90aGVtZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsgdHlwZSBleHRlbnNpb25TcGVjLCBhcHBBY3Rpb25zLCBnZXRBcHBTdG9yZSwgdHlwZSBMYXlvdXRDb250ZXh0VG9vbFByb3BzLCBpMThuLCBCcm93c2VyU2l6ZU1vZGUgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IGRlZmF1bHRNZXNzYWdlcyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCBCcnVzaE91dGxpbmVkIGZyb20gJ2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2VkaXRvci9icnVzaC5zdmcnXHJcbmltcG9ydCB7IGFwcEJ1aWxkZXJTeW5jLCBidWlsZGVyQXBwU3luYyB9IGZyb20gJ2ppbXUtZm9yLWJ1aWxkZXInXHJcbmltcG9ydCB7IFF1aWNrU3R5bGUgYXMgUXVpY2tTdHlsZUNvbXBvbmVudCB9IGZyb20gJy4uL3J1bnRpbWUvYnVpbGRlci9xdWljay1zdHlsZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1aWNrU3R5bGUgaW1wbGVtZW50cyBleHRlbnNpb25TcGVjLkNvbnRleHRUb29sRXh0ZW5zaW9uIHtcclxuICBpbmRleCA9IDJcclxuICBpZCA9ICdidXR0b24tcXVpY2stc3R5bGUnXHJcbiAgd2lkZ2V0SWQ6IHN0cmluZ1xyXG4gIGlzT3BlbkluU2lkZVBhbmVsOiBib29sZWFuXHJcbiAgb3BlbldoZW5BZGRlZCA9IHRydWVcclxuXHJcbiAgdmlzaWJsZSAocHJvcHM6IExheW91dENvbnRleHRUb29sUHJvcHMpIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBnZXRBcHBTdGF0ZSAoKSB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKVxyXG4gICAgY29uc3QgYXBwU3RhdGUgPSBzdGF0ZS5hcHBTdGF0ZUluQnVpbGRlciA/IHN0YXRlLmFwcFN0YXRlSW5CdWlsZGVyIDogc3RhdGVcclxuICAgIHJldHVybiBhcHBTdGF0ZVxyXG4gIH1cclxuXHJcbiAgZ2V0R3JvdXBJZCAoKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuXHJcbiAgZ2V0VGl0bGUgKCkge1xyXG4gICAgY29uc3QgaW50bCA9IGkxOG4uZ2V0SW50bCgnX2ppbXUnKVxyXG4gICAgcmV0dXJuIGludGwgPyBpbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ3F1aWNrU3R5bGUnLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLnF1aWNrU3R5bGUgfSkgOiAnUXVpY2sgc3R5bGUnXHJcbiAgfVxyXG5cclxuICBnZXRJY29uICgpIHtcclxuICAgIHJldHVybiBCcnVzaE91dGxpbmVkXHJcbiAgfVxyXG5cclxuICBjaGVja2VkICgpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRBcHBTdGF0ZSgpXHJcbiAgICBjb25zdCBicm93c2VyU2l6ZU1vZGUgPSBzdGF0ZS5icm93c2VyU2l6ZU1vZGVcclxuICAgIGlmIChicm93c2VyU2l6ZU1vZGUgPT09IEJyb3dzZXJTaXplTW9kZS5TbWFsbCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5pc09wZW5JblNpZGVQYW5lbFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd2lkZ2V0VG9vbGJhclN0YXRlQ2hhbmdlIChjb250cm9sbGVySWQ6IHN0cmluZykge1xyXG4gICAgaWYgKHdpbmRvdy5qaW11Q29uZmlnLmlzQnVpbGRlcikge1xyXG4gICAgICBidWlsZGVyQXBwU3luYy5wdWJsaXNoV2lkZ2V0VG9vbGJhclN0YXRlQ2hhbmdlVG9BcHAoY29udHJvbGxlcklkLCBbJ2J1dHRvbi1xdWljay1zdHlsZSddKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ2V0QXBwU3RvcmUoKS5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFRvb2xiYXJTdGF0ZUNoYW5nZShjb250cm9sbGVySWQsIFsnYnV0dG9uLXF1aWNrLXN0eWxlJ10pKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DbGljayAocHJvcHM6IExheW91dENvbnRleHRUb29sUHJvcHMpIHtcclxuICAgIGNvbnN0IHdpZGdldElkID0gcHJvcHMubGF5b3V0SXRlbS53aWRnZXRJZFxyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldEFwcFN0YXRlKClcclxuICAgIGNvbnN0IGJyb3dzZXJTaXplTW9kZSA9IHN0YXRlLmJyb3dzZXJTaXplTW9kZVxyXG4gICAgaWYgKGJyb3dzZXJTaXplTW9kZSA9PT0gQnJvd3NlclNpemVNb2RlLlNtYWxsKSB7XHJcbiAgICAgIHRoaXMuaXNPcGVuSW5TaWRlUGFuZWwgPSAhdGhpcy5pc09wZW5JblNpZGVQYW5lbFxyXG4gICAgICBjb25zdCBvbkNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNPcGVuSW5TaWRlUGFuZWwgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMud2lkZ2V0VG9vbGJhclN0YXRlQ2hhbmdlKHdpZGdldElkKVxyXG4gICAgICB9XHJcbiAgICAgIGFwcEJ1aWxkZXJTeW5jLnB1Ymxpc2hTaWRlUGFuZWxUb0FwcCh7XHJcbiAgICAgICAgdHlwZTogJ2J1dHRvblF1aWNrU3R5bGUnLFxyXG4gICAgICAgIHdpZGdldElkLFxyXG4gICAgICAgIHVyaTogJ3dpZGdldHMvY29tbW9uL2J1dHRvbi8nLFxyXG4gICAgICAgIG9uQ2xvc2UsXHJcbiAgICAgICAgYWN0aXZlOiB0aGlzLmlzT3BlbkluU2lkZVBhbmVsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRTZXR0aW5nUGFuZWwgKHByb3BzOiBMYXlvdXRDb250ZXh0VG9vbFByb3BzKSB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0QXBwU3RhdGUoKVxyXG4gICAgY29uc3QgYnJvd3NlclNpemVNb2RlID0gc3RhdGUuYnJvd3NlclNpemVNb2RlXHJcbiAgICBpZiAoYnJvd3NlclNpemVNb2RlID09PSBCcm93c2VyU2l6ZU1vZGUuU21hbGwpIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIHJldHVybiBRdWlja1N0eWxlQ29tcG9uZW50XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==