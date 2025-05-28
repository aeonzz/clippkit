/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://clippkit.com",
  generateRobotsTxt: true, // (optional)
  // ...other Sitemaps configurations
  // Example:
  // robotsTxtOptions: {
  //   additionalSitemaps: [
  //     'https://example.com/my-custom-sitemap-1.xml',
  //     'https://example.com/my-custom-sitemap-2.xml',
  //     'https://example.com/my-custom-sitemap-3.xml',
  //   ],
  // },
};
