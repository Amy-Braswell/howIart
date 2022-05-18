"use strict";
exports.id = 149;
exports.ids = [149];
exports.modules = {

/***/ 69171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ ClearError),
/* harmony export */   "k": () => (/* binding */ SetError)
/* harmony export */ });
const SetError = err => {
  return {
    type: 'SET_ERROR',
    payload: err
  };
};
const ClearError = () => {
  return {
    type: 'CLEAR_ERROR'
  };
};

/***/ }),

/***/ 35924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ Loading),
/* harmony export */   "s": () => (/* binding */ Loaded)
/* harmony export */ });
const Loading = () => {
  return {
    type: 'LOADING'
  };
};
const Loaded = () => {
  return {
    type: 'LOADED'
  };
};

/***/ }),

/***/ 40451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function validateForm(event, state) {
  // clear all error messages
  const inputs = document.getElementsByClassName("is-danger");

  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].classList.contains("error")) {
      inputs[i].classList.remove("is-danger");
    }
  }

  if (state.hasOwnProperty("nickname") && state.nickname === "") {
    document.getElementById("nickname").classList.add("is-danger");
    return "Name cannot be empty";
  }

  if (state.hasOwnProperty("email") && state.email === "") {
    document.getElementById("email").classList.add("is-danger");
    return "Email cannot be empty";
  }

  if (state.hasOwnProperty("verificationcode") && state.verificationcode === "") {
    document.getElementById("verificationcode").classList.add("is-danger");
    return "Verification code cannot be empty";
  }

  if (state.hasOwnProperty("password") && state.password === "") {
    document.getElementById("password").classList.add("is-danger");
    return "Password cannot be empty";
  }

  if (state.hasOwnProperty("oldpassword") && state.oldpassword === "") {
    document.getElementById("oldpassword").classList.add("is-danger");
    return "Old password cannot be empty";
  }

  if (state.hasOwnProperty("newpassword") && state.newpassword === "") {
    document.getElementById("newpassword").classList.add("is-danger");
    return "New password cannot be empty";
  }

  if (state.hasOwnProperty("confirmpassword") && state.confirmpassword === "") {
    document.getElementById("confirmpassword").classList.add("is-danger");
    return "Confirm password cannot be empty";
  }

  if (state.hasOwnProperty("password") && state.hasOwnProperty("confirmpassword") && state.password !== state.confirmpassword) {
    document.getElementById("password").classList.add("is-danger");
    document.getElementById("confirmpassword").classList.add("is-danger");
    return "Passwords must match";
  }

  if (state.hasOwnProperty("newpassword") && state.hasOwnProperty("confirmpassword") && state.newpassword !== state.confirmpassword) {
    document.getElementById("newpassword").classList.add("is-danger");
    document.getElementById("confirmpassword").classList.add("is-danger");
    return "Passwords must match";
  }

  return;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateForm);

/***/ })

};
;