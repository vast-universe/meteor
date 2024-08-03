/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    reactCompiler: true, //react 19实验性支持
    staleTimes: { //路由缓存时间，针对APP Router
      dynamic: 30,
      static: 180,
    },
  },
};

export default nextConfig;
