<template lang="html">
  <div class="w100">
    <div class="table-thead flex">
      <div class="table-th col-auto-6">{{appplacementcontents.configure.index.table.slotid}}</div>
      <div class="table-th col-auto-6">{{appplacementcontents.configure.index.table.slotname}}</div>
      <div class="table-th col-auto-6">{{appplacementcontents.configure.index.table.status}}</div>
      <div class="table-th col-auto-6">{{appplacementcontents.configure.index.table.slottype}}</div>
    </div>
    <div class="table-tbody">
      <div class="table-tr flex" style='height:50px;'
      v-for='(item, index) in handlejson'
      v-if='item.appid == app.appid'
      >
        <div class="table-td col-auto-6  flex-row-flex-start-center">
          <div class="col-auto-8">
            <router-link
            v-bind:to="{
              path: '/sspdemo/app/appplacementoperation',
              query: {
                appid: item.appid,
                slotid: item.slotid
              }
            }"
            v-bind:exact='true'
            >
              <div class="db img-box m0-10">
                <img v-bind:src="require('@/img/edit.png')" alt="">
              </div>
            </router-link>
          </div>
          <div class="col-auto-16">
            {{item.slotid}}
          </div>
          <div class="col-auto-8">

          </div>
        </div>
        <div class="table-td col-auto-6 flex">{{item.name}}</div>
        <div class="table-td col-auto-6 flex">
          <el-switch
            v-on:change='changeitemstatus(item)'
            v-model="item.operation"
            active-color="#2C93F6"
            inactive-color="#CBCBCB"
            :active-value="1"
            :inactive-value="2">
          </el-switch>
        </div>
        <div class="table-td col-auto-6 flex">
          <span
          v-for='(obj, index) in appplacementcontents.configure.operation.format.data'
          v-if='obj.value === item.format'
          >{{obj.label}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  data () {
    return {
      json: {}
    }
  },
  props: {
    app: {
      required: false
    },
    search: {
      required: false
    }
  },
  computed: {
    ...mapGetters({
      appplacementcontents: 'appplacement/contents',
      appplacementdata: 'appplacement/slotdata'
    }),
    handlejson () {
      var vm = this
      return this.json.list.filter(function (ele) {
        if (vm.search) {
          return ele.name.toString().toLowerCase().indexOf(vm.search.toString().toLowerCase()) !== -1 || ele.slotid.toString().toLowerCase().indexOf(vm.search.toString().toLowerCase()) !== -1
        } else {
          return true
        }
      })
    }
  },
  created () {
    this.$data.json = JSON.parse(JSON.stringify(this.appplacementdata))
  },
  mounted () {
    // console.log(this.$route)
  },
  methods: {
    ...mapActions({
      changestatus_actions: 'appplacement/changestatus'
    }),
    ...mapMutations({
      changestatus_mutations: 'appplacement/CHANGE_STATUS'
    }),
    changeitemstatus (item) {
      // item.operation = item.operation === 1 ? 2 : 1
      this.changestatus_actions(item)
    }
  }
}
</script>

<style lang="scss" scoped="scoped">

</style>
