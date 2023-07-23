"use client";

import React from "react";
import { Inter } from "@next/font/google";
import Footer from "@/components/atmos/footer";
import Header from "@/components/atmos/header";


export default function BaseLayout({ children,className }: { children: React.ReactNode,className:string }) {


  return (
    <div className={className}>
      <Header />
      {children}
      <div className="mob__menu_box">
        <ul>
          <li>
            <a href="/best" title="best_page">
              <span></span>
              <p>베스트</p>
            </a>
          </li>
          <li>
            <a href="/women" title="woman_page">
              <span></span>
              <p>여성</p>
            </a>
          </li>
          <li>
            <a href="/man" title="man_page">
              <span></span>
              <p>남성</p>
            </a>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
