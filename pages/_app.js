import React, { useEffect, useState } from "react";
import { createWrapper } from "next-redux-wrapper";
import initStore from "../store";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import "react-multi-carousel/lib/styles.css";
import "../public/fonts/stylesheet.css";
import "./index.css";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import Popup from "../components/UI/Popup/Popup";
import TimePopup from "../components/TimePopup/TimePopup";
import { useSelector } from "react-redux";
import { GTMPageView } from "../UTILS/gtm";

import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-NNW6Q6X",
};

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const selectorPopup = useSelector((state) => state.popup.popup);

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
    const handleRouteChange = (url) => GTMPageView(url);
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  let content = (
    <>
      <Head>
        <title>Build your home | Red Roots Capital</title>
      </Head>
      {selectorPopup && (
        <Popup TimePopup>
          <TimePopup />
        </Popup>
      )}

      <Component {...pageProps} />
      {/* <script src="https://cdn.jsdelivr.net/gh/geocodezip/v3-utility-library@master/archive/maplabel/src/maplabel.js"/> */}
    </>
  );

  useEffect(() => {
    if (router.pathname !== "/") router.replace("/");
    router.prefetch("/choose_your_spot");
    router.prefetch("/select_floorplan");
    router.prefetch("/detailed_floorplan");
    router.prefetch("/customize_lnterior");
    router.prefetch("/apply");
  }, []);

  return content;
};

export const wrapper = createWrapper(initStore, { debug: !true });

export default wrapper.withRedux(MyApp);
