/// @ts-check

// format for console log when inspecting json
// console.log(inspect(authors, { colors: true, depth: Infinity }));

const fetch = require("node-fetch")
const parse = require("xml-parser")
const yaml = require("js-yaml")
const slugify = require("slugify")
const fs = require("fs")
const inspect = require("util").inspect // this is only here to inspect the json during debugging

const TODAY = new Date()
const CATEGORIES = [
  { id: "kodi.audiodecoder", desc: "Audio decoders" },
  { id: "kodi.audioencoder", desc: "Audio encoders" },
  { id: "kodi.context.item", desc: "Context menus" },
  { id: "kodi.gameclient", desc: "Game clients" },
  { id: "kodi.game.controller", desc: "Controller profiles" },
  { id: "kodi.imagedecoder", desc: "Image decoders" },
  { id: "kodi.inputstream", desc: "Script Libraries" },
  { id: "kodi.metadata.scraper.library", desc: "Script Libraries" },
  { id: "kodi.metadata.scraper.albums", desc: "Album information providers" },
  { id: "kodi.metadata.scraper.artists", desc: "Artist information providers" },
  { id: "kodi.metadata.scraper.movies", desc: "Movie information providers" },
  {
    id: "kodi.metadata.scraper.musicvideos",
    desc: "Music video information providers",
  },
  { id: "kodi.metadata.scraper.tvshows", desc: "TV information providers" },
  { id: "kodi.python.library", desc: "Script libraries" },
  { id: "kodi.resource.images", desc: "Image collections" },
  { id: "kodi.resource.language", desc: "Languages" },
  { id: "kodi.ui.screensaver", desc: "Screensavers" },
  { id: "kodi.gui.skin", desc: "Skins" },
  { id: "kodi.resource.uisounds", desc: "GUI sounds" },
  { id: "kodi.python.lyrics", desc: "Lyrics" },
  { id: "kodi.python.module", desc: "Python modules" },
  { id: "kodi.pvrclient", desc: "PVR clients" },
  { id: "kodi.service", desc: "Services" },
  { id: "kodi.subtitle.module", desc: "Subtitles" },
  { id: "kodi.vfs", desc: "Virtual filesystems" },
  { id: "kodi.player.musicviz", desc: "Visualisations" },
  { id: "kodi.python.weather", desc: "Weather providers" },
  { id: "kodi.webinterface", desc: "Web interfaces" },
  { id: "xbmc.audiodecoder", desc: "Audio decoders" },
  { id: "xbmc.audioencoder", desc: "Audio encoders" },
  { id: "xbmc.context.item", desc: "Context menus" },
  { id: "xbmc.gameclient", desc: "Game clients" },
  { id: "xbmc.game.controller", desc: "Controller profiles" },
  { id: "xbmc.imagedecoder", desc: "Image decoders" },
  { id: "xbmc.inputstream", desc: "Script Libraries" },
  { id: "xbmc.metadata.scraper.library", desc: "Script Libraries" },
  { id: "xbmc.metadata.scraper.albums", desc: "Album information providers" },
  { id: "xbmc.metadata.scraper.artists", desc: "Artist information providers" },
  { id: "xbmc.metadata.scraper.movies", desc: "Movie information providers" },
  {
    id: "xbmc.metadata.scraper.musicvideos",
    desc: "Music video information providers",
  },
  { id: "xbmc.metadata.scraper.tvshows", desc: "TV information providers" },
  { id: "xbmc.python.library", desc: "Script libraries" },
  { id: "xbmc.resource.images", desc: "Image collections" },
  { id: "xbmc.resource.language", desc: "Languages" },
  { id: "xbmc.ui.screensaver", desc: "Screensavers" },
  { id: "xbmc.gui.skin", desc: "Skins" },
  { id: "xbmc.resource.uisounds", desc: "GUI sounds" },
  { id: "xbmc.python.lyrics", desc: "Lyrics" },
  { id: "xbmc.python.module", desc: "Python modules" },
  { id: "xbmc.pvrclient", desc: "PVR clients" },
  { id: "xbmc.service", desc: "Services" },
  { id: "xbmc.subtitle.module", desc: "Subtitles" },
  { id: "xbmc.vfs", desc: "Virtual filesystems" },
  { id: "xbmc.player.musicviz", desc: "Visualisations" },
  { id: "xbmc.python.weather", desc: "Weather providers" },
  { id: "xbmc.webinterface", desc: "Web interfaces" },
]
/** @type {any[]} */
let history = []
/** @type {any[]} */
let present = []
let kodiversion = ""
let kodimirror = ""
let kodistats = ""
/** @type {import("../../src/addon").IAddon} */
let addon = {}
/** @type {import("../../src/addon").IAddon[]} */
let addons = []
let featured = { addons: [] }
/** @type {any[]} */
let authors = []
/** @type {any[]} */
let categories = []
let addonpath = ""
let addonplatform = ""
/** @type {string[]} */
let addonimagetypes = []
let versiondownloads = 0
let pixiememory = ""
let addonsfeatured = ""
let addonnodetype = ""
let authornodetype = ""
let categorynodetype = ""


exports.onPreBootstrap =
  /**
   * @param {any} _ref
   * @param {{ kodiversion: string; kodimirror: string; }} pluginOptions
   */
  function (_ref, pluginOptions) {
    kodiversion = pluginOptions.kodiversion
    kodimirror =
      "http://" + pluginOptions.kodimirror + "/addons/" + kodiversion + "/"
    kodistats = "http://mirrors.kodi.tv" + "/addons/" + kodiversion + "/"
    pixiememory = "src/data/addons/" + kodiversion + "/history.json"
    addonsfeatured = "src/data/addons/" + kodiversion + "/featured.yaml"
    addonnodetype = kodiversion + "Addon"
    authornodetype = kodiversion + "Author"
    categorynodetype = kodiversion + "Category"
  }

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
  getNodesByType,
}) => {
  const { createNode, touchNode, deleteNode } = actions
  let data = ""
  try {
    history = JSON.parse(fs.readFileSync(pixiememory, "utf8"))
  } catch (e) {
    console.log("unable to load pixie memory, starting from scratch")
    console.log(e)
  }
  try {
    featured = yaml.safeLoad(fs.readFileSync(addonsfeatured, "utf8"))
  } catch (e) {
    console.log("unable to load featured addons")
    console.log(e)
  }
  try {
    // Fetch the data
    console.log('getting addons from the ' + kodiversion + ' repo using ' + kodimirror)
    const res = await fetch(kodimirror + 'addons.xml')
    data = await res.text()
  } catch (error) {
    data = ''
    console.log(error)
  }
  if (data) {
    const parsedXML = parse(data)
    parsedXML.root.children.forEach(getAddon)
    authors.forEach(doCleanup)
    categories.forEach(doCleanup)
    fs.writeFileSync(pixiememory, JSON.stringify(present))
    addons.forEach(addon =>
      createNode({
        ...addon,
        id: createNodeId(`${addonnodetype}-${addon.id}`), // hashes the inputs into an ID
        parent: null,
        children: [],
        internal: {
          type: addonnodetype,
          content: JSON.stringify(addon),
          contentDigest: createContentDigest(addon),
        },
      })
    )
    authors.forEach(author =>
      createNode({
        ...author,
        id: createNodeId(`${authornodetype}-${author.id}`), // hashes the inputs into an ID
        parent: null,
        children: [],
        internal: {
          type: authornodetype,
          content: JSON.stringify(author),
          contentDigest: createContentDigest(author),
        },
      })
    )
    categories.forEach(category =>
      createNode({
        ...category,
        id: createNodeId(`${categorynodetype}-${category.id}`), // hashes the inputs into an ID
        parent: null,
        children: [],
        internal: {
          type: categorynodetype,
          content: JSON.stringify(category),
          contentDigest: createContentDigest(category),
        },
      })
    )
  }
  return
}

function getAddon(rawaddon) {
  let firstever = false
  addon = addons.find(o => o.id === rawaddon.attributes.id)
  addonpath = ""
  addonplatform = ""
  addonimagetypes = []
  if (addon == undefined) {
    addon = {}
    addon.id = rawaddon.attributes.id
    addon.addonid = addon.id
    addon.name = rawaddon.attributes.name
    addon.slug = slugify(rawaddon.attributes.id, { lower: true })
    addon.version = rawaddon.attributes.version
    addon.authors = []
    addon.platforms = []
    addon.categories = []
    if (rawaddon.attributes["provider-name"] != undefined){
      rawaddon.attributes["provider-name"]
        .split(",")
        .map(item => item.trim())
        .forEach(assignAuthor)
    }
    if (featured.addons.find(o => o.addonid === addon.id) !== undefined) {
      addon.featured = "true"
    }
    addonhistory = history.find(o => o.id === addon.id)
    if (addonhistory == undefined) {
      addonhistory = {}
      addonhistory.id = addon.id
      addonhistory.version = "none"
      addonhistory.lastupdate = TODAY
      addonhistory.firstseen = TODAY
      addonhistory.agetype = "new"
      addonhistory.downloads = 0
      firstever = true
    }
    addon.firstseen = addonhistory.firstseen
    addon.agetype = addonhistory.agetype
    rawaddon.children.forEach(parseExtensions)
    if (addon.version == addonhistory.version) {
      addon.lastupdate = addonhistory.lastupdate
    } else {
      addon.lastupdate = TODAY
      addonhistory.lastupdate = TODAY
      addonhistory.version = addon.version
      if (!firstever) {
        addonhistory.agetype = "existing"
        addon.agetype = "existing"
      }
      if (addon.broken == null) {
        downloadImages()      
      }
    }
    if (addon.broken == null) {
      // getDownloadCount() // this isn't working yet
      present.push(addonhistory)
      if (addon.icons == null) {
        addon.icons = [
          { remotepath: "", localpath: "/images/default-addon.png" },
        ]
      }
      addon.icon = addon.icons[0].localpath
      addons.push(addon)
      addon.authors.forEach(createAuthorNode)
      addon.categories.forEach(createCategoryNode)
    }
  } else {
    rawaddon.children.forEach(parseExtensions)
  }
}

function parseExtensions(extension) {
  if (extension.name == "extension") {
    switch (extension.attributes.point) {
      case "kodi.addon.metadata":
        extension.children.forEach(getMetadata)
        addon.platforms.push({
          platform: addonplatform,
          path: addonpath,
          statspath: addonstatspath,
        })
        break
      case "xbmc.addon.metadata":
        extension.children.forEach(getMetadata)
        addon.platforms.push({
          platform: addonplatform,
          path: addonpath,
          statspath: addonstatspath,
        })
        break
      case "kodi.python.pluginsource":
        assignCategory("Plugins")
        checkProvides(extension.children)
        break
      case "xbmc.python.pluginsource":
        assignCategory("Plugins")
        checkProvides(extension.children)
        break
      case "kodi.python.script":
        assignCategory("Program addons")
        checkProvides(extension.children)
        break
      case "xbmc.python.script":
        assignCategory("Program addons")
        checkProvides(extension.children)
        break
      default:
        cat = CATEGORIES.find(o => o.id === extension.attributes.point)
        if (cat != undefined) {
          assignCategory(cat.desc)
        }
    }
  }
}

function checkProvides(provider) {
  if (provider.length > 0) {
    if (provider[0].content == undefined){
      return
    }
    if (provider[0].content.includes("audio")) {
      assignCategory("Music addons")
    }
    if (provider[0].content.includes("video")) {
      assignCategory("Video addons")
    }
    if (provider[0].content.includes("image")) {
      assignCategory("Picture addons")
    }
    if (provider[0].content.includes("executable")) {
      assignCategory("Program addons")
    }
  }
}

function createAuthorNode(author) {
  newauthor = JSON.parse(JSON.stringify(author))
  authorcheck = authors.find(o => o.id === newauthor.name)
  if (authorcheck == undefined) {
    newauthor.id = newauthor.name
    newauthor.addons = [addon]
    authors.push(newauthor)
  } else {
    addoncheck = authorcheck.addons.find(o => o.id === addon.id)
    if (addoncheck == undefined) {
      authorcheck.addons.push(addon)
    }
  }
}

function createCategoryNode(category) {
  newcategory = JSON.parse(JSON.stringify(category))
  categorycheck = categories.find(o => o.id === newcategory.name)
  if (categorycheck == undefined) {
    newcategory.id = newcategory.name
    newcategory.grouping = setCategoryGrouping(newcategory.name)
    newcategory.addons = [addon]
    categories.push(newcategory)
  } else {
    addoncheck = categorycheck.addons.find(o => o.id === addon.id)
    if (addoncheck == undefined) {
      categorycheck.addons.push(addon)
    }
  }
}

function setCategoryGrouping(name) {
  switch (name.toLowerCase()) {
    case "game clients":
      return "Games"
    case "controller profiles":
      return "Games"
    case "album information providers":
      return "Information providers"
    case "artist information providers":
      return "Information providers"
    case "movie information providers":
      return "Information providers"
    case "music video information providers":
      return "Information providers"
    case "tv information providers":
      return "Information providers"
    case "image collections":
      return "Look and feel"
    case "languages":
      return "Look and feel"
    case "screensavers":
      return "Look and feel"
    case "skins":
      return "Look and feel"
    case "gui sounds":
      return "Look and feel"
    default:
      return "Other"
  }
}

function assignAuthor(author) {
  authorcheck = addon.authors.find(o => o.name === author)
  if (authorcheck == undefined) {
    slug = slugify(author, { lower: true })
    icon = "/images/authors/" + slug + ".png"
    addon.authors.push({ name: author, slug: slug, icon: icon })
  }
}

function assignCategory(category) {
  categorycheck = addon.categories.find(o => o.name === category)
  if (categorycheck == undefined) {
    slug = slugify(category, { lower: true })
    icon = "/images/categories/" + slug + ".png"
    addon.categories.push({ name: category, slug: slug, icon: icon })
  }
}

function getMetadata(metadata) {
  if (metadata.name == "summary" || metadata.name == "description") {
    if (metadata.attributes.lang == "en_GB") {
      addon[metadata.name] = metadata.content
    }
  } else if (metadata.name == "size") {
    addon[metadata.name] =
      String(Math.floor(Number(metadata.content) / 1024)) + "KB"
  } else if (metadata.name == "path") {
    addonpath = kodimirror + metadata.content
    addonstatspath = kodistats + metadata.content + "?stats"
  } else if (metadata.name == "platform") {
    addonplatform = metadata.content
  } else if (metadata.name == "assets") {
    metadata.children.forEach(getAssets)
  } else {
    addon[metadata.name] = metadata.content
  }
}

function getAssets(asset) {
  let assetcheck = undefined
  let arrayname = asset.name + "s"
  if (addon[arrayname] == undefined) {
    addon[arrayname] = []
    addonimagetypes.push(arrayname)
  } else {
    assetcheck = addon[arrayname].find(o => o.remotepath === asset.content)
  }
  if (assetcheck == undefined) {
    imagepath =
      "/images/addons/" + kodiversion + "/" +
      slugify(addon.id, { lower: true }) +
      "/" +
      asset.content
    addon[arrayname].push({ localpath: imagepath, remotepath: asset.content })
  }
}

function getDownloadCount() {
  version_downloads = 0
  if (addonhistory.downloads === undefined) {
    addonhistory.downloads = 0
  }
  addon.platforms.forEach(getPlatformDownloadCount)
  addon.downloads = addonhistory.downloads + version_downloads
}

async function getPlatformDownloadCount(platform) {
  try {
    const res = await fetch(platform.statspath)
    const data = await res.text()
  } catch (error) {
    console.log(error)
    return
  }
  console.log(data)
  stats = JSON.parse(data)
  if (stats.Total !== undefined) {
    versiondownloads = versiondownloads + stats.Total
  }
}

function doCleanup(item) {
  item.addons.sort(compare)
  item.totaladdons = item.addons.length
}

function compare(a, b) {
  const bandA = a.name.toUpperCase()
  const bandB = b.name.toUpperCase()
  let comparison = 0
  if (bandA > bandB) {
    comparison = 1
  } else if (bandA < bandB) {
    comparison = -1
  }
  return comparison
}

function downloadImages() {
  addonimagetypes.forEach(downloadImageType)
}

function downloadImageType(imagetype) {
  const fullurl = addon.platforms[0].path
  const urlbase = fullurl.substring(0, fullurl.lastIndexOf("/")) + "/"
  const rootpath = "./static"
  addon[imagetype].forEach(asset => {
    const localpath = asset.localpath
    const localbase =
      rootpath + localpath.substring(0, localpath.lastIndexOf("/")) + "/"
    fs.mkdir(localbase, { recursive: true }, err => {
      if (err) throw err
    })
    console.log(
      "downloading " + asset.remotepath + " to " + rootpath + asset.localpath
    )
    download(urlbase + asset.remotepath, rootpath + asset.localpath)
  })
}

/**
 * @param {string} url
 * @param {fs.PathLike} localpath
 */
function download(url, localpath) {
  fetch(url).then(res => {
    const dest = fs.createWriteStream(localpath)
    res.body.pipe(dest)
  })
}
