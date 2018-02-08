export default{
  contents: [{
    lang: 'EN',
    id: 0,
    con: 'appplacement',
    // 配置
    configure: {
      required: {
        msg1: 'This is required'
      },
      tab: {
        general: 'General',
        mediation: 'Ad Network Mediation',
        priority: 'Ad Network Priority'
      },
      index: {
        createbtn: 'Create AD Space',
        searchplaceholder: 'Ad Space Name',
        table: {
          slotid: 'Slot ID',
          slotname: 'Name',
          status: 'Status',
          slottype: 'Type'
        }
      },
      operation: {
        format: {
          title: 'Format:',
          data: [
            {value: '1', label: 'Interstitial', choice: '1,0'},
            {value: '2', label: 'Native', choice: '1,2,3,0'},
            {value: '3', label: 'Banner', choice: '3,0'},
            {value: '4', label: 'Ads Elements', choice: '4'},
            {value: '5', label: 'App Wall', choice: '5'},
            {value: '7', label: 'Rewarded Video', choice: '7'}
          ]
        },
        name: {
          title: 'Name:',
          placeholder: 'Please input'
        },
        template: {
          title: 'Template:',
          textareaplaceholder: 'Please input your customized template html code here.',
          data: [
            {
              imgsrc: require('@/img/l001.png'),
              label: 'TemplateL001',
              value: '1'
            },
            {
              imgsrc: require('@/img/m001.png'),
              label: 'TemplateM002',
              value: '2'
            },
            {
              imgsrc: require('@/img/s001.png'),
              label: 'TemplateS001',
              value: '3'
            },
            {
              imgsrc: require('@/img/add_template.jpg'),
              label: 'Custom',
              value: '0'
            },
            {
              imgsrc: require('@/img/element.png'),
              label: 'Elements',
              value: '4'
            },
            {
              imgsrc: require('@/img/appwall.png'),
              label: 'App Wall',
              value: '5'
            },
            {
              imgsrc: require('@/img/reward_video.png'),
              label: 'Reward Video',
              value: '7'
            }
          ]
        },
        fb_id: {
          title: 'Facebook Placement ID:',
          placeholder: 'Please input'
        },
        admob_id: {
          title: 'Admob AD unit ID:',
          placeholder: 'Please input'
        },
        virtual_currency_name: {
          title: 'Virtual Currency Name:',
          placeholder: 'Please input'
        },
        server_callback_url: {
          title: 'Server side Callback URL:',
          placeholder: 'Please input'
        },
        server_callback_key: {
          title: 'Server side Callback Key:',
          placeholder: 'Please input'
        },
        rewarded_amount: {
          title: 'Rewarded Amount:',
          placeholder: 'Please input'
        },
        video_screen_type: {
          title: 'Orientation:',
          placeholder: 'select',
          data: [
            {value: '1', label: 'landscape'},
            {value: '2', label: 'portrait'}
          ]
        },
        priority: {
          title: 'Priority',
          data: [
            {value: 'fb', label: 'Facebook'},
            {value: 'ct', label: 'Cloudmobi'},
            {value: 'ad_c', label: 'Admob Content'},
            {value: 'ad_d', label: 'Admob Application'}
          ]
        }
      },
      videoconfig: {
        status: 'STATUS',
        credentials: 'CREDENTIALS',
        arr: [
          {
            title: 'Unity Ads',
            extarr: [
              {
                title: 'Game ID',
                placeholder: 'Please input',
                explain: `From the <a class="explain_p" href="https://dashboard.unityads.unity3d.com/" target="_blank">UnityAds dashboard</a>, choose your game. Your Game ID will be listed next to the platform.`
              },
              {
                title: 'API Key',
                placeholder: 'Please input',
                explain: `Your API key is found on the API keys tab of the <a class="explain_p" href="https://dashboard.unityads.unity3d.com/" target="_blank">UnityAds dashboard</a>.`
              },
              {
                title: 'Placement ID',
                placeholder: 'Please input',
                explain: `From the <a class="explain_p" href="https://dashboard.unityads.unity3d.com/" target="_blank">UnityAds dashboard</a> by selecting Project -&gt; Game ID.Your Rewarded Video Placement ID will be listed here; it is typically called "rewardedVideo".`
              }
            ]
          },
          {
            title: 'AppLovin',
            placeholder: 'Please input',
            extarr: [
              {
                title: 'SDK Key',
                placeholder: 'Please input',
                explain: `From your <a class="explain_p" href="https://www.applovin.com/users/edit" target="_blank">Account page</a>, choose "Keys" in the left sidebar, then select the SDK Key.`
              },
              {
                title: 'Report Key',
                placeholder: 'Please input',
                explain: `From your <a class="explain_p" href="https://www.applovin.com/users/edit" target="_blank">Account page</a>, choose "Keys" in the left sidebar, then select the Report Key. If you do not see the Report Key field, email support@applovin.com and request your reporting key.`
              },
              {
                title: 'Placement Name',
                placeholder: 'Please input',
                explain: `From your "Monetize page", choose "Manage Apps"， select your App，placement name list is on the bottom of page. If you do not create any placements, there will be no placement list.`
              }
            ]
          },
          {
            title: 'Vungle',
            extarr: [
              {
                title: 'APP ID',
                placeholder: 'Please input',
                explain: `From the <a class="explain_p" href="https://dashboard.vungle.com/dashboard/accounts/pub" target="_blank">Vungle Dashboard</a>, find your application, then click the settings icon on the far right. On the next page, find the Vungle Application ID in the left column.`
              },
              {
                title: 'API Key',
                placeholder: 'Please input',
                explain: `From the <a class="explain_p" href="https://dashboard.vungle.com/dashboard/accounts/details" target="_blank">Account Details</a> page, find your Reporting API key towards the bottom of the page. If you do not already have an API key, email Vungle at account-managers@vungle.com to request one.`
              },
              {
                title: 'Placement ID',
                placeholder: 'Please input',
                explain: `From the <a class="explain_p" href="https://dashboard.vungle.com/dashboard/accounts/pub" target="_blank">Vungle Dashboard</a>, find your application, then click the settings icon on the far right. On the next page, find the Vungle Application ID in the left column.`
              }
            ]
          },
          {
            title: 'AdColony',
            extarr: [
              {
                title: 'APP ID',
                placeholder: 'Please input',
                explain: `From the <a class="explain_p" href="https://clients.adcolony.com/apps" target="_blank">AdColony dashboard</a>, choose your app. Your App ID will be labeled as "AdColony App ID" on this page.`
              },
              {
                title: 'API Key',
                placeholder: 'Please input',
                explain: `Your API key will be labeled as "Read-Only API Key" on <a class="explain_p" href="https://clients.adcolony.com/users/edit" target="_blank">this page</a>.`
              },
              {
                title: 'Zone ID',
                placeholder: 'Please input',
                explain: `From the <a class="explain_p" href="https://clients.adcolony.com/apps" target="_blank">AdColony dashboard</a>, choose your app. Select an existing Zone to view its ID.`
              }
            ]
          },
          {
            title: 'Tapjoy',
            extarr: [
              {
                title: 'SDK Key',
                placeholder: 'Please input',
                explain: `click “settings”，and choose APP Setting to view the SDK Key.`
              },
              {
                title: 'Report API Key',
                placeholder: 'Please input',
                explain: `click “settings”，and choose APP Setting and select "API Key"to. Your report API Key will be labled as "Publisher Reporting API Key"`
              },
              {
                title: 'Placement Name',
                placeholder: 'Please input',
                explain: ``
              },
              {
                title: 'APP ID',
                placeholder: 'Please input',
                explain: `click "settings", and choose APP Setting and click"Check ID". Your App ID will be showed on a popup window.`
              }
            ]
          }
        ]
      },
      success: {
        title: 'Congratulations',
        dec: 'Your ad space is now ready and you can quickly integrate code to start to monetize your app. Click on the button below to setup the integration or back to your App details.',
        button: {
          integratecode: 'Integrate Code',
          backtoapp: 'Back To App'
        }
      }
    }
  },
  {
    lang: 'CH',
    id: 1,
    con: '我是appplacement'
  }]
}
