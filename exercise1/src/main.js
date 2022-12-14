import {sayHi as fn1} from './home.js';
import {sayHi as fn2} from './about.js';
import answer from 'the-answer';

fn1();
fn2();

console.log('this is main');

console.log(answer);

const set = new Set();

set.add(Promise.resolve(true));

async function fn() {
    console.log('this is async function');
}

fn().then(r => console.log('end'));

class Cat {
    constructor(name) {
        this.name = name;
    }

    miao() {
        console.log(`${this.name} miao miao`);
    }
}

const cat = new Cat('Tom');
cat.miao();

export default set;
