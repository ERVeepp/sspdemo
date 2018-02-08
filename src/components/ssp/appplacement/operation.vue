<template lang="html">
  <div class="">
    <breadcrumb
    v-bind:arr='arr'
    v-bind:app='$route.query'
    ></breadcrumb>
    <div class="Docker">
      <div class="pt38">
        <div class="steps-box" v-if='!$route.query.slotid'>
          <template v-if='json.format != 7'>
            <el-steps :space="200" :active="1" finish-status="success">
              <el-step
              v-for='(item, index) in contents.configure.step.data'
              v-bind:key='index'
              v-bind:title="item"></el-step>
            </el-steps>
          </template>
          <template v-if='json.format == 7'>
            <el-steps :space="200" :active="1" finish-status="success">
              <el-step
              v-for='(item, index) in contents.configure.step1.data'
              v-bind:key='index'
              v-bind:title="item"></el-step>
            </el-steps>
          </template>
        </div>
        <div class="tab-box flex-row-flex-start-center" v-if='$route.query.slotid'>
          <template v-if='json.format == 7'>
            <router-link class='col-auto-6 mr-20'
            v-bind:to="{
              path: '/sspdemo/app/appplacementoperation',
              query: this.$route.query
            }"
            v-bind:exact='true'
            >
              <el-button type="primary" class='w100'>{{appplacementcontents.configure.tab.general}}</el-button>
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
              <el-button class='w100'>{{appplacementcontents.configure.tab.priority}}</el-button>
            </router-link>
          </template>
        </div>
        <div class="form-box">
          <div class="form-grid">
            <div class="form-left right">
              {{appplacementcontents.configure.operation.format.title}}
            </div>
            <div class="form-right left">
              <el-radio-group v-model="json.format" v-if='!$route.query.slotid'>
                <el-radio-button
                v-for='(item, index) in appplacementcontents.configure.operation.format.data'
                :key='item.value'
                :label="item.value">{{item.label}}</el-radio-button>
              </el-radio-group>
              <el-radio-group v-model="json.format" v-if='$route.query.slotid'>
                <el-radio-button
                v-for='(item, index) in appplacementcontents.configure.operation.format.data'
                :key='item.value'
                v-if='item.value == json.format'
                :label="item.value">{{item.label}}</el-radio-button>
              </el-radio-group>
              <div class="" v-if='json.format === "7"'>
                <span class='color_danger'>Please use the rewarded video slot to initialize. Otherwise, rewarded video can not work.</span>
              </div>
            </div>
          </div>
          <div class="form-grid">
            <div class="form-left right">
              {{appplacementcontents.configure.operation.name.title}}
              <span class='color_danger'>*</span>
            </div>
            <div class="form-right left">
              <el-input class='form-input' v-model="json.name" v-bind:placeholder="appplacementcontents.configure.operation.name.placeholder"></el-input>
              <div class="color_danger" v-if='!required.name.type1'>
                {{appplacementcontents.configure.required.msg1}}
              </div>
            </div>
          </div>
          <div class="form-grid">
            <div class="form-left right">
              {{appplacementcontents.configure.operation.template.title}}
            </div>
            <div class="form-right left">
              <div class="flex-row-flex-start-flex-end">
                <el-card style='width: 150px; margin-right: 20px;'
                v-for='(item, index) in appplacementcontents.configure.operation.template.data'
                v-if='judeformat.choice.indexOf(item.value) !== -1'
                :key='index'
                :body-style="{ padding: '0px' }">
                  <img class="image"
                  :src='item.imgsrc'>
                  <div style="padding: 0 14px;">
                    <el-radio class='m10-0 w100' v-model="json.template"
                    :label="item.value">{{item.label}}</el-radio>
                  </div>
                </el-card>
              </div>
              <div class="" style='margin-top: 20px;' v-if='json.template == 0'>
                <textarea
                v-model='json.template_h5'
                v-bind:placeholder="appplacementcontents.configure.operation.template.textareaplaceholder"
                name="name" rows="8" cols="80" class='el-input__inner' style='min-height: 100px; width: 100%; resize: vertical; padding: 20px;'></textarea>
                <div class="color_danger" v-if='!required.template_h5.type1'>
                  {{appplacementcontents.configure.required.msg1}}
                </div>
              </div>
            </div>
          </div>
          <template v-if='json.format != 7'>
            <div class="form-grid">
              <div class="form-left right">
                {{appplacementcontents.configure.operation.fb_id.title}}
              </div>
              <div class="form-right left">
                <el-input class='form-input' v-model.trim="json.fb_id" v-bind:placeholder="appplacementcontents.configure.operation.fb_id.placeholder"></el-input>
              </div>
            </div>
            <div class="form-grid">
              <div class="form-left right">
                {{appplacementcontents.configure.operation.admob_id.title}}
              </div>
              <div class="form-right left">
                <el-input class='form-input' v-model="json.admob_id" v-bind:placeholder="appplacementcontents.configure.operation.admob_id.placeholder"></el-input>
              </div>
            </div>
          </template>
          <template v-if='json.format == 7'>
            <div class="form-grid">
              <div class="form-left right">
                {{appplacementcontents.configure.operation.virtual_currency_name.title}}
              </div>
              <div class="form-right left">
                <el-input class='form-input' v-model.trim="json.virtual_currency_name" v-bind:placeholder="appplacementcontents.configure.operation.virtual_currency_name.placeholder"></el-input>
              </div>
            </div>
            <div class="form-grid">
              <div class="form-left right">
                {{appplacementcontents.configure.operation.server_callback_url.title}}
              </div>
              <div class="form-right left">
                <el-input class='form-input' v-model="json.server_callback_url" v-bind:placeholder="appplacementcontents.configure.operation.server_callback_url.placeholder"></el-input>
              </div>
            </div>
            <div class="form-grid">
              <div class="form-left right">
                {{appplacementcontents.configure.operation.server_callback_key.title}}
              </div>
              <div class="form-right left">
                <el-input class='form-input' v-model="json.server_callback_key" v-bind:placeholder="appplacementcontents.configure.operation.server_callback_key.placeholder"></el-input>
              </div>
            </div>
            <div class="form-grid">
              <div class="form-left right">
                {{appplacementcontents.configure.operation.rewarded_amount.title}}
                <span class='color_danger'>*</span>
              </div>
              <div class="form-right left">
                <el-input class='form-input' v-model="json.rewarded_amount" v-bind:placeholder="appplacementcontents.configure.operation.rewarded_amount.placeholder"></el-input>
                <div class="color_danger" v-if='!required.rewarded_amount.type1'>
                  {{appplacementcontents.configure.required.msg1}}
                </div>
              </div>
            </div>
            <div class="form-grid">
              <div class="form-left right">
                {{appplacementcontents.configure.operation.video_screen_type.title}}
                <span class='color_danger'>*</span>
              </div>
              <div class="form-right left">
                <el-select v-model="json.video_screen_type" v-bind:placeholder="appplacementcontents.configure.operation.video_screen_type.placeholder">
                  <el-option
                    v-for="item in appplacementcontents.configure.operation.video_screen_type.data"
                    :key="item.value"
                    :label="item.label"
                    :disabled="item.disabled"
                    :value="item.value">
                  </el-option>
                </el-select>
                <div class="color_danger" v-if='!required.video_screen_type.type1'>
                  {{appplacementcontents.configure.required.msg1}}
                </div>
              </div>
            </div>
          </template>
          <template  v-if='json.format != 7'>
            <div class="form-grid">
              <div class="form-left right">
                {{appplacementcontents.configure.operation.priority.title}}
                <span class='color_danger'>*</span>
              </div>
              <div class="form-right left">
                <draggable v-model="json.priority">
                  <transition-group>
                    <div v-for="(element, index) in getpriority" :key="element.value" class='drag-li'>
                      <span class='drag-right drag-button'>{{element.label}}</span>
                    </div>
                  </transition-group>
                </draggable>
              </div>
            </div>
          </template>
          <div class="form-grid">
            <div class="form-left right"></div>
            <div class="form-right left">
              <el-button type="primary" v-on:click='save'>{{contents.configure.save}}</el-button>
            </div>
          </div>
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
    if (!this.$route.query.slotid) {
      // 创建
      let data = {
        appid: this.$route.query.appid,
        slotid: null,
        operation: 1,
        format: '1',
        name: null,
        template: '1',
        template_h5: null,
        fb_id: null,
        admob_id: null,
        virtual_currency_name: null,
        server_callback_url: null,
        server_callback_key: null,
        rewarded_amount: null,
        video_screen_type: null,
        priority: ['fb', 'ct', 'ad_c', 'ad_d']
      }
      json = data
    }
    return {
      arr: [],
      json: json,
      required: {
        name: {
          type1: false
        },
        rewarded_amount: {
          type1: false
        },
        video_screen_type: {
          type1: false
        },
        template_h5: {
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
    judeformat () {
      let obj = this.appplacementcontents.configure.operation.format.data.filter((ele) => {
        return ele.value.indexOf(this.json.format) !== -1
      })[0]
      return obj
    },
    submitflag () {
      if (this.required.name.type1 && this.required.rewarded_amount.type1 && this.required.video_screen_type.type1 && this.required.template_h5.type1) {
        return true
      } else {
        return false
      }
    },
    getpriority () {
      let arr = []
      this.json.priority.map((ele) => {
        this.appplacementcontents.configure.operation.priority.data.map((obj) => {
          if (ele === obj.value) {
            arr.push({
              value: ele,
              label: obj.label
            })
          }
        })
      })
      return arr
    }
  },
  created () {
    this.watchrequired()
    let vm = this
    if (this.$route.query.slotid) {
      // 修改
      this.appplacementdata.list.map((ele, index) => {
        if (ele.appid.toString() === this.$route.query.appid.toString() && ele.slotid.toString() === this.$route.query.slotid.toString()) {
          vm.$data.json = JSON.parse(JSON.stringify(ele))
        }
      })
    }
    vm.$watch('json.format', (obj) => {
      this.judetemplate()
    })
  },
  mounted () {
    this.jude_rewarded_amount()
    this.jude_video_screen_type()
    this.jude_template_h5()
    this.setbreadcrumb()
  },
  methods: {
    ...mapActions({
      createappplacementdata: 'appplacement/createslotdata',
      editappplacementdata: 'appplacement/editslotdata'
    }),
    ...mapMutations({}),
    judetemplate () {
      let obj = this.appplacementcontents.configure.operation.format.data.filter((ele) => {
        return ele.value.indexOf(this.json.format) !== -1
      })[0]
      this.json.template = obj.choice.split(',')[0]
    },
    watchrequired () {
      let vm = this
      vm.$watch('json.name', function (newVal, oldVal) {
        if (newVal) {
          vm.required.name.type1 = true
        } else {
          vm.required.name.type1 = false
        }
      })
      vm.$watch('json.rewarded_amount', function (newVal, oldVal) {
        vm.jude_rewarded_amount()
      })
      vm.$watch('json.video_screen_type', function (newVal, oldVal) {
        vm.jude_video_screen_type()
      })
      vm.$watch('json.template', function (newVal, oldVal) {
        vm.jude_template_h5()
      })
      vm.$watch('json.template_h5', function (newVal, oldVal) {
        vm.jude_template_h5()
      })
      vm.$watch('json.format', function (newVal, oldVal) {
        vm.jude_rewarded_amount()
        vm.jude_video_screen_type()
      })
    },
    jude_rewarded_amount () {
      if (this.json.format === '7' && !this.json.rewarded_amount) {
        this.required.rewarded_amount.type1 = false
      } else {
        this.required.rewarded_amount.type1 = true
      }
    },
    jude_video_screen_type () {
      if (this.json.format === '7' && !this.json.video_screen_type) {
        this.required.video_screen_type.type1 = false
      } else {
        this.required.video_screen_type.type1 = true
      }
    },
    jude_template_h5 () {
      if (this.json.template === '0' && !this.json.template_h5) {
        this.required.template_h5.type1 = false
      } else {
        this.required.template_h5.type1 = true
      }
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
          title: ['Operation', '操作']
        }
      ]
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
          this.appplacementdata.list.map((ele) => {
            if (ele.appid.toString() === appid.toString()) {
              appplacementarr.push(ele)
            }
          })
          this.json.slotid = this.appplacementdata.list[this.appplacementdata.list.length - 1].slotid + 1
          this.createappplacementdata(this.json)
          if (vm.json.format === '7') {
            router.push({
              path: '/sspdemo/app/appplacementvideoconfig',
              query: {
                appid: appid,
                slotid: vm.json.slotid,
                type: 'create'
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

<style lang="scss" scoped='scoped'>
.drag-li{
  margin-bottom: 10px;
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
.drag-button{
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: .1s;
  transition: .1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
</style>
