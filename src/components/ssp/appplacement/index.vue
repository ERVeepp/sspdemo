<template lang="html">
  <div>
    <breadcrumb
    v-bind:arr='arr'
    v-bind:app='$route.query'
    ></breadcrumb>
    <div class="appplacementlist">
      <div class="flex jcsb">
        <router-link
        v-bind:to="{
          path: '/sspdemo/app/appplacementoperation',
          query: this.$route.query
        }"
        v-bind:exact='true'
        >
          <el-button type="primary">{{appplacementcontents.configure.index.createbtn}}</el-button>
        </router-link>
        <div>
          <el-input
            v-bind:placeholder='appcontents.configure.index.searchplaceholder'
            prefix-icon="el-icon-search"
            v-model="search">
          </el-input>
        </div>
      </div>
      <list class='table mt38'
      v-bind:app='$route.query'
      v-bind:search='search'
      ></list>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import breadcrumb from '@/components/ssp/breadcrumb.vue'
import list from '@/components/ssp/appplacement/list.vue'
export default {
  data () {
    return {
      arr: [],
      search: ''
    }
  },
  computed: {
    ...mapGetters({
      lang: 'lang',
      appcontents: 'app/contents',
      appdata: 'app/appdata',
      appplacementcontents: 'appplacement/contents',
      appplacementdata: 'appplacement/slotdata'
    })
  },
  mounted () {
    this.setbreadcrumb()
  },
  methods: {
    setbreadcrumb () {
      let appname = null
      this.appdata.list.map((ele) => {
        if (ele.appid.toString() === this.$route.query.appid.toString()) {
          appname = ele.appname
        }
      })
      this.arr = [
        {
          title: ['Inventory', '应用中心'],
          path: '/sspdemo/app'
        },
        {
          title: [appname, appname]
        }
      ]
    }
  },
  components: {
    breadcrumb,
    list
  }
}
</script>

<style lang="scss" scoped="scoped">
.appplacementlist{
  padding: 38px 38px 0;
}
</style>
