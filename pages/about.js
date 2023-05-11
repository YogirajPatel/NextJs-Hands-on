import Head from "next/head";
import React from "react";
import Layout from "../components/layout";
import Image from "next/image";
import RandomImage from "../components/RandomImage";

const about = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>

      <Layout>
        <div className=" mx-auto text-center">
          <div class="my-16">
            <h1 class="text-3xl underline decoration-double text-center font-bold mb-4">
              About Us
            </h1>
          </div>
          <div className="flex m-auto">
            <div className="mx-auto">
              <RandomImage />
            </div>
            <div className="md:w-1/2 lg:pl-6 mx-auto">
              <p className="text-lg md:text-xl leading-relaxed border-2 border-blue-500 p-8">
                In today's fast-paced world, staying up to date with the latest
                news and events can be a challenge. With so much information
                available from multiple sources, it can be overwhelming to keep
                track of everything. Fortunately, there are news apps available
                that can help you stay informed on the go. These apps provide
                access to news articles, videos, and podcasts from a variety of
                sources, all in one place. With features like personalized news
                feeds, push notifications, and bookmarking, you can tailor your
                news consumption to your interests and stay informed on the
                topics that matter most to you. In this blog, we'll explore some
                of the best news apps available today and provide some tips on
                how to use them effectively. Whether you're a news junkie or
                just looking for a convenient way to stay informed, there's a
                news app out there for you.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default about;
