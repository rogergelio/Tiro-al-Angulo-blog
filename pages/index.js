import { FeaturedPosts } from "../sections/index";
import {
  PostCard,
  Categories,
  PostWidget,
  CategorySpinner,
} from "../components";
import { getPosts, getPostsTwo, getFeaturedPost } from "../services";

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-12 col-span-1 animate-in slide-in-from-left duration-700 object-fit: contain;">
          {//<CategorySpinner />
}
        </div>
        <div className="lg:col-span-8 col-span-1 animate-in slide-in-from-left duration-700">
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
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
