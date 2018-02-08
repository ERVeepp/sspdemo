<template lang="html">
  <div class="">
    <breadcrumb
    v-bind:arr='arr'
    v-bind:app='$route.query'
    ></breadcrumb>
    <div class="Docker">
      <div class="pt38">
        <div class="steps-box" v-if='$route.query.type=== "create"'>
          <el-steps :space="200" :active="3" finish-status="success">
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
              <el-button class='w100'>{{appplacementcontents.configure.tab.mediation}}</el-button>
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
              <el-button type="primary" class='w100'>{{appplacementcontents.configure.tab.priority}}</el-button>
            </router-link>
          </template>
        </div>
        <div class="flex-column-center-flex-end">
          <draggable v-model="myList">
            <transition-group>
              <div v-for="(element, index) in myList" :key="element" class='drag-li'>
                <span class='drag-left'>{{index}}</span>
                <el-button type='primary' class='drag-right'>{{element}}</el-button>
              </div>
            </transition-group>
          </draggable>
        </div>
        <div class="clearfix mt-20" v-if='$route.query.type=== "create"'>
          <router-link class='fr'
          v-bind:to="{
            path: '/sspdemo/app/appplacementsuccess',
            query: {
              appid: this.$route.query.appid,
              slotid: this.$route.query.slotid
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
</template>
<script>
import router from '@/router'
import { mapGetters, mapActions, mapMutations } from 'vuex'
import breadcrumb from '@/components/ssp/breadcrumb.vue'
import draggable from 'vuedraggable'
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
      appplacementdata: 'appplacement/slotdata',
      appplacementvideoconfig: 'appplacement/videoconfigdata'
    }),
    myList: {
      get () {
        let list = []
        this.appplacementvideoconfig.list.map((ele) => {
          if (ele.app_id.toString() === this.$route.query.appid.toString() && ele.slot_id.toString() === this.$route.query.slotid.toString()) {
            list = ele.sortarr
          }
        })
        return list
      },
      set (value) {
        this.editsortarr({
          data: value,
          appid: this.$route.query.appid,
          slotid: this.$route.query.slotid
        })
      }
    }
  },
  created () {
    this.watchrequired()
  },
  mounted () {
    this.setbreadcrumb()
  },
  methods: {
    ...mapActions({
      createappplacementdata: 'appplacement/createappdata',
      editappplacementdata: 'appplacement/editappdata',
      editsortarr: 'appplacement/editsortarr'
    }),
    ...mapMutations({}),
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
          title: ['Ad Network Priority', '第三方聚合优先级']
        }
      ]
    },
    changeitemstatus (item) {
      item.status = item.status === 1 ? 2 : 1
    },
    toggle (item) {
      item.show = !item.show
    },
    save () {
      let vm = this
      if (this.submitflag) {
        let appid = this.$route.query.appid
        let slotid = this.$route.query.slotid
        if (slotid) {
          console.log('修改')
          this.json.slotid = slotid
          this.editappplacementdata(this.json)
          router.push({
            path: '/sspdemo/app/appplacement',
            query: {
              appid: appid
            }
          })
        } else {
          console.log('创建')
          let appplacementarr = []
          this.appplacementdata.list.arr.map((ele) => {
            if (ele.appid.toString() === appid.toString()) {
              appplacementarr.push(ele)
            }
          })
          this.json.slotid = appplacementarr[appplacementarr.length - 1].slotid + 1
          this.createappplacementdata(this.json)
          if (vm.json.format === '7') {
            router.push({
              path: '/sspdemo/app/appplacementvideoconfig',
              query: {
                appid: appid,
                slotid: vm.json.slotid
              }
            })
          } else {
            router.push({
              path: '/sspdemo/app/appplacementsuccess',
              query: {
                appid: appid,
                slotid: vm.json.slotid
              }
            })
          }
        }
      }
    }
  },
  components: {
    breadcrumb,
    draggable
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
