const receiptBinaryPathPattern = /\.(exe|dmg|apk|deb|ipk)$/i;
const fallbackReceiptDownloadName = "Kodi download";

export function isAllowedReceiptDownloadUrl(url?: string | null) {
  if (!url) {
    return false;
  }

  try {
    const parsedUrl = new URL(url);

    return (
      parsedUrl.protocol === "https:" &&
      parsedUrl.hostname === "mirrors.kodi.tv" &&
      (parsedUrl.port === "" || parsedUrl.port === "443") &&
      receiptBinaryPathPattern.test(parsedUrl.pathname)
    );
  } catch {
    return false;
  }
}

export function getReceiptDownloadName(url?: string | null) {
  if (!isAllowedReceiptDownloadUrl(url)) {
    return fallbackReceiptDownloadName;
  }

  try {
    const parsedUrl = new URL(url);
    const filename = parsedUrl.pathname.split("/").filter(Boolean).pop();
    const decodedFilename = filename ? decodeURIComponent(filename) : "";
    const normalizedFilename = decodedFilename
      .split("")
      .filter(character => {
        const codePoint = character.charCodeAt(0);

        return codePoint > 31 && codePoint !== 127;
      })
      .join("")
      .trim()
      .slice(0, 100);

    return normalizedFilename || fallbackReceiptDownloadName;
  } catch {
    return fallbackReceiptDownloadName;
  }
}
