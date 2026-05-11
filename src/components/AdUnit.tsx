import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AdUnitProps {
  minHeightClass?: string;
  className?: string;
  lazy?: boolean;
  placement?: "default" | "leaderboard" | "sidebar" | "inline";
  slot?: string;
}

const defaultAdSlot = import.meta.env.PUBLIC_ADSENSE_DOWNLOAD_SLOT;
const defaultTopSlot =
  import.meta.env.PUBLIC_ADSENSE_DOWNLOAD_TOP_SLOT || defaultAdSlot;
const defaultSidebarSlot =
  import.meta.env.PUBLIC_ADSENSE_DOWNLOAD_SIDEBAR_SLOT || defaultAdSlot;
const defaultInlineSlot =
  import.meta.env.PUBLIC_ADSENSE_DOWNLOAD_INLINE_SLOT || defaultAdSlot;

const placementDefaults = {
  default: {
    containerClass: "",
    insClass: "min-h-28",
    slot: defaultAdSlot,
    style: undefined,
  },
  leaderboard: {
    containerClass: "min-h-[280px]",
    insClass: "min-h-[280px]",
    slot: defaultTopSlot,
    style: undefined,
  },
  sidebar: {
    containerClass: "hidden 2xl:block sticky top-6 min-h-[600px] max-w-[334px]",
    insClass: "",
    slot: defaultSidebarSlot,
    style: {
      display: "inline-block",
      width: "300px",
      height: "600px",
    },
  },
  inline: {
    containerClass: "min-h-[280px]",
    insClass: "min-h-[280px]",
    slot: defaultInlineSlot,
    style: undefined,
  },
} as const;

function isVisibleAdUnit(adElement: Element | null) {
  return Boolean(
    adElement &&
    adElement.getClientRects().length > 0 &&
    (adElement as HTMLElement).offsetParent !== null,
  );
}

function AdUnit({
  className,
  lazy = false,
  minHeightClass,
  placement = "default",
  slot,
}: AdUnitProps) {
  const adRef = useRef<HTMLModElement>(null);
  const didInitializeRef = useRef(false);
  const placementConfig = placementDefaults[placement];
  const reservedHeightClass = minHeightClass || placementConfig.insClass;
  const adSlot = slot || placementConfig.slot;
  const isFixedSize = Boolean(placementConfig.style);

  useEffect(() => {
    if (!adSlot && import.meta.env.DEV) {
      console.warn(
        `AdUnit: Missing ad slot ID for ${placement} placement. Set PUBLIC_ADSENSE_DOWNLOAD_SLOT or the placement-specific slot env var.`,
      );
    }
  }, [adSlot, placement]);

  useEffect(() => {
    if (!adSlot) {
      return;
    }

    const initializeAd = () => {
      if (didInitializeRef.current) {
        return true;
      }

      if (!isVisibleAdUnit(adRef.current)) {
        return false;
      }

      try {
        const win = window as typeof window & { adsbygoogle?: unknown[] };
        win.adsbygoogle = win.adsbygoogle || [];
        win.adsbygoogle.push({});
        didInitializeRef.current = true;
        return true;
      } catch {
        // Ad blockers can make the provider script unavailable.
        return false;
      }
    };

    if (typeof IntersectionObserver !== "function" || !adRef.current) {
      if (initializeAd()) {
        return;
      }

      const initializeVisibleAd = () => {
        if (initializeAd()) {
          window.removeEventListener("resize", initializeVisibleAd);
          window.removeEventListener("orientationchange", initializeVisibleAd);
        }
      };

      window.addEventListener("resize", initializeVisibleAd);
      window.addEventListener("orientationchange", initializeVisibleAd);

      return () => {
        window.removeEventListener("resize", initializeVisibleAd);
        window.removeEventListener("orientationchange", initializeVisibleAd);
      };
    }

    if (!lazy && initializeAd()) {
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          if (initializeAd()) {
            observer.disconnect();
          }
        }
      },
      { rootMargin: lazy ? "320px 0px" : "0px" },
    );

    observer.observe(adRef.current);

    return () => {
      observer.disconnect();
    };
  }, [adSlot, lazy]);

  if (!adSlot) {
    return null;
  }

  return (
    <section
      aria-label="Advertisement"
      className={cn(
        "rounded-lg border border-dashed border-gray-300 bg-gray-50 p-4",
        placementConfig.containerClass,
        className,
      )}
      data-ad-placement={placement}
    >
      <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">
        Advertisement
      </p>
      <ins
        ref={adRef}
        className={cn("adsbygoogle block", reservedHeightClass)}
        style={placementConfig.style}
        data-ad-client="ca-pub-5235469391524556"
        data-ad-slot={adSlot}
        data-ad-format={isFixedSize ? undefined : "auto"}
        data-full-width-responsive={isFixedSize ? undefined : "true"}
      />
    </section>
  );
}

export { AdUnit };
