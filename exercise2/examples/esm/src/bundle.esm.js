//
//
//
//
//
//
//
//
//

var script$1 = {
  name: 'VueComponentA',
  data() {
    return {
      num: 666
    }
  },
  methods: {
    increase() {
      this.num++;
    },
    decrease() {
      this.num--;
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "container" }, [
    _c("h4", [_vm._v("A")]),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.num,
          expression: "num",
        },
      ],
      attrs: { type: "number" },
      domProps: { value: _vm.num },
      on: {
        input: function ($event) {
          if ($event.target.composing) {
            return
          }
          _vm.num = $event.target.value;
        },
      },
    }),
    _vm._v(" "),
    _c(
      "button",
      {
        on: {
          click: function ($event) {
            return _vm.increase()
          },
        },
      },
      [_vm._v("+")]
    ),
    _vm._v(" "),
    _c(
      "button",
      {
        on: {
          click: function ($event) {
            return _vm.decrease()
          },
        },
      },
      [_vm._v("-")]
    ),
  ])
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = function (inject) {
    if (!inject) return
    inject("data-v-54c31adb_0", { source: "\n.container[data-v-54c31adb] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\n}\r\n", map: {"version":3,"sources":["D:\\rollup-exercise\\exercise2\\src\\components\\A\\index.vue"],"names":[],"mappings":";AA6BA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AACA","file":"index.vue","sourcesContent":["<template>\r\n  <div class=\"container\">\r\n    <h4>A</h4>\r\n    <input type=\"number\" v-model=\"num\"/>\r\n    <button @click=\"increase()\">+</button>\r\n    <button @click=\"decrease()\">-</button>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  name: 'VueComponentA',\r\n  data() {\r\n    return {\r\n      num: 666\r\n    }\r\n  },\r\n  methods: {\r\n    increase() {\r\n      this.num++\r\n    },\r\n    decrease() {\r\n      this.num--\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n</style>\r\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = "data-v-54c31adb";
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    createInjector,
    undefined,
    undefined
  );

var A = {
    install(Vue) {
        Vue.component(__vue_component__$1.name, __vue_component__$1);
    }
};

//
//
//
//
//
//
//
//
//

var script = {
  name: 'VueComponentB',
  data() {
    return {
      num: 666
    }
  },
  methods: {
    increase() {
      this.num++;
    },
    decrease() {
      this.num--;
    }
  }
};

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "container" }, [
    _c("h4", [_vm._v("B")]),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.num,
          expression: "num",
        },
      ],
      attrs: { type: "number" },
      domProps: { value: _vm.num },
      on: {
        input: function ($event) {
          if ($event.target.composing) {
            return
          }
          _vm.num = $event.target.value;
        },
      },
    }),
    _vm._v(" "),
    _c(
      "button",
      {
        on: {
          click: function ($event) {
            return _vm.increase()
          },
        },
      },
      [_vm._v("+")]
    ),
    _vm._v(" "),
    _c(
      "button",
      {
        on: {
          click: function ($event) {
            return _vm.decrease()
          },
        },
      },
      [_vm._v("-")]
    ),
  ])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-8a0afe10_0", { source: "\n.container[data-v-8a0afe10] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\n}\r\n", map: {"version":3,"sources":["D:\\rollup-exercise\\exercise2\\src\\components\\B\\index.vue"],"names":[],"mappings":";AA6BA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AACA","file":"index.vue","sourcesContent":["<template>\r\n  <div class=\"container\">\r\n    <h4>B</h4>\r\n    <input type=\"number\" v-model=\"num\"/>\r\n    <button @click=\"increase()\">+</button>\r\n    <button @click=\"decrease()\">-</button>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  name: 'VueComponentB',\r\n  data() {\r\n    return {\r\n      num: 666\r\n    }\r\n  },\r\n  methods: {\r\n    increase() {\r\n      this.num++\r\n    },\r\n    decrease() {\r\n      this.num--\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n</style>\r\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-8a0afe10";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    createInjector,
    undefined,
    undefined
  );

var B = {
    install(Vue) {
        Vue.component(__vue_component__.name, __vue_component__);
    }
};

var moduleEntry = {
    install(Vue) {
        Vue.use(A);
        Vue.use(B);
    }
};

export { A, B, moduleEntry as default };
//# sourceMappingURL=bundle.esm.js.map
