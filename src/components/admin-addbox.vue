<template>
<div class="addnews-box">
  <div class="close">关闭</div>
  <div class="wrap">
    <form>
      <p>
        <label for="addtitle">新闻标题</label>
        <input type="text" id="addtitle" class="title" name="title">
      </p>
      <p>
        <label for="addimg">图片地址</label>
        <input type="text" id="addimg" class="img" name="img">
      </p>
      <p>
        <label for="adddesc">新闻描述</label>
        <input type="text" id="adddesc" class="desc" name="desc">
      </p>
      <p>
        <label for="addnewstype">新闻栏目 </label>
        <select id="addnewstype" class="newstype" name="newstype">
                          <option>全部</option>
                              <option value="百家">百家</option>
                              <option value="图片">图片</option>
                              <option value="娱乐">娱乐</option>
                              <option value="社会">社会</option>
                              <option value="军事">军事</option>
                              <option value="女人">女人</option>
                              <option value="搞笑">搞笑</option>
                              <option value="科技">科技</option>
                              <option value="互联网">互联网</option>


                          </select>
        <!--<input type="text" id="addtype" value="">-->
        <!--<input type="submit" id="addtype-btn"  value="添加">-->
      </p>
      <p>
        <label for="addcontent">新闻内容</label>
        <textarea name="content" id="addcontent" class="content"></textarea>
      </p>
      <p>
        <label for="addtime">时间</label>
        <input type="text" id="addtime" class="addtime" name="time" onfocus="this.blur();">
      </p>
      <p class="center">
        <input type="submit" id="add-btn" class="box-btn" value="提交">
        <input type="reset" class="box-btn" value="重置">
      </p>
    </form>
  </div>
</div>
</template>

<script>
export default {
  name: 'AdminAddbox',
  data () {
    return {
      msg: 'Hello Vue!'
    }
  }
}
</script>



<style lang="scss">
.addnews-box {
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
</style>
