<template>
<article>
  <div id="article">
    <div class="list">
      <div class="list-item" v-for="admin in admins">
        <div class="list-main">
          <div class="item-img"><img :src="admin.img" :alt="admin.title"></div>
          <div class="item-title">
            <div class="title">{{admin.title}}</div>
            <div class="desc">{{admin.desc}}</div>
          </div>
          <div class="item-time">
            <b>{{new Date(admin.time).toLocaleString()}}</b>
          </div>
        </div>
      </div>
    </div>

  </div>
</article>
</template>

<script>
import AdminHeader from './admin-header'
export default {
  name: 'Admin',
  data () {
    return {
      admins: []
    }
  },
  mounted: function () {
    this.$http.get('http://localhost:3333/api/admins', {}).then(function (res) {
      this.admins = res.data
    }, function (error) {
      console.log(error)
    })
  },
  components: {
    AdminHeader
  }
}
</script>

<style lang="scss" scoped>@import "../scss/index.scss";</style>
