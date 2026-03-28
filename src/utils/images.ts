import { getImage } from "astro:assets";
import type { ImageMetadata } from "astro";

// Eagerly import all images from src/images/ so they can be resolved by public path
const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  "../images/**/*.{webp,png,jpg,jpeg,svg,gif}",
  { eager: true },
);

/**
 * Maps a public /images/... path (formerly served from static/images/)
 * to the corresponding Astro ImageMetadata from src/images/.
 *
 * Returns the ImageMetadata if found, or undefined if the image
 * doesn't exist in src/images/ (e.g. blog or addon images that
 * live only in static/images/).
 */
export function resolveImage(publicPath: string): ImageMetadata | undefined {
  // Convert "/images/foo.webp" -> "../images/foo.webp"
  const key = publicPath.replace(/^\/images\//, "../images/");
  const mod = imageModules[key];
  return mod?.default;
}

/**
 * Optimizes an image from src/images/ given its public path.
 * Returns the optimized src URL string, or the original path
 * if the image isn't found in src/images/.
 */
export async function optimizeImagePath(
  publicPath: string,
  opts: { width?: number; format?: "webp" | "png" | "jpg" } = {},
): Promise<string> {
  const meta = resolveImage(publicPath);
  if (!meta) return publicPath;
  const optimized = await getImage({
    src: meta,
    width: opts.width,
    format: opts.format ?? "webp",
  });
  return optimized.src;
}

/**
 * Resolves all /images/ paths in a list of items that have an `icon` field.
 * Returns new items with optimized icon URLs.
 */
export async function optimizeIconItems<T extends { icon: string }>(
  items: T[],
  opts: { width?: number; format?: "webp" | "png" | "jpg" } = {},
): Promise<T[]> {
  return Promise.all(
    items.map(async item => {
      const optimizedIcon = await optimizeImagePath(item.icon, opts);
      return { ...item, icon: optimizedIcon };
    }),
  );
}

/**
 * Resolves all /images/ paths in a list of sponsor items.
 * Returns new items with optimized image.src URLs.
 */
export async function optimizeSponsorItems<
  T extends { image: { src: string; title: string; alt: string } },
>(
  items: T[],
  opts: { width?: number; format?: "webp" | "png" | "jpg" } = {},
): Promise<T[]> {
  return Promise.all(
    items.map(async item => {
      const optimizedSrc = await optimizeImagePath(item.image.src, opts);
      return { ...item, image: { ...item.image, src: optimizedSrc } };
    }),
  );
}
