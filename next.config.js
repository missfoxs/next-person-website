/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "zh", "fr"], // 所有支持的语言
    defaultLocale: "zh",
  },
};

const cachePeriod = Number(100);

module.exports = {
  ...nextConfig,
  async headers() {
    return [
      {
        source: "/(.*).(jpg|jpeg|png|gif|svg|webp)",
        headers: [
          {
            key: "Cache-Control",
            value: `public, max-age=${cachePeriod}, s-maxage=${cachePeriod}, stale-while-revalidate=${cachePeriod}`,
          },
        ],
      },
      {
        source: "/_next/image(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: `public, max-age=${cachePeriod}, s-maxage=${cachePeriod}, stale-while-revalidate=${cachePeriod}`,
          },
        ],
      },
    ];
  },
};

// module.exports = nextConfig
