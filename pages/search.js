// Nextjs snippets: nspage
import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import axios from "@/lib/axios";
import styles from "@/styles/Search.module.css";
import Head from "next/head";

// 프리렌더링은 웹브라우저 로딩 전에 렌더링 하는 것.
// 그 중 정적생성은 빌드하는 시점에 렌더링 하는 것.
// 서버사이드는 웹 브라우저가 리퀘스트를 보낼 때마다 렌더링해서 보내주는 것.
// 쿼리 스트링 값은 유저의 검색어이기 때문에 이 경우에는 서버사이드 렌더링을 한다.

export async function getServerSideProps(context) {
  const q = context.query["q"];

  const res = await axios.get(`/products?q=${q}`);
  const products = res.data.results ?? [];

  return {
    props: { products, q },
  };
}

export default function Search({ products, q }) {
  return (
    <>
      <Head>
        <title>{q} 검색 결과 - Codeitmall</title>
      </Head>
      <SearchForm initialValue={q} />
      <h2 className={styles.title}>
        <span className={styles.keyword}>{q}</span> 검색 결과
      </h2>
      <ProductList className={styles.productlist} products={products} />
    </>
  );
}
