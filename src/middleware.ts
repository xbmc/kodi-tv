import { defineMiddleware } from "astro:middleware";
import { defaultLocale, isLocale } from "./i18n";

export const onRequest = defineMiddleware((context, next) => {
  const requestPath =
    context.locals.requestPath ||
    `${context.url.pathname}${context.url.search}${context.url.hash}`;
  const [firstSegment, ...rest] = context.url.pathname.split("/").filter(Boolean);

  if (isLocale(firstSegment)) {
    context.locals.locale = firstSegment;
    context.locals.requestPath = requestPath;

    const target = new URL(context.url);
    target.pathname = `/${rest.join("/")}`.replace(/\/$/, "") || "/";
    return context.rewrite(target);
  }

  context.locals.locale ||= defaultLocale;
  context.locals.requestPath ||= requestPath;
  return next();
});
