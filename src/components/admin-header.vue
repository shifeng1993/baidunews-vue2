<template>
<!-- head start -->
<header>
  <div class="logo">
    <p>百度新闻demo后台</p>
  </div>
  <div id="headernav" @click="headerNav">
  </div>
  <button type="button" name="exit" class="exit fr">退出</button>
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
  },
  methods: {
    headerNav: function () {

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
        padding: 15px 30px;
        p {
            font-family: 微软雅黑;
            font-size: 28px;
        }
    }
    .exit{
      border: 1px solid #fff;
      border-radius: 5px;
      margin-right: 15px;
      padding: 5px 10px;
      margin-top:15px;
      background: #fff
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
