<template>
  <div id="app">
    <div class="header">header</div>
    {{msg}}
  </div>
</template>

<script>
export default {
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