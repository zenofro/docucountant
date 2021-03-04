(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_App_Projects_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/App/Projects/Edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/App/Projects/Edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
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
  props: {
    project: Object
  },
  data: function data() {
    return {
      form: this.$inertia.form({
        name: this.project.name,
        slug: this.project.slug,
        short_description: this.project.short_description,
        description: this.project.description
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
      this.form.slug = slugify(this.form.name, {
        lower: true
      });
    }),
    destroy: function destroy() {
      var _this = this;

      this.$swal({
        icon: 'warning',
        iconColor: 'red',
        title: 'Are you sure?',
        html: '<small>Deleting this project will remove all pages in it aswell!</small>',
        showCancelButton: true,
        confirmButtonText: 'Delete',
        confirmButtonColor: 'red'
      }).then(function (result) {
        if (result.isConfirmed) {
          _this.$swal.showLoading();

          _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.delete(route('app.projects.destroy', _this.project.slug));
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/App/Projects/Edit.vue":
/*!**************************************************!*\
  !*** ./resources/js/Pages/App/Projects/Edit.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_37e0e838___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=37e0e838& */ "./resources/js/Pages/App/Projects/Edit.vue?vue&type=template&id=37e0e838&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/Pages/App/Projects/Edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Edit_vue_vue_type_template_id_37e0e838___WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_37e0e838___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/App/Projects/Edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/App/Projects/Edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/App/Projects/Edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/App/Projects/Edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/App/Projects/Edit.vue?vue&type=template&id=37e0e838&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/App/Projects/Edit.vue?vue&type=template&id=37e0e838& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_37e0e838___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_37e0e838___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_37e0e838___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=37e0e838& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/App/Projects/Edit.vue?vue&type=template&id=37e0e838&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/App/Projects/Edit.vue?vue&type=template&id=37e0e838&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/App/Projects/Edit.vue?vue&type=template&id=37e0e838& ***!
  \************************************************************************************************************************************************************************************************************************/
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
                [_vm._v("Projects")]
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
                [_vm._v(_vm._s(_vm.project.name))]
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
              _vm.form.patch(_vm.route("app.projects.update", _vm.project.slug))
            }
          }
        },
        [
          _c(
            "b-field",
            {
              attrs: {
                message: _vm.form.errors.name,
                type: _vm.form.errors.name ? "is-danger" : null,
                label: "Name"
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
                  value: _vm.form.name,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "name", $$v)
                  },
                  expression: "form.name"
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
            "b-field",
            {
              attrs: {
                message: _vm.form.errors.short_description,
                type: _vm.form.errors.short_description ? "is-danger" : null,
                label: "Short description"
              }
            },
            [
              _c("b-input", {
                attrs: { type: "text" },
                model: {
                  value: _vm.form.short_description,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "short_description", $$v)
                  },
                  expression: "form.short_description"
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
                message: _vm.form.errors.description,
                type: _vm.form.errors.description ? "is-danger" : null,
                label: "Description"
              }
            },
            [
              _c("b-input", {
                attrs: { type: "textarea" },
                model: {
                  value: _vm.form.description,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "description", $$v)
                  },
                  expression: "form.description"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "is-flex is-justify-content-space-between pt-3 buttons"
            },
            [
              _c(
                "b-button",
                {
                  attrs: { type: "is-danger" },
                  on: {
                    click: function($event) {
                      return _vm.destroy()
                    }
                  }
                },
                [_vm._v("Delete")]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  attrs: {
                    disabled: _vm.form.processing,
                    "native-type": "submit",
                    type: "is-success",
                    loading: _vm.form.processing
                  }
                },
                [_vm._v("Edit")]
              )
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
      _c("a", { attrs: { href: "#", "aria-current": "page" } }, [
        _vm._v("Edit")
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);