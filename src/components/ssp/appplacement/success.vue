<template lang="html">
  <div class="">
    <breadcrumb
    v-bind:arr='arr'
    v-bind:app='$route.query'
    ></breadcrumb>
    <div class="Docker">
      <div class="pt38">
        <div class="steps-box">
          <div class="" v-if='format == 7'>
            <el-steps :space="200" :active="4" finish-status="success">
              <el-step
              v-for='(item, index) in contents.configure.step1.data'
              v-bind:key='index'
              v-bind:title="item"></el-step>
            </el-steps>
          </div>
          <div class="" v-else>
            <el-steps :space="200" :active="2" finish-status="success">
              <el-step
              v-for='(item, index) in contents.configure.step.data'
              v-bind:key='index'
              v-bind:title="item"></el-step>
            </el-steps>
          </div>
        </div>
        <div class="flex">
          <div class="center m30-0" style='width: 500px;'>
            <h1 class='color_primary'>{{appplacementcontents.configure.success.title}}</h1>
            <p class='left' style='color:#b0b0b0;'>{{appplacementcontents.configure.success.dec}}</p>
          </div>
        </div>
        <div class="flex mt-40">
          <router-link class='mr-20'
          v-bind:to="{
            path: '/sspdemo/sdkintegration'
          }"
          v-bind:exact='true'
          >
            <el-button type='primary'>{{appplacementcontents.configure.success.button.integratecode}}</el-button>
          </router-link>
          <router-link class='ml-20'
          v-bind:to="{
            path: '/sspdemo/app/appplacement',
            query: {
              appid: this.$route.query.appid
            }
          }"
          v-bind:exact='true'
          >
            <el-button type='primary'>{{appplacementcontents.configure.success.button.backtoapp}}</el-button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import breadcrumb from '@/components/ssp/breadcrumb.vue'
export default {
  data () {
    let json = {}
    // 创建
    let data = {
      id: null,
      app_id: this.$route.query.appid,
      slot_id: this.$route.query.slotid
    }
    json = data
    return {
      arr: [],
      json: json,
      required: {
        name: {
          type1: false
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      contents: 'contents',
      appdata: 'app/appdata',
      appplacementcontents: 'appplacement/contents',
      appplacementdata: 'appplacement/slotdata'
    }),
    format () {
      let format = null
      this.appplacementdata.list.map((ele) => {
        if (ele.appid.toString() === this.$route.query.appid.toString() && ele.slotid.toString() === this.$route.query.slotid.toString()) {
          console.log(ele)
          format = ele.format
        }
      })
      return format
    }
  },
  created () {},
  mounted () {
    this.setbreadcrumb()
  },
  methods: {
    ...mapActions({
      createappplacementdata: 'appplacement/createappdata',
      editappplacementdata: 'appplacement/editappdata'
    }),
    ...mapMutations({}),
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
          title: [appname, appname],
          path: `/sspdemo/app/appplacement?appid=${this.$route.query.appid}`
        }
      ]
    }
  },
  components: {
    breadcrumb
  }
}
</script>
<style media="screen" lang='scss' scoped="scoped">
.drag-li{
  margin-bottom: 20px;
}
.drag-left{
  display: inline-block;
  text-align: center;
  width: 20px;
  margin-right: 20px;
}
.drag-right{
  width: 180px;
}
</style>
