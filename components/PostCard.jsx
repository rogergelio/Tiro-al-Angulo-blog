import React from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

const PostCard = ({ post }) => {
  return (
    <Link href={`/post/${post.slug}`}>
      <div className="snap-center bg-theme-black shadow-lg lg:pb:8 md:pb:8 sm:pb-8 xl:pb:8 mb-4 text-neutral-200 p-0 lg:p-2 cursor-pointer lg:ml-1 h-45v group">
        <div
          style={{
            backgroundImage: `url(${post.featuredImage.url})`,
          }}
          className="lg:w-2/5 h-full w-full bg-center bg-cover duration-200 lg:brightness-90 brightness-25 z-10"
        ></div>
        <div className="group relative">
          <div className="absolute right-0 lg:-top-40v -top-30v lg:w-3/5 w-full inset-y-0">
            <div className="lg:h-full h-4/5 relative">
              <div className="h-full grid">
              <h1 className="hover:text-dark-green transition duration-400 text-center mb-2 text-2xl font-semibold px-2 max-h-20v overflow-hidden">
                {post.title}
              </h1>
              <p className="text-center text-s font-normal px-2 mb-6 overflow-hidden text-clip inset-x-0 max-h-20v">
                {post.excerpt}
              </p>
              <div className="lg:flex text-left items-center justify-left w-full ">
                <div className="flex items-center justify-center mb-2 lg:mb-0 w-full lg:wauto mr-8">
                  <Image
                    alt={post.author.name}
                    height="30px"
                    width="30px"
                    className="align-middle rounded-full"
                    src={post.author.photo.url}
                  />
                  <p className="inline align-middle text-neutral-200 ml-2 text-lg">
                    {post.author.name}
                  </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
