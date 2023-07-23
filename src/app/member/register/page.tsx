"use client";

import React, { useState } from "react";
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
import { useRegisterMember } from "@/hooks/api/dataFetch";
import { useMutation } from "@tanstack/react-query";

const theme = createTheme();

export default function SignUp() {
  const [agreeCheck, setAgreeCheck] = useState(false);
  const [registerInput,setRegisterInput] = useState({
    userEmail:'',
    userName:'',
    userPwd:'',
    userRole:'1',
    // userrole 0 관리자 1이면 유저
    passwordConfirm:'',
    phoneNum:'',
  })
  const handleError = (e:any) =>{
    console.log(e)
  }

  const response = useRegisterMember({handleError});


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if(data.get('password') !== data.get('passwordConfirm')){
      return alert("비밀번호가 일치하지 않습니다")
    }
    response.mutate(data);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    //   phoneNum: data.get('phoneNum'),
    // });
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
          <Typography component="h1" variant="h5">
            회원가입
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="전화번호"
                  name="phoneNum"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="userPwd"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="passwordConfirm"
                  label="Password 확인"
                  type="password"
                  id="passwordConfirm"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value={agreeCheck}
                      color="primary"
                      onChange={(e) => {
                        setAgreeCheck(!e);
                      }}
                    />
                  }
                  label="개인정보수집 동의"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              회원가입
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
