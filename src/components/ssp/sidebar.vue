<template lang="html">
  <div class="sidebar">
    <div class="sidebar-box">
      <router-link
      v-for='(item, index) in contents.sidebar.arr'
      v-bind:to='item.path'
      v-bind:key='item.title'
      v-bind:exact='false'>
        <div class="sidebar-a jcsb flex cp fb">
          <div class="flex">
            <div class="pr-10">
              <!-- <svg class="icon" aria-hidden="true">
                <use v-bind:xlink:href="item.iconname"></use>
              </svg> -->
              <div class="img_a">
                <img src="" alt="" v-bind:src='item.iconimgsrc'>
              </div>
              <div class="img_b">
                <img src="" alt="" v-bind:src='item.activeiconimgsrc'>
              </div>
            </div>
            <span>{{item.title}}</span>
          </div>
          <span class='link-icon el-icon-caret-bottom'></span>
        </div>
        <div class="second_menu">
          <div class="second_menu_box">
            <div v-for='(obj, i) in item.pathlist' class='m10-0'>
              <my-sidebarli v-bind:data='obj'></my-sidebarli>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {}
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
  },
  components: {
    'my-sidebarli': {
      props: ['data'],
      template: `
      <div>
        <router-link v-bind:to='data.path' v-bind:exact='true'>
          <div class="sidebar-b flex  cp fb flex-row-flex-start-center">
            <div class=''>
              <svg class="icon ciecle-icon" aria-hidden="true">
                <use xlink:href="#icon-yuanquan"></use>
              </svg>
            </div>
            <h4 class='m0-10' slot='sidebarli' v-text='data.name'></h4>
          </div>
        </router-link>
      </div>
      `
    }
  }
}
</script>

<style lang="scss">
  .ciecle-icon{
    width: 20px !important;
    height: 20px !important;
  }
  .transition{
    transition: all 0.4s ease;
  }
  .sidebar{
    height: auto;
    .sidebar-box{
      width: 230px;
      position: absolute;
      height: 100%;
      padding-top: 20px;
    }
    a{
      color: #565859;
    }
    .sidebar-a{
      color: #78829d;
      border-left: 5px solid #1f2637;
      padding: 10px;
      text-align: left;
      font-size: 1.2rem;
      background: #1f2637;
      .img-box{
        width: 3rem;
        font-size: 2.4rem;
      }
      .img_a{
        display: block;
      }
      .img_b{
        display: none;
      }
    }
    .second_menu{
      height: 0;
      overflow: hidden;
      background: #1f2637;
      @extend .transition;
      .second_menu_box{
        padding: 0 0 0 30px;
      }
      .sidebar-b{
        padding: 5px 0;
      }
    }
    .link-icon{
      @extend .transition;
    }
    .router-link-active{
      .sidebar-a{
        background: #2f384f;
        color: #cfd0d2;
        .link-icon{
          transform: rotateZ(180deg);
        }
        .img_a{
          display: none;
        }
        .img_b{
          display: block;
        }
      }
      .second_menu{
        height: auto;
        background-color: #161b28;
      }
      .router-link-exact-active{
        .sidebar-b{
          color: #007ef8;
        }
      }
    }
  }
</style>
