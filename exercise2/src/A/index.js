import A from './index.vue';

export default {
    install(Vue) {
        Vue.component(A.name, A);
    }
}
