import React from "react";
import { Box, HStack, Text, useColorModeValue, VStack } from "@chakra-ui/react";

function ProfileMidsection(props) {
  return (
    <Box
      bg={useColorModeValue("#11263E")}
      borderRight="1px"
      borderRadius={"10px"}
      width={700}
    >
      <Box mt={16} mb={16}>
        <VStack spacing={10}>
          <Text fontSize={16} color={"white"}>
            {props.address}
          </Text>
          <Text as={"span"} color={"#a080ed"} fontSize={20}>
            snsdomain.sol
          </Text>
          {/* <Text fontSize={20} color={"white"} fontWeight={"bold"}>
                        @username -{" "}
                        <Text as={"span"} color={"#a080ed"}>
                            snsdomain.sol
                        </Text>
                    </Text> */}
        </VStack>
      </Box>
    </Box>
  );
}

export default ProfileMidsection;
