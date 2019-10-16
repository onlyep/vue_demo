<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: { Header},
  data() {
    return {
      msg: 'hello ep'
    }
  }
}
</script>

<style lang="less">
.header {
  display: flex;
  height: 20vh;
  background: teal;
}
</style>