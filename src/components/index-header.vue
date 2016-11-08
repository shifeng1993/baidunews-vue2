<template>
      <header>
          <div class="top">
              <div class="top-left">
                  <div class="top-left-baidu">
                      <a href="http://m.baidu.com"></a>
                  </div>
                  <div class="top-left-userhome">
                      <a href="http://m.news.baidu.com/news#userhome"></a>
                  </div>
              </div>
              <div class="top-middle"></div>
              <div class="top-right">
                  <div class="top-right-search">
                      <a href="http://m.news.baidu.com/news#searchbox"></a>
                  </div>
                  <div class="top-right-subscribe">
                      <!--<a href="http://m.news.baidu.com/news#subscribe"></a>-->
                  </div>
              </div>
          </div>
          <nav>
              <div class="nav-line"></div>
              <div class="content">
                  <table>
                      <tbody>
                      <tr>
                          <td><a href="/"><div id="nav-all"><b></b><span>全部</span></div></a></td>
                      </tr>
                      </tbody>
                  </table>
              </div>
              <div class="nav-line"></div>

          </nav>
      </header>
</template>

<script>
import AdminHeader from './admin-header'
export default {
  name: 'Admin',
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  components: {
    AdminHeader}
}

</script>

<style lang="scss" scoped>
@import "../scss/index.scss";
</style>
