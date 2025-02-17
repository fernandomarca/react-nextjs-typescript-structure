import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'

import RocketseatLogo from '../assets/rocketseat.svg'

import { Container } from '../styles/pages/Home'

const Home: NextPage = () => (
  <Container>
    <Head>
      <title>Homepage</title>
    </Head>

    <RocketseatLogo />
    <h1>ReactJS Structure</h1>
    <p>A ReactJS + Next.js structure made by Rocketseat.</p>
  </Container>
)

export default Home
