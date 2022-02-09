import Head from 'next/head'
import DefaultLayout from '../components/Layouts/DefaultLayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <Component {...pageProps} />
    </DefaultLayout>
  )
}

export default MyApp
