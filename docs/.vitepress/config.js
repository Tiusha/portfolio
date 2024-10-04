export default {
  base: '/portfolio',
  title: 'Anastasia Kozlova',
  description: 'Product Designer',
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: 'About me', link: '/about' }
    ],
    sidebar: [
      {
        text: 'Recent projects',
        items: [
          { text: 'Project 1', link: '/projects/project-1' },
          { text: 'Project 2', link: '/projects/project-2' }
        ]
      },
      {
        text: 'Contact details',
        items: [
          { text: 'kozlova@mail.com'},
          { text: '+1 938 374 728 748'},
          { text: 'Montreal, Canada'}
        ]
      }
    ],
    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/hello-kozlova-ux-ui-designer-/' },
      { icon: 'behance', link: 'https://www.behance.net/your-profile' },
    ],
    }
  }
}
