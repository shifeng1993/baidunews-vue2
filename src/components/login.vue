<template>
<!-- container start -->
<div class="container-fluid" id="login">
  <LoginLogo></LoginLogo>
  <LoginModal></LoginModal>
</div>
</template>

<script>
import LoginLogo from './login-logo'
import LoginModal from './login-modal'

export default {
  name: 'login',
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  components: {
    LoginLogo,
    LoginModal
  }
}
</script>

<style lang="scss" scoped>
body {
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

.container-fluid {
    background: url("../../static/img/background.jpg") no-repeat center center fixed;
    width: 100%;
    height: 100%;
}
@media screen and (max-width:320px) {
    .logo {
        top: 3%;
    }
    .modal {
        top: 23%!important;
        width: 95%;
    }
    body {
        font-size: 12px!important;
    }
    .modal-header {
        padding: 2px !important;
    }
    .modal-body {
        padding: 0 !important;
    }
}
</style>
