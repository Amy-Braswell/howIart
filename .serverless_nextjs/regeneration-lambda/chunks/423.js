"use strict";
exports.id = 423;
exports.ids = [423];
exports.modules = {

/***/ 32379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mo": () => (/* binding */ SignUp),
/* harmony export */   "cL": () => (/* binding */ SignIn),
/* harmony export */   "lv": () => (/* binding */ SignOut)
/* harmony export */ });
// Redux-persist is not currently installed so data will not persist between sessions
// user info throughout app is coming from amplify Auth methods
const SignIn = email => {
  return {
    type: 'SIGN_IN',
    payload: email
  };
};
const SignUp = email => {
  return {
    type: 'SIGN_UP',
    payload: email
  };
};
const SignOut = () => {
  return {
    type: 'SIGN_OUT'
  };
};

/***/ }),

/***/ 56962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ FooterContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94228);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);




function FooterContainer() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Outer */ .Z.Outer, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components_footer__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Inner */ .Z.Inner, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Title */ .Z.Title, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Link */ .Z.Link, {
            href: "mailto:amy@iart-gallerywalks.com",
            children: "Questions? Contact us."
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Break */ .Z.Break, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Break */ .Z.Break, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Break */ .Z.Break, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Text */ .Z.Text, {
          children: "\xA9 iArt Walks, LLC"
        })]
      })
    })
  });
}

/***/ })

};
;