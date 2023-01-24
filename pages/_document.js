import {
  Html, Head, Main, NextScript,
} from 'next/document';

const Document = () => (
  <Html lang="en">
    <Head />
    <body className="bg-[url('../public/background-stars.svg')] bg-planet-dark text-planet-white">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Antonio&family=League+Spartan&display=swap" rel="stylesheet" />
      <Main />
      <NextScript />
    </body>
  </Html>
);
export default Document;
