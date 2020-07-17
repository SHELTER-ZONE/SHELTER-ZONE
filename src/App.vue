<template>
  <div id="app">
    <Header v-if="!ishome"/>
    <Home v-if="ishome" v-on:entry="closehome" />

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    Header,
    Home
  },
  data(){
      return{
          ishome: true,
      }
  },
  methods:{
      closehome(){
          this.ishome = false
      }
  }
}
</script>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
}
html, body, #app{
    width: 100%;
    height: 100%;
    background-color: rgb(32, 32, 32);
}

</style>
