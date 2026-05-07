import React, { useEffect } from "react";
import { cn } from "@/lib/utils";

interface AdUnitProps {
  minHeightClass?: string;
  className?: string;
}

function AdUnit({ minHeightClass = "min-h-28", className }: AdUnitProps) {
  useEffect(() => {
    try {
      const win = window as typeof window & { adsbygoogle?: unknown[] };
      win.adsbygoogle = win.adsbygoogle || [];
      win.adsbygoogle.push({});
    } catch {
      // Ad blockers can make the provider script unavailable.
    }
  }, []);

  return (
    <section
      aria-label="Advertisement"
      className={cn(
        "rounded-lg border border-dashed border-gray-300 bg-gray-50 p-4",
        className,
      )}
    >
      <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">
        Advertisement
      </p>
      <ins
        className={cn("adsbygoogle block", minHeightClass)}
        data-ad-client="ca-pub-5235469391524556"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </section>
  );
}

export { AdUnit };
