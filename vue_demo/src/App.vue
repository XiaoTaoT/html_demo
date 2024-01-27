<template>
  <div id="app">
    <div class="router-container">
      <router-link to="/antv/x6">antv x6</router-link>
      <router-link to="/office/docPreview">docPreview</router-link>
      <router-link to="/watermask/watermask">watermask</router-link>
      <router-link to="/ws/stomp">ws_stomp</router-link>
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

div {
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

<style scoped lang="css">
.router-container{
  display: flex;
  height: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-end;

  padding: 20px;
  box-sizing: content-box;
}
.router-container a{
  display: inline-block;
  padding-bottom: 10px;
}
</style>
