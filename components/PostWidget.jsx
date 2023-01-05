import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image"
import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);
  return (
    <div className="bg-theme-black shadow-lg p-6 text-white max-h-90v">
      <h3 className="text-xl mb-4 font-semibold border-b pb-2">
        {slug ? "Artículos Relacionados" : "Artículos Destacados"}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-1">
          <div className="w-16 flex-none object-none">
            <Image
              alt={post.title}
              height="60px"
              width="60px"
              className="align-middle rounded-full"
              src={post.featuredImage.url}
              objectFit="cover"
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="font-xs">
              {moment(post.createdAt).format('MM, DD, YYYY')}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title} className="text-md">
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
