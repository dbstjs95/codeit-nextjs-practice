// next.js 서버를 설정하는 파일로, 해당 파일을 수정하면 next.js 서버를 껐다 켜야함.(??? 껐다 키지않아도 잘 적용되는데...?)
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/products/:id",
        destination: "/items/:id",
        // permanent는 웹브라우저에게 주소가 바뀌었음을 저장하게 하는 코드
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
