import e from"the-answer";var n={name:"VueComponentA",data:()=>({set:new Set,num:666}),created(){!async function(){console.log("this is async function")}()},methods:{increase(){this.set.add(this.num++),console.log(e)},decrease(){this.set.delete(this.num--),this.num--,console.log(e)}}};function t(e,n,t,o,s,i,a,r,c,d){"boolean"!=typeof a&&(c=r,r=a,a=!1);const l="function"==typeof t?t.options:t;let u;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,s&&(l.functional=!0)),o&&(l._scopeId=o),i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=u):n&&(u=a?function(e){n.call(this,d(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,r(e))}),u)if(l.functional){const e=l.render;l.render=function(n,t){return u.call(t),e(n,t)}}else{const e=l.beforeCreate;l.beforeCreate=e?[].concat(e,u):[u]}return t}const o="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function s(e){return(e,n)=>function(e,n){const t=o?n.media||"default":e,s=a[t]||(a[t]={ids:new Set,styles:[]});if(!s.ids.has(e)){s.ids.add(e);let t=n.source;if(n.map&&(t+="\n/*# sourceURL="+n.map.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),s.element||(s.element=document.createElement("style"),s.element.type="text/css",n.media&&s.element.setAttribute("media",n.media),void 0===i&&(i=document.head||document.getElementsByTagName("head")[0]),i.appendChild(s.element)),"styleSheet"in s.element)s.styles.push(t),s.element.styleSheet.cssText=s.styles.filter(Boolean).join("\n");else{const e=s.ids.size-1,n=document.createTextNode(t),o=s.element.childNodes;o[e]&&s.element.removeChild(o[e]),o.length?s.element.insertBefore(n,o[e]):s.element.appendChild(n)}}}(e,n)}let i;const a={};const r=t({render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"container"},[t("h4",[e._v("A")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.num,expression:"num"}],attrs:{type:"number"},domProps:{value:e.num},on:{input:function(n){n.target.composing||(e.num=n.target.value)}}}),e._v(" "),t("button",{on:{click:function(n){return e.increase()}}},[e._v("+")]),e._v(" "),t("button",{on:{click:function(n){return e.decrease()}}},[e._v("-")])])},staticRenderFns:[]},(function(e){e&&e("data-v-0c125f42_0",{source:".container[data-v-0c125f42]{display:flex;flex-direction:column;align-items:center}",map:void 0,media:void 0})}),n,"data-v-0c125f42",false,undefined,!1,s,void 0,void 0);var c={install(e){e.component(r.name,r)}};const d=t({render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"container"},[t("h4",[e._v("B")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.num,expression:"num"}],attrs:{type:"number"},domProps:{value:e.num},on:{input:function(n){n.target.composing||(e.num=n.target.value)}}}),e._v(" "),t("button",{on:{click:function(n){return e.increase()}}},[e._v("+")]),e._v(" "),t("button",{on:{click:function(n){return e.decrease()}}},[e._v("-")])])},staticRenderFns:[]},(function(e){e&&e("data-v-f70dc34a_0",{source:".container[data-v-f70dc34a]{display:flex;flex-direction:column;align-items:center}",map:void 0,media:void 0})}),{name:"VueComponentB",data:()=>({num:666}),methods:{increase(){this.num++},decrease(){this.num--}}},"data-v-f70dc34a",false,undefined,!1,s,void 0,void 0);var l={install(e){e.component(d.name,d)}},u={install(e){e.use(c),e.use(l)}};export{c as A,l as B,u as default};
