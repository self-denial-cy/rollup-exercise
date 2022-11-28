import Vue from 'vue'
import App from './App.vue'
import VueComponent from './bundle.esm.js'

Vue.use(VueComponent);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');
