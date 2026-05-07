const receiptBinaryPathPattern = /\.(exe|dmg|apk|deb|ipk)$/i;

export function isAllowedReceiptDownloadUrl(url?: string | null) {
  if (!url) {
    return false;
  }

  try {
    const parsedUrl = new URL(url);

    return (
      parsedUrl.protocol === "https:" &&
      parsedUrl.hostname === "mirrors.kodi.tv" &&
      receiptBinaryPathPattern.test(parsedUrl.pathname)
    );
  } catch {
    return false;
  }
}
