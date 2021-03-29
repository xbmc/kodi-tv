// gatsby-site-config.js
let url = "";
if (process.env.GATSBY_SITEURL === undefined) {
  url = "https://dont.care";
} else {
  url = process.env.GATSBY_SITEURL;
}
if (process.env.GATSBY_NETLIFY_CMS_BACKEND === undefined) {
  backend_branch = "staging";
} else {
  backend_branch = process.env.GATSBY_NETLIFY_CMS_BACKEND;
}

module.exports = {
  siteMetadata: {
    title: "Kodi | Open Source Home Theater Software",
    description:
      "Kodi is a free media player that is designed to look great on your big screen TV but is just as at home on a small screen.",
    siteUrl: url,
    author: "Team Kodi",
  },
  cms: {
    config: {
      backend: {
        name: "github",
        repo: "xbmc/kodi-tv",
        branch: backend_branch,
      },
      site_url: url,
    },
  },
};
