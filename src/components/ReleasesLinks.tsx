import React from "react";
import Button from "src/components/Button";

export function DownloadLinks(props: {
  downloads: { url: string | undefined; name: React.ReactNode }[] | null;
}) {
  if (props.downloads === null) {
    return null;
  }
  return (
    <React.Fragment>
      <h3 class="text-lg font-bold">Downloads</h3>
      <div className="flex">
        {props.downloads.map(
          (
            download: { url: string | undefined; name: React.ReactNode },
            index: any
          ) => {
            return (
              <div className="flex-initial">
                <Button href={download.url} target="_blank" variant="primary">
                  {download.name}
                </Button>
              </div>
            );
          }
        )}
      </div>
    </React.Fragment>
  );
}
