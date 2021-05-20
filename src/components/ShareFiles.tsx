import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Flex, Heading, SimpleGrid, Text } from "@chakra-ui/layout";
import Router from "next/router";

type ShareFilesProps = {
  setShareType: (value: number) => void;
  shareType: number;
};

const ShareFiles = ({ shareType, setShareType }: ShareFilesProps) => {
  return (
    <Flex flexDir="column">
      <Heading mt="12" mb="4" fontSize="2xl">
        Send as
      </Heading>
      <SimpleGrid templateColumns="1fr 1fr" gap="4">
        <Flex
          background={shareType == 1 ? "white" : ""}
          flexDir="column"
          onClick={() => setShareType(1)}
          border={shareType == 1 ? "1px solid #3DB9F5" : ""}
          borderRadius="10px"
          alignItems="center"
          justifyContent="center"
          py="4"
          cursor="pointer"
        >
          <Image src="/mail-illustration.svg" width="80px" height="80px" />
          <Text fontSize="2xl" mt="4">
            Mail
          </Text>
        </Flex>
        <Flex
          background={shareType == 2 ? "white" : ""}
          flexDir="column"
          onClick={() => setShareType(2)}
          border={shareType == 2 ? "1px solid #3DB9F5" : ""}
          borderRadius="10px"
          alignItems="center"
          justifyContent="center"
          py="4"
          cursor="pointer"
        >
          <Image src="/link-illustration.svg" width="80px" height="80px" />
          <Text fontSize="2xl" mt="4">
            Link
          </Text>
        </Flex>
      </SimpleGrid>
      <Button
        mt="4"
        onClick={() => (shareType === 2 ? Router.push("/share") : null)}
      >
        Send File
      </Button>
    </Flex>
  );
};

export default ShareFiles;
