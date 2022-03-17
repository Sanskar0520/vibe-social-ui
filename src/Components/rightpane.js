import React from 'react'
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
    HStack,
    VStack,
  } from "@chakra-ui/react";

function Rightpane() {
  return (
    <Box
    bg={useColorModeValue("#11263E")}
   
 
    h="400px"
    w="400px"
    borderRadius={"10px"}
></Box>
  )
}

export default Rightpane