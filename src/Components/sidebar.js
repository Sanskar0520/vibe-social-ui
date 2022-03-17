import React, { ReactNode } from "react";

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
} from "@chakra-ui/react";
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
    FiUser,
} from "react-icons/fi";

import { Content } from "../App";

const LinkItems = [
    { name: "Home", icon: FiHome, url: "/" },
    { name: "Trending", icon: FiTrendingUp, url: "/trending" },
    { name: "Explore", icon: FiCompass, url: "/explore" },
    { name: "Profile", icon: FiUser, url: "/profile" },
    { name: "Details", icon: FiSettings, url: "/deets" },
];

const SimpleSidebar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box minH="100vh" bg={useColorModeValue("#0A131D")}>
            <SidebarContent
                onClose={() => onClose}
                display={{ base: "none", md: "block" }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent>
                    <SidebarContent onClose={onClose} Content={Content} />
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

const SidebarContent = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box
            bg={useColorModeValue("#11263E")}
            borderRight="1px"
            ml={5}
            borderRadius={"10px"}
            w={{ base: "full", md: 72 }}
            h="97vh"
        >
            <Flex
                h="20"
                alignItems="center"
                ml="20"
                justifyContent="space-between"
            >
                {/*<img src={"https://synthesize.s3.ap-south-1.amazonaws.com/images/Aces+Labs+(3).png"} />*/}
                <Text
                    fontSize="3xl"
                    fontFamily="monospace"
                    fontWeight="bold"
                    color={"white"}
                >
                    SOLVIBE
                </Text>
                <CloseButton
                    display={{ base: "flex", md: "none" }}
                    onClick={onClose}
                />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem
                    key={link.name}
                    icon={link.icon}
                    name={link.name}
                    url={link.url}
                />
            ))}
            <Box mt={10} ml={5}>
                <Content />
            </Box>
        </Box>
    );
};

const NavItem = ({ icon, name, url }) => {
    return (
        <Link
            href={url}
            style={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none" }}
            color={"white"}
        >
            <Flex
                alignItems={"center"}
                p="6"
                paddingLeft={20}
                fontSize={18}
                marginTop={4}
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: "#512da8",
                    color: "white",
                }}
            >
                <Icon
                    mr="5"
                    fontSize="20"
                    _groupHover={{
                        color: "white",
                    }}
                    as={icon}
                />
                <Text>{name}</Text>
            </Flex>
        </Link>
    );
};

export default SimpleSidebar;
