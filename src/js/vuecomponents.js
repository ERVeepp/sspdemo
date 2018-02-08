/* eslint-disable no-undef */
// 开关
import Vue from 'vue'
Vue.component('my-switch', {
  props: {
    // 当前开关的状态
    switchtype: {
      required: true
    },
    // 开关打开时的值
    switchtype_on: {
      required: true
    },
    // 开关关闭时的值
    switchtype_off: {
      required: true
    }
  },
  template: `
  <div class="switchBox">
    <div class="flex switch"
    v-bind:class="{switch_on: switchtype == switchtype_on, switch_off: switchtype == switchtype_off}"
    v-on:click="changetype($event)"
    >
      <span class="switch_font">ON</span>
      <span class="switch_circle"></span>
      <span class="switch_font">OFF</span>
    </div>
  </div>
  `,
  methods: {
    changetype: function (e) {
      this.$emit('changeswitch')
    }
  }
})

// 模糊搜索
Vue.component('my-search', {
  data: function () {
    return {
      // show_type 0 为隐藏 1 为显示
      show_type: 0,
      // 搜索内容
      search: '',
      // 搜索框是否能写
      readonly: 0
    }
  },
  props: {
    // placeholder
    choice: {
      required: true
    },
    // 输入的列表对象
    list: {
      type: Array
    }
  },
  template: `
  <div class='my-search flex'>
    <div class='my-search-input-box flex flex-nowrap' v-on:click.stop='show'>
      <input type="text" class="my-search-input"
      v-model.trim='search'
      v-bind:placeholder='placeholder'
      v-bind:readonly='readonly == 0'
      >
      <div class='my-search-icon  glyphicon glyphicon-triangle-bottom'
      v-bind:class='{"my-search-icon-up": show_type == 1}'
      ></div>
    </div>
    <div>
      <transition name='slide-fade'>
        <div class='my-search-box'
        v-if='show_type == 1'
        >
          <transition-group
          tag='ul'
          name='list'
          class='my-search-ul'
          >
            <li
            class='my-search-li'
            v-for='(item, index) in afterlist'
            v-bind:key='index'
            v-bind:data-index='index'
            v-on:click='choiceli(item)'
            >
              <span v-text='item'></span>
            </li>
          </transition-group>
        </div>
      </transition>
    </div>
  </div>
  `,
  mounted: function () {
    // 点击其他任何地方docker隐藏
    this.hide()
  },
  computed: {
    // 每次输入搜索内容时都重新计算
    afterlist: function () {
      var vm = this
      return this.list.filter(function (item) {
        return item.toString().toLowerCase().indexOf(vm.search.toString().toLowerCase()) !== -1
      })
    },
    placeholder: function () {
      var vm = this
      var placeholder
      this.list.map(function (element) {
        if (element === vm.choice) {
          placeholder = element
        }
      })
      return placeholder
    }
  },
  methods: {
    show: function () {
      this.search = ''
      if (this.list.length !== 0) {
        this.show_type = 1
        this.readonly = 1
      } else {
        this.readonly = 0
      }
    },
    hide: function () {
      var vm = this
      document.addEventListener('click', function (e) {
        vm.show_type = 0
        // e.stopPropagation()
      }, true)
    },
    choiceli: function (item) {
      this.search = ''
      this.show_type = 0
      this.$emit('event', item)
    }
  },
  watch: {
    list: function (newval) {
      this.search = ''
    }
  }
})
// 分页组件
Vue.component('my-page', {
  props: {
    // 当前是第几页
    page: {
      required: true
    },
    // 一页显示多少个
    pagesize: {
      required: true
    },
    // 一共的列表数
    total: {
      required: true
    }
  },
  computed: {
    list: function () {
      return Math.ceil(this.total / this.pagesize)
    }
  },
  template: `
  <div class="flex">
    <ul class="pagination m0" v-if='list > 1'>
      <li
      v-bind:class='{"disabled": page === 1}'
      v-on:click='page_reduce()'
      >
        <a>&laquo;</a>
      </li>
      <template v-for='(item, index) in list'>
        <li
        v-bind:class='{"active": (index + 1) === page}'
        v-on:click='page_clickgo(index + 1)'
        >
          <a
          class='un'
          v-text='index + 1'
          ></a>
        </li>
      </template>
      <li
      v-bind:class='{"disabled": page === list}'
      v-on:click='page_plus()'
      >
        <a>&raquo;</a>
      </li>
    </ul>
  </div>
  `,
  methods: {
    // 上一页
    page_reduce: function () {
      if (this.page > 1) {
        this.$emit('page_reduce')
      }
    },
    // 下一页
    page_plus: function () {
      if (this.page < this.list) {
        this.$emit('page_plus')
      }
    },
    // 选择到哪一页
    page_clickgo: function (page) {
      // page 为当前的页数
      this.$emit('page_clickgo', page)
    }
  }
})
// 多项搜索
Vue.component('my-multiplesearch', {
  data: function () {
    return {
      list: [],
      choicelist: [],
      search: '',
      showtype: false,
      searchFlag: false
    }
  },
  props: {
    allarr: {
      required: true
    },
    choicearr: {
      required: false
    }
  },
  template: `
  <div class='my-search flex flex-nowrap'
    v-on:click='show'
  >
    <div class='my-search-input-box flex flex-row-flex-start-center flex-wrap'>
      <div v-for='(item, index) in choicelist' class='my-search-input-docker docker-border'>
        <span v-text='item'></span>
        <span class='icon-remove removeIcon cp' v-on:click='removechoiceli(item, index)'></span>
      </div>
      <div class='my-search-input-docker p0 m0 of-h' v-bind:class='{"h0":!searchFlag}'>
        <input type="text" v-bind:class='idname' class="my-search-input my-multiplesearch-input" v-model='search'>
      </div>
    </div>
    <template v-if='showtype'>
      <transition name='slide-fade'>
        <div class='my-search-box'>
          <transition-group
          tag='ul'
          name='list'
          class='my-search-ul'
          >
            <li
            class='my-search-li'
            v-bind:key='-2033'
            v-on:click='choiceall'
            v-if='afterlist.length != 0'
            >
              <span>全选</span>
            </li>
            <li
            class='my-search-li'
            v-for='(item, index) in afterlist'
            v-bind:key='index'
            v-bind:data-index='index'
            v-on:click='choiceli(item)'
            >
              <span v-text='item'></span>
            </li>
          </transition-group>
        </div>
      </transition>
    </template>
  </div>
  `,
  mounted: function () {
    this.hide()
    this.getlist()
    this.getchoicelist()
  },
  computed: {
    // 每次输入搜索内容时都重新计算
    afterlist: function () {
      var vm = this
      return this.list.filter(function (item) {
        return item.toString().toLowerCase().indexOf(vm.search.toString().toLowerCase()) !== -1
      })
    },
    idname: function () {
      return `input${parseInt(Math.random() * 1000)}`
    }
  },
  methods: {
    choiceall: function () {
      var vm = this
      this.afterlist.map(function (ele) {
        vm.choicelist.push(ele)
      })
      this.$emit('submitchoicearr', vm.choicelist)
    },
    judesearchflag: function () {
      if (this.choicelist.length === 0) {
        this.searchFlag = true
      } else {
        this.searchFlag = false
      }
    },
    getlist: function () {
      var vm = this
      this.allarr.map(function (ele) {
        vm.list.push(ele)
      })
    },
    getchoicelist: function () {
      var vm = this
      vm.choicelist.splice(0)
      if (this.choicearr && this.choicearr.length !== 0) {
        this.choicearr.map(function (ele) {
          vm.choicelist.push(ele)
        })
      }
      this.judesearchflag()
    },
    show: function () {
      this.searchFlag = true
      this.showtype = true
      this.search = ''
      // inputj聚焦
      this.inputfocus()
    },
    inputfocus: function () {
      var dom = document.querySelector('.' + this.idname)
      dom.focus()
    },
    hide: function () {
      var vm = this
      document.addEventListener('click', function (e) {
        vm.showtype = false
        vm.judesearchflag()
        // e.stopPropagation()
      }, true)
    },
    choiceli: function (item) {
      this.choicelist = this.choicelist.filter(function (ele) {
        return ele !== item
      })
      this.choicelist.push(item)
      this.updatachoicelist(this.choicelist)
    },
    removechoiceli: function (item, index) {
      this.choicelist.splice(index, 1)
      this.list.push(item)
      this.updatachoicelist(this.choicelist)
    },
    updatachoicelist: function (list) {
      this.$emit('submitchoicearr', list)
    }
  },
  watch: {
    allarr: function () {
      this.getlist()
    },
    choicearr: function () {
      this.getchoicelist()
    },
    choicelist: function () {
      var vm = this
      if (this.choicelist.length !== 0) {
        vm.choicelist.map(function (ele, i) {
          vm.list.map(function (obj, j) {
            if (ele.toString() === obj.toString()) {
              vm.list.splice(j, 1)
            }
          })
        })
      }
      vm.list.sort()
    }
  }
})
// 检测linkurl
Vue.component('my-updatelink', {
  props: {
    should: {
      required: true
    },
    val: {
      required: false
    },
    name: {
      required: true
    }
  },
  template: `<div class='full'>
    <input type="text" class="form-control" v-model.trim='inputval' v-bind:name='name'>
    <div class='db'>
      <slot name='required_msg_1' v-if='!required.type1'></slot>
      <slot name='required_msg_2' v-if='!required.type2'></slot>
    </div>

  </div>`,
  data () {
    return {
      inputval: null,
      required: {
        type1: true,
        type2: true
      }
    }
  },
  created: function () {
    this.judeinputval()
  },
  methods: {
    judeinputval: function (data) {
      if (data) {
        this.required.type1 = true
        // 网址正则
        var reg1 = new RegExp('(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]')
        // 空格正则
        var reg2 = new RegExp(/\s/g)
        if (reg1.test(data) && !reg2.test(data)) {
          this.required.type2 = true
        } else {
          this.required.type2 = false
        }
      } else {
        this.required.type2 = true
        if (this.should === 'true') {
          this.required.type1 = false
        } else {
          this.required.type1 = true
        }
      }
      this.changerequired()
    },
    changerequired: function () {
      var obj = this.required
      var flag = true
      for (var i in obj) {
        if (!obj[i]) {
          flag = false
        }
      }
      this.$emit('change', flag)
    }
  },
  watch: {
    inputval: function (newval) {
      this.judeinputval(newval)
    },
    val: function (newval) {
      this.inputval = newval
    }
  }
})
