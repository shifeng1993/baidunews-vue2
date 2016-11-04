<template>
<!-- article start -->
<article>
  <!-- nav start -->
  <AdminNav>
  </AdminNav>
  <!-- nav end -->
  <!-- info start -->
  <div class="info">
    <div class="info-container">
      <div class="add-news">添加新闻</div>
      <div class="del-news">删除新闻</div>
      <div class="row">
        <div class="col-md-12">
          <table class="table table-striped">
            <thead>
              <tr>
                <th class="col-md-1">
                  <input type="checkbox" id="all-num">
                </th>
                <th class="col-md-1">id</th>
                <th class="col-md-3">栏目</th>
                <th class="col-md-4">标题</th>
                <th class="col-md-1">时间</th>
                <th class="col-md-2">功能</th>
              </tr>
            </thead>
            <tbody id="tbody">

              <tr>
                <td class="col-md-1"><input type="checkbox" id="num" value="1"></td>
                <td class="col-md-1">1</td>
                <td class="col-md-3">全部</td>
                <td class="col-md-4">dsasasadadasdsadasd"title"] + '</td>
                <td class="col-md-1">20124</td>
                <td class="col-md-2">
                  <div class="prev">预览</div>
                  <div class="update">修改</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- info end -->
</article>
<!-- article end -->
</template>

<script>
import AdminNav from './admin-nav'
export default {
  name: 'AdminArticle',
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  components: {
    AdminNav
  }
}
</script>



<style lang="scss">
article {
    position: relative;
    margin-top: 2px;
    width: 100%;
    .info {
        position: absolute;
        top: 0;
        left: 204px;
        border: 1px solid #dddddd;
        height: 100%;
        width: 80%;
        .info-container {
            position: absolute;
            padding: 10px;
            width: 100%;
            margin-top: 5px;
            .add-news,
            .del-news {
                display: inline-block;
                padding: 5px 10px;
                margin-left: 15px;
                text-align: center;
                border: 1px solid #000;
                cursor: pointer;
                border-radius: 5px;
            }
            .table {
                border: 1px solid #dddddd;
                margin-top: 20px;
                text-align: center;
                thead {
                    tr {
                        th {
                            text-align: center;
                        }
                    }
                }
                tbody tr td div {
                    padding: 3px 8px;
                    font-size: 12px;
                    font-family: 微软雅黑;
                    border: 1px solid #000;
                    border-radius: 5px;
                    display: inline-block;
                    margin-left: 15px;
                    cursor: pointer;
                }
            }

        }
    }
}
</style>
