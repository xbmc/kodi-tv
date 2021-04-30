// gatsby-site-config.js
let url = "https://dont.care";
if (process.env.GATSBY_SITEURL !== undefined) {
  url = process.env.GATSBY_SITEURL;
}
let backend_branch = "staging";
if (process.env.GATSBY_NETLIFY_CMS_BACKEND !== undefined) {
  backend_branch = process.env.GATSBY_NETLIFY_CMS_BACKEND;
}
let stripeConfig = {
  apikey: process.env.GATSBY_STRIPE_APIKEY,
  oneTime: {
    USD: "price_1HVRC7DOVUu6yhjNHWNMz6Zf",
    EUR: "price_1HVRHSDOVUu6yhjNhOGckxxU",
    GBP: "price_1HVRNRDOVUu6yhjN0BsrpfOo",
    CAD: "price_1HVRNpDOVUu6yhjNyoxCfwmQ",
    AUD: "price_1HVROBDOVUu6yhjNuN2o56Ob",
    JPY: "price_1HVROeDOVUu6yhjN83arFdQo",
  },
  monthly: {
    USD: {
      levelOne: {
        price: "price_1HVP1ODOVUu6yhjNAUMDRlrr",
        text: "$5 a month",
        amount: "5",
      },
      levelTwo: {
        price: "price_1HVP3mDOVUu6yhjNL7qjHUyW",
        text: "$10 a month",
        amount: "10",
      },
      levelThree: {
        price: "price_1HVP3kDOVUu6yhjN7kaQEJ8L",
        text: "$25 a month",
        amount: "25",
      },
      levelFour: {
        price: "price_1HVP3lDOVUu6yhjN1Z1gYPNf",
        text: "$50 a month",
        amount: "50",
      },
    },
    EUR: {
      levelOne: {
        price: "price_1HVTTwDOVUu6yhjNVOWyY3hy",
        text: "€5 a month",
        amount: "5",
      },
      levelTwo: {
        price: "price_1HVTU9DOVUu6yhjNQjBxH8mv",
        text: "€10 a month",
        amount: "10",
      },
      levelThree: {
        price: "price_1HVTULDOVUu6yhjNAMa8cdQg",
        text: "€20 a month",
        amount: "20",
      },
      levelFour: {
        price: "price_1HVTUWDOVUu6yhjNmtcktSi7",
        text: "€40 a month",
        amount: "40",
      },
    },
    GBP: {
      levelOne: {
        price: "price_1HVTUuDOVUu6yhjNJr8FS5hm",
        text: "£5 a month",
        amount: "5",
      },
      levelTwo: {
        price: "price_1HVTV4DOVUu6yhjNXZemCrK0",
        text: "£10 a month",
        amount: "10",
      },
      levelThree: {
        price: "price_1HVTVEDOVUu6yhjNg0MVZShG",
        text: "£20 a month",
        amount: "20",
      },
      levelFour: {
        price: "price_1HVTVTDOVUu6yhjNOpg1jIfU",
        text: "£40 a month",
        amount: "40",
      },
    },
    CAD: {
      levelOne: {
        price: "price_1HVTVpDOVUu6yhjNZjhMEWO2",
        text: "$10 a month",
        amount: "10",
      },
      levelTwo: {
        price: "price_1HVTW1DOVUu6yhjNg1TIoWum",
        text: "$15 a month",
        amount: "15",
      },
      levelThree: {
        price: "price_1HVTWCDOVUu6yhjNBjXG9Fe9",
        text: "$35 a month",
        amount: "35",
      },
      levelFour: {
        price: "price_1HVTWMDOVUu6yhjNDz4y9Jzt",
        text: "$65 a month",
        amount: "65",
      },
    },
    AUD: {
      levelOne: {
        price: "price_1HVTWeDOVUu6yhjNWKXIu8WJ",
        text: "$10 a month",
        amount: "10",
      },
      levelTwo: {
        price: "price_1HVTWtDOVUu6yhjNMZRWL8bX",
        text: "$15 a month",
        amount: "15",
      },
      levelThree: {
        price: "price_1HVTX4DOVUu6yhjNK21runP2",
        text: "$35 a month",
        amount: "35",
      },
      levelFour: {
        price: "price_1HVTXJDOVUu6yhjNl3UvxLrr",
        text: "$70 a month",
        amount: "70",
      },
    },
    JPY: {
      levelOne: {
        price: "price_1HVTXgDOVUu6yhjNhETVDMbW",
        text: "¥500 a month",
        amount: "500",
      },
      levelTwo: {
        price: "price_1HVTXtDOVUu6yhjNtDjMUo4W",
        text: "¥1000 a month",
        amount: "1000",
      },
      levelThree: {
        price: "price_1HVTYADOVUu6yhjNJoEjtHcY",
        text: "¥2500 a month",
        amount: "2500",
      },
      levelFour: {
        price: "price_1HVTYLDOVUu6yhjNziS2gXhj",
        text: "¥5000 a month",
        amount: "5000",
      },
    },
  },
};
if (process.env.GATSBY_STRIPE_TYPE == "prod") {
  stripeConfig.oneTime = {
    USD: "price_1HVRC7DOVUu6yhjNHWNMz6Zf",
    EUR: "price_1HVRHSDOVUu6yhjNhOGckxxU",
    GBP: "price_1HVRNRDOVUu6yhjN0BsrpfOo",
    CAD: "price_1HVRNpDOVUu6yhjNyoxCfwmQ",
    AUD: "price_1HVROBDOVUu6yhjNuN2o56Ob",
    JPY: "price_1HVROeDOVUu6yhjN83arFdQo",
  };
  stripeConfig.monthly = {
    USD: {
      levelOne: {
        price: "price_1HVP1ODOVUu6yhjNAUMDRlrr",
        text: "$5 a month",
        amount: "5",
      },
      levelTwo: {
        price: "price_1HVP3mDOVUu6yhjNL7qjHUyW",
        text: "$10 a month",
        amount: "10",
      },
      levelThree: {
        price: "price_1HVP3kDOVUu6yhjN7kaQEJ8L",
        text: "$25 a month",
        amount: "25",
      },
      levelFour: {
        price: "price_1HVP3lDOVUu6yhjN1Z1gYPNf",
        text: "$50 a month",
        amount: "50",
      },
    },
    EUR: {
      levelOne: {
        price: "price_1HVTTwDOVUu6yhjNVOWyY3hy",
        text: "€5 a month",
        amount: "5",
      },
      levelTwo: {
        price: "price_1HVTU9DOVUu6yhjNQjBxH8mv",
        text: "€10 a month",
        amount: "10",
      },
      levelThree: {
        price: "price_1HVTULDOVUu6yhjNAMa8cdQg",
        text: "€20 a month",
        amount: "20",
      },
      levelFour: {
        price: "price_1HVTUWDOVUu6yhjNmtcktSi7",
        text: "€40 a month",
        amount: "40",
      },
    },
    GBP: {
      levelOne: {
        price: "price_1HVTUuDOVUu6yhjNJr8FS5hm",
        text: "£5 a month",
        amount: "5",
      },
      levelTwo: {
        price: "price_1HVTV4DOVUu6yhjNXZemCrK0",
        text: "£10 a month",
        amount: "10",
      },
      levelThree: {
        price: "price_1HVTVEDOVUu6yhjNg0MVZShG",
        text: "£20 a month",
        amount: "20",
      },
      levelFour: {
        price: "price_1HVTVTDOVUu6yhjNOpg1jIfU",
        text: "£40 a month",
        amount: "40",
      },
    },
    CAD: {
      levelOne: {
        price: "price_1HVTVpDOVUu6yhjNZjhMEWO2",
        text: "$10 a month",
        amount: "10",
      },
      levelTwo: {
        price: "price_1HVTW1DOVUu6yhjNg1TIoWum",
        text: "$15 a month",
        amount: "15",
      },
      levelThree: {
        price: "price_1HVTWCDOVUu6yhjNBjXG9Fe9",
        text: "$35 a month",
        amount: "35",
      },
      levelFour: {
        price: "price_1HVTWMDOVUu6yhjNDz4y9Jzt",
        text: "$65 a month",
        amount: "65",
      },
    },
    AUD: {
      levelOne: {
        price: "price_1HVTWeDOVUu6yhjNWKXIu8WJ",
        text: "$10 a month",
        amount: "10",
      },
      levelTwo: {
        price: "price_1HVTWtDOVUu6yhjNMZRWL8bX",
        text: "$15 a month",
        amount: "15",
      },
      levelThree: {
        price: "price_1HVTX4DOVUu6yhjNK21runP2",
        text: "$35 a month",
        amount: "35",
      },
      levelFour: {
        price: "price_1HVTXJDOVUu6yhjNl3UvxLrr",
        text: "$70 a month",
        amount: "70",
      },
    },
    JPY: {
      levelOne: {
        price: "price_1HVTXgDOVUu6yhjNhETVDMbW",
        text: "¥500 a month",
        amount: "500",
      },
      levelTwo: {
        price: "price_1HVTXtDOVUu6yhjNtDjMUo4W",
        text: "¥1000 a month",
        amount: "1000",
      },
      levelThree: {
        price: "price_1HVTYADOVUu6yhjNJoEjtHcY",
        text: "¥2500 a month",
        amount: "2500",
      },
      levelFour: {
        price: "price_1HVTYLDOVUu6yhjNziS2gXhj",
        text: "¥5000 a month",
        amount: "5000",
      },
    },
  };
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
  stripe: stripeConfig,
};
