import fs from "fs";
import matter from "gray-matter";
import path from "path";
import mdxPrism from "mdx-prism";
import readingTime from "reading-time";
import renderToString from "next-mdx-remote/render-to-string";

import MDXComponents from "../components/MDXComponents";

const root = process.cwd();

export async function getFiles() {
  const post_path = path.join(root, "posts");
  return fs.readdirSync(post_path);
}

export async function getFileBySlug(slug) {
  const source = slug
    ? fs.readFileSync(path.join(root, "posts", `${slug}.mdx`), "utf8")
    : fs.readFileSync(path.join(root, "posts", `${type}.mdx`), "utf8");

  const { data, content } = matter(source);
  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        require("remark-autolink-headings"),
        require("remark-slug"),
        require("remark-code-titles"),
      ],
      rehypePlugins: [mdxPrism],
    },
  });

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
}

export async function getAllFilesFrontMatter() {
  const files = fs.readdirSync(path.join(root, "posts"));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(path.join(root, "posts", postSlug), "utf8");
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
}
