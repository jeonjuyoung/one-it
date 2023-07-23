"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import testImg from "@public/itemDetailImg/v1_110.png";
import testImg2 from "@public/itemDetailImg/v1_111.png";
import { Navigation, Pagination } from "swiper";
import { BasicTable ,StarRating,SelectField} from "@/components/atmos";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./itemDetail.scss";
import ItemReview from "./itemReview";
import DataTable from "@/components/atmos/Table/dataTable";

const data1 = [
  {
    keyVal: 1,
    spec: "170cm/69kg",
    usualSize: "S",
    buyOption: "L",
    review: "커요",
  },
  {
    keyVal: 2,
    spec: "180cm/69kg",
    usualSize: "L",
    buyOption: "XL",
    review: "적당해요",
  },
  {
    keyVal: 3,
    spec: "180cm/69kg",
    usualSize: "L",
    buyOption: "XL",
    review: "적당해요",
  },
];

const ItemImgDummy = [
  {
    url: testImg,
  },
  {
    url: testImg2,
  },
];

export function ItemDetailInfo() {
  return (
    <>
      <div className="ItemDetailInfo">
        {ItemImgDummy.map((element: any, index: number) => {
          return (
            <div key={index}>
              <Image
                src={element.url}
                alt={index.toString()}
                width={500}
                height={400}
              />
            </div>
          );
        })} 
      </div>
    </>
  );
}

export function ItemDetailTop() {
  return (
    <>
      <div className={"itemSizeinfo_layout"}>
        <div className={"itemSizeinfo_img"}>
          <Swiper
            pagination={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            className={"mySwiper"}
          >
            {ItemImgDummy.map((element: any, index: number) => {
              return (
                <SwiperSlide key={index} className={"swiper_slide"}>
                  <Image
                    src={element.url}
                    alt={index.toString()}
                    width={500}
                    height={400}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className={"itemSizeinfo_option"}>
            <div className={"itemSizeinfo_option_title"}>
              <h5>버버리</h5>
              <p>그리니치 여성 더블 코트</p>
              <div className="star-wrap">
                <span><StarRating value={3} readOnly={true} /></span>
                <p>(3)</p>
              </div>
            </div>
            <div className={"itemSizeinfo_option_price"}>
              <span>1,139,050</span>
              <h3>1,139,050</h3>
              <h4 className="">44%</h4>
            </div>
            <ul>
              <li><span>배송비</span><p>전상품 무료배송</p></li>
              <li><span>배송 예정일</span><p>4~5일 이내</p></li>
              <li>
                <div className={`itemSizeinfo_option_color select`}>
                  <span style={{backgroundColor:"#000;"}}></span>
                  <p>Black</p>
                </div>
                <div className={"itemSizeinfo_option_color"}>
                  <span style={{backgroundColor:"rgba(199, 131, 77, 0.5);"}}></span>
                  <p>Camel</p>
                </div>
              </li>
              <li><div><SelectField /></div></li>
            </ul>
        </div>
      </div>
    </>
  );
}

export default function ItemDetailMain() {
  return (
    <>
      <div className={"wrap"}>
        <div className={"itemDetail_category"}>
        <div className={"itemDetail_category_title"}>
          <span>여성</span>
          <span> {`여성 > 아우터`}</span>
        </div>
        <hr />
        {/* 슬라이드 사진 및 옵션정보 */}
        <ItemDetailTop />
        </div>
        {/* 상세정보 */}
        <ItemDetailInfo />
        {/* 사이즈정보 */}
        <div className={"ItemSizeInfo"}>
          <DataTable data={data1} />
        </div>
        <ItemReview/>
      </div>
    </>
  );
}
 