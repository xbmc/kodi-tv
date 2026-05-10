import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DownloadLinks } from "./ReleasesLinks";

describe("DownloadLinks", () => {
  it("renders nothing when downloads are omitted", () => {
    const { container } = render(<DownloadLinks platform="Windows" />);

    expect(container).toBeEmptyDOMElement();
  });

  it("routes receipt binary links through the download receipt page", () => {
    render(
      <DownloadLinks
        platform="Windows"
        downloads={[
          {
            name: "Installer (64BIT)",
            url: "https://mirrors.kodi.tv/releases/windows/win64/kodi-21.3-Omega-x64.exe?https=1",
            download_type: "receipt_binary",
          },
        ]}
      />,
    );

    expect(screen.getByRole("link", { name: "Installer (64BIT)" })).toHaveAttribute(
      "href",
      "/download/thanks/windows?url=https%3A%2F%2Fmirrors.kodi.tv%2Freleases%2Fwindows%2Fwin64%2Fkodi-21.3-Omega-x64.exe%3Fhttps%3D1",
    );
  });

  it("keeps external links direct", () => {
    render(
      <DownloadLinks
        platform="Windows"
        downloads={[
          {
            name: "Windows Store",
            url: "https://apps.microsoft.com/detail/9nblggh4t892",
            download_type: "external",
          },
        ]}
      />,
    );

    expect(screen.getByRole("link", { name: "Windows Store" })).toHaveAttribute(
      "href",
      "https://apps.microsoft.com/detail/9nblggh4t892",
    );
    expect(screen.getByRole("link", { name: "Windows Store" })).toHaveAttribute(
      "target",
      "_blank",
    );
    expect(screen.getByRole("link", { name: "Windows Store" })).toHaveAttribute(
      "rel",
      "noopener noreferrer",
    );
  });

  it("opens receipt pages in the current tab", () => {
    render(
      <DownloadLinks
        platform="macOS"
        downloads={[
          {
            name: "Apple Silicon (ARM64)",
            url: "https://mirrors.kodi.tv/releases/osx/arm64/kodi-21.3-Omega-arm64.dmg?https=1",
            download_type: "receipt_binary",
          },
        ]}
      />,
    );

    expect(
      screen.getByRole("link", { name: "Apple Silicon (ARM64)" }),
    ).not.toHaveAttribute("target");
  });
});
