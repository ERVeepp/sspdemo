export default{
  contents: [{
    lang: 'EN',
    id: 0,
    con: 'report',
    // 配置
    configure: {
      index: {
        taboptions: [
          {value: 'revenue', label: 'Revenue'},
          {value: 'request', label: 'AD Request'},
          {value: 'fill', label: 'Filled'},
          {value: 'fillrate', label: 'Fill-Rate'},
          {value: 'impression', label: 'Impression'}
        ]
      },
      thirdreport: {
        taboptions: [
          {value: 'revenue', label: 'Revenue'},
          {value: 'request', label: 'AD Request'},
          {value: 'fillrate', label: 'Fill-Rate'},
          {value: 'impression', label: 'Impression'},
          {value: 'ecpm', label: 'ECPM(RPM)'},
          {value: 'click', label: 'Clicks'},
          {value: 'ctr', label: 'CTR'}
        ]
      },
      choose: {
        title: 'Choose network',
        options: [
          {value: '0', label: 'Facebook'},
          {value: '1', label: 'Admob'}
        ]
      },
      special: {
        title: 'Special Instructions',
        text_a: 'Requires CloudTech advertising SDK.',
        text_b: 'Revenue reporting requires the App ID, App Token and Placement ID in Facebook to be entered.'
      },
      account: {
        title: 'Add Your Account Info',
        options: [
          {value: '0', label: 'Enable Reporting'},
          {value: '1', label: 'Disable Reporting'}
        ]
      },
      setup: {
        title: 'Set up Inventory',
        title_a: 'AD Space ID',
        title_b: 'AD Space Name',
        title_c: 'Placement ID'
      }

    }
  },
  {
    lang: 'CH',
    id: 1,
    con: '我是report',
    // 配置
    configure: {}
  }]
}
