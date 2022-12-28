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
    <div className="container mx-auto px-4 mb-4">
      <div className="border-b w-full inline-block border-white-400 mt-6">
        <Navbar/>
      </div>
    </div>
  );
};

export default Header;
