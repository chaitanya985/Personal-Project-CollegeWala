"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/edgestore/[...edgestore]/route";
exports.ids = ["app/api/edgestore/[...edgestore]/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fedgestore%2F%5B...edgestore%5D%2Froute&page=%2Fapi%2Fedgestore%2F%5B...edgestore%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fedgestore%2F%5B...edgestore%5D%2Froute.ts&appDir=E%3A%5Cnew-Projects%5Ccollege-finder%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cnew-Projects%5Ccollege-finder&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fedgestore%2F%5B...edgestore%5D%2Froute&page=%2Fapi%2Fedgestore%2F%5B...edgestore%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fedgestore%2F%5B...edgestore%5D%2Froute.ts&appDir=E%3A%5Cnew-Projects%5Ccollege-finder%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cnew-Projects%5Ccollege-finder&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_new_Projects_college_finder_app_api_edgestore_edgestore_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/edgestore/[...edgestore]/route.ts */ \"(rsc)/./app/api/edgestore/[...edgestore]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/edgestore/[...edgestore]/route\",\n        pathname: \"/api/edgestore/[...edgestore]\",\n        filename: \"route\",\n        bundlePath: \"app/api/edgestore/[...edgestore]/route\"\n    },\n    resolvedPagePath: \"E:\\\\new-Projects\\\\college-finder\\\\app\\\\api\\\\edgestore\\\\[...edgestore]\\\\route.ts\",\n    nextConfigOutput,\n    userland: E_new_Projects_college_finder_app_api_edgestore_edgestore_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/edgestore/[...edgestore]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZlZGdlc3RvcmUlMkYlNUIuLi5lZGdlc3RvcmUlNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmVkZ2VzdG9yZSUyRiU1Qi4uLmVkZ2VzdG9yZSU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmVkZ2VzdG9yZSUyRiU1Qi4uLmVkZ2VzdG9yZSU1RCUyRnJvdXRlLnRzJmFwcERpcj1FJTNBJTVDbmV3LVByb2plY3RzJTVDY29sbGVnZS1maW5kZXIlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUUlM0ElNUNuZXctUHJvamVjdHMlNUNjb2xsZWdlLWZpbmRlciZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDK0I7QUFDNUc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2xsZWdlLWZpbmRlci8/MmYzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJFOlxcXFxuZXctUHJvamVjdHNcXFxcY29sbGVnZS1maW5kZXJcXFxcYXBwXFxcXGFwaVxcXFxlZGdlc3RvcmVcXFxcWy4uLmVkZ2VzdG9yZV1cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2VkZ2VzdG9yZS9bLi4uZWRnZXN0b3JlXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2VkZ2VzdG9yZS9bLi4uZWRnZXN0b3JlXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZWRnZXN0b3JlL1suLi5lZGdlc3RvcmVdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRTpcXFxcbmV3LVByb2plY3RzXFxcXGNvbGxlZ2UtZmluZGVyXFxcXGFwcFxcXFxhcGlcXFxcZWRnZXN0b3JlXFxcXFsuLi5lZGdlc3RvcmVdXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9lZGdlc3RvcmUvWy4uLmVkZ2VzdG9yZV0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fedgestore%2F%5B...edgestore%5D%2Froute&page=%2Fapi%2Fedgestore%2F%5B...edgestore%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fedgestore%2F%5B...edgestore%5D%2Froute.ts&appDir=E%3A%5Cnew-Projects%5Ccollege-finder%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cnew-Projects%5Ccollege-finder&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/edgestore/[...edgestore]/route.ts":
/*!***************************************************!*\
  !*** ./app/api/edgestore/[...edgestore]/route.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _edgestore_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @edgestore/server */ \"(rsc)/./node_modules/@edgestore/server/dist/index.mjs\");\n/* harmony import */ var _edgestore_server_adapters_next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @edgestore/server/adapters/next/app */ \"(rsc)/./node_modules/@edgestore/server/dist/adapters/next/app/index.mjs\");\n\n\nconst es = _edgestore_server__WEBPACK_IMPORTED_MODULE_0__.initEdgeStore.create();\nconst edgeStoreRouter = es.router({\n    publicFiles: es.fileBucket()\n});\nconst handler = (0,_edgestore_server_adapters_next_app__WEBPACK_IMPORTED_MODULE_1__.createEdgeStoreNextHandler)({\n    router: edgeStoreRouter\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2VkZ2VzdG9yZS9bLi4uZWRnZXN0b3JlXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWtEO0FBQytCO0FBRWpGLE1BQU1FLEtBQUtGLDREQUFhQSxDQUFDRyxNQUFNO0FBRy9CLE1BQU1DLGtCQUFrQkYsR0FBR0csTUFBTSxDQUFDO0lBQ2hDQyxhQUFhSixHQUFHSyxVQUFVO0FBQzVCO0FBRUEsTUFBTUMsVUFBVVAsK0ZBQTBCQSxDQUFDO0lBQ3pDSSxRQUFRRDtBQUNWO0FBRTJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29sbGVnZS1maW5kZXIvLi9hcHAvYXBpL2VkZ2VzdG9yZS9bLi4uZWRnZXN0b3JlXS9yb3V0ZS50cz8yOWY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRFZGdlU3RvcmUgfSBmcm9tICdAZWRnZXN0b3JlL3NlcnZlcic7XHJcbmltcG9ydCB7IGNyZWF0ZUVkZ2VTdG9yZU5leHRIYW5kbGVyIH0gZnJvbSAnQGVkZ2VzdG9yZS9zZXJ2ZXIvYWRhcHRlcnMvbmV4dC9hcHAnO1xyXG7CoFxyXG5jb25zdCBlcyA9IGluaXRFZGdlU3RvcmUuY3JlYXRlKCk7XHJcbsKgXHJcblxyXG5jb25zdCBlZGdlU3RvcmVSb3V0ZXIgPSBlcy5yb3V0ZXIoe1xyXG4gIHB1YmxpY0ZpbGVzOiBlcy5maWxlQnVja2V0KCksXHJcbn0pO1xyXG7CoFxyXG5jb25zdCBoYW5kbGVyID0gY3JlYXRlRWRnZVN0b3JlTmV4dEhhbmRsZXIoe1xyXG4gIHJvdXRlcjogZWRnZVN0b3JlUm91dGVyLFxyXG59KTtcclxuwqBcclxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9O1xyXG7CoFxyXG5cclxuZXhwb3J0IHR5cGUgRWRnZVN0b3JlUm91dGVyID0gdHlwZW9mIGVkZ2VTdG9yZVJvdXRlcjsiXSwibmFtZXMiOlsiaW5pdEVkZ2VTdG9yZSIsImNyZWF0ZUVkZ2VTdG9yZU5leHRIYW5kbGVyIiwiZXMiLCJjcmVhdGUiLCJlZGdlU3RvcmVSb3V0ZXIiLCJyb3V0ZXIiLCJwdWJsaWNGaWxlcyIsImZpbGVCdWNrZXQiLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/edgestore/[...edgestore]/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/zod","vendor-chunks/@edgestore","vendor-chunks/jose","vendor-chunks/uuid","vendor-chunks/@panva","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fedgestore%2F%5B...edgestore%5D%2Froute&page=%2Fapi%2Fedgestore%2F%5B...edgestore%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fedgestore%2F%5B...edgestore%5D%2Froute.ts&appDir=E%3A%5Cnew-Projects%5Ccollege-finder%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cnew-Projects%5Ccollege-finder&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();