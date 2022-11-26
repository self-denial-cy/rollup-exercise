import A from './components/A/index.js';
import B from './components/B/index.js';

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(A);
    window.Vue.use(B);
}
