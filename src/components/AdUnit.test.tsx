import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { AdUnit } from "./AdUnit";

describe("AdUnit", () => {
  beforeEach(() => {
    window.adsbygoogle = [];
  });

  afterEach(() => {
    vi.restoreAllMocks();
    delete window.adsbygoogle;
  });

  it("renders a labeled responsive ad container", () => {
    const { container } = render(
      <AdUnit minHeightClass="min-h-72" slot="1234567890" />,
    );

    expect(screen.getByLabelText("Advertisement")).toBeInTheDocument();
    expect(container.querySelector(".adsbygoogle")).toHaveAttribute(
      "data-ad-client",
      "ca-pub-5235469391524556",
    );
    expect(container.querySelector(".adsbygoogle")).toHaveAttribute(
      "data-ad-slot",
      "1234567890",
    );
  });

  it("reserves leaderboard space before the ad loads", () => {
    const { container } = render(
      <AdUnit placement="leaderboard" slot="1234567890" />,
    );

    expect(screen.getByLabelText("Advertisement")).toHaveClass("min-h-[280px]");
    expect(container.querySelector(".adsbygoogle")).toHaveClass("min-h-[280px]");
  });

  it("renders a fixed desktop sidebar unit", () => {
    const { container } = render(<AdUnit placement="sidebar" slot="1234567890" />);

    expect(screen.getByLabelText("Advertisement")).toHaveClass(
      "hidden",
      "2xl:block",
      "sticky",
      "top-6",
      "min-h-[600px]",
    );
    expect(container.querySelector(".adsbygoogle")).toHaveStyle({
      display: "inline-block",
      width: "300px",
      height: "600px",
    });
    expect(container.querySelector(".adsbygoogle")).not.toHaveAttribute(
      "data-ad-format",
    );
  });

  it("lazy-loads below-fold ad containers when they intersect", async () => {
    Object.defineProperty(HTMLElement.prototype, "offsetParent", {
      configurable: true,
      get: () => document.body,
    });
    vi.spyOn(Element.prototype, "getClientRects").mockReturnValue({
      length: 1,
    } as DOMRectList);

    let observeTarget: Element | null = null;
    let intersectionCallback:
      | ((entries: IntersectionObserverEntry[]) => void)
      | undefined;

    class MockIntersectionObserver {
      constructor(callback: (entries: IntersectionObserverEntry[]) => void) {
        intersectionCallback = callback;
      }

      observe(target: Element) {
        observeTarget = target;
      }

      disconnect() {}
    }

    vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);

    render(<AdUnit lazy placement="inline" slot="1234567890" />);

    expect(window.adsbygoogle).toHaveLength(0);
    intersectionCallback?.([
      {
        isIntersecting: true,
        target: observeTarget,
      } as IntersectionObserverEntry,
    ]);

    await waitFor(() => {
      expect(window.adsbygoogle).toHaveLength(1);
    });
  });

  it("initializes visible ad containers", async () => {
    Object.defineProperty(HTMLElement.prototype, "offsetParent", {
      configurable: true,
      get: () => document.body,
    });
    vi.spyOn(Element.prototype, "getClientRects").mockReturnValue({
      length: 1,
    } as DOMRectList);

    render(<AdUnit slot="1234567890" />);

    await waitFor(() => {
      expect(window.adsbygoogle).toHaveLength(1);
    });
  });

  it("does not initialize hidden ad containers", async () => {
    Object.defineProperty(HTMLElement.prototype, "offsetParent", {
      configurable: true,
      get: () => null,
    });
    vi.spyOn(Element.prototype, "getClientRects").mockReturnValue({
      length: 0,
    } as DOMRectList);

    render(<AdUnit slot="1234567890" />);

    await waitFor(() => {
      expect(window.adsbygoogle).toHaveLength(0);
    });
  });
});
