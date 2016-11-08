<template>
<!-- article start -->
<article>
  <!-- nav start -->
  <nav>
    <div class="nav-title">————导航栏—————</div>
    <div class="nav-close">关闭</div>
    <div class="nav-info">
      <input class="info-title" type="button" name="info-title" value="全部" @click="navTitle($event)">
      <input class="info-title" v-for="adminnav in adminnavs" type="button" name="info-title" :value="adminnav.type" @click="navTitle">
    </div>
  </nav>
  <!-- nav end -->
  <!-- info start -->
  <div class="info">
    <div class="info-container" id="admin-info">
      <div class="add-news" @click="addNews">添加新闻</div>
      <div class="del-news" @click="delNews">删除新闻</div>
      <div class="serach fr">
        <input v-model="message" class="input" placeholder="请输入要查询的内容">
        <input type="submit" name="name" class="submit" value="查询">
      </div>
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

              <tr v-for="admin in admins">
                <td class="col-md-1"><input type="checkbox" id="num" :value="admin.id"></td>
                <td class="col-md-1">{{admin.id}}</td>
                <td class="col-md-3">{{admin.type}}</td>
                <td class="col-md-4">{{admin.title}}</td>
                <td class="col-md-1">{{new Date(admin.time).toLocaleString()}}</td>
                <td class="col-md-2">
                  <!-- <div class="prev" @click="prevNews">预览</div> -->
                  <div class="update" @click="updateNews">修改</div>
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
export default {
  name: 'AdminArticle',
  data () {
    return {
      message: '',
      admins: [],
      adminnavs: []
    }
  },
  methods: {
    addNews: function () {
    },
    delNews: function (id) {
      window.alert('this is del ')
    },
    updateNews: function (id) {
      window.alert('this is update ')
    },
    navTitle: function (e) {
      this.type = e.target.value
      if (this.type !== '全部') {
        this.$http.get('http://localhost:3333/api/admins' + '?' + 'type=' + '"' + this.type + '"').then(function (res) {
          this.admins = res.data
        }, function (error) {
          console.log(error)
        })
      } else {
        this.$http.get('http://localhost:3333/api/admins', {}).then(function (res) {
          this.admins = res.data
        }, function (error) {
          console.log(error)
        })
      }
    }
  },
  mounted: function () {
    this.$http.get('http://localhost:3333/api/admins', {}).then(function (res) {
      this.admins = res.data
    }, function (error) {
      console.log(error)
    })
    this.$http.get('http://localhost:3333/api/adminnavs', {}).then(function (res) {
      this.adminnavs = res.data
    }, function (error) {
      console.log(error)
    })
  },
  components: {
  }
}
</script>



<style lang="scss">
article {
    position: relative;
    margin-top: 2px;
    width: 100%;
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
                width: 100%;
                height: 100%;
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
            .serach {
                .submit {
                    border: 1px solid #000;
                    border-radius: 5px;
                    padding: 5px 10px;
                    background: #fff;
                }
                .input {
                    border: 1px solid #000;
                    border-radius: 5px;
                    padding: 5px 10px;
                    background:#fff &:focus {
                        width: 300px;
                    }
                }

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
