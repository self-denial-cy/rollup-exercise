<template>
  <div class="container">
    <h4>B</h4>
    <input type="number" v-model="num"/>
    <button @click="increase()">+</button>
    <button @click="decrease()">-</button>
  </div>
</template>

<script>
export default {
  name: 'VueComponentB',
  data() {
    return {
      num: 666
    }
  },
  methods: {
    increase() {
      this.num++
    },
    decrease() {
      this.num--
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
