import SearchForm from "@/components/SearchForm";
import ProductList from "@/components/ProductList";
import axios from "@/lib/axios";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

// import Link from "next/link";
// 새 페이지로 이동시 해당 페이지 전체를 다운받기 때문에 느린 속도로 보면 마치 새로고침처럼 하얀 화면이 중간에 뜬 다음 해당 화면이 렌더링된다. 이를 최적화 한 것이 Link이다.
// Link를 통해 다른 페이지로 이동하면 필요한 부분만 불러오기 때문에 위와 같은 현상이 나타나지 않는다.
// 외부 링크로 이동할 때도 마찬가지.

// 프리렌더링시 비동기 결과값은 상태에 반영이 안 되니 미리 데이터를 받아와 프리렌더링시에도 반영되도록 하는 함수로, export와 getStaticProps(예약어)는 필수이다.
// 정적생성을 할 때 next.js가 getStaticProps를 실행함.

// 빌드하고 .next/server/pages/index.html을 보면(ctrl+shift+P로 커맨드 팔레트를 열고 "Format Document"를 입력하면 문서 포맷팅된다.) 상품 목록 부분에 데이터가 들어가 있는 것을 확인할 수 있다.
// 자주 바뀌는 최신 데이터의 경우 정적생성은 적절하지 않다.
export async function getStaticProps() {
  // 이 함수에서는 리액트 훅은 사용할 수 없음.
  const res = await axios.get(`/products`);
  const products = res.data.results;

  return {
    props: { products },
  };
}

export default function Home({ products }) {
  return (
    <>
      {/* 사이트 제목 */}
      <Head>
        <title>Codeitmall</title>
      </Head>
      <SearchForm />
      <ProductList className={styles.productList} products={products} />
    </>
  );
}
