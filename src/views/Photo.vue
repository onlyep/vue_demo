<template>
  <div class="photo-page">
    <h1>相册</h1>
    <div class="photo-wrapper">
      <div class="photo-list">
        <div class="photo"><img src="../static/imgs/1.jpg" alt=""></div>
        <div class="photo"><img src="../static/imgs/2.jpg" alt=""></div>
        <div class="photo"><img src="../static/imgs/3.jpg" alt=""></div>
        <div class="photo"><img src="../static/imgs/4.jpg" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'photo'
}
</script>

<style lang="less" scoped>
.photo-wrapper {
  text-align: center;
  font-size: 0;
}
.photo img {
  width: 100%;
}
</style>