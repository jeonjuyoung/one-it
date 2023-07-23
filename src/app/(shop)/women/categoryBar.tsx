import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import CategoryCote from "@public/images/cote.svg";
import CategorySkirt from "@public/images/skirt.svg";
import {
  PiShirtFolded,
  PiDress,
  PiHoodie,
  PiPants,
  PiBaseballCap,
} from "react-icons/pi";
//import { GiPirateCoat, GiSkirt } from "react-icons/gi";
import { MdExpandLess } from "react-icons/md";


export default function CategoryBar() {
  return (
    <div className="category_left_bar">
      <Accordion expanded={true}>
        <AccordionSummary
          expandIcon={<MdExpandLess size="25" color="#000" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="title">카테고리</div>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="category__section">
            <li className="category__list active">
              <a href="">
                {/* <GiPirateCoat color="#4376E3" /> */}
                <CategoryCote />
                <p>아우터</p>
              </a>
            </li>
            <li className="category__list">
              <a href="">
                <PiHoodie />
                <p>티셔츠/맨투맨</p>
              </a>
            </li>
            <li className="category__list">
              <a href="">
                <PiShirtFolded />
                <p>블라우스/셔츠</p>
              </a>
            </li>
            <li className="category__list">
              <a href="">
                <PiDress />
                <p>원피스</p>
              </a>
            </li>
            <li className="category__list">
              <a href="">
                {/* <GiSkirt /> */}
                <CategorySkirt />
                <p>스커트</p>
              </a>
            </li>
            <li className="category__list">
              <a href="">
                <PiPants />
                <p>바지</p>
              </a>
            </li>
            <li className="category__list">
              <a href="">
                <PiBaseballCap />
                <p>기타의류</p>
              </a>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
