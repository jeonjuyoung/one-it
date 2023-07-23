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
} from "@/components/atmos";
import "./admin.scss";
import Link from "next/link";
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
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
export function ItemManage() {
  return (
    <>
      <div>
        <ul className="wrapper">
          <li className="form-row">
            <label>Name</label>
            <InputField type="text" id="name" />
          </li>
          <li className="form-row">
            <label>Town you were born in</label>
            <InputField type="text" id="townborn" />
          </li>
          <li className="form-row">
            <label>Email Address</label>
            <InputField type="email" id="email" />
          </li>
          <li className="form-row">
            <button type="submit">Submit</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default function AdminMain() {
  return (
    <>
      <div className={"wrap"}>
        <span>관리자</span>
        <div className={"admin_main"}>
          <div className="admin_main_left">
            <ul>
              <li><Inventory2OutlinedIcon className="admin_main_left_icon"/>상품관리</li>
              <li><PeopleAltOutlinedIcon className="admin_main_left_icon"/>고객관리</li> <li><LocalShippingOutlinedIcon className="admin_main_left_icon"/>주문관리</li>
            </ul>
          </div>
          <div className="admin_main_right">
            <div className="admin_right_button">
              상품관리 목록
              <Link href="/admin/itemManage">
                {" "}
                <ButtonField btnName="상품등록" />
              </Link>
              <ButtonField btnName="선택삭제" />
              <ButtonField btnName="상품편집" />
            </div>

            <DataTable data={data1} />
          </div>
        </div>
      </div>
    </>
  );
}
