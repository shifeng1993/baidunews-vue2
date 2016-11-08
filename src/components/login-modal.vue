<template>
  <!-- login start -->
  <div id="loginModal" class="modal show">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <button type="button" class="close">x</button>
                  <h1 class="text-center text-primary">登录</h1>
              </div>
              <div class="modal-body">
                  <form class="form col-md-12 center-block">
                      <div class="form-group">
                          <input type="text" id="username" class="form-control input-lg" placeholder="电子邮件">
                      </div>
                      <div class="form-group">
                          <input type="password" id="password" class="form-control input-lg" placeholder="登录密码">
                      </div>
                      <div class="form-group">
                          <input type="submit" class="btn btn-primary btn-lg btn-block" id="loginBtn" value="登录">
                          <span><a href="#">找回密码</a></span>
                          <span><a href="#" class="pull-right">注册</a></span>
                      </div>
                  </form>
              </div>
              <div class="modal-footer">Copyright © 2016 shifeng 版本号： Ver 1.0
              </div>
          </div>
      </div>
  </div>
  <!-- login end -->
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
.modal {
    top: 30%!important;
    width: 90%;
    margin: 0 auto;
}
</style>
