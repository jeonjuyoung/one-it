"use client";

import React, { useState, useEffect, ChangeEvent } from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { useGetTestData } from "@/hooks/api/dataFetch";
// import { LogoIcon, LoginLogo } from "public/icons";
import {
  ButtonField,
  InputField,
  SelectField,
  DataTable,
  TextAreaField,
  FileUpload
} from "@/components/atmos";
import "./itemManage.scss";
import { Typography } from "@mui/material";

const data1 = [
  {
    NO: 1,
    상품명: "test",
    상품번호: "dfhdfh11234",
    카테고리: "여성",
    비고: "커요",
  },
  {
    NO: 2,
    상품명: "test2",
    상품번호: "1123455fdh",
    카테고리: "남성-아우터",
    비고: "적당해요",
  },
  {
    NO: 3,
    상품명: "test3",
    상품번호: "dfgdfg11234",
    카테고리: "여성-신발",
    비고: "적당해요",
  },
];

export default function AdminMain() {
  return (
    <>
      <div className={"wrap"}>
        <span>관리자</span>
        <div className={"admin_main"}>
          <div className="admin_main_left">
            <ul>
              <li>상품관리</li>
              <li>고객관리</li> <li>주문관리</li>
            </ul>
          </div>
          <div className="admin_main_right">
            <ul>
              <li className="admin_main_right_li">
                <label id="item2">상품명</label>
                <InputField label="고객" />{" "}
              </li>
              <li className="admin_main_right_li">
                {/* <label htmlFor="item2">Title 2</label> */}
                <label id="item2">1차분류</label>
                <SelectField /> <label id="item2">2차분류</label>
                <SelectField />
              </li>
              <li className="admin_main_right_li">
                <label id="item2">색상</label>
                <InputField /> <label id="item2">사이즈</label>
                <InputField />{" "}
              </li>
              <li className="admin_main_right_li">
                <label id="item2">재고</label>
                <InputField />
              </li>

              <Typography  component="h1" variant="h5">상품 설명</Typography>            <TextAreaField />
              

              <Typography  component="h1" variant="h5">메인 Image</Typography>
              <div className="image_outline_box">
                <FileUpload/>
              </div>
              <Typography  component="h1" variant="h5">상세 Image</Typography>
              <div className="image_outline_box">
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
