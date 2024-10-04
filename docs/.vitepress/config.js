export default {
  base: '/portfolio/',  // Make sure the trailing slash is present
  title: 'Anastasia Kozlova',
  description: 'Product Designer',
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: 'About me', link: '/about' },
      { text: 'Resume', link: 'https://drive.google.com/file/d/186Bt50s64FzGeEx0tyDJjmlC7dDWVihz/view' }
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
          { text: 'hello.kozlova@gmail.com' },
          { text: '–' },
          { text: 'Montreal, Canada' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/hello-kozlova-ux-ui-designer-/' }
    ]
  }
}
