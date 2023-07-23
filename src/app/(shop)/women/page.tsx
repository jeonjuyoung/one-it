"use client";

import CategoryTemplate from "../CategoryTemplate";
import CategoryBar from "./categoryBar";
import PriceRange from "./priceRange";
import "../shop.scss";
import ProductList from "./productList";
import { PiSliders } from "react-icons/pi";
// ㅠㅠ. 아이콘 안나와영 import { AiOutlineHome } from "react-icons/pi";

export default function Women() {
  return (
    <div className="wrap">
      <CategoryTemplate category="여성" path="아우터" />
      <div className="page-title">
        <h2>여성</h2>
        <ul className="breadcrumbs">
          <li><a href="">{/* <AiOutlineHome /> */}</a></li>
          <li><a href="">여성</a></li>
          <li><a href="#">아우터</a></li>
        </ul>
      </div>
      <div className="accordions">
        <CategoryBar />
        <PriceRange />
      </div>
      <div className="product_list_wrap">
        <div className="product_list__top">
          <div>전체 : 500</div>
          <div className="filter">
            인기순
            <PiSliders size="20" />
          </div>
        </div>
        <ProductList />
      </div>
    </div>
  );
}
