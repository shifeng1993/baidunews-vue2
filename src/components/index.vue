<template>
<!-- container start -->
<div class="container-fluid">
<h1>我是index</h1>

</div>
<!-- container end -->
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

<style lang="scss">
// @import "../scss/index.scss";
</style>
