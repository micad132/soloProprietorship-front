exports.id = 160;
exports.ids = [160];
exports.modules = {

/***/ 9979:
/***/ ((module) => {

// Exports
module.exports = {
	"formWrapper": "Components_formWrapper__CqY3m",
	"errorWrapper": "Components_errorWrapper__V0LZT"
};


/***/ }),

/***/ 655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9979);
/* harmony import */ var _Components_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Components_module_scss__WEBPACK_IMPORTED_MODULE_1__);


const AuthorizationWrapper = ({ children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_Components_module_scss__WEBPACK_IMPORTED_MODULE_1___default().formWrapper),
        children: children
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthorizationWrapper);


/***/ }),

/***/ 7468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9979);
/* harmony import */ var _Components_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Components_module_scss__WEBPACK_IMPORTED_MODULE_1__);


const ErrorComponent = ({ errorMsg  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_Components_module_scss__WEBPACK_IMPORTED_MODULE_1___default().errorWrapper),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: errorMsg
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorComponent);


/***/ }),

/***/ 3794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ErrorComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7468);



const PasswordFieldComponent = ({ value , setPasswordValue , isError , errorMsg  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                id: "outlined-required",
                label: "Hasło",
                type: "password",
                value: value,
                onChange: setPasswordValue
            }),
            isError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ErrorComponent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                errorMsg: errorMsg
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordFieldComponent);


/***/ }),

/***/ 2139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ErrorComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7468);



const TextFieldComponent = ({ value , setLoginValues , isError , label , errorMsg  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                id: "outlined-required",
                label: label,
                value: value,
                onChange: setLoginValues
            }),
            isError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ErrorComponent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                errorMsg: errorMsg
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextFieldComponent);


/***/ }),

/***/ 9178:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_D": () => (/* binding */ validateLogin),
/* harmony export */   "p3": () => (/* binding */ validateRegister),
/* harmony export */   "tS": () => (/* binding */ sanitizeData)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1320);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__]);
zod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const RegistrationSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    name: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(5).max(20).refine((val)=>!val.includes("&") && !val.includes("<"), {
        message: "Forbidden chars!",
        path: [
            "forbiddenName"
        ]
    }),
    surname: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(5).max(15),
    email: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().email(),
    password: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(5).max(20),
    confirmPassword: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(5).max(20),
    postalCode: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().regex(/^\d{2}-\d{3}$/),
    cityName: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(5).max(20)
}).refine((data)=>data.password === data.confirmPassword, {
    message: "Passwords don't match"
});
const LoginSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    email: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().email(),
    password: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(5).max(20)
});
const validateRegister = (registerValues)=>{
    // try {
    //     RegistrationSchema.parse(registerValues);
    // } catch (e: any) {
    //     if (e instanceof z.ZodError) {
    //         console.log(e.issues);
    //     }
    // }
    return RegistrationSchema.safeParse(registerValues);
};
const validateLogin = (loginValues)=>{
    return LoginSchema.safeParse(loginValues);
};
const sanitizeData = (value)=>(0,dompurify__WEBPACK_IMPORTED_MODULE_1__.sanitize)(value, {
        USE_PROFILES: {
            html: false
        }
    }); // export const validateLogin = (loginValues: LoginType) => {
 //     try {
 //         LoginSchema.parse(loginValues);
 //     } catch (e: any) {
 //         if(e instanceof z.ZodError) {
 //             throw e;
 //         }
 //     }
 // }

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;