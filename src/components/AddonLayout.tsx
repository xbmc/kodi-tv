import React from "react";
import Layout from "./layout";
import { IAddon } from "./../addon";
import ItemWithComma from "./ItemWithComma";
import Carousel from "./carousel";
import { ExclamationOutline } from "heroicons-react";
import Card from "src/components/Card"

export default function AddonLayout({
  data,
}: {
  data: {
    addon: IAddon;
  };
}) {
  const addon = data.addon;
  let slides: string[] = [];
  let authorlabel = "Author";
  let categorylabel = "Category";
  if (addon.authors.length > 1) {
    authorlabel = "Authors";
  }
  if (addon.categories.length > 1) {
    categorylabel = "Categories";
  }
  if (addon.screenshots != null) {
    addon.screenshots.forEach((screenshot: { localpath: string }) => {
      slides.push(screenshot.localpath);
    });
  }
  let frontmatter = {title: "Add-on Details", breadcrumbs: "Addons | " + addon.name}

  return (
    <Layout className="addondetail" frontmatter={frontmatter}>
      <div className="flex flex-col">
        <div className="grid grid-cols-5">
          <div align="right" className="col-span-1 row-span-full pr-6">
            <img width="150" height="150" alt="" src={addon.icon} />
          </div>
          <div className="col-span-4 flex flex-col">
            <div className=" text-2xl font-bold" dangerouslySetInnerHTML={{ __html: addon.name }} />
            <p>
              <div dangerouslySetInnerHTML={{ __html: addon.summary }} />
            </p>
            <div className="flex prose">
              <div className="pr-4">&#128194; {addon.version}</div>
              <div className="pr-4">&#128339; {addon.lastupdate}</div>
              <div>
                &#128100;&nbsp;
                {addon.authors.map(
                  (author: { name: string; slug: string }, index: any) => {
                    return (
                      <ItemWithComma
                        description={author.name}
                        url={"../author/" + author.slug}
                        index={index}
                        length={addon.authors.length - 1}
                        linkType="internal"
                      />
                    );
                  }
                )}
              </div>
            </div>
            <div className="flex prose">
              <div>
                &#127991;&nbsp;
                {addon.categories.map(
                  (category: { name: string; slug: string }, index: any) => {
                    return (
                      <ItemWithComma
                        description={category.name}
                        url={"../category/" + category.slug}
                        index={index}
                        length={addon.categories.length - 1}
                        linkType="internal"
                      />
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="pt-2 px-2 md:pt-4 md:px-10 lg:px-32">
          <Card>
            <div className="flex p-2">
              <div className="pr-2">
                <ExclamationOutline className="inline text-kodi" />
              </div>
              <div>
                To download this Add-On, we highly recommend you do it via the user
                interface in Kodi. Simply look for the "Get More" button in the Add-Ons
                menu. If you want to install it manually, you can direct download from
                the platforms link that matches your platform then in Kodi look for the
                "Install via Zip" option.
              </div>
            </div>
          </Card>
        </div>
        <div className="grid grid-rows-none md:grid-cols-5 pt-4 gap-4 prose max-w-none">
          <div className="col-span-1 font-bold md:text-right pr-2">{"Description"}</div>
          <div
            className="md:col-span-4"
            dangerouslySetInnerHTML={{ __html: addon.description }}
          />
          <div
            className="pr-2 font-bold md:col-span-1 md:text-right"
            style={{ display: addon.forum == null ? "none" : "block" }}
          >
            {"Forum"}
          </div>
          <div
            className="md:col-span-4"
            style={{ display: addon.forum == null ? "none" : "block" }}
          >
            <a href={addon.forum}>{addon.forum}</a>
          </div>
          <div
            className="pr-2 font-bold md:col-span-1 md:text-right"
            style={{ display: addon.website == null ? "none" : "block" }}
          >
            {"Website"}
          </div>
          <div
            className="md:col-span-4 font-bold md:text-right pr-2"
            style={{ display: addon.website == null ? "none" : "block" }}
          >
            <a href={addon.website}>{addon.website}</a>
          </div>
          <div
            className="pr-2 font-bold md:col-span-1 md:text-right"
            style={{ display: addon.source == null ? "none" : "block" }}
          >
            {"Source"}
          </div>
          <div
            className="md:col-span-4"
            style={{ display: addon.source == null ? "none" : "block" }}
          >
            <a href={addon.source}>{addon.source}</a>
          </div>
          <div className="pr-2 font-bold md:col-span-1 md:text-right">{"License"}</div>
          <div className="md:col-span-4">{addon.license}</div>
          <div className="pr-2 font-bold md:col-span-1 md:text-right">{"Platforms"}</div>
          <div className="md:col-span-4">
            {addon.platforms.map(
              (platform: { platform: string; path: string }, index: any) => {
                return (
                  <ItemWithComma
                    description={platform.platform}
                    url={platform.path}
                    index={index}
                    length={addon.platforms.length - 1}
                    linkType="external"
                  />
                );
              }
            )}
          </div>
          <div className="pr-2 font-bold md:col-span-1 md:text-right">{"Size"}</div>
          <div className="md:col-span-4">{addon.size}</div>
          <div className="pr-2 font-bold md:col-span-1 md:text-right">{"Downloads"}</div>
          <div className="md:col-span-4">
            {addon.downloads.toLocaleString()} (this is the download count for the
            most current version)
          </div>
        </div>
        <div className="pt-6">
          <Carousel slides={slides} />
        </div>
      </div>
    </Layout>
  );
}
