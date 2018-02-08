const data = {
  list: [
    {
      app_id: 2,
      slot_id: 1,
      sortarr: [ 'tapjoy', 'vungle', 'unityads', 'cloudmobi' ],
      extarr: [
        {
          type: 'unityads',
          status: 1,
          arr: [
            { name: 'api_app_id', val: 123, required: true },
            { name: 'api_key', val: 123, required: true },
            { name: 'api_placement_id', val: 123, required: true }
          ]
        },
        {
          type: 'applovin',
          status: 2,
          arr: [
            { name: 'api_app_id', val: 123, required: true },
            { name: 'api_key', val: 123, required: true },
            { name: 'api_placement_id', val: 123, required: false }
          ]
        },
        {
          type: 'vungle',
          status: 1,
          arr: [
            { name: 'api_app_id', val: 123, required: true },
            { name: 'api_key', val: 123, required: true },
            { name: 'api_placement_id', val: 123, required: true }
          ]
        },
        {
          type: 'adcolony',
          status: 2,
          arr: [
            { name: 'api_app_id', val: 123, required: true },
            { name: 'api_key', val: 123, required: true },
            { name: 'api_placement_id', val: 123, required: true }
          ]
        },
        {
          type: 'tapjoy',
          status: 1,
          arr: [
            { name: 'api_app_id', val: 123, required: true },
            { name: 'api_key', val: 123, required: true },
            { name: 'api_placement_id', val: 123, required: true },
            { name: 'third_app_id', val: 123, required: true }
          ]
        }
      ]
    }
  ]
}
export default {
  state: data
}
