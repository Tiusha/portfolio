export default {
  base: '/portfolio',
  title: 'Egor Gorev',
  description: 'Personal blog of Egor Gorev',
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: 'Now', link: '/now' },
      { text: 'Archive', link: '/archive' },
      { text: 'About', link: '/about' }
    ],
    sidebar: [
      {
        text: 'Travel',
        items: [
          { text: 'Matterhorn', link: '/posts/matterhorn' },
          { text: 'Tenerife', link: '/travel/tenerife' }
        ]
      },
      {
        text: 'Bikepacking',
        items: [
          { text: 'Berlin-Hamburg', link: '/bikepacking/berlin-hamburg' },
          { text: 'Steppenwolf', link: '/bikepacking/steppenwolf' },
          { text: 'Around The Netherlands', link: '/bikepacking/around-the-netherlands' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'instagram', link: 'https://instagram.com/egorev' }
    ],
    search: {
      provider: 'local'
    }
  }
}
