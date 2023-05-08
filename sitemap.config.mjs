/**
 * @type {import("next-sitemap").IConfig}
 * @see https://github.com/iamvishnusankar/next-sitemap#create-config-file
 */
const config = {
  siteUrl: process.env.SITE_URL || "https://nandemo-eat.vercel.app/",
  changefreq: "weekly",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  outDir: "public",
  generateIndexSitemap: false,
};

export default config;
