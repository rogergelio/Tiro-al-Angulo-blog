import React from 'react';
import { useRouter } from 'next/router';
import { Us, Loader } from '../../components';
const Results = ({}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        Se vienen cosas...
      </div>
    </div>
  );
};
export default Results;
