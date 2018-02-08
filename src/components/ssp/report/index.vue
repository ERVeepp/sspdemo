<template lang="html">
  <div class="">
    <div class="option-box flex jcsb">
      <div class="flex-row-flex-start-center">
        <el-date-picker
          v-model="date"
          type="daterange"
          align="right"
          unlink-panels
          v-bind:range-separator="contents.configure.datepicker.rangeseparator"
          v-bind:start-placeholder="contents.configure.datepicker.startplaceholder"
          v-bind:end-placeholder="contents.configure.datepicker.endplaceholder"
          :picker-options="pickerOptions">
        </el-date-picker>
        <el-select class='ml-20' v-model="app_value" filterable clearable v-bind:placeholder="contents.configure.select.selectapp">
          <el-option
            v-for="item in app_options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select class='ml-20' v-model="slot_value" filterable clearable v-bind:placeholder="contents.configure.select.selectslot">
          <el-option
            v-for="item in slot_options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select class='ml-20' v-model="country_value" filterable clearable v-bind:placeholder="contents.configure.select.selectcountry">
          <el-option
            v-for="item in country_options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class='ml-20'>
        <el-button type="warning" v-on:click='searchdata'>{{contents.configure.apply}}</el-button>
      </div>
    </div>
    <div class="Docker mt-40">
      <el-tabs type="card" class='index-tab'
      v-model='tabactive'
      >
        <el-tab-pane
        v-for='(item, index) in reportcontents.configure.index.taboptions'
        :key='item.value'
        :label="item.label"
        :name='item.value'></el-tab-pane>
      </el-tabs>
      <div id="echart-box"></div>
      <div class="clearfix m30-0">
        <el-button class='fr' type="primary">{{contents.configure.export}}</el-button>
      </div>
      <div class="pb-30 center setting-element-table">
        <el-table
        :data="tabledata"
        stripe
        border
        size='mini'
        style="width: 100%">
          <el-table-column
            prop='date'
            label="Period"
            sortable
            >
          </el-table-column>
          <el-table-column
            prop='revenue'
            label="Revenue($)"
            sortable
            >
          </el-table-column>
          <el-table-column
            prop='request'
            label="AD Request"
            sortable
            >
          </el-table-column>
          <el-table-column
            prop='fill'
            label="Filled"
            sortable
            >
          </el-table-column>
          <el-table-column
            prop='fillrate'
            label="Fill-Rate(%)"
            sortable
            >
          </el-table-column>
          <el-table-column
            prop='impression'
            label="Pageview"
            sortable
            >
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import echarts from 'echarts'
export default {
  data () {
    return {
      date: [],
      app_value: null,
      slot_value: null,
      country_value: null,
      app_options: [{
        value: 0,
        label: 'demo'
      }],
      slot_options: [{
        value: 0,
        label: 'demo'
      }],
      country_options: [{
        value: 0,
        label: 'demo'
      }],
      tabactive: null,
      datelen: 15,
      pickerOptions: {
        shortcuts: [{
          text: 'Last week',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: 'Last month',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: 'Last 3 months',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      }
    }
  },
  computed: {
    ...mapGetters({
      contents: 'contents',
      appdata: 'app/appdata',
      appplacementdata: 'appplacement/slotdata',
      reportcontents: 'report/contents',
      reportdata: 'report/reportdata'
    }),
    tabledata () {
      let vm = this
      let arr = []
      for (let o = 0; o < vm.datelen; o++) {
        let obj = {}
        for (let i in vm.reportdata) {
          obj[i] = this.reportdata[i].slice((vm.datelen - this.datelen), vm.datelen)[o]
        }
        obj.date = vm.getdatearr(vm.datelen)[o]
        arr.push(obj)
      }
      return arr
    }
  },
  created () {
    this.tabactive = this.reportcontents.configure.index.taboptions[0].value
    this.setdatepicker()
  },
  mounted () {},
  methods: {
    setdatepicker () {
      let end = new Date()
      let start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * this.datelen)
      this.date = [start, end]
    },
    searchdata () {
      if (this.date) {
        let judeday = (this.date[1].getTime() - this.date[0].getTime()) / 1000 / 3600 / 24
        this.datelen = judeday
        if (judeday >= 60) {
          this.datelen = 60
        }
        this.getdata(this.reportcontents.configure.index.taboptions.filter((ele) => {
          return ele.value === this.tabactive
        })[0], this.datelen)
      }
    },
    getdatearr (len) {
      let vm = this
      let arr = []
      for (var i = len; i > 0; i--) {
        let date = vm.date[1] ? new Date(vm.date[1]) : new Date()
        date.setTime(date.getTime() - 3600 * 1000 * 24 * i)
        let datestr = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        arr.push(datestr)
      }
      return arr
    },
    getdata (data, datelen) {
      // revenue dau request fill fillrate impression click ctr ecpm
      for (let i in this.reportdata) {
        if (i === data.value) {
          let datalength = this.reportdata[i].length
          this.showechart(data.label, datelen, this.reportdata[i].slice((datalength - datelen), datalength))
        }
      }
    },
    showechart (name, datelen, data) {
      let vm = this
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('echart-box'))
      let option = {
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: vm.getdatearr(datelen)
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: name,
            data: data,
            type: 'line',
            symbol: 'circle',
            symbolSize: '6',
            itemStyle: {
              normal: {
                color: '#7BB5EC',
                borderColor: '#7BB5EC'
              }
            }
          }
        ]
      }
      // 绘制图表
      myChart.setOption(option)
    }
  },
  watch: {
    tabactive (newval) {
      this.getdata(this.reportcontents.configure.index.taboptions.filter((ele) => {
        return ele.value === newval
      })[0], this.datelen)
    }
  }
}
</script>

<style lang="scss">
.index-tab{
  .el-tabs__header{
    margin-bottom: 0;
    .el-tabs__nav{
      width: 100%;
      .el-tabs__item{
        width: 20%;
        text-align: center;
        background: #f0f2f8;
        margin: 0;
      }
      .is-active{
        background: #1a8eff;
        color: #fff;
      }
    }
  }
}
#echart-box{
  height: 500px;
  border: 1px solid #ccc;
  border-top: 0;
}
</style>
