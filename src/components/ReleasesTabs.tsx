import React from "react";
import ReactMarkdown from "react-markdown";
import { DownloadLinks } from "./ReleasesLinks";
import Tabs from "./Tabs";
import type { DownloadItem } from "../utils/downloads";

class ReleasesTabs extends React.Component {
  constructor(props: {
    platform: string;
    releases: {
      name: string;
      id: string;
      downloads: DownloadItem[];
      description: string;
    }[];
  }) {
    super(props);
  }

  render() {
    const releases = this.props.releases;
    if (releases == undefined) {
      return null;
    } else if (releases.length == 0) {
      return null;
    }
    return (
      <Tabs>
        {releases.map(release => {
          return (
            <div key={release.name} label={release.name} className="flex">
              <div className="flex-initial">
                <div className="pt-8">
                  <h1 className="text-xl font-bold">{release.title}</h1>
                  <div className="prose prose-blue max-w-none">
                    <ReactMarkdown>{release.description}</ReactMarkdown>
                  </div>
                </div>
              </div>
              <div className="flex-initial pt-4">
                <DownloadLinks
                  platform={this.props.platform}
                  downloads={release.downloads}
                />
              </div>
            </div>
          );
        })}
      </Tabs>
    );
  }
}

export default ReleasesTabs;
