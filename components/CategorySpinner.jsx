import React, { useState, useEffect } from "react";
import { getCategories } from "../services";
import Link from "next/link";

const CategorySpinner = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <>
      <div className="border-b border-white-400 w-512 sm:w-512 md:w-512 lg:w-512">
        <div className="maylike-products-container track mb-4">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <div className="object-fill ">
                <img
                  className="w-96"
                  src={category.picture.url}
                  alt={category.name}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategorySpinner;
