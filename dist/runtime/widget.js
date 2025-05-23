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

/***/ "./your-extensions/widgets/custom-button/src/config.ts":
/*!*************************************************************!*\
  !*** ./your-extensions/widgets/custom-button/src/config.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconPosition: () => (/* binding */ IconPosition)
/* harmony export */ });
var IconPosition;
(function (IconPosition) {
    IconPosition["Left"] = "LEFT";
    IconPosition["Right"] = "RIGHT";
})(IconPosition || (IconPosition = {}));


/***/ }),

/***/ "./your-extensions/widgets/custom-button/src/runtime/style.ts":
/*!********************************************************************!*\
  !*** ./your-extensions/widgets/custom-button/src/runtime/style.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStyle: () => (/* binding */ getStyle)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

function getStyle(theme) {
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    &>a {
      display: flex !important;
      justify-content: center;
    }

    .auto-size-icon {
      line-height: 1;
    }
    .widget-button-text{
        width: 100%;
        height: 100%;
    }
  `;
}


/***/ }),

/***/ "./your-extensions/widgets/custom-button/src/version-manager.ts":
/*!**********************************************************************!*\
  !*** ./your-extensions/widgets/custom-button/src/version-manager.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   versionManager: () => (/* binding */ versionManager)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");


class VersionManager extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.BaseVersionManager {
    constructor() {
        super(...arguments);
        this.versions = [{
                version: '1.0.0',
                description: 'The first release.',
                upgrader: (oldConfig) => {
                    let newConfig = oldConfig;
                    if (newConfig.getIn(['styleConfig', 'name'])) {
                        newConfig = newConfig.set('styleConfig', newConfig.styleConfig.without('name'));
                    }
                    if (newConfig.getIn(['styleConfig', 'customStyle'])) {
                        newConfig = newConfig.set('styleConfig', newConfig.styleConfig.without('customStyle'));
                    }
                    if (newConfig.getIn(['styleConfig', 'themeStyle', 'quickStyleType'])) {
                        newConfig = newConfig.setIn(['styleConfig', 'themeStyle'], { quickStyleType: newConfig.styleConfig.themeStyle.quickStyleType });
                    }
                    newConfig = newConfig.setIn(['styleConfig', 'useCustom'], false);
                    return newConfig;
                }
            }, {
                version: '1.1.0',
                description: '1.1.0',
                upgrader: (oldConfig) => {
                    let newConfig = oldConfig;
                    if (newConfig.getIn(['styleConfig', 'useCustom']) && newConfig.getIn(['styleConfig', 'customStyle', 'regular', 'border', 'width'])) {
                        newConfig = newConfig.setIn(['styleConfig', 'customStyle', 'regular', 'border', 'width'], jimu_ui__WEBPACK_IMPORTED_MODULE_1__.utils.stringOfLinearUnit(newConfig.getIn(['styleConfig', 'customStyle', 'regular', 'border', 'width'])));
                    }
                    if (newConfig.getIn(['styleConfig', 'useCustom']) && newConfig.getIn(['styleConfig', 'customStyle', 'hover', 'border', 'width'])) {
                        newConfig = newConfig.setIn(['styleConfig', 'customStyle', 'hover', 'border', 'width'], jimu_ui__WEBPACK_IMPORTED_MODULE_1__.utils.stringOfLinearUnit(newConfig.getIn(['styleConfig', 'customStyle', 'hover', 'border', 'width'])));
                    }
                    return newConfig;
                }
            }, {
                version: '1.12.0',
                description: 'fix icon picker config',
                upgrader: (oldConfig) => {
                    let newConfig = oldConfig;
                    if (newConfig.getIn(['functionConfig', 'icon', 'data'])) {
                        const iconResult = {
                            svg: newConfig.getIn(['functionConfig', 'icon', 'data']),
                            properties: {
                                filename: ''
                            }
                        };
                        newConfig = newConfig.setIn(['functionConfig', 'icon', 'data'], iconResult);
                    }
                    return newConfig;
                }
            }];
    }
}
const versionManager = new VersionManager();


/***/ }),

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
/*!**********************************************************************!*\
  !*** ./your-extensions/widgets/custom-button/src/runtime/widget.tsx ***!
  \**********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./your-extensions/widgets/custom-button/src/config.ts");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./your-extensions/widgets/custom-button/src/runtime/style.ts");
/* harmony import */ var _version_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../version-manager */ "./your-extensions/widgets/custom-button/src/version-manager.ts");
/** @jsx jsx */





class Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        var _a, _b, _c, _d, _e;
        super(props);
        this.lastClickTimestamp = null;
        this.getTextFromProps = () => {
            var _a, _b, _c, _d;
            return typeof ((_b = (_a = this.props.config) === null || _a === void 0 ? void 0 : _a.functionConfig) === null || _b === void 0 ? void 0 : _b.text) === 'string'
                ? (_d = (_c = this.props.config) === null || _c === void 0 ? void 0 : _c.functionConfig) === null || _d === void 0 ? void 0 : _d.text
                : this.props.intl.formatMessage({ id: 'variableButton', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.variableButton });
        };
        this.getTipExpression = () => {
            var _a, _b;
            return (this.props.config && this.props.config.functionConfig && this.props.config.functionConfig.toolTipExpression &&
                this.props.config.functionConfig.toolTipExpression) ||
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                    name: '',
                    parts: [{ type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.String, exp: `"${((_b = (_a = this.props.config) === null || _a === void 0 ? void 0 : _a.functionConfig) === null || _b === void 0 ? void 0 : _b.toolTip) || ''}"` }]
                });
        };
        this.getTextExpression = () => {
            var _a, _b;
            return (this.props.config && this.props.config.functionConfig && this.props.config.functionConfig.textExpression &&
                this.props.config.functionConfig.textExpression) ||
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                    name: '',
                    parts: [{ type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.String, exp: `"${((_b = (_a = this.props.config) === null || _a === void 0 ? void 0 : _a.functionConfig) === null || _b === void 0 ? void 0 : _b.text) || this.getTextFromProps()}"` }]
                });
        };
        this.getUrlExpression = () => {
            const expression = this.props.config && this.props.config.functionConfig && this.props.config.functionConfig.linkParam &&
                this.props.config.functionConfig.linkParam && this.props.config.functionConfig.linkParam.expression;
            return expression || null;
        };
        this.onTextExpResolveChange = result => {
            if (result.isSuccessful) {
                this.setState({ text: result.value });
            }
            else {
                let res = '';
                const errorCode = result.value;
                if (errorCode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionResolverErrorCode.Failed) {
                    res = this.state.textExpression && this.state.textExpression.name;
                }
                this.setState({ text: res });
            }
        };
        this.onTipExpResolveChange = result => {
            if (result.isSuccessful) {
                this.setState({ toolTip: result.value });
            }
            else {
                this.setState({ toolTip: '' });
            }
        };
        this.onUrlExpResolveChange = result => {
            if (result.isSuccessful) {
                this.setState({ url: result.value });
            }
            else {
                let res = '';
                const errorCode = result.value;
                if (errorCode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionResolverErrorCode.Failed) {
                    res = this.state.urlExpression && this.state.urlExpression.name;
                }
                this.setState({ url: res });
            }
        };
        this.getWhetherUseQuickStyle = (config) => {
            return !!(config && config.styleConfig && config.styleConfig.themeStyle && config.styleConfig.themeStyle.quickStyleType);
        };
        this.getIconStyle = (regularIconProps, hoverIconProps) => {
            const r = regularIconProps || {};
            const h = hoverIconProps || {};
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      & img, & svg{
        color: ${r.color};
        fill: ${r.color};
        width: ${r.size}${jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DistanceUnits.PIXEL};
        height: ${r.size}${jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DistanceUnits.PIXEL};
      }
      &:hover{
        img, svg{
          color: ${h.color};
          fill: ${h.color};
          width: ${h.size}${jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DistanceUnits.PIXEL};
          height: ${h.size}${jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DistanceUnits.PIXEL};
        }
      }
    `;
        };
        this.removeUndefinedStyle = (style) => {
            if (!style) {
                return style;
            }
            const removedUndefinedStyle = {};
            Object.keys(style).forEach(styleName => {
                if ((typeof style[styleName] === 'string' && !style[styleName].includes('undefined')) ||
                    typeof style[styleName] === 'number') {
                    removedUndefinedStyle[styleName] = style[styleName];
                }
            });
            return removedUndefinedStyle;
        };
        this.getLinkComponent = () => {
            var _a, _b, _c;
            const config = this.props.config;
            const linkParam = config.functionConfig.linkParam;
            const text = this.state.text;
            const title = this.state.toolTip;
            const iconProperty = (_c = (_b = (_a = config.functionConfig) === null || _a === void 0 ? void 0 : _a.icon) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.properties;
            const iconName = (iconProperty === null || iconProperty === void 0 ? void 0 : iconProperty.isUploaded) ? iconProperty === null || iconProperty === void 0 ? void 0 : iconProperty.originalName : iconProperty === null || iconProperty === void 0 ? void 0 : iconProperty.filename;
            let accessibilityLabel = this.state.toolTip || text || iconName;
            let customStyle;
            let iconStyle;
            if (config.styleConfig && config.styleConfig.customStyle) {
                const regular = config.styleConfig.customStyle.regular;
                const hover = config.styleConfig.customStyle.hover;
                if (config.styleConfig.useCustom) {
                    const style = jimu_ui__WEBPACK_IMPORTED_MODULE_1__.styleUtils.toCSSStyle(regular && regular.without('iconProps').asMutable({ deep: true }));
                    const originalHoverStyle = jimu_ui__WEBPACK_IMPORTED_MODULE_1__.styleUtils.toCSSStyle(hover && hover.without('iconProps').asMutable({ deep: true }));
                    const hoverStyle = Object.assign(Object.assign({}, style), originalHoverStyle);
                    if (this.props.active && this.props.appMode !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.AppMode.Run) {
                        const widgetState = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().widgetsState[this.props.id] || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
                        customStyle = {
                            style: widgetState.isConfiguringHover
                                ? Object.assign(Object.assign({}, this.removeUndefinedStyle(style)), this.removeUndefinedStyle(hoverStyle)) : style,
                            hoverStyle
                        };
                        iconStyle = this.getIconStyle(widgetState.isConfiguringHover ? Object.assign(Object.assign({}, regular === null || regular === void 0 ? void 0 : regular.iconProps), hover === null || hover === void 0 ? void 0 : hover.iconProps) : regular === null || regular === void 0 ? void 0 : regular.iconProps, hover === null || hover === void 0 ? void 0 : hover.iconProps);
                    }
                    else {
                        customStyle = {
                            style,
                            hoverStyle
                        };
                        iconStyle = this.getIconStyle(regular && regular.iconProps, hover && hover.iconProps);
                    }
                }
            }
            const useQuickStyle = this.getWhetherUseQuickStyle(config);
            const themeStyle = useQuickStyle
                ? {
                    type: config.styleConfig.themeStyle.quickStyleType
                }
                : {
                    type: 'default'
                };
            const basicClassNames = 'widget-button-link text-truncate w-100 h-100 p-0 d-flex align-items-center justify-content-center';
            let queryObject;
            let target;
            let linkTo;
            if (linkParam && linkParam.linkType) {
                target = linkParam.openType;
                linkTo = {
                    linkType: linkParam.linkType
                };
                // const exbToken = localStorage.getItem('exb_auth')
                // console.log('exb',exbToken)
                let exbToken = '';
                try {
                    const rawLocal = localStorage.getItem('exb_auth');
                    const rawSession = sessionStorage.getItem('exb_auth');
                    if (rawLocal) {
                        const parsedLocal = JSON.parse(rawLocal);
                        if (parsedLocal === null || parsedLocal === void 0 ? void 0 : parsedLocal.token) {
                            exbToken = parsedLocal.token;
                        }
                    }
                    if (!exbToken && rawSession) {
                        const parsedSession = JSON.parse(rawSession);
                        if (parsedSession === null || parsedSession === void 0 ? void 0 : parsedSession.token) {
                            exbToken = parsedSession.token;
                        }
                    }
                }
                catch (err) {
                    console.warn('Failed to parse exb_auth:', err);
                }
                console.log('exb', exbToken);
                if (linkParam.linkType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.WebAddress) {
                    const baseUrl = this.state.url;
                    try {
                        const urlObj = new URL(baseUrl, window.location.origin);
                        urlObj.searchParams.set('token', exbToken);
                        linkTo.value = urlObj.toString();
                    }
                    catch (e) {
                        console.warn('Invalid URL:', baseUrl);
                        linkTo.value = baseUrl;
                    }
                }
                else {
                    linkTo.value = linkParam.value;
                    queryObject = this.props.queryObject;
                }
            }
            const icon = config.functionConfig.icon;
            const isRTL = this.props.isRTL;
            const leftIcon = icon && (!icon.position || icon.position === _config__WEBPACK_IMPORTED_MODULE_2__.IconPosition.Left) && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { icon: icon.data.svg, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)({ 'mr-2 ml-0': !!text && !isRTL, 'ml-2 mr-0': !!text && isRTL, 'mx-0': !text }), "aria-hidden": true });
            const rightIcon = icon && icon.position && icon.position === _config__WEBPACK_IMPORTED_MODULE_2__.IconPosition.Right && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { icon: icon.data.svg, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)({ 'ml-2 mr-0': !!text && !isRTL, 'mr-2 ml-0': !!text && isRTL, 'mx-0': !text }), "aria-hidden": true });
            if (target === '_blank') {
                accessibilityLabel = `${accessibilityLabel}, ${this.props.intl.formatMessage({ id: 'openInNewWindow' })}`;
            }
            const autoSize = this.props.autoWidth && this.props.autoHeight;
            const isIcon = icon && !text;
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Link, Object.assign({ to: linkTo, target: target, queryObject: queryObject, title: title, className: basicClassNames, role: 'button', customStyle: customStyle }, themeStyle, { css: iconStyle, "aria-label": accessibilityLabel }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('widget-button-text d-flex align-items-center justify-content-center', { 'auto-size-icon': autoSize && isIcon }) },
                    isRTL ? rightIcon : leftIcon,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: 'text-truncate' }, text),
                    isRTL ? leftIcon : rightIcon));
        };
        this.onClick = e => {
            const timestamp = (new Date()).getTime();
            // in case that both click and touchend be triggered in iOS
            if (this.lastClickTimestamp && timestamp - this.lastClickTimestamp < 200)
                return;
            this.lastClickTimestamp = timestamp;
            e.exbEventType = 'linkClick';
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageManager.getInstance().publishMessage(new jimu_core__WEBPACK_IMPORTED_MODULE_0__.ButtonClickMessage(this.props.id));
        };
        this.state = {
            text: this.getTextFromProps(),
            toolTip: ((_b = (_a = this.props.config) === null || _a === void 0 ? void 0 : _a.functionConfig) === null || _b === void 0 ? void 0 : _b.toolTip) || '',
            url: ((_e = (_d = (_c = this.props.config) === null || _c === void 0 ? void 0 : _c.functionConfig) === null || _d === void 0 ? void 0 : _d.linkParam) === null || _e === void 0 ? void 0 : _e.value) || '',
            textExpression: this.props.useDataSourcesEnabled && this.getTextExpression(),
            tipExpression: this.props.useDataSourcesEnabled && this.getTipExpression(),
            urlExpression: this.props.useDataSourcesEnabled && this.getUrlExpression()
        };
        this.domNode = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
    }
    componentDidUpdate(prevProps, prevState) {
        if (!this.props.useDataSourcesEnabled &&
            (this.props.config !== prevProps.config || prevProps.useDataSourcesEnabled)) {
            this.setState({
                text: this.getTextFromProps(),
                toolTip: this.props.config && this.props.config.functionConfig && this.props.config.functionConfig.toolTip,
                url: this.props.config && this.props.config.functionConfig && this.props.config.functionConfig.linkParam && this.props.config.functionConfig.linkParam.value
            });
        }
        if (this.props.useDataSourcesEnabled &&
            (this.props.config !== prevProps.config || !prevProps.useDataSourcesEnabled)) {
            this.setState({
                textExpression: this.getTextExpression(),
                tipExpression: this.getTipExpression(),
                urlExpression: this.getUrlExpression()
            });
        }
    }
    widgetWillRemove() {
        // Prevent "widgetWillRemove is not a function" error
    }
    render() {
        const isDataSourceUsed = this.props.useDataSourcesEnabled;
        const LinkComponent = this.getLinkComponent();
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "jimu-widget widget-button w-100 h-100", css: (0,_style__WEBPACK_IMPORTED_MODULE_3__.getStyle)(this.props.theme), ref: this.domNode, onClick: this.onClick, onTouchEnd: this.onClick, onKeyUp: evt => {
                if (evt.key === ' ' || evt.key === 'Enter') {
                    this.onClick(evt);
                }
            } },
            LinkComponent,
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: 'none' } }, isDataSourceUsed &&
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionResolverComponent, { useDataSources: this.props.useDataSources, expression: this.state.textExpression, onChange: this.onTextExpResolveChange, widgetId: this.props.id }),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionResolverComponent, { useDataSources: this.props.useDataSources, expression: this.state.tipExpression, onChange: this.onTipExpResolveChange, widgetId: this.props.id }),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionResolverComponent, { useDataSources: this.props.useDataSources, expression: this.state.urlExpression, onChange: this.onUrlExpResolveChange, widgetId: this.props.id })))));
    }
}
Widget.mapExtraStateProps = (state, ownProps) => {
    var _a;
    let selected = false;
    const selection = state.appRuntimeInfo.selection;
    if (selection && state.appConfig.layouts[selection.layoutId]) {
        const layoutItem = state.appConfig.layouts[selection.layoutId].content[selection.layoutItemId];
        selected = layoutItem && layoutItem.widgetId === ownProps.id;
    }
    const isInBuilder = state.appContext.isInBuilder;
    const active = isInBuilder && selected;
    return {
        active,
        appMode: state.appRuntimeInfo.appMode,
        queryObject: state.queryObject,
        isRTL: state.appContext.isRTL,
        browserSizeMode: state.browserSizeMode,
        uri: (_a = state.appConfig.widgets[ownProps.id]) === null || _a === void 0 ? void 0 : _a.uri
    };
};
Widget.versionManager = _version_manager__WEBPACK_IMPORTED_MODULE_4__.versionManager;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jdXN0b20tYnV0dG9uL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQSxJQUFZLFlBR1g7QUFIRCxXQUFZLFlBQVk7SUFDdEIsNkJBQWE7SUFDYiwrQkFBZTtBQUNqQixDQUFDLEVBSFcsWUFBWSxLQUFaLFlBQVksUUFHdkI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0I0RTtBQUV0RSxTQUFTLFFBQVEsQ0FBRSxLQUF1QjtJQUMvQyxPQUFPLDhDQUFHOzs7Ozs7Ozs7Ozs7O0dBYVQ7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQjhEO0FBQ3JCO0FBRTFDLE1BQU0sY0FBZSxTQUFRLHlEQUFrQjtJQUEvQzs7UUFDRSxhQUFRLEdBQUcsQ0FBQztnQkFDVixPQUFPLEVBQUUsT0FBTztnQkFDaEIsV0FBVyxFQUFFLG9CQUFvQjtnQkFDakMsUUFBUSxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUU7b0JBQ3RCLElBQUksU0FBUyxHQUFHLFNBQVM7b0JBRXpCLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUM7d0JBQzdDLFNBQVMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDakYsQ0FBQztvQkFFRCxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDO3dCQUNwRCxTQUFTLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ3hGLENBQUM7b0JBRUQsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxn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SztRQUM3QixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7UUFDdEMsR0FBRyxFQUFFLFdBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsMENBQUUsR0FBRztLQUMvQztBQUNILENBQUM7QUFFTSxxQkFBYyxHQUFHLDREQUFjO2lFQXJDbkIsTUFBTTtBQXdXbkIsU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY3VzdG9tLWJ1dHRvbi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jdXN0b20tYnV0dG9uL3NyYy9ydW50aW1lL3N0eWxlLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jdXN0b20tYnV0dG9uL3NyYy92ZXJzaW9uLW1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2N1c3RvbS1idXR0b24vc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEltbXV0YWJsZU9iamVjdCwgRXhwcmVzc2lvbiwgVGhlbWVCdXR0b25UeXBlLCBJY29uUHJvcHMsIEljb25SZXN1bHQsICBMaW5rUGFyYW0gfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB0eXBlIHsgU3R5bGVTZXR0aW5ncyB9IGZyb20gJ2ppbXUtdWknXHJcblxyXG5leHBvcnQgdHlwZSBJTUNvbmZpZyA9IEltbXV0YWJsZU9iamVjdDxDb25maWc+XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZyB7XHJcbiAgZnVuY3Rpb25Db25maWc6IEZ1bmN0aW9uQ29uZmlnXHJcbiAgc3R5bGVDb25maWc/OiBTdHlsZUNvbmZpZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZ1bmN0aW9uQ29uZmlnIHtcclxuICB0b29sVGlwPzogc3RyaW5nXHJcbiAgdGV4dD86IHN0cmluZ1xyXG4gIGljb24/OiBJY29uQ29uZmlnXHJcbiAgLyoqXHJcbiAgICogY3VzdG9tSWNvbnMgaXMgdXNlZCBmb3IgZGV2ZWxvcGVycyB0byBzZXQgY2VydGFpbiBpY29ucyBhcyBwcmVzZXQgaWNvbnMsIGl0IGNvdWxkIG5vdCBiZSB1cGxvYWRlZCBpbiB0aGUgYnVpbGRlci5cclxuICAgKiBUaGVzZSBjdXN0b20gaWNvbnMgY2FuJ3QgYmUgZGVsZXRlLlxyXG4gICAqL1xyXG4gIGN1c3RvbUljb25zPzogSWNvblJlc3VsdFtdXHJcbiAgdGV4dEV4cHJlc3Npb24/OiBFeHByZXNzaW9uXHJcbiAgdG9vbFRpcEV4cHJlc3Npb24/OiBFeHByZXNzaW9uXHJcbiAgbGlua1BhcmFtPzogTGlua1BhcmFtXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEljb25Qb3NpdGlvbiB7XHJcbiAgTGVmdCA9ICdMRUZUJyxcclxuICBSaWdodCA9ICdSSUdIVCdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJY29uQ29uZmlnIHtcclxuICBkYXRhOiBJY29uUmVzdWx0XHJcbiAgcG9zaXRpb246IEljb25Qb3NpdGlvblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlQ29uZmlnIHtcclxuICB1c2VDdXN0b206IGJvb2xlYW5cclxuICB0aGVtZVN0eWxlPzogVGhlbWVTdHlsZVxyXG4gIGN1c3RvbVN0eWxlPzogQ3VzdG9tU3R5bGVcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUaGVtZVN0eWxlIHtcclxuICBxdWlja1N0eWxlVHlwZTogVGhlbWVCdXR0b25UeXBlXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tU3R5bGUge1xyXG4gIHJlZ3VsYXI6IEFkdmFuY2VTdHlsZVNldHRpbmdzXHJcbiAgaG92ZXI6IEFkdmFuY2VTdHlsZVNldHRpbmdzXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWR2YW5jZVN0eWxlU2V0dGluZ3MgZXh0ZW5kcyBTdHlsZVNldHRpbmdzIHtcclxuICBpY29uUHJvcHM/OiBJY29uUHJvcHNcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXaWRnZXRTdGF0ZSB7XHJcbiAgaXNDb25maWd1cmluZ0hvdmVyPzogYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBJTUFkdmFuY2VTdHlsZVNldHRpbmdzID0gSW1tdXRhYmxlT2JqZWN0PEFkdmFuY2VTdHlsZVNldHRpbmdzPlxyXG5cclxuZXhwb3J0IHR5cGUgSU1JY29uUHJvcHMgPSBJbW11dGFibGVPYmplY3Q8SWNvblByb3BzPlxyXG5cclxuZXhwb3J0IHR5cGUgSU1DdXN0b21TdHlsZSA9IEltbXV0YWJsZU9iamVjdDxDdXN0b21TdHlsZT5cclxuXHJcbmV4cG9ydCB0eXBlIElNVGhlbWVTdHlsZSA9IEltbXV0YWJsZU9iamVjdDxUaGVtZVN0eWxlPlxyXG5cclxuZXhwb3J0IHR5cGUgSU1TdHlsZUNvbmZpZyA9IEltbXV0YWJsZU9iamVjdDxTdHlsZUNvbmZpZz5cclxuXHJcbmV4cG9ydCB0eXBlIElNSWNvblBvc2l0aW9uID0gSW1tdXRhYmxlT2JqZWN0PEljb25Qb3NpdGlvbj5cclxuXHJcbmV4cG9ydCB0eXBlIElNSWNvbkNvbmZpZyA9IEltbXV0YWJsZU9iamVjdDxJY29uQ29uZmlnPlxyXG5cclxuZXhwb3J0IHR5cGUgSU1XaWRnZXRTdGF0ZSA9IEltbXV0YWJsZU9iamVjdDxXaWRnZXRTdGF0ZT5cclxuIiwiaW1wb3J0IHsgdHlwZSBJTVRoZW1lVmFyaWFibGVzLCBjc3MsIHR5cGUgU2VyaWFsaXplZFN0eWxlcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHlsZSAodGhlbWU6IElNVGhlbWVWYXJpYWJsZXMpOiBTZXJpYWxpemVkU3R5bGVzIHtcclxuICByZXR1cm4gY3NzYFxyXG4gICAgJj5hIHtcclxuICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuYXV0by1zaXplLWljb24ge1xyXG4gICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIH1cclxuICAgIC53aWRnZXQtYnV0dG9uLXRleHR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gIGBcclxufVxyXG4iLCJpbXBvcnQgeyBCYXNlVmVyc2lvbk1hbmFnZXIsIHR5cGUgSWNvblJlc3VsdCB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdXRpbHMgYXMgdWlVdGlscyB9IGZyb20gJ2ppbXUtdWknXHJcblxyXG5jbGFzcyBWZXJzaW9uTWFuYWdlciBleHRlbmRzIEJhc2VWZXJzaW9uTWFuYWdlciB7XHJcbiAgdmVyc2lvbnMgPSBbe1xyXG4gICAgdmVyc2lvbjogJzEuMC4wJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIGZpcnN0IHJlbGVhc2UuJyxcclxuICAgIHVwZ3JhZGVyOiAob2xkQ29uZmlnKSA9PiB7XHJcbiAgICAgIGxldCBuZXdDb25maWcgPSBvbGRDb25maWdcclxuXHJcbiAgICAgIGlmIChuZXdDb25maWcuZ2V0SW4oWydzdHlsZUNvbmZpZycsICduYW1lJ10pKSB7XHJcbiAgICAgICAgbmV3Q29uZmlnID0gbmV3Q29uZmlnLnNldCgnc3R5bGVDb25maWcnLCBuZXdDb25maWcuc3R5bGVDb25maWcud2l0aG91dCgnbmFtZScpKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobmV3Q29uZmlnLmdldEluKFsnc3R5bGVDb25maWcnLCAnY3VzdG9tU3R5bGUnXSkpIHtcclxuICAgICAgICBuZXdDb25maWcgPSBuZXdDb25maWcuc2V0KCdzdHlsZUNvbmZpZycsIG5ld0NvbmZpZy5zdHlsZUNvbmZpZy53aXRob3V0KCdjdXN0b21TdHlsZScpKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobmV3Q29uZmlnLmdldEluKFsnc3R5bGVDb25maWcnLCAndGhlbWVTdHlsZScsICdxdWlja1N0eWxlVHlwZSddKSkge1xyXG4gICAgICAgIG5ld0NvbmZpZyA9IG5ld0NvbmZpZy5zZXRJbihbJ3N0eWxlQ29uZmlnJywgJ3RoZW1lU3R5bGUnXSwgeyBxdWlja1N0eWxlVHlwZTogbmV3Q29uZmlnLnN0eWxlQ29uZmlnLnRoZW1lU3R5bGUucXVpY2tTdHlsZVR5cGUgfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgbmV3Q29uZmlnID0gbmV3Q29uZmlnLnNldEluKFsnc3R5bGVDb25maWcnLCAndXNlQ3VzdG9tJ10sIGZhbHNlKVxyXG5cclxuICAgICAgcmV0dXJuIG5ld0NvbmZpZ1xyXG4gICAgfVxyXG4gIH0sIHtcclxuICAgIHZlcnNpb246ICcxLjEuMCcsXHJcbiAgICBkZXNjcmlwdGlvbjogJzEuMS4wJyxcclxuICAgIHVwZ3JhZGVyOiAob2xkQ29uZmlnKSA9PiB7XHJcbiAgICAgIGxldCBuZXdDb25maWcgPSBvbGRDb25maWdcclxuXHJcbiAgICAgIGlmIChuZXdDb25maWcuZ2V0SW4oWydzdHlsZUNvbmZpZycsICd1c2VDdXN0b20nXSkgJiYgbmV3Q29uZmlnLmdldEluKFsnc3R5bGVDb25maWcnLCAnY3VzdG9tU3R5bGUnLCAncmVndWxhcicsICdib3JkZXInLCAnd2lkdGgnXSkpIHtcclxuICAgICAgICBuZXdDb25maWcgPSBuZXdDb25maWcuc2V0SW4oXHJcbiAgICAgICAgICBbJ3N0eWxlQ29uZmlnJywgJ2N1c3RvbVN0eWxlJywgJ3JlZ3VsYXInLCAnYm9yZGVyJywgJ3dpZHRoJ10sXHJcbiAgICAgICAgICB1aVV0aWxzLnN0cmluZ09mTGluZWFyVW5pdChuZXdDb25maWcuZ2V0SW4oWydzdHlsZUNvbmZpZycsICdjdXN0b21TdHlsZScsICdyZWd1bGFyJywgJ2JvcmRlcicsICd3aWR0aCddKSlcclxuICAgICAgICApXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChuZXdDb25maWcuZ2V0SW4oWydzdHlsZUNvbmZpZycsICd1c2VDdXN0b20nXSkgJiYgbmV3Q29uZmlnLmdldEluKFsnc3R5bGVDb25maWcnLCAnY3VzdG9tU3R5bGUnLCAnaG92ZXInLCAnYm9yZGVyJywgJ3dpZHRoJ10pKSB7XHJcbiAgICAgICAgbmV3Q29uZmlnID0gbmV3Q29uZmlnLnNldEluKFxyXG4gICAgICAgICAgWydzdHlsZUNvbmZpZycsICdjdXN0b21TdHlsZScsICdob3ZlcicsICdib3JkZXInLCAnd2lkdGgnXSxcclxuICAgICAgICAgIHVpVXRpbHMuc3RyaW5nT2ZMaW5lYXJVbml0KG5ld0NvbmZpZy5nZXRJbihbJ3N0eWxlQ29uZmlnJywgJ2N1c3RvbVN0eWxlJywgJ2hvdmVyJywgJ2JvcmRlcicsICd3aWR0aCddKSlcclxuICAgICAgICApXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBuZXdDb25maWdcclxuICAgIH1cclxuICB9LCB7XHJcbiAgICB2ZXJzaW9uOiAnMS4xMi4wJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnZml4IGljb24gcGlja2VyIGNvbmZpZycsXHJcbiAgICB1cGdyYWRlcjogKG9sZENvbmZpZykgPT4ge1xyXG4gICAgICBsZXQgbmV3Q29uZmlnID0gb2xkQ29uZmlnXHJcblxyXG4gICAgICBpZiAobmV3Q29uZmlnLmdldEluKFsnZnVuY3Rpb25Db25maWcnLCAnaWNvbicsICdkYXRhJ10pKSB7XHJcbiAgICAgICAgY29uc3QgaWNvblJlc3VsdDogSWNvblJlc3VsdCA9IHtcclxuICAgICAgICAgIHN2ZzogbmV3Q29uZmlnLmdldEluKFsnZnVuY3Rpb25Db25maWcnLCAnaWNvbicsICdkYXRhJ10pLFxyXG4gICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICBmaWxlbmFtZTogJydcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbmV3Q29uZmlnID0gbmV3Q29uZmlnLnNldEluKFsnZnVuY3Rpb25Db25maWcnLCAnaWNvbicsICdkYXRhJ10sIGljb25SZXN1bHQpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBuZXdDb25maWdcclxuICAgIH1cclxuICB9XVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdmVyc2lvbk1hbmFnZXIgPSBuZXcgVmVyc2lvbk1hbmFnZXIoKVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHtcclxuICBSZWFjdCwgTGlua1R5cGUsIHR5cGUgQWxsV2lkZ2V0UHJvcHMsIEV4cHJlc3Npb25QYXJ0VHlwZSwgRXhwcmVzc2lvblJlc29sdmVyRXJyb3JDb2RlLCB0eXBlIExpbmtSZXN1bHQsIGNsYXNzTmFtZXMsXHJcbiAgdHlwZSBJTUV4cHJlc3Npb24sIGpzeCwgRXhwcmVzc2lvblJlc29sdmVyQ29tcG9uZW50LCBJbW11dGFibGUsIHR5cGUgSU1TdGF0ZSwgQXBwTW9kZSwgY3NzLCB0eXBlIElNSWNvblByb3BzLCB0eXBlIFNlcmlhbGl6ZWRTdHlsZXMsXHJcbiAgZ2V0QXBwU3RvcmUsIHR5cGUgSU1VcmxQYXJhbWV0ZXJzLCB0eXBlIEJyb3dzZXJTaXplTW9kZSwgTWVzc2FnZU1hbmFnZXIsIEJ1dHRvbkNsaWNrTWVzc2FnZSwgdHlwZSBMaW5rVGFyZ2V0XHJcbn0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBzdHlsZVV0aWxzLCBMaW5rLCB0eXBlIEJ1dHRvblByb3BzLCBJY29uLCBEaXN0YW5jZVVuaXRzLCBkZWZhdWx0TWVzc2FnZXMgYXMgamltdVVpRGVmYXVsdE1lc3NhZ2VzIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHsgdHlwZSBJTUNvbmZpZywgSWNvblBvc2l0aW9uLCB0eXBlIElNV2lkZ2V0U3RhdGUgfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCB7IGdldFN0eWxlIH0gZnJvbSAnLi9zdHlsZSdcclxuaW1wb3J0IHsgdmVyc2lvbk1hbmFnZXIgfSBmcm9tICcuLi92ZXJzaW9uLW1hbmFnZXInXHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gIHRleHQ6IHN0cmluZ1xyXG4gIHRvb2xUaXA6IHN0cmluZ1xyXG4gIHVybDogc3RyaW5nXHJcbiAgdGV4dEV4cHJlc3Npb246IElNRXhwcmVzc2lvblxyXG4gIHRpcEV4cHJlc3Npb246IElNRXhwcmVzc2lvblxyXG4gIHVybEV4cHJlc3Npb246IElNRXhwcmVzc2lvblxyXG59XHJcblxyXG5pbnRlcmZhY2UgRXh0cmFQcm9wcyB7XHJcbiAgYWN0aXZlOiBib29sZWFuXHJcbiAgYXBwTW9kZTogQXBwTW9kZVxyXG4gIHF1ZXJ5T2JqZWN0OiBJTVVybFBhcmFtZXRlcnNcclxuICBpc1JUTDogYm9vbGVhblxyXG4gIGJyb3dzZXJTaXplTW9kZTogQnJvd3NlclNpemVNb2RlXHJcbiAgdXJpOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkZ2V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4gJiBFeHRyYVByb3BzLCBTdGF0ZT4ge1xyXG4gIGRvbU5vZGU6IFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD5cclxuICBsYXN0Q2xpY2tUaW1lc3RhbXA6IG51bWJlciA9IG51bGxcclxuXHJcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHRleHQ6IHRoaXMuZ2V0VGV4dEZyb21Qcm9wcygpLFxyXG4gICAgICB0b29sVGlwOiB0aGlzLnByb3BzLmNvbmZpZz8uZnVuY3Rpb25Db25maWc/LnRvb2xUaXAgfHwgJycsXHJcbiAgICAgIHVybDogdGhpcy5wcm9wcy5jb25maWc/LmZ1bmN0aW9uQ29uZmlnPy5saW5rUGFyYW0/LnZhbHVlIHx8ICcnLFxyXG4gICAgICB0ZXh0RXhwcmVzc2lvbjogdGhpcy5wcm9wcy51c2VEYXRhU291cmNlc0VuYWJsZWQgJiYgdGhpcy5nZXRUZXh0RXhwcmVzc2lvbigpLFxyXG4gICAgICB0aXBFeHByZXNzaW9uOiB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzRW5hYmxlZCAmJiB0aGlzLmdldFRpcEV4cHJlc3Npb24oKSxcclxuICAgICAgdXJsRXhwcmVzc2lvbjogdGhpcy5wcm9wcy51c2VEYXRhU291cmNlc0VuYWJsZWQgJiYgdGhpcy5nZXRVcmxFeHByZXNzaW9uKClcclxuICAgIH1cclxuICAgIHRoaXMuZG9tTm9kZSA9IFJlYWN0LmNyZWF0ZVJlZigpXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbWFwRXh0cmFTdGF0ZVByb3BzID0gKHN0YXRlOiBJTVN0YXRlLCBvd25Qcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KTogRXh0cmFQcm9wcyA9PiB7XHJcbiAgICBsZXQgc2VsZWN0ZWQgPSBmYWxzZVxyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gc3RhdGUuYXBwUnVudGltZUluZm8uc2VsZWN0aW9uXHJcbiAgICBpZiAoc2VsZWN0aW9uICYmIHN0YXRlLmFwcENvbmZpZy5sYXlvdXRzW3NlbGVjdGlvbi5sYXlvdXRJZF0pIHtcclxuICAgICAgY29uc3QgbGF5b3V0SXRlbSA9IHN0YXRlLmFwcENvbmZpZy5sYXlvdXRzW3NlbGVjdGlvbi5sYXlvdXRJZF0uY29udGVudFtzZWxlY3Rpb24ubGF5b3V0SXRlbUlkXVxyXG4gICAgICBzZWxlY3RlZCA9IGxheW91dEl0ZW0gJiYgbGF5b3V0SXRlbS53aWRnZXRJZCA9PT0gb3duUHJvcHMuaWRcclxuICAgIH1cclxuICAgIGNvbnN0IGlzSW5CdWlsZGVyID0gc3RhdGUuYXBwQ29udGV4dC5pc0luQnVpbGRlclxyXG4gICAgY29uc3QgYWN0aXZlID0gaXNJbkJ1aWxkZXIgJiYgc2VsZWN0ZWRcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBhY3RpdmUsXHJcbiAgICAgIGFwcE1vZGU6IHN0YXRlLmFwcFJ1bnRpbWVJbmZvLmFwcE1vZGUsXHJcbiAgICAgIHF1ZXJ5T2JqZWN0OiBzdGF0ZS5xdWVyeU9iamVjdCxcclxuICAgICAgaXNSVEw6IHN0YXRlLmFwcENvbnRleHQuaXNSVEwsXHJcbiAgICAgIGJyb3dzZXJTaXplTW9kZTogc3RhdGUuYnJvd3NlclNpemVNb2RlLFxyXG4gICAgICB1cmk6IHN0YXRlLmFwcENvbmZpZy53aWRnZXRzW293blByb3BzLmlkXT8udXJpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdmVyc2lvbk1hbmFnZXIgPSB2ZXJzaW9uTWFuYWdlclxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUgKHByZXZQcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+ICYgRXh0cmFQcm9wcywgcHJldlN0YXRlOiBTdGF0ZSkge1xyXG4gICAgaWYgKCF0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzRW5hYmxlZCAmJlxyXG4gICAgICAoXHJcbiAgICAgICAgdGhpcy5wcm9wcy5jb25maWcgIT09IHByZXZQcm9wcy5jb25maWcgfHwgcHJldlByb3BzLnVzZURhdGFTb3VyY2VzRW5hYmxlZFxyXG4gICAgICApXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgdGV4dDogdGhpcy5nZXRUZXh0RnJvbVByb3BzKCksXHJcbiAgICAgICAgdG9vbFRpcDogdGhpcy5wcm9wcy5jb25maWcgJiYgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcgJiYgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcudG9vbFRpcCxcclxuICAgICAgICB1cmw6IHRoaXMucHJvcHMuY29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmxpbmtQYXJhbSAmJiB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5saW5rUGFyYW0udmFsdWVcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5wcm9wcy51c2VEYXRhU291cmNlc0VuYWJsZWQgJiZcclxuICAgICAgKFxyXG4gICAgICAgIHRoaXMucHJvcHMuY29uZmlnICE9PSBwcmV2UHJvcHMuY29uZmlnIHx8ICFwcmV2UHJvcHMudXNlRGF0YVNvdXJjZXNFbmFibGVkXHJcbiAgICAgIClcclxuICAgICkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICB0ZXh0RXhwcmVzc2lvbjogdGhpcy5nZXRUZXh0RXhwcmVzc2lvbigpLFxyXG4gICAgICAgIHRpcEV4cHJlc3Npb246IHRoaXMuZ2V0VGlwRXhwcmVzc2lvbigpLFxyXG4gICAgICAgIHVybEV4cHJlc3Npb246IHRoaXMuZ2V0VXJsRXhwcmVzc2lvbigpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3aWRnZXRXaWxsUmVtb3ZlICgpIHtcclxuICAgIC8vIFByZXZlbnQgXCJ3aWRnZXRXaWxsUmVtb3ZlIGlzIG5vdCBhIGZ1bmN0aW9uXCIgZXJyb3JcclxuICB9XHJcblxyXG4gIGdldFRleHRGcm9tUHJvcHMgPSAoKTogc3RyaW5nID0+IHtcclxuICAgIHJldHVybiB0eXBlb2YgdGhpcy5wcm9wcy5jb25maWc/LmZ1bmN0aW9uQ29uZmlnPy50ZXh0ID09PSAnc3RyaW5nJ1xyXG4gICAgICA/IHRoaXMucHJvcHMuY29uZmlnPy5mdW5jdGlvbkNvbmZpZz8udGV4dFxyXG4gICAgICA6IHRoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICd2YXJpYWJsZUJ1dHRvbicsIGRlZmF1bHRNZXNzYWdlOiBqaW11VWlEZWZhdWx0TWVzc2FnZXMudmFyaWFibGVCdXR0b24gfSlcclxuICB9XHJcblxyXG4gIGdldFRpcEV4cHJlc3Npb24gPSAoKTogSU1FeHByZXNzaW9uID0+IHtcclxuICAgIHJldHVybiAodGhpcy5wcm9wcy5jb25maWcgJiYgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcgJiYgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcudG9vbFRpcEV4cHJlc3Npb24gJiZcclxuICAgICAgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcudG9vbFRpcEV4cHJlc3Npb24pIHx8XHJcbiAgICAgIEltbXV0YWJsZSh7XHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgcGFydHM6IFt7IHR5cGU6IEV4cHJlc3Npb25QYXJ0VHlwZS5TdHJpbmcsIGV4cDogYFwiJHt0aGlzLnByb3BzLmNvbmZpZz8uZnVuY3Rpb25Db25maWc/LnRvb2xUaXAgfHwgJyd9XCJgIH1dXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXRUZXh0RXhwcmVzc2lvbiA9ICgpOiBJTUV4cHJlc3Npb24gPT4ge1xyXG4gICAgcmV0dXJuICh0aGlzLnByb3BzLmNvbmZpZyAmJiB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZyAmJiB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy50ZXh0RXhwcmVzc2lvbiAmJlxyXG4gICAgICB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy50ZXh0RXhwcmVzc2lvbikgfHxcclxuICAgICAgSW1tdXRhYmxlKHtcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBwYXJ0czogW3sgdHlwZTogRXhwcmVzc2lvblBhcnRUeXBlLlN0cmluZywgZXhwOiBgXCIke3RoaXMucHJvcHMuY29uZmlnPy5mdW5jdGlvbkNvbmZpZz8udGV4dCB8fCB0aGlzLmdldFRleHRGcm9tUHJvcHMoKX1cImAgfV1cclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGdldFVybEV4cHJlc3Npb24gPSAoKTogSU1FeHByZXNzaW9uID0+IHtcclxuICAgIGNvbnN0IGV4cHJlc3Npb24gPSB0aGlzLnByb3BzLmNvbmZpZyAmJiB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZyAmJiB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5saW5rUGFyYW0gJiZcclxuICAgICAgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcubGlua1BhcmFtICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmxpbmtQYXJhbS5leHByZXNzaW9uXHJcblxyXG4gICAgcmV0dXJuIGV4cHJlc3Npb24gfHwgbnVsbFxyXG4gIH1cclxuXHJcbiAgb25UZXh0RXhwUmVzb2x2ZUNoYW5nZSA9IHJlc3VsdCA9PiB7XHJcbiAgICBpZiAocmVzdWx0LmlzU3VjY2Vzc2Z1bCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdGV4dDogcmVzdWx0LnZhbHVlIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgcmVzOiBzdHJpbmcgPSAnJ1xyXG4gICAgICBjb25zdCBlcnJvckNvZGUgPSByZXN1bHQudmFsdWVcclxuICAgICAgaWYgKGVycm9yQ29kZSA9PT0gRXhwcmVzc2lvblJlc29sdmVyRXJyb3JDb2RlLkZhaWxlZCkge1xyXG4gICAgICAgIHJlcyA9IHRoaXMuc3RhdGUudGV4dEV4cHJlc3Npb24gJiYgdGhpcy5zdGF0ZS50ZXh0RXhwcmVzc2lvbi5uYW1lXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0OiByZXMgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVGlwRXhwUmVzb2x2ZUNoYW5nZSA9IHJlc3VsdCA9PiB7XHJcbiAgICBpZiAocmVzdWx0LmlzU3VjY2Vzc2Z1bCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdG9vbFRpcDogcmVzdWx0LnZhbHVlIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdG9vbFRpcDogJycgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVXJsRXhwUmVzb2x2ZUNoYW5nZSA9IHJlc3VsdCA9PiB7XHJcbiAgICBpZiAocmVzdWx0LmlzU3VjY2Vzc2Z1bCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdXJsOiByZXN1bHQudmFsdWUgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCByZXM6IHN0cmluZyA9ICcnXHJcbiAgICAgIGNvbnN0IGVycm9yQ29kZSA9IHJlc3VsdC52YWx1ZVxyXG4gICAgICBpZiAoZXJyb3JDb2RlID09PSBFeHByZXNzaW9uUmVzb2x2ZXJFcnJvckNvZGUuRmFpbGVkKSB7XHJcbiAgICAgICAgcmVzID0gdGhpcy5zdGF0ZS51cmxFeHByZXNzaW9uICYmIHRoaXMuc3RhdGUudXJsRXhwcmVzc2lvbi5uYW1lXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB1cmw6IHJlcyB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0V2hldGhlclVzZVF1aWNrU3R5bGUgPSAoY29uZmlnOiBJTUNvbmZpZyk6IGJvb2xlYW4gPT4ge1xyXG4gICAgcmV0dXJuICEhKGNvbmZpZyAmJiBjb25maWcuc3R5bGVDb25maWcgJiYgY29uZmlnLnN0eWxlQ29uZmlnLnRoZW1lU3R5bGUgJiYgY29uZmlnLnN0eWxlQ29uZmlnLnRoZW1lU3R5bGUucXVpY2tTdHlsZVR5cGUpXHJcbiAgfVxyXG5cclxuICBnZXRJY29uU3R5bGUgPSAocmVndWxhckljb25Qcm9wczogSU1JY29uUHJvcHMsIGhvdmVySWNvblByb3BzOiBJTUljb25Qcm9wcyk6IFNlcmlhbGl6ZWRTdHlsZXMgPT4ge1xyXG4gICAgY29uc3QgciA9IHJlZ3VsYXJJY29uUHJvcHMgfHwgKHt9IGFzIElNSWNvblByb3BzKVxyXG4gICAgY29uc3QgaCA9IGhvdmVySWNvblByb3BzIHx8ICh7fSBhcyBJTUljb25Qcm9wcylcclxuXHJcbiAgICByZXR1cm4gY3NzYFxyXG4gICAgICAmIGltZywgJiBzdmd7XHJcbiAgICAgICAgY29sb3I6ICR7ci5jb2xvcn07XHJcbiAgICAgICAgZmlsbDogJHtyLmNvbG9yfTtcclxuICAgICAgICB3aWR0aDogJHtyLnNpemV9JHtEaXN0YW5jZVVuaXRzLlBJWEVMfTtcclxuICAgICAgICBoZWlnaHQ6ICR7ci5zaXplfSR7RGlzdGFuY2VVbml0cy5QSVhFTH07XHJcbiAgICAgIH1cclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICBpbWcsIHN2Z3tcclxuICAgICAgICAgIGNvbG9yOiAke2guY29sb3J9O1xyXG4gICAgICAgICAgZmlsbDogJHtoLmNvbG9yfTtcclxuICAgICAgICAgIHdpZHRoOiAke2guc2l6ZX0ke0Rpc3RhbmNlVW5pdHMuUElYRUx9O1xyXG4gICAgICAgICAgaGVpZ2h0OiAke2guc2l6ZX0ke0Rpc3RhbmNlVW5pdHMuUElYRUx9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgYFxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlVW5kZWZpbmVkU3R5bGUgPSAoc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMpOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0+IHtcclxuICAgIGlmICghc3R5bGUpIHtcclxuICAgICAgcmV0dXJuIHN0eWxlXHJcbiAgICB9XHJcbiAgICBjb25zdCByZW1vdmVkVW5kZWZpbmVkU3R5bGUgPSB7fVxyXG4gICAgT2JqZWN0LmtleXMoc3R5bGUpLmZvckVhY2goc3R5bGVOYW1lID0+IHtcclxuICAgICAgaWYgKCh0eXBlb2Ygc3R5bGVbc3R5bGVOYW1lXSA9PT0gJ3N0cmluZycgJiYgIXN0eWxlW3N0eWxlTmFtZV0uaW5jbHVkZXMoJ3VuZGVmaW5lZCcpKSB8fFxyXG4gICAgICAgIHR5cGVvZiBzdHlsZVtzdHlsZU5hbWVdID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgIHJlbW92ZWRVbmRlZmluZWRTdHlsZVtzdHlsZU5hbWVdID0gc3R5bGVbc3R5bGVOYW1lXVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHJlbW92ZWRVbmRlZmluZWRTdHlsZVxyXG4gIH1cclxuXHJcbiAgZ2V0TGlua0NvbXBvbmVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMucHJvcHMuY29uZmlnXHJcbiAgICBjb25zdCBsaW5rUGFyYW0gPSBjb25maWcuZnVuY3Rpb25Db25maWcubGlua1BhcmFtXHJcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy5zdGF0ZS50ZXh0XHJcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuc3RhdGUudG9vbFRpcFxyXG4gICAgY29uc3QgaWNvblByb3BlcnR5ID0gY29uZmlnLmZ1bmN0aW9uQ29uZmlnPy5pY29uPy5kYXRhPy5wcm9wZXJ0aWVzXHJcbiAgICBjb25zdCBpY29uTmFtZSA9IGljb25Qcm9wZXJ0eT8uaXNVcGxvYWRlZCA/IGljb25Qcm9wZXJ0eT8ub3JpZ2luYWxOYW1lIDogaWNvblByb3BlcnR5Py5maWxlbmFtZVxyXG4gICAgbGV0IGFjY2Vzc2liaWxpdHlMYWJlbCA9IHRoaXMuc3RhdGUudG9vbFRpcCB8fCB0ZXh0IHx8IGljb25OYW1lXHJcblxyXG4gICAgbGV0IGN1c3RvbVN0eWxlXHJcbiAgICBsZXQgaWNvblN0eWxlXHJcbiAgICBcclxuICAgIGlmIChjb25maWcuc3R5bGVDb25maWcgJiYgY29uZmlnLnN0eWxlQ29uZmlnLmN1c3RvbVN0eWxlKSB7XHJcbiAgICAgIGNvbnN0IHJlZ3VsYXIgPSBjb25maWcuc3R5bGVDb25maWcuY3VzdG9tU3R5bGUucmVndWxhclxyXG4gICAgICBjb25zdCBob3ZlciA9IGNvbmZpZy5zdHlsZUNvbmZpZy5jdXN0b21TdHlsZS5ob3ZlclxyXG4gICAgICBpZiAoY29uZmlnLnN0eWxlQ29uZmlnLnVzZUN1c3RvbSkge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlID0gc3R5bGVVdGlscy50b0NTU1N0eWxlKHJlZ3VsYXIgJiYgcmVndWxhci53aXRob3V0KCdpY29uUHJvcHMnKS5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pKSBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzXHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxIb3ZlclN0eWxlID0gc3R5bGVVdGlscy50b0NTU1N0eWxlKGhvdmVyICYmIGhvdmVyLndpdGhvdXQoJ2ljb25Qcm9wcycpLmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSkpIGFzIFJlYWN0LkNTU1Byb3BlcnRpZXNcclxuICAgICAgICBjb25zdCBob3ZlclN0eWxlID0geyAuLi5zdHlsZSwgLi4ub3JpZ2luYWxIb3ZlclN0eWxlIH1cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmUgJiYgdGhpcy5wcm9wcy5hcHBNb2RlICE9PSBBcHBNb2RlLlJ1bikge1xyXG4gICAgICAgICAgY29uc3Qgd2lkZ2V0U3RhdGU6IElNV2lkZ2V0U3RhdGUgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkud2lkZ2V0c1N0YXRlW3RoaXMucHJvcHMuaWRdIHx8IEltbXV0YWJsZSh7fSlcclxuICAgICAgICAgIGN1c3RvbVN0eWxlID0ge1xyXG4gICAgICAgICAgICBzdHlsZTogd2lkZ2V0U3RhdGUuaXNDb25maWd1cmluZ0hvdmVyXHJcbiAgICAgICAgICAgICAgPyB7IC4uLnRoaXMucmVtb3ZlVW5kZWZpbmVkU3R5bGUoc3R5bGUpLCAuLi50aGlzLnJlbW92ZVVuZGVmaW5lZFN0eWxlKGhvdmVyU3R5bGUpIH1cclxuICAgICAgICAgICAgICA6IHN0eWxlLFxyXG4gICAgICAgICAgICBob3ZlclN0eWxlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpY29uU3R5bGUgPSB0aGlzLmdldEljb25TdHlsZShcclxuICAgICAgICAgICAgd2lkZ2V0U3RhdGUuaXNDb25maWd1cmluZ0hvdmVyID8geyAuLi5yZWd1bGFyPy5pY29uUHJvcHMsIC4uLmhvdmVyPy5pY29uUHJvcHMgfSA6IHJlZ3VsYXI/Lmljb25Qcm9wcyxcclxuICAgICAgICAgICAgaG92ZXI/Lmljb25Qcm9wc1xyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjdXN0b21TdHlsZSA9IHtcclxuICAgICAgICAgICAgc3R5bGUsXHJcbiAgICAgICAgICAgIGhvdmVyU3R5bGVcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGljb25TdHlsZSA9IHRoaXMuZ2V0SWNvblN0eWxlKHJlZ3VsYXIgJiYgcmVndWxhci5pY29uUHJvcHMsIGhvdmVyICYmIGhvdmVyLmljb25Qcm9wcylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGNvbnN0IHVzZVF1aWNrU3R5bGUgPSB0aGlzLmdldFdoZXRoZXJVc2VRdWlja1N0eWxlKGNvbmZpZylcclxuICAgIGNvbnN0IHRoZW1lU3R5bGU6IEJ1dHRvblByb3BzID0gdXNlUXVpY2tTdHlsZVxyXG4gICAgICA/IHtcclxuICAgICAgICAgIHR5cGU6IGNvbmZpZy5zdHlsZUNvbmZpZy50aGVtZVN0eWxlLnF1aWNrU3R5bGVUeXBlXHJcbiAgICAgICAgfVxyXG4gICAgICA6IHtcclxuICAgICAgICAgIHR5cGU6ICdkZWZhdWx0J1xyXG4gICAgICAgIH1cclxuXHJcbiAgICBjb25zdCBiYXNpY0NsYXNzTmFtZXMgPSAnd2lkZ2V0LWJ1dHRvbi1saW5rIHRleHQtdHJ1bmNhdGUgdy0xMDAgaC0xMDAgcC0wIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlcidcclxuXHJcbiAgICBsZXQgcXVlcnlPYmplY3RcclxuICAgIGxldCB0YXJnZXQ6IExpbmtUYXJnZXRcclxuICAgIGxldCBsaW5rVG86IExpbmtSZXN1bHRcclxuICAgIGlmIChsaW5rUGFyYW0gJiYgbGlua1BhcmFtLmxpbmtUeXBlKSB7XHJcbiAgICAgIHRhcmdldCA9IGxpbmtQYXJhbS5vcGVuVHlwZVxyXG4gICAgICBsaW5rVG8gPSB7XHJcbiAgICAgICAgbGlua1R5cGU6IGxpbmtQYXJhbS5saW5rVHlwZVxyXG4gICAgICB9IGFzIExpbmtSZXN1bHRcclxuXHJcbiAgICAgIC8vIGNvbnN0IGV4YlRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2V4Yl9hdXRoJylcclxuICAgICAgLy8gY29uc29sZS5sb2coJ2V4YicsZXhiVG9rZW4pXHJcblxyXG4gICAgICBsZXQgZXhiVG9rZW4gPSAnJ1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJhd0xvY2FsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2V4Yl9hdXRoJylcclxuICAgICAgICBjb25zdCByYXdTZXNzaW9uID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZXhiX2F1dGgnKVxyXG4gICAgICBcclxuICAgICAgICBpZiAocmF3TG9jYWwpIHtcclxuICAgICAgICAgIGNvbnN0IHBhcnNlZExvY2FsID0gSlNPTi5wYXJzZShyYXdMb2NhbClcclxuICAgICAgICAgIGlmIChwYXJzZWRMb2NhbD8udG9rZW4pIHtcclxuICAgICAgICAgICAgZXhiVG9rZW4gPSBwYXJzZWRMb2NhbC50b2tlblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgaWYgKCFleGJUb2tlbiAmJiByYXdTZXNzaW9uKSB7XHJcbiAgICAgICAgICBjb25zdCBwYXJzZWRTZXNzaW9uID0gSlNPTi5wYXJzZShyYXdTZXNzaW9uKVxyXG4gICAgICAgICAgaWYgKHBhcnNlZFNlc3Npb24/LnRva2VuKSB7XHJcbiAgICAgICAgICAgIGV4YlRva2VuID0gcGFyc2VkU2Vzc2lvbi50b2tlblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdGYWlsZWQgdG8gcGFyc2UgZXhiX2F1dGg6JywgZXJyKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygnZXhiJyxleGJUb2tlbilcclxuXHJcbiAgICAgIGlmIChsaW5rUGFyYW0ubGlua1R5cGUgPT09IExpbmtUeXBlLldlYkFkZHJlc3MpIHtcclxuICAgICAgICBjb25zdCBiYXNlVXJsID0gdGhpcy5zdGF0ZS51cmxcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgdXJsT2JqID0gbmV3IFVSTChiYXNlVXJsLCB3aW5kb3cubG9jYXRpb24ub3JpZ2luKVxyXG4gICAgICAgICAgdXJsT2JqLnNlYXJjaFBhcmFtcy5zZXQoJ3Rva2VuJywgZXhiVG9rZW4pXHJcbiAgICAgICAgICBsaW5rVG8udmFsdWUgPSB1cmxPYmoudG9TdHJpbmcoKVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBVUkw6JywgYmFzZVVybClcclxuICAgICAgICAgIGxpbmtUby52YWx1ZSA9IGJhc2VVcmxcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGlua1RvLnZhbHVlID0gbGlua1BhcmFtLnZhbHVlXHJcbiAgICAgICAgcXVlcnlPYmplY3QgPSB0aGlzLnByb3BzLnF1ZXJ5T2JqZWN0XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpY29uID0gY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmljb25cclxuICAgIGNvbnN0IGlzUlRMID0gdGhpcy5wcm9wcy5pc1JUTFxyXG4gICAgY29uc3QgbGVmdEljb24gPSBpY29uICYmICghaWNvbi5wb3NpdGlvbiB8fCBpY29uLnBvc2l0aW9uID09PSBJY29uUG9zaXRpb24uTGVmdCkgJiYgPEljb24gaWNvbj17aWNvbi5kYXRhLnN2Z30gY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgJ21yLTIgbWwtMCc6ICEhdGV4dCAmJiAhaXNSVEwsICdtbC0yIG1yLTAnOiAhIXRleHQgJiYgaXNSVEwsICdteC0wJzogIXRleHQgfSl9IGFyaWEtaGlkZGVuPXt0cnVlfSAvPlxyXG4gICAgY29uc3QgcmlnaHRJY29uID0gaWNvbiAmJiBpY29uLnBvc2l0aW9uICYmIGljb24ucG9zaXRpb24gPT09IEljb25Qb3NpdGlvbi5SaWdodCAmJiA8SWNvbiBpY29uPXtpY29uLmRhdGEuc3ZnfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyAnbWwtMiBtci0wJzogISF0ZXh0ICYmICFpc1JUTCwgJ21yLTIgbWwtMCc6ICEhdGV4dCAmJiBpc1JUTCwgJ214LTAnOiAhdGV4dCB9KX0gYXJpYS1oaWRkZW49e3RydWV9IC8+XHJcblxyXG4gICAgaWYgKHRhcmdldCA9PT0gJ19ibGFuaycpIHtcclxuICAgICAgYWNjZXNzaWJpbGl0eUxhYmVsID0gYCR7YWNjZXNzaWJpbGl0eUxhYmVsfSwgJHt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnb3BlbkluTmV3V2luZG93JyB9KX1gXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXV0b1NpemUgPSB0aGlzLnByb3BzLmF1dG9XaWR0aCAmJiB0aGlzLnByb3BzLmF1dG9IZWlnaHRcclxuICAgIGNvbnN0IGlzSWNvbiA9IGljb24gJiYgIXRleHRcclxuXHJcbiAgICByZXR1cm4gPExpbmsgdG89e2xpbmtUb30gdGFyZ2V0PXt0YXJnZXR9IHF1ZXJ5T2JqZWN0PXtxdWVyeU9iamVjdH1cclxuICAgICAgdGl0bGU9e3RpdGxlfSBjbGFzc05hbWU9e2Jhc2ljQ2xhc3NOYW1lc30gcm9sZT0nYnV0dG9uJ1xyXG4gICAgICBjdXN0b21TdHlsZT17Y3VzdG9tU3R5bGV9IHsuLi50aGVtZVN0eWxlfSBjc3M9e2ljb25TdHlsZX1cclxuICAgICAgYXJpYS1sYWJlbD17YWNjZXNzaWJpbGl0eUxhYmVsfVxyXG4gICAgPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3dpZGdldC1idXR0b24tdGV4dCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXInLCB7ICdhdXRvLXNpemUtaWNvbic6IGF1dG9TaXplICYmIGlzSWNvbiB9KX0gPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlzUlRMID8gcmlnaHRJY29uIDogbGVmdEljb25cclxuICAgICAgICB9XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXRydW5jYXRlJz57dGV4dH08L3NwYW4+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaXNSVEwgPyBsZWZ0SWNvbiA6IHJpZ2h0SWNvblxyXG4gICAgICAgIH1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9MaW5rPlxyXG4gIH1cclxuXHJcbiAgb25DbGljayA9IGUgPT4ge1xyXG4gICAgY29uc3QgdGltZXN0YW1wID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKVxyXG4gICAgLy8gaW4gY2FzZSB0aGF0IGJvdGggY2xpY2sgYW5kIHRvdWNoZW5kIGJlIHRyaWdnZXJlZCBpbiBpT1NcclxuICAgIGlmICh0aGlzLmxhc3RDbGlja1RpbWVzdGFtcCAmJiB0aW1lc3RhbXAgLSB0aGlzLmxhc3RDbGlja1RpbWVzdGFtcCA8IDIwMCkgcmV0dXJuXHJcbiAgICB0aGlzLmxhc3RDbGlja1RpbWVzdGFtcCA9IHRpbWVzdGFtcFxyXG4gICAgZS5leGJFdmVudFR5cGUgPSAnbGlua0NsaWNrJ1xyXG4gICAgTWVzc2FnZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdWJsaXNoTWVzc2FnZShcclxuICAgICAgbmV3IEJ1dHRvbkNsaWNrTWVzc2FnZSh0aGlzLnByb3BzLmlkKVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGNvbnN0IGlzRGF0YVNvdXJjZVVzZWQgPSB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzRW5hYmxlZFxyXG5cclxuICAgIGNvbnN0IExpbmtDb21wb25lbnQgPSB0aGlzLmdldExpbmtDb21wb25lbnQoKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJqaW11LXdpZGdldCB3aWRnZXQtYnV0dG9uIHctMTAwIGgtMTAwXCJcclxuICAgICAgICBjc3M9e2dldFN0eWxlKHRoaXMucHJvcHMudGhlbWUpfSByZWY9e3RoaXMuZG9tTm9kZX1cclxuICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xpY2t9XHJcbiAgICAgICAgb25Ub3VjaEVuZD17dGhpcy5vbkNsaWNrfVxyXG4gICAgICAgIG9uS2V5VXA9e2V2dCA9PiB7XHJcbiAgICAgICAgICBpZiAoZXZ0LmtleSA9PT0gJyAnIHx8IGV2dC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkNsaWNrKGV2dClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge0xpbmtDb21wb25lbnR9XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlzRGF0YVNvdXJjZVVzZWQgJiZcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8RXhwcmVzc2lvblJlc29sdmVyQ29tcG9uZW50IHVzZURhdGFTb3VyY2VzPXt0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzfSBleHByZXNzaW9uPXt0aGlzLnN0YXRlLnRleHRFeHByZXNzaW9ufVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25UZXh0RXhwUmVzb2x2ZUNoYW5nZX0gd2lkZ2V0SWQ9e3RoaXMucHJvcHMuaWR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8RXhwcmVzc2lvblJlc29sdmVyQ29tcG9uZW50IHVzZURhdGFTb3VyY2VzPXt0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzfSBleHByZXNzaW9uPXt0aGlzLnN0YXRlLnRpcEV4cHJlc3Npb259XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblRpcEV4cFJlc29sdmVDaGFuZ2V9IHdpZGdldElkPXt0aGlzLnByb3BzLmlkfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEV4cHJlc3Npb25SZXNvbHZlckNvbXBvbmVudCB1c2VEYXRhU291cmNlcz17dGhpcy5wcm9wcy51c2VEYXRhU291cmNlc30gZXhwcmVzc2lvbj17dGhpcy5zdGF0ZS51cmxFeHByZXNzaW9ufVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25VcmxFeHBSZXNvbHZlQ2hhbmdlfSB3aWRnZXRJZD17dGhpcy5wcm9wcy5pZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=