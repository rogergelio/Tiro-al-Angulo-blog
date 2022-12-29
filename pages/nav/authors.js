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
    <div className="overcontainer">
    <div className="image-track">
        {authors.map((author, index) => (
            <img className="image" src={author.photo.url} alt={author.name} />
        ))}
    </div>
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
