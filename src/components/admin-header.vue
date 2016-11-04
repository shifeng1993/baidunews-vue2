<template>
<!-- head start -->
<header>
  <div class="logo">
    <p>百度新闻demo后台</p>
  </div>
  <div id="headernav" @click="headernav">
  </div>
</header>
<!-- head end -->
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'Hello Vue!'
    }
  }
}
</script>



<style lang="scss" scoped>
header {
    position: relative;
    margin-bottom: 0;
    height: 70px;
    overflow: visible;
    border-width: 0;
    border-radius: 0;
    background: #5dabf0;
    border-bottom: 2px #5dabf0 solid;
    .logo {
        float: left;
        padding: 0px 30px;
        p {
            font-family: 微软雅黑;
            font-size: 24px;
        }
    }
    .user {
        float: right;
        padding: 21px;
        text-align: center;
        a {
            line-height: 16px;
            border: 1px solid #fff;
            color: #fff;
            border-radius: 10px;
            display: inline-block;
            padding: 5px;
            text-decoration: none;
        }
        &:hover {
            background: #fff;
            text-decoration: none;
        }

    }
}

/*头部结束*/
</style>
