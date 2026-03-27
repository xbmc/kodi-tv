import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Card, FeaturedCard, RoundedCardWithImage } from "./Card";

describe("Card", () => {
  it("renders children", () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText("Card content")).toBeInTheDocument();
  });
});

describe("FeaturedCard", () => {
  it("renders title and children", () => {
    render(<FeaturedCard title="My Title">Body text</FeaturedCard>);
    expect(screen.getByText("My Title")).toBeInTheDocument();
    expect(screen.getByText("Body text")).toBeInTheDocument();
  });

  it("wraps in a link when url is provided", () => {
    render(
      <FeaturedCard title="Linked" url="/foo">
        Link body
      </FeaturedCard>,
    );
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/foo");
  });

  it("renders as a div when no url", () => {
    const { container } = render(
      <FeaturedCard title="No link">Div body</FeaturedCard>,
    );
    expect(container.querySelector("a")).toBeNull();
  });
});

describe("RoundedCardWithImage", () => {
  it("renders image and text", () => {
    render(
      <RoundedCardWithImage
        imgtitle="Photo"
        imgsrc="/images/test.jpg"
        imgalt="Alt text"
        title="Image Card"
      >
        Some description
      </RoundedCardWithImage>,
    );
    const img = screen.getByAltText("Alt text");
    expect(img).toHaveAttribute("src", "/images/test.jpg");
    expect(screen.getByText("Image Card")).toBeInTheDocument();
    expect(screen.getByText("Some description")).toBeInTheDocument();
  });
});
