import React from 'react';
import { useRouter } from 'next/router';
import { Us, Loader } from '../../components';
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
const Results = ({}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className='bg-theme-black w-100vw h-85v group'>
        <div className="lg:hidden group-hover:block text-neutral-200 absolute lg:top-[42.5%] top-[65%] -translate-x-0 translate-y-[50%] left-2 text-2xl p-2 cursor-pointer z-50">
            <BsChevronCompactLeft size={"60px"} />
          </div>
          <div className="lg:hidden group-hover:block text-neutral-200 absolute lg:top-[42.5%] top-[65%] -translate-x-0 translate-y-[50%] right-2 text-2xl p-2 cursor-pointer z-50">
            <BsChevronCompactRight size={"60px"} />
          </div>
          <div className='header'></div>
          <div className='results'></div>
          <div className='table'></div>
        </div>
      </div>
    </div>
  );
};
export default Results;
