import { PostCard, PostWidget, CategorySpinner } from "../components";
import { getPosts } from "../services";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import React, { useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";

export default function WelcomeCard({ posts }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? posts.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === posts.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (postIndex) => {
    setCurrentIndex(postIndex);
  };

  return (
        <div className="h-85v w-full m-auto relative lg:col-span-12 col-span-1 group ">
          <div
            style={{
              backgroundImage: `url(${posts[currentIndex].node.featuredImage.url})`,
            }}
            className="w-full h-full bg-center bg-cover duration-200 brightness-25"
          ></div>
          {console.log(posts[0].node.featuredImage.url)}
          <div className="hidden group-hover:block text-neutral-200 absolute top-[35%] -translate-x-0 translate-y-[50%] left-5 text-2xl p-2 cursor-pointer z-10">
            <BsChevronCompactLeft onClick={prevSlide} size={"60px"} />
          </div>
          <div className="hidden group-hover:block text-neutral-200 absolute top-[35%] -translate-x-0 translate-y-[50%] right-5 text-2xl p-2 cursor-pointer z-10">
            <BsChevronCompactRight onClick={nextSlide} size={"60px"} />
          </div>
          <div className="flex top-4 justify-center py-2">
            {posts.map((post, postIndex) => (
              <div
                key={postIndex}
                onClick={() => goToSlide(postIndex)}
                className={"text-2xl cursor-pointer -translate-y-20"}
              >
                {postIndex === currentIndex ? (
                  <RxDotFilled className="text-neutral-200" />
                ) : (
                  <RxDotFilled className="text-dark-green" />
                )}
              </div>
            ))}
          </div>
          <div className="text-center -translate-y-35v">
            <div className="text-neutral-200 text-l mx-32 my-4">
              <div className="flex items-center justify-center mb-2 lg:mb-0 w-full lg:wauto mr-8">
                <Image
                  alt={posts[currentIndex].node.author.name}
                  height="60px"
                  width="60px"
                  className="align-middle rounded-full"
                  src={posts[currentIndex].node.author.photo.url}
                />
                <p className="inline align-middle text-grey-700 ml-2 text-lg">
                  {posts[currentIndex].node.author.name}
                </p>
              </div>
              {console.log(posts[currentIndex].node.author.name)}
            </div>
          </div>
          <div className="text-center neutral-200space-normal absolute inset-y-1/4 inset-x-0">
            <div className="text-neutral-200 text-4xl font-bold mx-32 my-4">
              {posts[currentIndex].node.title}
            </div>
            <div className="text-neutral-200 text-xl mx-32">
              {posts[currentIndex].node.excerpt}
            </div>
          </div>
        </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
