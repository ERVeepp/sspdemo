import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import HelloWorld from '@/components/HelloWorld'
import ssp from '@/components/ssp/index.vue'
import nav from '@/components/ssp/nav.vue'
import sidebar from '@/components/ssp/sidebar.vue'
import breadcrumb from '@/components/ssp/breadcrumb.vue'
// report
import reportobj from '@/components/ssp/report.vue'
import reportindexobj from '@/components/ssp/report/index.vue'
import thirdreportobj from '@/components/ssp/report/thirdreport.vue'
import thirdreportconfigobj from '@/components/ssp/report/thirdreportconfig.vue'
// app
import appobj from '@/components/ssp/app.vue'
import appindexobj from '@/components/ssp/app/index.vue'
import appoperationobj from '@/components/ssp/app/operation.vue'
// appplacement
import appplacementindexobj from '@/components/ssp/appplacement/index.vue'
import appplacementoperationobj from '@/components/ssp/appplacement/operation.vue'
import appplacementvideoconfigobj from '@/components/ssp/appplacement/videoconfig.vue'
import appplacementsortobj from '@/components/ssp/appplacement/sort.vue'
import appplacementsuccessobj from '@/components/ssp/appplacement/success.vue'
import sdkintegrationobj from '@/components/ssp/appplacement/sdkintegration.vue'
// report
const report = () => Promise.resolve(reportobj)
const reportindex = () => Promise.resolve(reportindexobj)
const thirdreport = () => Promise.resolve(thirdreportobj)
const thirdreportconfig = () => Promise.resolve(thirdreportconfigobj)
// app
const app = () => Promise.resolve(appobj)
const appindex = () => Promise.resolve(appindexobj)
const appoperation = () => Promise.resolve(appoperationobj)
// appplacement
const appplacementindex = () => Promise.resolve(appplacementindexobj)
const appplacementoperation = () => Promise.resolve(appplacementoperationobj)
const appplacementvideoconfig = () => Promise.resolve(appplacementvideoconfigobj)
const appplacementsort = () => Promise.resolve(appplacementsortobj)
const appplacementsuccess = () => Promise.resolve(appplacementsuccessobj)
const sdkintegration = () => Promise.resolve(sdkintegrationobj)
//
Vue.use(Router)
//
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/sspdemo/report'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/sspdemo',
      name: 'ssp',
      component: ssp,
      children: [
        {
          path: 'report',
          components: {
            default: report,
            nav: nav,
            sidebar: sidebar,
            breadcrumb: breadcrumb
          },
          props: {
            default: {
              title: ['Report', '报表']
            }
          },
          children: [
            {
              path: '',
              name: 'reportindex',
              component: reportindex,
              props: {
                title: ['Main Report', '应用报表']
              }
            },
            {
              path: 'thirdreport',
              name: 'thirdreport',
              component: thirdreport,
              props: {
                title: ['Network Report', '第三方聚合报表']
              }
            },
            {
              path: 'thirdreportconfig',
              name: 'thirdreportconfig',
              component: thirdreportconfig,
              props: {
                title: ['Network Configuration', '第三方广告配置']
              }
            }
          ]
        },
        {
          path: 'app',
          components: {
            default: app,
            nav: nav,
            sidebar: sidebar
          },
          props: {
            default: {
              title: ['Inventory', '应用中心']
            }
          },
          children: [
            {
              path: '',
              name: 'appindex',
              components: {
                default: appindex,
                breadcrumb: breadcrumb
              },
              props: {
                default: {
                  title: ['App List', '应用列表']
                }
              }
            },
            {
              path: 'operation',
              name: 'appoperation',
              components: {
                default: appoperation,
                breadcrumb: breadcrumb
              },
              props: {
                default: {
                  title: ['Operation', '操作']
                }
              }
            },
            {
              path: 'appplacement',
              name: 'appplacement',
              component: appplacementindex
            },
            {
              path: 'appplacementoperation',
              name: 'appplacementoperation',
              component: appplacementoperation
            },
            {
              path: 'appplacementvideoconfig',
              name: 'appplacementvideoconfig',
              component: appplacementvideoconfig
            },
            {
              path: 'appplacementsort',
              name: 'appplacementsort',
              component: appplacementsort
            },
            {
              path: 'appplacementsuccess',
              name: 'appplacementsuccess',
              component: appplacementsuccess
            }
          ]
        },
        {
          path: 'sdkintegration',
          components: {
            default: sdkintegration,
            nav: nav,
            sidebar: sidebar
          },
          props: {
            default: {
              title: ['SDK Integration', 'SDK接入']
            }
          }
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  // console.log(to)
  next()
})
export default router
