"use client";

import Image from "next/image";
import Exhibition from "@public/images/specialExhibition.png";
import InfoBanner from "@public/images/InfoBanner.png";

export default function EventInfo() {
  return (
    <div className="wrap">
      <div className="event_info__container">
        <Image src={Exhibition} alt="first banner" />
        <Image src={InfoBanner} alt="first banner" />
      </div>
    </div>
  );
}
