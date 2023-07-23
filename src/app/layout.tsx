"use client";
import "../assets/css/globals.scss";
import "../assets/css/media.scss";
import ReactQueryWrapper from "./reactQueryWrap";
import RecoilWrapper from "./recoilWrap";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/components/atmos/theme";
import BaseLayout from "@/components/common/base";
import localFont from "next/font/local";
const myFont = localFont({ src: "../../public/fonts/NanumSquare_acB.ttf" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
     
      <head /> */}
      <body>
        <RecoilWrapper>
          <ReactQueryWrapper>
            {/* mui theme 적용 [ThemeProvider] */}
            
            <ThemeProvider theme={theme} >
              <BaseLayout children={children} className={myFont.className}/>
            </ThemeProvider>
          </ReactQueryWrapper>
        </RecoilWrapper>
      </body>
    </html>
  );
}
