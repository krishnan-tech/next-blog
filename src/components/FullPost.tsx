import React from "react";
import Head from "next/head";
import { parseISO, format } from "date-fns";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Avatar,
  Box,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function FullPost({
  children,
  frontMatter,
}: {
  children: any;
  frontMatter: any;
}) {
  const { colorMode } = useColorMode();
  const textColor = {
    light: "gray.700",
    dark: "gray.400",
  };
  const router = useRouter();
  const slug = router.asPath.replace("/blog", "");
  return (
    <>
      <Head>
        <title>
          {frontMatter.title} - {frontMatter.type} - {frontMatter.author_name}
        </title>
        <meta name="description" content={frontMatter.excerpt} />
        <meta
          name="keywords"
          content={
            frontMatter.title +
            " " +
            frontMatter.type +
            " " +
            frontMatter.author_name
          }
        />
        <meta name="author" content={frontMatter.author_name} />
      </Head>
      <Stack
        as="article"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        w="100%"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          w="100%"
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            {frontMatter.title}
          </Heading>
          <Flex
            justify="space-between"
            align={["initial", "center"]}
            direction={["column", "row"]}
            mt={2}
            w="100%"
            mb={4}
          >
            <Flex align="center">
              <Avatar
                size="xs"
                name={frontMatter.author_name}
                src={frontMatter.author_image}
                mr={2}
              />
              <Text fontSize="sm" color={textColor[colorMode]}>
                {frontMatter.author_name} -
                <span style={{ marginLeft: "5px" }}>
                  {format(parseISO(frontMatter.date), "MMMM dd, yyyy")}
                </span>
              </Text>
            </Flex>
            <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
              {frontMatter.readingTime.text}
            </Text>
          </Flex>
        </Flex>
        {children}
      </Stack>
    </>
  );
}
