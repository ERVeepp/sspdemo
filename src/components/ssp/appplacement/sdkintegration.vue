<template lang="html">
  <div class="">
    <breadcrumb
    v-bind:arr='arr'
    v-bind:app='$route.query'
    ></breadcrumb>
    <div class="Docker">
      <div class="pt38">
        <div class="link_button mb-20">
          <a href="javascript:;">iOS SDK Integration</a>
        </div>
        <div class="link_button mb-20">
          <a href="javascript:;">Android SDK Integration</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import breadcrumb from '@/components/ssp/breadcrumb.vue'
export default {
  data () {
    return {
      arr: []
    }
  },
  computed: {},
  created () {
  },
  mounted () {
    this.setbreadcrumb()
  },
  methods: {
    setbreadcrumb () {
      this.arr = [
        {
          title: ['Inventory', '应用中心'],
          path: '/sspdemo/app'
        }
      ]
    }
  },
  components: {
    breadcrumb
  }
}
</script>

<style lang="scss" scoped="scoped">
.link_button{
  font-size: 2rem;
  a{
    color: #409EFF;
  }
}
</style>
