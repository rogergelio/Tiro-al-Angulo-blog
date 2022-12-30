import React from 'react';
import { useRouter } from 'next/router';

import { getAuthors, getAuthorPost } from '../../services';
import { PostCard, PostWidget, Loader } from '../../components';

const AuthorPost = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-4 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
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
};
export default AuthorPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getAuthorPost(params.slug);
  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const authors = await getAuthors();
  return {
    paths: authors.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}