import Container from "@/components/Container";
import Header from "@/components/Header";
import "@/styles/global.css";
// import "../styles/global.css";

// 프로젝트 생성시 alias를 @로 설정했기에(기본값임), @는 최상위 폴더를 가리키게된다.

// 아래 App의 props인 Component는 쉽게 말해 next.js page라고 볼 수 있다.
export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}
