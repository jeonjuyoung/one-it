import Main from "@/app/main/page";
import type { NextApiResponse, NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
// import Error from 'next/error'
import Error from './_error'

interface Props {
  error: ErrorProps
  stars: number
}

interface ErrorProps {
  title: string
  statusCode: number
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/response')
  const error = res.ok
    ? false
    : { title: '에러가 발생했습니다', statusCode: res.status }
  const json = await res.json()

  return {
    props: {
      error,
      stars: json.stars || 0,
    },
  }
}

const Home = ({ error, stars }: Props) => {
  return (
    <>
      <Main />
    </>
  );
}

export default Home;