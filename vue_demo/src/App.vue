<template>
  <div id="app">
    <div style="height: 20px">
      <router-link to="/antv/x6">antv x6</router-link>
    </div>
    <div style="height: calc(100% - 20px)">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>
<style>
body {
  margin: 0px;
  padding: 0px;
  height: 100vh;
  width: 100%;
}
div{
  box-sizing: border-box;
}
</style>
<style>

#app {
  height: 100%;
  width: 100%;
}

.fill {
  height: 100%;
  width: 100%;
  padding: 10px;
}

</style>