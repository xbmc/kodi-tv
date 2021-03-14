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
                  <h2>{release.title}</h2>
                  <p>
                    <ReactMarkdown>{release.description}</ReactMarkdown>
                  </p>
                </div>
              </div>
              <div className="flex-initial">
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
