import Head from 'next/head';

import '../styles/common/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Rule of thumb.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps}/>
    </>
  )
}

export default MyApp
