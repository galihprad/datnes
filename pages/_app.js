import "../styles/globals.css";
import React, { useState } from "react";
import Sidebar from "components/Sidebar/Sidebar";
import { AppWrapper } from "utils/global-context";

function MyApp({ Component, pageProps }) {
  return (
    <div className="globalContainer">
      <AppWrapper>
        <Sidebar />
        <Component {...pageProps} />
      </AppWrapper>
    </div>
  );
}

export default MyApp;
