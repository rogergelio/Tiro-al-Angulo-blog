import React from 'react';
import Image from 'next/image';

const Author = ({ author }) => (
  <div className="text-center text-neutral-200 mt-20 mb-2 p-12 relative rounded-lg bg-theme-black ">
    <div className="absolute left-0 right-0 -top-14">
      <Image
        unoptimized
        alt={author.name}
        height="100px"
        width="100px"
        className="align-middle rounded-full"
        src={author.photo.url}
      />
    </div>
    <h3 className="mt-4 mb-2 text-xl font-bold">Escrito por: {author.name}</h3>
    <p className="text-ls">{author.bio}</p>
  </div>
);

export default Author;