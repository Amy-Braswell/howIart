"use strict";
exports.id = 280;
exports.ids = [280];
exports.modules = {

/***/ 8371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "eJ": () => (/* binding */ fetchAllExhibits)
/* harmony export */ });
/* unused harmony export selectAllExhibits */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47389);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31650);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16498);


 // TODO - SET UP ERROR HANDLING
// DATA IS NOT PASSED TO STORE IF QUERY HAS AN ERROR

const initialState = [];
const fetchAllExhibits = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('fetchAllExhibits', async () => {
  const allExhibitsData = await aws_amplify__WEBPACK_IMPORTED_MODULE_1__.API.graphql({
    query: _graphql_queries__WEBPACK_IMPORTED_MODULE_2__/* .currentExhibits */ .ll
  });
  const apiResponse = allExhibitsData.data.listExhibits.items; // shuffle api response to randomize exhibit display

  function randomArrayShuffle(array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  const response = randomArrayShuffle(apiResponse);
  return response;
});
const exhibitsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'exhibits',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllExhibits.fulfilled]: (state, action) => {
      return action.payload;
    }
  }
}); // The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

const selectAllExhibits = state => state.allExhibits.value;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exhibitsSlice.reducer);

/***/ }),

/***/ 55115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "An": () => (/* binding */ fetchFeaturedExhibit),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export selectFeaturedExhibits */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47389);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31650);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16498);



const fetchFeaturedExhibit = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('fetchFeaturedExhibit', async () => {
  const featuredExhibitData = await aws_amplify__WEBPACK_IMPORTED_MODULE_1__.API.graphql({
    query: _graphql_queries__WEBPACK_IMPORTED_MODULE_2__/* .getFeaturedExhibit */ .LA
  });
  const response = featuredExhibitData.data.listExhibits.items[0];
  return response;
});
const featuredExhibitSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'featuredExhibit',
  initialState: {
    featuredExhibit: null
  },
  reducers: {},
  extraReducers: {
    [fetchFeaturedExhibit.fulfilled]: (state, action) => {
      return action.payload;
    }
  }
}); // The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

const selectFeaturedExhibits = state => state.featuredExhibit.value;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (featuredExhibitSlice.reducer);

/***/ }),

/***/ 16498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LA": () => (/* binding */ getFeaturedExhibit),
/* harmony export */   "ll": () => (/* binding */ currentExhibits)
/* harmony export */ });
/* unused harmony exports getGallery, listGalleries, getExhibit, listExhibits, getArtwork, listArtworks */
/* eslint-disable */
// this is an auto generated file. This will be overwritten
const getFeaturedExhibit =
/* GraphQL */
`
query getFeaturedExhibit {
  listExhibits(filter: {tags: {contains: "featured"}}) {
    items {
      id
      gallery {
        id
        name
        logo
      }
      title
      artist
      date
      endDate
      showHero
      showDescription
      startDate
      walkthrough
    }
  }
}
`; // end date greater than is hard-coded in for Feb 8, 2021

const currentExhibits =
/* GraphQL */
`
query currentExhibits {               
  listExhibits {
    items {
      artist
      curator
      date
      endDate
      exhibitGalleryId
      id
      gallery {
        streetAddress
        email
        id
        logo
        name
        phone
        website
      }
      media
      showDescription
      showHero
      showHeroPhone
      showTeaser
      startDate
      status
      title
      walkthroughStill
    }
  }
}
`;
const getGallery =
/* GraphQL */
(/* unused pure expression or super */ null && (`
  query GetGallery($id: ID!) {
    getGallery(id: $id) {
      id
      name
      logo
      phone
      streetAddress
      city
      state
      postalCode
      email
      website
      exhibits {
        items {
          id
          exhibitGalleryId
          showHero
          showHeroPhone
          title
          media
          date
          ups
          downs
          startDate
          endDate
          artist
          curator
          showTeaser
          showDescription
          tags
          status
          walkthrough
          walkthroughStill
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`));
const listGalleries =
/* GraphQL */
(/* unused pure expression or super */ null && (`
  query ListGalleries(
    $filter: ModelGalleryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGalleries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        logo
        phone
        streetAddress
        city
        state
        postalCode
        email
        website
        exhibits {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`));
const getExhibit =
/* GraphQL */
(/* unused pure expression or super */ null && (`
  query GetExhibit($id: ID!) {
    getExhibit(id: $id) {
      id
      exhibitGalleryId
      showHero
      showHeroPhone
      title
      media
      date
      ups
      downs
      startDate
      endDate
      artist
      curator
      showTeaser
      showDescription
      tags
      includedArtworks {
        id
        artworkExhibitId
        artist
        title
        date
        medium
        dimensions
        image
        exhibit {
          id
          exhibitGalleryId
          showHero
          showHeroPhone
          title
          media
          date
          ups
          downs
          startDate
          endDate
          artist
          curator
          showTeaser
          showDescription
          tags
          status
          walkthrough
          walkthroughStill
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      status
      walkthrough
      walkthroughStill
      gallery {
        id
        name
        logo
        phone
        streetAddress
        city
        state
        postalCode
        email
        website
        exhibits {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      artworks {
        items {
          id
          artworkExhibitId
          artist
          title
          date
          medium
          dimensions
          image
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`));
const listExhibits =
/* GraphQL */
(/* unused pure expression or super */ null && (`
  query ListExhibits(
    $filter: ModelExhibitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExhibits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        exhibitGalleryId
        showHero
        showHeroPhone
        title
        media
        date
        ups
        downs
        startDate
        endDate
        artist
        curator
        showTeaser
        showDescription
        tags
        includedArtworks {
          id
          artworkExhibitId
          artist
          title
          date
          medium
          dimensions
          image
          createdAt
          updatedAt
          owner
        }
        status
        walkthrough
        walkthroughStill
        gallery {
          id
          name
          logo
          phone
          streetAddress
          city
          state
          postalCode
          email
          website
          createdAt
          updatedAt
          owner
        }
        artworks {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`));
const getArtwork =
/* GraphQL */
(/* unused pure expression or super */ null && (`
  query GetArtwork($id: ID!) {
    getArtwork(id: $id) {
      id
      artworkExhibitId
      artist
      title
      date
      medium
      dimensions
      image
      exhibit {
        id
        exhibitGalleryId
        showHero
        showHeroPhone
        title
        media
        date
        ups
        downs
        startDate
        endDate
        artist
        curator
        showTeaser
        showDescription
        tags
        includedArtworks {
          id
          artworkExhibitId
          artist
          title
          date
          medium
          dimensions
          image
          createdAt
          updatedAt
          owner
        }
        status
        walkthrough
        walkthroughStill
        gallery {
          id
          name
          logo
          phone
          streetAddress
          city
          state
          postalCode
          email
          website
          createdAt
          updatedAt
          owner
        }
        artworks {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`));
const listArtworks =
/* GraphQL */
(/* unused pure expression or super */ null && (`
  query ListArtworks(
    $filter: ModelArtworkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArtworks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        artworkExhibitId
        artist
        title
        date
        medium
        dimensions
        image
        exhibit {
          id
          exhibitGalleryId
          showHero
          showHeroPhone
          title
          media
          date
          ups
          downs
          startDate
          endDate
          artist
          curator
          showTeaser
          showDescription
          tags
          status
          walkthrough
          walkthroughStill
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`));

/***/ }),

/***/ 94331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/aws-amplify/lib/index.js
var lib = __webpack_require__(31650);
;// CONCATENATED MODULE: ./src/aws-exports.js
/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.
const awsmobile = {
  "aws_project_region": "us-east-2",
  "aws_cognito_identity_pool_id": "us-east-2:d3d73343-027c-42ad-844a-7d1a90e30ab5",
  "aws_cognito_region": "us-east-2",
  "aws_user_pools_id": "us-east-2_oApYnHqC9",
  "aws_user_pools_web_client_id": "11i4erbc0p3q7v4tn9anu77usa",
  "oauth": {},
  "aws_cognito_username_attributes": ["EMAIL"],
  "aws_cognito_social_providers": [],
  "aws_cognito_signup_attributes": ["EMAIL"],
  "aws_cognito_mfa_configuration": "OFF",
  "aws_cognito_mfa_types": ["SMS"],
  "aws_cognito_password_protection_settings": {
    "passwordPolicyMinLength": 8,
    "passwordPolicyCharacters": []
  },
  "aws_cognito_verification_mechanisms": ["EMAIL"],
  "aws_appsync_graphqlEndpoint": "https://frzk43d34fezfcp5ct2ax7t5ka.appsync-api.us-east-2.amazonaws.com/graphql",
  "aws_appsync_region": "us-east-2",
  "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS",
  "aws_appsync_apiKey": "da2-glt7nj7upnc2pcuuapnz5ftiju"
};
/* harmony default export */ const aws_exports = (awsmobile);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/ui-react/dist/styles.css
var styles = __webpack_require__(34144);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var react_redux_lib = __webpack_require__(37424);
// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(47389);
// EXTERNAL MODULE: ./src/components/reduxFeatures/exhibits/exhibitsSlice.js
var exhibitsSlice = __webpack_require__(8371);
// EXTERNAL MODULE: ./src/components/reduxFeatures/featuredExhibit/featuredExhibitSlice.js
var featuredExhibitSlice = __webpack_require__(55115);
;// CONCATENATED MODULE: ./src/components/reduxFeatures/selectionSlice/selectionSlice.js

const SelectionFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_NEW: 'SHOW_NEW',
  SHOW_ENDING: 'SHOW_ENDING'
};
const selectionSlice = (0,redux_toolkit_cjs_production_min.createSlice)({
  name: 'SelectionFilters',
  initialState: SelectionFilters.SHOW_ALL,
  reducers: {
    setSelectionFilter(state, action) {
      return action.payload;
    }

  }
});
const {
  SelectionFilter
} = selectionSlice.actions;
const selectSelectionFilter = state => state.selectionFilter.value;
/* harmony default export */ const selectionSlice_selectionSlice = (selectionSlice.reducer);
;// CONCATENATED MODULE: ./src/components/reduxFeatures/Redux/reducers/user.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Redux-persist is not currently installed so data will not persist between sessions
// user info throughout app is coming from amplify Auth methods
const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return _objectSpread(_objectSpread({}, state), {}, {
        user: action.payload
      });

    case 'SIGN_UP':
      return _objectSpread(_objectSpread({}, state), {}, {
        user: action.payload
      });

    case 'SIGN_OUT':
      return _objectSpread(_objectSpread({}, state), {}, {
        user: null
      });

    default:
      return state;
  }
}; // Selector


const selectUser = state => state.user.value;
/* harmony default export */ const user = (userReducer);
;// CONCATENATED MODULE: ./src/components/reduxFeatures/Redux/reducers/item.js
function item_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function item_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { item_ownKeys(Object(source), true).forEach(function (key) { item_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { item_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function item_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const itemReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ITEM':
      return item_objectSpread(item_objectSpread({}, state), {}, {
        item: action.payload
      });

    case 'REMOVE_ITEM':
      return item_objectSpread(item_objectSpread({}, state), {}, {
        item: {}
      });

    default:
      return state;
  }
}; // Selector


const selectItem = state => state.item.value;
/* harmony default export */ const item = (itemReducer);
;// CONCATENATED MODULE: ./src/components/reduxFeatures/Redux/reducers/error.js
const error = (state = '', action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return state + action.payload;

    case 'CLEAR_ERROR':
      return state = '';

    default:
      return state;
  }
}; // Selector


const selectError = state => state.error.value;
/* harmony default export */ const reducers_error = (error);
;// CONCATENATED MODULE: ./src/components/reduxFeatures/Redux/reducers/loading.js
// Reducer
const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'LOADING':
      return state = true;

    case 'LOADED':
      return state = false;

    default:
      return state;
  }
}; // Selector


const selectLoading = state => state.loading.value;
/* harmony default export */ const loading = (loadingReducer);
;// CONCATENATED MODULE: ./src/store.js








/* harmony default export */ const store = ((0,redux_toolkit_cjs_production_min.configureStore)({
  reducer: {
    allExhibits: exhibitsSlice/* default */.ZP,
    error: reducers_error,
    featuredExhibit: featuredExhibitSlice/* default */.ZP,
    loading: loading,
    selectionFilter: selectionSlice_selectionSlice,
    user: user,
    item: item
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  })
}));
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(60027);
;// CONCATENATED MODULE: ./styles/global-styles.js
 // added map background and background-size to html

const GlobalStyles = (0,styled_components_cjs/* createGlobalStyle */.vJ)(["::-webkit-scrollbar{width:0px;background:transparent;}:root{--amplify-primary-color:#ff0000;--amplify-primary-tint:#ff0000;--amplify-primary-shade:#ff0000;}*,*:before,*:after{box-sizing:border-box;}html,body{height:100%;padding:0;margin:0;font-family:-apple-system,Roboto,sans-serif;letter-spacing:0.06em;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background:url('https://res.cloudinary.com/amy-braswell/image/upload/e_brightness:-89/v1603234930/iArt-Chicago/Chicago_Bkgrnd_ycg0h7.jpg');background-color:rgba(0,0,0,.9);background-size:900px;color:#666666;font-size:16px;}iframe{position:absolute;top:0;left:0;width:100%;height:100%;border:0;}.auth-button{background:#e50914;color:#fff;cursor:pointer;margin-bottom:0;text-transform:uppercase;width:100%;border-radius:5px;height:35px;border-color:transparent;box-shadow:0px;outline:none;transition:0.15s;text-align:center;&:active{background-color:#f1ac15;}&:hover{background:#f40612;}.white{color:white !important;}input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,input:-internal-autofill-selected{border:1px solid white;border-top:none;border-left:none;border-right:none;resize:none;font-size:16px;border-radius:0;-webkit-box-shadow:none;-webkit-text-fill-color:white;color:white;box-shadow:0 0 1000px 1000px  rgba(13,13,13,1) inset;outline:none;background-color:red !important;}.opt-input:-webkit-autofill,.opt-input:-webkit-autofill:hover,.opt-input:-webkit-autofill:focus,.opt-input:-internal-autofill-selected{border:1px solid white;border-top:none;border-left:none;border-right:none;resize:none;font-size:16px;border-radius:0;-webkit-box-shadow:none;-webkit-text-fill-color:black;color:white;box-shadow:0 0 1000px 1000px  rgba(255,255,255,1) inset;outline:none;background-color:black;}"]);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/pages/_app.js
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




lib.Amplify.configure(aws_exports);






function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime.jsx(react_redux_lib.Provider, {
    store: store,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "page-content",
      children: [/*#__PURE__*/jsx_runtime.jsx(GlobalStyles, {}), /*#__PURE__*/jsx_runtime.jsx(Component, _app_objectSpread({}, pageProps))]
    })
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 74859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyDocument)
});

// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(56859);
;// CONCATENATED MODULE: ./lib/gtag.js
const GA_TRACKING_ID = 'G-S4VVDDEJR4'; // https://developers.google.com/analytics/devguides/collection/gtagjs/pages

const pageview = url => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  });
}; // https://developers.google.com/analytics/devguides/collection/gtagjs/events

const gtag_event = ({
  action,
  category,
  label,
  value
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
};
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(60027);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/pages/_document.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // Import styled components ServerStyleSheet




class MyDocument extends next_document["default"] {
  static getInitialProps({
    renderPage
  }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new styled_components_cjs/* ServerStyleSheet */.qH(); // Step 2: Retrieve styles from components in the page

    const page = renderPage(App => props => sheet.collectStyles( /*#__PURE__*/jsx_runtime.jsx(App, _objectSpread({}, props)))); // Step 3: Extract the styles as <style> tags

    const styleTags = sheet.getStyleElement(); // Step 4: Pass styleTags as a prop

    return _objectSpread(_objectSpread({}, page), {}, {
      styleTags
    });
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(next_document.Html, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(next_document.Head, {
        children: [this.props.styleTags, /*#__PURE__*/jsx_runtime.jsx("script", {
          async: true,
          src: `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
        }), /*#__PURE__*/jsx_runtime.jsx("script", {
          dangerouslySetInnerHTML: {
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
          }
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("body", {
        children: [/*#__PURE__*/jsx_runtime.jsx(next_document.Main, {}), /*#__PURE__*/jsx_runtime.jsx(next_document.NextScript, {})]
      })]
    });
  }

}

/***/ }),

/***/ 97020:
/***/ ((module) => {

module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-5cd94c89d3acac5f.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/f5qqVTPHFr4TpCjNAf2z1/_buildManifest.js","static/f5qqVTPHFr4TpCjNAf2z1/_ssgManifest.js","static/f5qqVTPHFr4TpCjNAf2z1/_middlewareManifest.js"],"pages":{"/":["static/chunks/webpack-fca1b25251d816c7.js","static/chunks/framework-e38b423892be3da3.js","static/chunks/main-fa8b5c2f94d8018d.js","static/chunks/278-0d3e55b935dbac7c.js","static/chunks/807-f02596c6713ada76.js","static/chunks/pages/index-9a61acbfc07afac0.js"],"/_app":["static/chunks/webpack-fca1b25251d816c7.js","static/chunks/framework-e38b423892be3da3.js","static/chunks/main-fa8b5c2f94d8018d.js","static/css/c0b7b7eeef4ac794.css","static/chunks/pages/_app-71ba8f7212f57977.js"],"/_error":["static/chunks/webpack-fca1b25251d816c7.js","static/chunks/framework-e38b423892be3da3.js","static/chunks/main-fa8b5c2f94d8018d.js","static/chunks/pages/_error-427958541d1e32b7.js"],"/browse":["static/chunks/webpack-fca1b25251d816c7.js","static/chunks/framework-e38b423892be3da3.js","static/chunks/main-fa8b5c2f94d8018d.js","static/chunks/cb1608f2-baa1499aa05927a9.js","static/chunks/50-a098ac6d5d5f60bb.js","static/chunks/807-f02596c6713ada76.js","static/chunks/pages/browse-d4d907dac6be4535.js"],"/changepassword":["static/chunks/webpack-fca1b25251d816c7.js","static/chunks/framework-e38b423892be3da3.js","static/chunks/main-fa8b5c2f94d8018d.js","static/chunks/807-f02596c6713ada76.js","static/chunks/pages/changepassword-5ade67f8dd902ba1.js"],"/confirmchanges":["static/chunks/webpack-fca1b25251d816c7.js","static/chunks/framework-e38b423892be3da3.js","static/chunks/main-fa8b5c2f94d8018d.js","static/chunks/807-f02596c6713ada76.js","static/chunks/pages/confirmchanges-b051f05f49b597ef.js"],"/exhibit/[id]":["static/chunks/webpack-fca1b25251d816c7.js","static/chunks/framework-e38b423892be3da3.js","static/chunks/main-fa8b5c2f94d8018d.js","static/chunks/pages/exhibit/[id]-b06e1a204a7be8f6.js"],"/forgotpassword":["static/chunks/webpack-fca1b25251d816c7.js","static/chunks/framework-e38b423892be3da3.js","static/chunks/main-fa8b5c2f94d8018d.js","static/chunks/807-f02596c6713ada76.js","static/chunks/pages/forgotpassword-87ada822eb8fe185.js"],"/forgotpasswordverification":["static/chunks/webpack-fca1b25251d816c7.js","static/chunks/framework-e38b423892be3da3.js","static/chunks/main-fa8b5c2f94d8018d.js","static/chunks/807-f02596c6713ada76.js","static/chunks/pages/forgotpasswordverification-b035cfc40392cef5.js"],"/login":["static/chunks/webpack-fca1b25251d816c7.js","static/chunks/framework-e38b423892be3da3.js","static/chunks/main-fa8b5c2f94d8018d.js","static/chunks/807-f02596c6713ada76.js","static/chunks/pages/login-fa7a2299c56b4399.js"],"/register":["static/chunks/webpack-fca1b25251d816c7.js","static/chunks/framework-e38b423892be3da3.js","static/chunks/main-fa8b5c2f94d8018d.js","static/chunks/807-f02596c6713ada76.js","static/chunks/pages/register-be8167fe621fdd51.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 73978:
/***/ ((module) => {

module.exports = JSON.parse('{"../../node_modules/next/dist/client/index.js -> ../pages/_error":{"id":9894,"files":["static/chunks/894.9047cda612e8fce0.js"]}}');

/***/ }),

/***/ 59450:
/***/ ((module) => {

module.exports = {"Dg":[]};

/***/ })

};
;