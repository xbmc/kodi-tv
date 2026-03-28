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
  ContributeGallery,
  CtaButtonInternal,
  DownloadNotice,
  SponsorList,
} from "./SectionWidgets";
import { StoreCta } from "./StoreCta";

function PreviewNoticeCard(props: {
  section: "downloadlist" | "sponsors" | "merch-cta";
}) {
  return (
    <Card>
      <h3 className="text-2xl font-bold">No Live Preview</h3>
      <p>The {props.section} component is not available in Live Preview.</p>
    </Card>
  );
}

function DynamicSection(props: { preview: any; section: string | number }) {
  let storeCta = <StoreCta />;
  let dlcomponent = <DownloadList />;
  let spcomponent = <SponsorList />;
  if (props.preview) {
    storeCta = <PreviewNoticeCard section="store-cta" />;
    dlcomponent = <PreviewNoticeCard section="downloadlist" />;
    spcomponent = <PreviewNoticeCard section="sponsors" />;
  }
  let sections = {
    "store-cta": storeCta,
    downloadlist: dlcomponent,
    sponsors: spcomponent,
    aboutdisclaimer: <AboutDisclaimer />,
    aboutgallery: <AboutGallery />,
    contactnote: <AboutContactNote />,
    contributegallery: <ContributeGallery />,
    downloadnotice: <DownloadNotice />,
    officialremotes: <AboutOfficialRemotes />,
    otherwaystohelp: (
      <CtaButtonInternal url="/contribute" buttontext="Other Ways to Help" />
    ),
    jointheteam: (
      <CtaButtonInternal url="/contribute/developers" buttontext="Join the Team" />
    ),
    visitsponsoring: (
      <CtaButtonInternal
        url="/about/sponsors"
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

export default function Page(props: { onePage: any; preview: boolean | undefined }) {
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
