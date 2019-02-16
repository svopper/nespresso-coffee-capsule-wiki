<template>
  <div id="app" class="container">
    <div class="row">
      <Menu class="col-12 col-md-4" />
      <Content class="col-12 col-md-8" />
    </div>
  </div>
</template>

<script>
  import Menu from './components/Menu'
  import Content from './components/Content'

  export default {
    name: 'app',
    components: {
      Menu,
      Content
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }

  .container {
    max-height: 100px;
  }
</style>