<template lang="html">
  <nav>
    <div class="flex">
      <img src="../../img/new_login_logo.png" alt="">
    </div>
    <div class="flex flex-row-flex-end-center">
      <!--<select class="m0-10" name="" v-model='thislang'>
        <option
        v-for='(item, index) in contents.nav.language.arr'
        v-bind:value='item.val'
        >{{item.text}}</option>
      </select>-->
      <span class='p0-10'>demo@yeahmobi.com</span>
      <div class="user-box">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yonghu"></use>
        </svg>
      </div>
      <a class='p0-50' href="#">{{contents.nav.signout}}</a>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      thislang: null
    }
  },
  computed: {
    ...mapGetters({
      lang: 'lang',
      contents: 'contents',
      appcontents: 'app/contents',
      appplacementcontents: 'appplacement/contents',
      reportcontents: 'report/contents'
    })
  },
  mounted: function () {
    this.thislang = this.lang
  },
  methods: {
    ...mapActions(['increment']),
    // 语言切换
    changelang: function (lang) {
      this.increment(lang)
    }
  },
  watch: {
    thislang: function (newval) {
      this.changelang(newval)
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
  nav{
    width: 100%;
    height: 50px;
    display: grid;
    grid-template-columns: 230px auto;
    border-top: 1px solid #e0e0e0;
    font-size: 1.2rem;
    box-sizing: border-box;
    .user-box{
      padding: 0 20px;
      border-right: 1px solid #ccc;
    }
  }
</style>
