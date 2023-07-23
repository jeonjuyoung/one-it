"use client";

import "../shop.scss";
import TopTemplate from "@/components/atmos/TopTemplate";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import addComma from "@/hooks/addComma";
import FirstImage from "@public/images/best_burberry.png";
import { PiShirtFolded, PiDress, PiTrophy } from "react-icons/pi";

// 테두리 폭 77*102
// 원 58*58
// 아이콘 글 13

interface Cate {
  icon: React.ReactNode;
  cate: string;
  onClick?: () => void;
}

interface Button {
  title: string;
}

interface Products {
  src: string | StaticImageData;
  alt: string;
  name: string;
  desc: string;
  price: string;
  sale: string;
}

const Category = ({ icon, cate }: Cate) => {
  return (
    <div className="best__cate__box">
      <div className="wrapper">
        <div className="icon">{icon}</div>
      </div>
      <div className="cate">{cate}</div>
    </div>
  );
};

const CateButton = ({ title }: Button) => {
  return (
    <div className="cate__button">
      <div>{title}</div>
    </div>
  );
};

const ProductList = ({ src, alt, name, desc, price, sale }: Products) => {
  return (
    <div className="card_box">
      <div className="product_image">
        <Image src={src} alt={alt} />
      </div>
      <div className="product_info">
        <div className="section">
          <div className="name">{name}</div>
          <div className="desc">{desc}</div>
          <div className="price">
            {sale !== "0" && <div className="sale">{sale}%</div>}
            {addComma(+price)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Best() {
  const [isSelect, setIsSelect] = useState(false);

  return (
    <div className="best__container">
      <TopTemplate title="베스트" red={true} />
      <div className="best__category__icons">
        <Category icon={<PiTrophy size="40" />} cate="전체" />
        <Category icon={<PiDress size="40" />} cate="여성" />
        <Category icon={<PiShirtFolded size="40" />} cate="남성" />
      </div>
      <div className="best__category__container">
        <div className="section">
          <div className="title">카테고리</div>
          <div className="divider" />
          <div className="category">
            {/* checkbox 부분 */}
            <CateButton title="아우터" />
            <CateButton title="티셔츠/맨투맨" />
            <CateButton title="블라우스/셔츠" />
            <CateButton title="원피스" />
            <CateButton title="스커트" />
            <CateButton title="바지" />
            <CateButton title="기타의류" />
          </div>
        </div>
      </div>
      <div className="best__list__container">
        <div className="line">
          <ProductList
            src={FirstImage}
            alt="버버리"
            name="버버리"
            desc="그리니치 여성 더블 코트"
            price="1139050"
            sale="44"
          />
          <ProductList
            src={FirstImage}
            alt="버버리"
            name="버버리"
            desc="그리니치 여성 더블 코트"
            price="1139050"
            sale="44"
          />
          <ProductList
            src={FirstImage}
            alt="버버리"
            name="버버리"
            desc="그리니치 여성 더블 코트"
            price="1139050"
            sale="44"
          />
          <ProductList
            src={FirstImage}
            alt="버버리"
            name="버버리"
            desc="그리니치 여성 더블 코트"
            price="1139050"
            sale="44"
          />
          <ProductList
            src={FirstImage}
            alt="버버리"
            name="버버리"
            desc="그리니치 여성 더블 코트"
            price="1139050"
            sale="44"
          />
        </div>
        <div className="line">
          <ProductList
            src={FirstImage}
            alt="버버리"
            name="버버리"
            desc="그리니치 여성 더블 코트"
            price="1139050"
            sale="44"
          />
          <ProductList
            src={FirstImage}
            alt="버버리"
            name="버버리"
            desc="그리니치 여성 더블 코트"
            price="1139050"
            sale="44"
          />
          <ProductList
            src={FirstImage}
            alt="버버리"
            name="버버리"
            desc="그리니치 여성 더블 코트"
            price="1139050"
            sale="44"
          />
          <ProductList
            src={FirstImage}
            alt="버버리"
            name="버버리"
            desc="그리니치 여성 더블 코트"
            price="1139050"
            sale="44"
          />
          <ProductList
            src={FirstImage}
            alt="버버리"
            name="버버리"
            desc="그리니치 여성 더블 코트"
            price="1139050"
            sale="44"
          />
        </div>
      </div>
    </div>
  );
}
