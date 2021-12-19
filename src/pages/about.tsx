import {
  Box,
  Button,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

interface aboutProps {}

export const about: React.FC<aboutProps> = ({}) => {
  const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "md",
  });
  return (
    <div>
      <Button colorScheme="gray" size="md">
        🔙 Back
      </Button>

      <Box mt="5" p="10" boxShadow={"0 4px 8px 0 rgb(0 0 0 / 20%)"}>
        <Box
          backgroundColor={colorMode === "light" ? "gray.200" : "gray.500"}
          padding={4}
          borderRadius={4}
          mb="8"
        >
          <Box fontSize={textSize}>About Me - Krishnan Navadia</Box>
        </Box>
        <Image
          src={"/krishnan.jpg"}
          layout="responsive"
          width={"10vw"}
          height={"9vh"}
        />

        <Box mt="5">
          <div className="post-body">
            I am a userbot who is active 12x7 with VSCode, Postman, and
            StackOverflow 😂
            <pre>
              <code>
                ┌──(root💀kali)-[~] <br />
                └─#whoami <br />
                userbot 🤖
              </code>
            </pre>
            <pre>
              <code>
                ┌──(root💀kali)-[~] <br />
                └─#Where are you living <br />
                Inside Terminal 🤪
              </code>
            </pre>
            <pre>
              <code>
                ┌──(root💀kali)-[~] <br />
                └─#git clone my-life.git <br />
                Do I have life? 🤣
              </code>
            </pre>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default about;
