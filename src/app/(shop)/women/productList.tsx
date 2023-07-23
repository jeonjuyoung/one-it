import addComma from "@/hooks/addComma";
import Image, { StaticImageData } from "next/image";
import FirstImage from "@public/images/woman_img/w_img1.png";
import SecondImage from "@public/images/woman_img/w_img2.png";
import ThirdImage from "@public/images/woman_img/w_img3.png";
import FifthImage from "@public/images/woman_img/w_img4.png";
import FourthImage from "@public/images/woman_img/w_img5.png";

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
    <a className="card_box" href="">
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
    </a>
  );
}
export default function ProductList() {
  return (
    <div className="list__container">
      <Box
        src={FirstImage}
        alt="그리니치 여성 더블 코트"
        name="버버리"
        desc="그리니치 여성 더블 코트"
        price="1139050"
        sale="44"
      />
      <Box
        src={SecondImage}
        alt="투 버튼 Tweedjacket"
        name="산드로"
        desc="투 버튼 Tweedjacket"
        price="367420"
        sale="0"
      />
      <Box
        src={ThirdImage}
        alt="후드 리나일론 다운 재킷"
        name="프라다"
        desc="후드 리나일론 다운 재킷"
        price="2397520"
        sale="66"
      />
      <Box
        src={FourthImage}
        alt="여성 하이 파일 눕시 자켓 점퍼"
        name="노스페이스"
        desc="여성 하이 파일 눕시 자켓 점퍼"
        price="667800"
        sale="6"
      />
      <Box
        src={FifthImage}
        alt="그리니치 여성 더블 코트 블랙"
        name="무스너클"
        desc="그리니치 여성 더블 코트 블랙"
        price="822000"
        sale="55"
      />
    </div>
  );
}
