import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import SearchAddons from "./SearchAddons";

// Minimal addon data for testing
const categories = [
  { name: "Video" },
  { name: "Music" },
];

const addons = [
  {
    name: "Alpha Addon",
    addonid: "plugin.video.alpha",
    slug: "alpha-addon",
    summary: "Alpha summary",
    description: "Alpha description",
    downloads: 100,
    lastupdate: "2024-01-01",
    categories: [{ name: "Video" }],
    authors: [{ name: "Alice" }],
    icon: "/icons/alpha.png",
  },
  {
    name: "Beta Addon",
    addonid: "plugin.music.beta",
    slug: "beta-addon",
    summary: "Beta summary",
    description: "Beta description",
    downloads: 200,
    lastupdate: "2024-06-15",
    categories: [{ name: "Music" }],
    authors: [{ name: "Bob" }],
    icon: "/icons/beta.png",
  },
  {
    name: "Charlie Addon",
    addonid: "plugin.video.charlie",
    slug: "charlie-addon",
    summary: "Charlie summary",
    description: "Charlie description",
    downloads: 50,
    lastupdate: "2023-12-01",
    categories: [{ name: "Video" }],
    authors: [{ name: "Alice" }],
    icon: "/icons/charlie.png",
  },
];

describe("SearchAddons", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renders the search form", () => {
    render(
      <SearchAddons
        categories={categories}
        addons={addons}
        linkroot="/addons/omega/"
      />,
    );
    expect(screen.getByLabelText("Input Keyword")).toBeInTheDocument();
    expect(screen.getByLabelText("Input Author")).toBeInTheDocument();
    expect(screen.getByLabelText("Select Category")).toBeInTheDocument();
    expect(screen.getByLabelText("Select Sort Order")).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
  });

  it("shows 'Ready to search' before any search", () => {
    render(
      <SearchAddons
        categories={categories}
        addons={addons}
        linkroot="/addons/omega/"
      />,
    );
    expect(screen.getByText("Ready to search")).toBeInTheDocument();
  });

  it("filters by keyword", () => {
    render(
      <SearchAddons
        categories={categories}
        addons={addons}
        linkroot="/addons/omega/"
      />,
    );
    fireEvent.change(screen.getByLabelText("Input Keyword"), {
      target: { value: "Alpha" },
    });
    fireEvent.click(screen.getByText("Search"));
    expect(screen.getByText("Alpha Addon")).toBeInTheDocument();
    expect(screen.queryByText("Beta Addon")).toBeNull();
  });

  it("filters by category", () => {
    render(
      <SearchAddons
        categories={categories}
        addons={addons}
        linkroot="/addons/omega/"
      />,
    );
    fireEvent.change(screen.getByLabelText("Select Category"), {
      target: { value: "Music" },
    });
    fireEvent.click(screen.getByText("Search"));
    expect(screen.getByText("Beta Addon")).toBeInTheDocument();
    expect(screen.queryByText("Alpha Addon")).toBeNull();
  });

  it("filters by author", () => {
    render(
      <SearchAddons
        categories={categories}
        addons={addons}
        linkroot="/addons/omega/"
      />,
    );
    fireEvent.change(screen.getByLabelText("Input Author"), {
      target: { value: "Bob" },
    });
    fireEvent.click(screen.getByText("Search"));
    expect(screen.getByText("Beta Addon")).toBeInTheDocument();
    expect(screen.queryByText("Alpha Addon")).toBeNull();
  });

  it("shows 'No results found' when search yields nothing", () => {
    render(
      <SearchAddons
        categories={categories}
        addons={addons}
        linkroot="/addons/omega/"
      />,
    );
    fireEvent.change(screen.getByLabelText("Input Keyword"), {
      target: { value: "nonexistent" },
    });
    fireEvent.click(screen.getByText("Search"));
    expect(screen.getByText("No results found")).toBeInTheDocument();
  });
});
