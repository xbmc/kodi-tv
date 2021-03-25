import React from "react";
import ReactMarkdown from "react-markdown";
import { DefaultLayout } from "./Layout";
import { DownloadList } from "./DownloadList";
import { Card } from "./Card";
import {
  AboutDisclaimer,
  AboutGallery,
  AboutContactNote,
  AboutOfficialRemotes,
  CtaButtonExternal,
  CtaButtonInternal,
  DownloadNotice,
  SponsorList,
  SpreadTheWord,
} from "./SectionWidgets";

function PreviewNoticeCard(props) {
  return (
    <Card>
      <h3 className="text-2xl font-bold">No Live Preview</h3>
      <p>The {props.section} component is not available in Live Preview.</p>
    </Card>
  );
}

function DynamicSection(props) {
  let dlcomponent = <DownloadList />;
  let spcomponent = <SponsorList />;
  if (props.preview) {
    dlcomponent = <PreviewNoticeCard section="downloadlist" />;
    spcomponent = <PreviewNoticeCard section="sponsors" />;
  }
  let sections = {
    downloadlist: dlcomponent,
    sponsors: spcomponent,
    aboutdisclaimer: <AboutDisclaimer />,
    aboutgallery: <AboutGallery />,
    contactnote: <AboutContactNote />,
    downloadnotice: <DownloadNotice />,
    officialremotes: <AboutOfficialRemotes />,
    otherwaystohelp: (
      <CtaButtonInternal url="/contribute" buttontext="Other Ways to Help" />
    ),
    jointheteam: (
      <CtaButtonInternal url="/contribute/developers" buttontext="Join the Team" />
    ),
    visitforum: (
      <CtaButtonExternal url="https://forum.kodi.tv" buttontext="Visit the Forums" />
    ),
    visitqa: (
      <CtaButtonExternal
        url="https://kodi.wiki/index.php?title=HOW-TO:Help_with_quality_assurance_testing"
        buttontext="Help with QA"
      />
    ),
    visitcoding: (
      <CtaButtonInternal
        url="/contribute/developers"
        buttontext="Help with Coding"
      />
    ),
    spreadtheword: <SpreadTheWord />,
    visittranslate: (
      <CtaButtonExternal
        url="https://kodi.wiki/index.php?title=Translation_System"
        buttontext="Help with Translations"
      />
    ),
    visitaddondev: (
      <CtaButtonExternal
        url="https://kodi.wiki/view/Add-on_development"
        buttontext="Build Your First Add-on"
      />
    ),
    visitdonate: <CtaButtonInternal url="/donate" buttontext="Donate to Kodi" />,
    visitstore: <CtaButtonInternal url="/store" buttontext="Purchase Kodi Merch" />,
    visitsponsoring: (
      <CtaButtonInternal
        url="about/sponsors"
        buttontext="Learn More About Sponsoring Kodi"
      />
    ),
  };
  let section = sections[props.section];
  if (section == undefined) {
    section = "";
  }
  return section;
}

export default function Page(props) {
  let onePage = props.onePage;
  let preview = false;
  if (props.preview != undefined) {
    preview = props.preview;
  }
  let content = onePage.rawMarkdownBody.split("x-section-x");
  return (
    <DefaultLayout frontmatter={onePage.frontmatter} preview={preview}>
      {content.map((section: string, index: any) => {
        return section.trim().split(" ").length > 1 ? (
          <ReactMarkdown
            key={section.trim().toLowerCase()}
            className="pb-6 prose prose-blue max-w-none"
          >
            {section}
          </ReactMarkdown>
        ) : (
          <DynamicSection
            key={section.trim().toLowerCase()}
            section={section.trim().toLowerCase()}
            preview={preview}
          />
        );
      })}
    </DefaultLayout>
  );
}
