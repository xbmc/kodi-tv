// gatsby-site-config.js
if (process.env.GATSBY_SITEURL == undefined) {
  url = 'https://dont.care'
} else {
  url = process.env.GATSBY_SITEURL
}

module.exports = {
  siteMetadata: {
    title: "Kodi | Opensource Home Theater Software",
    description: "Kodi is a free media player that is designed to look great on your big screen TV but is just as home on a small screen.",
    siteUrl: url,
    author: "Team Kodi",
  },
}