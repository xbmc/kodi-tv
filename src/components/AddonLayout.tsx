import React from "react";
import ReactMarkdown from "react-markdown";
import {
  InformationCircleOutline,
  TruckOutline,
  TagOutline,
  ClockOutline,
  UserOutline,
  UsersOutline,
} from "heroicons-react";
import { IAddon } from "./../addon";
import { DefaultLayout } from "./Layout";
import ItemWithComma from "./ItemWithComma";
import { Carousel } from "./Carousel";
import { AddonPageSubMenu } from "./AddonPageSubMenu";

export default function AddonLayout({
  repo,
  data,
}: {
  repo: string;
  data: {
    addon: IAddon;
  };
}) {
  const addon = data.addon;
  let frontmatter = {
    title: repo + " Add-on Details",
    breadcrumbs: "Addons | " + repo + " | " + addon.name,
  };
  let slides: string[] = [];
  let linkroot = "/addons/" + repo.toLowerCase() + "/";
  let authoricon = <UserOutline className="h-5 w-5 text-kodi" />;
  if (addon.authors.length > 1) {
    authoricon = <UsersOutline className="h-5 w-5 text-kodi" />;
  }
  if (addon.screenshots != null) {
    addon.screenshots.forEach((screenshot: { localpath: string }) => {
      slides.push(screenshot.localpath);
    });
  }
  let details = [];
  let fields = [
    "Description",
    "Forum",
    "Website",
    "Source",
    "License",
    "Platforms",
    "Size",
    "Downloads",
  ];
  let pushed = 0;
  let classNameRoot = "px-6 gap-1 md:gap-4 py-5 grid grid-cols-1 md:grid-cols-3";
  let className = "";
  let datatype = "";
  let dlcount = addon.downloads;
  for (let i = 0; i < fields.length; i++) {
    datatype = "general";
    if (addon[fields[i].toLowerCase()] != undefined) {
      if (pushed % 2 == 0) {
        className = "bg-gray-100 " + classNameRoot;
      } else {
        className = "bg-gray-50 " + classNameRoot;
      }
      if (fields[i] === "Platforms") {
        datatype = "platform";
      } else if (["Forum", "Website", "Source"].includes(fields[i])) {
        datatype = "link";
      } else if (["Description"].includes(fields[i])) {
        datatype = "markdown";
      } else if (fields[i] === "Downloads") {
        addon.downloads =
          dlcount + " (this is the download count for the most current version)";
      }
      details.push({
        title: fields[i],
        data: addon[fields[i].toLowerCase()],
        className: className,
        datatype: datatype,
      });
      pushed = pushed + 1;
    }
  }

  return (
    <DefaultLayout frontmatter={frontmatter}>
      <AddonPageSubMenu linkroot={linkroot} />
      <div className="grid grid-cols-5">
        <div align="right" className="col-span-1 row-span-full pr-6">
          <img
            className="rounded-md"
            width="150"
            height="150"
            alt=""
            src={addon.icon}
          />
        </div>
        <div className="col-span-4 flex flex-col">
          <ReactMarkdown className="text-2xl font-bold">{addon.name}</ReactMarkdown>
          <ReactMarkdown>{addon.snippet}</ReactMarkdown>
          <div className="mt-2 md:mt-6 flex flex-wrap inline-flex text-sm">
            <div className="inline-flex">
              <div className="pr-1">
                <TruckOutline className="h-5 w-5 text-kodi" />
              </div>
              <div className="pr-4">{addon.version}</div>
            </div>
            <div className="inline-flex">
              <div className="pr-1">
                <ClockOutline className="h-5 w-5 text-kodi" />
              </div>
              <div className="pr-4">{addon.lastupdate}</div>
            </div>
            <div className="inline-flex">
              <div className="pr-1">{authoricon}</div>
              <div>
                {addon.authors.map(
                  (author: { name: string; slug: string }, index: any) => {
                    return (
                      <ItemWithComma
                        description={author.name}
                        url={linkroot + "author/" + author.slug}
                        index={index}
                        length={addon.authors.length - 1}
                        linkType="internal"
                      />
                    );
                  }
                )}
              </div>
            </div>
          </div>
          <div className="mt-2 inline-flex text-sm">
            <div className="pr-1">
              <TagOutline className="h-5 w-5 text-kodi" />
            </div>
            <div>
              {addon.categories.map(
                (category: { name: string; slug: string }, index: any) => {
                  return (
                    <ItemWithComma
                      description={category.name}
                      url={linkroot + "category/" + category.slug}
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
      <div className="mx-2 mt-8 mb-5 lg:mx-8 xl:mx-16 bg-blue-50 border-l-4 border-kodi-darker p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <InformationCircleOutline className="h-5 w-5 text-kodi-darker" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-kodi-darker">
              To download this Add-On, we highly recommend you do it via the user
              interface in Kodi. Simply look for the "Get More" button in the Add-Ons
              menu. If you want to install it manually, you can direct download from
              the platforms link that matches your platform then in Kodi look for the
              "Install via Zip" option.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-2 mt-4 lg:mx-8 xl:mx-16 rounded-lg bg-gray-50 shadow overflow-hidden">
        <div className="border-t border-gray-200">
          <dl>
            {details.map((item, index) => (
              <>
                {item.datatype === "link" ? (
                  <div key={item.title} className={item.className}>
                    <dt className="col-span-1 text-sm font-medium text-gray-500">
                      {item.title}
                    </dt>
                    <dd className="mt-0 col-span-1 md:col-span-2 text-sm">
                      <a href={item.data}>{item.data}</a>
                    </dd>
                  </div>
                ) : (
                  ""
                )}
                {item.datatype === "platform" ? (
                  <div key={item.title} className={item.className}>
                    <dt className="col-span-1 text-sm font-medium text-gray-500">
                      {item.title}
                    </dt>
                    <dd className="mt-0 col-span-1 md:col-span-2 text-sm">
                      {item.data.map((platform, index) => (
                        <ItemWithComma
                          description={platform.platform}
                          url={platform.path}
                          index={index}
                          length={addon.platforms.length - 1}
                          linkType="external"
                        />
                      ))}
                    </dd>
                  </div>
                ) : (
                  ""
                )}
                {item.datatype === "markdown" ? (
                  <div key={item.title} className={item.className}>
                    <dt className="col-span-1 text-sm font-medium text-gray-500">
                      {item.title}
                    </dt>
                    <dd className="mt-0 col-span-1 md:col-span-2 text-sm text-gray-900">
                      <ReactMarkdown>{item.data}</ReactMarkdown>
                    </dd>
                  </div>
                ) : (
                  ""
                )}
                {item.datatype === "general" ? (
                  <div key={item.title} className={item.className}>
                    <dt className="col-span-1 text-sm font-medium text-gray-500">
                      {item.title}
                    </dt>
                    <dd className="mt-0 col-span-1 md:col-span-2 text-sm text-gray-900">
                      {item.data}
                    </dd>
                  </div>
                ) : (
                  ""
                )}
              </>
            ))}
          </dl>
        </div>
      </div>
      <div className="my-8">
        <Carousel slides={slides} />
      </div>
    </DefaultLayout>
  );
}
