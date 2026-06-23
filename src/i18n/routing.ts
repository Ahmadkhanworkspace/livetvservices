import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'es', 'fr', 'de', 'pt', 'ar', 'hi', 'ur', 'tr', 'it', 'ru', 'zh'],
  defaultLocale: 'en'
});

export type Locale = (typeof routing.locales)[number];

export const {Link, redirect, usePathname, useRouter} = createNavigation(routing);
