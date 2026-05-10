import {
  getStripeDonationPriceConfig,
  type StripeDonationConfig,
} from "./stripeDonation";

let url = "https://kodi.tv";
if (import.meta.env.GATSBY_SITEURL !== undefined) {
  url = import.meta.env.GATSBY_SITEURL;
} else if (import.meta.env.PUBLIC_SITEURL !== undefined) {
  url = import.meta.env.PUBLIC_SITEURL;
}

let backend_branch = "staging";
if (import.meta.env.GATSBY_NETLIFY_CMS_BACKEND !== undefined) {
  backend_branch = import.meta.env.GATSBY_NETLIFY_CMS_BACKEND;
} else if (import.meta.env.PUBLIC_NETLIFY_CMS_BACKEND !== undefined) {
  backend_branch = import.meta.env.PUBLIC_NETLIFY_CMS_BACKEND;
}

export interface StripeConfig extends StripeDonationConfig {
  apikey: string | undefined;
  donorPortalUrl: string;
}

const stripeType =
  import.meta.env.GATSBY_STRIPE_TYPE || import.meta.env.PUBLIC_STRIPE_TYPE;

const stripeConfig: StripeConfig = {
  apikey:
    import.meta.env.GATSBY_STRIPE_APIKEY || import.meta.env.PUBLIC_STRIPE_APIKEY,
  donorPortalUrl: "https://billing.stripe.com/p/login/cNifZhf3pbNEbBT8rJ24000",
  ...getStripeDonationPriceConfig(stripeType),
};

const siteConfig = {
  siteMetadata: {
    title: "Kodi",
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

export default siteConfig;
