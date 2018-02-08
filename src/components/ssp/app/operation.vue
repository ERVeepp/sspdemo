<template lang="html">
  <div class="Docker">
    <div class="pt38">
      <div class="steps-box" v-if='!$route.query.appid'>
        <el-steps :space="200" :active="0" finish-status="success">
          <el-step
          v-for='(item, index) in contents.configure.step.data'
          v-bind:key='index'
          v-bind:title="item"></el-step>
        </el-steps>
      </div>
      <div class="form-box">
        <div class="form-grid">
          <div class="form-left right">
            {{appcontents.configure.operation.platform.title}}
          </div>
          <div class="form-right left">
            <div class="flex-row-flex-start-center h40">
              <el-radio-group v-model="json.platform">
                <el-radio
                v-for='(item, index) in appcontents.configure.operation.platform.data'
                :key='item.value'
                :label="item.value"
                >{{item.label}}</el-radio>
              </el-radio-group>
            </div>
          </div>
        </div>
        <div class="form-grid">
          <div class="form-left right">
            {{appcontents.configure.operation.package_name.title}}
            <span class='color_danger'>*</span>
          </div>
          <div class="form-right left">
            <el-input class='form-input' v-model="json.package_name" v-bind:placeholder="appcontents.configure.operation.package_name.placeholder"></el-input>
            <div class="color_danger" v-if='!required.package_name.type1'>
              {{appcontents.configure.required.msg1}}
            </div>
          </div>
        </div>
        <div class="form-grid">
          <div class="form-left right">
            {{appcontents.configure.operation.appname.title}}
            <span class='color_danger'>*</span>
          </div>
          <div class="form-right left">
            <el-input class='form-input' v-model="json.appname" v-bind:placeholder="appcontents.configure.operation.appname.placeholder"></el-input>
            <div class="color_danger" v-if='!required.appname.type1'>
              {{appcontents.configure.required.msg1}}
            </div>
          </div>
        </div>
        <div class="form-grid">
          <div class="form-left right">
            {{appcontents.configure.operation.category_id.title}}
            <span class='color_danger'>*</span>
          </div>
          <div class="form-right left">
            <el-select v-model="json.category_id" v-bind:placeholder="appcontents.configure.operation.category_id.placeholder">
              <el-option
                v-for="item in appcontents.configure.operation.category_id.data"
                :key="item.value"
                :label="item.label"
                :disabled="item.disabled"
                :value="item.value">
              </el-option>
            </el-select>
            <div class="color_danger" v-if='!required.category_id.type1'>
              {{appcontents.configure.required.msg1}}
            </div>
          </div>
        </div>
        <div class="form-grid">
          <div class="form-left right">
            {{appcontents.configure.operation.dau.title}}
            <span class='color_danger'>*</span>
          </div>
          <div class="form-right left">
            <el-select v-model="json.dau" v-bind:placeholder="appcontents.configure.operation.dau.placeholder">
              <el-option
                v-for="item in appcontents.configure.operation.dau.data"
                :key="item.value"
                :label="item.label"
                :disabled="item.disabled"
                :value="item.value">
              </el-option>
            </el-select>
            <div class="color_danger" v-if='!required.dau.type1'>
              {{appcontents.configure.required.msg1}}
            </div>
          </div>
        </div>
        <div class="form-grid">
          <div class="form-left right">
            {{appcontents.configure.operation.is_open_gps.title}}
          </div>
          <div class="form-right left">
            <div class="flex-row-flex-start-center h40">
              <el-radio
              v-for='(item, index) in appcontents.configure.operation.is_open_gps.data'
              v-model="json.is_open_gps"
              v-bind:key='index'
              v-bind:label="item.value">{{item.label}}</el-radio>
            </div>
          </div>
        </div>
        <div class="form-grid">
          <div class="form-left right">
            {{appcontents.configure.operation.is_free.title}}
          </div>
          <div class="form-right left">
            <div class="flex-row-flex-start-center h40">
              <el-radio
              v-for='(item, index) in appcontents.configure.operation.is_free.data'
              v-model="json.is_free"
              v-bind:key='index'
              v-bind:label="item.value">{{item.label}}</el-radio>
            </div>
          </div>
        </div>
        <div class="form-grid">
          <div class="form-left right">
            {{appcontents.configure.operation.filter.title}}
          </div>
          <div class="form-right left">
            <div class="">
              <el-checkbox-group v-model="json.filter">
                <el-checkbox-button
                v-for="(item, index) in appcontents.configure.operation.filter.data" v-bind:label="item.value"
                v-bind:key="item.value">{{item.label}}</el-checkbox-button>
              </el-checkbox-group>
              <span class='color_danger'>{{appcontents.configure.operation.filter.msg1}}</span>
            </div>
          </div>
        </div>
        <div class="form-grid">
          <div class="form-left right">
            <h2>{{appcontents.configure.operation.advancedsetting}}</h2>
          </div>
          <div class="form-right left"></div>
        </div>
        <div class="form-grid">
          <div class="form-left right">
            {{appcontents.configure.operation.black_list_id.title}}
          </div>
          <div class="form-right left">
            <el-transfer
            v-model="json.black_list_id"
            v-bind:titles="appcontents.configure.operation.black_list_id.toptitle"
            v-bind:data="handle_black_list_id"></el-transfer>
            <span class='color_danger'>{{appcontents.configure.operation.black_list_id.msg1}}</span>
          </div>
        </div>
        <div class="form-grid">
          <div class="form-left right">
            {{appcontents.configure.operation.male.title}}
          </div>
          <div class="form-right left">
            <div class="flex-row-flex-start-center">
              <span>
                <h3>{{appcontents.configure.operation.male.male_left}}</h3>
              </span>
              <div class="m0-10" style='width: 600px;'>
                <el-slider
                  v-model="json.male"
                  show-input>
                </el-slider>
              </div>
              <span>
                <h3>{{appcontents.configure.operation.male.male_right}}</h3>
              </span>
            </div>
          </div>
        </div>
        <div class="form-grid">
          <div class="form-left right">
            {{appcontents.configure.operation.audience_age_id.title}}
          </div>
          <div class="form-right left">
            <div class="flex-row-flex-start-center h40">
              <el-checkbox-group v-model="json.audience_age_id">
                <el-checkbox
                v-for='(item, index) in appcontents.configure.operation.audience_age_id.data'
                v-bind:key='item.value'
                v-bind:label="item.value"
                >{{item.label}}</el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
        </div>
        <div class="form-grid">
          <div class="form-left right"></div>
          <div class="form-right left">
            <el-button type="primary" v-on:click='save'>{{contents.configure.save}}</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import router from '@/router'
export default {
  data () {
    let json = {}
    if (!this.$route.query.appid) {
      // 创建
      let data = {
        appid: null,
        status: 2,
        platform: '1',
        package_name: null,
        appname: null,
        category_id: null,
        dau: null,
        is_open_gps: '1',
        is_free: '1',
        filter: ['googleplaydownload'],
        black_list_id: ['23'],
        male: 50,
        audience_age_id: ['1', '2', '3', '4', '5', '6', '7']
      }
      json = data
    }
    return {
      json: json,
      required: {
        package_name: {
          type1: false
        },
        appname: {
          type1: false
        },
        category_id: {
          type1: false
        },
        dau: {
          type1: false
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      contents: 'contents',
      appcontents: 'app/contents',
      appdata: 'app/appdata'
    }),
    handle_black_list_id () {
      let data = []
      this.appcontents.configure.operation.black_list_id.data.map((ele, index) => {
        data.push({
          key: ele.id,
          label: ele.category
        })
      })
      return data
    },
    submitflag () {
      if (this.required.package_name.type1 && this.required.appname.type1 && this.required.category_id.type1 && this.required.dau.type1) {
        return true
      } else {
        return false
      }
    }
  },
  created () {
    let vm = this
    this.watchrequired()
    if (this.$route.query.appid) {
      // 修改
      this.appdata.list.map((ele, index) => {
        if (ele.appid.toString() === this.$route.query.appid.toString()) {
          vm.$data.json = JSON.parse(JSON.stringify(ele))
        }
      })
    }
  },
  mounted () {
  },
  methods: {
    ...mapActions({
      createappdata: 'app/createappdata',
      editappdata: 'app/editappdata'
    }),
    ...mapMutations({}),
    watchrequired () {
      let vm = this
      vm.$watch('json.package_name', function (newVal, oldVal) {
        if (newVal) {
          vm.required.package_name.type1 = true
        } else {
          vm.required.package_name.type1 = false
        }
      })
      vm.$watch('json.appname', function (newVal, oldVal) {
        if (newVal) {
          vm.required.appname.type1 = true
        } else {
          vm.required.appname.type1 = false
        }
      })
      vm.$watch('json.category_id', function (newVal, oldVal) {
        if (newVal) {
          vm.required.category_id.type1 = true
        } else {
          vm.required.category_id.type1 = false
        }
      })
      vm.$watch('json.dau', function (newVal, oldVal) {
        if (newVal) {
          vm.required.dau.type1 = true
        } else {
          vm.required.dau.type1 = false
        }
      })
      vm.$watch('json.filter', function (newVal, oldVal) {
        if (newVal.length === 0) {
          vm.json.filter = oldVal
        }
      })
    },
    save () {
      if (this.submitflag) {
        let appid = this.$route.query.appid
        if (appid) {
          console.log('修改')
          this.editappdata(this.json)
          router.push({
            path: '/sspdemo/app'
          })
        } else {
          console.log('创建')
          this.json.appid = this.appdata.list[this.appdata.list.length - 1].appid + 1
          this.createappdata(this.json)
          router.push({
            path: '/sspdemo/app/appplacementoperation',
            query: {
              appid: this.json.appid
            }
          })
        }
      }
    }
  }
}
</script>

<style lang="css">
</style>
