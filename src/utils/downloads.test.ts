import { describe, expect, it } from "vitest";
import {
  buildReceiptDownloadUrl,
  getDownloadType,
  getDownloadHref,
  getPlatformDisplayName,
  getReceiptDownloadName,
  isAllowedReceiptDownloadUrl,
} from "./downloads";

describe("download routing", () => {
  it.each([
    "https://mirrors.kodi.tv/releases/windows/win64/kodi.exe?https=1",
    "https://mirrors.kodi.tv/releases/osx/arm64/kodi.dmg?https=1",
    "https://mirrors.kodi.tv/releases/android/arm64-v8a/kodi.apk?https=1",
    "https://mirrors.kodi.tv/releases/darwin/tvos/kodi.deb?https=1",
    "https://mirrors.kodi.tv/releases/webos/kodi.ipk?https=1",
  ])("treats direct binary URLs as receipt binaries: %s", url => {
    expect(getDownloadType({ url })).toBe("receipt_binary");
  });

  it("keeps mirror folders as directory links", () => {
    expect(
      getDownloadType({
        url: "https://mirrors.kodi.tv/nightlies/windows/win64/master/",
      }),
    ).toBe("mirror_directory");
  });

  it("keeps stores and install guides external", () => {
    expect(
      getDownloadType({
        url: "https://play.google.com/store/apps/details?id=org.xbmc.kodi",
      }),
    ).toBe("external");
    expect(
      getDownloadType({
        url: "https://kodi.wiki/view/HOW-TO:Install_Kodi_for_Linux?https=1",
      }),
    ).toBe("external");
  });

  it("uses explicit download type before extension fallback", () => {
    expect(
      getDownloadType({
        download_type: "external",
        url: "https://example.com/kodi.exe",
      }),
    ).toBe("external");
  });

  it("builds an encoded receipt URL for the selected binary", () => {
    expect(
      buildReceiptDownloadUrl({
        platform: "Windows",
        name: "Installer (64BIT)",
        url: "https://mirrors.kodi.tv/releases/windows/win64/kodi.exe?https=1",
      }),
    ).toBe(
      "/download/thanks/windows?name=Installer+%2864BIT%29&url=https%3A%2F%2Fmirrors.kodi.tv%2Freleases%2Fwindows%2Fwin64%2Fkodi.exe%3Fhttps%3D1",
    );
  });

  it("routes receipt binaries to the receipt page and keeps other links direct", () => {
    expect(
      getDownloadHref({
        platform: "macOS",
        name: "Apple Silicon (ARM64)",
        url: "https://mirrors.kodi.tv/releases/osx/arm64/kodi.dmg?https=1",
      }),
    ).toContain("/download/thanks/macos?");
    expect(
      getDownloadHref({
        platform: "Windows",
        name: "Windows Store",
        download_type: "external",
        url: "https://apps.microsoft.com/detail/9nblggh4t892",
      }),
    ).toBe("https://apps.microsoft.com/detail/9nblggh4t892");
  });

  it.each([
    ["ios", "iOS"],
    ["macos", "macOS"],
    ["raspberry-pi", "Raspberry Pi"],
    ["tvos", "tvOS"],
    ["webos", "webOS"],
    ["windows", "Windows"],
  ])("uses the canonical platform display name for %s", (slug, name) => {
    expect(getPlatformDisplayName(slug)).toBe(name);
  });

  it.each([
    "https://mirrors.kodi.tv/releases/windows/win64/kodi.exe?https=1",
    "https://mirrors.kodi.tv/releases/osx/arm64/kodi.dmg",
    "https://mirrors.kodi.tv/releases/android/arm64-v8a/kodi.apk?https=1",
    "https://mirrors.kodi.tv/releases/darwin/tvos/kodi.deb",
    "https://mirrors.kodi.tv/releases/webos/kodi.ipk?https=1",
  ])("allows official Kodi binary receipt URLs: %s", url => {
    expect(isAllowedReceiptDownloadUrl(url)).toBe(true);
  });

  it.each([
    "",
    "javascript:alert(1)",
    "data:text/html,download",
    "https://mirrors.kodi.tv:8080/releases/windows/win64/kodi.exe",
    "http://mirrors.kodi.tv/releases/windows/win64/kodi.exe",
    "https://example.com/kodi.exe",
    "https://mirrors.kodi.tv/nightlies/windows/win64/master/",
    "https://mirrors.kodi.tv/releases/windows/win64/kodi.zip",
  ])("blocks non-official or non-binary receipt URLs: %s", url => {
    expect(isAllowedReceiptDownloadUrl(url)).toBe(false);
  });

  it("derives the receipt display name from the allowed URL", () => {
    expect(
      getReceiptDownloadName(
        "https://mirrors.kodi.tv/releases/windows/win64/kodi-21.3-Omega-x64.exe?https=1",
      ),
    ).toBe("kodi-21.3-Omega-x64.exe");
  });

  it("falls back to a generic receipt display name for invalid URLs", () => {
    expect(getReceiptDownloadName("https://example.com/MALWARE.exe")).toBe(
      "Kodi download",
    );
  });
});
