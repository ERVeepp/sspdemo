export default {
  choicelang: null,
  contents: [{
    lang: 'EN',
    id: 0,
    nav: {
      language: {
        arr: [{
          val: 0,
          text: 'EN'
        },
        {
          val: 1,
          text: 'CN'
        }]
      },
      signout: 'Sign Out'
    },
    sidebar: {
      arr: [
        {
          title: 'Report',
          path: '/sspdemo/report',
          iconname: '#icon-area_chart',
          iconimgsrc: require('../img/report.png'),
          activeiconimgsrc: require('../img/report_ac.png'),
          pathlist: [{
            path: '/sspdemo/report',
            name: 'Main Report'
          },
          {
            path: '/sspdemo/report/thirdreport',
            name: 'Network Report'
          },
          {
            path: '/sspdemo/report/thirdreportconfig',
            name: 'Network Configuration'
          }]
        },
        {
          title: 'Inventory',
          path: '/sspdemo/app',
          iconname: '#icon-wenjian',
          iconimgsrc: require('../img/Inventory.png'),
          activeiconimgsrc: require('../img/Inventory_ac.png')
        },
        {
          title: 'SDK Integration',
          path: '/sspdemo/sdkintegration',
          iconname: '#icon-dengpao',
          iconimgsrc: require('../img/sdk.png'),
          activeiconimgsrc: require('../img/sdk_ac.png')
        }
      ]
    },
    configure: {
      save: 'Save',
      next: 'Next',
      edit: 'Edit',
      step: {
        data: [
          'New App Create',
          'Create AD Space',
          'Integrate SDK'
        ]
      },
      step1: {
        data: [
          'New App Create',
          'Create AD Space',
          'Mediation AD Network',
          'Ad Network Priority',
          'Integrate Code'
        ]
      },
      datepicker: {
        rangeseparator: '-',
        startplaceholder: 'Start Date',
        endplaceholder: 'End Date'
      },
      select: {
        selectapp: 'Select APP',
        selectslot: 'Select AD Space',
        selectcountry: 'Select Country'
      },
      apply: 'APPLY',
      export: 'Export'
    }
  },
  {
    lang: 'CH',
    id: 1,
    nav: {
      language: {
        arr: [{
          val: 0,
          text: '英文'
        },
        {
          val: 1,
          text: '中文'
        }]
      },
      signout: '退出'
    },
    sidebar: {
      arr: [
        {
          title: '报表',
          path: '/sspdemo/report',
          iconname: 'icon-bar-chart-o',
          pathlist: [{
            path: '/sspdemo/report',
            name: '应用报表'
          },
          {
            path: '/sspdemo/report/thirdreport',
            name: '第三方聚合报表'
          },
          {
            path: '/sspdemo/report/thirdreportconfig',
            name: '第三方广告配置'
          }]
        },
        {
          title: '应用中心',
          path: '/sspdemo/app',
          iconname: 'icon-bill-o'
        }
      ]
    },
    configure: {
      save: '保存'
    }
  }]
}
