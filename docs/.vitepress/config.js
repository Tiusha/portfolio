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
          { text: 'Management System for Optimal Production Control', link: '/projects/project-1' },
          { text: 'An app for innovative device customization', link: '/projects/project-2' },
          { text: '0 to 1 project : Healthcare appointments, streamlined for convenience', link: '/projects/project-3' },
          { text: 'Supercharging recruitment with fast, easy-to-use software', link: '/projects/project-4' }
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
