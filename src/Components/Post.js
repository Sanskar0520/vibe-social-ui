import React from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Spacer,
} from "@chakra-ui/react";

export default function Post() {
  return (
    <>
      <Box minH="30vh" padding={"20px"} borderRadius={"10px"}>
        <Box
          bg={useColorModeValue("red")}
          h="40px"
          //   borderRadius={"10px"}
          //   border={"solid"}
          padding="10px"
          borderTopRadius={"10px"}
        >
          <Flex>
            <Box p="2">Username Address</Box>
            <Spacer />
            <Box p="2">Date Time</Box>
          </Flex>
        </Box>
        <Box
          bg={useColorModeValue("white")}
          padding="10px"
          //   borderRadius={"10px"}
          //   border={"solid"}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          volutpat eget metus nec accumsan. Integer augue ipsum, semper sed
          accumsan a, pretium vitae ipsum. Nam ultricies dictum tortor, eget
          aliquet ex condimentum eu. Ut in consectetur nulla, ut hendrerit ante.
          Sed laoreet finibus odio, ac malesuada turpis eleifend a. Pellentesque
          efficitur auctor diam non tempor. Vivamus ut ornare leo, id auctor
          velit.
        </Box>
        <Box
          bg={useColorModeValue("blue")}
          h="40px"
          borderBottomRadius={"10px"}
          padding="10px"
          //   borderRadius={"10px"}
          //   border={"solid"}
        >
          <button>Like</button>
        </Box>
      </Box>
    </>
  );
}