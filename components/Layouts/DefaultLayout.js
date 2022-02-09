import dynamic from 'next/dynamic'
import Head from 'next/head'
import Script from 'next/script'
import React, { useEffect } from 'react'
import MainFooter from '../Footer/MainFooter'
import MainHeader from '../Header/MainHeader'
import Loader from '../Loader/Loader'

const DefaultLayout = ({ children }) => {
  useEffect(() => {
    window.jQuery = require('../../public/assets/js/jquery.min.js')
    // window.Diamonds = require('../public/jquery.diamonds.js')
  }, [])
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='author' content='Author Name' />

        <title>Title</title>

        <link rel='shortcut icon' href='/assets/img/favicon.png' />

        <link rel='stylesheet' href='/assets/css/icons.css' />

        <link rel='stylesheet' href='/assets/css/animate.css' />

        <link rel='stylesheet' href='/assets/css/magnific-popup.css' />

        <link rel='stylesheet' href='/assets/css/owl.carousel.min.css' />

        <link rel='stylesheet' href='/assets/css/metismenu.css' />

        <link rel='stylesheet' href='/assets/css/owl.theme.css' />

        <link rel='stylesheet' href='/assets/css/bootstrap.min.css' />
        <link rel='stylesheet' href='/assets/css/style.css' />

        <link rel='stylesheet' href='/style.css'></link>
        <Script src='/assets/js/jquery.min.js'></Script>
      </Head>
      <MainHeader />
      <Loader />
      {children}
      <MainFooter />
    </>
  )
}

export default DefaultLayout
