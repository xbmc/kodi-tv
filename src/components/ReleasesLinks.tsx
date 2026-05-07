import React from "react";
import Button from "./Button";
import {
  getDownloadHref,
  isReceiptDownload,
  type DownloadItem,
} from "../utils/downloads";

export function DownloadLinks(props: {
  platform: string;
  downloads: DownloadItem[] | null;
}) {
  if (props.downloads === null) {
    return null;
  }
  return (
    <React.Fragment>
      <h3 className="text-lg font-bold">Downloads</h3>
      <div className="grid grid-cols-1 gap-y-3 lg:flex">
        {props.downloads.map((download: DownloadItem) => {
          const href = getDownloadHref({
            ...download,
            platform: props.platform,
          });
          const target = isReceiptDownload(download) ? undefined : "_blank";
          return (
            <div
              key={`${download.name}-${download.url}`}
              className="lg:flex-initial"
            >
              <Button href={href} target={target} variant="primary">
                {download.name}
              </Button>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}
