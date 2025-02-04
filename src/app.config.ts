export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/stats/index',
    // 'pages/stats/history',
    'pages/user/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '晚安打卡',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#8a8a8a',
    selectedColor: '#000',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '打卡',
        iconPath: 'img/home.png',
        selectedIconPath: 'img/home-active.png'
      },
      {
        pagePath: 'pages/stats/index',
        text: '数据',
        iconPath: 'img/stats.png',
        selectedIconPath: 'img/stats-active.png'
      },
      // {
      //   pagePath: 'pages/user/index',
      //   text: '我的',
      //   iconPath: 'img/user.png',
      //   selectedIconPath: 'img/user-active.png'
      // }
    ]
  },
})
