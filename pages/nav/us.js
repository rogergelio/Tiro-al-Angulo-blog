import React from 'react';
import { useRouter } from 'next/router';
import { Us, Loader } from '../../components';
const UsPage = ({}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-4 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <UsPage/>
      </div>
    </div>
  );
};
export default Us;
