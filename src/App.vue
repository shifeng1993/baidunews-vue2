<template>
<div id="app">
  <router-view></router-view>
</div>
</template>

<script>
import Admin from './components/admin'
import Login from './components/login'
export default {
  name: 'app',
  components: {
    Admin,
    Login
  }
}
</script>

<style lang="scss">
body {
    margin: 0;
    padding: 0;
}
#app,
body,
html {
    height: 100%;
    width: 100%;
}
.fl {
    float: left;
}
.fr {
    float: right;
}
button,
input,
select,
textarea {
    outline: none;
}
</style>
