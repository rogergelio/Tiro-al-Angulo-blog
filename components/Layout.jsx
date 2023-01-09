import React from "react";
import { Header } from "./";

const Layout = ({ children }) => {
  return (
    
    <>
    <div className="w-120vw lg:w-100vw">
      <Header>
      </Header>
      {children}</div>
    </>
  );
};

export default Layout;
