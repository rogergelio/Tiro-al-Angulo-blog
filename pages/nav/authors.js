import React from "react";
import { useRouter } from "next/router";
import { Loader } from "../../components";
import { getAuthors } from "../../services";

const Authors = ({ authors }) => {
  console.log();
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }

  return (
      <div className="image-track">
        {authors.map((author, index) => (
          <div className="author-image">
            <div className="author-image-text">{author.name}</div>
            <img className="author-pic" alt={author.name} src={author.photo.url}/>
          </div>
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
