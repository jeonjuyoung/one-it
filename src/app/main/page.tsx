"use client";

import "./main.scss";
import Banner from "./Banner";
import EventInfo from "./EventInfo";
import EventProducts from "./EventProducts";
import RealTimeBest from "./RealTimeBest";
import TimeDeal from "./TimeDeal";
import React, { useState, useEffect } from "react";

export default function Main() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    return () => {
      window.removeEventListener("scroll", handleScroll,true); //clean up
    };
  }, []);

  const handleScroll = () => {
    // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
    if (window.scrollY >= 50) {
      setScroll(true);
    } else {
      // 스크롤이 50px 미만일경우 false를 넣어줌
      setScroll(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({top:0, left:0, behavior:"smooth"})
  }

  useEffect(()=>{
    console.log(scroll)
  },[scroll])

  return (
    <div className="main__container">
      <Banner />
      <RealTimeBest />
      <TimeDeal />
      <EventProducts />
      <EventInfo />
      <a
        id="backTop"
        // href="javascript:void(0)"
        onClick={scrollToTop}
        className={`${scroll ? "show" : ""}`}
      >
        <span></span>
      </a>
    </div>
  );
}
