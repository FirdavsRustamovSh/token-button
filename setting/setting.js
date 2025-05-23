System.register(["jimu-core","jimu-for-builder","jimu-ui/advanced/setting-components","jimu-ui/advanced/resource-selector","jimu-ui","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/expression-builder","jimu-ui/advanced/style-setting-components","jimu-ui/basic/color-picker"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_for_builder__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_resource_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_expression_builder__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_style_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_for_builder__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_resource_selector__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_expression_builder__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_style_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_for_builder__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_resource_selector__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_expression_builder__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_style_setting_components__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__[key] = module[key];
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

/***/ "./your-extensions/widgets/custom-button/src/setting/components/advance-collapse.tsx":
/*!*******************************************************************************************!*\
  !*** ./your-extensions/widgets/custom-button/src/setting/components/advance-collapse.tsx ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AdvanceCollapse)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");


class AdvanceCollapse extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    render() {
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'w-100' },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { onClick: this.props.toggle, className: 'd-flex justify-content-between mb-2' },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { for: 'open-collapse', className: 'collapse-label title3 hint-default' }, this.props.title)),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, { id: 'open-collapse', name: 'open-collapse', onChange: this.props.toggle, checked: this.props.isOpen }))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Collapse, { isOpen: this.props.isOpen }, this.props.isOpen && this.props.children)));
    }
}


/***/ }),

/***/ "./your-extensions/widgets/custom-button/src/setting/components/advance-style-setting/components/common-style-setting.tsx":
/*!********************************************************************************************************************************!*\
  !*** ./your-extensions/widgets/custom-button/src/setting/components/advance-style-setting/components/common-style-setting.tsx ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CommonStyleSetting),
/* harmony export */   isBackgroundEmpty: () => (/* binding */ isBackgroundEmpty)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_style_setting_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/advanced/style-setting-components */ "jimu-ui/advanced/style-setting-components");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "./your-extensions/widgets/custom-button/src/setting/components/advance-style-setting/index.tsx");
/** @jsx jsx */





const isValueEmpty = (v) => v === null || v === undefined || v === '';
const isBackgroundEmpty = (background) => {
    if (!background)
        return true;
    const isEmpty = isValueEmpty(background.color) && (0,_index__WEBPACK_IMPORTED_MODULE_4__.isObjectEmpty)(background.image);
    return isEmpty;
};
class CommonStyleSetting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.onBackgroundStyleChange = bg => {
            var _a, _b;
            let background = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)((_b = (_a = this.props.style) === null || _a === void 0 ? void 0 : _a.background) !== null && _b !== void 0 ? _b : {});
            for (const key in bg) {
                switch (key) {
                    case 'fillType':
                        if (background.fillType !== bg[key]) {
                            background = background.set('fillType', bg[key]);
                        }
                        break;
                    case 'color':
                        background = background.set('color', bg[key]);
                        break;
                    case 'image':
                        background = background.set('image', bg[key]);
                        break;
                }
            }
            this.props.onChange(this.getStyleSettings().set('background', background));
        };
        this.resetBackground = () => {
            this.props.onChange(this.getStyleSettings().without('background'));
        };
        this.updateBorder = (border) => {
            this.props.onChange(this.getStyleSettings()
                .set('border', border)
                .without('borderTop')
                .without('borderLeft')
                .without('borderRight')
                .without('borderBottom'));
        };
        this.updateSideBorder = (side, border) => {
            this.props.onChange(this.getStyleSettings().set(jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.camelCase(`border-${side}`), border).without('border'));
        };
        this.resetBorder = () => {
            this.props.onChange(this.getStyleSettings()
                .without('border')
                .without('borderTop')
                .without('borderLeft')
                .without('borderRight')
                .without('borderBottom'));
        };
        this.updateRadius = (radius) => {
            if (!radius.number[0] && !radius.number[1] && !radius.number[2] && !radius.number[3]) {
                this.resetRadius();
            }
            else {
                this.props.onChange(this.getStyleSettings().set('borderRadius', radius));
            }
        };
        this.resetRadius = () => {
            this.props.onChange(this.getStyleSettings().without('borderRadius'));
        };
        this.updateShadow = shadow => {
            this.props.onChange(this.getStyleSettings().set('boxShadow', shadow));
        };
    }
    getStyleSettings() {
        return this.props.style ? this.props.style : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
    }
    render() {
        const style = this.props.style || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
        const { intl } = this.props;
        const backgroundString = intl.formatMessage({ id: 'background', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages.background });
        const borderString = intl.formatMessage({ id: 'border', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages.border });
        const borderRadiusString = intl.formatMessage({ id: 'borderRadius', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages.borderRadius });
        const shadowString = intl.formatMessage({ id: 'shadow', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages.shadow });
        const isBorderEmpty = (0,_index__WEBPACK_IMPORTED_MODULE_4__.isObjectEmpty)(style.border) &&
            (0,_index__WEBPACK_IMPORTED_MODULE_4__.isObjectEmpty)(style.borderTop) &&
            (0,_index__WEBPACK_IMPORTED_MODULE_4__.isObjectEmpty)(style.borderLeft) &&
            (0,_index__WEBPACK_IMPORTED_MODULE_4__.isObjectEmpty)(style.borderRight) &&
            (0,_index__WEBPACK_IMPORTED_MODULE_4__.isObjectEmpty)(style.borderBottom);
        const isBorderRadiusEmpty = (0,_index__WEBPACK_IMPORTED_MODULE_4__.isObjectEmpty)(style.borderRadius);
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.CollapsableResetPanel, { label: backgroundString, isEmpty: isBackgroundEmpty(style.background), bottomLine: true, keepMount: true, onReset: this.resetBackground },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_style_setting_components__WEBPACK_IMPORTED_MODULE_3__.BackgroundSetting, { background: style.background, applyDefaultValue: false, onChange: this.onBackgroundStyleChange }))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.CollapsableResetPanel, { label: borderString, isEmpty: isBorderEmpty, bottomLine: true, keepMount: true, onReset: this.resetBorder },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_style_setting_components__WEBPACK_IMPORTED_MODULE_3__.BorderSetting, { value: style.border, top: style.borderTop, left: style.borderLeft, right: style.borderRight, bottom: style.borderBottom, applyDefaultValue: false, onChange: this.updateBorder, onSideChange: this.updateSideBorder }))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.CollapsableResetPanel, { label: borderRadiusString, isEmpty: isBorderRadiusEmpty, bottomLine: true, keepMount: true, onReset: this.resetRadius },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_style_setting_components__WEBPACK_IMPORTED_MODULE_3__.BorderRadiusSetting, { value: style.borderRadius, applyDefaultValue: false, onChange: this.updateRadius }))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.CollapsableResetPanel, { label: shadowString, isEmpty: (0,_index__WEBPACK_IMPORTED_MODULE_4__.isObjectEmpty)(style.boxShadow), keepMount: true, onReset: () => { this.updateShadow(null); } },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_style_setting_components__WEBPACK_IMPORTED_MODULE_3__.BoxShadowSetting, { value: style.boxShadow, applyDefaultValue: false, onChange: this.updateShadow })))));
    }
}


/***/ }),

/***/ "./your-extensions/widgets/custom-button/src/setting/components/advance-style-setting/components/font-style-setting.tsx":
/*!******************************************************************************************************************************!*\
  !*** ./your-extensions/widgets/custom-button/src/setting/components/advance-style-setting/components/font-style-setting.tsx ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FontStyleSetting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_style_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/style-setting-components */ "jimu-ui/advanced/style-setting-components");
/** @jsx jsx */


class FontStyleSetting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.changeText = (k, v) => {
            const text = this.props.text ? this.props.text.set(k, v) : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({ [k]: v });
            this.props.onChange(text);
        };
    }
    render() {
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_style_setting_components__WEBPACK_IMPORTED_MODULE_1__.TextStyle, Object.assign({}, this.props.text, { applyDefaultValue: false, onChange: this.changeText }));
    }
}


/***/ }),

/***/ "./your-extensions/widgets/custom-button/src/setting/components/advance-style-setting/components/icon-style-setting.tsx":
/*!******************************************************************************************************************************!*\
  !*** ./your-extensions/widgets/custom-button/src/setting/components/advance-style-setting/components/icon-style-setting.tsx ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IconStyleSetting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_style_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/style-setting-components */ "jimu-ui/advanced/style-setting-components");
/* harmony import */ var jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/basic/color-picker */ "jimu-ui/basic/color-picker");
/** @jsx jsx */




class IconStyleSetting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.units = [jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DistanceUnits.PIXEL];
        this.onSizeChange = (size) => {
            this.changeIcon('size', size.distance);
        };
        this.onColorChange = (color) => {
            this.changeIcon('color', color);
        };
        this.changeIcon = (k, v) => {
            const properties = this.props.iconProps ? this.props.iconProps.set(k, v) : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({ [k]: v });
            this.props.onChange(properties);
        };
    }
    render() {
        const properties = this.props.iconProps || {};
        const size = isNaN(properties.size) ? undefined : properties.size + 'px';
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "w-100 d-flex justify-content-between icon-size-font-style-setting" },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_style_setting_components__WEBPACK_IMPORTED_MODULE_2__.InputUnit, { className: 'pr-1', units: this.units, value: size, applyDefaultValue: false, placeholder: '##', onChange: this.onSizeChange }),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ThemeColorPicker, { specificTheme: this.props.appTheme, value: properties.color, onChange: this.onColorChange })));
    }
}


/***/ }),

/***/ "./your-extensions/widgets/custom-button/src/setting/components/advance-style-setting/index.tsx":
/*!******************************************************************************************************!*\
  !*** ./your-extensions/widgets/custom-button/src/setting/components/advance-style-setting/index.tsx ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AdvanceStyleSetting),
/* harmony export */   isObjectEmpty: () => (/* binding */ isObjectEmpty)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _components_common_style_setting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/common-style-setting */ "./your-extensions/widgets/custom-button/src/setting/components/advance-style-setting/components/common-style-setting.tsx");
/* harmony import */ var _components_icon_style_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/icon-style-setting */ "./your-extensions/widgets/custom-button/src/setting/components/advance-style-setting/components/icon-style-setting.tsx");
/* harmony import */ var _components_font_style_setting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/font-style-setting */ "./your-extensions/widgets/custom-button/src/setting/components/advance-style-setting/components/font-style-setting.tsx");
/** @jsx jsx */






const isObjectEmpty = (obj) => {
    if (!obj)
        return true;
    const notEmpty = Object.keys(obj).some(key => obj[key] !== null && obj[key] !== undefined && obj[key] !== '');
    return !notEmpty;
};
class AdvanceStyleSetting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.onTextChange = (text) => {
            const mergedStyle = this.getStyleFromCustom();
            const style = mergedStyle.set('text', text);
            this.props.onChange(style);
        };
        this.onIconChange = (iconProps) => {
            const mergedStyle = this.getStyleFromCustom();
            const style = mergedStyle.set('iconProps', iconProps);
            this.props.onChange(style);
        };
        this.onCommonChange = (style) => {
            this.props.onChange((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(style));
        };
        this.getStyleFromCustom = () => {
            return this.props.style || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
        };
    }
    render() {
        const style = this.getStyleFromCustom();
        const { isTextSettingOpen, isIconSettingOpen, intl, appTheme } = this.props;
        const textString = intl.formatMessage({ id: 'text', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages.text });
        const IconString = intl.formatMessage({ id: 'icon', defaultMessage: jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages.icon });
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "advance-style-setting mt-4" },
            isTextSettingOpen &&
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.CollapsableResetPanel, { label: textString, isEmpty: isObjectEmpty(style.text), bottomLine: true, onReset: () => { this.onTextChange(null); } },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_font_style_setting__WEBPACK_IMPORTED_MODULE_5__["default"], { appTheme: appTheme, text: style.text, onChange: this.onTextChange }))),
            isIconSettingOpen &&
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.CollapsableResetPanel, { label: IconString, isEmpty: isObjectEmpty(style.iconProps), bottomLine: true, onReset: () => { this.onIconChange(null); } },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_icon_style_setting__WEBPACK_IMPORTED_MODULE_4__["default"], { appTheme: appTheme, intl: intl, iconProps: style.iconProps, onChange: this.onIconChange }))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_common_style_setting__WEBPACK_IMPORTED_MODULE_3__["default"], { intl: intl, style: style, onChange: this.onCommonChange })));
    }
}


/***/ }),

/***/ "./your-extensions/widgets/custom-button/src/setting/style.ts":
/*!********************************************************************!*\
  !*** ./your-extensions/widgets/custom-button/src/setting/style.ts ***!
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
    .widget-setting-link {
      overflow-y: auto;
      font-size: 13px;
      font-weight: lighter;
      .collapse-label{
        color: ${theme.ref.palette.neutral[900]};
      }
      .font-size-container{
        width: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(82)};
      }
      .advance-style-setting{
        padding: 0 ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(4)};
      }
      .px-14{
        padding-left: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(14)} !important;
        padding-right: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(14)} !important;
      }
    }
    .tab-label{
      font-weight: 500 !important;
    }

  `;
}


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

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/advanced/data-source-selector":
/*!********************************************************!*\
  !*** external "jimu-ui/advanced/data-source-selector" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__;

/***/ }),

/***/ "jimu-ui/advanced/expression-builder":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/expression-builder" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_expression_builder__;

/***/ }),

/***/ "jimu-ui/advanced/resource-selector":
/*!*****************************************************!*\
  !*** external "jimu-ui/advanced/resource-selector" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_resource_selector__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

/***/ }),

/***/ "jimu-ui/advanced/style-setting-components":
/*!************************************************************!*\
  !*** external "jimu-ui/advanced/style-setting-components" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_style_setting_components__;

/***/ }),

/***/ "jimu-ui/basic/color-picker":
/*!*********************************************!*\
  !*** external "jimu-ui/basic/color-picker" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__;

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
/*!***********************************************************************!*\
  !*** ./your-extensions/widgets/custom-button/src/setting/setting.tsx ***!
  \***********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_for_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-for-builder */ "jimu-for-builder");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui_advanced_resource_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/advanced/resource-selector */ "jimu-ui/advanced/resource-selector");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var jimu_ui_advanced_expression_builder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jimu-ui/advanced/expression-builder */ "jimu-ui/advanced/expression-builder");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ "./your-extensions/widgets/custom-button/src/config.ts");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style */ "./your-extensions/widgets/custom-button/src/setting/style.ts");
/* harmony import */ var _components_advance_style_setting__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/advance-style-setting */ "./your-extensions/widgets/custom-button/src/setting/components/advance-style-setting/index.tsx");
/* harmony import */ var _components_advance_collapse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/advance-collapse */ "./your-extensions/widgets/custom-button/src/setting/components/advance-collapse.tsx");
/** @jsx jsx */











const expressionInputTypes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_ui_advanced_expression_builder__WEBPACK_IMPORTED_MODULE_6__.ExpressionInputType.Static, jimu_ui_advanced_expression_builder__WEBPACK_IMPORTED_MODULE_6__.ExpressionInputType.Attribute, jimu_ui_advanced_expression_builder__WEBPACK_IMPORTED_MODULE_6__.ExpressionInputType.Statistics, jimu_ui_advanced_expression_builder__WEBPACK_IMPORTED_MODULE_6__.ExpressionInputType.Expression]);
const supportedDsTypes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes.FeatureLayer,
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes.SceneLayer,
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes.BuildingComponentSubLayer,
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes.OrientedImageryLayer,
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes.ImageryLayer,
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes.SubtypeGroupLayer,
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes.SubtypeSublayer
]);
var SettingTabs;
(function (SettingTabs) {
    SettingTabs["hover"] = "HOVER";
    SettingTabs["regular"] = "REGULAR";
})(SettingTabs || (SettingTabs = {}));
class Setting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        var _a, _b, _c, _d;
        super(props);
        this.onSettingLinkConfirm = (linkResult) => {
            let config;
            if (!linkResult) {
                return;
            }
            if (!linkResult.expression) {
                let mergedUseDataSources;
                if (this.getIsDataSourceUsed()) {
                    const textExpression = this.getTextExpression();
                    const tooltipExpression = this.getTipExpression();
                    mergedUseDataSources = this.mergeUseDataSources(textExpression, tooltipExpression, null, this.props.useDataSources);
                }
                else {
                    mergedUseDataSources = jimu_core__WEBPACK_IMPORTED_MODULE_0__.expressionUtils.getUseDataSourcesWithoutFields(this.props.useDataSources);
                }
                config = {
                    id: this.props.id,
                    config: this.props.config.setIn(['functionConfig', 'linkParam'], linkResult),
                    useDataSources: mergedUseDataSources
                };
            }
            else {
                const textExpression = this.getTextExpression();
                const tooltipExpression = this.getTipExpression();
                const expression = linkResult.expression;
                const mergedUseDataSources = this.mergeUseDataSources(textExpression, tooltipExpression, expression, this.props.useDataSources);
                config = {
                    id: this.props.id,
                    config: this.props.config.setIn(['functionConfig', 'linkParam'], linkResult),
                    useDataSources: mergedUseDataSources
                };
            }
            this.props.onSettingChange(config);
        };
        this.onTextChange = () => {
            const config = {
                id: this.props.id,
                config: this.props.config.setIn(['functionConfig', 'text'], this.state.currentTextInput)
                    .setIn(['functionConfig', 'textExpression'], null),
                useDataSources: jimu_core__WEBPACK_IMPORTED_MODULE_0__.expressionUtils.getUseDataSourcesWithoutFields(this.props.useDataSources)
            };
            this.props.onSettingChange(config);
        };
        this.onToolTipChange = () => {
            const config = {
                id: this.props.id,
                config: this.props.config.setIn(['functionConfig', 'toolTip'], this.state.currentTipInput)
                    .setIn(['functionConfig', 'toolTipExpression'], null),
                useDataSources: jimu_core__WEBPACK_IMPORTED_MODULE_0__.expressionUtils.getUseDataSourcesWithoutFields(this.props.useDataSources)
            };
            this.props.onSettingChange(config);
        };
        this.onTextExpChange = (expression) => {
            if (!expression) {
                return;
            }
            const tooltipExpression = this.getTipExpression();
            const linkSettingExpression = this.getLinkSettingExpression();
            const mergedUseDataSources = this.mergeUseDataSources((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(expression), tooltipExpression, linkSettingExpression, this.props.useDataSources);
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.setIn(['functionConfig', 'textExpression'], expression).setIn(['functionConfig', 'text'], ''),
                useDataSources: mergedUseDataSources
            });
            this.setState({ isTextExpOpen: false });
        };
        this.onTipExpChange = (expression) => {
            if (!expression) {
                return;
            }
            const textExpression = this.getTextExpression();
            const linkSettingExpression = this.getLinkSettingExpression();
            const mergedUseDataSources = this.mergeUseDataSources(textExpression, (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(expression), linkSettingExpression, this.props.useDataSources);
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.setIn(['functionConfig', 'toolTipExpression'], expression).setIn(['functionConfig', 'toolTip'], ''),
                useDataSources: mergedUseDataSources
            });
            this.setState({ isTipExpOpen: false });
        };
        this.onToggleUseDataEnabled = (useDataSourcesEnabled) => {
            var _a, _b, _c, _d, _e, _f;
            let config = this.props.config;
            if (useDataSourcesEnabled) {
                config = config.setIn(['functionConfig', 'textExpression'], this.getTextExpression())
                    .setIn(['functionConfig', 'toolTipExpression'], this.getTipExpression());
                config = config.set('functionConfig', config.functionConfig.without('text').without('toolTip'));
                if (((_c = (_b = (_a = this.props.config) === null || _a === void 0 ? void 0 : _a.functionConfig) === null || _b === void 0 ? void 0 : _b.linkParam) === null || _c === void 0 ? void 0 : _c.linkType) === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.WebAddress) {
                    config = config.setIn(['functionConfig', 'linkParam', 'expression'], this.getLinkSettingExpression());
                    config = config.setIn(['functionConfig', 'linkParam'], config.functionConfig.linkParam.without('value'));
                }
            }
            else {
                config = config.setIn(['functionConfig', 'text'], this.state.currentTextInput)
                    .setIn(['functionConfig', 'toolTip'], this.state.currentTipInput);
                config = config.set('functionConfig', config.functionConfig.without('textExpression').without('toolTipExpression'));
                if (((_f = (_e = (_d = this.props.config) === null || _d === void 0 ? void 0 : _d.functionConfig) === null || _e === void 0 ? void 0 : _e.linkParam) === null || _f === void 0 ? void 0 : _f.linkType) === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.WebAddress) {
                    config = config.setIn(['functionConfig', 'linkParam', 'value'], '');
                    config = config.setIn(['functionConfig', 'linkParam'], config.functionConfig.linkParam.without('expression'));
                }
            }
            this.props.onSettingChange({
                id: this.props.id,
                useDataSourcesEnabled,
                config
            });
        };
        this.onDataSourceChange = (useDataSources) => {
            if (!useDataSources) {
                return;
            }
            this.props.onSettingChange({
                id: this.props.id,
                /**
                 * Keep the fields of the current use data sources.
                 * The data source selector will return the fields of the previous use data source when changing to a data view which has the same main data source as the previous use data source.
                 */
                useDataSources: this.mergeUseDataSources(this.getTextExpression(), this.getTipExpression(), this.getLinkSettingExpression(), (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(useDataSources), false)
            });
        };
        this.onIconResultChange = (result) => {
            let config;
            if (result) {
                config = this.props.config;
                const position = this.props.config.getIn(['functionConfig', 'icon', 'position']) || _config__WEBPACK_IMPORTED_MODULE_7__.IconPosition.Left;
                config = config.setIn(['functionConfig', 'icon', 'data'], result)
                    .setIn(['functionConfig', 'icon', 'position'], position);
            }
            else {
                config = this.props.config.set('functionConfig', this.props.config.functionConfig.without('icon'))
                    .setIn(['styleConfig', 'customStyle', 'regular'], this.props.config.getIn(['styleConfig', 'customStyle', 'regular'], (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({})).without('iconProps'))
                    .setIn(['styleConfig', 'customStyle', 'hover'], this.props.config.getIn(['styleConfig', 'customStyle', 'hover'], (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({})).without('iconProps'));
            }
            this.props.onSettingChange({
                id: this.props.id,
                config
            });
        };
        this.getWhetherHaveCustomStyle = (isRegular) => {
            const status = isRegular ? 'regular' : 'hover';
            let style = this.props.config.getIn(['styleConfig', 'customStyle', status]);
            if (style && style.iconProps) { // iconProps is not custom style, user can select icon before opening advanced style
                style = style.without('iconProps');
            }
            return !!(style && Object.keys(style).length > 0);
        };
        this.onRegularStyleChange = (style) => {
            const config = this.props.config.setIn(['styleConfig', 'customStyle', 'regular'], style);
            this.props.onSettingChange({
                id: this.props.id,
                config
            });
        };
        this.onHoverStyleChange = (style) => {
            const config = this.props.config.setIn(['styleConfig', 'customStyle', 'hover'], style);
            this.props.onSettingChange({
                id: this.props.id,
                config
            });
        };
        this.onIconPositionChange = e => {
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.setIn(['functionConfig', 'icon', 'position'], e.target.value)
            });
        };
        this.onAdvanceTabSelect = id => {
            const isConfiguringHover = id === SettingTabs.hover;
            jimu_for_builder__WEBPACK_IMPORTED_MODULE_1__.builderAppSync.publishChangeWidgetStatePropToApp({ widgetId: this.props.id, propKey: 'isConfiguringHover', value: isConfiguringHover });
        };
        this.mergeUseDataSources = (textExpression, tipExpression, linkSettingExpression, useDataSources, clearFieldsInCurrentUseDss = true) => {
            const textDss = jimu_core__WEBPACK_IMPORTED_MODULE_0__.expressionUtils.generateFieldsForUseDataSourcesByExpressionParts(textExpression && textExpression.parts, useDataSources);
            const tipDss = jimu_core__WEBPACK_IMPORTED_MODULE_0__.expressionUtils.generateFieldsForUseDataSourcesByExpressionParts(tipExpression && tipExpression.parts, useDataSources);
            const linkSettingDss = jimu_core__WEBPACK_IMPORTED_MODULE_0__.expressionUtils.generateFieldsForUseDataSourcesByExpressionParts(linkSettingExpression && linkSettingExpression.parts, useDataSources);
            return this.mergeUseDataSourcesByDss(textDss, tipDss, linkSettingDss, useDataSources, clearFieldsInCurrentUseDss);
        };
        this.mergeUseDataSourcesByDss = (textUseDss, tipUseDss, linkSettingUseDss, useDataSources, clearFieldsInCurrentUseDss = true) => {
            const useDataSourcesWithoutFields = clearFieldsInCurrentUseDss ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.expressionUtils.getUseDataSourcesWithoutFields(useDataSources) : useDataSources;
            let mergedUseDss = jimu_core__WEBPACK_IMPORTED_MODULE_0__.expressionUtils.mergeUseDataSources(useDataSourcesWithoutFields, textUseDss);
            mergedUseDss = jimu_core__WEBPACK_IMPORTED_MODULE_0__.expressionUtils.mergeUseDataSources(mergedUseDss, tipUseDss);
            mergedUseDss = jimu_core__WEBPACK_IMPORTED_MODULE_0__.expressionUtils.mergeUseDataSources(mergedUseDss, linkSettingUseDss);
            return mergedUseDss;
        };
        this.getIsDataSourceUsed = () => {
            return !!this.props.useDataSourcesEnabled;
        };
        this.getDefaultExpression = (text) => {
            let parts = [];
            if (text) {
                parts = [{ type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.String, exp: `"${text}"` }];
            }
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({ name: '', parts });
        };
        this.getTipExpression = () => {
            const expression = this.props.config && this.props.config.functionConfig && this.props.config.functionConfig.toolTipExpression &&
                this.props.config.functionConfig.toolTipExpression;
            return expression || this.getDefaultExpression(this.state.currentTipInput);
        };
        this.getTextExpression = () => {
            const expression = this.props.config && this.props.config.functionConfig && this.props.config.functionConfig.textExpression &&
                this.props.config.functionConfig.textExpression;
            return expression || this.getDefaultExpression(this.state.currentTextInput);
        };
        this.getLinkSettingExpression = () => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const expression = this.props.config && this.props.config.functionConfig && this.props.config.functionConfig.linkParam &&
                this.props.config.functionConfig.linkParam && this.props.config.functionConfig.linkParam.expression;
            return expression ||
                (((_c = (_b = (_a = this.props.config) === null || _a === void 0 ? void 0 : _a.functionConfig) === null || _b === void 0 ? void 0 : _b.linkParam) === null || _c === void 0 ? void 0 : _c.linkType) === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.WebAddress && ((_f = (_e = (_d = this.props.config) === null || _d === void 0 ? void 0 : _d.functionConfig) === null || _e === void 0 ? void 0 : _e.linkParam) === null || _f === void 0 ? void 0 : _f.value)
                    ? this.getDefaultExpression((_j = (_h = (_g = this.props.config) === null || _g === void 0 ? void 0 : _g.functionConfig) === null || _h === void 0 ? void 0 : _h.linkParam) === null || _j === void 0 ? void 0 : _j.value)
                    : null);
        };
        this.openTextExpPopup = () => {
            this.setState({
                isTextExpOpen: true,
                isTipExpOpen: false
            });
        };
        this.openTipExpPopup = () => {
            this.setState({
                isTextExpOpen: false,
                isTipExpOpen: true
            });
        };
        this.closeTextExpPopup = () => {
            this.setState({
                isTextExpOpen: false,
                isTipExpOpen: false
            });
        };
        this.closeTipExpPopup = () => {
            this.setState({
                isTextExpOpen: false,
                isTipExpOpen: false
            });
        };
        this.showTextSetting = () => {
            return !!(!this.getIsDataSourceUsed()
                ? !!this.state.currentTextInput
                : !!(!this.props.config.getIn(['functionConfig', 'textExpression']) ||
                    (this.props.config.getIn(['functionConfig', 'textExpression']) &&
                        this.props.config.getIn(['functionConfig', 'textExpression', 'parts']) &&
                        (this.props.config.getIn(['functionConfig', 'textExpression', 'parts']).length > 1 || this.props.config.getIn(['functionConfig', 'textExpression', 'parts', '0', 'exp']) !== '""'))));
        };
        this.showIconSetting = () => {
            return !!this.props.config.getIn(['functionConfig', 'icon']);
        };
        this.toggleUseCustom = () => {
            let config = this.props.config;
            config = config.setIn(['styleConfig', 'useCustom'], !config.getIn(['styleConfig', 'useCustom']));
            if (config.getIn(['styleConfig', 'useCustom'])) {
                config = config.setIn(['styleConfig', 'customStyle', 'hover'], {});
                config = config.setIn(['styleConfig', 'customStyle', 'regular'], {});
            }
            else {
                config = config.set('styleConfig', config.styleConfig.without('customStyle'));
            }
            this.props.onSettingChange({
                id: this.props.id,
                config
            });
        };
        this.state = {
            isTextExpOpen: false,
            isTipExpOpen: false,
            currentTextInput: typeof ((_b = (_a = this.props.config) === null || _a === void 0 ? void 0 : _a.functionConfig) === null || _b === void 0 ? void 0 : _b.text) === 'string'
                ? (_d = (_c = this.props.config) === null || _c === void 0 ? void 0 : _c.functionConfig) === null || _d === void 0 ? void 0 : _d.text
                : this.getDefaultText(),
            currentTipInput: (this.props.config && this.props.config.functionConfig && this.props.config.functionConfig.toolTip) || ''
        };
    }
    componentDidUpdate(prevProps) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        if (!this.getIsDataSourceUsed()) {
            if (((_b = (_a = this.props.config) === null || _a === void 0 ? void 0 : _a.functionConfig) === null || _b === void 0 ? void 0 : _b.text) !== ((_d = (_c = prevProps.config) === null || _c === void 0 ? void 0 : _c.functionConfig) === null || _d === void 0 ? void 0 : _d.text)) {
                this.setState({
                    currentTextInput: typeof ((_f = (_e = this.props.config) === null || _e === void 0 ? void 0 : _e.functionConfig) === null || _f === void 0 ? void 0 : _f.text) === 'string'
                        ? (_h = (_g = this.props.config) === null || _g === void 0 ? void 0 : _g.functionConfig) === null || _h === void 0 ? void 0 : _h.text
                        : this.getDefaultText()
                });
            }
            if (((_k = (_j = this.props.config) === null || _j === void 0 ? void 0 : _j.functionConfig) === null || _k === void 0 ? void 0 : _k.toolTip) !== ((_m = (_l = prevProps.config) === null || _l === void 0 ? void 0 : _l.functionConfig) === null || _m === void 0 ? void 0 : _m.toolTip)) {
                this.setState({
                    currentTipInput: (this.props.config && this.props.config.functionConfig && this.props.config.functionConfig.toolTip) || ''
                });
            }
        }
    }
    componentWillUnmount() {
        jimu_for_builder__WEBPACK_IMPORTED_MODULE_1__.builderAppSync.publishChangeWidgetStatePropToApp({ widgetId: this.props.id, propKey: 'isConfiguringHover', value: false });
    }
    getDefaultText() {
        const { config, intl } = this.props;
        const isDefault = config.functionConfig.text === undefined && config.functionConfig.textExpression === undefined;
        return isDefault ? intl.formatMessage({ id: 'variableButton', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_4__.defaultMessages.variableButton }) : '';
    }
    render() {
        var _a, _b, _c, _d;
        const icon = ((_a = this.props.config.functionConfig.icon) === null || _a === void 0 ? void 0 : _a.data) || null;
        const customIcons = ((_b = this.props.config.functionConfig) === null || _b === void 0 ? void 0 : _b.customIcons) || null;
        const customStyle = this.props.config.styleConfig && this.props.config.styleConfig.customStyle;
        const isTextSettingOpen = this.showTextSetting();
        const isIconSettingOpen = this.showIconSetting();
        const isPositionOpen = isTextSettingOpen && isIconSettingOpen;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: (0,_style__WEBPACK_IMPORTED_MODULE_8__.getStyle)(this.props.theme) },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-setting-link jimu-widget" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "choose-ds w-100" },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_5__.DataSourceSelector, { types: supportedDsTypes, useDataSources: this.props.useDataSources, useDataSourcesEnabled: this.getIsDataSourceUsed(), onToggleUseDataEnabled: this.onToggleUseDataEnabled, onChange: this.onDataSourceChange, widgetId: this.props.id })))),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { role: 'group', "aria-label": this.props.intl.formatMessage({ id: 'setLink', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_4__.defaultMessages.setLink }) },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.LinkSelector, { onSettingConfirm: this.onSettingLinkConfirm, linkParam: this.props.config.functionConfig.linkParam, useDataSources: this.getIsDataSourceUsed() && this.props.useDataSources, widgetId: this.props.id })),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: this.props.intl.formatMessage({ id: 'tooltip', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_4__.defaultMessages.tooltip }) }),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { role: 'group', "aria-label": this.props.intl.formatMessage({ id: 'tooltip', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_4__.defaultMessages.tooltip }) }, this.getIsDataSourceUsed()
                            ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "w-100" },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_expression_builder__WEBPACK_IMPORTED_MODULE_6__.ExpressionInput, { useDataSources: this.props.useDataSources, onChange: this.onTipExpChange, openExpPopup: this.openTipExpPopup, expression: this.getTipExpression(), isExpPopupOpen: this.state.isTipExpOpen, closeExpPopup: this.closeTipExpPopup, types: expressionInputTypes, widgetId: this.props.id, "aria-label": this.props.intl.formatMessage({ id: 'tooltip', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_4__.defaultMessages.tooltip }) }))
                            : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.TextInput, { className: "w-100", value: this.state.currentTipInput, size: 'sm', onChange: (event) => { this.setState({ currentTipInput: event.target.value }); }, onBlur: () => { this.onToolTipChange(); }, onPressEnter: () => { this.onToolTipChange(); }, "aria-label": this.props.intl.formatMessage({ id: 'tooltip', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_4__.defaultMessages.tooltip }) })),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: this.props.intl.formatMessage({ id: 'text', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_4__.defaultMessages.text }) }),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { role: 'group', "aria-label": this.props.intl.formatMessage({ id: 'text', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_4__.defaultMessages.text }) }, this.getIsDataSourceUsed()
                            ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "w-100" },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_expression_builder__WEBPACK_IMPORTED_MODULE_6__.ExpressionInput, { useDataSources: this.props.useDataSources, onChange: this.onTextExpChange, openExpPopup: this.openTextExpPopup, expression: this.getTextExpression(), isExpPopupOpen: this.state.isTextExpOpen, closeExpPopup: this.closeTextExpPopup, types: expressionInputTypes, widgetId: this.props.id }))
                            : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.TextInput, { className: "w-100", value: this.state.currentTextInput, size: 'sm', onChange: (event) => { this.setState({ currentTextInput: event.target.value }); }, onBlur: () => { this.onTextChange(); }, onPressEnter: () => { this.onTextChange(); } })),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: this.props.intl.formatMessage({ id: 'icon', defaultMessage: jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages.icon }) },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_resource_selector__WEBPACK_IMPORTED_MODULE_3__.IconPicker, { icon: icon, customIcons: customIcons, configurableOption: 'none', onChange: this.onIconResultChange, "aria-label": this.props.intl.formatMessage({ id: 'icon', defaultMessage: jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages.icon }), setButtonUseColor: false })),
                        isPositionOpen &&
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: this.props.intl.formatMessage({ id: 'position', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_4__.defaultMessages.position }) },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Select, { onChange: this.onIconPositionChange, size: 'sm', value: this.props.config.functionConfig && this.props.config.functionConfig.icon && this.props.config.functionConfig.icon.position, "aria-label": this.props.intl.formatMessage({ id: 'position', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_4__.defaultMessages.position }) }, Object.keys(_config__WEBPACK_IMPORTED_MODULE_7__.IconPosition).map(p => (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: _config__WEBPACK_IMPORTED_MODULE_7__.IconPosition[p], key: p }, this.props.intl.formatMessage({ id: p.toLowerCase(), defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_4__.defaultMessages[p.toLowerCase()] }))))))),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { className: 'px-14' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_advance_collapse__WEBPACK_IMPORTED_MODULE_10__["default"], { title: this.props.intl.formatMessage({ id: 'advance', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_4__.defaultMessages.advance }), isOpen: !!((_d = (_c = this.props.config) === null || _c === void 0 ? void 0 : _c.styleConfig) === null || _d === void 0 ? void 0 : _d.useCustom), toggle: this.toggleUseCustom },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Tabs, { fill: true, type: 'pills', onChange: this.onAdvanceTabSelect, defaultValue: SettingTabs.regular },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Tab, { className: 'tab-label', id: SettingTabs.regular, title: this.props.intl.formatMessage({ id: 'default', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_4__.defaultMessages.default }) },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_advance_style_setting__WEBPACK_IMPORTED_MODULE_9__["default"], { intl: this.props.intl, appTheme: this.props.theme2, style: customStyle && customStyle.regular, onChange: this.onRegularStyleChange, isTextSettingOpen: isTextSettingOpen, isIconSettingOpen: isIconSettingOpen })),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Tab, { className: 'tab-label', id: SettingTabs.hover, title: this.props.intl.formatMessage({ id: 'hover', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_4__.defaultMessages.hover }) },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_advance_style_setting__WEBPACK_IMPORTED_MODULE_9__["default"], { intl: this.props.intl, appTheme: this.props.theme2, style: customStyle && customStyle.hover, onChange: this.onHoverStyleChange, isTextSettingOpen: isTextSettingOpen, isIconSettingOpen: isIconSettingOpen })))))))));
    }
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jdXN0b20tYnV0dG9uL2Rpc3Qvc2V0dGluZy9zZXR0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBLElBQVksWUFHWDtBQUhELFdBQVksWUFBWTtJQUN0Qiw2QkFBYTtJQUNiLCtCQUFlO0FBQ2pCLENBQUMsRUFIVyxZQUFZLEtBQVosWUFBWSxRQUd2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JnQztBQUNnQjtBQVFsQyxNQUFNLGVBQWdCLFNBQVEsNENBQUssQ0FBQyxhQUFvQjtJQUNyRSxNQUFNO1FBQ0osT0FBTyxDQUNMLG9FQUFLLFNBQVMsRUFBQyxPQUFPO1lBQ3BCLG9FQUFLLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUMscUNBQXFDO2dCQUM5RTtvQkFBSywyREFBQywwQ0FBSyxJQUFDLEdBQUcsRUFBQyxlQUFlLEVBQUMsU0FBUyxFQUFDLG9DQUFvQyxJQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFTLENBQU07Z0JBQy9HO29CQUFLLDJEQUFDLDJDQUFNLElBQUMsRUFBRSxFQUFDLGVBQWUsRUFBQyxJQUFJLEVBQUMsZUFBZSxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUksQ0FBTSxDQUNsSDtZQUNOLDJEQUFDLDZDQUFRLElBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUUvQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FFakMsQ0FDUCxDQUNQO0lBQ0gsQ0FBQztDQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJELGVBQWU7QUFDZ0Y7QUFDUjtBQUNvRDtBQUNTO0FBQzVHO0FBUXhDLE1BQU0sWUFBWSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxTQUFTLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFFOUQsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLFVBQTRDLEVBQUUsRUFBRTtJQUNoRixJQUFJLENBQUMsVUFBVTtRQUFFLE9BQU8sSUFBSTtJQUM1QixNQUFNLE9BQU8sR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLHFEQUFhLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUNqRixPQUFPLE9BQU87QUFDaEIsQ0FBQztBQUVjLE1BQU0sa0JBQW1CLFNBQVEsNENBQUssQ0FBQyxhQUFvQjtJQUExRTs7UUFLRSw0QkFBdUIsR0FBRyxFQUFFLENBQUMsRUFBRTs7WUFDN0IsSUFBSSxVQUFVLEdBQUcsb0RBQVMsQ0FBQyxnQkFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLDBDQUFFLFVBQVUsbUNBQUksRUFBcUIsQ0FBQztZQUNqRixLQUFLLE1BQU0sR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDO2dCQUNyQixRQUFRLEdBQUcsRUFBRSxDQUFDO29CQUNaLEtBQUssVUFBVTt3QkFDYixJQUFJLFVBQVUsQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7NEJBQ3BDLFVBQVUsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2xELENBQUM7d0JBQ0QsTUFBSztvQkFDUCxLQUFLLE9BQU87d0JBQ1YsVUFBVSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDN0MsTUFBSztvQkFDUCxLQUFLLE9BQU87d0JBQ1YsVUFBVSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDN0MsTUFBSztnQkFDVCxDQUFDO1lBQ0gsQ0FBQztZQUVELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDNUUsQ0FBQztRQUVELG9CQUFlLEdBQUcsR0FBRyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwRSxDQUFDO1FBRUQsaUJBQVksR0FBRyxDQUFDLE1BQW1CLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7aUJBQ3hDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDO2lCQUNyQixPQUFPLENBQUMsV0FBVyxDQUFDO2lCQUNwQixPQUFPLENBQUMsWUFBWSxDQUFDO2lCQUNyQixPQUFPLENBQUMsYUFBYSxDQUFDO2lCQUN0QixPQUFPLENBQUMsY0FBYyxDQUFDLENBQ3pCO1FBQ0gsQ0FBQztRQUVELHFCQUFnQixHQUFHLENBQUMsSUFBZ0IsRUFBRSxNQUFtQixFQUFFLEVBQUU7WUFDM0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsR0FBRyxDQUFDLDZDQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEgsQ0FBQztRQUVELGdCQUFXLEdBQUcsR0FBRyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtpQkFDeEMsT0FBTyxDQUFDLFFBQVEsQ0FBQztpQkFDakIsT0FBTyxDQUFDLFdBQVcsQ0FBQztpQkFDcEIsT0FBTyxDQUFDLFlBQVksQ0FBQztpQkFDckIsT0FBTyxDQUFDLGFBQWEsQ0FBQztpQkFDdEIsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUN6QjtRQUNILENBQUM7UUFFRCxpQkFBWSxHQUFHLENBQUMsTUFBc0MsRUFBRSxFQUFFO1lBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ3JGLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDMUUsQ0FBQztRQUNILENBQUM7UUFFRCxnQkFBVyxHQUFHLEdBQUcsRUFBRTtZQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdEUsQ0FBQztRQUVELGlCQUFZLEdBQUcsTUFBTSxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2RSxDQUFDO0lBOERILENBQUM7SUFqSUMsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLG9EQUFTLENBQUMsRUFBbUIsQ0FBQztJQUM3RSxDQUFDO0lBbUVELE1BQU07UUFDSixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxvREFBUyxDQUFDLEVBQW1CLENBQUM7UUFDaEUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLO1FBRTNCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLG9EQUFjLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDNUcsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLG9EQUFjLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEcsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsb0RBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNsSCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsb0RBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVoRyxNQUFNLGFBQWEsR0FBRyxxREFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDL0MscURBQWEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1lBQzlCLHFEQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztZQUMvQixxREFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7WUFDaEMscURBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQ25DLE1BQU0sbUJBQW1CLEdBQUcscURBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBRTdELE9BQU8sQ0FDTCwrQ0FBQyw0Q0FBSyxDQUFDLFFBQVE7WUFDYiwrQ0FBQywyRUFBVTtnQkFDVCwrQ0FBQyxzRkFBcUIsSUFBQyxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRSxVQUFVLFFBQUMsU0FBUyxRQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZTtvQkFDOUksK0NBQUMsd0ZBQWlCLElBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsdUJBQXVCLEdBQUksQ0FDL0YsQ0FDYjtZQUNiLCtDQUFDLDJFQUFVO2dCQUNULCtDQUFDLHNGQUFxQixJQUNwQixLQUFLLEVBQUUsWUFBWSxFQUNuQixPQUFPLEVBQUUsYUFBYSxFQUN0QixVQUFVLFFBQ1YsU0FBUyxRQUNULE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVztvQkFFekIsK0NBQUMsb0ZBQWEsSUFDWixLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFDbkIsR0FBRyxFQUFFLEtBQUssQ0FBQyxTQUFTLEVBQ3BCLElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxFQUN0QixLQUFLLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFDeEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxZQUFZLEVBQzFCLGlCQUFpQixFQUFFLEtBQUssRUFDeEIsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQzNCLFlBQVksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEdBQ25DLENBQ29CLENBQ2I7WUFDYiwrQ0FBQywyRUFBVTtnQkFDVCwrQ0FBQyxzRkFBcUIsSUFBQyxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFVBQVUsUUFBQyxTQUFTLFFBQUMsT0FBTyxFQUFHLElBQUksQ0FBQyxXQUFXO29CQUM3SCwrQ0FBQywwRkFBbUIsSUFDbEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxZQUFZLEVBQ3pCLGlCQUFpQixFQUFFLEtBQUssRUFDeEIsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLEdBQzNCLENBQ29CLENBQ2I7WUFDYiwrQ0FBQywyRUFBVTtnQkFDVCwrQ0FBQyxzRkFBcUIsSUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxxREFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxTQUFTLFFBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQztvQkFDdkksK0NBQUMsdUZBQWdCLElBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxHQUFJLENBQzdFLENBQ2IsQ0FDRSxDQUNsQjtJQUNILENBQUM7Q0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkpELGVBQWU7QUFDeUQ7QUFFa0I7QUFRM0UsTUFBTSxnQkFBaUIsU0FBUSw0Q0FBSyxDQUFDLGFBQW9CO0lBQXhFOztRQUNFLGVBQVUsR0FBRyxDQUFDLENBQXlCLEVBQUUsQ0FBTSxFQUFFLEVBQUU7WUFDakQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLG9EQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFxQjtZQUNyRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDM0IsQ0FBQztJQUtILENBQUM7SUFIQyxNQUFNO1FBQ0osT0FBTywrQ0FBQyxnRkFBUyxvQkFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQXNCLElBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxJQUFJO0lBQ2xILENBQUM7Q0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkQsZUFBZTtBQUMyRjtBQUNsRDtBQUNhO0FBQ1I7QUFROUMsTUFBTSxnQkFBaUIsU0FBUSw0Q0FBSyxDQUFDLGFBQW9CO0lBQXhFOztRQUNFLFVBQUssR0FBRyxDQUFDLGtEQUFhLENBQUMsS0FBSyxDQUFDO1FBRTdCLGlCQUFZLEdBQUcsQ0FBQyxJQUFnQixFQUFFLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN4QyxDQUFDO1FBRUQsa0JBQWEsR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztRQUNqQyxDQUFDO1FBRUQsZUFBVSxHQUFHLENBQUMsQ0FBUyxFQUFFLENBQU0sRUFBRSxFQUFFO1lBQ2pDLE1BQU0sVUFBVSxHQUFnQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUUsb0RBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQWlCO1lBQzlILElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUNqQyxDQUFDO0lBYUgsQ0FBQztJQVhDLE1BQU07UUFDSixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSyxFQUFrQjtRQUM5RCxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSTtRQUV4RSxPQUFPLENBQ0wsd0RBQUssU0FBUyxFQUFDLG1FQUFtRTtZQUNoRiwrQ0FBQyxnRkFBUyxJQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksR0FBRztZQUNySSwrQ0FBQyx3RUFBZ0IsSUFBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FDMUcsQ0FDUDtJQUNILENBQUM7Q0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0QsZUFBZTtBQUNzSjtBQUM5RTtBQUNZO0FBSWpDO0FBQ0o7QUFDQTtBQVd2RCxNQUFNLGFBQWEsR0FBRyxDQUFDLEdBQTJCLEVBQUUsRUFBRTtJQUMzRCxJQUFJLENBQUMsR0FBRztRQUFFLE9BQU8sSUFBSTtJQUNyQixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdHLE9BQU8sQ0FBQyxRQUFRO0FBQ2xCLENBQUM7QUFFYyxNQUFNLG1CQUFvQixTQUFRLDRDQUFLLENBQUMsYUFBb0I7SUFBM0U7O1FBQ0UsaUJBQVksR0FBRyxDQUFDLElBQW1CLEVBQUUsRUFBRTtZQUNyQyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDN0MsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDO1lBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUM1QixDQUFDO1FBRUQsaUJBQVksR0FBRyxDQUFDLFNBQXNCLEVBQUUsRUFBRTtZQUN4QyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDN0MsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDO1lBQ3JELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUM1QixDQUFDO1FBRUQsbUJBQWMsR0FBRyxDQUFDLEtBQXFDLEVBQUUsRUFBRTtZQUN6RCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxvREFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFFRCx1QkFBa0IsR0FBRyxHQUEyQixFQUFFO1lBQ2hELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksb0RBQVMsQ0FBQyxFQUFFLENBQUM7UUFDMUMsQ0FBQztJQTZCSCxDQUFDO0lBM0JDLE1BQU07UUFDSixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7UUFDdkMsTUFBTSxFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSztRQUUzRSxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsb0RBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxRixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsc0RBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFNUYsT0FBTyxDQUNMLHdEQUFLLFNBQVMsRUFBQyw0QkFBNEI7WUFDeEMsaUJBQWlCO2dCQUNoQiwrQ0FBQywyRUFBVTtvQkFDVCwrQ0FBQyxzRkFBcUIsSUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsUUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDO3dCQUNqSSwrQ0FBQyxzRUFBZ0IsSUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxHQUFJLENBQ2pFLENBQ2I7WUFFZCxpQkFBaUI7Z0JBQ2hCLCtDQUFDLDJFQUFVO29CQUNULCtDQUFDLHNGQUFxQixJQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLGFBQWEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsVUFBVSxRQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUM7d0JBQ3RJLCtDQUFDLHNFQUFnQixJQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksR0FBSSxDQUN2RixDQUNiO1lBRWYsK0NBQUMsd0VBQWtCLElBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBdUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsR0FBSSxDQUM3RyxDQUNQO0lBQ0gsQ0FBQztDQUNGOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFFc0Y7QUFFaEYsU0FBUyxRQUFRLENBQUUsS0FBdUI7SUFDL0MsT0FBTyw4Q0FBRzs7Ozs7O2lCQU1LLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7OztpQkFHOUIsK0NBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDOzs7cUJBR1osK0NBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzs7d0JBR1osK0NBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO3lCQUNmLCtDQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQzs7Ozs7OztHQU90QztBQUNILENBQUM7Ozs7Ozs7Ozs7OztBQzNCRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSm5ELGVBQWU7QUFLRztBQUMyRDtBQUNpQjtBQUMvQjtBQUNvRTtBQUN6RDtBQUVnQjtBQUVOO0FBQ2xEO0FBQ2tDO0FBQ1Q7QUFTM0QsTUFBTSxvQkFBb0IsR0FBRyxvREFBUyxDQUFDLENBQUMsb0ZBQW1CLENBQUMsTUFBTSxFQUFFLG9GQUFtQixDQUFDLFNBQVMsRUFBRSxvRkFBbUIsQ0FBQyxVQUFVLEVBQUUsb0ZBQW1CLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbkssTUFBTSxnQkFBZ0IsR0FBRyxvREFBUyxDQUFDO0lBQ2pDLHlEQUFrQixDQUFDLFlBQVk7SUFDL0IseURBQWtCLENBQUMsVUFBVTtJQUM3Qix5REFBa0IsQ0FBQyx5QkFBeUI7SUFDNUMseURBQWtCLENBQUMsb0JBQW9CO0lBQ3ZDLHlEQUFrQixDQUFDLFlBQVk7SUFDL0IseURBQWtCLENBQUMsaUJBQWlCO0lBQ3BDLHlEQUFrQixDQUFDLGVBQWU7Q0FDbkMsQ0FBQztBQUVGLElBQVcsV0FHVjtBQUhELFdBQVcsV0FBVztJQUNwQiw4QkFBZTtJQUNmLGtDQUFtQjtBQUNyQixDQUFDLEVBSFUsV0FBVyxLQUFYLFdBQVcsUUFHckI7QUFFYyxNQUFNLE9BQVEsU0FBUSw0Q0FBSyxDQUFDLGFBQXFEO0lBQzlGLFlBQWEsS0FBSzs7UUFDaEIsS0FBSyxDQUFDLEtBQUssQ0FBQztRQXVDZCx5QkFBb0IsR0FBRyxDQUFDLFVBQXVCLEVBQUUsRUFBRTtZQUNqRCxJQUFJLE1BQU07WUFDVixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ2hCLE9BQU07WUFDUixDQUFDO1lBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxvQkFBb0I7Z0JBQ3hCLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQztvQkFDL0IsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFO29CQUMvQyxNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtvQkFDakQsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7Z0JBQ3JILENBQUM7cUJBQU0sQ0FBQztvQkFDTixvQkFBb0IsR0FBRyxzREFBZSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDO2dCQUNsRyxDQUFDO2dCQUNELE1BQU0sR0FBRztvQkFDUCxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDLEVBQUUsVUFBVSxDQUFDO29CQUM1RSxjQUFjLEVBQUUsb0JBQW9CO2lCQUNyQztZQUNILENBQUM7aUJBQU0sQ0FBQztnQkFDTixNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQy9DLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUNqRCxNQUFNLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVTtnQkFDeEMsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztnQkFFL0gsTUFBTSxHQUFHO29CQUNQLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLENBQUMsRUFBRSxVQUFVLENBQUM7b0JBQzVFLGNBQWMsRUFBRSxvQkFBb0I7aUJBQ3JDO1lBQ0gsQ0FBQztZQUVELElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztRQUNwQyxDQUFDO1FBRUQsaUJBQVksR0FBRyxHQUFHLEVBQUU7WUFDbEIsTUFBTSxNQUFNLEdBQUc7Z0JBQ2IsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7cUJBQ3JGLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDLEVBQUUsSUFBSSxDQUFDO2dCQUNwRCxjQUFjLEVBQUUsc0RBQWUsQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBUTthQUNqRztZQUVELElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztRQUNwQyxDQUFDO1FBRUQsb0JBQWUsR0FBRyxHQUFHLEVBQUU7WUFDckIsTUFBTSxNQUFNLEdBQUc7Z0JBQ2IsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO3FCQUN2RixLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxtQkFBbUIsQ0FBQyxFQUFFLElBQUksQ0FBQztnQkFDdkQsY0FBYyxFQUFFLHNEQUFlLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQVE7YUFDakc7WUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7UUFDcEMsQ0FBQztRQUVELG9CQUFlLEdBQUcsQ0FBQyxVQUFzQixFQUFFLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNoQixPQUFNO1lBQ1IsQ0FBQztZQUNELE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ2pELE1BQU0scUJBQXFCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixFQUFFO1lBQzdELE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLG9EQUFTLENBQUMsVUFBVSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7WUFDakosSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7Z0JBQ3pCLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDdkgsY0FBYyxFQUFFLG9CQUEyQjthQUM1QyxDQUFDO1lBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUN6QyxDQUFDO1FBRUQsbUJBQWMsR0FBRyxDQUFDLFVBQXNCLEVBQUUsRUFBRTtZQUMxQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ2hCLE9BQU07WUFDUixDQUFDO1lBQ0QsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQy9DLE1BQU0scUJBQXFCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixFQUFFO1lBQzdELE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsRUFBRSxvREFBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFLHFCQUFxQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDO1lBQzlJLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO2dCQUN6QixFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzdILGNBQWMsRUFBRSxvQkFBMkI7YUFDNUMsQ0FBQztZQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDeEMsQ0FBQztRQUVELDJCQUFzQixHQUFHLENBQUMscUJBQThCLEVBQUUsRUFBRTs7WUFDMUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO1lBQzlCLElBQUkscUJBQXFCLEVBQUUsQ0FBQztnQkFDMUIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO3FCQUNsRixLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxtQkFBbUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUMxRSxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBRS9GLElBQUksdUJBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSwwQ0FBRSxjQUFjLDBDQUFFLFNBQVMsMENBQUUsUUFBUSxNQUFLLCtDQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ25GLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQyxFQUFFLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO29CQUNyRyxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDMUcsQ0FBQztZQUNILENBQUM7aUJBQU0sQ0FBQztnQkFDTixNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7cUJBQzNFLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO2dCQUNuRSxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUVuSCxJQUFJLHVCQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sMENBQUUsY0FBYywwQ0FBRSxTQUFTLDBDQUFFLFFBQVEsTUFBSywrQ0FBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUNuRixNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQ25FLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUMvRyxDQUFDO1lBQ0gsQ0FBQztZQUNELElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO2dCQUN6QixFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNqQixxQkFBcUI7Z0JBQ3JCLE1BQU07YUFDUCxDQUFDO1FBQ0osQ0FBQztRQUVELHVCQUFrQixHQUFHLENBQUMsY0FBK0IsRUFBRSxFQUFFO1lBQ3ZELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDcEIsT0FBTTtZQUNSLENBQUM7WUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQztnQkFDekIsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDakI7OzttQkFHRztnQkFDSCxjQUFjLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxFQUFFLG9EQUFTLENBQUMsY0FBYyxDQUFDLEVBQUUsS0FBSyxDQUErQjthQUM3TCxDQUFDO1FBQ0osQ0FBQztRQUVELHVCQUFrQixHQUFHLENBQUMsTUFBb0IsRUFBRSxFQUFFO1lBQzVDLElBQUksTUFBTTtZQUNWLElBQUksTUFBTSxFQUFFLENBQUM7Z0JBQ1gsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtnQkFDMUIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDLElBQUksaURBQVksQ0FBQyxJQUFJO2dCQUNyRyxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxNQUFNLENBQUM7cUJBQzlELEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsRUFBRSxRQUFRLENBQUM7WUFDNUQsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDL0YsS0FBSyxDQUFDLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxTQUFTLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLFNBQVMsQ0FBQyxFQUFFLG9EQUFTLENBQUMsRUFBRSxDQUEyQixDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO3FCQUNsTCxLQUFLLENBQUMsQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsT0FBTyxDQUFDLEVBQUUsb0RBQVMsQ0FBQyxFQUFFLENBQTJCLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbkwsQ0FBQztZQUNELElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO2dCQUN6QixFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNqQixNQUFNO2FBQ1AsQ0FBQztRQUNKLENBQUM7UUFFRCw4QkFBeUIsR0FBRyxDQUFDLFNBQWtCLEVBQVcsRUFBRTtZQUMxRCxNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTztZQUM5QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzNFLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLG9GQUFvRjtnQkFDbEgsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1lBQ3BDLENBQUM7WUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDbkQsQ0FBQztRQUVELHlCQUFvQixHQUFHLENBQUMsS0FBNkIsRUFBRSxFQUFFO1lBQ3ZELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsU0FBUyxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO2dCQUN6QixFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNqQixNQUFNO2FBQ1AsQ0FBQztRQUNKLENBQUM7UUFFRCx1QkFBa0IsR0FBRyxDQUFDLEtBQTZCLEVBQUUsRUFBRTtZQUNyRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEtBQUssQ0FBQztZQUN0RixJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQztnQkFDekIsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDakIsTUFBTTthQUNQLENBQUM7UUFDSixDQUFDO1FBRUQseUJBQW9CLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7Z0JBQ3pCLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7YUFDeEYsQ0FBQztRQUNKLENBQUM7UUFFRCx1QkFBa0IsR0FBRyxFQUFFLENBQUMsRUFBRTtZQUN4QixNQUFNLGtCQUFrQixHQUFHLEVBQUUsS0FBSyxXQUFXLENBQUMsS0FBSztZQUVuRCw0REFBYyxDQUFDLGlDQUFpQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztRQUN6SSxDQUFDO1FBRUQsd0JBQW1CLEdBQUcsQ0FBQyxjQUE0QixFQUFFLGFBQTJCLEVBQUUscUJBQW1DLEVBQUUsY0FBNkMsRUFBRSw2QkFBc0MsSUFBSSxFQUFpQyxFQUFFO1lBQ2pQLE1BQU0sT0FBTyxHQUFHLHNEQUFlLENBQUMsZ0RBQWdELENBQUMsY0FBYyxJQUFJLGNBQWMsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDO1lBQ3hJLE1BQU0sTUFBTSxHQUFHLHNEQUFlLENBQUMsZ0RBQWdELENBQUMsYUFBYSxJQUFJLGFBQWEsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDO1lBQ3JJLE1BQU0sY0FBYyxHQUFHLHNEQUFlLENBQUMsZ0RBQWdELENBQUMscUJBQXFCLElBQUkscUJBQXFCLENBQUMsS0FBSyxFQUFFLGNBQWMsQ0FBQztZQUM3SixPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsMEJBQTBCLENBQUM7UUFDbkgsQ0FBQztRQUVELDZCQUF3QixHQUFHLENBQUMsVUFBeUMsRUFBRSxTQUF3QyxFQUFFLGlCQUFnRCxFQUFFLGNBQTZDLEVBQUUsNkJBQXNDLElBQUksRUFBaUMsRUFBRTtZQUM3UixNQUFNLDJCQUEyQixHQUFHLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxzREFBZSxDQUFDLDhCQUE4QixDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjO1lBQ2hKLElBQUksWUFBWSxHQUFHLHNEQUFlLENBQUMsbUJBQW1CLENBQUMsMkJBQTJCLEVBQUUsVUFBVSxDQUFDO1lBQy9GLFlBQVksR0FBRyxzREFBZSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRSxTQUFTLENBQUM7WUFDM0UsWUFBWSxHQUFHLHNEQUFlLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLGlCQUFpQixDQUFDO1lBQ25GLE9BQU8sWUFBWTtRQUNyQixDQUFDO1FBRUQsd0JBQW1CLEdBQUcsR0FBRyxFQUFFO1lBQ3pCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMscUJBQXFCO1FBQzNDLENBQUM7UUFFRCx5QkFBb0IsR0FBRyxDQUFDLElBQVksRUFBZ0IsRUFBRTtZQUNwRCxJQUFJLEtBQUssR0FBRyxFQUFFO1lBQ2QsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDVCxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSx5REFBa0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNqRSxDQUFDO1lBQ0QsT0FBTyxvREFBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUN2QyxDQUFDO1FBRUQscUJBQWdCLEdBQUcsR0FBaUIsRUFBRTtZQUNwQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLGlCQUFpQjtnQkFDNUgsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLGlCQUFpQjtZQUNwRCxPQUFPLFVBQVUsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7UUFDNUUsQ0FBQztRQUVELHNCQUFpQixHQUFHLEdBQWlCLEVBQUU7WUFDckMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxjQUFjO2dCQUN6SCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsY0FBYztZQUNqRCxPQUFPLFVBQVUsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztRQUM3RSxDQUFDO1FBRUQsNkJBQXdCLEdBQUcsR0FBaUIsRUFBRTs7WUFDNUMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTO2dCQUNwSCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsVUFBVTtZQUVyRyxPQUFPLFVBQVU7Z0JBQ2YsQ0FDRSx1QkFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLDBDQUFFLGNBQWMsMENBQUUsU0FBUywwQ0FBRSxRQUFRLE1BQUssK0NBQVEsQ0FBQyxVQUFVLEtBQUksc0JBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSwwQ0FBRSxjQUFjLDBDQUFFLFNBQVMsMENBQUUsS0FBSztvQkFDbkksQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxzQkFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLDBDQUFFLGNBQWMsMENBQUUsU0FBUywwQ0FBRSxLQUFLLENBQUM7b0JBQ2hGLENBQUMsQ0FBQyxJQUFJLENBQ1Q7UUFDTCxDQUFDO1FBRUQscUJBQWdCLEdBQUcsR0FBRyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1osYUFBYSxFQUFFLElBQUk7Z0JBQ25CLFlBQVksRUFBRSxLQUFLO2FBQ3BCLENBQUM7UUFDSixDQUFDO1FBRUQsb0JBQWUsR0FBRyxHQUFHLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDWixhQUFhLEVBQUUsS0FBSztnQkFDcEIsWUFBWSxFQUFFLElBQUk7YUFDbkIsQ0FBQztRQUNKLENBQUM7UUFFRCxzQkFBaUIsR0FBRyxHQUFHLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDWixhQUFhLEVBQUUsS0FBSztnQkFDcEIsWUFBWSxFQUFFLEtBQUs7YUFDcEIsQ0FBQztRQUNKLENBQUM7UUFFRCxxQkFBZ0IsR0FBRyxHQUFHLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDWixhQUFhLEVBQUUsS0FBSztnQkFDcEIsWUFBWSxFQUFFLEtBQUs7YUFDcEIsQ0FBQztRQUNKLENBQUM7UUFFRCxvQkFBZSxHQUFHLEdBQVksRUFBRTtZQUM5QixPQUFPLENBQUMsQ0FBQyxDQUNQLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFO2dCQUN6QixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCO2dCQUMvQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ0EsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO29CQUNoRSxDQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDLENBQUM7d0JBQzdELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxDQUFDO3dCQUN0RSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQ25MLENBQ0EsQ0FDTjtRQUNILENBQUM7UUFFRCxvQkFBZSxHQUFHLEdBQVksRUFBRTtZQUM5QixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5RCxDQUFDO1FBRUQsb0JBQWUsR0FBRyxHQUFHLEVBQUU7WUFDckIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO1lBQzlCLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2hHLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQy9DLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ2xFLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxTQUFTLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDdEUsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMvRSxDQUFDO1lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7Z0JBQ3pCLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2pCLE1BQU07YUFDUCxDQUFDO1FBQ0osQ0FBQztRQTdVQyxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsYUFBYSxFQUFFLEtBQUs7WUFDcEIsWUFBWSxFQUFFLEtBQUs7WUFDbkIsZ0JBQWdCLEVBQUUsT0FBTyxpQkFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLDBDQUFFLGNBQWMsMENBQUUsSUFBSSxNQUFLLFFBQVE7Z0JBQzNFLENBQUMsQ0FBQyxnQkFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLDBDQUFFLGNBQWMsMENBQUUsSUFBSTtnQkFDekMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDekIsZUFBZSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1NBQzNIO0lBQ0gsQ0FBQztJQUVELGtCQUFrQixDQUFFLFNBQTBDOztRQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQztZQUNoQyxJQUFJLGlCQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sMENBQUUsY0FBYywwQ0FBRSxJQUFJLE9BQUsscUJBQVMsQ0FBQyxNQUFNLDBDQUFFLGNBQWMsMENBQUUsSUFBSSxHQUFFLENBQUM7Z0JBQ3ZGLElBQUksQ0FBQyxRQUFRLENBQUM7b0JBQ1osZ0JBQWdCLEVBQUUsT0FBTyxpQkFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLDBDQUFFLGNBQWMsMENBQUUsSUFBSSxNQUFLLFFBQVE7d0JBQzNFLENBQUMsQ0FBQyxnQkFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLDBDQUFFLGNBQWMsMENBQUUsSUFBSTt3QkFDekMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7aUJBQzFCLENBQUM7WUFDSixDQUFDO1lBQ0QsSUFBSSxpQkFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLDBDQUFFLGNBQWMsMENBQUUsT0FBTyxPQUFLLHFCQUFTLENBQUMsTUFBTSwwQ0FBRSxjQUFjLDBDQUFFLE9BQU8sR0FBRSxDQUFDO2dCQUM3RixJQUFJLENBQUMsUUFBUSxDQUFDO29CQUNaLGVBQWUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtpQkFDM0gsQ0FBQztZQUNKLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELG9CQUFvQjtRQUNsQiw0REFBYyxDQUFDLGlDQUFpQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDNUgsQ0FBQztJQUVELGNBQWM7UUFDWixNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLO1FBQ25DLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLGNBQWMsS0FBSyxTQUFTO1FBQ2hILE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxvREFBcUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQzVILENBQUM7SUE0U0QsTUFBTTs7UUFDSixNQUFNLElBQUksR0FBRyxXQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSwwQ0FBRSxJQUFrQixLQUFJLElBQUk7UUFDOUUsTUFBTSxXQUFXLEdBQUcsV0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYywwQ0FBRSxXQUFzQyxLQUFJLElBQUk7UUFDcEcsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXO1FBQzlGLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRTtRQUNoRCxNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUU7UUFDaEQsTUFBTSxjQUFjLEdBQUcsaUJBQWlCLElBQUksaUJBQWlCO1FBQzdELE9BQU8sQ0FDTCx3REFBSyxHQUFHLEVBQUUsZ0RBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNsQyx3REFBSyxTQUFTLEVBQUMsaUNBQWlDO2dCQUM5QztvQkFDRSwrQ0FBQywrRUFBYzt3QkFDYiwrQ0FBQywyRUFBVTs0QkFDVCx3REFBSyxTQUFTLEVBQUMsaUJBQWlCO2dDQUM5QiwrQ0FBQyxxRkFBa0IsSUFBQyxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUNwRixxQkFBcUIsRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxzQkFBc0IsRUFBRSxJQUFJLENBQUMsc0JBQXNCLEVBQ3RHLFFBQVEsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUMxRCxDQUNFLENBQ0ssQ0FDRTtvQkFFakIsK0NBQUMsK0VBQWM7d0JBQ2IsK0NBQUMsMkVBQVUsSUFBQyxJQUFJLEVBQUMsT0FBTyxnQkFBYSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxvREFBYyxDQUFDLE9BQU8sRUFBRSxDQUFDOzRCQUMzSCwrQ0FBQyw2RUFBWSxJQUNYLGdCQUFnQixFQUFFLElBQUksQ0FBQyxvQkFBb0IsRUFDM0MsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQ3JELGNBQWMsRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFDdkUsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUN2QixDQUNTO3dCQUNiLCtDQUFDLDJFQUFVLElBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLG9EQUFxQixDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUk7d0JBQ3RILCtDQUFDLDJFQUFVLElBQUMsSUFBSSxFQUFDLE9BQU8sZ0JBQWEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsb0RBQXFCLENBQUMsT0FBTyxFQUFFLENBQUMsSUFFaEksSUFBSSxDQUFDLG1CQUFtQixFQUFFOzRCQUN4QixDQUFDLENBQUMsd0RBQUssU0FBUyxFQUFDLE9BQU87Z0NBQ3RCLCtDQUFDLGdGQUFlLElBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsZUFBZSxFQUMzSCxVQUFVLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQ2xILEtBQUssRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLGdCQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxvREFBcUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUMzRyxDQUNFOzRCQUNOLENBQUMsQ0FBQywrQ0FBQyw4Q0FBUyxJQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLElBQUksRUFBQyxJQUFJLEVBQ3pFLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLGVBQWUsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUMvRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFDLENBQUMsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFDLENBQUMsZ0JBQzVFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLG9EQUFxQixDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQzNHLENBRUs7d0JBQ2IsK0NBQUMsMkVBQVUsSUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsb0RBQXFCLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBSTt3QkFDaEgsK0NBQUMsMkVBQVUsSUFBQyxJQUFJLEVBQUMsT0FBTyxnQkFBYSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxvREFBcUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUUxSCxJQUFJLENBQUMsbUJBQW1CLEVBQUU7NEJBQ3hCLENBQUMsQ0FBQyx3REFBSyxTQUFTLEVBQUMsT0FBTztnQ0FDdEIsK0NBQUMsZ0ZBQWUsSUFBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFDN0gsVUFBVSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUNySCxLQUFLLEVBQUUsb0JBQW9CLEVBQzNCLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FDdkIsQ0FDRTs0QkFDTixDQUFDLENBQUMsK0NBQUMsOENBQVMsSUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLElBQUksRUFBQyxJQUFJLEVBQzFFLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQ2hGLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUMsQ0FBQyxFQUNyQyxZQUFZLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFDLENBQUMsR0FDM0MsQ0FFSzt3QkFDYiwrQ0FBQywyRUFBVSxJQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxzREFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs0QkFDckcsK0NBQUMsMEVBQVUsSUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsa0JBQWtCLGdCQUNqRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxzREFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssR0FDMUgsQ0FDUzt3QkFFWCxjQUFjOzRCQUNkLCtDQUFDLDJFQUFVLElBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLG9EQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7Z0NBQzNHO29DQUNFLCtDQUFDLDJDQUFNLElBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLEVBQUMsSUFBSSxFQUNwRCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLGdCQUN0SCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxvREFBYyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBR3BHLE1BQU0sQ0FBQyxJQUFJLENBQUMsaURBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLDJEQUFRLEtBQUssRUFBRSxpREFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQ3RFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUUsY0FBYyxFQUFFLG9EQUFjLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUNqRyxDQUFDLENBRUwsQ0FDTCxDQUNLLENBRUE7b0JBRWpCLCtDQUFDLCtFQUFjLElBQUMsU0FBUyxFQUFDLE9BQU87d0JBQy9CLCtDQUFDLHFFQUFlLElBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLG9EQUFjLENBQUMsT0FBTyxFQUFFLENBQUMsRUFDOUcsTUFBTSxFQUFFLENBQUMsQ0FBQyxpQkFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLDBDQUFFLFdBQVcsMENBQUUsU0FBUyxHQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsZUFBZTs0QkFFakYsK0NBQUMseUNBQUksSUFBQyxJQUFJLFFBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLFlBQVksRUFBRSxXQUFXLENBQUMsT0FBTztnQ0FDMUYsK0NBQUMsd0NBQUcsSUFBQyxTQUFTLEVBQUMsV0FBVyxFQUFDLEVBQUUsRUFBRSxXQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxvREFBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO29DQUNqSiwrQ0FBQyx5RUFBbUIsSUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUNyRSxLQUFLLEVBQUUsV0FBVyxJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxvQkFBb0IsRUFDOUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEdBQzFFLENBQ0U7Z0NBQ04sK0NBQUMsd0NBQUcsSUFBQyxTQUFTLEVBQUMsV0FBVyxFQUFDLEVBQUUsRUFBRSxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxvREFBYyxDQUFDLEtBQUssRUFBRSxDQUFDO29DQUMzSSwrQ0FBQyx5RUFBbUIsSUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUNyRSxLQUFLLEVBQUUsV0FBVyxJQUFJLFdBQVcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFDMUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEdBQzFFLENBQ0UsQ0FDRCxDQUNTLENBQ0gsQ0FFYixDQUNGLENBQ0YsQ0FDUDtJQUNILENBQUM7Q0FDRjtBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2N1c3RvbS1idXR0b24vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY3VzdG9tLWJ1dHRvbi9zcmMvc2V0dGluZy9jb21wb25lbnRzL2FkdmFuY2UtY29sbGFwc2UudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jdXN0b20tYnV0dG9uL3NyYy9zZXR0aW5nL2NvbXBvbmVudHMvYWR2YW5jZS1zdHlsZS1zZXR0aW5nL2NvbXBvbmVudHMvY29tbW9uLXN0eWxlLXNldHRpbmcudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jdXN0b20tYnV0dG9uL3NyYy9zZXR0aW5nL2NvbXBvbmVudHMvYWR2YW5jZS1zdHlsZS1zZXR0aW5nL2NvbXBvbmVudHMvZm9udC1zdHlsZS1zZXR0aW5nLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY3VzdG9tLWJ1dHRvbi9zcmMvc2V0dGluZy9jb21wb25lbnRzL2FkdmFuY2Utc3R5bGUtc2V0dGluZy9jb21wb25lbnRzL2ljb24tc3R5bGUtc2V0dGluZy50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2N1c3RvbS1idXR0b24vc3JjL3NldHRpbmcvY29tcG9uZW50cy9hZHZhbmNlLXN0eWxlLXNldHRpbmcvaW5kZXgudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jdXN0b20tYnV0dG9uL3NyYy9zZXR0aW5nL3N0eWxlLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWZvci1idWlsZGVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL2V4cHJlc3Npb24tYnVpbGRlclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9yZXNvdXJjZS1zZWxlY3RvclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvc3R5bGUtc2V0dGluZy1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2Jhc2ljL2NvbG9yLXBpY2tlclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY3VzdG9tLWJ1dHRvbi9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEltbXV0YWJsZU9iamVjdCwgRXhwcmVzc2lvbiwgVGhlbWVCdXR0b25UeXBlLCBJY29uUHJvcHMsIEljb25SZXN1bHQsICBMaW5rUGFyYW0gfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB0eXBlIHsgU3R5bGVTZXR0aW5ncyB9IGZyb20gJ2ppbXUtdWknXHJcblxyXG5leHBvcnQgdHlwZSBJTUNvbmZpZyA9IEltbXV0YWJsZU9iamVjdDxDb25maWc+XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZyB7XHJcbiAgZnVuY3Rpb25Db25maWc6IEZ1bmN0aW9uQ29uZmlnXHJcbiAgc3R5bGVDb25maWc/OiBTdHlsZUNvbmZpZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZ1bmN0aW9uQ29uZmlnIHtcclxuICB0b29sVGlwPzogc3RyaW5nXHJcbiAgdGV4dD86IHN0cmluZ1xyXG4gIGljb24/OiBJY29uQ29uZmlnXHJcbiAgLyoqXHJcbiAgICogY3VzdG9tSWNvbnMgaXMgdXNlZCBmb3IgZGV2ZWxvcGVycyB0byBzZXQgY2VydGFpbiBpY29ucyBhcyBwcmVzZXQgaWNvbnMsIGl0IGNvdWxkIG5vdCBiZSB1cGxvYWRlZCBpbiB0aGUgYnVpbGRlci5cclxuICAgKiBUaGVzZSBjdXN0b20gaWNvbnMgY2FuJ3QgYmUgZGVsZXRlLlxyXG4gICAqL1xyXG4gIGN1c3RvbUljb25zPzogSWNvblJlc3VsdFtdXHJcbiAgdGV4dEV4cHJlc3Npb24/OiBFeHByZXNzaW9uXHJcbiAgdG9vbFRpcEV4cHJlc3Npb24/OiBFeHByZXNzaW9uXHJcbiAgbGlua1BhcmFtPzogTGlua1BhcmFtXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEljb25Qb3NpdGlvbiB7XHJcbiAgTGVmdCA9ICdMRUZUJyxcclxuICBSaWdodCA9ICdSSUdIVCdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJY29uQ29uZmlnIHtcclxuICBkYXRhOiBJY29uUmVzdWx0XHJcbiAgcG9zaXRpb246IEljb25Qb3NpdGlvblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlQ29uZmlnIHtcclxuICB1c2VDdXN0b206IGJvb2xlYW5cclxuICB0aGVtZVN0eWxlPzogVGhlbWVTdHlsZVxyXG4gIGN1c3RvbVN0eWxlPzogQ3VzdG9tU3R5bGVcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUaGVtZVN0eWxlIHtcclxuICBxdWlja1N0eWxlVHlwZTogVGhlbWVCdXR0b25UeXBlXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tU3R5bGUge1xyXG4gIHJlZ3VsYXI6IEFkdmFuY2VTdHlsZVNldHRpbmdzXHJcbiAgaG92ZXI6IEFkdmFuY2VTdHlsZVNldHRpbmdzXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWR2YW5jZVN0eWxlU2V0dGluZ3MgZXh0ZW5kcyBTdHlsZVNldHRpbmdzIHtcclxuICBpY29uUHJvcHM/OiBJY29uUHJvcHNcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXaWRnZXRTdGF0ZSB7XHJcbiAgaXNDb25maWd1cmluZ0hvdmVyPzogYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBJTUFkdmFuY2VTdHlsZVNldHRpbmdzID0gSW1tdXRhYmxlT2JqZWN0PEFkdmFuY2VTdHlsZVNldHRpbmdzPlxyXG5cclxuZXhwb3J0IHR5cGUgSU1JY29uUHJvcHMgPSBJbW11dGFibGVPYmplY3Q8SWNvblByb3BzPlxyXG5cclxuZXhwb3J0IHR5cGUgSU1DdXN0b21TdHlsZSA9IEltbXV0YWJsZU9iamVjdDxDdXN0b21TdHlsZT5cclxuXHJcbmV4cG9ydCB0eXBlIElNVGhlbWVTdHlsZSA9IEltbXV0YWJsZU9iamVjdDxUaGVtZVN0eWxlPlxyXG5cclxuZXhwb3J0IHR5cGUgSU1TdHlsZUNvbmZpZyA9IEltbXV0YWJsZU9iamVjdDxTdHlsZUNvbmZpZz5cclxuXHJcbmV4cG9ydCB0eXBlIElNSWNvblBvc2l0aW9uID0gSW1tdXRhYmxlT2JqZWN0PEljb25Qb3NpdGlvbj5cclxuXHJcbmV4cG9ydCB0eXBlIElNSWNvbkNvbmZpZyA9IEltbXV0YWJsZU9iamVjdDxJY29uQ29uZmlnPlxyXG5cclxuZXhwb3J0IHR5cGUgSU1XaWRnZXRTdGF0ZSA9IEltbXV0YWJsZU9iamVjdDxXaWRnZXRTdGF0ZT5cclxuIiwiaW1wb3J0IHsgUmVhY3QgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IENvbGxhcHNlLCBTd2l0Y2gsIExhYmVsIH0gZnJvbSAnamltdS11aSdcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgdGl0bGU6IHN0cmluZ1xyXG4gIGlzT3BlbjogYm9vbGVhblxyXG4gIHRvZ2dsZTogKCkgPT4gdm9pZFxyXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWR2YW5jZUNvbGxhcHNlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMDAnPlxyXG4gICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5wcm9wcy50b2dnbGV9IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTInPlxyXG4gICAgICAgICAgPGRpdj48TGFiZWwgZm9yPSdvcGVuLWNvbGxhcHNlJyBjbGFzc05hbWU9J2NvbGxhcHNlLWxhYmVsIHRpdGxlMyBoaW50LWRlZmF1bHQnPnt0aGlzLnByb3BzLnRpdGxlfTwvTGFiZWw+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PjxTd2l0Y2ggaWQ9J29wZW4tY29sbGFwc2UnIG5hbWU9J29wZW4tY29sbGFwc2UnIG9uQ2hhbmdlPXt0aGlzLnByb3BzLnRvZ2dsZX0gY2hlY2tlZD17dGhpcy5wcm9wcy5pc09wZW59IC8+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17dGhpcy5wcm9wcy5pc09wZW59PlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmlzT3BlbiAmJiB0aGlzLnByb3BzLmNoaWxkcmVuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBSZWFjdCwgSW1tdXRhYmxlLCBqc3gsIHR5cGUgSW50bFNoYXBlLCB0eXBlIEltbXV0YWJsZU9iamVjdCwgbG9kYXNoIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBDb2xsYXBzYWJsZVJlc2V0UGFuZWwsIFNldHRpbmdSb3cgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cydcclxuaW1wb3J0IHsgdHlwZSBTdHlsZVNldHRpbmdzLCBkZWZhdWx0TWVzc2FnZXMgYXMgamltdVVJTWVzc2FnZXMsIHR5cGUgQmFja2dyb3VuZFN0eWxlLCB0eXBlIEJvcmRlclN0eWxlLCB0eXBlIEZvdXJTaWRlc1VuaXQgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgeyBCb3hTaGFkb3dTZXR0aW5nLCBCb3JkZXJTZXR0aW5nLCBCb3JkZXJSYWRpdXNTZXR0aW5nLCBCYWNrZ3JvdW5kU2V0dGluZywgdHlwZSBCb3JkZXJTaWRlIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zdHlsZS1zZXR0aW5nLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IGlzT2JqZWN0RW1wdHkgfSBmcm9tICcuLi9pbmRleCdcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgb25DaGFuZ2U6IChzdHlsZTogSW1tdXRhYmxlT2JqZWN0PFN0eWxlU2V0dGluZ3M+KSA9PiB2b2lkXHJcbiAgc3R5bGU6IEltbXV0YWJsZU9iamVjdDxTdHlsZVNldHRpbmdzPlxyXG4gIGludGw6IEludGxTaGFwZVxyXG59XHJcblxyXG5jb25zdCBpc1ZhbHVlRW1wdHkgPSAodikgPT4gdiA9PT0gbnVsbCB8fCB2ID09PSB1bmRlZmluZWQgfHwgdiA9PT0gJydcclxuXHJcbmV4cG9ydCBjb25zdCBpc0JhY2tncm91bmRFbXB0eSA9IChiYWNrZ3JvdW5kOiBJbW11dGFibGVPYmplY3Q8QmFja2dyb3VuZFN0eWxlPikgPT4ge1xyXG4gIGlmICghYmFja2dyb3VuZCkgcmV0dXJuIHRydWVcclxuICBjb25zdCBpc0VtcHR5ID0gaXNWYWx1ZUVtcHR5KGJhY2tncm91bmQuY29sb3IpICYmIGlzT2JqZWN0RW1wdHkoYmFja2dyb3VuZC5pbWFnZSlcclxuICByZXR1cm4gaXNFbXB0eVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb25TdHlsZVNldHRpbmcgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzPiB7XHJcbiAgZ2V0U3R5bGVTZXR0aW5ncyAoKTogSW1tdXRhYmxlT2JqZWN0PFN0eWxlU2V0dGluZ3M+IHtcclxuICAgIHJldHVybiB0aGlzLnByb3BzLnN0eWxlID8gdGhpcy5wcm9wcy5zdHlsZSA6IEltbXV0YWJsZSh7fSBhcyBTdHlsZVNldHRpbmdzKVxyXG4gIH1cclxuXHJcbiAgb25CYWNrZ3JvdW5kU3R5bGVDaGFuZ2UgPSBiZyA9PiB7XHJcbiAgICBsZXQgYmFja2dyb3VuZCA9IEltbXV0YWJsZSh0aGlzLnByb3BzLnN0eWxlPy5iYWNrZ3JvdW5kID8/IHt9IGFzIEJhY2tncm91bmRTdHlsZSlcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGJnKSB7XHJcbiAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgY2FzZSAnZmlsbFR5cGUnOlxyXG4gICAgICAgICAgaWYgKGJhY2tncm91bmQuZmlsbFR5cGUgIT09IGJnW2tleV0pIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZCA9IGJhY2tncm91bmQuc2V0KCdmaWxsVHlwZScsIGJnW2tleV0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgJ2NvbG9yJzpcclxuICAgICAgICAgIGJhY2tncm91bmQgPSBiYWNrZ3JvdW5kLnNldCgnY29sb3InLCBiZ1trZXldKVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlICdpbWFnZSc6XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kID0gYmFja2dyb3VuZC5zZXQoJ2ltYWdlJywgYmdba2V5XSlcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMuZ2V0U3R5bGVTZXR0aW5ncygpLnNldCgnYmFja2dyb3VuZCcsIGJhY2tncm91bmQpKVxyXG4gIH1cclxuXHJcbiAgcmVzZXRCYWNrZ3JvdW5kID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLmdldFN0eWxlU2V0dGluZ3MoKS53aXRob3V0KCdiYWNrZ3JvdW5kJykpXHJcbiAgfVxyXG5cclxuICB1cGRhdGVCb3JkZXIgPSAoYm9yZGVyOiBCb3JkZXJTdHlsZSkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLmdldFN0eWxlU2V0dGluZ3MoKVxyXG4gICAgICAuc2V0KCdib3JkZXInLCBib3JkZXIpXHJcbiAgICAgIC53aXRob3V0KCdib3JkZXJUb3AnKVxyXG4gICAgICAud2l0aG91dCgnYm9yZGVyTGVmdCcpXHJcbiAgICAgIC53aXRob3V0KCdib3JkZXJSaWdodCcpXHJcbiAgICAgIC53aXRob3V0KCdib3JkZXJCb3R0b20nKVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlU2lkZUJvcmRlciA9IChzaWRlOiBCb3JkZXJTaWRlLCBib3JkZXI6IEJvcmRlclN0eWxlKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMuZ2V0U3R5bGVTZXR0aW5ncygpLnNldChsb2Rhc2guY2FtZWxDYXNlKGBib3JkZXItJHtzaWRlfWApLCBib3JkZXIpLndpdGhvdXQoJ2JvcmRlcicpKVxyXG4gIH1cclxuXHJcbiAgcmVzZXRCb3JkZXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMuZ2V0U3R5bGVTZXR0aW5ncygpXHJcbiAgICAgIC53aXRob3V0KCdib3JkZXInKVxyXG4gICAgICAud2l0aG91dCgnYm9yZGVyVG9wJylcclxuICAgICAgLndpdGhvdXQoJ2JvcmRlckxlZnQnKVxyXG4gICAgICAud2l0aG91dCgnYm9yZGVyUmlnaHQnKVxyXG4gICAgICAud2l0aG91dCgnYm9yZGVyQm90dG9tJylcclxuICAgIClcclxuICB9XHJcblxyXG4gIHVwZGF0ZVJhZGl1cyA9IChyYWRpdXM6IEltbXV0YWJsZU9iamVjdDxGb3VyU2lkZXNVbml0PikgPT4ge1xyXG4gICAgaWYgKCFyYWRpdXMubnVtYmVyWzBdICYmICFyYWRpdXMubnVtYmVyWzFdICYmICFyYWRpdXMubnVtYmVyWzJdICYmICFyYWRpdXMubnVtYmVyWzNdKSB7XHJcbiAgICAgIHRoaXMucmVzZXRSYWRpdXMoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLmdldFN0eWxlU2V0dGluZ3MoKS5zZXQoJ2JvcmRlclJhZGl1cycsIHJhZGl1cykpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNldFJhZGl1cyA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5nZXRTdHlsZVNldHRpbmdzKCkud2l0aG91dCgnYm9yZGVyUmFkaXVzJykpXHJcbiAgfVxyXG5cclxuICB1cGRhdGVTaGFkb3cgPSBzaGFkb3cgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLmdldFN0eWxlU2V0dGluZ3MoKS5zZXQoJ2JveFNoYWRvdycsIHNoYWRvdykpXHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3Qgc3R5bGUgPSB0aGlzLnByb3BzLnN0eWxlIHx8IEltbXV0YWJsZSh7fSBhcyBTdHlsZVNldHRpbmdzKVxyXG4gICAgY29uc3QgeyBpbnRsIH0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgY29uc3QgYmFja2dyb3VuZFN0cmluZyA9IGludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnYmFja2dyb3VuZCcsIGRlZmF1bHRNZXNzYWdlOiBqaW11VUlNZXNzYWdlcy5iYWNrZ3JvdW5kIH0pXHJcbiAgICBjb25zdCBib3JkZXJTdHJpbmcgPSBpbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ2JvcmRlcicsIGRlZmF1bHRNZXNzYWdlOiBqaW11VUlNZXNzYWdlcy5ib3JkZXIgfSlcclxuICAgIGNvbnN0IGJvcmRlclJhZGl1c1N0cmluZyA9IGludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnYm9yZGVyUmFkaXVzJywgZGVmYXVsdE1lc3NhZ2U6IGppbXVVSU1lc3NhZ2VzLmJvcmRlclJhZGl1cyB9KVxyXG4gICAgY29uc3Qgc2hhZG93U3RyaW5nID0gaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdzaGFkb3cnLCBkZWZhdWx0TWVzc2FnZTogamltdVVJTWVzc2FnZXMuc2hhZG93IH0pXHJcblxyXG4gICAgY29uc3QgaXNCb3JkZXJFbXB0eSA9IGlzT2JqZWN0RW1wdHkoc3R5bGUuYm9yZGVyKSAmJlxyXG4gICAgICBpc09iamVjdEVtcHR5KHN0eWxlLmJvcmRlclRvcCkgJiZcclxuICAgICAgaXNPYmplY3RFbXB0eShzdHlsZS5ib3JkZXJMZWZ0KSAmJlxyXG4gICAgICBpc09iamVjdEVtcHR5KHN0eWxlLmJvcmRlclJpZ2h0KSAmJlxyXG4gICAgICBpc09iamVjdEVtcHR5KHN0eWxlLmJvcmRlckJvdHRvbSlcclxuICAgIGNvbnN0IGlzQm9yZGVyUmFkaXVzRW1wdHkgPSBpc09iamVjdEVtcHR5KHN0eWxlLmJvcmRlclJhZGl1cylcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICA8Q29sbGFwc2FibGVSZXNldFBhbmVsIGxhYmVsPXtiYWNrZ3JvdW5kU3RyaW5nfSBpc0VtcHR5PXtpc0JhY2tncm91bmRFbXB0eShzdHlsZS5iYWNrZ3JvdW5kKX0gYm90dG9tTGluZSBrZWVwTW91bnQgb25SZXNldD17dGhpcy5yZXNldEJhY2tncm91bmR9PlxyXG4gICAgICAgICAgICA8QmFja2dyb3VuZFNldHRpbmcgYmFja2dyb3VuZD17c3R5bGUuYmFja2dyb3VuZH0gYXBwbHlEZWZhdWx0VmFsdWU9e2ZhbHNlfSBvbkNoYW5nZT17dGhpcy5vbkJhY2tncm91bmRTdHlsZUNoYW5nZX0gLz5cclxuICAgICAgICAgIDwvQ29sbGFwc2FibGVSZXNldFBhbmVsPlxyXG4gICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICA8U2V0dGluZ1Jvdz5cclxuICAgICAgICAgIDxDb2xsYXBzYWJsZVJlc2V0UGFuZWxcclxuICAgICAgICAgICAgbGFiZWw9e2JvcmRlclN0cmluZ31cclxuICAgICAgICAgICAgaXNFbXB0eT17aXNCb3JkZXJFbXB0eX1cclxuICAgICAgICAgICAgYm90dG9tTGluZVxyXG4gICAgICAgICAgICBrZWVwTW91bnRcclxuICAgICAgICAgICAgb25SZXNldD17dGhpcy5yZXNldEJvcmRlcn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEJvcmRlclNldHRpbmdcclxuICAgICAgICAgICAgICB2YWx1ZT17c3R5bGUuYm9yZGVyfVxyXG4gICAgICAgICAgICAgIHRvcD17c3R5bGUuYm9yZGVyVG9wfVxyXG4gICAgICAgICAgICAgIGxlZnQ9e3N0eWxlLmJvcmRlckxlZnR9XHJcbiAgICAgICAgICAgICAgcmlnaHQ9e3N0eWxlLmJvcmRlclJpZ2h0fVxyXG4gICAgICAgICAgICAgIGJvdHRvbT17c3R5bGUuYm9yZGVyQm90dG9tfVxyXG4gICAgICAgICAgICAgIGFwcGx5RGVmYXVsdFZhbHVlPXtmYWxzZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGRhdGVCb3JkZXJ9XHJcbiAgICAgICAgICAgICAgb25TaWRlQ2hhbmdlPXt0aGlzLnVwZGF0ZVNpZGVCb3JkZXJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NvbGxhcHNhYmxlUmVzZXRQYW5lbD5cclxuICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICA8Q29sbGFwc2FibGVSZXNldFBhbmVsIGxhYmVsPXtib3JkZXJSYWRpdXNTdHJpbmd9IGlzRW1wdHk9e2lzQm9yZGVyUmFkaXVzRW1wdHl9IGJvdHRvbUxpbmUga2VlcE1vdW50IG9uUmVzZXQ9eyB0aGlzLnJlc2V0UmFkaXVzfT5cclxuICAgICAgICAgICAgPEJvcmRlclJhZGl1c1NldHRpbmdcclxuICAgICAgICAgICAgICB2YWx1ZT17c3R5bGUuYm9yZGVyUmFkaXVzfVxyXG4gICAgICAgICAgICAgIGFwcGx5RGVmYXVsdFZhbHVlPXtmYWxzZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGRhdGVSYWRpdXN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NvbGxhcHNhYmxlUmVzZXRQYW5lbD5cclxuICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICA8Q29sbGFwc2FibGVSZXNldFBhbmVsIGxhYmVsPXtzaGFkb3dTdHJpbmd9IGlzRW1wdHk9e2lzT2JqZWN0RW1wdHkoc3R5bGUuYm94U2hhZG93KX0ga2VlcE1vdW50IG9uUmVzZXQ9eygpID0+IHsgdGhpcy51cGRhdGVTaGFkb3cobnVsbCkgfX0+XHJcbiAgICAgICAgICAgIDxCb3hTaGFkb3dTZXR0aW5nIHZhbHVlPXtzdHlsZS5ib3hTaGFkb3d9IGFwcGx5RGVmYXVsdFZhbHVlPXtmYWxzZX0gb25DaGFuZ2U9e3RoaXMudXBkYXRlU2hhZG93fSAvPlxyXG4gICAgICAgICAgPC9Db2xsYXBzYWJsZVJlc2V0UGFuZWw+XHJcbiAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsgUmVhY3QsIGpzeCwgSW1tdXRhYmxlLCB0eXBlIElNVGhlbWVWYXJpYWJsZXMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB0eXBlIHsgSU1UZXh0Rm9udFN0eWxlLCBGb250U3R5bGVLZXlzIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHsgVGV4dFN0eWxlLCB0eXBlIFRleHRTdHlsZVByb3BzIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zdHlsZS1zZXR0aW5nLWNvbXBvbmVudHMnXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHRleHQ6IElNVGV4dEZvbnRTdHlsZVxyXG4gIGFwcFRoZW1lOiBJTVRoZW1lVmFyaWFibGVzXHJcbiAgb25DaGFuZ2U6ICh0ZXh0OiBJTVRleHRGb250U3R5bGUpID0+IHZvaWRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9udFN0eWxlU2V0dGluZyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHM+IHtcclxuICBjaGFuZ2VUZXh0ID0gKGs6IFBhcnRpYWw8Rm9udFN0eWxlS2V5cz4sIHY6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgdGV4dCA9IHRoaXMucHJvcHMudGV4dCA/IHRoaXMucHJvcHMudGV4dC5zZXQoaywgdikgOiAoSW1tdXRhYmxlKHsgW2tdOiB2IH0pIGFzIElNVGV4dEZvbnRTdHlsZSlcclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGV4dClcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gPFRleHRTdHlsZSB7Li4udGhpcy5wcm9wcy50ZXh0IGFzIFRleHRTdHlsZVByb3BzfSBhcHBseURlZmF1bHRWYWx1ZT17ZmFsc2V9IG9uQ2hhbmdlPXt0aGlzLmNoYW5nZVRleHR9IC8+XHJcbiAgfVxyXG59XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBSZWFjdCwganN4LCB0eXBlIEludGxTaGFwZSwgdHlwZSBJTUljb25Qcm9wcywgSW1tdXRhYmxlLCB0eXBlIElNVGhlbWVWYXJpYWJsZXMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IERpc3RhbmNlVW5pdHMsIHR5cGUgTGluZWFyVW5pdCB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCB7IElucHV0VW5pdCB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc3R5bGUtc2V0dGluZy1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBUaGVtZUNvbG9yUGlja2VyIH0gZnJvbSAnamltdS11aS9iYXNpYy9jb2xvci1waWNrZXInXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgaWNvblByb3BzOiBJTUljb25Qcm9wc1xyXG4gIGludGw6IEludGxTaGFwZVxyXG4gIGFwcFRoZW1lOiBJTVRoZW1lVmFyaWFibGVzXHJcbiAgb25DaGFuZ2U6IChpY29uUHJvcHM6IElNSWNvblByb3BzKSA9PiB2b2lkXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEljb25TdHlsZVNldHRpbmcgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzPiB7XHJcbiAgdW5pdHMgPSBbRGlzdGFuY2VVbml0cy5QSVhFTF1cclxuXHJcbiAgb25TaXplQ2hhbmdlID0gKHNpemU6IExpbmVhclVuaXQpID0+IHtcclxuICAgIHRoaXMuY2hhbmdlSWNvbignc2l6ZScsIHNpemUuZGlzdGFuY2UpXHJcbiAgfVxyXG5cclxuICBvbkNvbG9yQ2hhbmdlID0gKGNvbG9yOiBzdHJpbmcpID0+IHtcclxuICAgIHRoaXMuY2hhbmdlSWNvbignY29sb3InLCBjb2xvcilcclxuICB9XHJcblxyXG4gIGNoYW5nZUljb24gPSAoazogc3RyaW5nLCB2OiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHByb3BlcnRpZXM6IElNSWNvblByb3BzID0gdGhpcy5wcm9wcy5pY29uUHJvcHMgPyB0aGlzLnByb3BzLmljb25Qcm9wcy5zZXQoaywgdikgOiAoSW1tdXRhYmxlKHsgW2tdOiB2IH0pIGFzIElNSWNvblByb3BzKVxyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShwcm9wZXJ0aWVzKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLnByb3BzLmljb25Qcm9wcyB8fCAoe30gYXMgSU1JY29uUHJvcHMpXHJcbiAgICBjb25zdCBzaXplID0gaXNOYU4ocHJvcGVydGllcy5zaXplKSA/IHVuZGVmaW5lZCA6IHByb3BlcnRpZXMuc2l6ZSArICdweCdcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBpY29uLXNpemUtZm9udC1zdHlsZS1zZXR0aW5nXCI+XHJcbiAgICAgICAgPElucHV0VW5pdCBjbGFzc05hbWU9J3ByLTEnIHVuaXRzPXt0aGlzLnVuaXRzfSB2YWx1ZT17c2l6ZX0gYXBwbHlEZWZhdWx0VmFsdWU9e2ZhbHNlfSBwbGFjZWhvbGRlcj0nIyMnIG9uQ2hhbmdlPXt0aGlzLm9uU2l6ZUNoYW5nZX0vPlxyXG4gICAgICAgIDxUaGVtZUNvbG9yUGlja2VyIHNwZWNpZmljVGhlbWU9e3RoaXMucHJvcHMuYXBwVGhlbWV9IHZhbHVlPXtwcm9wZXJ0aWVzLmNvbG9yfSBvbkNoYW5nZT17dGhpcy5vbkNvbG9yQ2hhbmdlfS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsgUmVhY3QsIGpzeCwgdHlwZSBJbnRsU2hhcGUsIHR5cGUgSU1JY29uUHJvcHMsIEltbXV0YWJsZSwgZGVmYXVsdE1lc3NhZ2VzIGFzIGppbXVDb3JlTWVzc2FnZXMsIHR5cGUgSW1tdXRhYmxlT2JqZWN0LCB0eXBlIElNVGhlbWVWYXJpYWJsZXMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IENvbGxhcHNhYmxlUmVzZXRQYW5lbCwgU2V0dGluZ1JvdyB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB0eXBlIFN0eWxlU2V0dGluZ3MsIHR5cGUgVGV4dEZvbnRTdHlsZSwgZGVmYXVsdE1lc3NhZ2VzIGFzIGppbXVVaU1lc3NhZ2VzIH0gZnJvbSAnamltdS11aSdcclxuXHJcbmltcG9ydCB0eXBlIHsgSU1BZHZhbmNlU3R5bGVTZXR0aW5ncyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZydcclxuXHJcbmltcG9ydCBDb21tb25TdHlsZVNldHRpbmcgZnJvbSAnLi9jb21wb25lbnRzL2NvbW1vbi1zdHlsZS1zZXR0aW5nJ1xyXG5pbXBvcnQgSWNvblN0eWxlU2V0dGluZyBmcm9tICcuL2NvbXBvbmVudHMvaWNvbi1zdHlsZS1zZXR0aW5nJ1xyXG5pbXBvcnQgRm9udFN0eWxlU2V0dGluZyBmcm9tICcuL2NvbXBvbmVudHMvZm9udC1zdHlsZS1zZXR0aW5nJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBvbkNoYW5nZTogKHN0eWxlOiBJTUFkdmFuY2VTdHlsZVNldHRpbmdzKSA9PiB2b2lkXHJcbiAgc3R5bGU6IElNQWR2YW5jZVN0eWxlU2V0dGluZ3NcclxuICBpbnRsOiBJbnRsU2hhcGVcclxuICBhcHBUaGVtZTogSU1UaGVtZVZhcmlhYmxlc1xyXG4gIGlzVGV4dFNldHRpbmdPcGVuOiBib29sZWFuXHJcbiAgaXNJY29uU2V0dGluZ09wZW46IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGlzT2JqZWN0RW1wdHkgPSAob2JqOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSA9PiB7XHJcbiAgaWYgKCFvYmopIHJldHVybiB0cnVlXHJcbiAgY29uc3Qgbm90RW1wdHkgPSBPYmplY3Qua2V5cyhvYmopLnNvbWUoa2V5ID0+IG9ialtrZXldICE9PSBudWxsICYmIG9ialtrZXldICE9PSB1bmRlZmluZWQgJiYgb2JqW2tleV0gIT09ICcnKVxyXG4gIHJldHVybiAhbm90RW1wdHlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWR2YW5jZVN0eWxlU2V0dGluZyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHM+IHtcclxuICBvblRleHRDaGFuZ2UgPSAodGV4dDogVGV4dEZvbnRTdHlsZSkgPT4ge1xyXG4gICAgY29uc3QgbWVyZ2VkU3R5bGUgPSB0aGlzLmdldFN0eWxlRnJvbUN1c3RvbSgpXHJcbiAgICBjb25zdCBzdHlsZSA9IG1lcmdlZFN0eWxlLnNldCgndGV4dCcsIHRleHQpXHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHN0eWxlKVxyXG4gIH1cclxuXHJcbiAgb25JY29uQ2hhbmdlID0gKGljb25Qcm9wczogSU1JY29uUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IG1lcmdlZFN0eWxlID0gdGhpcy5nZXRTdHlsZUZyb21DdXN0b20oKVxyXG4gICAgY29uc3Qgc3R5bGUgPSBtZXJnZWRTdHlsZS5zZXQoJ2ljb25Qcm9wcycsIGljb25Qcm9wcylcclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc3R5bGUpXHJcbiAgfVxyXG5cclxuICBvbkNvbW1vbkNoYW5nZSA9IChzdHlsZTogSW1tdXRhYmxlT2JqZWN0PFN0eWxlU2V0dGluZ3M+KSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKEltbXV0YWJsZShzdHlsZSkpXHJcbiAgfVxyXG5cclxuICBnZXRTdHlsZUZyb21DdXN0b20gPSAoKTogSU1BZHZhbmNlU3R5bGVTZXR0aW5ncyA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5zdHlsZSB8fCBJbW11dGFibGUoe30pXHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3Qgc3R5bGUgPSB0aGlzLmdldFN0eWxlRnJvbUN1c3RvbSgpXHJcbiAgICBjb25zdCB7IGlzVGV4dFNldHRpbmdPcGVuLCBpc0ljb25TZXR0aW5nT3BlbiwgaW50bCwgYXBwVGhlbWUgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICBjb25zdCB0ZXh0U3RyaW5nID0gaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICd0ZXh0JywgZGVmYXVsdE1lc3NhZ2U6IGppbXVVaU1lc3NhZ2VzLnRleHQgfSlcclxuICAgIGNvbnN0IEljb25TdHJpbmcgPSBpbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ2ljb24nLCBkZWZhdWx0TWVzc2FnZTogamltdUNvcmVNZXNzYWdlcy5pY29uIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZHZhbmNlLXN0eWxlLXNldHRpbmcgbXQtNFwiPlxyXG4gICAgICAgIHtpc1RleHRTZXR0aW5nT3BlbiAmJlxyXG4gICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDxDb2xsYXBzYWJsZVJlc2V0UGFuZWwgbGFiZWw9e3RleHRTdHJpbmd9IGlzRW1wdHk9e2lzT2JqZWN0RW1wdHkoc3R5bGUudGV4dCl9IGJvdHRvbUxpbmUgb25SZXNldD17KCkgPT4geyB0aGlzLm9uVGV4dENoYW5nZShudWxsKSB9fT5cclxuICAgICAgICAgICAgICA8Rm9udFN0eWxlU2V0dGluZyBhcHBUaGVtZT17YXBwVGhlbWV9IHRleHQ9e3N0eWxlLnRleHR9IG9uQ2hhbmdlPXt0aGlzLm9uVGV4dENoYW5nZX0gLz5cclxuICAgICAgICAgICAgPC9Db2xsYXBzYWJsZVJlc2V0UGFuZWw+XHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtpc0ljb25TZXR0aW5nT3BlbiAmJlxyXG4gICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDxDb2xsYXBzYWJsZVJlc2V0UGFuZWwgbGFiZWw9e0ljb25TdHJpbmd9IGlzRW1wdHk9e2lzT2JqZWN0RW1wdHkoc3R5bGUuaWNvblByb3BzKX0gYm90dG9tTGluZSBvblJlc2V0PXsoKSA9PiB7IHRoaXMub25JY29uQ2hhbmdlKG51bGwpIH19PlxyXG4gICAgICAgICAgICAgIDxJY29uU3R5bGVTZXR0aW5nIGFwcFRoZW1lPXthcHBUaGVtZX0gaW50bD17aW50bH0gaWNvblByb3BzPXtzdHlsZS5pY29uUHJvcHN9IG9uQ2hhbmdlPXt0aGlzLm9uSWNvbkNoYW5nZX0gLz5cclxuICAgICAgICAgICAgPC9Db2xsYXBzYWJsZVJlc2V0UGFuZWw+XHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxDb21tb25TdHlsZVNldHRpbmcgaW50bD17aW50bH0gc3R5bGU9e3N0eWxlIGFzIEltbXV0YWJsZU9iamVjdDxTdHlsZVNldHRpbmdzPn0gb25DaGFuZ2U9e3RoaXMub25Db21tb25DaGFuZ2V9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyB0eXBlIElNVGhlbWVWYXJpYWJsZXMsIGNzcywgdHlwZSBTZXJpYWxpemVkU3R5bGVzLCBwb2xpc2hlZCB9IGZyb20gJ2ppbXUtY29yZSdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHlsZSAodGhlbWU6IElNVGhlbWVWYXJpYWJsZXMpOiBTZXJpYWxpemVkU3R5bGVzIHtcclxuICByZXR1cm4gY3NzYFxyXG4gICAgLndpZGdldC1zZXR0aW5nLWxpbmsge1xyXG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAuY29sbGFwc2UtbGFiZWx7XHJcbiAgICAgICAgY29sb3I6ICR7dGhlbWUucmVmLnBhbGV0dGUubmV1dHJhbFs5MDBdfTtcclxuICAgICAgfVxyXG4gICAgICAuZm9udC1zaXplLWNvbnRhaW5lcntcclxuICAgICAgICB3aWR0aDogJHtwb2xpc2hlZC5yZW0oODIpfTtcclxuICAgICAgfVxyXG4gICAgICAuYWR2YW5jZS1zdHlsZS1zZXR0aW5ne1xyXG4gICAgICAgIHBhZGRpbmc6IDAgJHtwb2xpc2hlZC5yZW0oNCl9O1xyXG4gICAgICB9XHJcbiAgICAgIC5weC0xNHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6ICR7cG9saXNoZWQucmVtKDE0KX0gIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAke3BvbGlzaGVkLnJlbSgxNCl9ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC50YWItbGFiZWx7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgYFxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9mb3JfYnVpbGRlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfZGF0YV9zb3VyY2Vfc2VsZWN0b3JfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9leHByZXNzaW9uX2J1aWxkZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9yZXNvdXJjZV9zZWxlY3Rvcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3NldHRpbmdfY29tcG9uZW50c19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3N0eWxlX3NldHRpbmdfY29tcG9uZW50c19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2Jhc2ljX2NvbG9yX3BpY2tlcl9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQge1xyXG4gIFJlYWN0LCBqc3gsIEltbXV0YWJsZSwgdHlwZSBJbW11dGFibGVBcnJheSwgRXhwcmVzc2lvblBhcnRUeXBlLCB0eXBlIElNSWNvblJlc3VsdCxcclxuICB0eXBlIElNRXhwcmVzc2lvbiwgdHlwZSBVc2VEYXRhU291cmNlLCBleHByZXNzaW9uVXRpbHMsIGRlZmF1bHRNZXNzYWdlcyBhcyBqaW11Q29yZU1lc3NhZ2VzLFxyXG4gIExpbmtUeXBlLCB0eXBlIEV4cHJlc3Npb24sIEFsbERhdGFTb3VyY2VUeXBlcywgdHlwZSBJY29uUmVzdWx0LCB0eXBlIElNTGlua1BhcmFtXHJcbn0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIEFsbFdpZGdldFNldHRpbmdQcm9wcywgYnVpbGRlckFwcFN5bmMgfSBmcm9tICdqaW11LWZvci1idWlsZGVyJ1xyXG5pbXBvcnQgeyBTZXR0aW5nU2VjdGlvbiwgU2V0dGluZ1JvdywgTGlua1NlbGVjdG9yIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IEljb25QaWNrZXIgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3Jlc291cmNlLXNlbGVjdG9yJ1xyXG5pbXBvcnQgeyBUZXh0SW5wdXQsIFNlbGVjdCwgVGFicywgVGFiLCBkZWZhdWx0TWVzc2FnZXMgYXMgamltdVVJTWVzc2FnZXMsIGRlZmF1bHRNZXNzYWdlcyBhcyBqaW11VWlEZWZhdWx0TWVzc2FnZXMgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgeyBEYXRhU291cmNlU2VsZWN0b3IgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yJ1xyXG5cclxuaW1wb3J0IHsgRXhwcmVzc2lvbklucHV0LCBFeHByZXNzaW9uSW5wdXRUeXBlIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9leHByZXNzaW9uLWJ1aWxkZXInXHJcblxyXG5pbXBvcnQgeyB0eXBlIElNQ29uZmlnLCBJY29uUG9zaXRpb24sIHR5cGUgSU1BZHZhbmNlU3R5bGVTZXR0aW5ncyB9IGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IHsgZ2V0U3R5bGUgfSBmcm9tICcuL3N0eWxlJ1xyXG5pbXBvcnQgQWR2YW5jZVN0eWxlU2V0dGluZyBmcm9tICcuL2NvbXBvbmVudHMvYWR2YW5jZS1zdHlsZS1zZXR0aW5nJ1xyXG5pbXBvcnQgQWR2YW5jZUNvbGxhcHNlIGZyb20gJy4vY29tcG9uZW50cy9hZHZhbmNlLWNvbGxhcHNlJ1xyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICBpc1RleHRFeHBPcGVuOiBib29sZWFuXHJcbiAgaXNUaXBFeHBPcGVuOiBib29sZWFuXHJcbiAgY3VycmVudFRleHRJbnB1dDogc3RyaW5nXHJcbiAgY3VycmVudFRpcElucHV0OiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgZXhwcmVzc2lvbklucHV0VHlwZXMgPSBJbW11dGFibGUoW0V4cHJlc3Npb25JbnB1dFR5cGUuU3RhdGljLCBFeHByZXNzaW9uSW5wdXRUeXBlLkF0dHJpYnV0ZSwgRXhwcmVzc2lvbklucHV0VHlwZS5TdGF0aXN0aWNzLCBFeHByZXNzaW9uSW5wdXRUeXBlLkV4cHJlc3Npb25dKVxyXG5jb25zdCBzdXBwb3J0ZWREc1R5cGVzID0gSW1tdXRhYmxlKFtcclxuICBBbGxEYXRhU291cmNlVHlwZXMuRmVhdHVyZUxheWVyLFxyXG4gIEFsbERhdGFTb3VyY2VUeXBlcy5TY2VuZUxheWVyLFxyXG4gIEFsbERhdGFTb3VyY2VUeXBlcy5CdWlsZGluZ0NvbXBvbmVudFN1YkxheWVyLFxyXG4gIEFsbERhdGFTb3VyY2VUeXBlcy5PcmllbnRlZEltYWdlcnlMYXllcixcclxuICBBbGxEYXRhU291cmNlVHlwZXMuSW1hZ2VyeUxheWVyLFxyXG4gIEFsbERhdGFTb3VyY2VUeXBlcy5TdWJ0eXBlR3JvdXBMYXllcixcclxuICBBbGxEYXRhU291cmNlVHlwZXMuU3VidHlwZVN1YmxheWVyXHJcbl0pXHJcblxyXG5jb25zdCBlbnVtIFNldHRpbmdUYWJzIHtcclxuICBob3ZlciA9ICdIT1ZFUicsXHJcbiAgcmVndWxhciA9ICdSRUdVTEFSJ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxBbGxXaWRnZXRTZXR0aW5nUHJvcHM8SU1Db25maWc+LCBTdGF0ZT4ge1xyXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaXNUZXh0RXhwT3BlbjogZmFsc2UsXHJcbiAgICAgIGlzVGlwRXhwT3BlbjogZmFsc2UsXHJcbiAgICAgIGN1cnJlbnRUZXh0SW5wdXQ6IHR5cGVvZiB0aGlzLnByb3BzLmNvbmZpZz8uZnVuY3Rpb25Db25maWc/LnRleHQgPT09ICdzdHJpbmcnXHJcbiAgICAgICAgPyB0aGlzLnByb3BzLmNvbmZpZz8uZnVuY3Rpb25Db25maWc/LnRleHRcclxuICAgICAgICA6IHRoaXMuZ2V0RGVmYXVsdFRleHQoKSxcclxuICAgICAgY3VycmVudFRpcElucHV0OiAodGhpcy5wcm9wcy5jb25maWcgJiYgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcgJiYgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcudG9vbFRpcCkgfHwgJydcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAocHJldlByb3BzOiBBbGxXaWRnZXRTZXR0aW5nUHJvcHM8SU1Db25maWc+KSB7XHJcbiAgICBpZiAoIXRoaXMuZ2V0SXNEYXRhU291cmNlVXNlZCgpKSB7XHJcbiAgICAgIGlmICh0aGlzLnByb3BzLmNvbmZpZz8uZnVuY3Rpb25Db25maWc/LnRleHQgIT09IHByZXZQcm9wcy5jb25maWc/LmZ1bmN0aW9uQ29uZmlnPy50ZXh0KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBjdXJyZW50VGV4dElucHV0OiB0eXBlb2YgdGhpcy5wcm9wcy5jb25maWc/LmZ1bmN0aW9uQ29uZmlnPy50ZXh0ID09PSAnc3RyaW5nJ1xyXG4gICAgICAgICAgICA/IHRoaXMucHJvcHMuY29uZmlnPy5mdW5jdGlvbkNvbmZpZz8udGV4dFxyXG4gICAgICAgICAgICA6IHRoaXMuZ2V0RGVmYXVsdFRleHQoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMucHJvcHMuY29uZmlnPy5mdW5jdGlvbkNvbmZpZz8udG9vbFRpcCAhPT0gcHJldlByb3BzLmNvbmZpZz8uZnVuY3Rpb25Db25maWc/LnRvb2xUaXApIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGN1cnJlbnRUaXBJbnB1dDogKHRoaXMucHJvcHMuY29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLnRvb2xUaXApIHx8ICcnXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xyXG4gICAgYnVpbGRlckFwcFN5bmMucHVibGlzaENoYW5nZVdpZGdldFN0YXRlUHJvcFRvQXBwKHsgd2lkZ2V0SWQ6IHRoaXMucHJvcHMuaWQsIHByb3BLZXk6ICdpc0NvbmZpZ3VyaW5nSG92ZXInLCB2YWx1ZTogZmFsc2UgfSlcclxuICB9XHJcblxyXG4gIGdldERlZmF1bHRUZXh0ICgpIHtcclxuICAgIGNvbnN0IHsgY29uZmlnLCBpbnRsIH0gPSB0aGlzLnByb3BzXHJcbiAgICBjb25zdCBpc0RlZmF1bHQgPSBjb25maWcuZnVuY3Rpb25Db25maWcudGV4dCA9PT0gdW5kZWZpbmVkICYmIGNvbmZpZy5mdW5jdGlvbkNvbmZpZy50ZXh0RXhwcmVzc2lvbiA9PT0gdW5kZWZpbmVkXHJcbiAgICByZXR1cm4gaXNEZWZhdWx0ID8gaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICd2YXJpYWJsZUJ1dHRvbicsIGRlZmF1bHRNZXNzYWdlOiBqaW11VWlEZWZhdWx0TWVzc2FnZXMudmFyaWFibGVCdXR0b24gfSkgOiAnJ1xyXG4gIH1cclxuXHJcbiAgb25TZXR0aW5nTGlua0NvbmZpcm0gPSAobGlua1Jlc3VsdDogSU1MaW5rUGFyYW0pID0+IHtcclxuICAgIGxldCBjb25maWdcclxuICAgIGlmICghbGlua1Jlc3VsdCkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmICghbGlua1Jlc3VsdC5leHByZXNzaW9uKSB7XHJcbiAgICAgIGxldCBtZXJnZWRVc2VEYXRhU291cmNlc1xyXG4gICAgICBpZiAodGhpcy5nZXRJc0RhdGFTb3VyY2VVc2VkKCkpIHtcclxuICAgICAgICBjb25zdCB0ZXh0RXhwcmVzc2lvbiA9IHRoaXMuZ2V0VGV4dEV4cHJlc3Npb24oKVxyXG4gICAgICAgIGNvbnN0IHRvb2x0aXBFeHByZXNzaW9uID0gdGhpcy5nZXRUaXBFeHByZXNzaW9uKClcclxuICAgICAgICBtZXJnZWRVc2VEYXRhU291cmNlcyA9IHRoaXMubWVyZ2VVc2VEYXRhU291cmNlcyh0ZXh0RXhwcmVzc2lvbiwgdG9vbHRpcEV4cHJlc3Npb24sIG51bGwsIHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXMpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVyZ2VkVXNlRGF0YVNvdXJjZXMgPSBleHByZXNzaW9uVXRpbHMuZ2V0VXNlRGF0YVNvdXJjZXNXaXRob3V0RmllbGRzKHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXMpXHJcbiAgICAgIH1cclxuICAgICAgY29uZmlnID0ge1xyXG4gICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0SW4oWydmdW5jdGlvbkNvbmZpZycsICdsaW5rUGFyYW0nXSwgbGlua1Jlc3VsdCksXHJcbiAgICAgICAgdXNlRGF0YVNvdXJjZXM6IG1lcmdlZFVzZURhdGFTb3VyY2VzXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHRleHRFeHByZXNzaW9uID0gdGhpcy5nZXRUZXh0RXhwcmVzc2lvbigpXHJcbiAgICAgIGNvbnN0IHRvb2x0aXBFeHByZXNzaW9uID0gdGhpcy5nZXRUaXBFeHByZXNzaW9uKClcclxuICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IGxpbmtSZXN1bHQuZXhwcmVzc2lvblxyXG4gICAgICBjb25zdCBtZXJnZWRVc2VEYXRhU291cmNlcyA9IHRoaXMubWVyZ2VVc2VEYXRhU291cmNlcyh0ZXh0RXhwcmVzc2lvbiwgdG9vbHRpcEV4cHJlc3Npb24sIGV4cHJlc3Npb24sIHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXMpXHJcblxyXG4gICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXRJbihbJ2Z1bmN0aW9uQ29uZmlnJywgJ2xpbmtQYXJhbSddLCBsaW5rUmVzdWx0KSxcclxuICAgICAgICB1c2VEYXRhU291cmNlczogbWVyZ2VkVXNlRGF0YVNvdXJjZXNcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKGNvbmZpZylcclxuICB9XHJcblxyXG4gIG9uVGV4dENoYW5nZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0SW4oWydmdW5jdGlvbkNvbmZpZycsICd0ZXh0J10sIHRoaXMuc3RhdGUuY3VycmVudFRleHRJbnB1dClcclxuICAgICAgICAuc2V0SW4oWydmdW5jdGlvbkNvbmZpZycsICd0ZXh0RXhwcmVzc2lvbiddLCBudWxsKSxcclxuICAgICAgdXNlRGF0YVNvdXJjZXM6IGV4cHJlc3Npb25VdGlscy5nZXRVc2VEYXRhU291cmNlc1dpdGhvdXRGaWVsZHModGhpcy5wcm9wcy51c2VEYXRhU291cmNlcykgYXMgYW55XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2UoY29uZmlnKVxyXG4gIH1cclxuXHJcbiAgb25Ub29sVGlwQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXRJbihbJ2Z1bmN0aW9uQ29uZmlnJywgJ3Rvb2xUaXAnXSwgdGhpcy5zdGF0ZS5jdXJyZW50VGlwSW5wdXQpXHJcbiAgICAgICAgLnNldEluKFsnZnVuY3Rpb25Db25maWcnLCAndG9vbFRpcEV4cHJlc3Npb24nXSwgbnVsbCksXHJcbiAgICAgIHVzZURhdGFTb3VyY2VzOiBleHByZXNzaW9uVXRpbHMuZ2V0VXNlRGF0YVNvdXJjZXNXaXRob3V0RmllbGRzKHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXMpIGFzIGFueVxyXG4gICAgfVxyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2UoY29uZmlnKVxyXG4gIH1cclxuXHJcbiAgb25UZXh0RXhwQ2hhbmdlID0gKGV4cHJlc3Npb246IEV4cHJlc3Npb24pID0+IHtcclxuICAgIGlmICghZXhwcmVzc2lvbikge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnN0IHRvb2x0aXBFeHByZXNzaW9uID0gdGhpcy5nZXRUaXBFeHByZXNzaW9uKClcclxuICAgIGNvbnN0IGxpbmtTZXR0aW5nRXhwcmVzc2lvbiA9IHRoaXMuZ2V0TGlua1NldHRpbmdFeHByZXNzaW9uKClcclxuICAgIGNvbnN0IG1lcmdlZFVzZURhdGFTb3VyY2VzID0gdGhpcy5tZXJnZVVzZURhdGFTb3VyY2VzKEltbXV0YWJsZShleHByZXNzaW9uKSwgdG9vbHRpcEV4cHJlc3Npb24sIGxpbmtTZXR0aW5nRXhwcmVzc2lvbiwgdGhpcy5wcm9wcy51c2VEYXRhU291cmNlcylcclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0SW4oWydmdW5jdGlvbkNvbmZpZycsICd0ZXh0RXhwcmVzc2lvbiddLCBleHByZXNzaW9uKS5zZXRJbihbJ2Z1bmN0aW9uQ29uZmlnJywgJ3RleHQnXSwgJycpLFxyXG4gICAgICB1c2VEYXRhU291cmNlczogbWVyZ2VkVXNlRGF0YVNvdXJjZXMgYXMgYW55XHJcbiAgICB9KVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzVGV4dEV4cE9wZW46IGZhbHNlIH0pXHJcbiAgfVxyXG5cclxuICBvblRpcEV4cENoYW5nZSA9IChleHByZXNzaW9uOiBFeHByZXNzaW9uKSA9PiB7XHJcbiAgICBpZiAoIWV4cHJlc3Npb24pIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBjb25zdCB0ZXh0RXhwcmVzc2lvbiA9IHRoaXMuZ2V0VGV4dEV4cHJlc3Npb24oKVxyXG4gICAgY29uc3QgbGlua1NldHRpbmdFeHByZXNzaW9uID0gdGhpcy5nZXRMaW5rU2V0dGluZ0V4cHJlc3Npb24oKVxyXG4gICAgY29uc3QgbWVyZ2VkVXNlRGF0YVNvdXJjZXMgPSB0aGlzLm1lcmdlVXNlRGF0YVNvdXJjZXModGV4dEV4cHJlc3Npb24sIEltbXV0YWJsZShleHByZXNzaW9uKSwgbGlua1NldHRpbmdFeHByZXNzaW9uLCB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzKVxyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXRJbihbJ2Z1bmN0aW9uQ29uZmlnJywgJ3Rvb2xUaXBFeHByZXNzaW9uJ10sIGV4cHJlc3Npb24pLnNldEluKFsnZnVuY3Rpb25Db25maWcnLCAndG9vbFRpcCddLCAnJyksXHJcbiAgICAgIHVzZURhdGFTb3VyY2VzOiBtZXJnZWRVc2VEYXRhU291cmNlcyBhcyBhbnlcclxuICAgIH0pXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNUaXBFeHBPcGVuOiBmYWxzZSB9KVxyXG4gIH1cclxuXHJcbiAgb25Ub2dnbGVVc2VEYXRhRW5hYmxlZCA9ICh1c2VEYXRhU291cmNlc0VuYWJsZWQ6IGJvb2xlYW4pID0+IHtcclxuICAgIGxldCBjb25maWcgPSB0aGlzLnByb3BzLmNvbmZpZ1xyXG4gICAgaWYgKHVzZURhdGFTb3VyY2VzRW5hYmxlZCkge1xyXG4gICAgICBjb25maWcgPSBjb25maWcuc2V0SW4oWydmdW5jdGlvbkNvbmZpZycsICd0ZXh0RXhwcmVzc2lvbiddLCB0aGlzLmdldFRleHRFeHByZXNzaW9uKCkpXHJcbiAgICAgICAgLnNldEluKFsnZnVuY3Rpb25Db25maWcnLCAndG9vbFRpcEV4cHJlc3Npb24nXSwgdGhpcy5nZXRUaXBFeHByZXNzaW9uKCkpXHJcbiAgICAgIGNvbmZpZyA9IGNvbmZpZy5zZXQoJ2Z1bmN0aW9uQ29uZmlnJywgY29uZmlnLmZ1bmN0aW9uQ29uZmlnLndpdGhvdXQoJ3RleHQnKS53aXRob3V0KCd0b29sVGlwJykpXHJcblxyXG4gICAgICBpZiAodGhpcy5wcm9wcy5jb25maWc/LmZ1bmN0aW9uQ29uZmlnPy5saW5rUGFyYW0/LmxpbmtUeXBlID09PSBMaW5rVHlwZS5XZWJBZGRyZXNzKSB7XHJcbiAgICAgICAgY29uZmlnID0gY29uZmlnLnNldEluKFsnZnVuY3Rpb25Db25maWcnLCAnbGlua1BhcmFtJywgJ2V4cHJlc3Npb24nXSwgdGhpcy5nZXRMaW5rU2V0dGluZ0V4cHJlc3Npb24oKSlcclxuICAgICAgICBjb25maWcgPSBjb25maWcuc2V0SW4oWydmdW5jdGlvbkNvbmZpZycsICdsaW5rUGFyYW0nXSwgY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmxpbmtQYXJhbS53aXRob3V0KCd2YWx1ZScpKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25maWcgPSBjb25maWcuc2V0SW4oWydmdW5jdGlvbkNvbmZpZycsICd0ZXh0J10sIHRoaXMuc3RhdGUuY3VycmVudFRleHRJbnB1dClcclxuICAgICAgICAuc2V0SW4oWydmdW5jdGlvbkNvbmZpZycsICd0b29sVGlwJ10sIHRoaXMuc3RhdGUuY3VycmVudFRpcElucHV0KVxyXG4gICAgICBjb25maWcgPSBjb25maWcuc2V0KCdmdW5jdGlvbkNvbmZpZycsIGNvbmZpZy5mdW5jdGlvbkNvbmZpZy53aXRob3V0KCd0ZXh0RXhwcmVzc2lvbicpLndpdGhvdXQoJ3Rvb2xUaXBFeHByZXNzaW9uJykpXHJcblxyXG4gICAgICBpZiAodGhpcy5wcm9wcy5jb25maWc/LmZ1bmN0aW9uQ29uZmlnPy5saW5rUGFyYW0/LmxpbmtUeXBlID09PSBMaW5rVHlwZS5XZWJBZGRyZXNzKSB7XHJcbiAgICAgICAgY29uZmlnID0gY29uZmlnLnNldEluKFsnZnVuY3Rpb25Db25maWcnLCAnbGlua1BhcmFtJywgJ3ZhbHVlJ10sICcnKVxyXG4gICAgICAgIGNvbmZpZyA9IGNvbmZpZy5zZXRJbihbJ2Z1bmN0aW9uQ29uZmlnJywgJ2xpbmtQYXJhbSddLCBjb25maWcuZnVuY3Rpb25Db25maWcubGlua1BhcmFtLndpdGhvdXQoJ2V4cHJlc3Npb24nKSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgdXNlRGF0YVNvdXJjZXNFbmFibGVkLFxyXG4gICAgICBjb25maWdcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvbkRhdGFTb3VyY2VDaGFuZ2UgPSAodXNlRGF0YVNvdXJjZXM6IFVzZURhdGFTb3VyY2VbXSkgPT4ge1xyXG4gICAgaWYgKCF1c2VEYXRhU291cmNlcykge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICAvKipcclxuICAgICAgICogS2VlcCB0aGUgZmllbGRzIG9mIHRoZSBjdXJyZW50IHVzZSBkYXRhIHNvdXJjZXMuXHJcbiAgICAgICAqIFRoZSBkYXRhIHNvdXJjZSBzZWxlY3RvciB3aWxsIHJldHVybiB0aGUgZmllbGRzIG9mIHRoZSBwcmV2aW91cyB1c2UgZGF0YSBzb3VyY2Ugd2hlbiBjaGFuZ2luZyB0byBhIGRhdGEgdmlldyB3aGljaCBoYXMgdGhlIHNhbWUgbWFpbiBkYXRhIHNvdXJjZSBhcyB0aGUgcHJldmlvdXMgdXNlIGRhdGEgc291cmNlLlxyXG4gICAgICAgKi9cclxuICAgICAgdXNlRGF0YVNvdXJjZXM6IHRoaXMubWVyZ2VVc2VEYXRhU291cmNlcyh0aGlzLmdldFRleHRFeHByZXNzaW9uKCksIHRoaXMuZ2V0VGlwRXhwcmVzc2lvbigpLCB0aGlzLmdldExpbmtTZXR0aW5nRXhwcmVzc2lvbigpLCBJbW11dGFibGUodXNlRGF0YVNvdXJjZXMpLCBmYWxzZSkgYXMgdW5rbm93biBhcyBVc2VEYXRhU291cmNlW11cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvbkljb25SZXN1bHRDaGFuZ2UgPSAocmVzdWx0OiBJTUljb25SZXN1bHQpID0+IHtcclxuICAgIGxldCBjb25maWdcclxuICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgY29uZmlnID0gdGhpcy5wcm9wcy5jb25maWdcclxuICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnByb3BzLmNvbmZpZy5nZXRJbihbJ2Z1bmN0aW9uQ29uZmlnJywgJ2ljb24nLCAncG9zaXRpb24nXSkgfHwgSWNvblBvc2l0aW9uLkxlZnRcclxuICAgICAgY29uZmlnID0gY29uZmlnLnNldEluKFsnZnVuY3Rpb25Db25maWcnLCAnaWNvbicsICdkYXRhJ10sIHJlc3VsdClcclxuICAgICAgICAuc2V0SW4oWydmdW5jdGlvbkNvbmZpZycsICdpY29uJywgJ3Bvc2l0aW9uJ10sIHBvc2l0aW9uKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uZmlnID0gdGhpcy5wcm9wcy5jb25maWcuc2V0KCdmdW5jdGlvbkNvbmZpZycsIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLndpdGhvdXQoJ2ljb24nKSlcclxuICAgICAgICAuc2V0SW4oWydzdHlsZUNvbmZpZycsICdjdXN0b21TdHlsZScsICdyZWd1bGFyJ10sIHRoaXMucHJvcHMuY29uZmlnLmdldEluKFsnc3R5bGVDb25maWcnLCAnY3VzdG9tU3R5bGUnLCAncmVndWxhciddLCBJbW11dGFibGUoe30pIGFzIElNQWR2YW5jZVN0eWxlU2V0dGluZ3MpLndpdGhvdXQoJ2ljb25Qcm9wcycpKVxyXG4gICAgICAgIC5zZXRJbihbJ3N0eWxlQ29uZmlnJywgJ2N1c3RvbVN0eWxlJywgJ2hvdmVyJ10sIHRoaXMucHJvcHMuY29uZmlnLmdldEluKFsnc3R5bGVDb25maWcnLCAnY3VzdG9tU3R5bGUnLCAnaG92ZXInXSwgSW1tdXRhYmxlKHt9KSBhcyBJTUFkdmFuY2VTdHlsZVNldHRpbmdzKS53aXRob3V0KCdpY29uUHJvcHMnKSlcclxuICAgIH1cclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgIGNvbmZpZ1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldFdoZXRoZXJIYXZlQ3VzdG9tU3R5bGUgPSAoaXNSZWd1bGFyOiBib29sZWFuKTogYm9vbGVhbiA9PiB7XHJcbiAgICBjb25zdCBzdGF0dXMgPSBpc1JlZ3VsYXIgPyAncmVndWxhcicgOiAnaG92ZXInXHJcbiAgICBsZXQgc3R5bGUgPSB0aGlzLnByb3BzLmNvbmZpZy5nZXRJbihbJ3N0eWxlQ29uZmlnJywgJ2N1c3RvbVN0eWxlJywgc3RhdHVzXSlcclxuICAgIGlmIChzdHlsZSAmJiBzdHlsZS5pY29uUHJvcHMpIHsgLy8gaWNvblByb3BzIGlzIG5vdCBjdXN0b20gc3R5bGUsIHVzZXIgY2FuIHNlbGVjdCBpY29uIGJlZm9yZSBvcGVuaW5nIGFkdmFuY2VkIHN0eWxlXHJcbiAgICAgIHN0eWxlID0gc3R5bGUud2l0aG91dCgnaWNvblByb3BzJylcclxuICAgIH1cclxuICAgIHJldHVybiAhIShzdHlsZSAmJiBPYmplY3Qua2V5cyhzdHlsZSkubGVuZ3RoID4gMClcclxuICB9XHJcblxyXG4gIG9uUmVndWxhclN0eWxlQ2hhbmdlID0gKHN0eWxlOiBJTUFkdmFuY2VTdHlsZVNldHRpbmdzKSA9PiB7XHJcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLnByb3BzLmNvbmZpZy5zZXRJbihbJ3N0eWxlQ29uZmlnJywgJ2N1c3RvbVN0eWxlJywgJ3JlZ3VsYXInXSwgc3R5bGUpXHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICBjb25maWdcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvbkhvdmVyU3R5bGVDaGFuZ2UgPSAoc3R5bGU6IElNQWR2YW5jZVN0eWxlU2V0dGluZ3MpID0+IHtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMucHJvcHMuY29uZmlnLnNldEluKFsnc3R5bGVDb25maWcnLCAnY3VzdG9tU3R5bGUnLCAnaG92ZXInXSwgc3R5bGUpXHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICBjb25maWdcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvbkljb25Qb3NpdGlvbkNoYW5nZSA9IGUgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXRJbihbJ2Z1bmN0aW9uQ29uZmlnJywgJ2ljb24nLCAncG9zaXRpb24nXSwgZS50YXJnZXQudmFsdWUpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25BZHZhbmNlVGFiU2VsZWN0ID0gaWQgPT4ge1xyXG4gICAgY29uc3QgaXNDb25maWd1cmluZ0hvdmVyID0gaWQgPT09IFNldHRpbmdUYWJzLmhvdmVyXHJcblxyXG4gICAgYnVpbGRlckFwcFN5bmMucHVibGlzaENoYW5nZVdpZGdldFN0YXRlUHJvcFRvQXBwKHsgd2lkZ2V0SWQ6IHRoaXMucHJvcHMuaWQsIHByb3BLZXk6ICdpc0NvbmZpZ3VyaW5nSG92ZXInLCB2YWx1ZTogaXNDb25maWd1cmluZ0hvdmVyIH0pXHJcbiAgfVxyXG5cclxuICBtZXJnZVVzZURhdGFTb3VyY2VzID0gKHRleHRFeHByZXNzaW9uOiBJTUV4cHJlc3Npb24sIHRpcEV4cHJlc3Npb246IElNRXhwcmVzc2lvbiwgbGlua1NldHRpbmdFeHByZXNzaW9uOiBJTUV4cHJlc3Npb24sIHVzZURhdGFTb3VyY2VzOiBJbW11dGFibGVBcnJheTxVc2VEYXRhU291cmNlPiwgY2xlYXJGaWVsZHNJbkN1cnJlbnRVc2VEc3M6IGJvb2xlYW4gPSB0cnVlKTogSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT4gPT4ge1xyXG4gICAgY29uc3QgdGV4dERzcyA9IGV4cHJlc3Npb25VdGlscy5nZW5lcmF0ZUZpZWxkc0ZvclVzZURhdGFTb3VyY2VzQnlFeHByZXNzaW9uUGFydHModGV4dEV4cHJlc3Npb24gJiYgdGV4dEV4cHJlc3Npb24ucGFydHMsIHVzZURhdGFTb3VyY2VzKVxyXG4gICAgY29uc3QgdGlwRHNzID0gZXhwcmVzc2lvblV0aWxzLmdlbmVyYXRlRmllbGRzRm9yVXNlRGF0YVNvdXJjZXNCeUV4cHJlc3Npb25QYXJ0cyh0aXBFeHByZXNzaW9uICYmIHRpcEV4cHJlc3Npb24ucGFydHMsIHVzZURhdGFTb3VyY2VzKVxyXG4gICAgY29uc3QgbGlua1NldHRpbmdEc3MgPSBleHByZXNzaW9uVXRpbHMuZ2VuZXJhdGVGaWVsZHNGb3JVc2VEYXRhU291cmNlc0J5RXhwcmVzc2lvblBhcnRzKGxpbmtTZXR0aW5nRXhwcmVzc2lvbiAmJiBsaW5rU2V0dGluZ0V4cHJlc3Npb24ucGFydHMsIHVzZURhdGFTb3VyY2VzKVxyXG4gICAgcmV0dXJuIHRoaXMubWVyZ2VVc2VEYXRhU291cmNlc0J5RHNzKHRleHREc3MsIHRpcERzcywgbGlua1NldHRpbmdEc3MsIHVzZURhdGFTb3VyY2VzLCBjbGVhckZpZWxkc0luQ3VycmVudFVzZURzcylcclxuICB9XHJcblxyXG4gIG1lcmdlVXNlRGF0YVNvdXJjZXNCeURzcyA9ICh0ZXh0VXNlRHNzOiBJbW11dGFibGVBcnJheTxVc2VEYXRhU291cmNlPiwgdGlwVXNlRHNzOiBJbW11dGFibGVBcnJheTxVc2VEYXRhU291cmNlPiwgbGlua1NldHRpbmdVc2VEc3M6IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+LCB1c2VEYXRhU291cmNlczogSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT4sIGNsZWFyRmllbGRzSW5DdXJyZW50VXNlRHNzOiBib29sZWFuID0gdHJ1ZSk6IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+ID0+IHtcclxuICAgIGNvbnN0IHVzZURhdGFTb3VyY2VzV2l0aG91dEZpZWxkcyA9IGNsZWFyRmllbGRzSW5DdXJyZW50VXNlRHNzID8gZXhwcmVzc2lvblV0aWxzLmdldFVzZURhdGFTb3VyY2VzV2l0aG91dEZpZWxkcyh1c2VEYXRhU291cmNlcykgOiB1c2VEYXRhU291cmNlc1xyXG4gICAgbGV0IG1lcmdlZFVzZURzcyA9IGV4cHJlc3Npb25VdGlscy5tZXJnZVVzZURhdGFTb3VyY2VzKHVzZURhdGFTb3VyY2VzV2l0aG91dEZpZWxkcywgdGV4dFVzZURzcylcclxuICAgIG1lcmdlZFVzZURzcyA9IGV4cHJlc3Npb25VdGlscy5tZXJnZVVzZURhdGFTb3VyY2VzKG1lcmdlZFVzZURzcywgdGlwVXNlRHNzKVxyXG4gICAgbWVyZ2VkVXNlRHNzID0gZXhwcmVzc2lvblV0aWxzLm1lcmdlVXNlRGF0YVNvdXJjZXMobWVyZ2VkVXNlRHNzLCBsaW5rU2V0dGluZ1VzZURzcylcclxuICAgIHJldHVybiBtZXJnZWRVc2VEc3NcclxuICB9XHJcblxyXG4gIGdldElzRGF0YVNvdXJjZVVzZWQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gISF0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzRW5hYmxlZFxyXG4gIH1cclxuXHJcbiAgZ2V0RGVmYXVsdEV4cHJlc3Npb24gPSAodGV4dDogc3RyaW5nKTogSU1FeHByZXNzaW9uID0+IHtcclxuICAgIGxldCBwYXJ0cyA9IFtdXHJcbiAgICBpZiAodGV4dCkge1xyXG4gICAgICBwYXJ0cyA9IFt7IHR5cGU6IEV4cHJlc3Npb25QYXJ0VHlwZS5TdHJpbmcsIGV4cDogYFwiJHt0ZXh0fVwiYCB9XVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIEltbXV0YWJsZSh7IG5hbWU6ICcnLCBwYXJ0cyB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0VGlwRXhwcmVzc2lvbiA9ICgpOiBJTUV4cHJlc3Npb24gPT4ge1xyXG4gICAgY29uc3QgZXhwcmVzc2lvbiA9IHRoaXMucHJvcHMuY29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLnRvb2xUaXBFeHByZXNzaW9uICYmXHJcbiAgICAgIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLnRvb2xUaXBFeHByZXNzaW9uXHJcbiAgICByZXR1cm4gZXhwcmVzc2lvbiB8fCB0aGlzLmdldERlZmF1bHRFeHByZXNzaW9uKHRoaXMuc3RhdGUuY3VycmVudFRpcElucHV0KVxyXG4gIH1cclxuXHJcbiAgZ2V0VGV4dEV4cHJlc3Npb24gPSAoKTogSU1FeHByZXNzaW9uID0+IHtcclxuICAgIGNvbnN0IGV4cHJlc3Npb24gPSB0aGlzLnByb3BzLmNvbmZpZyAmJiB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZyAmJiB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy50ZXh0RXhwcmVzc2lvbiAmJlxyXG4gICAgICB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy50ZXh0RXhwcmVzc2lvblxyXG4gICAgcmV0dXJuIGV4cHJlc3Npb24gfHwgdGhpcy5nZXREZWZhdWx0RXhwcmVzc2lvbih0aGlzLnN0YXRlLmN1cnJlbnRUZXh0SW5wdXQpXHJcbiAgfVxyXG5cclxuICBnZXRMaW5rU2V0dGluZ0V4cHJlc3Npb24gPSAoKTogSU1FeHByZXNzaW9uID0+IHtcclxuICAgIGNvbnN0IGV4cHJlc3Npb24gPSB0aGlzLnByb3BzLmNvbmZpZyAmJiB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZyAmJiB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5saW5rUGFyYW0gJiZcclxuICAgICAgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcubGlua1BhcmFtICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmxpbmtQYXJhbS5leHByZXNzaW9uXHJcblxyXG4gICAgcmV0dXJuIGV4cHJlc3Npb24gfHxcclxuICAgICAgKFxyXG4gICAgICAgIHRoaXMucHJvcHMuY29uZmlnPy5mdW5jdGlvbkNvbmZpZz8ubGlua1BhcmFtPy5saW5rVHlwZSA9PT0gTGlua1R5cGUuV2ViQWRkcmVzcyAmJiB0aGlzLnByb3BzLmNvbmZpZz8uZnVuY3Rpb25Db25maWc/LmxpbmtQYXJhbT8udmFsdWVcclxuICAgICAgICAgID8gdGhpcy5nZXREZWZhdWx0RXhwcmVzc2lvbih0aGlzLnByb3BzLmNvbmZpZz8uZnVuY3Rpb25Db25maWc/LmxpbmtQYXJhbT8udmFsdWUpXHJcbiAgICAgICAgICA6IG51bGxcclxuICAgICAgKVxyXG4gIH1cclxuXHJcbiAgb3BlblRleHRFeHBQb3B1cCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpc1RleHRFeHBPcGVuOiB0cnVlLFxyXG4gICAgICBpc1RpcEV4cE9wZW46IGZhbHNlXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb3BlblRpcEV4cFBvcHVwID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlzVGV4dEV4cE9wZW46IGZhbHNlLFxyXG4gICAgICBpc1RpcEV4cE9wZW46IHRydWVcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjbG9zZVRleHRFeHBQb3B1cCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpc1RleHRFeHBPcGVuOiBmYWxzZSxcclxuICAgICAgaXNUaXBFeHBPcGVuOiBmYWxzZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNsb3NlVGlwRXhwUG9wdXAgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaXNUZXh0RXhwT3BlbjogZmFsc2UsXHJcbiAgICAgIGlzVGlwRXhwT3BlbjogZmFsc2VcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzaG93VGV4dFNldHRpbmcgPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgICByZXR1cm4gISEoXHJcbiAgICAgICF0aGlzLmdldElzRGF0YVNvdXJjZVVzZWQoKVxyXG4gICAgICAgID8gISF0aGlzLnN0YXRlLmN1cnJlbnRUZXh0SW5wdXRcclxuICAgICAgICA6ICEhKFxyXG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5jb25maWcuZ2V0SW4oWydmdW5jdGlvbkNvbmZpZycsICd0ZXh0RXhwcmVzc2lvbiddKSB8fFxyXG4gICAgICAgICAgKFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpZy5nZXRJbihbJ2Z1bmN0aW9uQ29uZmlnJywgJ3RleHRFeHByZXNzaW9uJ10pICYmXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlnLmdldEluKFsnZnVuY3Rpb25Db25maWcnLCAndGV4dEV4cHJlc3Npb24nLCAncGFydHMnXSkgJiZcclxuICAgICAgICAgICAgKHRoaXMucHJvcHMuY29uZmlnLmdldEluKFsnZnVuY3Rpb25Db25maWcnLCAndGV4dEV4cHJlc3Npb24nLCAncGFydHMnXSkubGVuZ3RoID4gMSB8fCB0aGlzLnByb3BzLmNvbmZpZy5nZXRJbihbJ2Z1bmN0aW9uQ29uZmlnJywgJ3RleHRFeHByZXNzaW9uJywgJ3BhcnRzJywgJzAnLCAnZXhwJ10pICE9PSAnXCJcIicpXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICApXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBzaG93SWNvblNldHRpbmcgPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgICByZXR1cm4gISF0aGlzLnByb3BzLmNvbmZpZy5nZXRJbihbJ2Z1bmN0aW9uQ29uZmlnJywgJ2ljb24nXSlcclxuICB9XHJcblxyXG4gIHRvZ2dsZVVzZUN1c3RvbSA9ICgpID0+IHtcclxuICAgIGxldCBjb25maWcgPSB0aGlzLnByb3BzLmNvbmZpZ1xyXG4gICAgY29uZmlnID0gY29uZmlnLnNldEluKFsnc3R5bGVDb25maWcnLCAndXNlQ3VzdG9tJ10sICFjb25maWcuZ2V0SW4oWydzdHlsZUNvbmZpZycsICd1c2VDdXN0b20nXSkpXHJcbiAgICBpZiAoY29uZmlnLmdldEluKFsnc3R5bGVDb25maWcnLCAndXNlQ3VzdG9tJ10pKSB7XHJcbiAgICAgIGNvbmZpZyA9IGNvbmZpZy5zZXRJbihbJ3N0eWxlQ29uZmlnJywgJ2N1c3RvbVN0eWxlJywgJ2hvdmVyJ10sIHt9KVxyXG4gICAgICBjb25maWcgPSBjb25maWcuc2V0SW4oWydzdHlsZUNvbmZpZycsICdjdXN0b21TdHlsZScsICdyZWd1bGFyJ10sIHt9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uZmlnID0gY29uZmlnLnNldCgnc3R5bGVDb25maWcnLCBjb25maWcuc3R5bGVDb25maWcud2l0aG91dCgnY3VzdG9tU3R5bGUnKSlcclxuICAgIH1cclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgIGNvbmZpZ1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCBpY29uID0gdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuaWNvbj8uZGF0YSBhcyBJY29uUmVzdWx0IHx8IG51bGxcclxuICAgIGNvbnN0IGN1c3RvbUljb25zID0gdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWc/LmN1c3RvbUljb25zIGFzIHVua25vd24gYXMgSWNvblJlc3VsdFtdIHx8IG51bGxcclxuICAgIGNvbnN0IGN1c3RvbVN0eWxlID0gdGhpcy5wcm9wcy5jb25maWcuc3R5bGVDb25maWcgJiYgdGhpcy5wcm9wcy5jb25maWcuc3R5bGVDb25maWcuY3VzdG9tU3R5bGVcclxuICAgIGNvbnN0IGlzVGV4dFNldHRpbmdPcGVuID0gdGhpcy5zaG93VGV4dFNldHRpbmcoKVxyXG4gICAgY29uc3QgaXNJY29uU2V0dGluZ09wZW4gPSB0aGlzLnNob3dJY29uU2V0dGluZygpXHJcbiAgICBjb25zdCBpc1Bvc2l0aW9uT3BlbiA9IGlzVGV4dFNldHRpbmdPcGVuICYmIGlzSWNvblNldHRpbmdPcGVuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNzcz17Z2V0U3R5bGUodGhpcy5wcm9wcy50aGVtZSl9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXNldHRpbmctbGluayBqaW11LXdpZGdldFwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFNldHRpbmdTZWN0aW9uPlxyXG4gICAgICAgICAgICAgIDxTZXR0aW5nUm93PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaG9vc2UtZHMgdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgPERhdGFTb3VyY2VTZWxlY3RvciB0eXBlcz17c3VwcG9ydGVkRHNUeXBlc30gdXNlRGF0YVNvdXJjZXM9e3RoaXMucHJvcHMudXNlRGF0YVNvdXJjZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlRGF0YVNvdXJjZXNFbmFibGVkPXt0aGlzLmdldElzRGF0YVNvdXJjZVVzZWQoKX0gb25Ub2dnbGVVc2VEYXRhRW5hYmxlZD17dGhpcy5vblRvZ2dsZVVzZURhdGFFbmFibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRGF0YVNvdXJjZUNoYW5nZX0gd2lkZ2V0SWQ9e3RoaXMucHJvcHMuaWR9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICA8U2V0dGluZ1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPFNldHRpbmdSb3cgcm9sZT0nZ3JvdXAnIGFyaWEtbGFiZWw9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdzZXRMaW5rJywgZGVmYXVsdE1lc3NhZ2U6IGppbXVVSU1lc3NhZ2VzLnNldExpbmsgfSl9ID5cclxuICAgICAgICAgICAgICAgIDxMaW5rU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgb25TZXR0aW5nQ29uZmlybT17dGhpcy5vblNldHRpbmdMaW5rQ29uZmlybX1cclxuICAgICAgICAgICAgICAgICAgbGlua1BhcmFtPXt0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5saW5rUGFyYW19XHJcbiAgICAgICAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzPXt0aGlzLmdldElzRGF0YVNvdXJjZVVzZWQoKSAmJiB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzfVxyXG4gICAgICAgICAgICAgICAgICB3aWRnZXRJZD17dGhpcy5wcm9wcy5pZH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICAgICAgIDxTZXR0aW5nUm93IGxhYmVsPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAndG9vbHRpcCcsIGRlZmF1bHRNZXNzYWdlOiBqaW11VWlEZWZhdWx0TWVzc2FnZXMudG9vbHRpcCB9KX0gLz5cclxuICAgICAgICAgICAgICA8U2V0dGluZ1JvdyByb2xlPSdncm91cCcgYXJpYS1sYWJlbD17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ3Rvb2x0aXAnLCBkZWZhdWx0TWVzc2FnZTogamltdVVpRGVmYXVsdE1lc3NhZ2VzLnRvb2x0aXAgfSl9ID5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5nZXRJc0RhdGFTb3VyY2VVc2VkKClcclxuICAgICAgICAgICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPVwidy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxFeHByZXNzaW9uSW5wdXQgdXNlRGF0YVNvdXJjZXM9e3RoaXMucHJvcHMudXNlRGF0YVNvdXJjZXN9IG9uQ2hhbmdlPXt0aGlzLm9uVGlwRXhwQ2hhbmdlfSBvcGVuRXhwUG9wdXA9e3RoaXMub3BlblRpcEV4cFBvcHVwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uPXt0aGlzLmdldFRpcEV4cHJlc3Npb24oKX0gaXNFeHBQb3B1cE9wZW49e3RoaXMuc3RhdGUuaXNUaXBFeHBPcGVufSBjbG9zZUV4cFBvcHVwPXt0aGlzLmNsb3NlVGlwRXhwUG9wdXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVzPXtleHByZXNzaW9uSW5wdXRUeXBlc30gd2lkZ2V0SWQ9e3RoaXMucHJvcHMuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICd0b29sdGlwJywgZGVmYXVsdE1lc3NhZ2U6IGppbXVVaURlZmF1bHRNZXNzYWdlcy50b29sdGlwIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6IDxUZXh0SW5wdXQgY2xhc3NOYW1lPVwidy0xMDBcIiB2YWx1ZT17dGhpcy5zdGF0ZS5jdXJyZW50VGlwSW5wdXR9IHNpemU9J3NtJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4geyB0aGlzLnNldFN0YXRlKHsgY3VycmVudFRpcElucHV0OiBldmVudC50YXJnZXQudmFsdWUgfSkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4geyB0aGlzLm9uVG9vbFRpcENoYW5nZSgpIH19IG9uUHJlc3NFbnRlcj17KCkgPT4geyB0aGlzLm9uVG9vbFRpcENoYW5nZSgpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAndG9vbHRpcCcsIGRlZmF1bHRNZXNzYWdlOiBqaW11VWlEZWZhdWx0TWVzc2FnZXMudG9vbHRpcCB9KX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ3RleHQnLCBkZWZhdWx0TWVzc2FnZTogamltdVVpRGVmYXVsdE1lc3NhZ2VzLnRleHQgfSl9IC8+XHJcbiAgICAgICAgICAgICAgPFNldHRpbmdSb3cgcm9sZT0nZ3JvdXAnIGFyaWEtbGFiZWw9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICd0ZXh0JywgZGVmYXVsdE1lc3NhZ2U6IGppbXVVaURlZmF1bHRNZXNzYWdlcy50ZXh0IH0pfSA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0SXNEYXRhU291cmNlVXNlZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT1cInctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RXhwcmVzc2lvbklucHV0IHVzZURhdGFTb3VyY2VzPXt0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzfSBvbkNoYW5nZT17dGhpcy5vblRleHRFeHBDaGFuZ2V9IG9wZW5FeHBQb3B1cD17dGhpcy5vcGVuVGV4dEV4cFBvcHVwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uPXt0aGlzLmdldFRleHRFeHByZXNzaW9uKCl9IGlzRXhwUG9wdXBPcGVuPXt0aGlzLnN0YXRlLmlzVGV4dEV4cE9wZW59IGNsb3NlRXhwUG9wdXA9e3RoaXMuY2xvc2VUZXh0RXhwUG9wdXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVzPXtleHByZXNzaW9uSW5wdXRUeXBlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0SWQ9e3RoaXMucHJvcHMuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDogPFRleHRJbnB1dCBjbGFzc05hbWU9XCJ3LTEwMFwiIHZhbHVlPXt0aGlzLnN0YXRlLmN1cnJlbnRUZXh0SW5wdXR9IHNpemU9J3NtJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4geyB0aGlzLnNldFN0YXRlKHsgY3VycmVudFRleHRJbnB1dDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9eygpID0+IHsgdGhpcy5vblRleHRDaGFuZ2UoKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25QcmVzc0VudGVyPXsoKSA9PiB7IHRoaXMub25UZXh0Q2hhbmdlKCkgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ2ljb24nLCBkZWZhdWx0TWVzc2FnZTogamltdUNvcmVNZXNzYWdlcy5pY29uIH0pfT5cclxuICAgICAgICAgICAgICAgIDxJY29uUGlja2VyIGljb249e2ljb259IGN1c3RvbUljb25zPXtjdXN0b21JY29uc30gY29uZmlndXJhYmxlT3B0aW9uPXsnbm9uZSd9IG9uQ2hhbmdlPXt0aGlzLm9uSWNvblJlc3VsdENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ2ljb24nLCBkZWZhdWx0TWVzc2FnZTogamltdUNvcmVNZXNzYWdlcy5pY29uIH0pfSBzZXRCdXR0b25Vc2VDb2xvcj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpc1Bvc2l0aW9uT3BlbiAmJlxyXG4gICAgICAgICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdwb3NpdGlvbicsIGRlZmF1bHRNZXNzYWdlOiBqaW11VUlNZXNzYWdlcy5wb3NpdGlvbiB9KX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBvbkNoYW5nZT17dGhpcy5vbkljb25Qb3NpdGlvbkNoYW5nZX0gc2l6ZT0nc20nXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcgJiYgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuaWNvbiAmJiB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5pY29uLnBvc2l0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ3Bvc2l0aW9uJywgZGVmYXVsdE1lc3NhZ2U6IGppbXVVSU1lc3NhZ2VzLnBvc2l0aW9uIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoSWNvblBvc2l0aW9uKS5tYXAocCA9PiA8b3B0aW9uIHZhbHVlPXtJY29uUG9zaXRpb25bcF19IGtleT17cH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6IHAudG9Mb3dlckNhc2UoKSwgZGVmYXVsdE1lc3NhZ2U6IGppbXVVSU1lc3NhZ2VzW3AudG9Mb3dlckNhc2UoKV0gfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPilcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgPFNldHRpbmdTZWN0aW9uIGNsYXNzTmFtZT0ncHgtMTQnPlxyXG4gICAgICAgICAgICAgIDxBZHZhbmNlQ29sbGFwc2UgdGl0bGU9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdhZHZhbmNlJywgZGVmYXVsdE1lc3NhZ2U6IGppbXVVSU1lc3NhZ2VzLmFkdmFuY2UgfSl9XHJcbiAgICAgICAgICAgICAgICBpc09wZW49eyEhdGhpcy5wcm9wcy5jb25maWc/LnN0eWxlQ29uZmlnPy51c2VDdXN0b219IHRvZ2dsZT17dGhpcy50b2dnbGVVc2VDdXN0b219XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRhYnMgZmlsbCB0eXBlPSdwaWxscycgb25DaGFuZ2U9e3RoaXMub25BZHZhbmNlVGFiU2VsZWN0fSBkZWZhdWx0VmFsdWU9e1NldHRpbmdUYWJzLnJlZ3VsYXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8VGFiIGNsYXNzTmFtZT0ndGFiLWxhYmVsJyBpZD17U2V0dGluZ1RhYnMucmVndWxhcn0gdGl0bGU9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdkZWZhdWx0JywgZGVmYXVsdE1lc3NhZ2U6IGppbXVVSU1lc3NhZ2VzLmRlZmF1bHQgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBZHZhbmNlU3R5bGVTZXR0aW5nIGludGw9e3RoaXMucHJvcHMuaW50bH0gYXBwVGhlbWU9e3RoaXMucHJvcHMudGhlbWUyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2N1c3RvbVN0eWxlICYmIGN1c3RvbVN0eWxlLnJlZ3VsYXJ9IG9uQ2hhbmdlPXt0aGlzLm9uUmVndWxhclN0eWxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaXNUZXh0U2V0dGluZ09wZW49e2lzVGV4dFNldHRpbmdPcGVufSBpc0ljb25TZXR0aW5nT3Blbj17aXNJY29uU2V0dGluZ09wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWIgY2xhc3NOYW1lPSd0YWItbGFiZWwnIGlkPXtTZXR0aW5nVGFicy5ob3Zlcn0gdGl0bGU9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdob3ZlcicsIGRlZmF1bHRNZXNzYWdlOiBqaW11VUlNZXNzYWdlcy5ob3ZlciB9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFkdmFuY2VTdHlsZVNldHRpbmcgaW50bD17dGhpcy5wcm9wcy5pbnRsfSBhcHBUaGVtZT17dGhpcy5wcm9wcy50aGVtZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17Y3VzdG9tU3R5bGUgJiYgY3VzdG9tU3R5bGUuaG92ZXJ9IG9uQ2hhbmdlPXt0aGlzLm9uSG92ZXJTdHlsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlzVGV4dFNldHRpbmdPcGVuPXtpc1RleHRTZXR0aW5nT3Blbn0gaXNJY29uU2V0dGluZ09wZW49e2lzSWNvblNldHRpbmdPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgICAgIDwvQWR2YW5jZUNvbGxhcHNlPlxyXG4gICAgICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==