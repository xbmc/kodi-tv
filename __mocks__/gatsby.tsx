import React from "react";
import { vi } from "vitest";

const gatsby = await vi.importActual<typeof import("gatsby")>("gatsby");

const Link = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }
>(({ to, children, ...rest }, ref) =>
  React.createElement("a", { ...rest, href: to, ref }, children),
);
Link.displayName = "Link";

const useStaticQuery = vi.fn();
const graphql = vi.fn();
const navigate = vi.fn();

module.exports = {
  ...gatsby,
  Link,
  useStaticQuery,
  graphql,
  navigate,
};
