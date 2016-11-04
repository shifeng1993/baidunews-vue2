<template>
<div class="updatenews-box">
  <div class="close">关闭</div>
  <div class="wrap">
    <form>
      <p>
        <label for="updatetitle">新闻标题</label>
        <input type="text" class="title" id="updatetitle" name="title">
      </p>
      <p>
        <label for="updateimg">图片地址</label>
        <input type="text" class="img" id="updateimg" name="img">
      </p>
      <p>
        <label for="updatedesc">新闻描述</label>
        <input type="text" class="desc" id="updatedesc" name="desc">
      </p>
      <p>


      </p>
      <p>
        <label for="updatecontent">新闻内容</label>
        <textarea name="content" id="updatecontent" class="content"></textarea>
      </p>
      <p>
        <label for="updatetime">时间</label>
        <input type="text" class="time" id="updatetime" name="time" onfocus="this.blur();">
      </p>
      <p class="center">
        <input type="submit" id="update-btn" class="box-btn" value="提交">
        <input type="reset" value="重置" class="box-btn">
      </p>
    </form>
  </div>
</div>
</template>

<script>
export default {
  name: 'AdminUpdatebox',
  data () {
    return {
      msg: 'Hello Vue!'
    }
  }
}
</script>



<style lang="scss">
.updatenews-box {
    padding: 10px;
    position: fixed;
    width: 600px;
    height: 400px;
    top: 50%;
    left: 50%;
    margin-left: -300px;
    margin-top: -200px;
    z-index: 9999;
    display: none;
    background-color: #fff;
    border: 2px solid #333;
    border-radius: 10px;
    label {
        font-size: 14px;
    }
    .content,
    .desc,
    .img,
    .newstype,
    .time,
    .title {
        width: 80%;
        margin-left: 12px;
        padding: 3px;
    }

    .content {
        height: 100px;
    }

    .time {
        margin-left: 40px;
    }

    .addtime,
    .updatetime {
        width: 50%;
        margin-left: 40px;
        direction: ltr;
    }

    .newstype {
        width: 30%;
    }

    #addtype {
        margin-left: 20px;
    }

    .box-btn {
        margin: 0 20px;
    }

    .close {
        padding: 3px 8px;
        font-size: 12px;
        font-family: 微软雅黑;
        border: 1px solid #000;
        border-radius: 5px;
        margin-left: 15px;
        display: block;
        cursor: pointer;
    }

    .addnews-box .wrap,
    .updatenews-box .wrap {
        padding: 20px;
    }
}

/*头部结束*/
</style>
