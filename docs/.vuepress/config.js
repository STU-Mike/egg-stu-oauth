module.exports = {
  title: 'stu-oauth',
  description: 'stu-oauth后台接口描述',
  // base: '/vuepress-study/',
  themeConfig: {
    sidebar: {
      '/': [
        ['/error/', '错误码'],
        {
          title: 'oauth',
          children: [
            ['/oauth/login.md', '用户登陆'],
            ['/oauth/authorize.md', '用户授权'],
            ['/oauth/token.md', '换取凭证'],
            ['/oauth/refresh_token.md', '刷新凭证'],
            ['/oauth/view.md', '静态页面'],
            ['/oauth/lesson.md', '获取课程'],
            ['/oauth/user_info.md', '获取用户信息'],
          ]
        }
      ]
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '关于我们', link: '/' },
      { text: '捐献', link: '/' }
    ],
  },
}