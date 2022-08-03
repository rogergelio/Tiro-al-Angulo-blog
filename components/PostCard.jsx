import React from "react";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h1
        className="transition duration-700 text-center mb-8 cursor:pointer
      hover:text-green-600 text-3xl font-semibold
      "
      >
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-2 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:wauto mr-8">
          <img
            alt={post.author.name}
            height="30px"
            width="30px"
            className="align-middle rounded-full"
            src={post.author.photo.url}
          />
          <p className="inline align-middle text-grey-700 ml-2 text-lg">
            {post.author.name}
          </p>
        </div>
        
      </div>
      <div className="font-medium text-gray-700 text-center justify-center mb-4 w-full">
          <span>{moment(post.createdAt).format("DD, MM, YYYY")}</span>
      </div>
      <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-green-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
            Seguir leyendo
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
