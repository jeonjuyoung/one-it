import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Image from "next/image";
import LogoImage from "../../../public/images/logo.png";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material";

function Copyright() {
  // return (
  //   <Typography variant="body2" color="text.secondary">
  //     {'Copyright © '}
  //     <Link color="inherit" href="https://mui.com/">
  //       Your Website
  //     </Link>{' '}
  //     {new Date().getFullYear()}
  //     {'.'}
  //   </Typography>
  // );
}

export default function Footer() {
  return (
    <Box 
      className="footer_wrap"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 2,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm" className="footer__container">
          <Image src={LogoImage} alt="bottom logo" />
          <div className="teammate">
          ☺️ 김승희&nbsp;🤝&nbsp;김유진&nbsp;🤝&nbsp;윤아연&nbsp;🤝&nbsp;전주영 ☺️
          </div>
          {/* <Copyright /> */}
        </Container>
      </Box>
    </Box>
  );
}
