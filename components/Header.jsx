import React, { useState, useEffect } from "react";
import { getCategories } from "../services";
import {Navbar } from '../components'

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-2 max-h-15v bg-neutral-900">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9886424723448101"
     crossorigin="anonymous"></script>
      <div className="w-full inline-block ">
        <Navbar/>
      </div>
    </div>
  );
};

export default Header;
