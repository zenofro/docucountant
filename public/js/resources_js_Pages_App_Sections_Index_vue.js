(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_App_Sections_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/App/Sections/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/App/Sections/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_ProjectNavigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components/ProjectNavigation */ "./resources/js/Pages/Components/ProjectNavigation.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
    sections: Array
  },
  data: function data() {
    return {
      navigationMutated: this.navigation,
      draggingRow: null,
      draggingRowIndex: null
    };
  },
  methods: {
    // start dragging
    dragstart: function dragstart(payload) {
      this.draggingRow = payload.row;
      this.draggingRowIndex = payload.index;
      payload.event.dataTransfer.effectAllowed = 'copy';
    },
    // drag over other row
    dragover: function dragover(payload) {
      payload.event.dataTransfer.dropEffect = 'copy';
      payload.event.target.closest('tr').classList.add('is-selected');
      payload.event.preventDefault();
    },
    // leave table while dragging
    dragleave: function dragleave(payload) {
      payload.event.target.closest('tr').classList.remove('is-selected');
      payload.event.preventDefault();
    },
    // drop the dragged row
    drop: function drop(payload) {
      var _this$sections,
          _this = this;

      payload.event.target.closest('tr').classList.remove('is-selected'); // change order of sections

      (_this$sections = this.sections).splice.apply(_this$sections, [payload.index, 0].concat(_toConsumableArray(this.sections.splice(this.draggingRowIndex, 1)))); // change order value of each section


      this.sections.forEach(function (section, index) {
        section.order = index + 1;
      }); // send post request with new order

      axios.post(this.route('app.projects.sections.order', this.project.slug), {
        sections: this.sections
      }).then(function (response) {
        _this.$buefy.toast.open({
          message: 'Order of sections changed successfully',
          type: 'is-success',
          duration: 3000
        });

        _this.navigationMutated = response.data.navigation;
      })["catch"](function (error) {
        _this.$buefy.toast.open({
          message: 'Failed to change order of sections, please try again',
          type: 'is-danger',
          duration: 3000
        });
      });
    }
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

/***/ "./resources/js/Pages/App/Sections/Index.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/App/Sections/Index.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_9b92e570___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=9b92e570& */ "./resources/js/Pages/App/Sections/Index.vue?vue&type=template&id=9b92e570&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/App/Sections/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Index_vue_vue_type_template_id_9b92e570___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_9b92e570___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/App/Sections/Index.vue"
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

/***/ "./resources/js/Pages/App/Sections/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/App/Sections/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/App/Sections/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/Pages/App/Sections/Index.vue?vue&type=template&id=9b92e570&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/App/Sections/Index.vue?vue&type=template&id=9b92e570& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_9b92e570___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_9b92e570___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_9b92e570___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=9b92e570& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/App/Sections/Index.vue?vue&type=template&id=9b92e570&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/App/Sections/Index.vue?vue&type=template&id=9b92e570&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/App/Sections/Index.vue?vue&type=template&id=9b92e570& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
            attrs: { navigation: _vm.navigationMutated, project: _vm.project }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "column" },
        [
          _c(
            "nav",
            {
              staticClass: "breadcrumb",
              attrs: { "aria-label": "breadcrumbs" }
            },
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
                _vm._m(0)
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "inertia-link",
            {
              staticClass: "mb-4",
              attrs: {
                href: _vm.route(
                  "app.projects.sections.create",
                  _vm.project.slug
                ),
                as: "b-button",
                type: "is-success is-light"
              }
            },
            [_vm._v("\n                Create new section\n            ")]
          ),
          _vm._v(" "),
          _c(
            "b-notification",
            { attrs: { "aria-close-label": "Close notification" } },
            [
              _vm._v(
                "\n                Hold and drag a row to change the order of sections.\n            "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "b-table",
            {
              attrs: {
                data: _vm.sections,
                draggable: "",
                id: "test",
                striped: ""
              },
              on: {
                dragstart: _vm.dragstart,
                drop: _vm.drop,
                dragover: _vm.dragover,
                dragleave: _vm.dragleave
              }
            },
            [
              _c("b-table-column", {
                attrs: { label: "Title", width: "300" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(props) {
                      return [
                        _vm._v(
                          "\n                    " +
                            _vm._s(props.row.title) +
                            "\n                "
                        )
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("b-table-column", {
                attrs: { numeric: true, field: "action" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(props) {
                      return [
                        _c(
                          "inertia-link",
                          {
                            staticClass: "has-text-warning",
                            attrs: {
                              href: _vm.route(
                                "app.sections.edit",
                                props.row.id
                              ),
                              as: "b-button",
                              type: "is-text"
                            }
                          },
                          [_c("i", { staticClass: "fas fa-edit" })]
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "is-active" }, [
      _c("a", { attrs: { href: "#" } }, [_vm._v("Sections")])
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