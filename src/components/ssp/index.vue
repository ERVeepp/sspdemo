<template lang="html">
  <div class="mainDocker">
    <router-view name='nav'></router-view>
    <div class="down">
      <div class="sidebarDocker">
        <router-view name='sidebar'></router-view>
      </div>
      <div class="main">
        <router-view name='breadcrumb'></router-view>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted: function () {
    // console.log(this.$route.matched)
  }
}
</script>

<style lang="scss">
.mainDocker{
  min-width: 1280px;
  height: 100%;
  .sidebarDocker{
    width: 230px;
    height: 100%;
    background: #1f2637;
    color: #cfd0d2;
    position: absolute;
  }
  .down{
    width: 100%;
    min-height: calc(100% - 50px);
    position: relative;
    .main{
      padding-left: 230px;
      min-height: 100%;
      .contextDocker{
        padding: 16px 32px 0;
      }
      .breadcrumb{
        height: 50px;
        padding-left: 38px;
        box-sizing: border-box;
        border-top: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
      }
      .Docker{
        padding: 0 38px;
      }
    }
  }
}

</style>
