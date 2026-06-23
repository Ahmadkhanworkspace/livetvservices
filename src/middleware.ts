import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for API routes, _next/static, _next/image, favicon, and other assets
  matcher: [
    // Match root path
    '/',
    // Match pathnames starting with a locale prefix
    '/(en|es|fr|de|pt|ar|hi|ur|tr|it|ru|zh)/:path*',
    // Enable redirection for non-locale paths like /pricing or /how-it-works -> /en/pricing
    '/((?!api|_next/static|_next/image|images|favicon.ico|sitemap.xml|robots.txt|llms.txt|.*\\..*).*)'
  ]
};
