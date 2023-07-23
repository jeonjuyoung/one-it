"use client";

import React, { useState, useEffect, ChangeEvent } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useGetTestData } from "@/hooks/api/dataFetch";
import { LogoIcon, LoginLogo } from "public/icons";
import { ButtonField, InputField, SelectField } from "@/components/atmos";
// import {CheckboxField} from '../../components/atmos/CheckboxField/checkboxField'

const options = [
  {
    id: 1,
    value: "Hello",
  },
  {
    id: 2,
    value: "How",
  },
  {
    id: 3,
    value: "are",
  },
  {
    id: 4,
    value: "you",
  },
];

const theme = createTheme();

export default function SignIn() {
  const [iunputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [init, setInit] = useState(false);
  const [checked, setChecked] = useState(false);
  const [radio, setRadio] = useState(false);
  const { data } = useGetTestData(init);
  const [selection, setSelection] = React.useState();

  // const updateSelection = (event, value) => {
  //   setSelection(value);
  // };
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   // const data = new FormData(event.currentTarget);
  //   // console.log({
  //   //   email: data.get("email"),
  //   //   password: data.get("password"),
  //   // });
  // };

  const onChangeLogin = (e: any) => {
    const { name, value } = e.target;

    const Inputs = {
      ...iunputValue,
      [name]: value,
    };
    setInputValue(Inputs);
  };

  useEffect(() => {
    setInit(true);
  }, []);

  const onChangeCheck = (e:React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LoginLogo />
          <Typography component="h1" variant="h5">
            <LogoIcon />
          </Typography>
          <Typography component="h1" variant="h5">
            당신이 원하는 한가지 쇼핑몰
          </Typography>
          <Box
            component="form"
            // onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={onChangeLogin}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={onChangeLogin}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              로그인
            </Button> */}
            {/* <RadioButtonField options={options} onChange={updateSelection} value={selection}/> */}
            {/* <CheckboxField onChange={setChecked} checked={checked}/> */}
            <InputField />
            <SelectField options={options} />
            <ButtonField />
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  비밀번호찾기
                </Link>
              </Grid>
              <Grid item>
                <Link href="/member/register" variant="body2">
                  회원가입
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
