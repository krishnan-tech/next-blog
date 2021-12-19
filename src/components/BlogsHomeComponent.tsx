import Head from "next/head";
import { Key } from "react";
import Post from "./Post";

export default function BlogsHomeComponent({ posts }: { posts: any }) {
  console.log;
  return (
    <div>
      <Head>
        <title>Krishnan Navadia</title>
      </Head>

      <div className="posts">
        {posts.map(
          (post: any, index: Key | null | undefined): JSX.Element => (
            <Post key={index} post={post} />
          )
        )}
      </div>
    </div>
  );
}
