<template lang="html">
  <div class="">
    <breadcrumb
    v-bind:arr='arr'
    v-bind:app='$route.query'
    ></breadcrumb>
    <div class="Docker">
      <div class="pt38">
        <div class="steps-box" v-if='$route.query.type=== "create"'>
          <el-steps :space="200" :active="2" finish-status="success">
            <el-step
            v-for='(item, index) in contents.configure.step1.data'
            v-bind:key='index'
            v-bind:title="item"></el-step>
          </el-steps>
        </div>
        <div class="tab-box flex-row-flex-start-center" v-if='$route.query.type === "edit"'>
          <template>
            <router-link class='col-auto-6 mr-20'
            v-bind:to="{
              path: '/sspdemo/app/appplacementoperation',
              query: {
                appid: this.$route.query.appid,
                slotid: this.$route.query.slotid
              }
            }"
            v-bind:exact='true'
            >
              <el-button class='w100'>{{appplacementcontents.configure.tab.general}}</el-button>
            </router-link>
            <router-link class='col-auto-6 mr-20'
            v-bind:to="{
              path: '/sspdemo/app/appplacementvideoconfig',
              query: {
                appid: this.$route.query.appid,
                slotid: this.$route.query.slotid,
                type: 'edit'
              }
            }"
            v-bind:exact='true'
            >
              <el-button type="primary" class='w100'>{{appplacementcontents.configure.tab.mediation}}</el-button>
            </router-link>
            <router-link class='col-auto-6 mr-20'
            v-bind:to="{
              path: '/sspdemo/app/appplacementsort',
              query: {
                appid: this.$route.query.appid,
                slotid: this.$route.query.slotid,
                type: 'edit'
              }
            }"
            v-bind:exact='true'
            >
              <el-button class='w100'>{{appplacementcontents.configure.tab.priority}}</el-button>
            </router-link>
          </template>
        </div>
        <div class="app_ul w100">
          <div class="app_li" v-for='(item, index) in json.extarr'>
            <div class="title_box flex jcsb" v-on:click='toggle(item, index)'>
              <div class="flex">
                <span class='icon-circle status_circle status_off' v-bind:class='{"status_on":item.status == 1}'></span>
                <span class='m0-10'>{{appplacementcontents.configure.videoconfig.arr[index].title}}</span>
              </div>
              <span class='el-icon-caret-right caret' v-bind:class='{"active-icon": showarr[index] == 1}'></span>
            </div>
            <transition name='slide-fade'>
              <div class="page_list" v-if='showarr[index] == 1'>
                <div class="switch_box">
                  <h3 class='m10-0'>{{appplacementcontents.configure.videoconfig.status}}</h3>
                  <div class="m10-0">
                    <my-switch
                    v-bind:switchtype='item.status'
                    v-bind:switchtype_on='1'
                    v-bind:switchtype_off='2'
                    v-on:changeswitch='changeitemstatus(item, index)'
                    ></my-switch>
                  </div>
                </div>
                <div class="con_box mt-30">
                  <h3>{{appplacementcontents.configure.videoconfig.credentials}}</h3>
                  <ul class=''>
                    <li v-for='(obj, i) in item.arr'>
                      <div class="con_title m10-0">
                        <span>{{appplacementcontents.configure.videoconfig.arr[index].extarr[i].title}}</span>
                        <span class='color_danger' v-if='obj.required'>*</span>
                      </div>
                      <div class="flex">
                        <div class="col-auto-10">
                          <el-input
                          v-model='obj.val' :placeholder='appplacementcontents.configure.videoconfig.arr[index].extarr[i].placeholder'></el-input>
                        </div>
                        <div class="col-auto-14 p0-20">
                          <p v-html='appplacementcontents.configure.videoconfig.arr[index].extarr[i].explain'></p>
                        </div>
                      </div>
                      <div class="color_danger" v-if='obj.required && !obj.val'>
                        {{appplacementcontents.configure.required.msg1}}
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="clearfix mt-20">
                  <el-button type="primary" class='fr'
                  @click='save(item, index)'
                  >{{contents.configure.save}}</el-button>
                </div>
              </div>
            </transition>
          </div>
          <div class="clearfix mt-20" v-if='$route.query.type=== "create"'>
            <router-link class='fr'
            v-bind:to="{
              path: '/sspdemo/app/appplacementsort',
              query: {
                appid: this.$route.query.appid,
                slotid: this.$route.query.slotid,
                type: 'create'
              }
            }"
            v-bind:exact='true'
            >
              <el-button type='primary'>{{contents.configure.next}}</el-button>
            </router-link>
          </div>
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
      app_id: this.$route.query.appid,
      slot_id: this.$route.query.slotid,
      sortarr: ['cloudmobi'],
      extarr: [
        {
          type: 'unityads',
          status: 2,
          arr: [
            { name: 'api_app_id', val: null, required: true },
            { name: 'api_key', val: null, required: true },
            { name: 'api_placement_id', val: null, required: true }
          ]
        },
        {
          type: 'applovin',
          status: 2,
          arr: [
            { name: 'api_app_id', val: null, required: true },
            { name: 'api_key', val: null, required: true },
            { name: 'api_placement_id', val: null, required: false }
          ]
        },
        {
          type: 'vungle',
          status: 2,
          arr: [
            { name: 'api_app_id', val: null, required: true },
            { name: 'api_key', val: null, required: true },
            { name: 'api_placement_id', val: null, required: true }
          ]
        },
        {
          type: 'adcolony',
          status: 2,
          arr: [
            { name: 'api_app_id', val: null, required: true },
            { name: 'api_key', val: null, required: true },
            { name: 'api_placement_id', val: null, required: true }
          ]
        },
        {
          type: 'tapjoy',
          status: 2,
          arr: [
            { name: 'api_app_id', val: null, required: true },
            { name: 'api_key', val: null, required: true },
            { name: 'api_placement_id', val: null, required: true },
            { name: 'third_app_id', val: null, required: true }
          ]
        }
      ]
    }
    if (this.$route.query.type === 'create') {
      json = data
    }
    return {
      arr: [],
      json: json,
      required: {
        name: {
          type1: false
        }
      },
      showarr: ['0', '0', '0', '0', '0'],
      submitflagarr: ['0', '0', '0', '0', '0'],
      temporaryitem: null
    }
  },
  computed: {
    ...mapGetters({
      contents: 'contents',
      appdata: 'app/appdata',
      appplacementcontents: 'appplacement/contents',
      appplacementdata: 'appplacement/slotdata',
      appplacementvideoconfig: 'appplacement/videoconfigdata'
    })
  },
  created () {
    this.watchrequired()
    if (this.$route.query.type === 'edit') {
      this.getjson()
    }
  },
  mounted () {
    this.setbreadcrumb()
    if (this.$route.query.type === 'create') {
      this.createvideoconfigdata(JSON.parse(JSON.stringify(this.json)))
    }
  },
  methods: {
    ...mapActions({
      createvideoconfigdata: 'appplacement/createvideoconfigdata',
      editvideoconfigdata: 'appplacement/editvideoconfigdata'
    }),
    ...mapMutations({}),
    getjson () {
      if (this.$route.query.type === 'edit') {
        this.appplacementvideoconfig.list.map((ele) => {
          if (ele.app_id.toString() === this.$route.query.appid.toString() && ele.slot_id.toString() === this.$route.query.slotid.toString()) {
            this.json = JSON.parse(JSON.stringify(ele))
          }
        })
      }
    },
    watchrequired () {
    },
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
        },
        {
          title: ['mediation ad network', '第三方聚合设置']
        }
      ]
    },
    changeitemstatus (item, index) {
      item.status = item.status === 1 ? 2 : 1
    },
    toggle (item, index) {
      var vm = this
      var type = this.showarr[index] === '0' ? '1' : '0'
      this.showarr.splice(index, 1, type)
      if (type === '1') {
        this.temporaryitem = JSON.stringify(item)
      } else {
        if (vm.temporaryitem !== JSON.stringify(item)) {
          this.getjson()
        }
      }
    },
    save (item, index) {
      this.submitflagarr.splice(index, 1, '1')
      item.arr.map((ele) => {
        if (ele.required && !ele.val) {
          this.submitflagarr.splice(index, 1, '0')
        }
      })
      if (this.submitflagarr[index] === '1') {
        this.editvideoconfigdata({
          item: item,
          appid: this.$route.query.appid,
          slotid: this.$route.query.slotid
        })
        this.$data.temporaryitem = JSON.stringify(item)
        this.showarr.splice(index, 1, '0')
      }
    }
  },
  components: {
    breadcrumb
  }
}
</script>
<style media="screen" lang='scss' scoped="scoped">
.explain_p{
  color: #008EFF;
}
.caret{
  transition: all 0.5s ease;
}
.active-icon{
  transform: rotate(90deg);
}
.app_ul{
  padding-bottom: 20px;
  .app_li{
    margin-bottom: 20px;
    border: 1px solid #E5E6E7;
    border-radius: 5px;
    .title_box{
      font-size: 1.6rem;
      padding: 10px;
      background: #E5E6E7;
      cursor: pointer;
      .icon-circle{
        display: block;
        width: 15px;
        height: 15px;
        border-radius: 50%;
      }
      .status_circle{
        transition: all 0.5s ease;
      }
      .status_off{
        background-color: #d9534f;
      }
      .status_on {
        background-color: #5cb85c;
      }
    }
    .page_list{
      padding: 20px;
      .switch_box{

      }
      .con_box{

      }
    }
  }
}
</style>
