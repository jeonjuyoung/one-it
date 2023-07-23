"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import * as React from "react";
import InputSearch from "./InputSearch";
import LogoImage from "../../../public/images/logo.png";
import Image from "next/image";
import { CartIcon, UserIcon } from "public/icons";

/**
 * Header 부분
 *
 */

const menuData = [
  { id: "menu02", name: "베스트", path: "/best" },
  { id: "menu03", name: "여성", path: "/women" },
  { id: "menu04", name: "남성", path: "/men" },
  { id: "menu05", name: "관리자", path: "/admin" },
  { id: "menu06", name: "QnA", path: "/qna/list" },
];

export default function Header() {
  const path = usePathname();

  return (
    <>
      <nav className="header_part">
        <ul className="header__container">
          <div>
            <Link href="/">
              <Image src={LogoImage} alt="logo" />
            </Link>
          </div>
          <div className="top_category_menu">
            {menuData.map((menu) => {
              return (
                <li key={menu.id} className="menu_list">
                  <Link
                    href={menu.path}
                  >
                    {menu.name}
                  </Link>
                </li>
              );
            })}
          </div>
          <div className="right_menu">
            <InputSearch />
            <div className="header_icon_wrap">
              <Link href="/member/cart">
                <CartIcon />
              </Link>
              <Link href="/loginpage">
                <UserIcon />
              </Link>
            </div>
          </div>
        </ul>
        <div className="mob_seachbox">
          <InputSearch />
        </div>
      </nav>
    </>
  );
}
