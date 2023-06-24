import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import styles from "@/styles/Product.module.css";
import SizeReviewList from "@/components/SizeReviewList";
import StarRating from "@/components/StarRating";
import Image from "next/image";
import Spinner from "@/components/Spinner";

// sizeReviews는 사용자 입력에 따라 달라지므로 정적생성이 맞지않다. 그리고 next.js에서 정적생성과 서버사이드를 동시에 할 수 없다. 따라서 기존에 했던 getStaticPaths와 getStaticProps는 주석처리한다.
// export async function getStaticPaths() {
//   const res = await axios.get("/products/");
//   const products = res.data.results;
//   const paths = products.map((product) => ({
//     params: { id: String(product.id) },
//   }));

//   return {
//     paths,
//     fallback: true,
//   };
// }

// export async function getStaticProps(context) {
//   const productId = context.params["id"];
//   let product;
//   try {
//     const res = await axios.get(`/products/${productId}`);
//     product = res.data;
//   } catch {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { product },
//   };
// }

export async function getServerSideProps(context) {
  const productId = context.params["id"];
  let product, sizeReviews;
  try {
    const promise1 = axios.get(`/products/${productId}`);
    const promise2 = axios.get(`/size_reviews?product_id=${productId}`);

    const res = await Promise.all([promise1, promise2]);

    product = res[0].data ?? [];
    sizeReviews = res[1].data.results ?? [];
  } catch {
    return {
      notFound: true,
    };
  }

  return {
    props: { product, sizeReviews },
  };
}

export default function Product({ product, sizeReviews }) {
  if (!product)
    return (
      <div className={styles.loading}>
        <Spinner />
      </div>
    );

  return (
    <>
      <h1 className={styles.name}>
        {product.name}
        <span className={styles.englishName}>{product.englishName}</span>
      </h1>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image fill src={product.imgUrl} alt={product.name} />
        </div>
        <div>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>제품 정보</h2>
            <div className={styles.info}>
              <table className={styles.infoTable}>
                <tbody>
                  <tr>
                    <th>브랜드 / 품번</th>
                    <td>
                      {product.brand} / {product.productCode}
                    </td>
                  </tr>
                  <tr>
                    <th>제품명</th>
                    <td>{product.name}</td>
                  </tr>
                  <tr>
                    <th>가격</th>
                    <td>
                      <span className={styles.salePrice}>
                        {product.price.toLocaleString()}원
                      </span>{" "}
                      {product.salePrice.toLocaleString()}원
                    </td>
                  </tr>
                  <tr>
                    <th>포인트 적립</th>
                    <td>{product.point.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <th>구매 후기</th>
                    <td className={styles.starRating}>
                      <StarRating value={product.starRating} />{" "}
                      {product.starRatingCount.toLocaleString()}
                    </td>
                  </tr>
                  <tr>
                    <th>좋아요</th>
                    <td className={styles.like}>
                      ♥{product.likeCount.toLocaleString()}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>사이즈 추천</h2>
            <SizeReviewList sizeReviews={sizeReviews ?? []} />
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>사이즈 추천하기</h2>
          </section>
        </div>
      </div>
    </>
  );
}
