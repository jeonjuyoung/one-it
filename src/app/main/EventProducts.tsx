"use client";

import Image, { StaticImageData } from "next/image";
import LeftCard from "@public/images/mainCard.png";
import firstImage from "@public/images/sec3_img1.png";
import SecondImage from "@public/images/sec3_img2.png";
import ThirdImage from "@public/images/sec3_img3.png";
import FourthImage from "@public/images/sec3_img4.png";
import addComma from "@/hooks/addComma";

interface Products {
  src: string | StaticImageData;
  alt: string;
  name: string;
  desc: string;
  price: string;
  sale: string;
}
function Box({ src, alt, name, desc, price, sale }: Products) {
  return (
    <div className="card_box">
      <div className="product_image">
        <Image src={src} alt={alt} />
      </div>
      <div className="product_info">
        <div className="section">
          <div className="name">{name}</div>
          <div className="desc">{desc}</div>
          <div className="price">{addComma(+price)}</div>
          <div className="sale">{sale}%</div>
        </div>
      </div>
    </div>
  );
}
function LeftProduct() {
  return (
    <div className="sec3__left">
      <Image src={LeftCard} alt="left advertisement" />
      <div className="text">
        <p>GLOBAL ON SALE</p>
        <h3>매주 다양한 상품이 업데이트 !</h3>
      </div>
    </div>
  );
}
function RightProduct() {
  return (
    <div className="left__section">
      <div className="box__section">
        <Box
          src={firstImage}
          alt="펜디"
          name="펜디"
          desc="선샤인 라지 쇼퍼 도트백"
          price="2089320"
          sale="57"
        />
        <Box
          src={SecondImage}
          alt="마틸다엔와이"
          name="마틸다엔와이"
          desc="키즈 미야오양면 털코트"
          price="85405"
          sale="50"
        />
      </div>
      <div className="box__section">
        <Box
          src={ThirdImage}
          alt="구찌"
          name="구찌"
          desc="블라인드 포 러브 반지"
          price="399000"
          sale="28"
        />
        <Box
          src={FourthImage}
          alt="아르마니"
          name="아르마니"
          desc="엠포리오 로고 프린팅 티셔츠"
          price="106530"
          sale="30"
        />
      </div>
    </div>
  );
}
export default function EventProducts() {
  return (
    <div className="wrap">
      <div className="event_product__container">
        <LeftProduct />
        <RightProduct />
      </div>
    </div>
  );
}
