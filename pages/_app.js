import "@/styles/global.css";
// import "../styles/global.css";

// 프로젝트 생성시 alias를 @로 설정했기에(기본값임), @는 최상위 폴더를 가리키게된다.

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
