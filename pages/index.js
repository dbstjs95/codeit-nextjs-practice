import SearchForm from "@/components/SearchForm";
import ProductList from "@/components/ProductList";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import styles from "@/styles/Home.module.css";

// import Link from "next/link";
// 새 페이지로 이동시 해당 페이지 전체를 다운받기 때문에 느린 속도로 보면 마치 새로고침처럼 하얀 화면이 중간에 뜬 다음 해당 화면이 렌더링된다. 이를 최적화 한 것이 Link이다.
// Link를 통해 다른 페이지로 이동하면 필요한 부분만 불러오기 때문에 위와 같은 현상이 나타나지 않는다.
// 외부 링크로 이동할 때도 마찬가지.

export default function Home() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const res = await axios.get(`/products`);
    const nextProducts = res.data.results;
    setProducts(nextProducts);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <SearchForm />
      <ProductList className={styles.productList} products={products} />
    </>
  );
}
