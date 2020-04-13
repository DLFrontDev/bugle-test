function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/components/app/app.component.ts":
  /*!*********************************************!*\
    !*** ./src/components/app/app.component.ts ***!
    \*********************************************/

  /*! exports provided: AppComponent */

  /***/
  function srcComponentsAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../sidebar/sidebar.component */
    "./src/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../top-menu/top-menu.component */
    "./src/components/top-menu/top-menu.component.ts");
    /* harmony import */


    var _course_material_course_material_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../course-material/course-material.component */
    "./src/components/course-material/course-material.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'bugle-test';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      consts: [["role", "main", 1, "content"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "top-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "course-material");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], _top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_2__["TopMenuComponent"], _course_material_course_material_component__WEBPACK_IMPORTED_MODULE_3__["CourseMaterialComponent"]],
      styles: ["[_nghost-%COMP%] {\r\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n  font-size: 14px;\r\n  color: #333;\r\n  box-sizing: border-box;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  display: flex;\r\n}\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n  margin: 8px 0;\r\n}\r\np[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n.content[_ngcontent-%COMP%] {\r\n  flex-grow: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 60px 20px;\r\n}\r\n@media screen and (min-width: 767px) {\r\n  .content[_ngcontent-%COMP%] {\r\n    padding: 80px 50px;\r\n  }\r\n}\r\n@media screen and (min-width: 1200px) {\r\n  .content[_ngcontent-%COMP%] {\r\n    padding: 80px 70px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBOEU7QUFDOUU7RUFDRSwwSkFBMEo7RUFDMUosZUFBZTtFQUNmLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsbUNBQW1DO0VBQ25DLGtDQUFrQztFQUNsQyxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsU0FBUztBQUNYO0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0YiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG46aG9zdCB7XHJcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzMzMztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxufVxyXG5cclxucCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiA2MHB4IDIwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2N3B4KSB7XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogODBweCA1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogODBweCA3MHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/components/app/app.module.ts":
  /*!******************************************!*\
    !*** ./src/components/app/app.module.ts ***!
    \******************************************/

  /*! exports provided: AppModule */

  /***/
  function srcComponentsAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/components/app/app.component.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../sidebar/sidebar.component */
    "./src/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../top-menu/top-menu.component */
    "./src/components/top-menu/top-menu.component.ts");
    /* harmony import */


    var _course_material_course_material_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../course-material/course-material.component */
    "./src/components/course-material/course-material.component.ts");
    /* harmony import */


    var _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../slideshow/slideshow.component */
    "./src/components/slideshow/slideshow.component.ts");
    /* harmony import */


    var _trainees_trainees_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../trainees/trainees.component */
    "./src/components/trainees/trainees.component.ts");
    /* harmony import */


    var _trainee_details_trainee_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../trainee-details/trainee-details.component */
    "./src/components/trainee-details/trainee-details.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_4__["TopMenuComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _course_material_course_material_component__WEBPACK_IMPORTED_MODULE_5__["CourseMaterialComponent"], _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_6__["SlideshowComponent"], _trainees_trainees_component__WEBPACK_IMPORTED_MODULE_7__["TraineesComponent"], _trainee_details_trainee_details_component__WEBPACK_IMPORTED_MODULE_8__["TraineeDetailsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_4__["TopMenuComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _course_material_course_material_component__WEBPACK_IMPORTED_MODULE_5__["CourseMaterialComponent"], _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_6__["SlideshowComponent"], _trainees_trainees_component__WEBPACK_IMPORTED_MODULE_7__["TraineesComponent"], _trainee_details_trainee_details_component__WEBPACK_IMPORTED_MODULE_8__["TraineeDetailsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/components/course-material/course-material.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/components/course-material/course-material.component.ts ***!
    \*********************************************************************/

  /*! exports provided: CourseMaterialComponent */

  /***/
  function srcComponentsCourseMaterialCourseMaterialComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourseMaterialComponent", function () {
      return CourseMaterialComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _data_course__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../data/course */
    "./src/data/course.ts");
    /* harmony import */


    var _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../slideshow/slideshow.component */
    "./src/components/slideshow/slideshow.component.ts");
    /* harmony import */


    var _trainees_trainees_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../trainees/trainees.component */
    "./src/components/trainees/trainees.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CourseMaterialComponent_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var topic_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("- ", topic_r22, "");
      }
    }

    function CourseMaterialComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Quiz");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Preview quiz");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var CourseMaterialComponent = function CourseMaterialComponent() {
      _classCallCheck(this, CourseMaterialComponent);

      this.course = _data_course__WEBPACK_IMPORTED_MODULE_1__["Course"];
      this.slideshow = _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_2__["SlideshowComponent"];
      this.trainees = _trainees_trainees_component__WEBPACK_IMPORTED_MODULE_3__["TraineesComponent"];
    };

    CourseMaterialComponent.ɵfac = function CourseMaterialComponent_Factory(t) {
      return new (t || CourseMaterialComponent)();
    };

    CourseMaterialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CourseMaterialComponent,
      selectors: [["course-material"]],
      decls: 11,
      vars: 5,
      consts: [[1, "course-title"], [3, "slideshow"], [1, "topics-container"], [4, "ngFor", "ngForOf"], ["class", "quiz-container", 4, "ngIf"], [3, "trainees"], [1, "quiz-container"], ["type", "button", "name", "button"]],
      template: function CourseMaterialComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "slideshow", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Course Topics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CourseMaterialComponent_li_8_Template, 2, 1, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CourseMaterialComponent_div_9_Template, 5, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "trainees", 5);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.course.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("slideshow", ctx.course.slideshow);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.course.topics);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.course.quiz);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("trainees", ctx.course.trainees);
        }
      },
      directives: [_slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_2__["SlideshowComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _trainees_trainees_component__WEBPACK_IMPORTED_MODULE_3__["TraineesComponent"]],
      styles: [".course-title[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  border-bottom: 3px solid #c1272d;\r\n}\r\n\r\n@media screen and (min-width: 767px) {\r\n  .course-title[_ngcontent-%COMP%] {\r\n    margin-bottom: 50px;\r\n  }\r\n}\r\n\r\n.quiz-container[_ngcontent-%COMP%], .topics-container[_ngcontent-%COMP%] {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n@media screen and (min-width: 767px) {\r\n  .quiz-container[_ngcontent-%COMP%], .topics-container[_ngcontent-%COMP%] {\r\n    margin-bottom: 50px;\r\n  }\r\n}\r\n\r\n.topics-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin-top: 5px;\r\n}\r\n\r\n.topics-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n}\r\n\r\n.quiz-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n  color: #333;\r\n  border: none;\r\n  background: none;\r\n  outline: none;\r\n  padding: 0;\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n}\r\n\r\n.quiz-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  color: #0071bc;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2NvdXJzZS1tYXRlcmlhbC9jb3Vyc2UtbWF0ZXJpYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFVBQVU7RUFDVixlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9jb3Vyc2UtbWF0ZXJpYWwvY291cnNlLW1hdGVyaWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY291cnNlLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjYzEyNzJkO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCkge1xyXG4gIC5jb3Vyc2UtdGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5xdWl6LWNvbnRhaW5lciwgLnRvcGljcy1jb250YWluZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2N3B4KSB7XHJcbiAgLnF1aXotY29udGFpbmVyLCAudG9waWNzLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnRvcGljcy1jb250YWluZXIgdWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLnRvcGljcy1jb250YWluZXIgdWwgbGkge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLnF1aXotY29udGFpbmVyIGJ1dHRvbiB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLnF1aXotY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XHJcbiAgY29sb3I6ICMwMDcxYmM7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseMaterialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'course-material',
          templateUrl: './course-material.component.html',
          styleUrls: ['./course-material.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/components/sidebar/sidebar.component.ts":
  /*!*****************************************************!*\
    !*** ./src/components/sidebar/sidebar.component.ts ***!
    \*****************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcComponentsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SidebarComponent_li_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var control_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](control_r1 + "-control");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](control_r1);
      }
    }

    var SidebarComponent = function SidebarComponent() {
      _classCallCheck(this, SidebarComponent);

      this.controls = ["edit", "publish", "delete"];
    };

    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)();
    };

    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["sidebar"]],
      decls: 12,
      vars: 1,
      consts: [[1, "sidebar-container"], [1, "logo-container"], ["href", "#", "alt", "company-logo", 1, "logo"], ["src", "./assets/logo.svg", "alt", ""], [1, "sidebar-controls"], [4, "ngFor", "ngForOf"], ["href", "#"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "menu", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "GeoForm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "The future");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "today");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SidebarComponent_li_11_Template, 3, 3, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.controls);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["[_nghost-%COMP%] {\r\n  flex-shrink: 0;\r\n  flex-basis: 25%;\r\n}\r\n\r\n.sidebar-container[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  position: fixed;\r\n  width: 25%;\r\n  height: 100%;\r\n  border-right: 3px solid #c1272d;\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  [_nghost-%COMP%] {\r\n    flex-basis: 15%;\r\n  }\r\n\r\n  .sidebar-container[_ngcontent-%COMP%] {\r\n    width: 15%;\r\n  }\r\n}\r\n\r\nmenu[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.logo-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #c1272d;\r\n}\r\n\r\n.logo-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  text-transform: uppercase;\r\n  margin: 0;\r\n  padding: 10px;\r\n  font-size: 1rem;\r\n}\r\n\r\n@media screen and (min-width: 767px) {\r\n  .logo-container[_ngcontent-%COMP%] {\r\n    flex-direction: row;\r\n  }\r\n\r\n  .logo-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    padding: 10px 20px;\r\n    font-size: 0.8rem;\r\n  }\r\n}\r\n\r\n.logo-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: block;\r\n  padding: 10px 15px 15px;\r\n  border-bottom-right-radius: 50px;\r\n  background-color: #333333;\r\n}\r\n\r\n.logo-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.sidebar-controls[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0;\r\n  padding: 10px;\r\n  list-style: none;\r\n}\r\n\r\n.sidebar-controls[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n  color: #1a1a1a;\r\n  font-size: 1rem;\r\n  text-decoration: none;\r\n  padding-left: 28px;\r\n  line-height: 22px;\r\n  text-transform: capitalize;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.sidebar-controls[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\r\n  content: '';\r\n  position: absolute;\r\n  left: 0;\r\n  display: block;\r\n  background-image: url('overview-sprite.svg');\r\n  background-size: 200% 600%;\r\n  background-position-x: 0;\r\n  width: 18px;\r\n  height: 18px;\r\n}\r\n\r\n.sidebar-controls[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #0071bc;\r\n}\r\n\r\n.sidebar-controls[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before {\r\n  background-position-x: -100%;\r\n}\r\n\r\n.sidebar-controls[_ngcontent-%COMP%]   a.edit-control[_ngcontent-%COMP%]:before {\r\n  background-position-y: 0;\r\n}\r\n\r\n.sidebar-controls[_ngcontent-%COMP%]   a.publish-control[_ngcontent-%COMP%]:before {\r\n  background-position-y: -100%;\r\n}\r\n\r\n.sidebar-controls[_ngcontent-%COMP%]   a.delete-control[_ngcontent-%COMP%]:before {\r\n  background-position-y: -200%;\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  .sidebar-controls[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n  }\r\n\r\n  .sidebar-controls[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-size: 1.4rem;\r\n    padding-left: 40px;\r\n    line-height: 30px;\r\n  }\r\n\r\n  .sidebar-controls[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\r\n    width: 30px;\r\n    height: 30px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFVBQVU7RUFDVixZQUFZO0VBQ1osK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixnQ0FBZ0M7RUFDaEMseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLGNBQWM7RUFDZCw0Q0FBaUU7RUFDakUsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFDQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBQ0YiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgZmxleC1iYXNpczogMjUlO1xyXG59XHJcblxyXG4uc2lkZWJhci1jb250YWluZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICNjMTI3MmQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIDpob3N0IHtcclxuICAgIGZsZXgtYmFzaXM6IDE1JTtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gIH1cclxufVxyXG5cclxubWVudSB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5sb2dvLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMTI3MmQ7XHJcbn1cclxuXHJcbi5sb2dvLWNvbnRhaW5lciBoMyB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2N3B4KSB7XHJcbiAgLmxvZ28tY29udGFpbmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgfVxyXG5cclxuICAubG9nby1jb250YWluZXIgaDMge1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG59XHJcblxyXG4ubG9nby1jb250YWluZXIgYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4IDE1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxufVxyXG4ubG9nby1jb250YWluZXIgYSBpbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc2lkZWJhci1jb250cm9scyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLnNpZGViYXItY29udHJvbHMgYSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjb2xvcjogIzFhMWExYTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBhZGRpbmctbGVmdDogMjhweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbi5zaWRlYmFyLWNvbnRyb2xzIGE6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL292ZXJ2aWV3LXNwcml0ZS5zdmcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgNjAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDA7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG59XHJcbi5zaWRlYmFyLWNvbnRyb2xzIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDA3MWJjO1xyXG59XHJcbi5zaWRlYmFyLWNvbnRyb2xzIGE6aG92ZXI6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IC0xMDAlO1xyXG59XHJcbi5zaWRlYmFyLWNvbnRyb2xzIGEuZWRpdC1jb250cm9sOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAwO1xyXG59XHJcbi5zaWRlYmFyLWNvbnRyb2xzIGEucHVibGlzaC1jb250cm9sOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAtMTAwJTtcclxufVxyXG4uc2lkZWJhci1jb250cm9scyBhLmRlbGV0ZS1jb250cm9sOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAtMjAwJTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLnNpZGViYXItY29udHJvbHMge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyLWNvbnRyb2xzIGEge1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyLWNvbnRyb2xzIGE6YmVmb3JlIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'sidebar',
          templateUrl: './sidebar.component.html',
          styleUrls: ['./sidebar.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/components/slideshow/slideshow.component.ts":
  /*!*********************************************************!*\
    !*** ./src/components/slideshow/slideshow.component.ts ***!
    \*********************************************************/

  /*! exports provided: SlideshowComponent */

  /***/
  function srcComponentsSlideshowSlideshowComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlideshowComponent", function () {
      return SlideshowComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SlideshowComponent_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
      }

      if (rf & 2) {
        var slide_r3 = ctx.$implicit;
        var i_r4 = ctx.index;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](i_r4 === ctx_r2.currentSlide ? "active" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "./assets/slideshow/", slide_r3.path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", slide_r3.alt);
      }
    }

    var SlideshowComponent = /*#__PURE__*/function () {
      function SlideshowComponent() {
        _classCallCheck(this, SlideshowComponent);

        this.slides = [];
        this.currentSlide = 0;
      } // Data input, sort slides according to sort values


      _createClass(SlideshowComponent, [{
        key: "changeSlide",
        // Change active slide
        value: function changeSlide(factor) {
          if (this.currentSlide + factor >= 0 && this.currentSlide + factor < this.slides.length) {
            this.currentSlide = this.currentSlide + factor;
          }
        }
      }, {
        key: "slideshow",
        set: function set(slideshow) {
          this.slides = slideshow.sort(function (slide, prevSlide) {
            return slide.sort - prevSlide.sort;
          });
        },
        get: function get() {
          return this.slides;
        }
      }]);

      return SlideshowComponent;
    }();

    SlideshowComponent.ɵfac = function SlideshowComponent_Factory(t) {
      return new (t || SlideshowComponent)();
    };

    SlideshowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SlideshowComponent,
      selectors: [["slideshow"]],
      inputs: {
        slideshow: "slideshow"
      },
      decls: 9,
      vars: 3,
      consts: [[1, "slides-container"], [3, "src", "class", "alt", 4, "ngFor", "ngForOf"], [1, "slideshow-controls"], [1, "nav-container"], ["type", "button", "name", "button", 1, "btn-arrow-previous", 3, "click"], ["type", "button", "name", "button", 1, "btn-arrow-next", 3, "click"], ["type", "button", "name", "button", 1, "btn-fullscreen"], [3, "src", "alt"]],
      template: function SlideshowComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SlideshowComponent_img_1_Template, 1, 4, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SlideshowComponent_Template_button_click_4_listener() {
            return ctx.changeSlide(0 - 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SlideshowComponent_Template_button_click_5_listener() {
            return ctx.changeSlide(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slideshow);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.currentSlide + 1, "/", ctx.slideshow.length, "");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".slides-container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  padding-top: calc(9/16*100%)\r\n}\r\n\r\n.slides-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  z-index: 0;\r\n  opacity: 0;\r\n  width: 100%;\r\n  transition: opacity ease-in-out .3s;\r\n}\r\n\r\n.slides-container[_ngcontent-%COMP%]   img.active[_ngcontent-%COMP%] {\r\n  z-index: 1;\r\n  opacity: 1;\r\n  display: block;\r\n}\r\n\r\n.slideshow-controls[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  height: 30px;\r\n  background-color: #1a1a1a;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.slideshow-controls[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.slideshow-controls[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  color: #fff;\r\n  background-color: #333333;\r\n  text-align: center;\r\n  line-height: 30px;\r\n  width: 60px;\r\n  font-size: 1rem;\r\n  letter-spacing: 3px;\r\n}\r\n\r\n@media screen and (min-width: 767px) {\r\n  .slideshow-controls[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n    margin-bottom: 50px;\r\n  }\r\n\r\n  .slideshow-controls[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    line-height: 50px;\r\n    width: 80px;\r\n  }\r\n}\r\n\r\n[class*=\"btn-\"][_ngcontent-%COMP%] {\r\n  border: none;\r\n  border-radius: 0;\r\n  outline: none;\r\n  padding: 0;\r\n  width: 30px;\r\n  height: 30px;\r\n  cursor: pointer;\r\n  background-image: url('slideshow-sprite.svg');\r\n  background-size: 300% 100%;\r\n  background-position-y: 0;\r\n}\r\n\r\n[class*=\"btn-arrow-\"][_ngcontent-%COMP%] {\r\n  background-color: #4d4d4d;\r\n}\r\n\r\n[class*=\"btn-arrow-\"][_ngcontent-%COMP%]:hover, .btn-fullscreen[_ngcontent-%COMP%]:hover {\r\n  background-color: #c1272d;\r\n}\r\n\r\n.btn-arrow-previous[_ngcontent-%COMP%] {\r\n  background-position-x: 0;\r\n}\r\n\r\n.btn-arrow-next[_ngcontent-%COMP%] {\r\n  background-position-x: -100%;\r\n}\r\n\r\n.btn-fullscreen[_ngcontent-%COMP%] {\r\n  background-position-x: -200%;\r\n  background-color: transparent;\r\n}\r\n\r\n@media screen and (min-width: 767px) {\r\n  [class*=\"btn-\"][_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    height: 50px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3NsaWRlc2hvdy9zbGlkZXNob3cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sVUFBVTtFQUNWLFVBQVU7RUFDVixXQUFXO0VBQ1gsbUNBQW1DO0FBQ3JDOztBQUNBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsNkNBQWtFO0VBQ2xFLDBCQUEwQjtFQUMxQix3QkFBd0I7QUFDMUI7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7O0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUI7O0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBQ0YiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvc2xpZGVzaG93L3NsaWRlc2hvdy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNsaWRlcy1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLXRvcDogY2FsYyg5LzE2KjEwMCUpXHJcbn1cclxuXHJcbi5zbGlkZXMtY29udGFpbmVyIGltZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgb3BhY2l0eTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UtaW4tb3V0IC4zcztcclxufVxyXG4uc2xpZGVzLWNvbnRhaW5lciBpbWcuYWN0aXZlIHtcclxuICB6LWluZGV4OiAxO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zbGlkZXNob3ctY29udHJvbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnNsaWRlc2hvdy1jb250cm9scyAubmF2LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uc2xpZGVzaG93LWNvbnRyb2xzIC5uYXYtY29udGFpbmVyIHNwYW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICB3aWR0aDogNjBweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY3cHgpIHtcclxuICAuc2xpZGVzaG93LWNvbnRyb2xzIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgfVxyXG5cclxuICAuc2xpZGVzaG93LWNvbnRyb2xzIC5uYXYtY29udGFpbmVyIHNwYW4ge1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogODBweDtcclxuICB9XHJcbn1cclxuXHJcbltjbGFzcyo9XCJidG4tXCJdIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL3NsaWRlc2hvdy1zcHJpdGUuc3ZnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAzMDAlIDEwMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAwO1xyXG59XHJcbltjbGFzcyo9XCJidG4tYXJyb3ctXCJdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ0ZDRkO1xyXG59XHJcbltjbGFzcyo9XCJidG4tYXJyb3ctXCJdOmhvdmVyLCAuYnRuLWZ1bGxzY3JlZW46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMTI3MmQ7XHJcbn1cclxuLmJ0bi1hcnJvdy1wcmV2aW91cyB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAwO1xyXG59XHJcbi5idG4tYXJyb3ctbmV4dCB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAtMTAwJTtcclxufVxyXG4uYnRuLWZ1bGxzY3JlZW4ge1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogLTIwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2N3B4KSB7XHJcbiAgW2NsYXNzKj1cImJ0bi1cIl0ge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideshowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'slideshow',
          templateUrl: './slideshow.component.html',
          styleUrls: ['./slideshow.component.css']
        }]
      }], null, {
        slideshow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/components/top-menu/top-menu.component.ts":
  /*!*******************************************************!*\
    !*** ./src/components/top-menu/top-menu.component.ts ***!
    \*******************************************************/

  /*! exports provided: TopMenuComponent */

  /***/
  function srcComponentsTopMenuTopMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopMenuComponent", function () {
      return TopMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var TopMenuComponent = /*#__PURE__*/function () {
      function TopMenuComponent() {
        _classCallCheck(this, TopMenuComponent);

        this.isActive = false;
      } // Toggle menu opened and closed


      _createClass(TopMenuComponent, [{
        key: "toggleActive",
        value: function toggleActive() {
          this.isActive = !this.isActive;
        }
      }]);

      return TopMenuComponent;
    }();

    TopMenuComponent.ɵfac = function TopMenuComponent_Factory(t) {
      return new (t || TopMenuComponent)();
    };

    TopMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopMenuComponent,
      selectors: [["top-menu"]],
      decls: 10,
      vars: 1,
      consts: [[3, "ngClass"], [1, "menu-container"], ["href", "#", 1, "btn-home"], ["href", "#", 1, "btn-dashboard"], ["href", "#", 1, "btn-signout"], ["type", "button", "role", "button", 1, "btn-toggle-menu", 3, "click"]],
      template: function TopMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "menu", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sign out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopMenuComponent_Template_button_click_8_listener() {
            return ctx.toggleActive();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isActive ? "menu-open" : "menu-closed");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: ["[_nghost-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  width: 75%;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  z-index: 100;\r\n}\r\n\r\n@media screen and (min-width: 767px) {\r\n  [_nghost-%COMP%] {\r\n    width: 85%;\r\n    justify-content: flex-start;\r\n  }\r\n}\r\n\r\nmenu[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin: 0;\r\n  padding: 10px;\r\n  background-color: #0071bc;\r\n}\r\n\r\nmenu.menu-open[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n@media screen and (min-width: 767px) {\r\n  menu[_ngcontent-%COMP%] {\r\n    flex-direction: row-reverse;\r\n    padding: 15px;\r\n  }\r\n\r\n  menu.menu-open[_ngcontent-%COMP%] {\r\n    width: auto;\r\n  }\r\n}\r\n\r\n.menu-container[_ngcontent-%COMP%] {\r\n  display: none;\r\n  align-items: center;\r\n}\r\n\r\nmenu.menu-open[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  padding-right: 30px;\r\n}\r\n\r\n@media screen and (min-width: 767px) {\r\n  menu.menu-open[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%] {\r\n  padding-right: 0;\r\n  padding-left: 50px;\r\n  }\r\n}\r\n\r\n.menu-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n  color: #fff;\r\n  text-decoration: none;\r\n  line-height: 15px;\r\n  font-size: .7rem;\r\n  text-transform: uppercase;\r\n  font-weight: 700;\r\n  padding-left: 25px;\r\n}\r\n\r\n.menu-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:last-child) {\r\n  margin-right: 15px;\r\n}\r\n\r\n.menu-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\r\n  content: '';\r\n  position: absolute;\r\n  left: 0;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  display: block;\r\n  background-image: url('menu-sprite.svg');\r\n  background-size: 200% 300%;\r\n  background-position-x: 0;\r\n  width: 15px;\r\n  height: 15px;\r\n}\r\n\r\n.menu-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #1a1a1a;\r\n}\r\n\r\n.menu-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before {\r\n  background-position-x: -100%;\r\n}\r\n\r\n.menu-container[_ngcontent-%COMP%]   a.btn-home[_ngcontent-%COMP%]:before {\r\n  background-position-y: 0;\r\n}\r\n\r\n.menu-container[_ngcontent-%COMP%]   a.btn-dashboard[_ngcontent-%COMP%]:before {\r\n  background-position-y: -100%;\r\n}\r\n\r\n.menu-container[_ngcontent-%COMP%]   a.btn-signout[_ngcontent-%COMP%]:before {\r\n  background-position-y: -200%;\r\n}\r\n\r\n@media screen and (min-width: 767px) {\r\n  .menu-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding-left: 30px;\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .menu-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:last-child) {\r\n    margin-right: 25px;\r\n  }\r\n\r\n  .menu-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\r\n    height: 20px;\r\n    width: 20px;\r\n  }\r\n}\r\n\r\n.btn-toggle-menu[_ngcontent-%COMP%] {\r\n  height: 20px;\r\n  width: 20px;\r\n  border: none;\r\n  padding: 0;\r\n  background: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-toggle-menu[_ngcontent-%COMP%]:hover:before, .btn-toggle-menu[_ngcontent-%COMP%]:hover:after, .btn-toggle-menu[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\r\n  background-color: #1a1a1a;\r\n}\r\n\r\n.btn-toggle-menu[_ngcontent-%COMP%]:before, .btn-toggle-menu[_ngcontent-%COMP%]:after {\r\n  transform-origin: center left;\r\n  content: '';\r\n  display: block;\r\n  background-color: #fff;\r\n  width: 100%;\r\n  height: 4px;\r\n}\r\n\r\n.btn-toggle-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  height: 4px;\r\n  margin: 4px 0;\r\n  background-color: #fff;\r\n}\r\n\r\n.btn-toggle-menu[_ngcontent-%COMP%]:before, .btn-toggle-menu[_ngcontent-%COMP%]:after, .btn-toggle-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  transition: all ease-in-out .2s;\r\n}\r\n\r\nmenu.menu-open[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]    + .btn-toggle-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n}\r\n\r\nmenu.menu-open[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]    + .btn-toggle-menu[_ngcontent-%COMP%]:before {\r\n  transform: rotate(45deg) scale(1.15);\r\n}\r\n\r\nmenu.menu-open[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]    + .btn-toggle-menu[_ngcontent-%COMP%]:after {\r\n  transform: rotate(-45deg) scale(1.15);\r\n}\r\n\r\n@media screen and (min-width: 767px) {\r\n  .btn-toggle-menu[_ngcontent-%COMP%] {\r\n    height: 30px;\r\n    width: 30px;\r\n  }\r\n\r\n  .btn-toggle-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    margin: 6px 0;\r\n  }\r\n\r\n  menu.menu-open[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]    + .btn-toggle-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    margin: 9px 0;\r\n  }\r\n\r\n  menu.menu-open[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]    + .btn-toggle-menu[_ngcontent-%COMP%]:before {\r\n    transform: rotate(45deg) scale(1.25);\r\n  }\r\n  menu.menu-open[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]    + .btn-toggle-menu[_ngcontent-%COMP%]:after {\r\n    transform: rotate(-45deg) scale(1.25);\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3RvcC1tZW51L3RvcC1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFFBQVE7RUFDUixVQUFVO0VBQ1YsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDViwyQkFBMkI7RUFDN0I7QUFDRjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0U7SUFDRSwyQkFBMkI7SUFDM0IsYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0VBQ0EsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCx3Q0FBNkQ7RUFDN0QsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFDQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUNBOzs7RUFHRSx5QkFBeUI7QUFDM0I7O0FBQ0E7O0VBRUUsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUNBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usb0NBQW9DO0VBQ3RDO0VBQ0E7SUFDRSxxQ0FBcUM7RUFDdkM7QUFDRiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy90b3AtbWVudS90b3AtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCkge1xyXG4gIDpob3N0IHtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG59XHJcblxyXG5tZW51IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3MWJjO1xyXG59XHJcblxyXG5tZW51Lm1lbnUtb3BlbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2N3B4KSB7XHJcbiAgbWVudSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgbWVudS5tZW51LW9wZW4ge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4ubWVudS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5tZW51Lm1lbnUtb3BlbiAubWVudS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZy1yaWdodDogMzBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY3cHgpIHtcclxuICBtZW51Lm1lbnUtb3BlbiAubWVudS1jb250YWluZXIge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm1lbnUtY29udGFpbmVyIGEge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogLjdyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHBhZGRpbmctbGVmdDogMjVweDtcclxufVxyXG4ubWVudS1jb250YWluZXIgYTpub3QoOmxhc3QtY2hpbGQpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuLm1lbnUtY29udGFpbmVyIGE6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvc3ByaXRlcy9tZW51LXNwcml0ZS5zdmcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMzAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDA7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG59XHJcbi5tZW51LWNvbnRhaW5lciBhOmhvdmVyIHtcclxuICBjb2xvcjogIzFhMWExYTtcclxufVxyXG4ubWVudS1jb250YWluZXIgYTpob3ZlcjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogLTEwMCU7XHJcbn1cclxuLm1lbnUtY29udGFpbmVyIGEuYnRuLWhvbWU6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDA7XHJcbn1cclxuLm1lbnUtY29udGFpbmVyIGEuYnRuLWRhc2hib2FyZDpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogLTEwMCU7XHJcbn1cclxuLm1lbnUtY29udGFpbmVyIGEuYnRuLXNpZ25vdXQ6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC0yMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCkge1xyXG4gIC5tZW51LWNvbnRhaW5lciBhIHtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcblxyXG4gIC5tZW51LWNvbnRhaW5lciBhOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLm1lbnUtY29udGFpbmVyIGE6YmVmb3JlIHtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bi10b2dnbGUtbWVudSB7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJ0bi10b2dnbGUtbWVudTpob3ZlcjpiZWZvcmUsXHJcbi5idG4tdG9nZ2xlLW1lbnU6aG92ZXI6YWZ0ZXIsXHJcbi5idG4tdG9nZ2xlLW1lbnU6aG92ZXIgc3BhbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTtcclxufVxyXG4uYnRuLXRvZ2dsZS1tZW51OmJlZm9yZSxcclxuLmJ0bi10b2dnbGUtbWVudTphZnRlciB7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGxlZnQ7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDRweDtcclxufVxyXG4uYnRuLXRvZ2dsZS1tZW51IHNwYW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIG1hcmdpbjogNHB4IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4uYnRuLXRvZ2dsZS1tZW51OmJlZm9yZSwgLmJ0bi10b2dnbGUtbWVudTphZnRlciwgLmJ0bi10b2dnbGUtbWVudSBzcGFuIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjJzO1xyXG59XHJcblxyXG5tZW51Lm1lbnUtb3BlbiAubWVudS1jb250YWluZXIgKyAuYnRuLXRvZ2dsZS1tZW51IHNwYW4ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxubWVudS5tZW51LW9wZW4gLm1lbnUtY29udGFpbmVyICsgLmJ0bi10b2dnbGUtbWVudTpiZWZvcmUge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSBzY2FsZSgxLjE1KTtcclxufVxyXG5tZW51Lm1lbnUtb3BlbiAubWVudS1jb250YWluZXIgKyAuYnRuLXRvZ2dsZS1tZW51OmFmdGVyIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDEuMTUpO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCkge1xyXG4gIC5idG4tdG9nZ2xlLW1lbnUge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAuYnRuLXRvZ2dsZS1tZW51IHNwYW4ge1xyXG4gICAgbWFyZ2luOiA2cHggMDtcclxuICB9XHJcblxyXG4gIG1lbnUubWVudS1vcGVuIC5tZW51LWNvbnRhaW5lciArIC5idG4tdG9nZ2xlLW1lbnUgc3BhbiB7XHJcbiAgICBtYXJnaW46IDlweCAwO1xyXG4gIH1cclxuXHJcbiAgbWVudS5tZW51LW9wZW4gLm1lbnUtY29udGFpbmVyICsgLmJ0bi10b2dnbGUtbWVudTpiZWZvcmUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHNjYWxlKDEuMjUpO1xyXG4gIH1cclxuICBtZW51Lm1lbnUtb3BlbiAubWVudS1jb250YWluZXIgKyAuYnRuLXRvZ2dsZS1tZW51OmFmdGVyIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMS4yNSk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'top-menu',
          templateUrl: './top-menu.component.html',
          styleUrls: ['./top-menu.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/components/trainee-details/trainee-details.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/components/trainee-details/trainee-details.component.ts ***!
    \*********************************************************************/

  /*! exports provided: TraineeDetailsComponent */

  /***/
  function srcComponentsTraineeDetailsTraineeDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TraineeDetailsComponent", function () {
      return TraineeDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TraineeDetailsComponent_button_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "button", 8);
      }
    }

    function TraineeDetailsComponent_button_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "button", 9);
      }
    }

    var TraineeDetailsComponent = function TraineeDetailsComponent() {
      _classCallCheck(this, TraineeDetailsComponent);
    };

    TraineeDetailsComponent.ɵfac = function TraineeDetailsComponent_Factory(t) {
      return new (t || TraineeDetailsComponent)();
    };

    TraineeDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TraineeDetailsComponent,
      selectors: [["trainee-details"]],
      inputs: {
        trainee: "trainee"
      },
      decls: 12,
      vars: 6,
      consts: [[1, "avatar-container"], [3, "src", "alt"], [1, "info-container"], [1, "info-wrap"], [1, "controls-wrap"], ["type", "button", "role", "button", 1, "btn-email"], ["type", "button", "role", "button", "class", "btn-absent", 4, "ngIf"], ["type", "button", "role", "button", "class", "btn-attended", 4, "ngIf"], ["type", "button", "role", "button", 1, "btn-absent"], ["type", "button", "role", "button", 1, "btn-attended"]],
      template: function TraineeDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TraineeDetailsComponent_button_10_Template, 1, 0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TraineeDetailsComponent_button_11_Template, 1, 0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "./assets/avatars/", ctx.trainee.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", ctx.trainee.name + " avatar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.trainee.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.trainee.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.trainee.attended);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.trainee.attended);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["[_nghost-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n  align-items: center;\r\n  padding: 10px 0;\r\n  position: relative;\r\n}\r\n\r\n[_nghost-%COMP%]:after {\r\n  position: absolute;\r\n  bottom: -1px;\r\n  display: block;\r\n  box-sizing: border-box;\r\n  content: '';\r\n  background-clip: content-box;\r\n  padding-left: 50px;\r\n  width: 100%;\r\n  height: 2px;\r\n  background-color: #4d4d4d;\r\n}\r\n\r\n@media screen and (min-width: 767px) {\r\n  [_nghost-%COMP%] {\r\n    padding: 20px 0;\r\n  }\r\n\r\n  [_nghost-%COMP%]:after {\r\n    padding-left: 80px;\r\n  }\r\n}\r\n\r\n.avatar-container[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n  overflow: hidden;\r\n  border-radius: 50%;\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n\r\n.avatar-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  display: block;\r\n  max-width: 100%;\r\n  width: 100%;\r\n}\r\n\r\n@media screen and (min-width: 767px) {\r\n  .avatar-container[_ngcontent-%COMP%] {\r\n    margin-right: 20px;\r\n    width: 60px;\r\n    height: 60px;\r\n  }\r\n}\r\n\r\n.info-container[_ngcontent-%COMP%] {\r\n  flex-grow: 1;\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.info-wrap[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-flow: column;\r\n}\r\n\r\n.info-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-bottom: 10px;\r\n  padding-right: 10px;\r\n  font-size: 1rem;\r\n  flex-grow: 1;\r\n  flex-basis: 50%;\r\n}\r\n\r\n@media screen and (min-width: 767px) {\r\n  .info-container[_ngcontent-%COMP%] {\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .info-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 991px) {\r\n  .info-wrap[_ngcontent-%COMP%] {\r\n    flex-grow: 1;\r\n    flex-flow: row nowrap;\r\n    justify-content: space-between;\r\n  }\r\n}\r\n\r\n.controls-wrap[_ngcontent-%COMP%] {\r\n  flex-shrink: 0;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  width: 30px;\r\n  height: 30px;\r\n  border: none;\r\n  background: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  background-image: url('overview-sprite.svg');\r\n  background-size: 200% 600%;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]    + button[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n}\r\n\r\n@media screen and (min-width: 767px) {\r\n  button[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n  button[_ngcontent-%COMP%]    + button[_ngcontent-%COMP%] {\r\n    margin-left: 20px;\r\n  }\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover:not(.btn-absent) {\r\n  background-position-x: -100%;\r\n}\r\n\r\nbutton.btn-email[_ngcontent-%COMP%] {\r\n  background-position-y: -400%;\r\n}\r\n\r\nbutton.btn-absent[_ngcontent-%COMP%] {\r\n  cursor: auto;\r\n  background-position-y: -500%;\r\n}\r\n\r\nbutton.btn-attended[_ngcontent-%COMP%] {\r\n  background-position-y: -300%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3RyYWluZWUtZGV0YWlscy90cmFpbmVlLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHFCQUFxQjtFQUNyQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLFNBQVM7RUFDWDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLDhCQUE4QjtFQUNoQztBQUNGOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZTtFQUNmLDRDQUFpRTtFQUNqRSwwQkFBMEI7QUFDNUI7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLDRCQUE0QjtBQUM5Qjs7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy90cmFpbmVlLWRldGFpbHMvdHJhaW5lZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuOmhvc3Q6YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IC0xcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBjb250ZW50OiAnJztcclxuICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xyXG4gIHBhZGRpbmctbGVmdDogNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ0ZDRkO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCkge1xyXG4gIDpob3N0IHtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICB9XHJcblxyXG4gIDpob3N0OmFmdGVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogODBweDtcclxuICB9XHJcbn1cclxuXHJcbi5hdmF0YXItY29udGFpbmVyIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbi5hdmF0YXItY29udGFpbmVyIGltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCkge1xyXG4gIC5hdmF0YXItY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmluZm8tY29udGFpbmVyIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbmZvLXdyYXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbn1cclxuXHJcbi5pbmZvLXdyYXAgcCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBmbGV4LWJhc2lzOiA1MCU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2N3B4KSB7XHJcbiAgLmluZm8tY29udGFpbmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAuaW5mby1jb250YWluZXIgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTFweCkge1xyXG4gIC5pbmZvLXdyYXAge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRyb2xzLXdyYXAge1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL292ZXJ2aWV3LXNwcml0ZS5zdmcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgNjAwJTtcclxufVxyXG5idXR0b24gKyBidXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCkge1xyXG4gIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICB9XHJcbiAgYnV0dG9uICsgYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuYnV0dG9uOmhvdmVyOm5vdCguYnRuLWFic2VudCkge1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogLTEwMCU7XHJcbn1cclxuYnV0dG9uLmJ0bi1lbWFpbCB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAtNDAwJTtcclxufVxyXG5idXR0b24uYnRuLWFic2VudCB7XHJcbiAgY3Vyc29yOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogLTUwMCU7XHJcbn1cclxuYnV0dG9uLmJ0bi1hdHRlbmRlZCB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAtMzAwJTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TraineeDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'trainee-details',
          templateUrl: './trainee-details.component.html',
          styleUrls: ['./trainee-details.component.css']
        }]
      }], null, {
        trainee: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/components/trainees/trainees.component.ts":
  /*!*******************************************************!*\
    !*** ./src/components/trainees/trainees.component.ts ***!
    \*******************************************************/

  /*! exports provided: TraineesComponent */

  /***/
  function srcComponentsTraineesTraineesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TraineesComponent", function () {
      return TraineesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _trainee_details_trainee_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../trainee-details/trainee-details.component */
    "./src/components/trainee-details/trainee-details.component.ts");

    function TraineesComponent_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Attended");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TraineesComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 100 / ctx_r8.trainees.length * ctx_r8.attended + "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.attended);
      }
    }

    function TraineesComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 100 / ctx_r9.trainees.length * ctx_r9.absent + "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.absent);
      }
    }

    function TraineesComponent_span_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Absent");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TraineesComponent_span_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TraineesComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 100 / ctx_r12.attended * ctx_r12.passed + "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.passed);
      }
    }

    function TraineesComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 100 / ctx_r13.attended * ctx_r13.failed + "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.failed);
      }
    }

    function TraineesComponent_span_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Failed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TraineesComponent_li_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "trainee-details", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var trainee_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("trainee", trainee_r17);
      }
    }

    function TraineesComponent_button_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TraineesComponent_button_18_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.expandList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View all enrolled trainees");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var TraineesComponent = /*#__PURE__*/function () {
      function TraineesComponent() {
        _classCallCheck(this, TraineesComponent);

        this._trainees = [];
        this.isExpanded = false;
        this.attended = 0;
        this.absent = 0;
        this.passed = 0;
        this.failed = 0;
      } // Data input, sort slides according to sort values


      _createClass(TraineesComponent, [{
        key: "expandList",
        value: function expandList() {
          this.isExpanded = true;
        }
      }, {
        key: "trainees",
        set: function set(trainees) {
          this._trainees = trainees;
          this.attended = trainees.filter(function (trainee) {
            return trainee.attended;
          }).length;
          this.absent = trainees.filter(function (trainee) {
            return !trainee.attended;
          }).length;
          this.passed = trainees.filter(function (trainee) {
            return trainee.attended && trainee.passed;
          }).length;
          this.failed = trainees.filter(function (trainee) {
            return trainee.attended && !trainee.passed;
          }).length;
        },
        get: function get() {
          return this._trainees;
        }
      }]);

      return TraineesComponent;
    }();

    TraineesComponent.ɵfac = function TraineesComponent_Factory(t) {
      return new (t || TraineesComponent)();
    };

    TraineesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TraineesComponent,
      selectors: [["trainees"]],
      inputs: {
        trainees: "trainees"
      },
      decls: 19,
      vars: 12,
      consts: [[1, "data-bar"], [4, "ngIf"], [1, "bar-container"], [3, "width", 4, "ngIf"], [1, "trainees-list", 3, "ngClass"], [4, "ngFor", "ngForOf"], ["class", "filter-trainees", 3, "click", 4, "ngIf"], [3, "trainee"], [1, "filter-trainees", 3, "click"]],
      template: function TraineesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enrolled Trainees");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TraineesComponent_span_5_Template, 2, 0, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TraineesComponent_div_7_Template, 2, 3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TraineesComponent_div_8_Template, 2, 3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TraineesComponent_span_9_Template, 2, 0, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TraineesComponent_span_11_Template, 2, 0, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TraineesComponent_div_13_Template, 2, 3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TraineesComponent_div_14_Template, 2, 3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TraineesComponent_span_15_Template, 2, 0, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TraineesComponent_li_17_Template, 2, 1, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TraineesComponent_button_18_Template, 2, 0, "button", 6);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total enrolled: ", ctx.trainees.length, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.attended > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.attended > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.absent > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.absent > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.passed > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.passed > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.failed > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.failed > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isExpanded ? "expanded" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trainees);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isExpanded);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _trainee_details_trainee_details_component__WEBPACK_IMPORTED_MODULE_2__["TraineeDetailsComponent"]],
      styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n  padding-top: 20px;\r\n  border-top: 3px solid #c1272d;\r\n}\r\n\r\n@media screen and (min-width: 767px) {\r\n  [_nghost-%COMP%] {\r\n    padding-top: 50px;\r\n  }\r\n}\r\n\r\n.data-bar[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 20px 0;\r\n  max-width: 360px;\r\n}\r\n\r\n@media screen and (min-width: 767px) {\r\n  .data-bar[_ngcontent-%COMP%] {\r\n    max-width: 500px;\r\n  }\r\n}\r\n\r\n.data-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 0.9rem;\r\n  margin-right: 20px;\r\n  flex-basis: 15%;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.data-bar[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\r\n  margin-left: 20px;\r\n  margin-right: 0;\r\n}\r\n\r\n.data-bar[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-basis: 70%;\r\n}\r\n\r\n.data-bar[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n  align-items: center;\r\n  display: flex;\r\n  color: #fff;\r\n  font-weight: 700;\r\n  font-size: 1rem;\r\n  padding: 5px;\r\n}\r\n\r\n.data-bar[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\r\n  background-color: #8cc63f;\r\n}\r\n\r\n.data-bar[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\r\n  background-color: #ed1c24;\r\n}\r\n\r\n.trainees-list[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n}\r\n\r\n\r\n\r\n.trainees-list[_ngcontent-%COMP%]:not(.expanded)   li[_ngcontent-%COMP%]:nth-child(n+4) {\r\n  display: none;\r\n}\r\n\r\nbutton.filter-trainees[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: 30px auto;\r\n  background: none;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  font-size: 1.2rem;\r\n  text-decoration: underline;\r\n}\r\n\r\nbutton.filter-trainees[_ngcontent-%COMP%]:hover {\r\n  color: #0071bc;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3RyYWluZWVzL3RyYWluZWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7O0FBRUEsb0NBQW9DOztBQUNwQztFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL3RyYWluZWVzL3RyYWluZWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNjMTI3MmQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2N3B4KSB7XHJcbiAgOmhvc3Qge1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZGF0YS1iYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgbWF4LXdpZHRoOiAzNjBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY3cHgpIHtcclxuICAuZGF0YS1iYXIge1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5kYXRhLWJhciBzcGFuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIGZsZXgtYmFzaXM6IDE1JTtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG4uZGF0YS1iYXIgLmJhci1jb250YWluZXIgKyBzcGFuIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5kYXRhLWJhciAuYmFyLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWJhc2lzOiA3MCU7XHJcbn1cclxuLmRhdGEtYmFyIC5iYXItY29udGFpbmVyIGRpdiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG4uZGF0YS1iYXIgLmJhci1jb250YWluZXIgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhjYzYzZjtcclxufVxyXG4uZGF0YS1iYXIgLmJhci1jb250YWluZXIgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkMWMyNDtcclxufVxyXG5cclxuLnRyYWluZWVzLWxpc3Qge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi8qIEhpZGUgYWxsIGJ1dCBmaXJzdCAzIGxpc3QgaXRlbXMgKi9cclxuLnRyYWluZWVzLWxpc3Q6bm90KC5leHBhbmRlZCkgbGk6bnRoLWNoaWxkKG4rNCkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmJ1dHRvbi5maWx0ZXItdHJhaW5lZXMge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMzBweCBhdXRvO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG5idXR0b24uZmlsdGVyLXRyYWluZWVzOmhvdmVyIHtcclxuICBjb2xvcjogIzAwNzFiYztcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TraineesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'trainees',
          templateUrl: './trainees.component.html',
          styleUrls: ['./trainees.component.css']
        }]
      }], null, {
        trainees: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/data/course.ts":
  /*!****************************!*\
    !*** ./src/data/course.ts ***!
    \****************************/

  /*! exports provided: Course */

  /***/
  function srcDataCourseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Course", function () {
      return Course;
    });

    var Course = {
      id: 243,
      title: "Introductory - Transformative atmospherics",
      slideshow: [{
        id: 1,
        sort: 1,
        path: "slide1.png",
        alt: "image1 alt"
      }, {
        id: 2,
        sort: 3,
        path: "slide3.png",
        alt: "image3 alt"
      }, {
        id: 3,
        sort: 2,
        path: "slide2.png",
        alt: "image2 alt"
      }],
      topics: ["Applied greenhouse effect", "Engineered weather cycles", "Biological escalation"],
      quiz: [{
        id: 1,
        sort: 2,
        title: "Question 2 Title",
        options: ["Option 1", "Option 2", "Option 2", "Option 4"]
      }, {
        id: 2,
        sort: 1,
        title: "Question 1 Title",
        options: ["Option 1", "Option 2", "Option 2", "Option 4"]
      }],
      trainees: [{
        id: 1,
        avatar: "avatar-blue.svg",
        attended: true,
        passed: true,
        email: "trainee_a@acme.com",
        name: "Trainee A"
      }, {
        id: 2,
        avatar: "avatar-purple.svg",
        attended: true,
        passed: true,
        email: "trainee_b@acme.com",
        name: "Trainee B"
      }, {
        id: 3,
        avatar: "avatar-green.svg",
        attended: false,
        passed: false,
        email: "trainee_c@acme.com",
        name: "Trainee C"
      }, {
        id: 4,
        avatar: "avatar-yellow.svg",
        attended: true,
        passed: true,
        email: "trainee_d@acme.com",
        name: "Trainee D"
      }, {
        id: 5,
        avatar: "avatar-purple.svg",
        attended: true,
        passed: false,
        email: "trainee_e@acme.com",
        name: "Trainee E"
      }, {
        id: 6,
        avatar: "avatar-blue.svg",
        attended: true,
        passed: true,
        email: "trainee_f@acme.com",
        name: "Trainee F"
      }, {
        id: 7,
        avatar: "avatar-yellow.svg",
        attended: false,
        passed: false,
        email: "trainee_g@acme.com",
        name: "Trainee G"
      }]
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _components_app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./components/app/app.module */
    "./src/components/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["platformBrowser"]().bootstrapModule(_components_app_app_module__WEBPACK_IMPORTED_MODULE_0__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\projects\bugle-test\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map