import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import UserVibes from "./UserVibes";

function ProfileBottom({ provider, program }) {
  return (
    <Box
      bg={useColorModeValue("#11263E")}
      w={"full"}
      h={"66vh"}
      padding={"20px"}
      borderRadius={"10px"}
      overflow={"auto"}
      sx={{
        "&::-webkit-scrollbar": {
          width: "16px",
          borderRadius: "10px",
          backgroundColor: `rgba(0, 0, 0, 0.20)`,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: `rgba(0, 0, 0, 0.2)`,
        },
      }}
    >
      <Tabs variant="soft-rounded" colorScheme="purple">
        <TabList>
          <Tab mx="10px" width="100px">
            Posts
          </Tab>
          <Tab mx="10px" width="100px">
            Likes
          </Tab>
          <Tab mx="10px" width="100px">
            Comment
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <UserVibes provider={provider} program={program} />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default ProfileBottom;
