"use client";
import { StarRating } from "@/components/atmos";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import testImg from "@public/itemDetailImg/v1_110.png";
import testImg2 from "@public/itemDetailImg/v1_111.png";

const ItemImgDummy = [
  {
    url: testImg,
    colorReview: "화면과 같아요",
    thickness: "두꺼워요",
    size: "잘 맞아요",
    option: "UK 8",
  },
  {
    url: testImg2,
    colorReview: "화면과 같아요",
    thickness: "두꺼워요",
    size: "잘 맞아요",
    option: "UK 8",
  },
];
export default function ItemReview() {
  return (
    <>
      <div className={"itemDetail_review"}>
        <hr />
        <span className="itemDetail_review_title">상품 리뷰</span>

        <div className="star-wrap itemDetail_review_star">
          <div className="itemDetail_review_star_border" />
          <StarRating value={4} readOnly={true} />
        </div>
        {ItemImgDummy.map((element, index) => (
          <React.Fragment key={index}>

            <div className="itemSizeinfo_layout item_review_height">
              <div className="itemSizeinfo_img">
                <Image
                  src={element.url}
                  alt={index.toString()}
                  width={200}
                  height={200}
                />
              </div>
              <div className="itemDetail_review_info">
                <ul>
                  <li>
                    <span>
                      <em>색상 </em>
                      <em>{element.colorReview}</em>
                    </span>
                    <span>
                      <em>두께감</em>
                      <em>{element.thickness}</em>
                    </span>
                  </li>
                  <li>
                    <span>
                      <em>사이즈</em>
                      <em>{element.size}</em>
                    </span>
                    <span>
                      <em>구매옵션</em>
                      <em>{element.size}</em>
                    </span>
                  </li>
                </ul>
                <div>
                  <div>
                    tetetettetetettetetettetetettetetettetetettetetettetetettetetettetetettetetettetetettetetettetettetetettetetettetetettetetet
                  </div>
                  <div className="itemDetail_review_info_bottom">
                    사용자 | 2022-01-10
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
