<template lang="html">
  <div class="Docker">
    <div class="m20-0">
      <h3>{{reportcontents.configure.choose.title}}</h3>
    </div>
    <div class="">
      <el-select v-model="choose" placeholder="Please select">
        <el-option
          v-for="item in reportcontents.configure.choose.options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="m20-0">
      <h3>{{reportcontents.configure.special.title}}</h3>
    </div>
    <div class="pl-30">
      <ul>
        <li style='list-style:circle;'>{{reportcontents.configure.special.text_a}}</li>
        <li style='list-style:circle;'>{{reportcontents.configure.special.text_b}}</li>
      </ul>
    </div>
    <div class="set-box mt-20">
      <template v-if='choose == 1'>
        <div class="m20-0">
          <h3>{{reportcontents.configure.account.title}}</h3>
        </div>
        <div class="">
          <el-radio
          v-model="account"
          :key='item.value'
          :label='item.value'
          v-for='(item, index) in reportcontents.configure.account.options'>{{item.label}}</el-radio>
        </div>
        <div class="mt-20">
          <el-button>{{contents.configure.save}}</el-button>
        </div>
      </template>
      <div class="m20-0">
        <h3>{{reportcontents.configure.setup.title}}</h3>
      </div>
      <template v-for='(item, index) in appdata.list'>
          <div class="setting-box flex-row-flex-start-center p10-0">
            <div class="settingbox flex jcsb mr-30"
            v-if='showflagarr[index] == 0'
            v-on:click='edit(item, index)'
            >
              <span class='icon el-icon-edit-outline'></span>
              <span class='ml-20'>{{contents.configure.edit}}</span>
            </div>
            <div class="settingbox flex jcsb mr-30"
            v-if='showflagarr[index] == 1'
            v-on:click='save(item, index)'
            >
              <span class='icon el-icon-upload'></span>
              <span class='ml-20'>{{contents.configure.save}}</span>
            </div>
            <span class='toe'>{{item.appname}}</span>
          </div>
          <table class='full border' v-if='showflagarr[index] == 1'>
            <thead>
              <th>{{reportcontents.configure.setup.title_a}}</th>
              <th>{{reportcontents.configure.setup.title_b}}</th>
              <th>{{reportcontents.configure.setup.title_c}}</th>
            </thead>
            <tbody>
              <tr v-for='(obj, i) in slotdata.list' v-if='obj.appid == item.appid'>
                <td>{{obj.slotid}}</td>
                <td>{{obj.name}}</td>
                <td>
                  <div class="p0-20">
                    <el-input placeholder="请输入内容"></el-input>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  data () {
    return {
      choose: '0',
      account: '0',
      showflagarr: [],
      json: {}
    }
  },
  computed: {
    ...mapGetters({
      contents: 'contents',
      reportcontents: 'report/contents',
      appdata: 'app/appdata',
      slotdata: 'appplacement/slotdata'
    })
  },
  created () {
    let vm = this
    for (let i = 0; i < this.appdata.list.length; i++) {
      vm.showflagarr.push('0')
    }
  },
  methods: {
    ...mapActions({
    }),
    ...mapMutations({}),
    edit (item, index) {
      this.showflagarr.splice(index, 1, '1')
    },
    save (item, index) {
      this.showflagarr.splice(index, 1, '0')
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
.set-box{
  border-top: 1px solid #e0e0e0;
}
.setting-box{
  background: #f0f2f8;
  border-top: 1px solid #d2d2d2;
  border-left: 1px solid #d2d2d2;
  border-right: 1px solid #d2d2d2;
  .settingbox{
    padding: 0 30px 0 10px;
    color: #007ef8;
    border-right: 1px solid #ccc;
  }
}
.setting-box:last-child{
  border-bottom: 1px solid #d2d2d2;
}
</style>
