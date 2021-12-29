import { Button, useBreakpointValue, useColorMode } from "@chakra-ui/react";
import FullPost from "components/FullPost";
import hydrate from "next-mdx-remote/hydrate";
import Link from "next/link";
import MDXComponents from "../../components/MDXComponents";
import { getFileBySlug, getFiles } from "../../lib/mdx";

interface PostPage {
  frontMatter: any;
  slug: string;
  content: any;
  mdxSource: any;
  props: any;
}

interface StaticProp {
  params: {
    slug: string;
  };
}

export default function PostPage({
  mdxSource,
  frontMatter,
}: PostPage): JSX.Element {
  const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "md",
  });

  const hydrate_context = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return (
    <>
      <Link href="/">
        <Button colorScheme="gray" size="md">
          🔙 Back
        </Button>
      </Link>
      <div className="card card-page">
        <FullPost frontMatter={frontMatter}>{hydrate_context}</FullPost>
      </div>
    </>
  );
}

// export async function getStaticPaths() {
//   const files = fs.readdirSync(path.join("posts"));

//   const paths = files.map((filename) => ({
//     params: {
//       slug: filename.replace(".md", ""),
//     },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params: { slug } }: StaticProp) {
//   const markdownWithMeta = fs.readFileSync(
//     path.join("posts", slug + ".md"),
//     "utf-8"
//   );

//   const { data: frontmatter, content } = matter(markdownWithMeta);

//   return {
//     props: {
//       frontmatter,
//       slug,
//       content,
//     },
//   };
// }

export async function getStaticPaths() {
  const posts = await getFiles();

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const post = await getFileBySlug(params.slug);

  return { props: post };
}
