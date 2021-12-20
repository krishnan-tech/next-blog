import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Post({ post }: { post: any }) {
  return (
    <div className="card">
      <Box
        maxW={"445px"}
        w={"full"}
        bg="transparent"
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          // h={"210px"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
          bg="transparent"
        >
          <Image
            src={post.frontmatter.cover_image}
            layout={"responsive"}
            height={"100vh"}
            width={"100vw"}
          />
        </Box>
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {post.frontmatter.type}
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            <Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
          </Heading>
          <Text color={"gray.500"}>{post.frontmatter.excerpt}</Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar src={post.frontmatter.author_image} alt={"Author"} />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>{post.frontmatter.author_name}</Text>
            <Text color={"gray.500"}>
              {post.frontmatter.date} {/* · 6min read */}{" "}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
}
