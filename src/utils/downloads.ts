import slugify from "slugify";
import {
  getReceiptDownloadName,
  isAllowedReceiptDownloadUrl,
} from "./downloadValidation";
export { getReceiptDownloadName, isAllowedReceiptDownloadUrl };

export type DownloadType = "receipt_binary" | "mirror_directory" | "external";

export interface DownloadItem {
  name: string;
  url: string;
  download_type?: DownloadType;
}

const mirrorDirectoryPattern = /^https:\/\/mirrors\.kodi\.tv\/.+\/$/i;
const platformDisplayNames: Record<string, string> = {
  android: "Android",
  ios: "iOS",
  linux: "Linux",
  macos: "macOS",
  "raspberry-pi": "Raspberry Pi",
  tvos: "tvOS",
  webos: "webOS",
  windows: "Windows",
};

export function getDownloadType(download: {
  url: string;
  download_type?: DownloadType;
}): DownloadType {
  if (download.download_type) {
    return download.download_type;
  }

  if (isAllowedReceiptDownloadUrl(download.url)) {
    return "receipt_binary";
  }

  if (mirrorDirectoryPattern.test(download.url)) {
    return "mirror_directory";
  }

  return "external";
}

export function buildReceiptDownloadUrl({
  platform,
  url,
}: {
  platform: string;
  url: string;
}) {
  const params = new URLSearchParams({ url });
  const platformSlug = slugify(platform, {
    lower: true,
    remove: /[^\w\s$*_+~.()'"!\-@]+/g,
  });

  return `/download/thanks/${platformSlug}?${params.toString()}`;
}

export function getDownloadHref({
  platform,
  url,
  download_type,
}: DownloadItem & { platform: string }) {
  if (getDownloadType({ url, download_type }) !== "receipt_binary") {
    return url;
  }

  return buildReceiptDownloadUrl({ platform, url });
}

export function getPlatformDisplayName(platform?: string) {
  if (!platform) {
    return "Kodi";
  }

  return (
    platformDisplayNames[platform] ??
    platform
      .split("-")
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ")
  );
}

export function isReceiptDownload(download: {
  url: string;
  download_type?: DownloadType;
}) {
  return getDownloadType(download) === "receipt_binary";
}
