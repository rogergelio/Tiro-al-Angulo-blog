import { PostCard, PostWidget, CategorySpinner, WelcomeCard } from "../components";
import { getPosts, getRecentFeaturedPosts } from "../services";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import React, { useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";

export default function Home({ posts, recentFeaturedPosts }) {
  return (
    <div className="container mx-auto mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
        {
          //<div className="lg:col-span-12 col-span-1 animate-in slide-in-from-left duration-700 object-fit: contain;"-->}
          //<CategorySpinner />
          //</div>
        }
        <WelcomeCard className="snap-y" posts={recentFeaturedPosts}/>
        <div className="lg:col-span-8 col-span-1 lg:col-start-1 animate-in slide-in-from-left duration-700">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-6 animate-in spin-in zoom-in duration-700">
            <PostWidget />
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {const recentFeaturedPosts = (await getRecentFeaturedPosts()) || [];
  const posts = (await getPosts()) || [];
  
  return {
    props: { recentFeaturedPosts, posts},
  };
}

