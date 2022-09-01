import React from "react";
import { Header } from "./";

const Layout = ({ children }) => {
  return (
    
    <>
      <head>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9425943405163248"
            crossorigin="anonymous"
          ></script>
        </head>
      <Header>
        <head>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9425943405163248"
            crossorigin="anonymous"
          ></script>
        </head>
      </Header>
      {children}
    </>
  );
};

export default Layout;
