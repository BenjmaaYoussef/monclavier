import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["fr", "en"];
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
