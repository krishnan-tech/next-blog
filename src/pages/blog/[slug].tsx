import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";
import {
  Box,
  Button,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";

interface PostPage {
  frontmatter: {
    title: string;
    date: string;
    cover_image: string;
  };
  slug: string;
  content: any;
}

interface StaticProp {
  params: {
    slug: string;
  };
}

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}: PostPage): JSX.Element {
  const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "md",
  });
  return (
    <>
      <Link href="/">
        <Button colorScheme="gray" size="md">
          🔙 Back
        </Button>
      </Link>
      <div className="card card-page">
        <Box
          backgroundColor={colorMode === "light" ? "gray.200" : "gray.500"}
          padding={4}
          borderRadius={4}
        >
          <Box fontSize={textSize}>{title}</Box>
        </Box>

        <div className="post-date">Posted on {date}</div>
        <Image src={cover_image} layout="fill" />
        <div className="post-body">
          <div
            dangerouslySetInnerHTML={
              //   @ts-ignore
              { __html: marked(content) }
            }
          ></div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: StaticProp) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
