import { defineConfig } from 'vitepress'
export default defineConfig({
  title: "BlackHole",
  titleTemplate: "Music Player",
  description: "An open-source Music Player app for all your needs!",
  lang: "en-US",
  srcDir: "./docs"
  appearance: true,
  cleanUrls: "without-subfolders",

  themeConfig: {
  footer: {
      message: "Released under the GPL v3.0 License.",
      copyright: "Copyright © 2022-present VedxP" },

  nav: [
    { text: 'Home', link: '/' },
    { text: 'GitHub', link: 'https://github.com/VedxP/blackholesite' }
        ],
    
    sidebar: [
      {
        text: "Contents",
        items: [
          { text: "Download", link: "/download" },
          { text: "Screenshots", link: "/screenshots" },          
          { text: "Contribute", link: "/contribute" },
           { text: "Contact", link: "/contact" }
        ]
      }
    ]
 }
  })
