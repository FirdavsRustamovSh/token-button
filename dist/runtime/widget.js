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
                    const raw = localStorage.getItem('exb_auth');
                    if (raw) {
                        const parsed = JSON.parse(raw);
                        exbToken = (parsed === null || parsed === void 0 ? void 0 : parsed.token) || '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jdXN0b20tYnV0dG9uL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQSxJQUFZLFlBR1g7QUFIRCxXQUFZLFlBQVk7SUFDdEIsNkJBQWE7SUFDYiwrQkFBZTtBQUNqQixDQUFDLEVBSFcsWUFBWSxLQUFaLFlBQVksUUFHdkI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0I0RTtBQUV0RSxTQUFTLFFBQVEsQ0FBRSxLQUF1QjtJQUMvQyxPQUFPLDhDQUFHOzs7Ozs7Ozs7Ozs7O0dBYVQ7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQjhEO0FBQ3JCO0FBRTFDLE1BQU0sY0FBZSxTQUFRLHlEQUFrQjtJQUEvQzs7UUFDRSxhQUFRLEdBQUcsQ0FBQztnQkFDVixPQUFPLEVBQUUsT0FBTztnQkFDaEIsV0FBVyxFQUFFLG9CQUFvQjtnQkFDakMsUUFBUSxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUU7b0JBQ3RCLElBQUksU0FBUyxHQUFHLFNBQVM7b0JBRXpCLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUM7d0JBQzdDLFNBQVMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDakYsQ0FBQztvQkFFRCxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDO3dCQUNwRCxTQUFTLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ3hGLENBQUM7b0JBRUQsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxn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QUFjLEVBQUUsUUFBa0MsRUFBYyxFQUFFOztJQUM3RixJQUFJLFFBQVEsR0FBRyxLQUFLO0lBQ3BCLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBUztJQUNoRCxJQUFJLFNBQVMsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUM3RCxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7UUFDOUYsUUFBUSxHQUFHLFVBQVUsSUFBSSxVQUFVLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxFQUFFO0lBQzlELENBQUM7SUFDRCxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVc7SUFDaEQsTUFBTSxNQUFNLEdBQUcsV0FBVyxJQUFJLFFBQVE7SUFFdEMsT0FBTztRQUNMLE1BQU07UUFDTixPQUFPLEVBQUUsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPO1FBQ3JDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztRQUM5QixLQUFLLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLO1FBQzdCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtRQUN0QyxHQUFHLEVBQUUsV0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQywwQ0FBRSxHQUFHO0tBQy9DO0FBQ0gsQ0FBQztBQUVNLHFCQUFjLEdBQUcsNERBQWM7aUVBckNuQixNQUFNO0FBeVZuQixTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jdXN0b20tYnV0dG9uL3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2N1c3RvbS1idXR0b24vc3JjL3J1bnRpbWUvc3R5bGUudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2N1c3RvbS1idXR0b24vc3JjL3ZlcnNpb24tbWFuYWdlci50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY3VzdG9tLWJ1dHRvbi9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgSW1tdXRhYmxlT2JqZWN0LCBFeHByZXNzaW9uLCBUaGVtZUJ1dHRvblR5cGUsIEljb25Qcm9wcywgSWNvblJlc3VsdCwgIExpbmtQYXJhbSB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHR5cGUgeyBTdHlsZVNldHRpbmdzIH0gZnJvbSAnamltdS11aSdcclxuXHJcbmV4cG9ydCB0eXBlIElNQ29uZmlnID0gSW1tdXRhYmxlT2JqZWN0PENvbmZpZz5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnIHtcclxuICBmdW5jdGlvbkNvbmZpZzogRnVuY3Rpb25Db25maWdcclxuICBzdHlsZUNvbmZpZz86IFN0eWxlQ29uZmlnXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRnVuY3Rpb25Db25maWcge1xyXG4gIHRvb2xUaXA/OiBzdHJpbmdcclxuICB0ZXh0Pzogc3RyaW5nXHJcbiAgaWNvbj86IEljb25Db25maWdcclxuICAvKipcclxuICAgKiBjdXN0b21JY29ucyBpcyB1c2VkIGZvciBkZXZlbG9wZXJzIHRvIHNldCBjZXJ0YWluIGljb25zIGFzIHByZXNldCBpY29ucywgaXQgY291bGQgbm90IGJlIHVwbG9hZGVkIGluIHRoZSBidWlsZGVyLlxyXG4gICAqIFRoZXNlIGN1c3RvbSBpY29ucyBjYW4ndCBiZSBkZWxldGUuXHJcbiAgICovXHJcbiAgY3VzdG9tSWNvbnM/OiBJY29uUmVzdWx0W11cclxuICB0ZXh0RXhwcmVzc2lvbj86IEV4cHJlc3Npb25cclxuICB0b29sVGlwRXhwcmVzc2lvbj86IEV4cHJlc3Npb25cclxuICBsaW5rUGFyYW0/OiBMaW5rUGFyYW1cclxufVxyXG5cclxuZXhwb3J0IGVudW0gSWNvblBvc2l0aW9uIHtcclxuICBMZWZ0ID0gJ0xFRlQnLFxyXG4gIFJpZ2h0ID0gJ1JJR0hUJ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEljb25Db25maWcge1xyXG4gIGRhdGE6IEljb25SZXN1bHRcclxuICBwb3NpdGlvbjogSWNvblBvc2l0aW9uXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVDb25maWcge1xyXG4gIHVzZUN1c3RvbTogYm9vbGVhblxyXG4gIHRoZW1lU3R5bGU/OiBUaGVtZVN0eWxlXHJcbiAgY3VzdG9tU3R5bGU/OiBDdXN0b21TdHlsZVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRoZW1lU3R5bGUge1xyXG4gIHF1aWNrU3R5bGVUeXBlOiBUaGVtZUJ1dHRvblR5cGVcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDdXN0b21TdHlsZSB7XHJcbiAgcmVndWxhcjogQWR2YW5jZVN0eWxlU2V0dGluZ3NcclxuICBob3ZlcjogQWR2YW5jZVN0eWxlU2V0dGluZ3NcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZHZhbmNlU3R5bGVTZXR0aW5ncyBleHRlbmRzIFN0eWxlU2V0dGluZ3Mge1xyXG4gIGljb25Qcm9wcz86IEljb25Qcm9wc1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdpZGdldFN0YXRlIHtcclxuICBpc0NvbmZpZ3VyaW5nSG92ZXI/OiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIElNQWR2YW5jZVN0eWxlU2V0dGluZ3MgPSBJbW11dGFibGVPYmplY3Q8QWR2YW5jZVN0eWxlU2V0dGluZ3M+XHJcblxyXG5leHBvcnQgdHlwZSBJTUljb25Qcm9wcyA9IEltbXV0YWJsZU9iamVjdDxJY29uUHJvcHM+XHJcblxyXG5leHBvcnQgdHlwZSBJTUN1c3RvbVN0eWxlID0gSW1tdXRhYmxlT2JqZWN0PEN1c3RvbVN0eWxlPlxyXG5cclxuZXhwb3J0IHR5cGUgSU1UaGVtZVN0eWxlID0gSW1tdXRhYmxlT2JqZWN0PFRoZW1lU3R5bGU+XHJcblxyXG5leHBvcnQgdHlwZSBJTVN0eWxlQ29uZmlnID0gSW1tdXRhYmxlT2JqZWN0PFN0eWxlQ29uZmlnPlxyXG5cclxuZXhwb3J0IHR5cGUgSU1JY29uUG9zaXRpb24gPSBJbW11dGFibGVPYmplY3Q8SWNvblBvc2l0aW9uPlxyXG5cclxuZXhwb3J0IHR5cGUgSU1JY29uQ29uZmlnID0gSW1tdXRhYmxlT2JqZWN0PEljb25Db25maWc+XHJcblxyXG5leHBvcnQgdHlwZSBJTVdpZGdldFN0YXRlID0gSW1tdXRhYmxlT2JqZWN0PFdpZGdldFN0YXRlPlxyXG4iLCJpbXBvcnQgeyB0eXBlIElNVGhlbWVWYXJpYWJsZXMsIGNzcywgdHlwZSBTZXJpYWxpemVkU3R5bGVzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0eWxlICh0aGVtZTogSU1UaGVtZVZhcmlhYmxlcyk6IFNlcmlhbGl6ZWRTdHlsZXMge1xyXG4gIHJldHVybiBjc3NgXHJcbiAgICAmPmEge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5hdXRvLXNpemUtaWNvbiB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgfVxyXG4gICAgLndpZGdldC1idXR0b24tdGV4dHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgYFxyXG59XHJcbiIsImltcG9ydCB7IEJhc2VWZXJzaW9uTWFuYWdlciwgdHlwZSBJY29uUmVzdWx0IH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB1dGlscyBhcyB1aVV0aWxzIH0gZnJvbSAnamltdS11aSdcclxuXHJcbmNsYXNzIFZlcnNpb25NYW5hZ2VyIGV4dGVuZHMgQmFzZVZlcnNpb25NYW5hZ2VyIHtcclxuICB2ZXJzaW9ucyA9IFt7XHJcbiAgICB2ZXJzaW9uOiAnMS4wLjAnLFxyXG4gICAgZGVzY3JpcHRpb246ICdUaGUgZmlyc3QgcmVsZWFzZS4nLFxyXG4gICAgdXBncmFkZXI6IChvbGRDb25maWcpID0+IHtcclxuICAgICAgbGV0IG5ld0NvbmZpZyA9IG9sZENvbmZpZ1xyXG5cclxuICAgICAgaWYgKG5ld0NvbmZpZy5nZXRJbihbJ3N0eWxlQ29uZmlnJywgJ25hbWUnXSkpIHtcclxuICAgICAgICBuZXdDb25maWcgPSBuZXdDb25maWcuc2V0KCdzdHlsZUNvbmZpZycsIG5ld0NvbmZpZy5zdHlsZUNvbmZpZy53aXRob3V0KCduYW1lJykpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChuZXdDb25maWcuZ2V0SW4oWydzdHlsZUNvbmZpZycsICdjdXN0b21TdHlsZSddKSkge1xyXG4gICAgICAgIG5ld0NvbmZpZyA9IG5ld0NvbmZpZy5zZXQoJ3N0eWxlQ29uZmlnJywgbmV3Q29uZmlnLnN0eWxlQ29uZmlnLndpdGhvdXQoJ2N1c3RvbVN0eWxlJykpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChuZXdDb25maWcuZ2V0SW4oWydzdHlsZUNvbmZpZycsICd0aGVtZVN0eWxlJywgJ3F1aWNrU3R5bGVUeXBlJ10pKSB7XHJcbiAgICAgICAgbmV3Q29uZmlnID0gbmV3Q29uZmlnLnNldEluKFsnc3R5bGVDb25maWcnLCAndGhlbWVTdHlsZSddLCB7IHF1aWNrU3R5bGVUeXBlOiBuZXdDb25maWcuc3R5bGVDb25maWcudGhlbWVTdHlsZS5xdWlja1N0eWxlVHlwZSB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBuZXdDb25maWcgPSBuZXdDb25maWcuc2V0SW4oWydzdHlsZUNvbmZpZycsICd1c2VDdXN0b20nXSwgZmFsc2UpXHJcblxyXG4gICAgICByZXR1cm4gbmV3Q29uZmlnXHJcbiAgICB9XHJcbiAgfSwge1xyXG4gICAgdmVyc2lvbjogJzEuMS4wJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnMS4xLjAnLFxyXG4gICAgdXBncmFkZXI6IChvbGRDb25maWcpID0+IHtcclxuICAgICAgbGV0IG5ld0NvbmZpZyA9IG9sZENvbmZpZ1xyXG5cclxuICAgICAgaWYgKG5ld0NvbmZpZy5nZXRJbihbJ3N0eWxlQ29uZmlnJywgJ3VzZUN1c3RvbSddKSAmJiBuZXdDb25maWcuZ2V0SW4oWydzdHlsZUNvbmZpZycsICdjdXN0b21TdHlsZScsICdyZWd1bGFyJywgJ2JvcmRlcicsICd3aWR0aCddKSkge1xyXG4gICAgICAgIG5ld0NvbmZpZyA9IG5ld0NvbmZpZy5zZXRJbihcclxuICAgICAgICAgIFsnc3R5bGVDb25maWcnLCAnY3VzdG9tU3R5bGUnLCAncmVndWxhcicsICdib3JkZXInLCAnd2lkdGgnXSxcclxuICAgICAgICAgIHVpVXRpbHMuc3RyaW5nT2ZMaW5lYXJVbml0KG5ld0NvbmZpZy5nZXRJbihbJ3N0eWxlQ29uZmlnJywgJ2N1c3RvbVN0eWxlJywgJ3JlZ3VsYXInLCAnYm9yZGVyJywgJ3dpZHRoJ10pKVxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG5ld0NvbmZpZy5nZXRJbihbJ3N0eWxlQ29uZmlnJywgJ3VzZUN1c3RvbSddKSAmJiBuZXdDb25maWcuZ2V0SW4oWydzdHlsZUNvbmZpZycsICdjdXN0b21TdHlsZScsICdob3ZlcicsICdib3JkZXInLCAnd2lkdGgnXSkpIHtcclxuICAgICAgICBuZXdDb25maWcgPSBuZXdDb25maWcuc2V0SW4oXHJcbiAgICAgICAgICBbJ3N0eWxlQ29uZmlnJywgJ2N1c3RvbVN0eWxlJywgJ2hvdmVyJywgJ2JvcmRlcicsICd3aWR0aCddLFxyXG4gICAgICAgICAgdWlVdGlscy5zdHJpbmdPZkxpbmVhclVuaXQobmV3Q29uZmlnLmdldEluKFsnc3R5bGVDb25maWcnLCAnY3VzdG9tU3R5bGUnLCAnaG92ZXInLCAnYm9yZGVyJywgJ3dpZHRoJ10pKVxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG5ld0NvbmZpZ1xyXG4gICAgfVxyXG4gIH0sIHtcclxuICAgIHZlcnNpb246ICcxLjEyLjAnLFxyXG4gICAgZGVzY3JpcHRpb246ICdmaXggaWNvbiBwaWNrZXIgY29uZmlnJyxcclxuICAgIHVwZ3JhZGVyOiAob2xkQ29uZmlnKSA9PiB7XHJcbiAgICAgIGxldCBuZXdDb25maWcgPSBvbGRDb25maWdcclxuXHJcbiAgICAgIGlmIChuZXdDb25maWcuZ2V0SW4oWydmdW5jdGlvbkNvbmZpZycsICdpY29uJywgJ2RhdGEnXSkpIHtcclxuICAgICAgICBjb25zdCBpY29uUmVzdWx0OiBJY29uUmVzdWx0ID0ge1xyXG4gICAgICAgICAgc3ZnOiBuZXdDb25maWcuZ2V0SW4oWydmdW5jdGlvbkNvbmZpZycsICdpY29uJywgJ2RhdGEnXSksXHJcbiAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgIGZpbGVuYW1lOiAnJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBuZXdDb25maWcgPSBuZXdDb25maWcuc2V0SW4oWydmdW5jdGlvbkNvbmZpZycsICdpY29uJywgJ2RhdGEnXSwgaWNvblJlc3VsdClcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG5ld0NvbmZpZ1xyXG4gICAgfVxyXG4gIH1dXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB2ZXJzaW9uTWFuYWdlciA9IG5ldyBWZXJzaW9uTWFuYWdlcigpXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQge1xyXG4gIFJlYWN0LCBMaW5rVHlwZSwgdHlwZSBBbGxXaWRnZXRQcm9wcywgRXhwcmVzc2lvblBhcnRUeXBlLCBFeHByZXNzaW9uUmVzb2x2ZXJFcnJvckNvZGUsIHR5cGUgTGlua1Jlc3VsdCwgY2xhc3NOYW1lcyxcclxuICB0eXBlIElNRXhwcmVzc2lvbiwganN4LCBFeHByZXNzaW9uUmVzb2x2ZXJDb21wb25lbnQsIEltbXV0YWJsZSwgdHlwZSBJTVN0YXRlLCBBcHBNb2RlLCBjc3MsIHR5cGUgSU1JY29uUHJvcHMsIHR5cGUgU2VyaWFsaXplZFN0eWxlcyxcclxuICBnZXRBcHBTdG9yZSwgdHlwZSBJTVVybFBhcmFtZXRlcnMsIHR5cGUgQnJvd3NlclNpemVNb2RlLCBNZXNzYWdlTWFuYWdlciwgQnV0dG9uQ2xpY2tNZXNzYWdlLCB0eXBlIExpbmtUYXJnZXRcclxufSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHN0eWxlVXRpbHMsIExpbmssIHR5cGUgQnV0dG9uUHJvcHMsIEljb24sIERpc3RhbmNlVW5pdHMsIGRlZmF1bHRNZXNzYWdlcyBhcyBqaW11VWlEZWZhdWx0TWVzc2FnZXMgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgeyB0eXBlIElNQ29uZmlnLCBJY29uUG9zaXRpb24sIHR5cGUgSU1XaWRnZXRTdGF0ZSB9IGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IHsgZ2V0U3R5bGUgfSBmcm9tICcuL3N0eWxlJ1xyXG5pbXBvcnQgeyB2ZXJzaW9uTWFuYWdlciB9IGZyb20gJy4uL3ZlcnNpb24tbWFuYWdlcidcclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgdGV4dDogc3RyaW5nXHJcbiAgdG9vbFRpcDogc3RyaW5nXHJcbiAgdXJsOiBzdHJpbmdcclxuICB0ZXh0RXhwcmVzc2lvbjogSU1FeHByZXNzaW9uXHJcbiAgdGlwRXhwcmVzc2lvbjogSU1FeHByZXNzaW9uXHJcbiAgdXJsRXhwcmVzc2lvbjogSU1FeHByZXNzaW9uXHJcbn1cclxuXHJcbmludGVyZmFjZSBFeHRyYVByb3BzIHtcclxuICBhY3RpdmU6IGJvb2xlYW5cclxuICBhcHBNb2RlOiBBcHBNb2RlXHJcbiAgcXVlcnlPYmplY3Q6IElNVXJsUGFyYW1ldGVyc1xyXG4gIGlzUlRMOiBib29sZWFuXHJcbiAgYnJvd3NlclNpemVNb2RlOiBCcm93c2VyU2l6ZU1vZGVcclxuICB1cmk6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWRnZXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEFsbFdpZGdldFByb3BzPElNQ29uZmlnPiAmIEV4dHJhUHJvcHMsIFN0YXRlPiB7XHJcbiAgZG9tTm9kZTogUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PlxyXG4gIGxhc3RDbGlja1RpbWVzdGFtcDogbnVtYmVyID0gbnVsbFxyXG5cclxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdGV4dDogdGhpcy5nZXRUZXh0RnJvbVByb3BzKCksXHJcbiAgICAgIHRvb2xUaXA6IHRoaXMucHJvcHMuY29uZmlnPy5mdW5jdGlvbkNvbmZpZz8udG9vbFRpcCB8fCAnJyxcclxuICAgICAgdXJsOiB0aGlzLnByb3BzLmNvbmZpZz8uZnVuY3Rpb25Db25maWc/LmxpbmtQYXJhbT8udmFsdWUgfHwgJycsXHJcbiAgICAgIHRleHRFeHByZXNzaW9uOiB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzRW5hYmxlZCAmJiB0aGlzLmdldFRleHRFeHByZXNzaW9uKCksXHJcbiAgICAgIHRpcEV4cHJlc3Npb246IHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXNFbmFibGVkICYmIHRoaXMuZ2V0VGlwRXhwcmVzc2lvbigpLFxyXG4gICAgICB1cmxFeHByZXNzaW9uOiB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzRW5hYmxlZCAmJiB0aGlzLmdldFVybEV4cHJlc3Npb24oKVxyXG4gICAgfVxyXG4gICAgdGhpcy5kb21Ob2RlID0gUmVhY3QuY3JlYXRlUmVmKClcclxuICB9XHJcblxyXG4gIHN0YXRpYyBtYXBFeHRyYVN0YXRlUHJvcHMgPSAoc3RhdGU6IElNU3RhdGUsIG93blByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pOiBFeHRyYVByb3BzID0+IHtcclxuICAgIGxldCBzZWxlY3RlZCA9IGZhbHNlXHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSBzdGF0ZS5hcHBSdW50aW1lSW5mby5zZWxlY3Rpb25cclxuICAgIGlmIChzZWxlY3Rpb24gJiYgc3RhdGUuYXBwQ29uZmlnLmxheW91dHNbc2VsZWN0aW9uLmxheW91dElkXSkge1xyXG4gICAgICBjb25zdCBsYXlvdXRJdGVtID0gc3RhdGUuYXBwQ29uZmlnLmxheW91dHNbc2VsZWN0aW9uLmxheW91dElkXS5jb250ZW50W3NlbGVjdGlvbi5sYXlvdXRJdGVtSWRdXHJcbiAgICAgIHNlbGVjdGVkID0gbGF5b3V0SXRlbSAmJiBsYXlvdXRJdGVtLndpZGdldElkID09PSBvd25Qcm9wcy5pZFxyXG4gICAgfVxyXG4gICAgY29uc3QgaXNJbkJ1aWxkZXIgPSBzdGF0ZS5hcHBDb250ZXh0LmlzSW5CdWlsZGVyXHJcbiAgICBjb25zdCBhY3RpdmUgPSBpc0luQnVpbGRlciAmJiBzZWxlY3RlZFxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGFjdGl2ZSxcclxuICAgICAgYXBwTW9kZTogc3RhdGUuYXBwUnVudGltZUluZm8uYXBwTW9kZSxcclxuICAgICAgcXVlcnlPYmplY3Q6IHN0YXRlLnF1ZXJ5T2JqZWN0LFxyXG4gICAgICBpc1JUTDogc3RhdGUuYXBwQ29udGV4dC5pc1JUTCxcclxuICAgICAgYnJvd3NlclNpemVNb2RlOiBzdGF0ZS5icm93c2VyU2l6ZU1vZGUsXHJcbiAgICAgIHVyaTogc3RhdGUuYXBwQ29uZmlnLndpZGdldHNbb3duUHJvcHMuaWRdPy51cmlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyB2ZXJzaW9uTWFuYWdlciA9IHZlcnNpb25NYW5hZ2VyXHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAocHJldlByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4gJiBFeHRyYVByb3BzLCBwcmV2U3RhdGU6IFN0YXRlKSB7XHJcbiAgICBpZiAoIXRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXNFbmFibGVkICYmXHJcbiAgICAgIChcclxuICAgICAgICB0aGlzLnByb3BzLmNvbmZpZyAhPT0gcHJldlByb3BzLmNvbmZpZyB8fCBwcmV2UHJvcHMudXNlRGF0YVNvdXJjZXNFbmFibGVkXHJcbiAgICAgIClcclxuICAgICkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICB0ZXh0OiB0aGlzLmdldFRleHRGcm9tUHJvcHMoKSxcclxuICAgICAgICB0b29sVGlwOiB0aGlzLnByb3BzLmNvbmZpZyAmJiB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZyAmJiB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy50b29sVGlwLFxyXG4gICAgICAgIHVybDogdGhpcy5wcm9wcy5jb25maWcgJiYgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcgJiYgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcubGlua1BhcmFtICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmxpbmtQYXJhbS52YWx1ZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzRW5hYmxlZCAmJlxyXG4gICAgICAoXHJcbiAgICAgICAgdGhpcy5wcm9wcy5jb25maWcgIT09IHByZXZQcm9wcy5jb25maWcgfHwgIXByZXZQcm9wcy51c2VEYXRhU291cmNlc0VuYWJsZWRcclxuICAgICAgKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHRleHRFeHByZXNzaW9uOiB0aGlzLmdldFRleHRFeHByZXNzaW9uKCksXHJcbiAgICAgICAgdGlwRXhwcmVzc2lvbjogdGhpcy5nZXRUaXBFeHByZXNzaW9uKCksXHJcbiAgICAgICAgdXJsRXhwcmVzc2lvbjogdGhpcy5nZXRVcmxFeHByZXNzaW9uKClcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFRleHRGcm9tUHJvcHMgPSAoKTogc3RyaW5nID0+IHtcclxuICAgIHJldHVybiB0eXBlb2YgdGhpcy5wcm9wcy5jb25maWc/LmZ1bmN0aW9uQ29uZmlnPy50ZXh0ID09PSAnc3RyaW5nJ1xyXG4gICAgICA/IHRoaXMucHJvcHMuY29uZmlnPy5mdW5jdGlvbkNvbmZpZz8udGV4dFxyXG4gICAgICA6IHRoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICd2YXJpYWJsZUJ1dHRvbicsIGRlZmF1bHRNZXNzYWdlOiBqaW11VWlEZWZhdWx0TWVzc2FnZXMudmFyaWFibGVCdXR0b24gfSlcclxuICB9XHJcblxyXG4gIGdldFRpcEV4cHJlc3Npb24gPSAoKTogSU1FeHByZXNzaW9uID0+IHtcclxuICAgIHJldHVybiAodGhpcy5wcm9wcy5jb25maWcgJiYgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcgJiYgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcudG9vbFRpcEV4cHJlc3Npb24gJiZcclxuICAgICAgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcudG9vbFRpcEV4cHJlc3Npb24pIHx8XHJcbiAgICAgIEltbXV0YWJsZSh7XHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgcGFydHM6IFt7IHR5cGU6IEV4cHJlc3Npb25QYXJ0VHlwZS5TdHJpbmcsIGV4cDogYFwiJHt0aGlzLnByb3BzLmNvbmZpZz8uZnVuY3Rpb25Db25maWc/LnRvb2xUaXAgfHwgJyd9XCJgIH1dXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXRUZXh0RXhwcmVzc2lvbiA9ICgpOiBJTUV4cHJlc3Npb24gPT4ge1xyXG4gICAgcmV0dXJuICh0aGlzLnByb3BzLmNvbmZpZyAmJiB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZyAmJiB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy50ZXh0RXhwcmVzc2lvbiAmJlxyXG4gICAgICB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy50ZXh0RXhwcmVzc2lvbikgfHxcclxuICAgICAgSW1tdXRhYmxlKHtcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBwYXJ0czogW3sgdHlwZTogRXhwcmVzc2lvblBhcnRUeXBlLlN0cmluZywgZXhwOiBgXCIke3RoaXMucHJvcHMuY29uZmlnPy5mdW5jdGlvbkNvbmZpZz8udGV4dCB8fCB0aGlzLmdldFRleHRGcm9tUHJvcHMoKX1cImAgfV1cclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGdldFVybEV4cHJlc3Npb24gPSAoKTogSU1FeHByZXNzaW9uID0+IHtcclxuICAgIGNvbnN0IGV4cHJlc3Npb24gPSB0aGlzLnByb3BzLmNvbmZpZyAmJiB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZyAmJiB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5saW5rUGFyYW0gJiZcclxuICAgICAgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcubGlua1BhcmFtICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmxpbmtQYXJhbS5leHByZXNzaW9uXHJcblxyXG4gICAgcmV0dXJuIGV4cHJlc3Npb24gfHwgbnVsbFxyXG4gIH1cclxuXHJcbiAgb25UZXh0RXhwUmVzb2x2ZUNoYW5nZSA9IHJlc3VsdCA9PiB7XHJcbiAgICBpZiAocmVzdWx0LmlzU3VjY2Vzc2Z1bCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdGV4dDogcmVzdWx0LnZhbHVlIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgcmVzOiBzdHJpbmcgPSAnJ1xyXG4gICAgICBjb25zdCBlcnJvckNvZGUgPSByZXN1bHQudmFsdWVcclxuICAgICAgaWYgKGVycm9yQ29kZSA9PT0gRXhwcmVzc2lvblJlc29sdmVyRXJyb3JDb2RlLkZhaWxlZCkge1xyXG4gICAgICAgIHJlcyA9IHRoaXMuc3RhdGUudGV4dEV4cHJlc3Npb24gJiYgdGhpcy5zdGF0ZS50ZXh0RXhwcmVzc2lvbi5uYW1lXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0OiByZXMgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVGlwRXhwUmVzb2x2ZUNoYW5nZSA9IHJlc3VsdCA9PiB7XHJcbiAgICBpZiAocmVzdWx0LmlzU3VjY2Vzc2Z1bCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdG9vbFRpcDogcmVzdWx0LnZhbHVlIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdG9vbFRpcDogJycgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVXJsRXhwUmVzb2x2ZUNoYW5nZSA9IHJlc3VsdCA9PiB7XHJcbiAgICBpZiAocmVzdWx0LmlzU3VjY2Vzc2Z1bCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdXJsOiByZXN1bHQudmFsdWUgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCByZXM6IHN0cmluZyA9ICcnXHJcbiAgICAgIGNvbnN0IGVycm9yQ29kZSA9IHJlc3VsdC52YWx1ZVxyXG4gICAgICBpZiAoZXJyb3JDb2RlID09PSBFeHByZXNzaW9uUmVzb2x2ZXJFcnJvckNvZGUuRmFpbGVkKSB7XHJcbiAgICAgICAgcmVzID0gdGhpcy5zdGF0ZS51cmxFeHByZXNzaW9uICYmIHRoaXMuc3RhdGUudXJsRXhwcmVzc2lvbi5uYW1lXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB1cmw6IHJlcyB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0V2hldGhlclVzZVF1aWNrU3R5bGUgPSAoY29uZmlnOiBJTUNvbmZpZyk6IGJvb2xlYW4gPT4ge1xyXG4gICAgcmV0dXJuICEhKGNvbmZpZyAmJiBjb25maWcuc3R5bGVDb25maWcgJiYgY29uZmlnLnN0eWxlQ29uZmlnLnRoZW1lU3R5bGUgJiYgY29uZmlnLnN0eWxlQ29uZmlnLnRoZW1lU3R5bGUucXVpY2tTdHlsZVR5cGUpXHJcbiAgfVxyXG5cclxuICBnZXRJY29uU3R5bGUgPSAocmVndWxhckljb25Qcm9wczogSU1JY29uUHJvcHMsIGhvdmVySWNvblByb3BzOiBJTUljb25Qcm9wcyk6IFNlcmlhbGl6ZWRTdHlsZXMgPT4ge1xyXG4gICAgY29uc3QgciA9IHJlZ3VsYXJJY29uUHJvcHMgfHwgKHt9IGFzIElNSWNvblByb3BzKVxyXG4gICAgY29uc3QgaCA9IGhvdmVySWNvblByb3BzIHx8ICh7fSBhcyBJTUljb25Qcm9wcylcclxuXHJcbiAgICByZXR1cm4gY3NzYFxyXG4gICAgICAmIGltZywgJiBzdmd7XHJcbiAgICAgICAgY29sb3I6ICR7ci5jb2xvcn07XHJcbiAgICAgICAgZmlsbDogJHtyLmNvbG9yfTtcclxuICAgICAgICB3aWR0aDogJHtyLnNpemV9JHtEaXN0YW5jZVVuaXRzLlBJWEVMfTtcclxuICAgICAgICBoZWlnaHQ6ICR7ci5zaXplfSR7RGlzdGFuY2VVbml0cy5QSVhFTH07XHJcbiAgICAgIH1cclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICBpbWcsIHN2Z3tcclxuICAgICAgICAgIGNvbG9yOiAke2guY29sb3J9O1xyXG4gICAgICAgICAgZmlsbDogJHtoLmNvbG9yfTtcclxuICAgICAgICAgIHdpZHRoOiAke2guc2l6ZX0ke0Rpc3RhbmNlVW5pdHMuUElYRUx9O1xyXG4gICAgICAgICAgaGVpZ2h0OiAke2guc2l6ZX0ke0Rpc3RhbmNlVW5pdHMuUElYRUx9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgYFxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlVW5kZWZpbmVkU3R5bGUgPSAoc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMpOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0+IHtcclxuICAgIGlmICghc3R5bGUpIHtcclxuICAgICAgcmV0dXJuIHN0eWxlXHJcbiAgICB9XHJcbiAgICBjb25zdCByZW1vdmVkVW5kZWZpbmVkU3R5bGUgPSB7fVxyXG4gICAgT2JqZWN0LmtleXMoc3R5bGUpLmZvckVhY2goc3R5bGVOYW1lID0+IHtcclxuICAgICAgaWYgKCh0eXBlb2Ygc3R5bGVbc3R5bGVOYW1lXSA9PT0gJ3N0cmluZycgJiYgIXN0eWxlW3N0eWxlTmFtZV0uaW5jbHVkZXMoJ3VuZGVmaW5lZCcpKSB8fFxyXG4gICAgICAgIHR5cGVvZiBzdHlsZVtzdHlsZU5hbWVdID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgIHJlbW92ZWRVbmRlZmluZWRTdHlsZVtzdHlsZU5hbWVdID0gc3R5bGVbc3R5bGVOYW1lXVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHJlbW92ZWRVbmRlZmluZWRTdHlsZVxyXG4gIH1cclxuXHJcbiAgZ2V0TGlua0NvbXBvbmVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMucHJvcHMuY29uZmlnXHJcbiAgICBjb25zdCBsaW5rUGFyYW0gPSBjb25maWcuZnVuY3Rpb25Db25maWcubGlua1BhcmFtXHJcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy5zdGF0ZS50ZXh0XHJcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuc3RhdGUudG9vbFRpcFxyXG4gICAgY29uc3QgaWNvblByb3BlcnR5ID0gY29uZmlnLmZ1bmN0aW9uQ29uZmlnPy5pY29uPy5kYXRhPy5wcm9wZXJ0aWVzXHJcbiAgICBjb25zdCBpY29uTmFtZSA9IGljb25Qcm9wZXJ0eT8uaXNVcGxvYWRlZCA/IGljb25Qcm9wZXJ0eT8ub3JpZ2luYWxOYW1lIDogaWNvblByb3BlcnR5Py5maWxlbmFtZVxyXG4gICAgbGV0IGFjY2Vzc2liaWxpdHlMYWJlbCA9IHRoaXMuc3RhdGUudG9vbFRpcCB8fCB0ZXh0IHx8IGljb25OYW1lXHJcblxyXG4gICAgbGV0IGN1c3RvbVN0eWxlXHJcbiAgICBsZXQgaWNvblN0eWxlXHJcbiAgICBcclxuICAgIGlmIChjb25maWcuc3R5bGVDb25maWcgJiYgY29uZmlnLnN0eWxlQ29uZmlnLmN1c3RvbVN0eWxlKSB7XHJcbiAgICAgIGNvbnN0IHJlZ3VsYXIgPSBjb25maWcuc3R5bGVDb25maWcuY3VzdG9tU3R5bGUucmVndWxhclxyXG4gICAgICBjb25zdCBob3ZlciA9IGNvbmZpZy5zdHlsZUNvbmZpZy5jdXN0b21TdHlsZS5ob3ZlclxyXG4gICAgICBpZiAoY29uZmlnLnN0eWxlQ29uZmlnLnVzZUN1c3RvbSkge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlID0gc3R5bGVVdGlscy50b0NTU1N0eWxlKHJlZ3VsYXIgJiYgcmVndWxhci53aXRob3V0KCdpY29uUHJvcHMnKS5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pKSBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzXHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxIb3ZlclN0eWxlID0gc3R5bGVVdGlscy50b0NTU1N0eWxlKGhvdmVyICYmIGhvdmVyLndpdGhvdXQoJ2ljb25Qcm9wcycpLmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSkpIGFzIFJlYWN0LkNTU1Byb3BlcnRpZXNcclxuICAgICAgICBjb25zdCBob3ZlclN0eWxlID0geyAuLi5zdHlsZSwgLi4ub3JpZ2luYWxIb3ZlclN0eWxlIH1cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmUgJiYgdGhpcy5wcm9wcy5hcHBNb2RlICE9PSBBcHBNb2RlLlJ1bikge1xyXG4gICAgICAgICAgY29uc3Qgd2lkZ2V0U3RhdGU6IElNV2lkZ2V0U3RhdGUgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkud2lkZ2V0c1N0YXRlW3RoaXMucHJvcHMuaWRdIHx8IEltbXV0YWJsZSh7fSlcclxuICAgICAgICAgIGN1c3RvbVN0eWxlID0ge1xyXG4gICAgICAgICAgICBzdHlsZTogd2lkZ2V0U3RhdGUuaXNDb25maWd1cmluZ0hvdmVyXHJcbiAgICAgICAgICAgICAgPyB7IC4uLnRoaXMucmVtb3ZlVW5kZWZpbmVkU3R5bGUoc3R5bGUpLCAuLi50aGlzLnJlbW92ZVVuZGVmaW5lZFN0eWxlKGhvdmVyU3R5bGUpIH1cclxuICAgICAgICAgICAgICA6IHN0eWxlLFxyXG4gICAgICAgICAgICBob3ZlclN0eWxlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpY29uU3R5bGUgPSB0aGlzLmdldEljb25TdHlsZShcclxuICAgICAgICAgICAgd2lkZ2V0U3RhdGUuaXNDb25maWd1cmluZ0hvdmVyID8geyAuLi5yZWd1bGFyPy5pY29uUHJvcHMsIC4uLmhvdmVyPy5pY29uUHJvcHMgfSA6IHJlZ3VsYXI/Lmljb25Qcm9wcyxcclxuICAgICAgICAgICAgaG92ZXI/Lmljb25Qcm9wc1xyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjdXN0b21TdHlsZSA9IHtcclxuICAgICAgICAgICAgc3R5bGUsXHJcbiAgICAgICAgICAgIGhvdmVyU3R5bGVcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGljb25TdHlsZSA9IHRoaXMuZ2V0SWNvblN0eWxlKHJlZ3VsYXIgJiYgcmVndWxhci5pY29uUHJvcHMsIGhvdmVyICYmIGhvdmVyLmljb25Qcm9wcylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGNvbnN0IHVzZVF1aWNrU3R5bGUgPSB0aGlzLmdldFdoZXRoZXJVc2VRdWlja1N0eWxlKGNvbmZpZylcclxuICAgIGNvbnN0IHRoZW1lU3R5bGU6IEJ1dHRvblByb3BzID0gdXNlUXVpY2tTdHlsZVxyXG4gICAgICA/IHtcclxuICAgICAgICAgIHR5cGU6IGNvbmZpZy5zdHlsZUNvbmZpZy50aGVtZVN0eWxlLnF1aWNrU3R5bGVUeXBlXHJcbiAgICAgICAgfVxyXG4gICAgICA6IHtcclxuICAgICAgICAgIHR5cGU6ICdkZWZhdWx0J1xyXG4gICAgICAgIH1cclxuXHJcbiAgICBjb25zdCBiYXNpY0NsYXNzTmFtZXMgPSAnd2lkZ2V0LWJ1dHRvbi1saW5rIHRleHQtdHJ1bmNhdGUgdy0xMDAgaC0xMDAgcC0wIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlcidcclxuXHJcbiAgICBsZXQgcXVlcnlPYmplY3RcclxuICAgIGxldCB0YXJnZXQ6IExpbmtUYXJnZXRcclxuICAgIGxldCBsaW5rVG86IExpbmtSZXN1bHRcclxuICAgIGlmIChsaW5rUGFyYW0gJiYgbGlua1BhcmFtLmxpbmtUeXBlKSB7XHJcbiAgICAgIHRhcmdldCA9IGxpbmtQYXJhbS5vcGVuVHlwZVxyXG4gICAgICBsaW5rVG8gPSB7XHJcbiAgICAgICAgbGlua1R5cGU6IGxpbmtQYXJhbS5saW5rVHlwZVxyXG4gICAgICB9IGFzIExpbmtSZXN1bHRcclxuXHJcbiAgICAgIC8vIGNvbnN0IGV4YlRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2V4Yl9hdXRoJylcclxuICAgICAgLy8gY29uc29sZS5sb2coJ2V4YicsZXhiVG9rZW4pXHJcblxyXG4gICAgICBsZXQgZXhiVG9rZW4gPSAnJ1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJhdyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdleGJfYXV0aCcpXHJcbiAgICAgICAgaWYgKHJhdykge1xyXG4gICAgICAgICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShyYXcpXHJcbiAgICAgICAgICBleGJUb2tlbiA9IHBhcnNlZD8udG9rZW4gfHwgJydcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignRmFpbGVkIHRvIHBhcnNlIGV4Yl9hdXRoOicsIGVycilcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc29sZS5sb2coJ2V4YicsZXhiVG9rZW4pXHJcblxyXG4gICAgICBpZiAobGlua1BhcmFtLmxpbmtUeXBlID09PSBMaW5rVHlwZS5XZWJBZGRyZXNzKSB7XHJcbiAgICAgICAgY29uc3QgYmFzZVVybCA9IHRoaXMuc3RhdGUudXJsXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHVybE9iaiA9IG5ldyBVUkwoYmFzZVVybCwgd2luZG93LmxvY2F0aW9uLm9yaWdpbilcclxuICAgICAgICAgIHVybE9iai5zZWFyY2hQYXJhbXMuc2V0KCd0b2tlbicsIGV4YlRva2VuKVxyXG4gICAgICAgICAgbGlua1RvLnZhbHVlID0gdXJsT2JqLnRvU3RyaW5nKClcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgVVJMOicsIGJhc2VVcmwpXHJcbiAgICAgICAgICBsaW5rVG8udmFsdWUgPSBiYXNlVXJsXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxpbmtUby52YWx1ZSA9IGxpbmtQYXJhbS52YWx1ZVxyXG4gICAgICAgIHF1ZXJ5T2JqZWN0ID0gdGhpcy5wcm9wcy5xdWVyeU9iamVjdFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaWNvbiA9IGNvbmZpZy5mdW5jdGlvbkNvbmZpZy5pY29uXHJcbiAgICBjb25zdCBpc1JUTCA9IHRoaXMucHJvcHMuaXNSVExcclxuICAgIGNvbnN0IGxlZnRJY29uID0gaWNvbiAmJiAoIWljb24ucG9zaXRpb24gfHwgaWNvbi5wb3NpdGlvbiA9PT0gSWNvblBvc2l0aW9uLkxlZnQpICYmIDxJY29uIGljb249e2ljb24uZGF0YS5zdmd9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7ICdtci0yIG1sLTAnOiAhIXRleHQgJiYgIWlzUlRMLCAnbWwtMiBtci0wJzogISF0ZXh0ICYmIGlzUlRMLCAnbXgtMCc6ICF0ZXh0IH0pfSBhcmlhLWhpZGRlbj17dHJ1ZX0gLz5cclxuICAgIGNvbnN0IHJpZ2h0SWNvbiA9IGljb24gJiYgaWNvbi5wb3NpdGlvbiAmJiBpY29uLnBvc2l0aW9uID09PSBJY29uUG9zaXRpb24uUmlnaHQgJiYgPEljb24gaWNvbj17aWNvbi5kYXRhLnN2Z30gY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgJ21sLTIgbXItMCc6ICEhdGV4dCAmJiAhaXNSVEwsICdtci0yIG1sLTAnOiAhIXRleHQgJiYgaXNSVEwsICdteC0wJzogIXRleHQgfSl9IGFyaWEtaGlkZGVuPXt0cnVlfSAvPlxyXG5cclxuICAgIGlmICh0YXJnZXQgPT09ICdfYmxhbmsnKSB7XHJcbiAgICAgIGFjY2Vzc2liaWxpdHlMYWJlbCA9IGAke2FjY2Vzc2liaWxpdHlMYWJlbH0sICR7dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ29wZW5Jbk5ld1dpbmRvdycgfSl9YFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGF1dG9TaXplID0gdGhpcy5wcm9wcy5hdXRvV2lkdGggJiYgdGhpcy5wcm9wcy5hdXRvSGVpZ2h0XHJcbiAgICBjb25zdCBpc0ljb24gPSBpY29uICYmICF0ZXh0XHJcblxyXG4gICAgcmV0dXJuIDxMaW5rIHRvPXtsaW5rVG99IHRhcmdldD17dGFyZ2V0fSBxdWVyeU9iamVjdD17cXVlcnlPYmplY3R9XHJcbiAgICAgIHRpdGxlPXt0aXRsZX0gY2xhc3NOYW1lPXtiYXNpY0NsYXNzTmFtZXN9IHJvbGU9J2J1dHRvbidcclxuICAgICAgY3VzdG9tU3R5bGU9e2N1c3RvbVN0eWxlfSB7Li4udGhlbWVTdHlsZX0gY3NzPXtpY29uU3R5bGV9XHJcbiAgICAgIGFyaWEtbGFiZWw9e2FjY2Vzc2liaWxpdHlMYWJlbH1cclxuICAgID5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd3aWRnZXQtYnV0dG9uLXRleHQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJywgeyAnYXV0by1zaXplLWljb24nOiBhdXRvU2l6ZSAmJiBpc0ljb24gfSl9ID5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBpc1JUTCA/IHJpZ2h0SWNvbiA6IGxlZnRJY29uXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC10cnVuY2F0ZSc+e3RleHR9PC9zcGFuPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlzUlRMID8gbGVmdEljb24gOiByaWdodEljb25cclxuICAgICAgICB9XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvTGluaz5cclxuICB9XHJcblxyXG4gIG9uQ2xpY2sgPSBlID0+IHtcclxuICAgIGNvbnN0IHRpbWVzdGFtcCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcclxuICAgIC8vIGluIGNhc2UgdGhhdCBib3RoIGNsaWNrIGFuZCB0b3VjaGVuZCBiZSB0cmlnZ2VyZWQgaW4gaU9TXHJcbiAgICBpZiAodGhpcy5sYXN0Q2xpY2tUaW1lc3RhbXAgJiYgdGltZXN0YW1wIC0gdGhpcy5sYXN0Q2xpY2tUaW1lc3RhbXAgPCAyMDApIHJldHVyblxyXG4gICAgdGhpcy5sYXN0Q2xpY2tUaW1lc3RhbXAgPSB0aW1lc3RhbXBcclxuICAgIGUuZXhiRXZlbnRUeXBlID0gJ2xpbmtDbGljaydcclxuICAgIE1lc3NhZ2VNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVibGlzaE1lc3NhZ2UoXHJcbiAgICAgIG5ldyBCdXR0b25DbGlja01lc3NhZ2UodGhpcy5wcm9wcy5pZClcclxuICAgIClcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCBpc0RhdGFTb3VyY2VVc2VkID0gdGhpcy5wcm9wcy51c2VEYXRhU291cmNlc0VuYWJsZWRcclxuXHJcbiAgICBjb25zdCBMaW5rQ29tcG9uZW50ID0gdGhpcy5nZXRMaW5rQ29tcG9uZW50KClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiamltdS13aWRnZXQgd2lkZ2V0LWJ1dHRvbiB3LTEwMCBoLTEwMFwiXHJcbiAgICAgICAgY3NzPXtnZXRTdHlsZSh0aGlzLnByb3BzLnRoZW1lKX0gcmVmPXt0aGlzLmRvbU5vZGV9XHJcbiAgICAgICAgb25DbGljaz17dGhpcy5vbkNsaWNrfVxyXG4gICAgICAgIG9uVG91Y2hFbmQ9e3RoaXMub25DbGlja31cclxuICAgICAgICBvbktleVVwPXtldnQgPT4ge1xyXG4gICAgICAgICAgaWYgKGV2dC5rZXkgPT09ICcgJyB8fCBldnQua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25DbGljayhldnQpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtMaW5rQ29tcG9uZW50fVxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19PlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpc0RhdGFTb3VyY2VVc2VkICYmXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPEV4cHJlc3Npb25SZXNvbHZlckNvbXBvbmVudCB1c2VEYXRhU291cmNlcz17dGhpcy5wcm9wcy51c2VEYXRhU291cmNlc30gZXhwcmVzc2lvbj17dGhpcy5zdGF0ZS50ZXh0RXhwcmVzc2lvbn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVGV4dEV4cFJlc29sdmVDaGFuZ2V9IHdpZGdldElkPXt0aGlzLnByb3BzLmlkfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEV4cHJlc3Npb25SZXNvbHZlckNvbXBvbmVudCB1c2VEYXRhU291cmNlcz17dGhpcy5wcm9wcy51c2VEYXRhU291cmNlc30gZXhwcmVzc2lvbj17dGhpcy5zdGF0ZS50aXBFeHByZXNzaW9ufVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25UaXBFeHBSZXNvbHZlQ2hhbmdlfSB3aWRnZXRJZD17dGhpcy5wcm9wcy5pZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxFeHByZXNzaW9uUmVzb2x2ZXJDb21wb25lbnQgdXNlRGF0YVNvdXJjZXM9e3RoaXMucHJvcHMudXNlRGF0YVNvdXJjZXN9IGV4cHJlc3Npb249e3RoaXMuc3RhdGUudXJsRXhwcmVzc2lvbn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVXJsRXhwUmVzb2x2ZUNoYW5nZX0gd2lkZ2V0SWQ9e3RoaXMucHJvcHMuaWR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9