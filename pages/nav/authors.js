import React from "react";
import { useRouter } from "next/router";
import { Loader } from "../../components";
import { getAuthors } from "../../services";
import Link from 'next/link';

const Authors = ({ authors }) => {
  console.log();
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="image-track mt-8 snap-x">
      {authors.map((author, index) => (
        <Link key={index} href={`/author/${author.slug}`}>
        <div className="author-image snap-center">
          <img
            className="author-pic"
            alt={author.name}
            src={author.photo.url}
          />
          <div className="author-text-container">
            <div className="author-image-text">{author.name}</div>
            <div className="author-image-bio">{author.bio}</div>
          </div>
        </div>
        </Link>
      ))}
    </div>
    
  );
};
export default Authors;

// Fetch data at build time
export async function getStaticProps() {
  const authors = (await getAuthors()) || [];
  return {
    props: { authors },
  };
}
