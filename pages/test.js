import Image from "next/image";

// Image 컴포넌트를 쓰면 이미지 크기를 next.js 서버에서 알아서 최적화 해주고, lazy loading도 지원해서 페이지 로딩 속도도 최적화할 수 있다.
// Image 컴포넌트는 크기 지정을 하지 않으면 에러가 뜬다. 하지만 늘 크기를 지정할 수 없기에 유연하게 크기를 지정하는 방법도 있다. --> fill(포지션된 조상 요소에 꽉 차도록) 속성

export default function Test() {
  return (
    <>
      {/* <img src="/women.jpg" alt="테스트 이미지" width={120} height={120} /> */}
      {/* <Image src="/women.jpg" alt="테스트 이미지" width={120} height={120} /> */}
      <div style={{ position: "relative", width: "50%", height: "200px" }}>
        <Image
          fill
          src="/women.jpg"
          alt="테스트 이미지"
          // 이미지 비율을 유지하고 싶다면 object-fit을 사용
          style={{ objectFit: "cover" }}
        />
      </div>
    </>
  );
}
