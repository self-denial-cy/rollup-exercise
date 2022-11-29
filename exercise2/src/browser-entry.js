import A from './A/index.js';
import B from './B/index.js';

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(A);
    window.Vue.use(B);
}
