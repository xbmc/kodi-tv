import { defineMiddleware } from "astro:middleware";
import { defaultLocale, isLocale } from "./i18n";

export const onRequest = defineMiddleware((context, next) => {
  const [firstSegment, ...rest] = context.url.pathname.split("/").filter(Boolean);
  const locale = isLocale(firstSegment) ? firstSegment : defaultLocale;
  context.locals.locale = locale;

  if (locale === defaultLocale) return next();

  const target = new URL(context.url);
  target.pathname = `/${rest.join("/")}`.replace(/\/$/, "") || "/";
  return context.rewrite(target);
});
