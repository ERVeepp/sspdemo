export default{
  contents: [{
    lang: 'EN',
    id: 0,
    con: 'app',
    // 配置
    configure: {
      required: {
        msg1: 'This is required'
      },
      index: {
        createbtn: 'Create App',
        searchplaceholder: 'App Name',
        table: {
          appname: 'App Name',
          status: 'Status',
          platform: 'Platform',
          viewslot: 'View Slot',
          slotid: 'Slot ID',
          slotname: 'Name',
          slottype: 'Type'
        }
      },
      operation: {
        platform: {
          title: 'Platform:',
          data: [
            {value: '1', label: 'iOS'},
            {value: '2', label: 'Android'},
            {value: '3', label: 'Wap'}
          ]
        },
        package_name: {
          title: 'Package Name/Bundle ID:',
          placeholder: 'com.companyname.applicationname'
        },
        appname: {
          title: 'App Name:',
          placeholder: 'Please input'
        },
        category_id: {
          title: 'Main Category:',
          placeholder: 'Select',
          data: [
            { value: '1', label: 'Books' },
            { value: '2', label: 'Business' },
            { value: '3', label: 'Catalogs' },
            { value: '4', label: 'Education' },
            { value: '5', label: 'Entertainment' },
            { value: '6', label: 'Finance' },
            { value: '7', label: 'Food & Drink' },
            { value: '8', label: 'Games' },
            { value: '9', label: 'Health & Fitness' },
            { value: '10', label: 'Lifestyle' },
            { value: '11', label: 'Medical' },
            { value: '12', label: 'Music' },
            { value: '13', label: 'Navigation' },
            { value: '14', label: 'News' },
            { value: '15', label: 'Photo & Video' },
            { value: '16', label: 'Productivity' },
            { value: '17', label: 'Reference' },
            { value: '18', label: 'Social Networking' },
            { value: '19', label: 'Sports' },
            { value: '20', label: 'Travel' },
            { value: '21', label: 'Utilities' },
            { value: '22', label: 'Weather' },
            { value: '23', label: 'Adult' }
          ]
        },
        dau: {
          title: 'DAU:',
          placeholder: 'Select',
          data: [
            { value: '1', label: '0~10,000' },
            { value: '2', label: '10,000~100,000' },
            { value: '3', label: '100,000~500,000' },
            { value: '4', label: '500,000~1,000,000' },
            { value: '5', label: '1,000,000~5,000,000' },
            { value: '6', label: '5,000,000~10,000,000' },
            { value: '7', label: 'above10,000,000' }
          ]
        },
        is_open_gps: {
          title: 'LBS Status:',
          data: [
            {value: '1', label: 'ON'},
            {value: '2', label: 'OFF'}
          ]
        },
        is_free: {
          title: 'Paid APP:',
          data: [
            {value: '1', label: 'Paid'},
            {value: '2', label: 'Free'}
          ]
        },
        filter: {
          title: 'Filter:',
          data: [
            { value: 'subscription', label: 'Subscription' },
            { value: 'ddl', label: 'DDL' },
            { value: 'googleplaydownload', label: 'Google Play & IOS APP Store Download' }
          ],
          msg1: 'Attention: This filter only works for CloudTech Ads. And please at least choose one item.'
        },
        advancedsetting: 'Advanced Setting',
        black_list_id: {
          title: 'Ads Category:',
          toptitle: ['Selected', 'Unselected'],
          data: [
            {'id': '1', 'category': 'Books'},
            {'id': '2', 'category': 'Business'},
            {'id': '3', 'category': 'Catalogs'},
            {'id': '4', 'category': 'Education'},
            {'id': '5', 'category': 'Entertainment'},
            {'id': '6', 'category': 'Finance'},
            {'id': '7', 'category': 'Food & Drink'},
            {'id': '8', 'category': 'Games'},
            {'id': '9', 'category': 'Health & Fitness'},
            {'id': '10', 'category': 'Lifestyle'},
            {'id': '11', 'category': 'Medical'},
            {'id': '12', 'category': 'Music'},
            {'id': '13', 'category': 'Navigation'},
            {'id': '14', 'category': 'News'},
            {'id': '15', 'category': 'Photo & Video'},
            {'id': '16', 'category': 'Productivity'},
            {'id': '17', 'category': 'Reference'},
            {'id': '18', 'category': 'Social Networking'},
            {'id': '19', 'category': 'Sports'},
            {'id': '20', 'category': 'Travel'},
            {'id': '21', 'category': 'Utilities'},
            {'id': '22', 'category': 'Weather'},
            {'id': '23', 'category': 'Adult'}
          ],
          msg1: 'The category with ‘*’ may contain gambling-related content'
        },
        male: {
          title: 'Targeting user gender:',
          male_left: 'male',
          male_right: 'female'
        },
        audience_age_id: {
          title: 'Targeting user age:',
          data: [
            {value: '1', label: '0-5'},
            {value: '2', label: '5-11'},
            {value: '3', label: '12-17'},
            {value: '4', label: '18-25'},
            {value: '5', label: '26-35'},
            {value: '6', label: '36-45'},
            {value: '7', label: '>45'}
          ]
        }
      }
    }

  },
  {
    lang: 'CH',
    id: 1,
    con: '我是app'
  }]
}
