import { defineConfig } from 'vitepress'
export default defineConfig({
  title: "BlackHole",
  titleTemplate: "Music Player",
  description: "An open-source Music Player app for all your needs!",
  lang: "en-US",
  appearance: true,
  cleanUrls: "without-subfolders",

  themeConfig: {
  footer: {
      message: "Released under the GPL-3.0 License.",
      copyright: "Copyright 2022-present Vedxp" },

  nav: [
    { text: 'Home', link: '/' },
    { text: 'Source Code', link: 'https://github.com/vedxp/blackholesite' }
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
