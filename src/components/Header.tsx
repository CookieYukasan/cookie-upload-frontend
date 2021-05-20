import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/layout";
import Router from "next/router";
import { FaArrowLeft } from "react-icons/fa";

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <SimpleGrid as="header" width="100%" templateColumns="1fr 2fr">
      <FaArrowLeft size="30px" onClick={() => Router.back()} cursor="pointer" />
      <Heading>{title}</Heading>
    </SimpleGrid>
  );
};

export default Header;
