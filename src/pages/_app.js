import React from "react";
import Head from "../components/Head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default ({ Component, pageProps }) => {
  const props = {
    ...pageProps,
  };

  return (
    <>
      <Head>
        <title>PSTime</title>
      </Head>
      <Header></Header>
      <main>
        <Component {...props} />
      </main>
      <Footer></Footer>
    </>
  );
};
