import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { NextChakraLink } from "../components/NextChakraLink";

export default function Home() {
  return (
    <Flex
      background="linear-gradient(173.58deg, #3636AF 5.06%, #3C30C9 79.17%)"
      height="100vh"
      flexDir="column"
      px="6"
      pt="6"
      textAlign="center"
      position="relative"
    >
      <Heading mb="12" fontSize="5xl" color="white">
        Cookie Upload
      </Heading>
      <Image src="./home-illustration.svg" />
      <Box
        position="absolute"
        bottom="0"
        left="0"
        background="white"
        color="black"
        borderTopRadius="25px"
        pt="12"
        px="6"
      >
        <Heading color="#10105E">
          Easy your life with <br />
          Cookie Upload
        </Heading>
        <Text mt="6" color="#10105D" opacity="0.6">
          Cookie Upload is here to make your life easier in sharing various
          files with everyone
        </Text>
        <NextChakraLink href="/send-files">
          <Button my="6">Next</Button>
        </NextChakraLink>
      </Box>
    </Flex>
  );
}
