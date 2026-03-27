import { describe, it, expect, vi, beforeEach } from "vitest";
import { LatestNews } from "./LatestNews";
import { DistributionList } from "./DistributionList";
import { Sponsors } from "./Sponsors";
import { Stats } from "./Stats";
import { StoreList } from "./StoreList";

const { useStaticQuery } = vi.hoisted(() => ({
  useStaticQuery: vi.fn(),
}));

vi.mock("gatsby", () => ({
  useStaticQuery,
  graphql: vi.fn(),
}));

beforeEach(() => {
  useStaticQuery.mockReset();
});

describe("LatestNews", () => {
  it("returns blog post nodes", () => {
    const nodes = [
      {
        excerpt: "Post excerpt",
        timeToRead: "3",
        fields: { slug: "/blog/post-1/" },
        frontmatter: {
          author: "Jane",
          date: "January 01, 2024",
          tags: ["news"],
          featured_image: { alt: "", src: "/img.jpg", title: "img" },
          title: "Post 1",
        },
      },
    ];
    useStaticQuery.mockReturnValue({ blogPosts: { nodes } });
    expect(LatestNews()).toEqual(nodes);
  });
});

describe("DistributionList", () => {
  it("returns distribution nodes", () => {
    const nodes = [
      { name: "Linux", icon: "/linux.svg" },
      { name: "Windows", icon: "/windows.svg" },
    ];
    useStaticQuery.mockReturnValue({ allDistributionYaml: { nodes } });
    expect(DistributionList()).toEqual(nodes);
  });
});

describe("Sponsors", () => {
  it("returns sponsor nodes", () => {
    const nodes = [
      {
        name: "Sponsor A",
        slug: "sponsor-a",
        sponsor_type: "Financial",
        image: { alt: "", src: "/a.png", title: "A" },
        body: "Sponsor body",
      },
    ];
    useStaticQuery.mockReturnValue({ allSponsorYaml: { nodes } });
    expect(Sponsors()).toEqual(nodes);
  });
});

describe("Stats", () => {
  it("returns formatted stats array", () => {
    useStaticQuery.mockReturnValue({
      statsYaml: { addons: 500, forumthreads: 1000, gitcommits: 50000 },
    });
    const result = Stats();
    expect(result).toHaveLength(3);
    expect(result[0]).toEqual({
      key: "gitcommits",
      title: "GitHub Commits",
      value: 50000,
    });
    expect(result[1]).toEqual({
      key: "forumthreads",
      title: "Forum Conversations",
      value: 1000,
    });
    expect(result[2]).toEqual({
      key: "addons",
      title: "Official Add-ons",
      value: 500,
    });
  });
});

describe("StoreList", () => {
  it("returns store nodes", () => {
    const nodes = [
      { name: "T-Shirt", icon: "/shirt.svg", slug: "t-shirt" },
    ];
    useStaticQuery.mockReturnValue({ allStoreYaml: { nodes } });
    expect(StoreList()).toEqual(nodes);
  });
});
