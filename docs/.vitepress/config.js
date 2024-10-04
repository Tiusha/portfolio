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
        text: 'Project #1',
        items: [
          { text: 'Management System for Optimal Production Control', link: '/projects/project-1' }
        ]
      },
      {
        text: 'Project #2',
        items: [
          { text: 'An app for innovative device customization', link: '/projects/project-2' }
        ]
      },
      {
        text: 'Project #3',
        items: [
          { text: '0 to 1 project: Healthcare appointments, streamlined for convenience', link: '/projects/project-3' }
        ]
      },
      {
        text: 'Project #4',
        items: [
          { text: 'Supercharging recruitment with fast, easy-to-use software', link: '/projects/project-4' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/hello-kozlova-ux-ui-designer-/' }
    ],
    outline: false  // Ensure this comma is added
  }
}
