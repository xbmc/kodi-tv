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
