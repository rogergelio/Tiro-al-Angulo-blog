import React from "react";
import { Header } from "./";

const Layout = ({ children }) => {
  return (
    
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9425943405163248"
     crossorigin="anonymous"></script>
      <Header>
      </Header>
      {children}
    </>
  );
};

export default Layout;
