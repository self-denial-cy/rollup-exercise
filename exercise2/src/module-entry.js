import A from './components/A/index.js';
import B from './components/B/index.js';

export {
    A,
    B
}

export default {
    install(Vue) {
        Vue.use(A);
        Vue.use(B);
    }
}
