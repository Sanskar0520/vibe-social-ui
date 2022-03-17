import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

function ProfileBottom() {
    return (
        <Box bg={useColorModeValue("#11263E")} w={"full"} h={"68vh"}>
            <Text fontSize={20} color={"White"}>
                Profile Bottom
            </Text>
        </Box>
    );
}

export default ProfileBottom;
