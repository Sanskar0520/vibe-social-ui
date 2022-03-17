import { HStack, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";
import ProfileBottom from "../Components/ProfileBottom";
import ProfileMidsection from "../Components/ProfileMidsection";
import SimpleSidebar from "../Components/sidebar";
import { useParams } from "react-router";

function Profile(props) {
  const { address } = useParams();
  return (
    <HStack padding={2} alignItems={"start"} bg={useColorModeValue("#0A131D")}>
      <SimpleSidebar />
      <VStack>
        <ProfileMidsection address={address} />
        <ProfileBottom provider={props.provider} program={props.program} />
      </VStack>
    </HStack>
  );
}

export default Profile;
