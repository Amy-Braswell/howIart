"use strict";
exports.id = 807;
exports.ids = [807];
exports.modules = {

/***/ 94228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Footer)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(60027);
;// CONCATENATED MODULE: ./src/components/footer/styles/footer.js

const Container = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "footer__Container",
  componentId: "sc-airye8-0"
})(["width:100%;"]);
const Outer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "footer__Outer",
  componentId: "sc-airye8-1"
})(["width:100%;background:black;padding:70px 20px 0 40px;@media (min-width:1000px){padding:70px 0;}"]);
const Inner = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "footer__Inner",
  componentId: "sc-airye8-2"
})(["display:flex;padding:0px 30px;margin:auto;max-width:1000px;flex-direction:column;position:relative;left:3%;@media (min-width:1000px){padding:70px 0;left:5%;}"]);
const Column = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "footer__Column",
  componentId: "sc-airye8-3"
})(["display:flex;flex-direction:column;text-align:left;"]);
const Row = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "footer__Row",
  componentId: "sc-airye8-4"
})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));grid-gap:15px;@media (max-width:1000px){grid-template-columns:repeat(auto-fill,minmax(150px,1fr));}"]);
const Link = styled_components_cjs/* default.a.withConfig */.ZP.a.withConfig({
  displayName: "footer__Link",
  componentId: "sc-airye8-5"
})(["color:#757575;margin-bottom:20px;font-size:13px;text-decoration:none;"]);
const Title = styled_components_cjs/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "footer__Title",
  componentId: "sc-airye8-6"
})(["font-size:16px;color:#757575;margin-bottom:40px;"]);
const Text = styled_components_cjs/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "footer__Text",
  componentId: "sc-airye8-7"
})(["font-size:13px;color:#757575;margin-bottom:40px;"]);
const Break = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "footer__Break",
  componentId: "sc-airye8-8"
})(["flex-basis:100%;height:0;"]);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/footer/index.js
const _excluded = ["children"],
      _excluded2 = ["children"],
      _excluded3 = ["children"],
      _excluded4 = ["children"],
      _excluded5 = ["children"],
      _excluded6 = ["children"],
      _excluded7 = ["children"],
      _excluded8 = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function Footer(_ref) {
  let {
    children
  } = _ref,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/jsx_runtime.jsx(Container, _objectSpread(_objectSpread({}, restProps), {}, {
    children: children
  }));
}

Footer.Outer = function FooterOuter(_ref2) {
  let {
    children
  } = _ref2,
      restProps = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/jsx_runtime.jsx(Outer, _objectSpread(_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Footer.Inner = function FooterInner(_ref3) {
  let {
    children
  } = _ref3,
      restProps = _objectWithoutProperties(_ref3, _excluded3);

  return /*#__PURE__*/jsx_runtime.jsx(Inner, _objectSpread(_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Footer.Row = function FooterRow(_ref4) {
  let {
    children
  } = _ref4,
      restProps = _objectWithoutProperties(_ref4, _excluded4);

  return /*#__PURE__*/jsx_runtime.jsx(Row, _objectSpread(_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Footer.Column = function FooterColumn(_ref5) {
  let {
    children
  } = _ref5,
      restProps = _objectWithoutProperties(_ref5, _excluded5);

  return /*#__PURE__*/jsx_runtime.jsx(Column, _objectSpread(_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Footer.Link = function FooterLink(_ref6) {
  let {
    children
  } = _ref6,
      restProps = _objectWithoutProperties(_ref6, _excluded6);

  return /*#__PURE__*/jsx_runtime.jsx(Link, _objectSpread(_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Footer.Title = function FooterTitle(_ref7) {
  let {
    children
  } = _ref7,
      restProps = _objectWithoutProperties(_ref7, _excluded7);

  return /*#__PURE__*/jsx_runtime.jsx(Title, _objectSpread(_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Footer.Text = function FooterText(_ref8) {
  let {
    children
  } = _ref8,
      restProps = _objectWithoutProperties(_ref8, _excluded8);

  return /*#__PURE__*/jsx_runtime.jsx(Text, _objectSpread(_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Footer.Break = function FooterBreak(_ref9) {
  let restProps = Object.assign({}, _ref9);
  return /*#__PURE__*/jsx_runtime.jsx(Break, _objectSpread({}, restProps));
};

/***/ }),

/***/ 34807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "UQ": () => (/* reexport */ Accordion),
  "_n": () => (/* reexport */ Authorization),
  "Zb": () => (/* reexport */ Card),
  "L0": () => (/* reexport */ feature_Feature),
  "h4": () => (/* reexport */ header_Header),
  "gb": () => (/* reexport */ Loading),
  "En": () => (/* reexport */ OptForm),
  "$j": () => (/* reexport */ spinner_Loading)
});

// UNUSED EXPORTS: Footer, Jumbotron

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(60027);
;// CONCATENATED MODULE: ./src/components/accordion/styles/accordion.js

const Container = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "accordion__Container",
  componentId: "sc-13427ap-0"
})(["display:flex;border-bottom:8px solid #222;"]);
const Frame = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "accordion__Frame",
  componentId: "sc-13427ap-1"
})(["margin-bottom:40px;"]);
const Inner = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "accordion__Inner",
  componentId: "sc-13427ap-2"
})(["display:flex;padding:70px 45px;flex-direction:column;max-width:815px;margin:auto;"]);
const Title = styled_components_cjs/* default.h2.withConfig */.ZP.h2.withConfig({
  displayName: "accordion__Title",
  componentId: "sc-13427ap-3"
})(["font-size:25px;line-height:1.1;margin-top:0;margin-bottom:8px;color:#aaa;text-align:center;@media (min-width:1000px){font-size:50px;}"]);
const Item = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "accordion__Item",
  componentId: "sc-13427ap-4"
})(["color:#bbb;margin:auto;margin-bottom:10px;max-width:728px;width:100%;&:first-of-type{margin-top:3em;}&:last-of-type{margin-bottom:0;}"]);
const Header = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "accordion__Header",
  componentId: "sc-13427ap-5"
})(["display:flex;justify-content:space-between;cursor:pointer;margin-bottom:1px;font-size:20px;font-weight:normal;background:#303030;padding:0.8em 5% 0.8em 5%;user-select:none;align-items:center;img{filter:brightness(0) invert(1);width:18px;user-select:none;margin-left:5px;@media (min-width:1000px){width:20px;}}@media (min-width:1000px){font-size:26px;}"]);
const Body = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "accordion__Body",
  componentId: "sc-13427ap-6"
})(["font-size:16px;font-weight:normal;line-height:1.3;letter-spacing:0.07em;background:#303030;white-space:pre-wrap;user-select:none;overflow:hidden;&.closed{max-height:0;overflow:hidden;transition:max-height 0.25s cubic-bezier(0.5,0,0.1,1);}&.open{max-height:1200px;transition:max-height 0.25s cubic-bezier(0.5,0,0.1,1);}span{display:block;padding:0.8em 2.2em 0.8em 1.2em;}@media (min-width:1000px){font-size:26px;}"]);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/accordion/index.js
const _excluded = ["children"],
      _excluded2 = ["children"],
      _excluded3 = ["children"],
      _excluded4 = ["children"],
      _excluded5 = ["children"],
      _excluded6 = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ToggleContext = /*#__PURE__*/(0,react.createContext)();
function Accordion(_ref) {
  let {
    children
  } = _ref,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/jsx_runtime.jsx(Container, _objectSpread(_objectSpread({}, restProps), {}, {
    children: /*#__PURE__*/jsx_runtime.jsx(Inner, {
      children: children
    })
  }));
}

Accordion.Title = function AccordionTitle(_ref2) {
  let {
    children
  } = _ref2,
      restProps = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/jsx_runtime.jsx(Title, _objectSpread(_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Accordion.Frame = function AccordionFrame(_ref3) {
  let {
    children
  } = _ref3,
      restProps = _objectWithoutProperties(_ref3, _excluded3);

  return /*#__PURE__*/jsx_runtime.jsx(Frame, _objectSpread(_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Accordion.Item = function AccordionItem(_ref4) {
  let {
    children
  } = _ref4,
      restProps = _objectWithoutProperties(_ref4, _excluded4);

  const {
    0: toggleShow,
    1: setToggleShow
  } = (0,react.useState)(false);
  return /*#__PURE__*/jsx_runtime.jsx(ToggleContext.Provider, {
    value: {
      toggleShow,
      setToggleShow
    },
    children: /*#__PURE__*/jsx_runtime.jsx(Item, _objectSpread(_objectSpread({}, restProps), {}, {
      children: children
    }))
  });
};

Accordion.Header = function AccordionHeader(_ref5) {
  let {
    children
  } = _ref5,
      restProps = _objectWithoutProperties(_ref5, _excluded5);

  const {
    toggleShow,
    setToggleShow
  } = (0,react.useContext)(ToggleContext);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Header, _objectSpread(_objectSpread({
    onClick: () => setToggleShow(!toggleShow)
  }, restProps), {}, {
    children: [children, toggleShow ? /*#__PURE__*/jsx_runtime.jsx("img", {
      src: "/images/icons/close-slim.png",
      alt: "Close"
    }) : /*#__PURE__*/jsx_runtime.jsx("img", {
      src: "/images/icons/add.png",
      alt: "Open"
    })]
  }));
};

Accordion.Body = function AccordionBody(_ref6) {
  let {
    children
  } = _ref6,
      restProps = _objectWithoutProperties(_ref6, _excluded6);

  const {
    toggleShow
  } = (0,react.useContext)(ToggleContext);
  return /*#__PURE__*/jsx_runtime.jsx(Body, _objectSpread(_objectSpread({
    className: toggleShow ? 'open' : 'closed'
  }, restProps), {}, {
    children: /*#__PURE__*/jsx_runtime.jsx("span", {
      children: children
    })
  }));
};
;// CONCATENATED MODULE: ./src/components/card/styles/card.js
 // Outermost Group of all Rows & Entities 

const Group = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "card__Group",
  componentId: "sc-19vsla6-0"
})(["display:flex;margin-top:40px;flex-direction:", ";", ";", ";@media (min-width:1000px){margin-top:55px;}@media (min-width:1440px){margin-top:165px;}@media (min-width:1680px){margin-top:55px;}@media (min-width:1920px){margin-top:215px;}@media (min-width:2560px){margin-top:175px;}"], ({
  flexDirection
}) => flexDirection === 'row' ? 'row' : 'column', ({
  alignItems
}) => alignItems && `align-items: ${alignItems}`, ({
  margin
}) => margin && `margin: ${margin}`); // Row Titles

const card_Title = styled_components_cjs/* default.h2.withConfig */.ZP.h2.withConfig({
  displayName: "card__Title",
  componentId: "sc-19vsla6-1"
})(["font-family:EBGaramond;font-size:22px;color:#c5c5c5;font-weight:bold;margin:0 56px -3px;"]); // Rows of Entities under each Row Title

const card_Container = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "card__Container",
  componentId: "sc-19vsla6-2"
})(["display:flex;flex-direction:column;margin-bottom:5px;> ", "{@media (max-width:1000px){margin-left:30px;}}&:last-of-type  margin-bottom:0;}"], card_Title); // Container inside of row - this allows the meta box below image

const Row = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "card__Row",
  componentId: "sc-19vsla6-3"
})(["display:flex;flex-direction:column;height:275px;padding-top:20px;overflow-x:auto;margin-right:30px;@media (min-width:1000px){margin-right:56px;}"]); // Each individual gallery tile

const Entities = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "card__Entities",
  componentId: "sc-19vsla6-4"
})(["display:flex;flex-direction:row;"]); // Similar to Entity but this has the hover effect

const card_Item = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "card__Item",
  componentId: "sc-19vsla6-5"
})(["display:flex;flex-direction:column;flex-shrink:0;margin-right:10px;position:relative;cursor:pointer;transition:transform 0.2s;background-color:#131313;border-left:1px solid rgba(120,120,120,.3);border-right:1px solid rgba(120,120,120,.3);border-top:1.5px solid rgba(120,120,120,9);box-shadow:0px 0px 1px 1px rgba(120,120,120,.3);&:hover{transform:scale(1.3);z-index:99;}&:first-of-type{margin-left:30px;@media (min-width:1000px){margin-left:56px;}}&:last-of-type{margin-right:30px;@media (min-width:1000px){margin-right:56px;}}"]); // showHero for each entity

const Image = styled_components_cjs/* default.img.withConfig */.ZP.img.withConfig({
  displayName: "card__Image",
  componentId: "sc-19vsla6-6"
})(["border:0;width:100%;max-width:225px;cursor:pointer;height:auto;margin:0;position:relative;left 1px;"]); // Gallery Name in Meta Box defined below

const SubTitle = styled_components_cjs/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "card__SubTitle",
  componentId: "sc-19vsla6-7"
})(["font-size:14px;color:#888;margin-top:0;margin-bottom:0;user-select:none;padding-left:3%;"]); // Box below the image in each entity

const Meta = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "card__Meta",
  componentId: "sc-19vsla6-8"
})(["display:flex;min-width:101%;height:80px;position:absolute;bottom:-80px;justify-content:flex-start align-items:center;padding-left:2%;background-color:#131313;border-left:.5px solid rgba(120,120,120,.1);border-right:.5px solid rgba(120,120,120,.1);border-bottom:.5px solid rgba(120,120,120,.1);box-shadow:0px 0px 1px 1px rgba(120,120,120,.3);> ", "{align-self:center;margin-left:3%;max-width:65%;}"], SubTitle); // Container for Gallery Logo in Meta Box

const MetaLogoContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "card__MetaLogoContainer",
  componentId: "sc-19vsla6-9"
})(["flex-basis:30%;padding:5%;align-self:center;"]); // Gallery Logo in Meta Box

const MetaLogo = styled_components_cjs/* default.img.withConfig */.ZP.img.withConfig({
  displayName: "card__MetaLogo",
  componentId: "sc-19vsla6-10"
})(["object-fit:cover;"]); // Container that appears below the entity on click
// The picture included in the Feature is a background url here

const Feature = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "card__Feature",
  componentId: "sc-19vsla6-11"
})(["display:flex;flex-direction:row;background:black background-size:auto;position:relative;padding:5px;height:auto;background-position-x:right;background-color:black;border-top:1px solid rgba(120,120,120,.3);border-bottom:1px solid rgba(120,120,120,.3);@media (min-width:1000px){background:url(", ");background-color:black;background-repeat:no-repeat;background-position:right;background-size:50%;padding:50px 5px 23px;height:625px;}@media (min-width:1440px){padding-left:12px;}@media (min-width:1680px){padding-left:0px;}"], ({
  src
}) => src); // Content block for all info in Feature

const Content = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "card__Content",
  componentId: "sc-19vsla6-12"
})(["display:flex;flex-direction:column;justify-content:center;align-self:center;margin:56px;width:100%;line-height:normal;@media (min-width:1000px){margin:30px 30px 30px 25px;width:45%;height:550px;}@media (min-width:1440px){height:450px;}@media (min-width:1680px){width:50%;padding:0 7% 0 5%;}@media (min-width:2560px){width:50%;}"]); // Logo in Feature

const FeatureLogo = styled_components_cjs/* default.img.withConfig */.ZP.img.withConfig({
  displayName: "card__FeatureLogo",
  componentId: "sc-19vsla6-13"
})(["object-fit:cover;align-self:center;width:100px;height:100px "]); // Gallery / Museum Name in Feature

const FeatureTitle = (0,styled_components_cjs/* default */.ZP)(card_Title).withConfig({
  displayName: "card__FeatureTitle",
  componentId: "sc-19vsla6-14"
})(["margin-left:0;font-size:24px;text-transform:uppercase;letter-spacing:.07em;margin:25px 0 5px;text-align:center;"]); // Show Title in Feature

const FeatureCaption = (0,styled_components_cjs/* default */.ZP)(card_Title).withConfig({
  displayName: "card__FeatureCaption",
  componentId: "sc-19vsla6-15"
})(["margin-left:0;font-size:20px;font-weight:normal;text-transform:uppercase;letter-spacing:.07em;margin:20px 0 -5px;text-align:center;color:#999;"]); // Artist(s) Name(s) in Feature
// was export const FeatureCallOut = styled.h2`

const FeatureSubtitle = styled_components_cjs/* default.h2.withConfig */.ZP.h2.withConfig({
  displayName: "card__FeatureSubtitle",
  componentId: "sc-19vsla6-16"
})(["color:#999;font-size:16px;line-height:1.3em;letter-spacing:.05em;text-transform:uppercase;text-align:center;font-weight:normal;text-shadow:2px 2px 4px rgba(0,0,0,0.45);margin:20px 0 7px;"]); // Show Dates in Feature

const FeatureSubtitleCaption = styled_components_cjs/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "card__FeatureSubtitleCaption",
  componentId: "sc-19vsla6-17"
})(["font-size:14px;margin-top:5px;color:#9a9a9a;line-height:1.6em;letter-spacing:.07em;font-weight:bold;text-transform:uppercase;text-align:center;font-weight:", ";"], ({
  fontWeight
}) => fontWeight === 'bold' ? 'bold' : 'normal'); // showDescription in Feature

const FeatureText = styled_components_cjs/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "card__FeatureText",
  componentId: "sc-19vsla6-18"
})(["font-size:16px;color:#777;line-height:1.6em;letter-spacing:.07em;text-align:center;font-weight:", ";margin:0px;"], ({
  fontWeight
}) => fontWeight === 'bold' ? 'bold' : 'normal'); // Button to close Feature

const FeatureClose = styled_components_cjs/* default.button.withConfig */.ZP.button.withConfig({
  displayName: "card__FeatureClose",
  componentId: "sc-19vsla6-19"
})(["color:white;position:absolute;right:20px;top:20px;cursor:pointer;background-color:transparent;outline:none;border:0;img{filter:brightness(0) invert(1);width:24px;}@media (min-width:1000px){top:2.5%;}@media (min-width:1440px){top:20px;}"]); // All Go Buttons in any card

const GoButton = styled_components_cjs/* default.button.withConfig */.ZP.button.withConfig({
  displayName: "card__GoButton",
  componentId: "sc-19vsla6-20"
})(["width:105px;text-transform:uppercase;font-weight:bold;background-color:#ff0000;color:white;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:20px 0;margin:25px auto;outline:none;&:hover{transform:scale(1.05);background-color:#ff0a16;}@media (min-width:1000px){width:95px;padding:10px 0;}"]);
;// CONCATENATED MODULE: ./src/components/card/index.js
const card_excluded = ["children"],
      card_excluded2 = ["children"],
      card_excluded3 = ["children"],
      card_excluded4 = ["children"],
      card_excluded5 = ["children"],
      card_excluded6 = ["children"],
      _excluded7 = ["children"],
      _excluded8 = ["children"],
      _excluded9 = ["children"],
      _excluded10 = ["item", "children", "textInput"],
      _excluded11 = ["children"],
      _excluded12 = ["children", "category"];

function card_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function card_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { card_ownKeys(Object(source), true).forEach(function (key) { card_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { card_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function card_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function card_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = card_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function card_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const FeatureContext = /*#__PURE__*/(0,react.createContext)();
function Card(_ref) {
  let {
    children
  } = _ref,
      restProps = card_objectWithoutProperties(_ref, card_excluded);

  const {
    0: showFeature,
    1: setShowFeature
  } = (0,react.useState)(false);
  const {
    0: itemFeature,
    1: setItemFeature
  } = (0,react.useState)({});
  return /*#__PURE__*/jsx_runtime.jsx(FeatureContext.Provider, {
    value: {
      showFeature,
      setShowFeature,
      itemFeature,
      setItemFeature
    },
    children: /*#__PURE__*/jsx_runtime.jsx(card_Container, card_objectSpread(card_objectSpread({}, restProps), {}, {
      children: children
    }))
  });
}

Card.Group = function CardGroup(_ref2) {
  let {
    children
  } = _ref2,
      restProps = card_objectWithoutProperties(_ref2, card_excluded2);

  return /*#__PURE__*/jsx_runtime.jsx(Group, card_objectSpread(card_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Card.Row = function CardRow(_ref3) {
  let {
    children
  } = _ref3,
      restProps = card_objectWithoutProperties(_ref3, card_excluded3);

  return /*#__PURE__*/jsx_runtime.jsx(Row, card_objectSpread(card_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Card.Title = function CardTitle(_ref4) {
  let {
    children
  } = _ref4,
      restProps = card_objectWithoutProperties(_ref4, card_excluded4);

  return /*#__PURE__*/jsx_runtime.jsx(card_Title, card_objectSpread(card_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Card.Caption = function CardCaption(_ref5) {
  let {
    children
  } = _ref5,
      restProps = card_objectWithoutProperties(_ref5, card_excluded5);

  return /*#__PURE__*/jsx_runtime.jsx(Caption, card_objectSpread(card_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Card.SubTitle = function CardSubTitle(_ref6) {
  let {
    children
  } = _ref6,
      restProps = card_objectWithoutProperties(_ref6, card_excluded6);

  return /*#__PURE__*/jsx_runtime.jsx(SubTitle, card_objectSpread(card_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Card.Entities = function CardEntities(_ref7) {
  let {
    children
  } = _ref7,
      restProps = card_objectWithoutProperties(_ref7, _excluded7);

  return /*#__PURE__*/jsx_runtime.jsx(Entities, card_objectSpread(card_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Card.Meta = function CardMeta(_ref8) {
  let {
    children
  } = _ref8,
      restProps = card_objectWithoutProperties(_ref8, _excluded8);

  return /*#__PURE__*/jsx_runtime.jsx(Meta, card_objectSpread(card_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Card.GoButton = function CardGoButton(_ref9) {
  let {
    children
  } = _ref9,
      restProps = card_objectWithoutProperties(_ref9, _excluded9);

  return /*#__PURE__*/jsx_runtime.jsx(GoButton, card_objectSpread(card_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Card.Item = function CardItem(_ref10) {
  let {
    item,
    children,
    textInput
  } = _ref10,
      restProps = card_objectWithoutProperties(_ref10, _excluded10);

  const {
    setShowFeature,
    setItemFeature
  } = (0,react.useContext)(FeatureContext);
  return /*#__PURE__*/jsx_runtime.jsx(card_Item, card_objectSpread(card_objectSpread({
    onClick: () => {
      setItemFeature(item);
      setShowFeature(true);
    }
  }, restProps), {}, {
    children: children
  }));
};

Card.Image = function CardImage(_ref11) {
  let restProps = Object.assign({}, _ref11);
  return /*#__PURE__*/jsx_runtime.jsx(Image, card_objectSpread({}, restProps));
};

Card.MetaLogo = function CardMetaLogo(_ref12) {
  let restProps = Object.assign({}, _ref12);
  return /*#__PURE__*/jsx_runtime.jsx(Image, card_objectSpread({}, restProps));
};

Card.MetaLogoContainer = function CardMetaLogoContainer(_ref13) {
  let {
    children
  } = _ref13,
      restProps = card_objectWithoutProperties(_ref13, _excluded11);

  return /*#__PURE__*/jsx_runtime.jsx(MetaLogoContainer, card_objectSpread(card_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Card.FeatureLogo = function CardFeatureLogo(_ref14) {
  let restProps = Object.assign({}, _ref14);
  return /*#__PURE__*/jsx_runtime.jsx(Image, card_objectSpread({}, restProps));
};

Card.Feature = function CardFeature(_ref15) {
  let {
    children,
    category
  } = _ref15,
      restProps = card_objectWithoutProperties(_ref15, _excluded12);

  const {
    showFeature,
    itemFeature,
    setShowFeature
  } = (0,react.useContext)(FeatureContext);
  return showFeature ? /*#__PURE__*/jsx_runtime.jsx(Feature, card_objectSpread(card_objectSpread({}, restProps), {}, {
    src: itemFeature.walkthroughStill,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Content, {
      children: [/*#__PURE__*/jsx_runtime.jsx(FeatureLogo, {
        src: itemFeature.gallery.logo,
        alt: itemFeature.gallery.name
      }), /*#__PURE__*/jsx_runtime.jsx(FeatureTitle, {
        children: itemFeature.gallery.name
      }), /*#__PURE__*/jsx_runtime.jsx(FeatureCaption, {
        children: itemFeature.title
      }), /*#__PURE__*/jsx_runtime.jsx(FeatureSubtitle, {
        children: itemFeature.artist
      }), /*#__PURE__*/jsx_runtime.jsx(FeatureSubtitleCaption, {
        children: itemFeature.date
      }), /*#__PURE__*/jsx_runtime.jsx(FeatureText, {
        children: itemFeature.showDescription
      }), /*#__PURE__*/jsx_runtime.jsx(FeatureTitle, {
        children: "COMING SOON"
      }), /*#__PURE__*/jsx_runtime.jsx(FeatureClose, {
        onClick: () => setShowFeature(false),
        children: /*#__PURE__*/jsx_runtime.jsx("img", {
          src: "/images/icons/close.png",
          alt: "Close"
        })
      }), children]
    })
  })) : null;
};
// EXTERNAL MODULE: ./src/components/jumbotron/index.js + 1 modules
var jumbotron = __webpack_require__(55039);
;// CONCATENATED MODULE: ./src/components/feature/styles/feature.js

const feature_Container = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "feature__Container",
  componentId: "sc-19op8ei-0"
})(["display:flex;flex-direction:column;border-bottom:8px solid #222;text-align:center;padding:5vh 45px 15vh;@media (min-width:1000px){font-size 28px;padding:15vh 45px 25vh;}@media (min-width:1440px){font-size 28px;padding:35vh 45px 40vh;}@media (min-width:1680px){font-size 28px;padding:40vh 45px 42vh;}@media (min-width:1920px){font-size 28px;padding:45vh 45px 48vh;}@media (min-width:2560px){font-size 28px;padding:50vh 45px 90vh;}"]);
const feature_Title = styled_components_cjs/* default.h1.withConfig */.ZP.h1.withConfig({
  displayName: "feature__Title",
  componentId: "sc-19op8ei-1"
})(["color:white;max-width:800px;margin:auto;font-family:EBGaramond;font-size:40px;font-weight:bold;@media (min-width:1000px){font-size:55px;}"]);
const feature_SubTitle = styled_components_cjs/* default.h2.withConfig */.ZP.h2.withConfig({
  displayName: "feature__SubTitle",
  componentId: "sc-19op8ei-2"
})(["color:white;font-size:20px;font-weight:normal;margin:10px auto;@media (min-width:1000px){font-size 28px;}"]);
;// CONCATENATED MODULE: ./src/components/feature/index.js
const feature_excluded = ["bg", "children"],
      feature_excluded2 = ["children"],
      feature_excluded3 = ["children"];

function feature_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function feature_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { feature_ownKeys(Object(source), true).forEach(function (key) { feature_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { feature_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function feature_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function feature_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = feature_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function feature_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function feature_Feature(_ref) {
  let {
    bg = true,
    children
  } = _ref,
      restProps = feature_objectWithoutProperties(_ref, feature_excluded);

  return /*#__PURE__*/jsx_runtime.jsx(feature_Container, feature_objectSpread(feature_objectSpread({}, restProps), {}, {
    children: children
  }));
}

feature_Feature.Title = function FeatureTitle(_ref2) {
  let {
    children
  } = _ref2,
      restProps = feature_objectWithoutProperties(_ref2, feature_excluded2);

  return /*#__PURE__*/jsx_runtime.jsx(feature_Title, feature_objectSpread(feature_objectSpread({}, restProps), {}, {
    children: children
  }));
};

feature_Feature.SubTitle = function FeatureSubTitle(_ref3) {
  let {
    children
  } = _ref3,
      restProps = feature_objectWithoutProperties(_ref3, feature_excluded3);

  return /*#__PURE__*/jsx_runtime.jsx(feature_SubTitle, feature_objectSpread(feature_objectSpread({}, restProps), {}, {
    children: children
  }));
};
;// CONCATENATED MODULE: ./src/components/opt-form/styles/opt-form.js

const Form = styled_components_cjs/* default.form.withConfig */.ZP.form.withConfig({
  displayName: "opt-form__Form",
  componentId: "sc-1wcat19-0"
})(["display:flex;justify-content:center;height:100%;margin-top:10px;flex-wrap:wrap;@media (max-width:1000px){flex-direction:column;align-items:center;}"]);
const Input = styled_components_cjs/* default.input.withConfig */.ZP.input.withConfig({
  displayName: "opt-form__Input",
  componentId: "sc-1wcat19-1"
})(["max-width:400px;width:100%;border:0;padding:10px;height:45px;max-height:45px;box-sizing:border-box;outline:none;"]);
const Break = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "opt-form__Break",
  componentId: "sc-1wcat19-2"
})(["flex-basis:100%;height:0;"]);
const Button = styled_components_cjs/* default.button.withConfig */.ZP.button.withConfig({
  displayName: "opt-form__Button",
  componentId: "sc-1wcat19-3"
})(["display:flex;align-items:center;max-height:45px;background:#e50914;color:white;text-transform:uppercase;padding:0 15px;font-size:18px;border:0;cursor:pointer;outline:none;img{margin-left:10px;filter:brightness(0) invert(1);width:24px;@media (max-width:1000px){width:16px;}}&:hover{background:#f40612;}@media (max-width:1000px){height:50px;font-size:16px;margin-top:20px;font-weight:bold;}"]);
const Text = styled_components_cjs/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "opt-form__Text",
  componentId: "sc-1wcat19-4"
})(["font-size:14px;color:#dedede;text-align:center;@media (max-width:600px){font-size:16px;line-height:22px;}"]);
;// CONCATENATED MODULE: ./src/components/opt-form/index.js
const opt_form_excluded = ["children"],
      opt_form_excluded2 = ["children"],
      opt_form_excluded3 = ["children"];

function opt_form_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function opt_form_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { opt_form_ownKeys(Object(source), true).forEach(function (key) { opt_form_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { opt_form_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function opt_form_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function opt_form_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = opt_form_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function opt_form_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


 // TODO - rework OptForm to sign up process



function OptForm(_ref) {
  let {
    children
  } = _ref,
      restProps = opt_form_objectWithoutProperties(_ref, opt_form_excluded);

  return /*#__PURE__*/jsx_runtime.jsx(Form, opt_form_objectSpread(opt_form_objectSpread({}, restProps), {}, {
    children: children
  }));
}

OptForm.Input = function OptFormInput(_ref2) {
  let restProps = Object.assign({}, _ref2);
  return /*#__PURE__*/jsx_runtime.jsx(Input, opt_form_objectSpread({}, restProps));
};

OptForm.Button = function OptFormButton(_ref3) {
  let {
    children
  } = _ref3,
      restProps = opt_form_objectWithoutProperties(_ref3, opt_form_excluded2);

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Button, opt_form_objectSpread(opt_form_objectSpread({}, restProps), {}, {
    children: [children, " ", /*#__PURE__*/jsx_runtime.jsx("img", {
      src: "/images/icons/chevron-right.png",
      alt: "Try Now"
    })]
  }));
};

OptForm.Text = function OptFormText(_ref4) {
  let {
    children
  } = _ref4,
      restProps = opt_form_objectWithoutProperties(_ref4, opt_form_excluded3);

  return /*#__PURE__*/jsx_runtime.jsx(Text, opt_form_objectSpread(opt_form_objectSpread({}, restProps), {}, {
    children: children
  }));
};

OptForm.Break = function OptFormBreak(_ref5) {
  let restProps = Object.assign({}, _ref5);
  return /*#__PURE__*/jsx_runtime.jsx(Break, opt_form_objectSpread({}, restProps));
};
// EXTERNAL MODULE: ./src/components/footer/index.js + 1 modules
var footer = __webpack_require__(94228);
;// CONCATENATED MODULE: ./src/components/header/styles/header.js
 // Header Background 

const Background = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "header__Background",
  componentId: "sc-1yg2dyq-0"
})(["display:flex;flex-direction:column;background:linear-gradient(to bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.1),rgba(0,0,0,0.35)),url(", ") top left / cover no-repeat;@media (max-width:1100px){", "}"], ({
  src
}) => src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg', ({
  dontShowOnSmallViewPort
}) => dontShowOnSmallViewPort && `background: none;`); // Container for Text over image background of Header

const header_Container = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "header__Container",
  componentId: "sc-1yg2dyq-1"
})(["display:flex;margin:0 56px;height:100px;justify-content:space-between;align-items:center;a{display:flex;text-decoration:none;}@media (max-width:1000px){margin:0 0px;}"]); // Link for Dropdown Link

const Link = styled_components_cjs/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "header__Link",
  componentId: "sc-1yg2dyq-2"
})(["color:#fff;text-decoration:none;margin-right:30px;position:relative;top:7px;font-weight:", ";cursor:pointer;&:hover{font-weight:bold;}&:last-of-type{margin-right:0;}"], ({
  active
}) => active === 'true' ? '700' : 'normal'); // Container for SignOut Button in Dropdown

const header_Group = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "header__Group",
  componentId: "sc-1yg2dyq-3"
})(["display:flex;align-items:center;"]); // WAS ORIGINALLY ABOVE SEARCH

const SearchInput = styled_components_cjs/* default.input.withConfig */.ZP.input.withConfig({
  displayName: "header__SearchInput",
  componentId: "sc-1yg2dyq-4"
})(["background-color:rgba(64,64,64,0.5);color:white;border:1px solid white;transition:width 0.5s;height:30px;font-size:14px;border-radius:4px;outline:none margin-left:", ";padding:", ";opacity:", ";width:", ";&:focus{background-color:rgba(0,0,0,0.8);outline:none;}"], ({
  active
}) => active === true ? '10px' : '0', ({
  active
}) => active === true ? '0 10px' : '0', ({
  active
}) => active === true ? '1' : '0', ({
  active
}) => active === true ? '200px' : '0px'); // DIV CONTAINING SEARCH ICON / BAR

const Search = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "header__Search",
  componentId: "sc-1yg2dyq-5"
})(["display:flex;align-items:center;svg{color:white;cursor:pointer;}@media (max-width:700px){display:none;}"]); // SEARCH ICON

const SearchIcon = styled_components_cjs/* default.button.withConfig */.ZP.button.withConfig({
  displayName: "header__SearchIcon",
  componentId: "sc-1yg2dyq-6"
})(["cursor:pointer;background-color:transparent;border:0;outline:0;height:32px;width:32px;padding:0;display:flex;align-items:center;justify-content:center;img{filter:brightness(0) invert(1);width:16px;}"]);
const ButtonLink = styled_components_cjs/* default.button.withConfig */.ZP.button.withConfig({
  displayName: "header__ButtonLink",
  componentId: "sc-1yg2dyq-7"
})(["display:block;background-color:#e50914;width:100px;height:fit-content;color:white;border:0;font-size:16px;border-radius:3px;padding:8px 14px;cursor:pointer;text-decoration:none;text-align:center;outline:none;&:hover{background:#f40612;}"]);
const Picture = styled_components_cjs/* default.button.withConfig */.ZP.button.withConfig({
  displayName: "header__Picture",
  componentId: "sc-1yg2dyq-8"
})(["background:url(", ");background-size:contain;border:0;width:32px;height:32px;cursor:pointer;"], ({
  src
}) => src); // Dropdown Navigation

const Dropdown = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "header__Dropdown",
  componentId: "sc-1yg2dyq-9"
})(["display:none;position:absolute;background-color:black;padding:25px 25px;width:200px;top:45px;right:5px;", ":last-of-type ", "{cursor:pointer;}", "{margin-bottom:10px;&:last-of-type{margin-bottom:0;}", "{cursor:pointer;}", "{cursor:default;}}button{margin-right:10px;outline:none;}p{cursor:auto;font-size:16px;margin-left:15px;margin-bottom:15px;margin-top:0;}"], header_Group, Link, header_Group, Link, Picture);
const Profile = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "header__Profile",
  componentId: "sc-1yg2dyq-10"
})(["display:flex;align-items:center;margin-left:20px;padding-left:20px;position:absolute;top:1%;right:2%;width:50px;height:50px;button{cursor:pointer;}&:hover > ", "{display:flex;flex-direction:column;align-items:flex-end;}"], Dropdown);
const header_Feature = (0,styled_components_cjs/* default */.ZP)(header_Container).withConfig({
  displayName: "header__Feature",
  componentId: "sc-1yg2dyq-11"
})(["flex-direction:row;align-items:normal;width:100%;position:absolute;top:33vh;@media (min-width:1000px){flex-direction:column;align-items:normal;left:-1%;top:20vh;width:50%;}@media (min-width:1440px){flex-direction:column;align-items:normal;left:-1%;top:30vh;width:50%;}"]);
const FeatureCallOut = styled_components_cjs/* default.h2.withConfig */.ZP.h2.withConfig({
  displayName: "header__FeatureCallOut",
  componentId: "sc-1yg2dyq-12"
})(["color:white;font-size:50px;line-height:normal;font-weight:bold;text-shadow:2px 2px 4px rgba(0,0,0,0.45);margin:0;"]);
const header_Text = styled_components_cjs/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "header__Text",
  componentId: "sc-1yg2dyq-13"
})(["color:white;font-size:18px;line-height:1.6em;letter-space:.05em;text-shadow:2px 2px 4px rgba(0,0,0,0.45);"]);
const Logo = styled_components_cjs/* default.img.withConfig */.ZP.img.withConfig({
  displayName: "header__Logo",
  componentId: "sc-1yg2dyq-14"
})(["height:36px;width:90px;max-width:90px;margin-right:40px;position:absolute;top:2%;left:5%;cursor:pointer;@media (min-width:1449px){height:45px;width:112px;max-width:112px;}"]);
const header_GoButton = styled_components_cjs/* default.button.withConfig */.ZP.button.withConfig({
  displayName: "header__GoButton",
  componentId: "sc-1yg2dyq-15"
})(["width:105px;text-transform:uppercase;font-weight:bold;background-color:#ff0000;color:white;font-size:18px;cursor:pointer;display:flex;justify-content:center;padding:10px 0;margin:25px 0 25px 3%;outline:none;&:hover{transform:scale(1.05);background-color:#ff0a16;}@media (min-width:1024px){width:95px;padding:10px 0;}"]); // NEW ---
// BACKGROUND PICTURE FOR BROWSE PAGE - FEATURED EXHIBIT

const FeaturedExhibitContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "header__FeaturedExhibitContainer",
  componentId: "sc-1yg2dyq-16"
})(["display:flex;flex-direction:column;width:100%;height:90vh;overflow:hidden;margin-bottom:-15vh;@media (min-width:1024px){margin-bottom:-15vh;}@media (min-width:1045px){margin-bottom:-10vh;}@media (min-width:1200px){margin-bottom:-7vh;}@media (min-width:1440px){margin-bottom:-17vh;}@media (min-width:1680px){margin-bottom:-1vh;}@media (min-width:1920px){margin-bottom:-22vh;}@media (min-width:2560px){margin-bottom:-16vh;}"]);
const FeaturedExhibitContainerImg = styled_components_cjs/* default.img.withConfig */.ZP.img.withConfig({
  displayName: "header__FeaturedExhibitContainerImg",
  componentId: "sc-1yg2dyq-17"
})(["width:100%;height:100%;background-color:black;object-fit:cover;opacity:.9;@media (min-width:1024px){width:100%;height:auto;}"]);
const header_SubTitle = styled_components_cjs/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "header__SubTitle",
  componentId: "sc-1yg2dyq-18"
})(["font-size:28px;text-transform:uppercase;color:#c5c5c5;margin-top:0;margin-bottom:0;user-select:none;padding-left:3%;"]); // use padding control the size of the logo

const header_MetaLogoContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "header__MetaLogoContainer",
  componentId: "sc-1yg2dyq-19"
})(["flex-basis:100%;padding:5%;align-self:center;border-radius:100%;@media (min-width:1000px){flex-basis:20%;padding:5%;}@media (min-width:1440px){flex-basis:20%;position:relative;left 10%}@media (min-width:1680px){flex-basis:20%;position:relative;left 15%}@media (min-width:2560px){flex-basis:20%;position:relative;left 22%}"]); // BROUGHT IN SO METALOGO WILL WORK - OTHERWISE ERROR ABOUT RENDERING IMAGES OCCURS
// THIS WILL CHANGE THE SIZE OF THE LOGO!

const header_Image = styled_components_cjs/* default.img.withConfig */.ZP.img.withConfig({
  displayName: "header__Image",
  componentId: "sc-1yg2dyq-20"
})(["width:100%;max-width:75px;height:auto;margin-left:3%;margin-bottom:2%;@media(min-width:1000px){max-width:125px;}"]);
const header_MetaLogo = styled_components_cjs/* default.img.withConfig */.ZP.img.withConfig({
  displayName: "header__MetaLogo",
  componentId: "sc-1yg2dyq-21"
})([" "]);
const MetaInfoContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "header__MetaInfoContainer",
  componentId: "sc-1yg2dyq-22"
})(["padding:10px 5%;align-self:flex-start;text-align:left;width:100%;@media(min-width:1000px){padding:10px 5%;align-self:center;text-align:center;width:40%;}@media(min-width:1440px){padding:10px 5%;}@media(min-width:1680px){padding:10px 5%;}@media(min-width:1920px){padding:10px 5%;}> ", "{align-self:center;font-size:18px;font-weight:bold;letter-spacing:0.07em;margin-top:20px;}> ", "{font-size:24px;letter-spacing:0.07em;margin-left:3%;align-self:center;@media(min-width:1024px){font-size:36px;}@media(min-width:1440px){font-size:40px;margin-left:3%;}}> ", "{align-self:center;margin-left:3%;font-size:16px;text-transform:uppercase;}@media (min-width:1000px){flex-basis:80%;text-align:left;}"], header_SubTitle, FeatureCallOut, header_Text);
;// CONCATENATED MODULE: ./src/components/header/index.js
const header_excluded = ["bg", "children"],
      header_excluded2 = ["children"],
      header_excluded3 = ["children"],
      header_excluded4 = ["to"],
      header_excluded5 = ["searchTerm", "setSearchTerm"],
      header_excluded6 = ["children"],
      header_excluded7 = ["children"],
      header_excluded8 = ["src"],
      header_excluded9 = ["children"],
      header_excluded10 = ["children"],
      header_excluded11 = ["children"],
      header_excluded12 = ["children"],
      _excluded13 = ["children"],
      _excluded14 = ["children"],
      _excluded15 = ["children"],
      _excluded16 = ["children"],
      _excluded17 = ["children"],
      _excluded18 = ["children"];

function header_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function header_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { header_ownKeys(Object(source), true).forEach(function (key) { header_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { header_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function header_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = header_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function header_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function header_Header(_ref) {
  let {
    bg = true,
    children
  } = _ref,
      restProps = header_objectWithoutProperties(_ref, header_excluded);

  return bg ? /*#__PURE__*/jsx_runtime.jsx(Background, header_objectSpread(header_objectSpread({
    "data-testid": "header-bg"
  }, restProps), {}, {
    children: children
  })) : children;
}

header_Header.Frame = function HeaderFrame(_ref2) {
  let {
    children
  } = _ref2,
      restProps = header_objectWithoutProperties(_ref2, header_excluded2);

  return /*#__PURE__*/jsx_runtime.jsx(header_Container, header_objectSpread(header_objectSpread({}, restProps), {}, {
    children: children
  }));
};

header_Header.Group = function HeaderGroup(_ref3) {
  let {
    children
  } = _ref3,
      restProps = header_objectWithoutProperties(_ref3, header_excluded3);

  return /*#__PURE__*/jsx_runtime.jsx(header_Group, header_objectSpread(header_objectSpread({}, restProps), {}, {
    children: children
  }));
};

header_Header.Logo = function HeaderLogo(_ref4) {
  let {
    to
  } = _ref4,
      restProps = header_objectWithoutProperties(_ref4, header_excluded4);

  return /*#__PURE__*/jsx_runtime.jsx(Logo, header_objectSpread({}, restProps));
};

header_Header.Search = function HeaderSearch(_ref5) {
  let {
    searchTerm,
    setSearchTerm
  } = _ref5,
      restProps = header_objectWithoutProperties(_ref5, header_excluded5);

  const {
    0: searchActive,
    1: setSearchActive
  } = (0,react.useState)(false);
  return /*#__PURE__*/jsx_runtime.jsx(Search, header_objectSpread({}, restProps));
};

header_Header.Profile = function HeaderProfile(_ref6) {
  let {
    children
  } = _ref6,
      restProps = header_objectWithoutProperties(_ref6, header_excluded6);

  return /*#__PURE__*/jsx_runtime.jsx(Profile, header_objectSpread(header_objectSpread({}, restProps), {}, {
    children: children
  }));
};

header_Header.Feature = function HeaderFeature(_ref7) {
  let {
    children
  } = _ref7,
      restProps = header_objectWithoutProperties(_ref7, header_excluded7);

  return /*#__PURE__*/jsx_runtime.jsx(header_Feature, {
    children: children
  });
};

header_Header.Picture = function HeaderPicture(_ref8) {
  let {
    src
  } = _ref8,
      restProps = header_objectWithoutProperties(_ref8, header_excluded8);

  return /*#__PURE__*/jsx_runtime.jsx(Picture, header_objectSpread(header_objectSpread({}, restProps), {}, {
    src: `/images/users/${src}.png`
  }));
};

header_Header.Dropdown = function HeaderDropdown(_ref9) {
  let {
    children
  } = _ref9,
      restProps = header_objectWithoutProperties(_ref9, header_excluded9);

  return /*#__PURE__*/jsx_runtime.jsx(Dropdown, header_objectSpread(header_objectSpread({}, restProps), {}, {
    children: children
  }));
};

header_Header.TextLink = function HeaderTextLink(_ref10) {
  let {
    children
  } = _ref10,
      restProps = header_objectWithoutProperties(_ref10, header_excluded10);

  return /*#__PURE__*/jsx_runtime.jsx(Link, header_objectSpread(header_objectSpread({}, restProps), {}, {
    children: children
  }));
};

header_Header.GoButton = function HeaderGoButton(_ref11) {
  let {
    children
  } = _ref11,
      restProps = header_objectWithoutProperties(_ref11, header_excluded11);

  return /*#__PURE__*/jsx_runtime.jsx(header_GoButton, header_objectSpread(header_objectSpread({}, restProps), {}, {
    children: children
  }));
};

header_Header.FeatureCallOut = function HeaderFeatureCallOut(_ref12) {
  let {
    children
  } = _ref12,
      restProps = header_objectWithoutProperties(_ref12, header_excluded12);

  return /*#__PURE__*/jsx_runtime.jsx(FeatureCallOut, header_objectSpread(header_objectSpread({}, restProps), {}, {
    children: children
  }));
};

header_Header.Text = function HeaderText(_ref13) {
  let {
    children
  } = _ref13,
      restProps = header_objectWithoutProperties(_ref13, _excluded13);

  return /*#__PURE__*/jsx_runtime.jsx(header_Text, header_objectSpread(header_objectSpread({}, restProps), {}, {
    children: children
  }));
};

header_Header.ButtonLink = function HeaderButtonLink(_ref14) {
  let {
    children
  } = _ref14,
      restProps = header_objectWithoutProperties(_ref14, _excluded14);

  return /*#__PURE__*/jsx_runtime.jsx(ButtonLink, header_objectSpread(header_objectSpread({}, restProps), {}, {
    children: children
  }));
};

header_Header.SubTitle = function HeaderSubTitle(_ref15) {
  let {
    children
  } = _ref15,
      restProps = header_objectWithoutProperties(_ref15, _excluded15);

  return /*#__PURE__*/jsx_runtime.jsx(header_SubTitle, header_objectSpread(header_objectSpread({}, restProps), {}, {
    children: children
  }));
};

header_Header.Image = function HeaderImage(_ref16) {
  let restProps = Object.assign({}, _ref16);
  return /*#__PURE__*/jsx_runtime.jsx(header_Image, header_objectSpread({}, restProps));
};

header_Header.MetaLogo = function HeaderMetaLogo(_ref17) {
  let restProps = Object.assign({}, _ref17);
  return /*#__PURE__*/jsx_runtime.jsx(header_Image, header_objectSpread({}, restProps));
};

header_Header.FeaturedExhibitContainer = function HeaderFeaturedExhibitContainer(_ref18) {
  let {
    children
  } = _ref18,
      restProps = header_objectWithoutProperties(_ref18, _excluded16);

  return /*#__PURE__*/jsx_runtime.jsx(FeaturedExhibitContainer, header_objectSpread(header_objectSpread({}, restProps), {}, {
    children: children
  }));
};

header_Header.FeaturedExhibitContainerImg = function HeaderFeaturedExhibitContainerImg(_ref19) {
  let {
    children
  } = _ref19,
      restProps = header_objectWithoutProperties(_ref19, _excluded17);

  return /*#__PURE__*/jsx_runtime.jsx(FeaturedExhibitContainerImg, header_objectSpread(header_objectSpread({}, restProps), {}, {
    children: children
  }));
};

header_Header.MetaInfoContainer = function HeaderMetaInfoContainer(_ref20) {
  let {
    children
  } = _ref20,
      restProps = header_objectWithoutProperties(_ref20, _excluded18);

  return /*#__PURE__*/jsx_runtime.jsx(MetaInfoContainer, header_objectSpread(header_objectSpread({}, restProps), {}, {
    children: children
  }));
};
;// CONCATENATED MODULE: ./src/components/loading/styles/loading.js

const LockBody = (0,styled_components_cjs/* createGlobalStyle */.vJ)(["body{overflow:hidden;}"]);
const ReleaseBody = (0,styled_components_cjs/* createGlobalStyle */.vJ)(["body{overflow:visible;}"]);
const Spinner = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "loading__Spinner",
  componentId: "sc-gadkhn-0"
})(["position:fixed;width:100%;height:100%;background-color:black;z-index:4999;:after{content:'';position:absolute;top:50%;left:50%;background-image:url(/images/misc/spinner.png);background-size:contain;background-repeat:no-repeat;margin-top:-38px;margin-left:-38px;width:75px;height:75px;animation-name:spin;animation-duration:1000ms;animation-iteration-count:infinite;animation-timing-function:linear;}@-ms-keyframes spin{from{-ms-transform:rotate(0deg);}to{-ms-transform:rotate(360deg);}}@-moz-keyframes spin{from{-moz-transform:rotate(0deg);}to{-moz-transform:rotate(360deg);}}@-webkit-keyframes spin{from{-webkit-transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);}}@keyframes spin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}"]);
const loading_Picture = styled_components_cjs/* default.img.withConfig */.ZP.img.withConfig({
  displayName: "loading__Picture",
  componentId: "sc-gadkhn-1"
})(["width:50px;height:50px;position:absolute;top:50%;left:50%;margin-top:-100px;margin-left:-22px;"]);
;// CONCATENATED MODULE: ./src/components/loading/index.js
const loading_excluded = ["src"];

function loading_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function loading_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { loading_ownKeys(Object(source), true).forEach(function (key) { loading_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { loading_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function loading_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function loading_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = loading_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function loading_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function Loading(_ref) {
  let {
    src
  } = _ref,
      restProps = loading_objectWithoutProperties(_ref, loading_excluded);

  return /*#__PURE__*/jsx_runtime.jsx(Spinner, loading_objectSpread(loading_objectSpread({}, restProps), {}, {
    children: /*#__PURE__*/jsx_runtime.jsx(LockBody, {})
  }));
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return /*#__PURE__*/jsx_runtime.jsx(ReleaseBody, {});
};
;// CONCATENATED MODULE: ./src/components/authorization/styles/login.js
 // Outer Div

const Outer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "login__Outer",
  componentId: "sc-9rwhkt-0"
})(["display:flex;flex-direction:column;width:80%;margin:0 auto 10vh;height:80vh;background:rgba(0,0,0,.2);@media (min-width:1000px){flex-direction:row;}"]); // Info Div

const InfoContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "login__InfoContainer",
  componentId: "sc-9rwhkt-1"
})(["order:2;width:100%;background-color:#000;display:flex;flex-direction:column;justify-content:center;padding:25px 5% 50px;@media (min-width:1000px){order:1;width:50%;padding:25px 3%;}"]); // Info Headline = h2

const Headline = styled_components_cjs/* default.h2.withConfig */.ZP.h2.withConfig({
  displayName: "login__Headline",
  componentId: "sc-9rwhkt-2"
})(["font-size:24px;letter-spacing:0.07em;color:#dedede;text-align:center;@media (max-width:600px){font-size:16px;line-height:22px;}"]); // Info Text

const login_Text = styled_components_cjs/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "login__Text",
  componentId: "sc-9rwhkt-3"
})(["font-size:16px;line-height:1.6em;letter-spacing:0.07em;color:#dedede;text-align:center;@media (max-width:600px){font-size:16px;line-height:22px;}"]); //GalleryButton

const GalleryButton = styled_components_cjs/* default.a.withConfig */.ZP.a.withConfig({
  displayName: "login__GalleryButton",
  componentId: "sc-9rwhkt-4"
})(["max-width:50%;border-radius:50px;display:block;text-decoration:none;margin-top:35px;align-self:center;background:#e50914;color:white;text-transform:uppercase;padding:12px 25px;font-size:18px;border:0;cursor:pointer;outline:none;}&:hover{background:#f40612;}@media (max-width:1000px){height:50px;font-size:16px;margin-top:20px;font-weight:bold;}"]); // Form Container

const FormContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "login__FormContainer",
  componentId: "sc-9rwhkt-5"
})(["order:1;background:rgba(0,0,0,.4);width:100%;display:flex;flex-direction:column;justify-content:center;padding:25px 5% 65px;@media (min-width:1000px){order:2;width:50%;padding:0px 5px 5px 15px;}"]); // Form

const login_Form = styled_components_cjs/* default.form.withConfig */.ZP.form.withConfig({
  displayName: "login__Form",
  componentId: "sc-9rwhkt-6"
})(["display:block;justify-content:center;width:80%;margin:0 auto;flex-wrap:wrap;@media (max-width:1000px){flex-direction:column;align-items:center;}"]); // Form.Group = div to hold the form inputs

const login_Group = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "login__Group",
  componentId: "sc-9rwhkt-7"
})(["min-width:100%;display:flex;flex-direction:column;justify-content:flex-start;"]); // Form.Text = h1 Login / Sign Up / Forgot Password, etc

const FormHeadline = styled_components_cjs/* default.h1.withConfig */.ZP.h1.withConfig({
  displayName: "login__FormHeadline",
  componentId: "sc-9rwhkt-8"
})(["text-align:center;color:white;font-size:36px;color:#dedede;letter-spacing:.05em;font-weight:bold;@media (max-width:600px){font-size:16px;line-height:22px;}"]); // Form.Label

const Label = styled_components_cjs/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "login__Label",
  componentId: "sc-9rwhkt-9"
})(["font-size:14px;color:#dedede;text-align:center;@media (max-width:600px){font-size:16px;line-height:22px;}"]); // Error

const Error = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "login__Error",
  componentId: "sc-9rwhkt-10"
})(["color:#ff0000;"]); // Form.Control

const login_Input = styled_components_cjs/* default.input.withConfig */.ZP.input.withConfig({
  displayName: "login__Input",
  componentId: "sc-9rwhkt-11"
})(["font-size:16px;padding:10px;margin:15px 0;width:100%;border:1px solid white;border-top:none;border-left:none;border-right:none;background:rgba(0,0,0,0);color:white;outline:none;"]); // Spacer

const login_Break = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "login__Break",
  componentId: "sc-9rwhkt-12"
})(["flex-basis:100%;height:0;"]); // Text Div

const LinkContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "login__LinkContainer",
  componentId: "sc-9rwhkt-13"
})(["width:100%;display:flex;justify-content:space-around;margin-top:30px;"]); // Info Text

const login_Link = styled_components_cjs/* default.a.withConfig */.ZP.a.withConfig({
  displayName: "login__Link",
  componentId: "sc-9rwhkt-14"
})(["font-size:16px;line-height:1.6em;letter-spacing:0.07em;color:#777;text-align:center;text-decoration:none;&:hover{color:#dedede;}@media (max-width:600px){font-size:16px;line-height:22px;}"]);
;// CONCATENATED MODULE: ./src/components/authorization/index.js
const authorization_excluded = ["children"],
      authorization_excluded2 = ["children"],
      authorization_excluded3 = ["children"],
      authorization_excluded4 = ["children"],
      authorization_excluded5 = ["children"],
      authorization_excluded6 = ["children"],
      authorization_excluded7 = ["children"],
      authorization_excluded8 = ["children"],
      authorization_excluded9 = ["children"],
      authorization_excluded10 = ["children"],
      authorization_excluded11 = ["children"],
      authorization_excluded12 = ["children"],
      authorization_excluded13 = ["children"],
      authorization_excluded14 = ["children"],
      authorization_excluded15 = ["children"];

function authorization_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function authorization_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { authorization_ownKeys(Object(source), true).forEach(function (key) { authorization_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { authorization_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function authorization_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function authorization_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = authorization_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function authorization_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function Authorization(_ref) {
  let {
    children
  } = _ref,
      restProps = authorization_objectWithoutProperties(_ref, authorization_excluded);

  return /*#__PURE__*/jsx_runtime.jsx(Outer, authorization_objectSpread(authorization_objectSpread({}, restProps), {}, {
    children: children
  }));
}

Authorization.InfoContainer = function AuthorizationInfoContainer(_ref2) {
  let {
    children
  } = _ref2,
      restProps = authorization_objectWithoutProperties(_ref2, authorization_excluded2);

  return /*#__PURE__*/jsx_runtime.jsx(InfoContainer, authorization_objectSpread(authorization_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Authorization.Headline = function AuthorizationHeadline(_ref3) {
  let {
    children
  } = _ref3,
      restProps = authorization_objectWithoutProperties(_ref3, authorization_excluded3);

  return /*#__PURE__*/jsx_runtime.jsx(Headline, authorization_objectSpread(authorization_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Authorization.Text = function AuthorizationText(_ref4) {
  let {
    children
  } = _ref4,
      restProps = authorization_objectWithoutProperties(_ref4, authorization_excluded4);

  return /*#__PURE__*/jsx_runtime.jsx(login_Text, authorization_objectSpread(authorization_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Authorization.GalleryButton = function AuthorizationGalleryButton(_ref5) {
  let {
    children
  } = _ref5,
      restProps = authorization_objectWithoutProperties(_ref5, authorization_excluded5);

  return /*#__PURE__*/jsx_runtime.jsx(GalleryButton, authorization_objectSpread(authorization_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Authorization.FormContainer = function AuthorizationFormContainer(_ref6) {
  let {
    children
  } = _ref6,
      restProps = authorization_objectWithoutProperties(_ref6, authorization_excluded6);

  return /*#__PURE__*/jsx_runtime.jsx(FormContainer, authorization_objectSpread(authorization_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Authorization.Form = function AuthorizationForm(_ref7) {
  let {
    children
  } = _ref7,
      restProps = authorization_objectWithoutProperties(_ref7, authorization_excluded7);

  return /*#__PURE__*/jsx_runtime.jsx(login_Form, authorization_objectSpread(authorization_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Authorization.Group = function AuthorizationGroup(_ref8) {
  let {
    children
  } = _ref8,
      restProps = authorization_objectWithoutProperties(_ref8, authorization_excluded8);

  return /*#__PURE__*/jsx_runtime.jsx(login_Group, authorization_objectSpread(authorization_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Authorization.FormHeadline = function AuthorizationFormHeadline(_ref9) {
  let {
    children
  } = _ref9,
      restProps = authorization_objectWithoutProperties(_ref9, authorization_excluded9);

  return /*#__PURE__*/jsx_runtime.jsx(FormHeadline, authorization_objectSpread(authorization_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Authorization.Label = function AuthorizationLabel(_ref10) {
  let {
    children
  } = _ref10,
      restProps = authorization_objectWithoutProperties(_ref10, authorization_excluded10);

  return /*#__PURE__*/jsx_runtime.jsx(Label, authorization_objectSpread(authorization_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Authorization.Error = function AuthorizationError(_ref11) {
  let {
    children
  } = _ref11,
      restProps = authorization_objectWithoutProperties(_ref11, authorization_excluded11);

  return /*#__PURE__*/jsx_runtime.jsx(Error, authorization_objectSpread(authorization_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Authorization.Input = function AuthorizationInput(_ref12) {
  let {
    children
  } = _ref12,
      restProps = authorization_objectWithoutProperties(_ref12, authorization_excluded12);

  return /*#__PURE__*/jsx_runtime.jsx(login_Input, authorization_objectSpread(authorization_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Authorization.Break = function AuthorizationBreak(_ref13) {
  let {
    children
  } = _ref13,
      restProps = authorization_objectWithoutProperties(_ref13, authorization_excluded13);

  return /*#__PURE__*/jsx_runtime.jsx(login_Break, authorization_objectSpread(authorization_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Authorization.LinkContainer = function AuthorizationLinkContainer(_ref14) {
  let {
    children
  } = _ref14,
      restProps = authorization_objectWithoutProperties(_ref14, authorization_excluded14);

  return /*#__PURE__*/jsx_runtime.jsx(LinkContainer, authorization_objectSpread(authorization_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Authorization.Link = function AuthorizationLink(_ref15) {
  let {
    children
  } = _ref15,
      restProps = authorization_objectWithoutProperties(_ref15, authorization_excluded15);

  return /*#__PURE__*/jsx_runtime.jsx(login_Link, authorization_objectSpread(authorization_objectSpread({}, restProps), {}, {
    children: children
  }));
};
;// CONCATENATED MODULE: ./src/components/spinner/styles/spinner.js

const spinner_LockBody = (0,styled_components_cjs/* createGlobalStyle */.vJ)(["body{overflow:hidden;}"]);
const spinner_ReleaseBody = (0,styled_components_cjs/* createGlobalStyle */.vJ)(["body{overflow:visible;}"]);
const spinner_Spinner = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "spinner__Spinner",
  componentId: "sc-1484cpk-0"
})(["position:fixed;width:100%;height:100%;background-color:rgba(0,0,0,0);z-index:4999;:after{content:'';position:absolute;top:43%;left:31.75%;background-image:url(/images/misc/spinner.png);background-size:contain;background-repeat:no-repeat;width:75px;height:75px;animation-name:spin;animation-duration:1000ms;animation-iteration-count:infinite;animation-timing-function:linear;}@media (min-width:1000px){:after{left:15.5%;}}@media (min-width:1440px){:after{left:17%;}}@media (min-width:1680px){:after{left:17.5%;}}@media (min-width:1920px){:after{left:17.75%;}}@media (min-width:2560px){:after{left:18.35%;}}@-ms-keyframes spin{from{-ms-transform:rotate(0deg);}to{-ms-transform:rotate(360deg);}}@-moz-keyframes spin{from{-moz-transform:rotate(0deg);}to{-moz-transform:rotate(360deg);}}@-webkit-keyframes spin{from{-webkit-transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);}}@keyframes spin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}"]);
const spinner_Picture = styled_components_cjs/* default.img.withConfig */.ZP.img.withConfig({
  displayName: "spinner__Picture",
  componentId: "sc-1484cpk-1"
})(["width:50px;height:50px;position:absolute;top:50%;left:50%;margin-top:-100px;margin-left:-22px;"]);
;// CONCATENATED MODULE: ./src/components/spinner/index.js
const spinner_excluded = ["src"];

function spinner_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function spinner_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { spinner_ownKeys(Object(source), true).forEach(function (key) { spinner_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { spinner_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function spinner_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function spinner_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = spinner_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function spinner_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function spinner_Loading(_ref) {
  let {
    src
  } = _ref,
      restProps = spinner_objectWithoutProperties(_ref, spinner_excluded);

  return /*#__PURE__*/jsx_runtime.jsx(spinner_Spinner, spinner_objectSpread(spinner_objectSpread({}, restProps), {}, {
    children: /*#__PURE__*/jsx_runtime.jsx(spinner_LockBody, {})
  }));
}

spinner_Loading.ReleaseBody = function LoadingReleaseBody() {
  return /*#__PURE__*/jsx_runtime.jsx(spinner_ReleaseBody, {});
};
;// CONCATENATED MODULE: ./src/components/index.js











/***/ }),

/***/ 55039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Jumbotron)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(60027);
;// CONCATENATED MODULE: ./src/components/jumbotron/styles/jumbotron.js

const Inner = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "jumbotron__Inner",
  componentId: "sc-1ftiq0d-0"
})(["display:flex;align-items:center;justify-content:space-between;flex-direction:", ";max-width:1100px;margin:auto;width:100%;@media (max-width:1000px){flex-direction:column;}"], ({
  direction
}) => direction);
const Pane = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "jumbotron__Pane",
  componentId: "sc-1ftiq0d-1"
})(["width:50%;@media (max-width:1000px){width:100%;padding:0 45px;text-align:center;}"]);
const Title = styled_components_cjs/* default.h2.withConfig */.ZP.h2.withConfig({
  displayName: "jumbotron__Title",
  componentId: "sc-1ftiq0d-2"
})(["font-size:30px;line-height:1.1;margin-bottom:8px;color:#aaa;@media (min-width:1000px){font-size:50px;}"]);
const SubTitle = styled_components_cjs/* default.h3.withConfig */.ZP.h3.withConfig({
  displayName: "jumbotron__SubTitle",
  componentId: "sc-1ftiq0d-3"
})(["font-size:18px;font-weight:normal;line-height:normal;color:#aaa;@media (min-width:1000px){font-size:26px;}"]);
const Image = styled_components_cjs/* default.img.withConfig */.ZP.img.withConfig({
  displayName: "jumbotron__Image",
  componentId: "sc-1ftiq0d-4"
})(["max-width:90%;height:auto;margin-top:3vh;"]);
const Item = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "jumbotron__Item",
  componentId: "sc-1ftiq0d-5"
})(["display:flex;border-bottom:8px solid #222;padding:50px 5%;color:white;overflow:hidden;"]);
const Container = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "jumbotron__Container",
  componentId: "sc-1ftiq0d-6"
})(["@media (max-width:1000px){", ":last-of-type h2{margin-bottom:50px;}}"], Item);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/jumbotron/index.js
const _excluded = ["children", "direction"],
      _excluded2 = ["children"],
      _excluded3 = ["children"],
      _excluded4 = ["children"],
      _excluded5 = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function Jumbotron(_ref) {
  let {
    children,
    direction = 'row'
  } = _ref,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/jsx_runtime.jsx(Item, _objectSpread(_objectSpread({}, restProps), {}, {
    children: /*#__PURE__*/jsx_runtime.jsx(Inner, {
      direction: direction,
      children: children
    })
  }));
}

Jumbotron.Container = function JumbotronContainer(_ref2) {
  let {
    children
  } = _ref2,
      restProps = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/jsx_runtime.jsx(Container, _objectSpread(_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Jumbotron.Pane = function JumbotronPane(_ref3) {
  let {
    children
  } = _ref3,
      restProps = _objectWithoutProperties(_ref3, _excluded3);

  return /*#__PURE__*/jsx_runtime.jsx(Pane, _objectSpread(_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Jumbotron.Title = function JumbotronTitle(_ref4) {
  let {
    children
  } = _ref4,
      restProps = _objectWithoutProperties(_ref4, _excluded4);

  return /*#__PURE__*/jsx_runtime.jsx(Title, _objectSpread(_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Jumbotron.SubTitle = function JumbotronSubTitle(_ref5) {
  let {
    children
  } = _ref5,
      restProps = _objectWithoutProperties(_ref5, _excluded5);

  return /*#__PURE__*/jsx_runtime.jsx(SubTitle, _objectSpread(_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Jumbotron.Image = function JumbotronImage(_ref6) {
  let restProps = Object.assign({}, _ref6);
  return /*#__PURE__*/jsx_runtime.jsx(Image, _objectSpread({}, restProps));
};

/***/ })

};
;