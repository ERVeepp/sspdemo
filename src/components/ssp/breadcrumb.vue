<template lang="html">
  <div class="breadcrumb flex-row-flex-start-center">
    <template v-if='!arr'>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>demo@yeahmobi.com</el-breadcrumb-item>
        <el-breadcrumb-item
        v-for='(item, index) in $route.matched'
        v-bind:to='item.path'
        v-bind:key='index'
        v-if='index !== 0'
        >{{item.props.default.title | capitalize(lang)}}</el-breadcrumb-item>
      </el-breadcrumb>
    </template>
    <template v-else>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>demo@yeahmobi.com</el-breadcrumb-item>
        <el-breadcrumb-item
        v-for='(item, index) in arr'
        v-bind:to='item.path'
        v-bind:key='index'
        >{{item.title | capitalize(lang)}}</el-breadcrumb-item>
      </el-breadcrumb>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'breadcrumb',
  props: {
    arr: {
      required: false,
      type: Array
    },
    appid: {
      required: false
    }
  },
  computed: {
    ...mapGetters({
      lang: 'lang'
    })
  },
  mounted () {
    // console.log(this.$route.matched)
  },
  methods: {
  },
  filters: {
    capitalize: function (data, index) {
      return data[index]
    }
  }
}
</script>

<style lang="css">
</style>
