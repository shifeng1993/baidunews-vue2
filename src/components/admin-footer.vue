
<template>
<!-- footer start -->
<footer>
  <span>Power by shifeng</span>
</footer>
<!-- footer end -->
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      msg: 'Hello Vue!'
    }
  }
}
</script>



<style lang="scss" scoped>
footer {
    position: fixed;
    bottom: 0;
    padding-top: 8px;
    width: 100%;
    height: 24px;
    text-align: center;
    border: 1px solid #dddddd;
    background: #fff;
    span {
        float: right;
        line-height: 6px;
        display: block;
    }
}

</style>
