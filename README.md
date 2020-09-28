# Kodi Website in Gatsby

## Dev Install Instructions

If you are planning to work on the site, you'll need to install Gatsby. Instructions for that are at:

<https://www.gatsbyjs.com/tutorial/>

Once that is done, clone this repo. In your terminal `cd` to the directory and run `npm install`. That will install all the nodejs and Gatsby dependencies.

There is one last thing to do after that. The site is currently using Patternfly 4 for layout, but the Patternfly theme comes bundles with Patternfly 3. To ensure the site renders correctly, you need to go to:

`node_modules/gatsby-theme-patternfly/`

and delete the `node_modules` directory there. Please note that **ANYTIME** you run `npm install` those files get reinstalled, so you'll have to delete them. 

For now my suggestion is to do feature branches off of `main` if you're working on something. After you switch to that branch, you should be able to do `gastby develop` to render a local copy of the site.  The `.gitignore` ensures that none of the node_module directory is included in the repo (which is why you had to do `npm install` at the beginning).


## Site documentation

I promise, this is one of the next things on my list.

## To Do List

### Main site

1. site documentation
1. add sorting add-on search by popularity (requires update of addon parser)
1. decide on a blogging CMS and do that integration
1. make decision about using submenu navigation or finding a way to do dropdown menus
1. make it look the way we want (Patternfly's CSS is pretty well documented)
1. donor wall (need to look at how we can get data from the various platforms where we take donations)

### Addon Parser:

1. parser documentation
1. add download stats to addons: I'm stuck here - running into problems with async downloads or something. I'd also like to suggest we change over to download stats resetting with each version. This is partially because it'll be **WAY** easier with a static site generator, and I think that gives a more realistic view of the usage of an add-on.
1. update code for new lifecycle option in addons.xml (see https://github.com/xbmc/xbmc/pull/18286)
1. add parsing of downloads from mirrors stat url (http://mirrors.kodi.tv/addons/matrix/script.module.trakt/script.module.trakt-3.1.0+matrix.2.zip?stats)
1. get a dump of the Leia database from Drupal so I can write a script to have it generate history

# Original Readme from Gatsby Starter

Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.com/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```shell
    # create a new Gatsby site using the default starter
    gatsby new my-default-starter https://github.com/gatsbyjs/gatsby-starter-default
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-default-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/gatsbyjs/gatsby-starter-default)

<!-- AUTO-GENERATED-CONTENT:END -->
