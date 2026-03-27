import React from "react";
import { vi } from "vitest";

export const Link = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }
>(({ to, children, ...rest }, ref) =>
  React.createElement("a", { ...rest, href: to, ref }, children),
);
Link.displayName = "Link";

export const useStaticQuery = vi.fn();
export const graphql = vi.fn();
export const navigate = vi.fn();
