(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-maps-maps-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/full-screen-maps/full-screen-maps.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/full-screen-maps/full-screen-maps.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"map\"></div>\n \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/google-maps/google-maps.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/google-maps/google-maps.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header-sm\"></div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card \">\n        <div class=\" card-body\"><div class=\" map\" id=\"satelliteMap\"></div></div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card \">\n        <div class=\"card-header \"><h4 class=\"card-title\">Regular Map</h4></div>\n        <div class=\" card-body\"><div class=\" map\" id=\"regularMap\"></div></div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card \">\n        <div class=\"card-header \">\n          <h4 class=\"card-title\">Custom Skin & Settings Map</h4>\n        </div>\n        <div class=\" card-body\">\n          <div class=\" map\" id=\"customSkinMap\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/vector-map/vector-map.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/vector-map/vector-map.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header\">\n  <div class=\"header text-center\">\n    <h2 class=\"title\">Devextreme</h2>\n    <p class=\"category\">\n      Looks great on any resolution. Made by\n      <a\n        target=\"_blank\"\n        href=\"https://js.devexpress.com/Demos/WidgetsGallery/Demo/VectorMap/ColorsCustomization/Angular/Light/\"\n        >Vector Map</a\n      >.\n    </p>\n  </div>\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card \">\n        <div class=\"card-body \">\n          <div id=\"worldMap\" class=\"map map-big\">\n            <app-vector-map-component></app-vector-map-component>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/pages/maps/full-screen-maps/full-screen-maps.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/pages/maps/full-screen-maps/full-screen-maps.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ngui-map{\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFwcy9mdWxsLXNjcmVlbi1tYXBzL2Z1bGwtc2NyZWVuLW1hcHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcHMvZnVsbC1zY3JlZW4tbWFwcy9mdWxsLXNjcmVlbi1tYXBzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuZ3VpLW1hcHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/maps/full-screen-maps/full-screen-maps.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/maps/full-screen-maps/full-screen-maps.component.ts ***!
  \***************************************************************************/
/*! exports provided: FullScreenMapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullScreenMapsComponent", function() { return FullScreenMapsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var FullScreenMapsComponent = /** @class */ (function () {
    function FullScreenMapsComponent() {
    }
    FullScreenMapsComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        var navbar = document.getElementsByClassName("navbar")[0];
        body.classList.add("full-screen-map");
        navbar.classList.remove("navbar-transparent");
        navbar.classList.add("bg-white");
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false,
            styles: []
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Hello World!"
        });
        // To add the marker to the map, call setMap();
        marker.setMap(map);
    };
    FullScreenMapsComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        var navbar = document.getElementsByClassName("navbar")[0];
        body.classList.remove("full-screen-map");
        navbar.classList.remove("bg-white");
        navbar.classList.add("navbar-transparent");
    };
    FullScreenMapsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-full-screen-maps",
            template: __importDefault(__webpack_require__(/*! raw-loader!./full-screen-maps.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/full-screen-maps/full-screen-maps.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./full-screen-maps.component.css */ "./src/app/pages/maps/full-screen-maps/full-screen-maps.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], FullScreenMapsComponent);
    return FullScreenMapsComponent;
}());



/***/ }),

/***/ "./src/app/pages/maps/google-maps/google-maps.component.css":
/*!******************************************************************!*\
  !*** ./src/app/pages/maps/google-maps/google-maps.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcHMvZ29vZ2xlLW1hcHMvZ29vZ2xlLW1hcHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/maps/google-maps/google-maps.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/maps/google-maps/google-maps.component.ts ***!
  \*****************************************************************/
/*! exports provided: GoogleMapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsComponent", function() { return GoogleMapsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var GoogleMapsComponent = /** @class */ (function () {
    function GoogleMapsComponent() {
    }
    GoogleMapsComponent.prototype.ngOnInit = function () {
        // Regular Map
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 8,
            center: myLatlng,
            scrollwheel: false //we disable de scroll over the map, it is a really annoing when you scroll through page
        };
        var map = new google.maps.Map(document.getElementById("regularMap"), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Regular Map!"
        });
        marker.setMap(map);
        // Custom Skin & Settings Map
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions1 = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false,
            disableDefaultUI: true,
            zoomControl: true,
            styles: []
        };
        var map = new google.maps.Map(document.getElementById("customSkinMap"), mapOptions1);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Custom Skin & Settings Map!"
        });
        marker.setMap(map);
        // Satellite Map
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions2 = {
            zoom: 3,
            scrollwheel: false,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        };
        var map = new google.maps.Map(document.getElementById("satelliteMap"), mapOptions2);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Satellite Map!"
        });
        marker.setMap(map);
    };
    GoogleMapsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-google-maps",
            template: __importDefault(__webpack_require__(/*! raw-loader!./google-maps.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/google-maps/google-maps.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./google-maps.component.css */ "./src/app/pages/maps/google-maps/google-maps.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], GoogleMapsComponent);
    return GoogleMapsComponent;
}());



/***/ }),

/***/ "./src/app/pages/maps/maps.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/maps/maps.module.ts ***!
  \*******************************************/
/*! exports provided: MapsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsModule", function() { return MapsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _google_maps_google_maps_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./google-maps/google-maps.component */ "./src/app/pages/maps/google-maps/google-maps.component.ts");
/* harmony import */ var _full_screen_maps_full_screen_maps_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./full-screen-maps/full-screen-maps.component */ "./src/app/pages/maps/full-screen-maps/full-screen-maps.component.ts");
/* harmony import */ var _vector_map_vector_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vector-map/vector-map.component */ "./src/app/pages/maps/vector-map/vector-map.component.ts");
/* harmony import */ var _maps_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./maps.routing */ "./src/app/pages/maps/maps.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var MapsModule = /** @class */ (function () {
    function MapsModule() {
    }
    MapsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_maps_routing__WEBPACK_IMPORTED_MODULE_7__["MapsRoutes"]),
                _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"]
            ],
            declarations: [
                _google_maps_google_maps_component__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsComponent"],
                _full_screen_maps_full_screen_maps_component__WEBPACK_IMPORTED_MODULE_5__["FullScreenMapsComponent"],
                _vector_map_vector_map_component__WEBPACK_IMPORTED_MODULE_6__["VectorMapComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], MapsModule);
    return MapsModule;
}());



/***/ }),

/***/ "./src/app/pages/maps/maps.routing.ts":
/*!********************************************!*\
  !*** ./src/app/pages/maps/maps.routing.ts ***!
  \********************************************/
/*! exports provided: MapsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsRoutes", function() { return MapsRoutes; });
/* harmony import */ var _full_screen_maps_full_screen_maps_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./full-screen-maps/full-screen-maps.component */ "./src/app/pages/maps/full-screen-maps/full-screen-maps.component.ts");
/* harmony import */ var _google_maps_google_maps_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-maps/google-maps.component */ "./src/app/pages/maps/google-maps/google-maps.component.ts");
/* harmony import */ var _vector_map_vector_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vector-map/vector-map.component */ "./src/app/pages/maps/vector-map/vector-map.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var MapsRoutes = [
    {
        path: "",
        children: [
            {
                path: "fullscreen",
                component: _full_screen_maps_full_screen_maps_component__WEBPACK_IMPORTED_MODULE_0__["FullScreenMapsComponent"]
            }
        ]
    },
    {
        path: "",
        children: [
            {
                path: "google",
                component: _google_maps_google_maps_component__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsComponent"]
            }
        ]
    },
    {
        path: "",
        children: [
            {
                path: "vector",
                component: _vector_map_vector_map_component__WEBPACK_IMPORTED_MODULE_2__["VectorMapComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/pages/maps/vector-map/vector-map.component.css":
/*!****************************************************************!*\
  !*** ./src/app/pages/maps/vector-map/vector-map.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcHMvdmVjdG9yLW1hcC92ZWN0b3ItbWFwLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/maps/vector-map/vector-map.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/maps/vector-map/vector-map.component.ts ***!
  \***************************************************************/
/*! exports provided: VectorMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VectorMapComponent", function() { return VectorMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var VectorMapComponent = /** @class */ (function () {
    function VectorMapComponent() {
    }
    VectorMapComponent.prototype.ngOnInit = function () { };
    VectorMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-vector-map",
            template: __importDefault(__webpack_require__(/*! raw-loader!./vector-map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/vector-map/vector-map.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./vector-map.component.css */ "./src/app/pages/maps/vector-map/vector-map.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], VectorMapComponent);
    return VectorMapComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-maps-maps-module.js.map