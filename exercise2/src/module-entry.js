import './index.less';
import A from './A/index.js';
import B from './B/index.js';

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
