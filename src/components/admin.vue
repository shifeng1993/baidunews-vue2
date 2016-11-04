<template>
<!-- container start -->
<div class="container-fluid">
<AdminHeader></AdminHeader>
<AdminArticle></AdminArticle>
<AdminFooter></AdminFooter>
<AdminMask></AdminMask>
<AdminAddbox></AdminAddbox>
<AdminUpdatebox></AdminUpdatebox>
</div>
<!-- container end -->
</template>

<script>
import AdminHeader from './admin-header'
import AdminArticle from './admin-article'
import AdminFooter from './admin-footer'
import AdminMask from './admin-mask'
import AdminAddbox from './admin-addbox'
import AdminUpdatebox from './admin-updatebox'

export default {
  name: 'Admin',
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  components: {
    AdminHeader,
    AdminArticle,
    AdminFooter,
    AdminMask,
    AdminAddbox,
    AdminUpdatebox}
}

</script>

<style lang="scss">
//以下是全局样式
* {
    font-family: 微软雅黑;
}
.center {
    margin: 0 auto;
    text-align: center;
}

a {
    color: #000;
}
a:hover {
    color: #5dabf0;
}

.container-fluid {
    margin: 0;
    padding: 0;
}
</style>
