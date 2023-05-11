import Head from "next/head";
import React from "react";
import Layout from "../components/layout";
import Help_Faq from "../components/Help_Faq";

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Layout>
        <div class="my-16 mx-10">
          <h1 class="text-3xl underline decoration-double text-center font-bold mb-4">
            Contact Us
          </h1>
        </div>
      </Layout>
      <Help_Faq />
    </>
  );
};

export default contact;
