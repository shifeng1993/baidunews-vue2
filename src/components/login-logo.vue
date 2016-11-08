<template>
  <!-- logo start -->
  <div class="logo"><img src="../../static/img/logo.png" alt="" class="img-responsive"></div>
  <!-- logo end -->
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
.logo {
    max-width: 370px;
    padding: 20px;
    margin: 0 auto;
    position: fixed;
    top: 13%;
    right: 0;
    bottom: 0;
    left: 0;
    .img-responsive{margin:0 auto}

}
</style>
