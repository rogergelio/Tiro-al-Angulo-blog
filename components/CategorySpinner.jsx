import React, { useState, useEffect } from "react";
import { getCategories } from "../services";
import Link from 'next/link';


const CategorySpinner = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <>
      <div className="border-b border-white-400 object-fit: contain;">
            <div className="maylike-products-container track mb-4">
              {console.log(categories)}
              {categories.map((category, index) => (
                <Link key={index} href={`/category/${category.slug}`}>
                  <div className="object-fill">
                    <img src={category.picture.url} width="75" height="70"/>
                  </div>
                </Link>
              ))}
              
        </div>
      </div>
    </>
  );
};

export default CategorySpinner;
