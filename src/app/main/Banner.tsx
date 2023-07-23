"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import FirstBanner from "@public/images/main_img1.png";
import SecondBanner from "@public/images/main_img2.png";
import ThirdBanner from "@public/images/main_img3.png";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { GoDot, GoDotFill } from "react-icons/go";

export default function Banner() {
  const [bannerList, setBannerList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [slideCnt, setSlideCnt] = useState(0);
  const [slideLength, setSlideLength] = useState(0);

  const slideRef = useRef<ReturnType<typeof setInterval> | any>(null);

  /* 배너 리스트 배열 */
  const itemList = [
    {
      src: FirstBanner,
      name: "first banner",
    },
    {
      src: SecondBanner,
      name: "second banner",
    },
    {
      src: ThirdBanner,
      name: "third banner",
    },
  ];

  const prev = () => {
    const cnt = slideCnt <= 0 ? slideLength - 1 : slideCnt - 1;
    clearSlide();
    startSlide(cnt);
    setSlideCnt(cnt);
  };
  const next = () => {
    const cnt = slideCnt >= slideLength - 1 ? 0 : slideCnt + 1;
    clearSlide();
    startSlide(cnt);
    setSlideCnt(cnt);
  };

  const onClickSlideDot = (e: any) => {
    const parent = e.currentTarget.parentElement;
    const index = Array.from(parent.children).indexOf(e.currentTarget);
    setSlideCnt(index);
  };

  const startSlide = (initialCnt = 0) => {
    let cnt = initialCnt;
    slideRef.current = setInterval(() => {
      if (cnt >= slideLength - 1) {
        cnt = 0;
      } else {
        cnt++;
      }
      setSlideCnt(cnt);
    }, 6000);
  };

  const clearSlide = () => {
    clearInterval(slideRef.current);
  };

  const onClickGoLink = (url: string) => {
    const newTab = window.open(url, "_blank", "noopener,noreferrer");
    if (newTab) newTab.opener = null;
  };

  useEffect(() => {
    clearSlide();
    startSlide();
  }, [slideLength]);

  /* Banner Images */
  useEffect(() => {
    // const getBanner = async () => {
    //   setLoading(true);
    //   const result = await fetchAbsolute(
    //     "get",
    //     `/admin/commonBanner/getBannerList`
    //   );
    //   const replaceList = result.data
    //     .filter((use) => use.bannerUseYn === "Y")
    //     .map((v, index) => {
    //       return {
    //         ...v,
    //         key: index,
    //         link: v.link.replace("200x200", "0x0"),
    //       };
    //     });
    //   setBannerList(
    //     [...replaceList].sort((a, b) => {
    //       return a.bannerOrder - b.bannerOrder;
    //     })
    //   );
    //   setSlideLength(replaceList.length);
    // };
    // getBanner();

    setSlideLength(3);
    return () => {
      slideRef.current = false;
      setLoading(false);
    };
  }, []);

  return (
    <div className="banner__container">
      <button id="prev" onClick={prev}>
        <MdArrowBackIos size="30" />
      </button>
      <button id="next" onClick={next}>
        <MdArrowForwardIos size="30" />
      </button>
      <div className="slide__part">
        {Array.from({ length: slideLength }).map((_, index) =>
          index === slideCnt ? (
            <GoDotFill
              size="30"
              onClick={onClickSlideDot}
              key={index}
              color="#fff"
            />
          ) : (
            <GoDot
              size="30"
              onClick={onClickSlideDot}
              key={index}
              color="#fff"
              opacity="50"
            />
          )
        )}
      </div>
      <div
        id="imageOp"
        className="image__container"
        style={{
          marginLeft: slideCnt * -100 + "%",
          width: `calc(100% * ${slideLength} )`,
        }}
      >
        {itemList.map((item, index) => {
          return (
            <div className="image__view" key={index}>
              <div>
                <h2>title 넣어주세요 🥺</h2>
                <p>소제목</p>
              </div>
              <div>
                <Image src={item.src} alt={item.name} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
