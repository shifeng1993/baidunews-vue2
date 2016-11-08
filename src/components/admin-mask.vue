<template>
<div class="mask" v-show="maskshow">
</div>
</template>

<script>
export default {
  name: 'mask',
  data () {
    return {
      maskshow: false
    }
  }
}
</script>



<style lang="scss">
.mask {
    width: 100%;
    height: 100%;
    background-color: gray;
    left: 0;
    opacity: 0.5;
    position: absolute;
    top: 0;
    z-index: 9900;
    filter: alpha(opacity=50);
    -moz-opacity: 0.5;
    -khtml-opacity: 0.5;
}
</style>
