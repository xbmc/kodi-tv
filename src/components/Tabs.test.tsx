import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Tabs from "./Tabs";

describe("Tabs", () => {
  function renderTabs() {
    return render(
      <Tabs tabs={[{ name: "Tab One" }, { name: "Tab Two" }]}>
        <div label="Tab One">Content One</div>
        <div label="Tab Two">Content Two</div>
      </Tabs>,
    );
  }

  it("renders tab buttons", () => {
    renderTabs();
    expect(screen.getByText("Tab One")).toBeInTheDocument();
    expect(screen.getByText("Tab Two")).toBeInTheDocument();
  });

  it("shows first tab content by default", () => {
    renderTabs();
    expect(screen.getByText("Content One")).toBeInTheDocument();
    expect(screen.queryByText("Content Two")).toBeNull();
  });

  it("switches content when clicking another tab", () => {
    renderTabs();
    fireEvent.click(screen.getByText("Tab Two"));
    expect(screen.queryByText("Content One")).toBeNull();
    expect(screen.getByText("Content Two")).toBeInTheDocument();
  });
});
