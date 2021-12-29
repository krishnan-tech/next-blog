import { Box } from "@chakra-ui/react";
import BlogsHomeComponent from "components/BlogsHomeComponent";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import About from "components/About";

const Home = ({ posts }: { posts: any }): JSX.Element => {
  return (
    <Box mb={8} w="full">
      <About />
      <BlogsHomeComponent posts={posts} />
    </Box>
  );
};

export default Home;

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".mdx", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts,
    },
  };
}
