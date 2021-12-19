import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center">
      <Text>
        {new Date().getFullYear()} -{" "}
        <Link href="http://krishnan-tech.github.io/" isExternal>
            Krishnan Navadia
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
