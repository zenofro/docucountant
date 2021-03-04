(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_App_Sections_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/App/Sections/Create.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/App/Sections/Create.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_ProjectNavigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components/ProjectNavigation */ "./resources/js/Pages/Components/ProjectNavigation.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ProjectNavigation: _Components_ProjectNavigation__WEBPACK_IMPORTED_MODULE_0__.default
  },
  props: {
    navigation: Array,
    project: Object,
    order: Number
  },
  data: function data() {
    return {
      form: this.$inertia.form({
        title: null,
        order: this.order,
        slug: null
      })
    };
  },
  methods: {
    slugify: function (_slugify) {
      function slugify() {
        return _slugify.apply(this, arguments);
      }

      slugify.toString = function () {
        return _slugify.toString();
      };

      return slugify;
    }(function () {
      this.form.slug = slugify(this.form.title, {
        lower: true
      });
    })
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/ProjectNavigation.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/ProjectNavigation.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    navigation: Array,
    project: Object
  }
});

/***/ }),

/***/ "./resources/js/Pages/App/Sections/Create.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/App/Sections/Create.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_87613314___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=87613314& */ "./resources/js/Pages/App/Sections/Create.vue?vue&type=template&id=87613314&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/Pages/App/Sections/Create.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Create_vue_vue_type_template_id_87613314___WEBPACK_IMPORTED_MODULE_0__.render,
  _Create_vue_vue_type_template_id_87613314___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/App/Sections/Create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Components/ProjectNavigation.vue":
/*!*************************************************************!*\
  !*** ./resources/js/Pages/Components/ProjectNavigation.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProjectNavigation_vue_vue_type_template_id_3a8fa546___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectNavigation.vue?vue&type=template&id=3a8fa546& */ "./resources/js/Pages/Components/ProjectNavigation.vue?vue&type=template&id=3a8fa546&");
/* harmony import */ var _ProjectNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectNavigation.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Components/ProjectNavigation.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ProjectNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ProjectNavigation_vue_vue_type_template_id_3a8fa546___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProjectNavigation_vue_vue_type_template_id_3a8fa546___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Components/ProjectNavigation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/App/Sections/Create.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/App/Sections/Create.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/App/Sections/Create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Components/ProjectNavigation.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/Components/ProjectNavigation.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectNavigation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/ProjectNavigation.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/App/Sections/Create.vue?vue&type=template&id=87613314&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/App/Sections/Create.vue?vue&type=template&id=87613314& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_87613314___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_87613314___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_87613314___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=template&id=87613314& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/App/Sections/Create.vue?vue&type=template&id=87613314&");


/***/ }),

/***/ "./resources/js/Pages/Components/ProjectNavigation.vue?vue&type=template&id=3a8fa546&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/Components/ProjectNavigation.vue?vue&type=template&id=3a8fa546& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectNavigation_vue_vue_type_template_id_3a8fa546___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectNavigation_vue_vue_type_template_id_3a8fa546___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectNavigation_vue_vue_type_template_id_3a8fa546___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectNavigation.vue?vue&type=template&id=3a8fa546& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/ProjectNavigation.vue?vue&type=template&id=3a8fa546&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/App/Sections/Create.vue?vue&type=template&id=87613314&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/App/Sections/Create.vue?vue&type=template&id=87613314& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "columns is-desktop" }, [
      _c(
        "div",
        { staticClass: "column is-3" },
        [
          _c("ProjectNavigation", {
            attrs: { navigation: _vm.navigation, project: _vm.project }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "column" }, [
        _c(
          "nav",
          { staticClass: "breadcrumb", attrs: { "aria-label": "breadcrumbs" } },
          [
            _c("ul", [
              _c(
                "li",
                [
                  _c(
                    "inertia-link",
                    { attrs: { href: _vm.route("app.projects.index") } },
                    [
                      _vm._v(
                        "\n                            Projects\n                        "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c(
                    "inertia-link",
                    {
                      attrs: {
                        href: _vm.route("app.projects.show", _vm.project.slug)
                      }
                    },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.project.name) +
                          "\n                        "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c(
                    "inertia-link",
                    {
                      attrs: {
                        href: _vm.route(
                          "app.projects.sections.index",
                          _vm.project.slug
                        )
                      }
                    },
                    [
                      _vm._v(
                        "\n                            Sections\n                        "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm._m(0)
            ])
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "box" }, [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  _vm.form.post(
                    _vm.route("app.projects.sections.store", _vm.project.slug)
                  )
                }
              }
            },
            [
              _c(
                "b-field",
                {
                  attrs: {
                    message: _vm.form.errors.title,
                    type: _vm.form.errors.title ? "is-danger" : null,
                    label: "Title"
                  }
                },
                [
                  _c("b-input", {
                    attrs: { type: "text" },
                    nativeOn: {
                      keyup: function($event) {
                        return _vm.slugify($event)
                      }
                    },
                    model: {
                      value: _vm.form.title,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "title", $$v)
                      },
                      expression: "form.title"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-field",
                {
                  attrs: {
                    message: _vm.form.errors.slug,
                    type: _vm.form.errors.slug ? "is-danger" : null,
                    label: "Slug"
                  }
                },
                [
                  _c("b-input", {
                    attrs: { type: "text", disabled: "" },
                    model: {
                      value: _vm.form.slug,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "slug", $$v)
                      },
                      expression: "form.slug"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "columns" },
                [
                  _c(
                    "b-field",
                    {
                      staticClass: "column is-6",
                      attrs: {
                        message: _vm.form.errors.order,
                        type: _vm.form.errors.order ? "is-danger" : null,
                        label: "Order"
                      }
                    },
                    [
                      _c("b-numberinput", {
                        model: {
                          value: _vm.form.order,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "order", $$v)
                          },
                          expression: "form.order"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "is-flex is-justify-content-flex-end pt-3" },
                [
                  _c(
                    "b-button",
                    {
                      attrs: {
                        disabled: _vm.form.processing,
                        loading: _vm.form.processing,
                        "native-type": "submit",
                        type: "is-success"
                      }
                    },
                    [
                      _vm._v(
                        "\n                            Create\n                        "
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "is-active" }, [
      _c("a", { attrs: { href: "#" } }, [_vm._v("Create new section")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/ProjectNavigation.vue?vue&type=template&id=3a8fa546&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/ProjectNavigation.vue?vue&type=template&id=3a8fa546& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-menu",
        [
          _c(
            "b-menu-list",
            [
              _c("inertia-link", {
                attrs: {
                  active: _vm
                    .route()
                    .current("app.projects.show", _vm.project.slug),
                  href: _vm.route("app.projects.show", _vm.project.slug),
                  as: "b-menu-item",
                  label: "Home"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm._l(_vm.navigation, function(section) {
            return _c(
              "b-menu-list",
              { key: section.id, attrs: { label: section.title } },
              _vm._l(section.pages, function(page) {
                return _c("inertia-link", {
                  key: page.id,
                  attrs: {
                    active:
                      _vm
                        .route()
                        .current("app.projects.pages.show", {
                          project: _vm.project.slug,
                          page: page.slug
                        }) ||
                      _vm
                        .route()
                        .current("app.projects.pages.edit", {
                          project: _vm.project.slug,
                          page: page.slug
                        }),
                    href: _vm.route("app.projects.pages.show", {
                      project: _vm.project.slug,
                      page: page.slug
                    }),
                    label: page.title,
                    as: "b-menu-item"
                  }
                })
              }),
              1
            )
          })
        ],
        2
      ),
      _vm._v(" "),
      _c("div", { staticClass: "columns mt-5" }, [
        _c(
          "div",
          { staticClass: "column" },
          [
            _c(
              "inertia-link",
              {
                attrs: {
                  href: _vm.route(
                    "app.projects.sections.index",
                    _vm.project.slug
                  ),
                  as: "b-button",
                  expanded: "",
                  type: "is-primary"
                }
              },
              [_vm._v("\n                Edit sections\n            ")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "column" },
          [
            _c(
              "inertia-link",
              {
                attrs: {
                  href: _vm.route(
                    "app.projects.pages.create",
                    _vm.project.slug
                  ),
                  as: "b-button",
                  expanded: "",
                  type: "is-success"
                }
              },
              [_vm._v("\n                Add page\n            ")]
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);