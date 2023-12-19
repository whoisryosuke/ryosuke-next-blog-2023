import React, { PropsWithChildren } from "react";
import Fonts from "../Fonts/Fonts";
import "normalize.css";
import MetaTags, { MetaTagsProps } from "../MetaTags/MetaTags";
import Head from "next/head";

type Props = {};

const Html = ({ children }: PropsWithChildren<Props>) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="me" href="https://mastodon.gamedev.place/@whoisryosuke" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default Html;
