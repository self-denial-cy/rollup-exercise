<template>
  <div class="container">
    <h4>A</h4>
    <input type="number" v-model="num"/>
    <button @click="increase()">+</button>
    <button @click="decrease()">-</button>
  </div>
</template>

<script>
import answer from 'the-answer';

export default {
  name: 'VueComponentA',
  data() {
    return {
      set: new Set(),
      num: 666
    }
  },
  created() {
    async function fn() {
      console.log('this is async function');
    }

    fn();
  },
  methods: {
    increase() {
      this.set.add(this.num++);
      console.log(answer);
    },
    decrease() {
      this.set.delete(this.num--);
      this.num--;
      console.log(answer);
    }
  }
}
</script>

<style scoped lang="less">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    color: red;
  }
}
</style>
