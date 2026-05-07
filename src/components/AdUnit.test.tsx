import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AdUnit } from "./AdUnit";

describe("AdUnit", () => {
  it("renders a labeled responsive ad container", () => {
    const { container } = render(<AdUnit minHeightClass="min-h-72" />);

    expect(screen.getByLabelText("Advertisement")).toBeInTheDocument();
    expect(container.querySelector(".adsbygoogle")).toHaveAttribute(
      "data-ad-client",
      "ca-pub-5235469391524556",
    );
  });
});
