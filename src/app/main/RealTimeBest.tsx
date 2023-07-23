"use client";

import { TrophyIcon } from "@public/icons";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import FirstImage from "@public/images/img1.png";
import SecondImage from "@public/images/img2.png";
import ThirdImage from "@public/images/img3.png";
import FourthImage from "@public/images/img4.png";
import FifthImage from "@public/images/img5.png";
import addComma from "@/hooks/addComma";
import { AiOutlineArrowRight } from "react-icons/ai";

interface Products {
  src: string | StaticImageData;
  alt: string;
  name: string;
  desc: string;
  price: string;
  sale: string;
  ranking: string;
}

function Box({ src, alt, name, desc, price, sale, ranking }: Products) {
  return (
    <div className="card_box">
      <div className="product_image">
        <div className="ranking">{ranking}</div>
        <Image src={src} alt={alt} />
      </div>
      <div className="product_info">
        <div className="section">
          <div className="name">{name}</div>
          <div className="desc">{desc}</div>
          <div className="price">
            <div className="sale">{sale}%</div>
            {addComma(+price)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RealTimeBest() {
  return (
    <div className="wrap">
      <div className="real_time_best__container">
        <div className="title">
          <TrophyIcon />
          <div className="text">실시간 베스트</div>
        </div>
        <div className="short_cut">
          <Link href="#">
            <p>실시간 베스트 바로가기</p>
            <AiOutlineArrowRight size="13" />
          </Link>
        </div>
        <div className="list">
          <Box
            src={FirstImage}
            alt="JILLSTUART"
            name="JILLSTUART"
            desc="블랙 매그넘 구스 오버핏 후드 MA-1"
            price="676800"
            sale="28"
            ranking="1"
          />
          <Box
            src={SecondImage}
            alt="발렌티노"
            name="발렌티노"
            desc="퀼티드 미디움 레더 체인 숄더백 블랙"
            price="190680"
            sale="29"
            ranking="2"
          />
          <Box
            src={ThirdImage}
            alt="에어워크"
            name="에어워크"
            desc="커프 진 블랙 64593303"
            price="37930"
            sale="65"
            ranking="3"
          />
          <Box
            src={FourthImage}
            alt="Calvin Klein"
            name="Calvin Klein"
            desc="그레이 릴렉스 핏 기모 스웨트 셔츠"
            price="83300"
            sale="16"
            ranking="4"
          />
          <Box
            src={FifthImage}
            alt="NEW BALANCE"
            name="NEW BALANCE"
            desc="뉴발란스 574 레거시 그레이"
            price="199000"
            sale="26"
            ranking="5"
          />
        </div>
      </div>
    </div>
  );
}
