<template>
<div class="mask">
</div>
</template>

<script>
export default {
  name: 'mask',
  data () {
    return {
      msg: 'Hello Vue!'
    }
  }
}
</script>



<style lang="scss">
.mask {
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
