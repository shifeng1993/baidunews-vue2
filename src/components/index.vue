<template>
<div id="container">
  <IndexHeader></IndexHeader>
  <IndexArticle></IndexArticle>
</div>
</template>
<script>
import IndexHeader from './index-header'
import IndexArticle from './index-article'
export default {
  name: 'Admin',
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  components: {
    IndexHeader,
    IndexArticle
  }
}
</script>

<style lang="scss" scoped>@import "../scss/index.scss";</style>
