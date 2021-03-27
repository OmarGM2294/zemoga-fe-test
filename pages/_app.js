import Head from 'next/head'

import '../styles/common/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Rule of thumb.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Zemoga front end test by Omar Gonzalez"
        />
        <link rel="preload" as="image" href="/images/pope-francis.@2x.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
