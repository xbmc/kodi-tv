import React from "react";
import ReactMarkdown from "react-markdown";
import { graphql } from "gatsby";
import { DefaultLayout } from "src/components/Layout";
import { BlogPostCard } from "src/components/Blog";
import Card from "src/components/Card";

function Disclaimer() {
  return (
    <>
      <Card>
        <h3 className="text-2xl font-bold">Disclaimer</h3>
        <p>
          Kodi does not provide any media content or sources. Users must provide
          their own content or manually configure Kodi to access third party online
          services. The Kodi project does not provide any support for bootleg content
          or other illegally sourced material, nor do we allow community support
          within our official web sites and services for such content.
        </p>
      </Card>
    </>
  );
}

function FeatureGallery() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <img alt="" src="/images/about--movies.jpg" />
          <h3>Movies</h3>
          Kodi is made for Movies! Supporting all the main video formats including
          streamable online media, Kodi can import, browse and play your Movie
          collection with ease.
        </Card>
        <Card>
          <img alt="" src="/images/about--tvshows.jpg" />
          <h3>TV Shows</h3>
          Kodi's TV Shows library supports episode and season views with posters or
          banners, watched tags, show descriptions and actors. Great for keeping
          track of your progress.
        </Card>
        <Card>
          <img alt="" src="/images/about--music.png" />
          <h3>Music</h3>
          Kodi can play all your music including mp3, flac, wav and wma formats. It
          has cue sheets, tag reading support and smart playlists for ultimate
          control of your music collection.
        </Card>
        <Card>
          <img alt="" src="/images/about--photos.png" />
          <h3>Photos</h3>
          Kodi is the photographers friend. Import pictures into a library and browse
          the different views, start a slideshow, sort or filter them all using your
          remote control.
        </Card>
        <Card>
          <img alt="" src="/images/about--pvr.jpg" />
          <h3>PVR</h3>
          Kodi allows you to watch and record live TV all through an easy to use
          interface. It works with a number of popular backends including
          MediaPortal, MythTV, NextPVR, Tvheadend and many more.
        </Card>
        <Card>
          <img alt="" src="/images/about--skins.jpg" />
          <h3>Skins</h3>
          Kodi allows you to completely change the whole appearance of the interface
          using a variety of skins. We have no doubt that you will find something
          that suits your tastes (or living room).
        </Card>
        <Card>
          <img alt="" src="/images/about--addons.png" />
          <h3>Add-Ons</h3>
          The real power of Kodi comes from the vast selection of community created
          Add-ons. There are Add-Ons for popular web services, applications and
          scripts. <a href="/addons">See which ones are currently available</a>.
        </Card>
        <Card>
          <img alt="" src="/images/about--webinterface.jpg" />
          <h3>Web Interface</h3>
          Interact with Kodi using its JSON-RPC based remote interface. This brings
          loads of possibilities for remote controls,{" "}
          <a href="/addons/category/web-interfaces">web browsers</a>, and 3rd party
          tools to take Kodi to the next level.
        </Card>
        <Card>
          <img alt="" src="/images/about--remotes.jpg" />
          <h3>Remote Controls</h3>
          With support for{" "}
          <a href="http://kodi.wiki/view/Remote_controls">
            hundreds of remote controls
          </a>
          , CEC-compatible TVs, or one of the{" "}
          <a href="/about/software">new Smartphone and Tablet Apps</a>, Kodi allows
          you to control your media your way.
        </Card>
        <Card>
          <img alt="" src="/images/about--games.jpg" />
          <h3>Games</h3>
          Kodi isn't just for passive entertainment media. You can also play games on
          Kodi. Pick from a large number of emulators, or even play a stand-alone
          game. There's even extensive support for game controllers.
        </Card>
      </div>
    </>
  );
}

function DynamicSection(props) {
  let sections = { disclaimer: <Disclaimer />, gallery: <FeatureGallery /> };
  let section = sections[props.section];
  if (section == undefined) {
    section = "";
  }
  return section;
}

export default function Page({ data, pageContext, location }) {
  const { page } = data; // data.page holds the page data
  let frontmatter = { title: "News", breadcrumbs: "News" };
  let content = page.rawMarkdownBody.split("x-section");
  return (
    <DefaultLayout frontmatter={page.frontmatter}>
      {content.map((section: string, index: any) => {
        return section.trim().split(" ").length > 1 ? (
          <ReactMarkdown className="pb-6 prose prose-blue max-w-none">
            {section}
          </ReactMarkdown>
        ) : (
          <DynamicSection section={section.trim()} />
        );
      })}
    </DefaultLayout>
  );
}

export const pageQuery = graphql`
  query {
    page: markdownRemark(fields: { slug: { eq: "/about/" } }) {
      frontmatter {
        title
        breadcrumbs
      }
      rawMarkdownBody
    }
  }
`;
