"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import testImg from "@public/itemDetailImg/v1_110.png";
import testImg2 from "@public/itemDetailImg/v1_111.png";
import { BasicTable, StarRating, ButtonField } from "@/components/atmos";
import "./myInfo.scss";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/system";
const ItemImgDummy = [
  {
    url: testImg,
    data: "test"
  },
  {
    url: testImg2,
    data: "cccc"
  },
  {
    url: testImg,
    data: "1234"

  },
  {
    url: testImg2,
    data: "kicker"

  },
  {
    url: testImg2,
    data: "kicker"

  },
];



export default function MyInfoMain() {
  return (
    <>
      <div className={"wrap"}>
        <div className={"myInfo_main"}>
          <div className={"myInfo_main_top"}>
            <div className={"myInfo_profile_left"}>
              <div className="myInfo_avatar">
                <Avatar sx={{ width: 100, height: 100 }} />
              </div>
              <h4>userName</h4>
              <p>poo@naver.com</p>
              <ButtonField />
            </div>
            <div className={"myInfo_profile_right"}>
              <div className="myInfo_profile_right_top">
                <span>로그인정보</span>
                <span>계정</span>
                <span>userid</span>
                <span>비번 변경</span>
              </div>
              <div className="myInfo_profile_right_border" />
              <div className="myInfo_profile_right_bottom">
                <div>
                  <span>간편 정보</span>
                </div>
                <div>
                  <table>
                    <tr>
                      <th>이름</th>
                      <th>기본 배송지 설정</th>
                      <th>전화 번호</th>
                      <th>주결제수단</th>
                    </tr>

                    <tr>
                      <td>사용자</td>
                      <td>서울시 동작구 사당동</td>
                      <td>010-2512-1231</td>
                      <td>신용카드</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="myInfo_orderList">
            <h4>주문내역</h4>
            <div className="myInfo_orderList_box">
              <span>
                {" "}
                0 <br /> 결제/입금
              </span>{" "}
              <span>
                {" "}
                1 <br /> 배송중
              </span>{" "}
              <span>
                {" "}
                0 <br /> 배송완료
              </span>
              <span>
                {" "}
                0 <br /> 구매확정
              </span>
            </div>
          </div>
          {/* <div className="myInfo_recentview">
            <h5>최근 조회 상품</h5>
            <div className="myInfo_recent_view_list">
              {
                ItemImgDummy.map((element)=>
                  <Box
                    sx={{
                      width: 173,
                      height: 196,
                      backgroundColor: "primary.dark",
                      "&:hover": {
                        backgroundColor: "primary.main",
                        opacity: [0.9, 0.8, 0.7],
                      },
                    }}
                  />
                )
              }
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
