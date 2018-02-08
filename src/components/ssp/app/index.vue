<template lang="html">
  <div class="Docker">
    <div class="flex jcsb">
      <router-link to="/sspdemo/app/operation" v-bind:exact='true'>
        <el-button type="primary">{{appcontents.configure.index.createbtn}}</el-button>
      </router-link>
      <div>
        <el-input
          v-bind:placeholder='appcontents.configure.index.searchplaceholder'
          prefix-icon="el-icon-search"
          v-model="search">
        </el-input>
      </div>
    </div>
    <div class="full table mt38">
      <div class="table-thead flex">
        <div class="table-th col-auto-8">
          {{appcontents.configure.index.table.appname}}
        </div>
        <div class="table-th col-auto-8">
          {{appcontents.configure.index.table.status}}
        </div>
        <div class="table-th col-auto-8">
          {{appcontents.configure.index.table.platform}}
        </div>
      </div>
      <div class="table-tbody">
        <template v-for='(item, index) in handlejson'>
          <div class="table-tr flex" style='height: 70px;'>
            <div class="table-td col-auto-8 flex-row-flex-start-center">
              <div class="col-auto-4 flex-row-flex-start-center">
                <router-link
                v-bind:to="{
                  path: '/sspdemo/app/operation',
                  query: {
                    appid: item.appid
                  }
                }"
                v-bind:exact='true'
                >
                  <div class="db img-box m0-10">
                    <img src="../../../img/edit.png" alt="">
                  </div>
                </router-link>
              </div>
              <div class="col-auto-16 flex a-box">
                <div class="" style='width: 43px;'>
                  <img src="../../../img/app-icon-img.png" alt="">
                </div>
                <div class="col-auto-18" style='padding-left: 20px;'>
                  <div class="toe left">
                    <router-link class='left color_a'
                    v-bind:to="{
                      path: '/sspdemo/app/appplacement',
                      query: {
                        appid: item.appid
                      }
                    }"
                    v-bind:exact='true'>{{item.appname}}</router-link>
                  </div>
                  <div class="color_a left" v-on:click='showslot(index)'>
                    <span>{{appcontents.configure.index.table.viewslot}}</span>
                    <span class='link-icon el-icon-caret-bottom' v-bind:class='{"active-link-icon": showflagarr[index].val}'></span>
                  </div>
                </div>
              </div>
              <div class="col-auto-4"></div>
            </div>
            <div class="table-td col-auto-8 flex">
              <el-switch
                v-on:change='changeitemstatus(item)'
                v-model="item.status"
                active-color="#2C93F6"
                inactive-color="#CBCBCB"
                :active-value="1"
                :inactive-value="2">
              </el-switch>
            </div>
            <div class="table-td col-auto-8 flex">
              <span
              v-for='(obj, index) in appcontents.configure.operation.platform.data'
              v-if='obj.value === item.platform'
              >{{obj.label}}</span>
            </div>
          </div>
          <div class="table-tr flex">
            <transition name='fade'>
              <component
              v-if='showflagarr[index].val'
              v-bind:is="type"
              v-bind:app='item'
              ></component>
            </transition>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import appplacementlist from '@/components/ssp/appplacement/list.vue'
export default {
  data () {
    return {
      type: 'appplacementlist',
      showflagarr: [],
      search: '',
      json: {}
    }
  },
  computed: {
    ...mapGetters({
      appcontents: 'app/contents',
      appdata: 'app/appdata'
    }),
    handlejson () {
      var vm = this
      return this.json.list.filter(function (ele) {
        return ele.appname.toString().toLowerCase().indexOf(vm.search.toString().toLowerCase()) !== -1
      })
    }
  },
  created () {
    this.$data.json = JSON.parse(JSON.stringify(this.appdata))
    this.json.list.map(() => {
      this.showflagarr.push({
        val: false
      })
    })
  },
  mounted () {
  },
  methods: {
    ...mapActions({
      changestatus_actions: 'app/changestatus'
    }),
    ...mapMutations({
      changestatus_mutations: 'app/CHANGE_STATUS'
    }),
    changeitemstatus (item) {
      // item.status = item.status === 2 ? 1 : 2
      this.changestatus_actions(item)
    },
    showslot (index) {
      if (!this.showflagarr[index].val) {
        this.showflagarr.map((ele) => {
          ele.val = false
        })
        this.showflagarr[index].val = true
      } else {
        this.showflagarr[index].val = false
      }
    }
  },
  components: {
    appplacementlist
  }
}
</script>

<style lang="scss" scoped="scoped">
.Docker{
  padding-top: 38px !important;
}
.transition{
  transition: all 0.4s ease;
}
.link-icon{
  @extend .transition;
}
.active-link-icon{
  transform: rotateZ(180deg);
}
</style>
