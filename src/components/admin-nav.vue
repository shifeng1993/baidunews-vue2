<template>
<nav>
  <div class="nav-title">————导航栏—————</div>
  <div class="nav-close">关闭</div>
  <div class="nav-info">
    <a href="./admin.html">
      <div class="info-title">全部</div>
    </a>
  </div>
</nav>
</template>
<script>
export default {
  name: 'AdminNav',
  data () {
    return {
      msg: 'Hello Vue!'
    }
  }
}
</script>



<style lang="scss" scoped>
nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    border-style: solid;
    border-width: 1px 1px 1px 1px;
    border-color: #c7bbd8;
    border-bottom: 1px #c7bbd8 solid;
    text-align: center;
    .nav-close {
        text-align: center;
        line-height: 40px;
        margin-left: 90%;
        font-size: 4vw;
        display: none;
    }
    .nav-title {
        display: block;
        height: 25px;
        overflow: hidden;
        border-radius: 2px 2px 0 0;
        border: 1px solid #c7bbd8;
        background: #eae7ef;
        font-family: 微软雅黑;
        font-weight: bold;
    }
    .nav-info {
        .info-title {
            color: #573e7e;
            background-color: #FFF;
            padding: 0;
            height: 35px;
            overflow: hidden;
            border: 1px solid #c7bbd8;
            border-color: #dddddd;
            border-top-right-radius: 3px;
            border-top-left-radius: 3px;
            line-height: 35px;
            margin-top: 2px;
        }
        .info-title:hover {
            background: #77ccff;
        }

        .info-title-add {
            background-color: #5dabf0;
            color: #fff;
        }
    }
}
</style>
