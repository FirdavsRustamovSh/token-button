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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jdXN0b20tYnV0dG9uL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQSxJQUFZLFlBR1g7QUFIRCxXQUFZLFlBQVk7SUFDdEIsNkJBQWE7SUFDYiwrQkFBZTtBQUNqQixDQUFDLEVBSFcsWUFBWSxLQUFaLFlBQVksUUFHdkI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0I0RTtBQUV0RSxTQUFTLFFBQVEsQ0FBRSxLQUF1QjtJQUMvQyxPQUFPLDhDQUFHOzs7Ozs7Ozs7Ozs7O0dBYVQ7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQjhEO0FBQ3JCO0FBRTFDLE1BQU0sY0FBZSxTQUFRLHlEQUFrQjtJQUEvQzs7UUFDRSxhQUFRLEdBQUcsQ0FBQztnQkFDVixPQUFPLEVBQUUsT0FBTztnQkFDaEIsV0FBVyxFQUFFLG9CQUFvQjtnQkFDakMsUUFBUSxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUU7b0JBQ3RCLElBQUksU0FBUyxHQUFHLFNBQVM7b0JBRXpCLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUM7d0JBQzdDLFNBQVMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDakYsQ0FBQztvQkFFRCxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDO3dCQUNwRCxTQUFTLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ3hGLENBQUM7b0JBRUQsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxn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Q3RDLEdBQUcsRUFBRSxXQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLDBDQUFFLEdBQUc7S0FDL0M7QUFDSCxDQUFDO0FBRU0scUJBQWMsR0FBRyw0REFBYztpRUFyQ25CLE1BQU07QUFvV25CLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2N1c3RvbS1idXR0b24vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY3VzdG9tLWJ1dHRvbi9zcmMvcnVudGltZS9zdHlsZS50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY3VzdG9tLWJ1dHRvbi9zcmMvdmVyc2lvbi1tYW5hZ2VyLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jdXN0b20tYnV0dG9uL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBJbW11dGFibGVPYmplY3QsIEV4cHJlc3Npb24sIFRoZW1lQnV0dG9uVHlwZSwgSWNvblByb3BzLCBJY29uUmVzdWx0LCAgTGlua1BhcmFtIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgdHlwZSB7IFN0eWxlU2V0dGluZ3MgfSBmcm9tICdqaW11LXVpJ1xyXG5cclxuZXhwb3J0IHR5cGUgSU1Db25maWcgPSBJbW11dGFibGVPYmplY3Q8Q29uZmlnPlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb25maWcge1xyXG4gIGZ1bmN0aW9uQ29uZmlnOiBGdW5jdGlvbkNvbmZpZ1xyXG4gIHN0eWxlQ29uZmlnPzogU3R5bGVDb25maWdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGdW5jdGlvbkNvbmZpZyB7XHJcbiAgdG9vbFRpcD86IHN0cmluZ1xyXG4gIHRleHQ/OiBzdHJpbmdcclxuICBpY29uPzogSWNvbkNvbmZpZ1xyXG4gIC8qKlxyXG4gICAqIGN1c3RvbUljb25zIGlzIHVzZWQgZm9yIGRldmVsb3BlcnMgdG8gc2V0IGNlcnRhaW4gaWNvbnMgYXMgcHJlc2V0IGljb25zLCBpdCBjb3VsZCBub3QgYmUgdXBsb2FkZWQgaW4gdGhlIGJ1aWxkZXIuXHJcbiAgICogVGhlc2UgY3VzdG9tIGljb25zIGNhbid0IGJlIGRlbGV0ZS5cclxuICAgKi9cclxuICBjdXN0b21JY29ucz86IEljb25SZXN1bHRbXVxyXG4gIHRleHRFeHByZXNzaW9uPzogRXhwcmVzc2lvblxyXG4gIHRvb2xUaXBFeHByZXNzaW9uPzogRXhwcmVzc2lvblxyXG4gIGxpbmtQYXJhbT86IExpbmtQYXJhbVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBJY29uUG9zaXRpb24ge1xyXG4gIExlZnQgPSAnTEVGVCcsXHJcbiAgUmlnaHQgPSAnUklHSFQnXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSWNvbkNvbmZpZyB7XHJcbiAgZGF0YTogSWNvblJlc3VsdFxyXG4gIHBvc2l0aW9uOiBJY29uUG9zaXRpb25cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdHlsZUNvbmZpZyB7XHJcbiAgdXNlQ3VzdG9tOiBib29sZWFuXHJcbiAgdGhlbWVTdHlsZT86IFRoZW1lU3R5bGVcclxuICBjdXN0b21TdHlsZT86IEN1c3RvbVN0eWxlXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGhlbWVTdHlsZSB7XHJcbiAgcXVpY2tTdHlsZVR5cGU6IFRoZW1lQnV0dG9uVHlwZVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvbVN0eWxlIHtcclxuICByZWd1bGFyOiBBZHZhbmNlU3R5bGVTZXR0aW5nc1xyXG4gIGhvdmVyOiBBZHZhbmNlU3R5bGVTZXR0aW5nc1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFkdmFuY2VTdHlsZVNldHRpbmdzIGV4dGVuZHMgU3R5bGVTZXR0aW5ncyB7XHJcbiAgaWNvblByb3BzPzogSWNvblByb3BzXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2lkZ2V0U3RhdGUge1xyXG4gIGlzQ29uZmlndXJpbmdIb3Zlcj86IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSU1BZHZhbmNlU3R5bGVTZXR0aW5ncyA9IEltbXV0YWJsZU9iamVjdDxBZHZhbmNlU3R5bGVTZXR0aW5ncz5cclxuXHJcbmV4cG9ydCB0eXBlIElNSWNvblByb3BzID0gSW1tdXRhYmxlT2JqZWN0PEljb25Qcm9wcz5cclxuXHJcbmV4cG9ydCB0eXBlIElNQ3VzdG9tU3R5bGUgPSBJbW11dGFibGVPYmplY3Q8Q3VzdG9tU3R5bGU+XHJcblxyXG5leHBvcnQgdHlwZSBJTVRoZW1lU3R5bGUgPSBJbW11dGFibGVPYmplY3Q8VGhlbWVTdHlsZT5cclxuXHJcbmV4cG9ydCB0eXBlIElNU3R5bGVDb25maWcgPSBJbW11dGFibGVPYmplY3Q8U3R5bGVDb25maWc+XHJcblxyXG5leHBvcnQgdHlwZSBJTUljb25Qb3NpdGlvbiA9IEltbXV0YWJsZU9iamVjdDxJY29uUG9zaXRpb24+XHJcblxyXG5leHBvcnQgdHlwZSBJTUljb25Db25maWcgPSBJbW11dGFibGVPYmplY3Q8SWNvbkNvbmZpZz5cclxuXHJcbmV4cG9ydCB0eXBlIElNV2lkZ2V0U3RhdGUgPSBJbW11dGFibGVPYmplY3Q8V2lkZ2V0U3RhdGU+XHJcbiIsImltcG9ydCB7IHR5cGUgSU1UaGVtZVZhcmlhYmxlcywgY3NzLCB0eXBlIFNlcmlhbGl6ZWRTdHlsZXMgfSBmcm9tICdqaW11LWNvcmUnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3R5bGUgKHRoZW1lOiBJTVRoZW1lVmFyaWFibGVzKTogU2VyaWFsaXplZFN0eWxlcyB7XHJcbiAgcmV0dXJuIGNzc2BcclxuICAgICY+YSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmF1dG8tc2l6ZS1pY29uIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB9XHJcbiAgICAud2lkZ2V0LWJ1dHRvbi10ZXh0e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICBgXHJcbn1cclxuIiwiaW1wb3J0IHsgQmFzZVZlcnNpb25NYW5hZ2VyLCB0eXBlIEljb25SZXN1bHQgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHV0aWxzIGFzIHVpVXRpbHMgfSBmcm9tICdqaW11LXVpJ1xyXG5cclxuY2xhc3MgVmVyc2lvbk1hbmFnZXIgZXh0ZW5kcyBCYXNlVmVyc2lvbk1hbmFnZXIge1xyXG4gIHZlcnNpb25zID0gW3tcclxuICAgIHZlcnNpb246ICcxLjAuMCcsXHJcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBmaXJzdCByZWxlYXNlLicsXHJcbiAgICB1cGdyYWRlcjogKG9sZENvbmZpZykgPT4ge1xyXG4gICAgICBsZXQgbmV3Q29uZmlnID0gb2xkQ29uZmlnXHJcblxyXG4gICAgICBpZiAobmV3Q29uZmlnLmdldEluKFsnc3R5bGVDb25maWcnLCAnbmFtZSddKSkge1xyXG4gICAgICAgIG5ld0NvbmZpZyA9IG5ld0NvbmZpZy5zZXQoJ3N0eWxlQ29uZmlnJywgbmV3Q29uZmlnLnN0eWxlQ29uZmlnLndpdGhvdXQoJ25hbWUnKSlcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG5ld0NvbmZpZy5nZXRJbihbJ3N0eWxlQ29uZmlnJywgJ2N1c3RvbVN0eWxlJ10pKSB7XHJcbiAgICAgICAgbmV3Q29uZmlnID0gbmV3Q29uZmlnLnNldCgnc3R5bGVDb25maWcnLCBuZXdDb25maWcuc3R5bGVDb25maWcud2l0aG91dCgnY3VzdG9tU3R5bGUnKSlcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG5ld0NvbmZpZy5nZXRJbihbJ3N0eWxlQ29uZmlnJywgJ3RoZW1lU3R5bGUnLCAncXVpY2tTdHlsZVR5cGUnXSkpIHtcclxuICAgICAgICBuZXdDb25maWcgPSBuZXdDb25maWcuc2V0SW4oWydzdHlsZUNvbmZpZycsICd0aGVtZVN0eWxlJ10sIHsgcXVpY2tTdHlsZVR5cGU6IG5ld0NvbmZpZy5zdHlsZUNvbmZpZy50aGVtZVN0eWxlLnF1aWNrU3R5bGVUeXBlIH0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG5ld0NvbmZpZyA9IG5ld0NvbmZpZy5zZXRJbihbJ3N0eWxlQ29uZmlnJywgJ3VzZUN1c3RvbSddLCBmYWxzZSlcclxuXHJcbiAgICAgIHJldHVybiBuZXdDb25maWdcclxuICAgIH1cclxuICB9LCB7XHJcbiAgICB2ZXJzaW9uOiAnMS4xLjAnLFxyXG4gICAgZGVzY3JpcHRpb246ICcxLjEuMCcsXHJcbiAgICB1cGdyYWRlcjogKG9sZENvbmZpZykgPT4ge1xyXG4gICAgICBsZXQgbmV3Q29uZmlnID0gb2xkQ29uZmlnXHJcblxyXG4gICAgICBpZiAobmV3Q29uZmlnLmdldEluKFsnc3R5bGVDb25maWcnLCAndXNlQ3VzdG9tJ10pICYmIG5ld0NvbmZpZy5nZXRJbihbJ3N0eWxlQ29uZmlnJywgJ2N1c3RvbVN0eWxlJywgJ3JlZ3VsYXInLCAnYm9yZGVyJywgJ3dpZHRoJ10pKSB7XHJcbiAgICAgICAgbmV3Q29uZmlnID0gbmV3Q29uZmlnLnNldEluKFxyXG4gICAgICAgICAgWydzdHlsZUNvbmZpZycsICdjdXN0b21TdHlsZScsICdyZWd1bGFyJywgJ2JvcmRlcicsICd3aWR0aCddLFxyXG4gICAgICAgICAgdWlVdGlscy5zdHJpbmdPZkxpbmVhclVuaXQobmV3Q29uZmlnLmdldEluKFsnc3R5bGVDb25maWcnLCAnY3VzdG9tU3R5bGUnLCAncmVndWxhcicsICdib3JkZXInLCAnd2lkdGgnXSkpXHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobmV3Q29uZmlnLmdldEluKFsnc3R5bGVDb25maWcnLCAndXNlQ3VzdG9tJ10pICYmIG5ld0NvbmZpZy5nZXRJbihbJ3N0eWxlQ29uZmlnJywgJ2N1c3RvbVN0eWxlJywgJ2hvdmVyJywgJ2JvcmRlcicsICd3aWR0aCddKSkge1xyXG4gICAgICAgIG5ld0NvbmZpZyA9IG5ld0NvbmZpZy5zZXRJbihcclxuICAgICAgICAgIFsnc3R5bGVDb25maWcnLCAnY3VzdG9tU3R5bGUnLCAnaG92ZXInLCAnYm9yZGVyJywgJ3dpZHRoJ10sXHJcbiAgICAgICAgICB1aVV0aWxzLnN0cmluZ09mTGluZWFyVW5pdChuZXdDb25maWcuZ2V0SW4oWydzdHlsZUNvbmZpZycsICdjdXN0b21TdHlsZScsICdob3ZlcicsICdib3JkZXInLCAnd2lkdGgnXSkpXHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbmV3Q29uZmlnXHJcbiAgICB9XHJcbiAgfSwge1xyXG4gICAgdmVyc2lvbjogJzEuMTIuMCcsXHJcbiAgICBkZXNjcmlwdGlvbjogJ2ZpeCBpY29uIHBpY2tlciBjb25maWcnLFxyXG4gICAgdXBncmFkZXI6IChvbGRDb25maWcpID0+IHtcclxuICAgICAgbGV0IG5ld0NvbmZpZyA9IG9sZENvbmZpZ1xyXG5cclxuICAgICAgaWYgKG5ld0NvbmZpZy5nZXRJbihbJ2Z1bmN0aW9uQ29uZmlnJywgJ2ljb24nLCAnZGF0YSddKSkge1xyXG4gICAgICAgIGNvbnN0IGljb25SZXN1bHQ6IEljb25SZXN1bHQgPSB7XHJcbiAgICAgICAgICBzdmc6IG5ld0NvbmZpZy5nZXRJbihbJ2Z1bmN0aW9uQ29uZmlnJywgJ2ljb24nLCAnZGF0YSddKSxcclxuICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgZmlsZW5hbWU6ICcnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld0NvbmZpZyA9IG5ld0NvbmZpZy5zZXRJbihbJ2Z1bmN0aW9uQ29uZmlnJywgJ2ljb24nLCAnZGF0YSddLCBpY29uUmVzdWx0KVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbmV3Q29uZmlnXHJcbiAgICB9XHJcbiAgfV1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHZlcnNpb25NYW5hZ2VyID0gbmV3IFZlcnNpb25NYW5hZ2VyKClcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7XHJcbiAgUmVhY3QsIExpbmtUeXBlLCB0eXBlIEFsbFdpZGdldFByb3BzLCBFeHByZXNzaW9uUGFydFR5cGUsIEV4cHJlc3Npb25SZXNvbHZlckVycm9yQ29kZSwgdHlwZSBMaW5rUmVzdWx0LCBjbGFzc05hbWVzLFxyXG4gIHR5cGUgSU1FeHByZXNzaW9uLCBqc3gsIEV4cHJlc3Npb25SZXNvbHZlckNvbXBvbmVudCwgSW1tdXRhYmxlLCB0eXBlIElNU3RhdGUsIEFwcE1vZGUsIGNzcywgdHlwZSBJTUljb25Qcm9wcywgdHlwZSBTZXJpYWxpemVkU3R5bGVzLFxyXG4gIGdldEFwcFN0b3JlLCB0eXBlIElNVXJsUGFyYW1ldGVycywgdHlwZSBCcm93c2VyU2l6ZU1vZGUsIE1lc3NhZ2VNYW5hZ2VyLCBCdXR0b25DbGlja01lc3NhZ2UsIHR5cGUgTGlua1RhcmdldFxyXG59IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgc3R5bGVVdGlscywgTGluaywgdHlwZSBCdXR0b25Qcm9wcywgSWNvbiwgRGlzdGFuY2VVbml0cywgZGVmYXVsdE1lc3NhZ2VzIGFzIGppbXVVaURlZmF1bHRNZXNzYWdlcyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCB7IHR5cGUgSU1Db25maWcsIEljb25Qb3NpdGlvbiwgdHlwZSBJTVdpZGdldFN0YXRlIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQgeyBnZXRTdHlsZSB9IGZyb20gJy4vc3R5bGUnXHJcbmltcG9ydCB7IHZlcnNpb25NYW5hZ2VyIH0gZnJvbSAnLi4vdmVyc2lvbi1tYW5hZ2VyJ1xyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICB0ZXh0OiBzdHJpbmdcclxuICB0b29sVGlwOiBzdHJpbmdcclxuICB1cmw6IHN0cmluZ1xyXG4gIHRleHRFeHByZXNzaW9uOiBJTUV4cHJlc3Npb25cclxuICB0aXBFeHByZXNzaW9uOiBJTUV4cHJlc3Npb25cclxuICB1cmxFeHByZXNzaW9uOiBJTUV4cHJlc3Npb25cclxufVxyXG5cclxuaW50ZXJmYWNlIEV4dHJhUHJvcHMge1xyXG4gIGFjdGl2ZTogYm9vbGVhblxyXG4gIGFwcE1vZGU6IEFwcE1vZGVcclxuICBxdWVyeU9iamVjdDogSU1VcmxQYXJhbWV0ZXJzXHJcbiAgaXNSVEw6IGJvb2xlYW5cclxuICBicm93c2VyU2l6ZU1vZGU6IEJyb3dzZXJTaXplTW9kZVxyXG4gIHVyaTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8QWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+ICYgRXh0cmFQcm9wcywgU3RhdGU+IHtcclxuICBkb21Ob2RlOiBSZWFjdC5SZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+XHJcbiAgbGFzdENsaWNrVGltZXN0YW1wOiBudW1iZXIgPSBudWxsXHJcblxyXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB0ZXh0OiB0aGlzLmdldFRleHRGcm9tUHJvcHMoKSxcclxuICAgICAgdG9vbFRpcDogdGhpcy5wcm9wcy5jb25maWc/LmZ1bmN0aW9uQ29uZmlnPy50b29sVGlwIHx8ICcnLFxyXG4gICAgICB1cmw6IHRoaXMucHJvcHMuY29uZmlnPy5mdW5jdGlvbkNvbmZpZz8ubGlua1BhcmFtPy52YWx1ZSB8fCAnJyxcclxuICAgICAgdGV4dEV4cHJlc3Npb246IHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXNFbmFibGVkICYmIHRoaXMuZ2V0VGV4dEV4cHJlc3Npb24oKSxcclxuICAgICAgdGlwRXhwcmVzc2lvbjogdGhpcy5wcm9wcy51c2VEYXRhU291cmNlc0VuYWJsZWQgJiYgdGhpcy5nZXRUaXBFeHByZXNzaW9uKCksXHJcbiAgICAgIHVybEV4cHJlc3Npb246IHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXNFbmFibGVkICYmIHRoaXMuZ2V0VXJsRXhwcmVzc2lvbigpXHJcbiAgICB9XHJcbiAgICB0aGlzLmRvbU5vZGUgPSBSZWFjdC5jcmVhdGVSZWYoKVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIG1hcEV4dHJhU3RhdGVQcm9wcyA9IChzdGF0ZTogSU1TdGF0ZSwgb3duUHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPik6IEV4dHJhUHJvcHMgPT4ge1xyXG4gICAgbGV0IHNlbGVjdGVkID0gZmFsc2VcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHN0YXRlLmFwcFJ1bnRpbWVJbmZvLnNlbGVjdGlvblxyXG4gICAgaWYgKHNlbGVjdGlvbiAmJiBzdGF0ZS5hcHBDb25maWcubGF5b3V0c1tzZWxlY3Rpb24ubGF5b3V0SWRdKSB7XHJcbiAgICAgIGNvbnN0IGxheW91dEl0ZW0gPSBzdGF0ZS5hcHBDb25maWcubGF5b3V0c1tzZWxlY3Rpb24ubGF5b3V0SWRdLmNvbnRlbnRbc2VsZWN0aW9uLmxheW91dEl0ZW1JZF1cclxuICAgICAgc2VsZWN0ZWQgPSBsYXlvdXRJdGVtICYmIGxheW91dEl0ZW0ud2lkZ2V0SWQgPT09IG93blByb3BzLmlkXHJcbiAgICB9XHJcbiAgICBjb25zdCBpc0luQnVpbGRlciA9IHN0YXRlLmFwcENvbnRleHQuaXNJbkJ1aWxkZXJcclxuICAgIGNvbnN0IGFjdGl2ZSA9IGlzSW5CdWlsZGVyICYmIHNlbGVjdGVkXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYWN0aXZlLFxyXG4gICAgICBhcHBNb2RlOiBzdGF0ZS5hcHBSdW50aW1lSW5mby5hcHBNb2RlLFxyXG4gICAgICBxdWVyeU9iamVjdDogc3RhdGUucXVlcnlPYmplY3QsXHJcbiAgICAgIGlzUlRMOiBzdGF0ZS5hcHBDb250ZXh0LmlzUlRMLFxyXG4gICAgICBicm93c2VyU2l6ZU1vZGU6IHN0YXRlLmJyb3dzZXJTaXplTW9kZSxcclxuICAgICAgdXJpOiBzdGF0ZS5hcHBDb25maWcud2lkZ2V0c1tvd25Qcm9wcy5pZF0/LnVyaVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIHZlcnNpb25NYW5hZ2VyID0gdmVyc2lvbk1hbmFnZXJcclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlIChwcmV2UHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPiAmIEV4dHJhUHJvcHMsIHByZXZTdGF0ZTogU3RhdGUpIHtcclxuICAgIGlmICghdGhpcy5wcm9wcy51c2VEYXRhU291cmNlc0VuYWJsZWQgJiZcclxuICAgICAgKFxyXG4gICAgICAgIHRoaXMucHJvcHMuY29uZmlnICE9PSBwcmV2UHJvcHMuY29uZmlnIHx8IHByZXZQcm9wcy51c2VEYXRhU291cmNlc0VuYWJsZWRcclxuICAgICAgKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHRleHQ6IHRoaXMuZ2V0VGV4dEZyb21Qcm9wcygpLFxyXG4gICAgICAgIHRvb2xUaXA6IHRoaXMucHJvcHMuY29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLnRvb2xUaXAsXHJcbiAgICAgICAgdXJsOiB0aGlzLnByb3BzLmNvbmZpZyAmJiB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZyAmJiB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5saW5rUGFyYW0gJiYgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcubGlua1BhcmFtLnZhbHVlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXNFbmFibGVkICYmXHJcbiAgICAgIChcclxuICAgICAgICB0aGlzLnByb3BzLmNvbmZpZyAhPT0gcHJldlByb3BzLmNvbmZpZyB8fCAhcHJldlByb3BzLnVzZURhdGFTb3VyY2VzRW5hYmxlZFxyXG4gICAgICApXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgdGV4dEV4cHJlc3Npb246IHRoaXMuZ2V0VGV4dEV4cHJlc3Npb24oKSxcclxuICAgICAgICB0aXBFeHByZXNzaW9uOiB0aGlzLmdldFRpcEV4cHJlc3Npb24oKSxcclxuICAgICAgICB1cmxFeHByZXNzaW9uOiB0aGlzLmdldFVybEV4cHJlc3Npb24oKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VGV4dEZyb21Qcm9wcyA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnByb3BzLmNvbmZpZz8uZnVuY3Rpb25Db25maWc/LnRleHQgPT09ICdzdHJpbmcnXHJcbiAgICAgID8gdGhpcy5wcm9wcy5jb25maWc/LmZ1bmN0aW9uQ29uZmlnPy50ZXh0XHJcbiAgICAgIDogdGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ3ZhcmlhYmxlQnV0dG9uJywgZGVmYXVsdE1lc3NhZ2U6IGppbXVVaURlZmF1bHRNZXNzYWdlcy52YXJpYWJsZUJ1dHRvbiB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0VGlwRXhwcmVzc2lvbiA9ICgpOiBJTUV4cHJlc3Npb24gPT4ge1xyXG4gICAgcmV0dXJuICh0aGlzLnByb3BzLmNvbmZpZyAmJiB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZyAmJiB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy50b29sVGlwRXhwcmVzc2lvbiAmJlxyXG4gICAgICB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy50b29sVGlwRXhwcmVzc2lvbikgfHxcclxuICAgICAgSW1tdXRhYmxlKHtcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBwYXJ0czogW3sgdHlwZTogRXhwcmVzc2lvblBhcnRUeXBlLlN0cmluZywgZXhwOiBgXCIke3RoaXMucHJvcHMuY29uZmlnPy5mdW5jdGlvbkNvbmZpZz8udG9vbFRpcCB8fCAnJ31cImAgfV1cclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGdldFRleHRFeHByZXNzaW9uID0gKCk6IElNRXhwcmVzc2lvbiA9PiB7XHJcbiAgICByZXR1cm4gKHRoaXMucHJvcHMuY29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLnRleHRFeHByZXNzaW9uICYmXHJcbiAgICAgIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLnRleHRFeHByZXNzaW9uKSB8fFxyXG4gICAgICBJbW11dGFibGUoe1xyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIHBhcnRzOiBbeyB0eXBlOiBFeHByZXNzaW9uUGFydFR5cGUuU3RyaW5nLCBleHA6IGBcIiR7dGhpcy5wcm9wcy5jb25maWc/LmZ1bmN0aW9uQ29uZmlnPy50ZXh0IHx8IHRoaXMuZ2V0VGV4dEZyb21Qcm9wcygpfVwiYCB9XVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0VXJsRXhwcmVzc2lvbiA9ICgpOiBJTUV4cHJlc3Npb24gPT4ge1xyXG4gICAgY29uc3QgZXhwcmVzc2lvbiA9IHRoaXMucHJvcHMuY29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmxpbmtQYXJhbSAmJlxyXG4gICAgICB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5saW5rUGFyYW0gJiYgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcubGlua1BhcmFtLmV4cHJlc3Npb25cclxuXHJcbiAgICByZXR1cm4gZXhwcmVzc2lvbiB8fCBudWxsXHJcbiAgfVxyXG5cclxuICBvblRleHRFeHBSZXNvbHZlQ2hhbmdlID0gcmVzdWx0ID0+IHtcclxuICAgIGlmIChyZXN1bHQuaXNTdWNjZXNzZnVsKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0OiByZXN1bHQudmFsdWUgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCByZXM6IHN0cmluZyA9ICcnXHJcbiAgICAgIGNvbnN0IGVycm9yQ29kZSA9IHJlc3VsdC52YWx1ZVxyXG4gICAgICBpZiAoZXJyb3JDb2RlID09PSBFeHByZXNzaW9uUmVzb2x2ZXJFcnJvckNvZGUuRmFpbGVkKSB7XHJcbiAgICAgICAgcmVzID0gdGhpcy5zdGF0ZS50ZXh0RXhwcmVzc2lvbiAmJiB0aGlzLnN0YXRlLnRleHRFeHByZXNzaW9uLm5hbWVcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRleHQ6IHJlcyB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25UaXBFeHBSZXNvbHZlQ2hhbmdlID0gcmVzdWx0ID0+IHtcclxuICAgIGlmIChyZXN1bHQuaXNTdWNjZXNzZnVsKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b29sVGlwOiByZXN1bHQudmFsdWUgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b29sVGlwOiAnJyB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25VcmxFeHBSZXNvbHZlQ2hhbmdlID0gcmVzdWx0ID0+IHtcclxuICAgIGlmIChyZXN1bHQuaXNTdWNjZXNzZnVsKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB1cmw6IHJlc3VsdC52YWx1ZSB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IHJlczogc3RyaW5nID0gJydcclxuICAgICAgY29uc3QgZXJyb3JDb2RlID0gcmVzdWx0LnZhbHVlXHJcbiAgICAgIGlmIChlcnJvckNvZGUgPT09IEV4cHJlc3Npb25SZXNvbHZlckVycm9yQ29kZS5GYWlsZWQpIHtcclxuICAgICAgICByZXMgPSB0aGlzLnN0YXRlLnVybEV4cHJlc3Npb24gJiYgdGhpcy5zdGF0ZS51cmxFeHByZXNzaW9uLm5hbWVcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVybDogcmVzIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRXaGV0aGVyVXNlUXVpY2tTdHlsZSA9IChjb25maWc6IElNQ29uZmlnKTogYm9vbGVhbiA9PiB7XHJcbiAgICByZXR1cm4gISEoY29uZmlnICYmIGNvbmZpZy5zdHlsZUNvbmZpZyAmJiBjb25maWcuc3R5bGVDb25maWcudGhlbWVTdHlsZSAmJiBjb25maWcuc3R5bGVDb25maWcudGhlbWVTdHlsZS5xdWlja1N0eWxlVHlwZSlcclxuICB9XHJcblxyXG4gIGdldEljb25TdHlsZSA9IChyZWd1bGFySWNvblByb3BzOiBJTUljb25Qcm9wcywgaG92ZXJJY29uUHJvcHM6IElNSWNvblByb3BzKTogU2VyaWFsaXplZFN0eWxlcyA9PiB7XHJcbiAgICBjb25zdCByID0gcmVndWxhckljb25Qcm9wcyB8fCAoe30gYXMgSU1JY29uUHJvcHMpXHJcbiAgICBjb25zdCBoID0gaG92ZXJJY29uUHJvcHMgfHwgKHt9IGFzIElNSWNvblByb3BzKVxyXG5cclxuICAgIHJldHVybiBjc3NgXHJcbiAgICAgICYgaW1nLCAmIHN2Z3tcclxuICAgICAgICBjb2xvcjogJHtyLmNvbG9yfTtcclxuICAgICAgICBmaWxsOiAke3IuY29sb3J9O1xyXG4gICAgICAgIHdpZHRoOiAke3Iuc2l6ZX0ke0Rpc3RhbmNlVW5pdHMuUElYRUx9O1xyXG4gICAgICAgIGhlaWdodDogJHtyLnNpemV9JHtEaXN0YW5jZVVuaXRzLlBJWEVMfTtcclxuICAgICAgfVxyXG4gICAgICAmOmhvdmVye1xyXG4gICAgICAgIGltZywgc3Zne1xyXG4gICAgICAgICAgY29sb3I6ICR7aC5jb2xvcn07XHJcbiAgICAgICAgICBmaWxsOiAke2guY29sb3J9O1xyXG4gICAgICAgICAgd2lkdGg6ICR7aC5zaXplfSR7RGlzdGFuY2VVbml0cy5QSVhFTH07XHJcbiAgICAgICAgICBoZWlnaHQ6ICR7aC5zaXplfSR7RGlzdGFuY2VVbml0cy5QSVhFTH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgfVxyXG5cclxuICByZW1vdmVVbmRlZmluZWRTdHlsZSA9IChzdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyk6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPT4ge1xyXG4gICAgaWYgKCFzdHlsZSkge1xyXG4gICAgICByZXR1cm4gc3R5bGVcclxuICAgIH1cclxuICAgIGNvbnN0IHJlbW92ZWRVbmRlZmluZWRTdHlsZSA9IHt9XHJcbiAgICBPYmplY3Qua2V5cyhzdHlsZSkuZm9yRWFjaChzdHlsZU5hbWUgPT4ge1xyXG4gICAgICBpZiAoKHR5cGVvZiBzdHlsZVtzdHlsZU5hbWVdID09PSAnc3RyaW5nJyAmJiAhc3R5bGVbc3R5bGVOYW1lXS5pbmNsdWRlcygndW5kZWZpbmVkJykpIHx8XHJcbiAgICAgICAgdHlwZW9mIHN0eWxlW3N0eWxlTmFtZV0gPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgcmVtb3ZlZFVuZGVmaW5lZFN0eWxlW3N0eWxlTmFtZV0gPSBzdHlsZVtzdHlsZU5hbWVdXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gcmVtb3ZlZFVuZGVmaW5lZFN0eWxlXHJcbiAgfVxyXG5cclxuICBnZXRMaW5rQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5wcm9wcy5jb25maWdcclxuICAgIGNvbnN0IGxpbmtQYXJhbSA9IGNvbmZpZy5mdW5jdGlvbkNvbmZpZy5saW5rUGFyYW1cclxuICAgIGNvbnN0IHRleHQgPSB0aGlzLnN0YXRlLnRleHRcclxuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5zdGF0ZS50b29sVGlwXHJcbiAgICBjb25zdCBpY29uUHJvcGVydHkgPSBjb25maWcuZnVuY3Rpb25Db25maWc/Lmljb24/LmRhdGE/LnByb3BlcnRpZXNcclxuICAgIGNvbnN0IGljb25OYW1lID0gaWNvblByb3BlcnR5Py5pc1VwbG9hZGVkID8gaWNvblByb3BlcnR5Py5vcmlnaW5hbE5hbWUgOiBpY29uUHJvcGVydHk/LmZpbGVuYW1lXHJcbiAgICBsZXQgYWNjZXNzaWJpbGl0eUxhYmVsID0gdGhpcy5zdGF0ZS50b29sVGlwIHx8IHRleHQgfHwgaWNvbk5hbWVcclxuXHJcbiAgICBsZXQgY3VzdG9tU3R5bGVcclxuICAgIGxldCBpY29uU3R5bGVcclxuICAgIFxyXG4gICAgaWYgKGNvbmZpZy5zdHlsZUNvbmZpZyAmJiBjb25maWcuc3R5bGVDb25maWcuY3VzdG9tU3R5bGUpIHtcclxuICAgICAgY29uc3QgcmVndWxhciA9IGNvbmZpZy5zdHlsZUNvbmZpZy5jdXN0b21TdHlsZS5yZWd1bGFyXHJcbiAgICAgIGNvbnN0IGhvdmVyID0gY29uZmlnLnN0eWxlQ29uZmlnLmN1c3RvbVN0eWxlLmhvdmVyXHJcbiAgICAgIGlmIChjb25maWcuc3R5bGVDb25maWcudXNlQ3VzdG9tKSB7XHJcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBzdHlsZVV0aWxzLnRvQ1NTU3R5bGUocmVndWxhciAmJiByZWd1bGFyLndpdGhvdXQoJ2ljb25Qcm9wcycpLmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSkpIGFzIFJlYWN0LkNTU1Byb3BlcnRpZXNcclxuICAgICAgICBjb25zdCBvcmlnaW5hbEhvdmVyU3R5bGUgPSBzdHlsZVV0aWxzLnRvQ1NTU3R5bGUoaG92ZXIgJiYgaG92ZXIud2l0aG91dCgnaWNvblByb3BzJykuYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KSkgYXMgUmVhY3QuQ1NTUHJvcGVydGllc1xyXG4gICAgICAgIGNvbnN0IGhvdmVyU3R5bGUgPSB7IC4uLnN0eWxlLCAuLi5vcmlnaW5hbEhvdmVyU3R5bGUgfVxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZSAmJiB0aGlzLnByb3BzLmFwcE1vZGUgIT09IEFwcE1vZGUuUnVuKSB7XHJcbiAgICAgICAgICBjb25zdCB3aWRnZXRTdGF0ZTogSU1XaWRnZXRTdGF0ZSA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS53aWRnZXRzU3RhdGVbdGhpcy5wcm9wcy5pZF0gfHwgSW1tdXRhYmxlKHt9KVxyXG4gICAgICAgICAgY3VzdG9tU3R5bGUgPSB7XHJcbiAgICAgICAgICAgIHN0eWxlOiB3aWRnZXRTdGF0ZS5pc0NvbmZpZ3VyaW5nSG92ZXJcclxuICAgICAgICAgICAgICA/IHsgLi4udGhpcy5yZW1vdmVVbmRlZmluZWRTdHlsZShzdHlsZSksIC4uLnRoaXMucmVtb3ZlVW5kZWZpbmVkU3R5bGUoaG92ZXJTdHlsZSkgfVxyXG4gICAgICAgICAgICAgIDogc3R5bGUsXHJcbiAgICAgICAgICAgIGhvdmVyU3R5bGVcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGljb25TdHlsZSA9IHRoaXMuZ2V0SWNvblN0eWxlKFxyXG4gICAgICAgICAgICB3aWRnZXRTdGF0ZS5pc0NvbmZpZ3VyaW5nSG92ZXIgPyB7IC4uLnJlZ3VsYXI/Lmljb25Qcm9wcywgLi4uaG92ZXI/Lmljb25Qcm9wcyB9IDogcmVndWxhcj8uaWNvblByb3BzLFxyXG4gICAgICAgICAgICBob3Zlcj8uaWNvblByb3BzXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGN1c3RvbVN0eWxlID0ge1xyXG4gICAgICAgICAgICBzdHlsZSxcclxuICAgICAgICAgICAgaG92ZXJTdHlsZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWNvblN0eWxlID0gdGhpcy5nZXRJY29uU3R5bGUocmVndWxhciAmJiByZWd1bGFyLmljb25Qcm9wcywgaG92ZXIgJiYgaG92ZXIuaWNvblByb3BzKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgdXNlUXVpY2tTdHlsZSA9IHRoaXMuZ2V0V2hldGhlclVzZVF1aWNrU3R5bGUoY29uZmlnKVxyXG4gICAgY29uc3QgdGhlbWVTdHlsZTogQnV0dG9uUHJvcHMgPSB1c2VRdWlja1N0eWxlXHJcbiAgICAgID8ge1xyXG4gICAgICAgICAgdHlwZTogY29uZmlnLnN0eWxlQ29uZmlnLnRoZW1lU3R5bGUucXVpY2tTdHlsZVR5cGVcclxuICAgICAgICB9XHJcbiAgICAgIDoge1xyXG4gICAgICAgICAgdHlwZTogJ2RlZmF1bHQnXHJcbiAgICAgICAgfVxyXG5cclxuICAgIGNvbnN0IGJhc2ljQ2xhc3NOYW1lcyA9ICd3aWRnZXQtYnV0dG9uLWxpbmsgdGV4dC10cnVuY2F0ZSB3LTEwMCBoLTEwMCBwLTAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJ1xyXG5cclxuICAgIGxldCBxdWVyeU9iamVjdFxyXG4gICAgbGV0IHRhcmdldDogTGlua1RhcmdldFxyXG4gICAgbGV0IGxpbmtUbzogTGlua1Jlc3VsdFxyXG4gICAgaWYgKGxpbmtQYXJhbSAmJiBsaW5rUGFyYW0ubGlua1R5cGUpIHtcclxuICAgICAgdGFyZ2V0ID0gbGlua1BhcmFtLm9wZW5UeXBlXHJcbiAgICAgIGxpbmtUbyA9IHtcclxuICAgICAgICBsaW5rVHlwZTogbGlua1BhcmFtLmxpbmtUeXBlXHJcbiAgICAgIH0gYXMgTGlua1Jlc3VsdFxyXG5cclxuICAgICAgLy8gY29uc3QgZXhiVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZXhiX2F1dGgnKVxyXG4gICAgICAvLyBjb25zb2xlLmxvZygnZXhiJyxleGJUb2tlbilcclxuXHJcbiAgICAgIGxldCBleGJUb2tlbiA9ICcnXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmF3TG9jYWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZXhiX2F1dGgnKVxyXG4gICAgICAgIGNvbnN0IHJhd1Nlc3Npb24gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdleGJfYXV0aCcpXHJcbiAgICAgIFxyXG4gICAgICAgIGlmIChyYXdMb2NhbCkge1xyXG4gICAgICAgICAgY29uc3QgcGFyc2VkTG9jYWwgPSBKU09OLnBhcnNlKHJhd0xvY2FsKVxyXG4gICAgICAgICAgaWYgKHBhcnNlZExvY2FsPy50b2tlbikge1xyXG4gICAgICAgICAgICBleGJUb2tlbiA9IHBhcnNlZExvY2FsLnRva2VuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBpZiAoIWV4YlRva2VuICYmIHJhd1Nlc3Npb24pIHtcclxuICAgICAgICAgIGNvbnN0IHBhcnNlZFNlc3Npb24gPSBKU09OLnBhcnNlKHJhd1Nlc3Npb24pXHJcbiAgICAgICAgICBpZiAocGFyc2VkU2Vzc2lvbj8udG9rZW4pIHtcclxuICAgICAgICAgICAgZXhiVG9rZW4gPSBwYXJzZWRTZXNzaW9uLnRva2VuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ0ZhaWxlZCB0byBwYXJzZSBleGJfYXV0aDonLCBlcnIpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdleGInLGV4YlRva2VuKVxyXG5cclxuICAgICAgaWYgKGxpbmtQYXJhbS5saW5rVHlwZSA9PT0gTGlua1R5cGUuV2ViQWRkcmVzcykge1xyXG4gICAgICAgIGNvbnN0IGJhc2VVcmwgPSB0aGlzLnN0YXRlLnVybFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCB1cmxPYmogPSBuZXcgVVJMKGJhc2VVcmwsIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pXHJcbiAgICAgICAgICB1cmxPYmouc2VhcmNoUGFyYW1zLnNldCgndG9rZW4nLCBleGJUb2tlbilcclxuICAgICAgICAgIGxpbmtUby52YWx1ZSA9IHVybE9iai50b1N0cmluZygpXHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIFVSTDonLCBiYXNlVXJsKVxyXG4gICAgICAgICAgbGlua1RvLnZhbHVlID0gYmFzZVVybFxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsaW5rVG8udmFsdWUgPSBsaW5rUGFyYW0udmFsdWVcclxuICAgICAgICBxdWVyeU9iamVjdCA9IHRoaXMucHJvcHMucXVlcnlPYmplY3RcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGljb24gPSBjb25maWcuZnVuY3Rpb25Db25maWcuaWNvblxyXG4gICAgY29uc3QgaXNSVEwgPSB0aGlzLnByb3BzLmlzUlRMXHJcbiAgICBjb25zdCBsZWZ0SWNvbiA9IGljb24gJiYgKCFpY29uLnBvc2l0aW9uIHx8IGljb24ucG9zaXRpb24gPT09IEljb25Qb3NpdGlvbi5MZWZ0KSAmJiA8SWNvbiBpY29uPXtpY29uLmRhdGEuc3ZnfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyAnbXItMiBtbC0wJzogISF0ZXh0ICYmICFpc1JUTCwgJ21sLTIgbXItMCc6ICEhdGV4dCAmJiBpc1JUTCwgJ214LTAnOiAhdGV4dCB9KX0gYXJpYS1oaWRkZW49e3RydWV9IC8+XHJcbiAgICBjb25zdCByaWdodEljb24gPSBpY29uICYmIGljb24ucG9zaXRpb24gJiYgaWNvbi5wb3NpdGlvbiA9PT0gSWNvblBvc2l0aW9uLlJpZ2h0ICYmIDxJY29uIGljb249e2ljb24uZGF0YS5zdmd9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7ICdtbC0yIG1yLTAnOiAhIXRleHQgJiYgIWlzUlRMLCAnbXItMiBtbC0wJzogISF0ZXh0ICYmIGlzUlRMLCAnbXgtMCc6ICF0ZXh0IH0pfSBhcmlhLWhpZGRlbj17dHJ1ZX0gLz5cclxuXHJcbiAgICBpZiAodGFyZ2V0ID09PSAnX2JsYW5rJykge1xyXG4gICAgICBhY2Nlc3NpYmlsaXR5TGFiZWwgPSBgJHthY2Nlc3NpYmlsaXR5TGFiZWx9LCAke3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdvcGVuSW5OZXdXaW5kb3cnIH0pfWBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhdXRvU2l6ZSA9IHRoaXMucHJvcHMuYXV0b1dpZHRoICYmIHRoaXMucHJvcHMuYXV0b0hlaWdodFxyXG4gICAgY29uc3QgaXNJY29uID0gaWNvbiAmJiAhdGV4dFxyXG5cclxuICAgIHJldHVybiA8TGluayB0bz17bGlua1RvfSB0YXJnZXQ9e3RhcmdldH0gcXVlcnlPYmplY3Q9e3F1ZXJ5T2JqZWN0fVxyXG4gICAgICB0aXRsZT17dGl0bGV9IGNsYXNzTmFtZT17YmFzaWNDbGFzc05hbWVzfSByb2xlPSdidXR0b24nXHJcbiAgICAgIGN1c3RvbVN0eWxlPXtjdXN0b21TdHlsZX0gey4uLnRoZW1lU3R5bGV9IGNzcz17aWNvblN0eWxlfVxyXG4gICAgICBhcmlhLWxhYmVsPXthY2Nlc3NpYmlsaXR5TGFiZWx9XHJcbiAgICA+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnd2lkZ2V0LWJ1dHRvbi10ZXh0IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlcicsIHsgJ2F1dG8tc2l6ZS1pY29uJzogYXV0b1NpemUgJiYgaXNJY29uIH0pfSA+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaXNSVEwgPyByaWdodEljb24gOiBsZWZ0SWNvblxyXG4gICAgICAgIH1cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtdHJ1bmNhdGUnPnt0ZXh0fTwvc3Bhbj5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBpc1JUTCA/IGxlZnRJY29uIDogcmlnaHRJY29uXHJcbiAgICAgICAgfVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L0xpbms+XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrID0gZSA9PiB7XHJcbiAgICBjb25zdCB0aW1lc3RhbXAgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAvLyBpbiBjYXNlIHRoYXQgYm90aCBjbGljayBhbmQgdG91Y2hlbmQgYmUgdHJpZ2dlcmVkIGluIGlPU1xyXG4gICAgaWYgKHRoaXMubGFzdENsaWNrVGltZXN0YW1wICYmIHRpbWVzdGFtcCAtIHRoaXMubGFzdENsaWNrVGltZXN0YW1wIDwgMjAwKSByZXR1cm5cclxuICAgIHRoaXMubGFzdENsaWNrVGltZXN0YW1wID0gdGltZXN0YW1wXHJcbiAgICBlLmV4YkV2ZW50VHlwZSA9ICdsaW5rQ2xpY2snXHJcbiAgICBNZXNzYWdlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1Ymxpc2hNZXNzYWdlKFxyXG4gICAgICBuZXcgQnV0dG9uQ2xpY2tNZXNzYWdlKHRoaXMucHJvcHMuaWQpXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3QgaXNEYXRhU291cmNlVXNlZCA9IHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXNFbmFibGVkXHJcblxyXG4gICAgY29uc3QgTGlua0NvbXBvbmVudCA9IHRoaXMuZ2V0TGlua0NvbXBvbmVudCgpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImppbXUtd2lkZ2V0IHdpZGdldC1idXR0b24gdy0xMDAgaC0xMDBcIlxyXG4gICAgICAgIGNzcz17Z2V0U3R5bGUodGhpcy5wcm9wcy50aGVtZSl9IHJlZj17dGhpcy5kb21Ob2RlfVxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGlja31cclxuICAgICAgICBvblRvdWNoRW5kPXt0aGlzLm9uQ2xpY2t9XHJcbiAgICAgICAgb25LZXlVcD17ZXZ0ID0+IHtcclxuICAgICAgICAgIGlmIChldnQua2V5ID09PSAnICcgfHwgZXZ0LmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICB0aGlzLm9uQ2xpY2soZXZ0KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7TGlua0NvbXBvbmVudH1cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fT5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaXNEYXRhU291cmNlVXNlZCAmJlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxFeHByZXNzaW9uUmVzb2x2ZXJDb21wb25lbnQgdXNlRGF0YVNvdXJjZXM9e3RoaXMucHJvcHMudXNlRGF0YVNvdXJjZXN9IGV4cHJlc3Npb249e3RoaXMuc3RhdGUudGV4dEV4cHJlc3Npb259XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblRleHRFeHBSZXNvbHZlQ2hhbmdlfSB3aWRnZXRJZD17dGhpcy5wcm9wcy5pZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxFeHByZXNzaW9uUmVzb2x2ZXJDb21wb25lbnQgdXNlRGF0YVNvdXJjZXM9e3RoaXMucHJvcHMudXNlRGF0YVNvdXJjZXN9IGV4cHJlc3Npb249e3RoaXMuc3RhdGUudGlwRXhwcmVzc2lvbn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVGlwRXhwUmVzb2x2ZUNoYW5nZX0gd2lkZ2V0SWQ9e3RoaXMucHJvcHMuaWR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8RXhwcmVzc2lvblJlc29sdmVyQ29tcG9uZW50IHVzZURhdGFTb3VyY2VzPXt0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzfSBleHByZXNzaW9uPXt0aGlzLnN0YXRlLnVybEV4cHJlc3Npb259XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblVybEV4cFJlc29sdmVDaGFuZ2V9IHdpZGdldElkPXt0aGlzLnByb3BzLmlkfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==