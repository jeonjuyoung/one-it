"use client";

import Image from "next/image";
import TimeDealImage1 from "@public/images/card1.png";
import TimeDealImage2 from "@public/images/card2.png";
import TimeDealImage3 from "@public/images/card3.png";
import { BiTimeFive } from "react-icons/bi";

export default function TimeDeal() {
  return (
    <div className="time_deal__container">
      <div className="top__section">
        <div className="text">
          <BiTimeFive size="57" color="#60696e" />
          <div className="head">타임딜</div>
          <div className="sale">최대 50% 이상 할인</div>
        </div>
        <div>
          <div className="time">12:10:00</div>
        </div>
      </div>
      <div className="bottom__section">
        <div className="first">
          <div className="time_deal__info">
            <p>브랜드 타임딜 바로가기</p>
          </div>
          <Image src={TimeDealImage1} alt="Time deal image1" />
        </div>
        <div className="second">
          <div className="time_deal__info">
            <p>브랜드 타임딜 바로가기</p>
          </div>
          <Image src={TimeDealImage2} alt="Time deal image2" />
        </div>
        <div className="third">
          <div className="time_deal__info">
            <p>브랜드 타임딜 바로가기</p>
          </div>
          <Image src={TimeDealImage3} alt="Time deal image3" />
        </div>
      </div>
    </div>
  );
}
