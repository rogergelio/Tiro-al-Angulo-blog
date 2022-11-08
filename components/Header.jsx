import React, { useState, useEffect } from "react";
import Link from "next/link";
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
    <div className="container mx-auto px-10 mb-4">
      <div className="border-b w-full inline-block border-white-400 py-8">
        <Navbar/>
      </div>
    </div>
  );
};

export default Header;
