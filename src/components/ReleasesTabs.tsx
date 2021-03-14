import React from "react";
import ReactMarkdown from "react-markdown";
import { DownloadLinks } from "./ReleasesLinks";
import Tabs from "./Tabs";

class ReleasesTabs extends React.Component {
  constructor(
    private props: {
      releases: {
        name: string;
        id: string;
        downloads: {
          url: string | undefined;
          name: React.ReactNode;
        }[];
        description: string;
      }[];
    }
  ) {
    super(props);
  }

  render() {
    const releases = this.props.releases;
    return (
      <Tabs>
        {releases.map((release, index) => {
          return (
            <div label={release.name} className="flex">
              <div className="flex-initial">
                <div className="pt-15">
                  <h1 className="text-xl font-bold">{release.title}</h1>
                  <ReactMarkdown className="prose max-w-none">
                    {release.description}
                  </ReactMarkdown>
                </div>
              </div>
              <div className="flex-initial pt-4">
                <DownloadLinks downloads={release.downloads} />
              </div>
            </div>
          );
        })}
      </Tabs>
    );
  }
}

export default ReleasesTabs;
