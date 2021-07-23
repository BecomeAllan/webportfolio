import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet= "UTF-8"/>
          <meta name= "description" content="My personal portfolio about programming applications"/>
          <meta name= "keywords" content="REACT.js, JavaScript, Sass, Python, R, Machine Learning, Deep Learning, Portfolio"/>
          <meta name= "author" content="BecomeAllan"/>

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
          <link href="https://fonts.googleapis.com/css2?family=Aldrich&family=Roboto:wght@400;500;700;900&family=Saira+Stencil+One&display=swap" rel="stylesheet" />

          <link rel="icon" href="https://avatars.githubusercontent.com/u/57200740" type="image/png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
