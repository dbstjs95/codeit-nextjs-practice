import { Html, Head, Main, NextScript } from "next/document";

// Document는 쉽게 말해 html 뼈대를 만드는 것이다.
// next.js에서는 서버에서 렌더링 할 때만 이 컴포넌트를 실행하고 클라이언트 사이드에서는 실행하지 않는다.
// 리액트 기능 사용할 수 없다.
export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
