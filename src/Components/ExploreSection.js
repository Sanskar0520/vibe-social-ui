import { useWallet } from "@solana/wallet-adapter-react";

import { Box, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Post from "./Post";

export default function ExploreSection({ provider, program }) {
    const wallet = useWallet();

    const showAllVibes = async () => {
        if (wallet.connected) {
            const vibes = await program.account.vibe.all();
            console.log(vibes);
        } else {
            console.log("Wallet not yet connected");
        }
    };

    useEffect(async () => {
        try {
            await showAllVibes();
        } catch (e) {
            console.log(e);
        }
    }, [wallet]);

    return (
        <Box
            bg={useColorModeValue("#11263E")}
            borderRight="1px"
            h="97vh"
            maxW={"50vw"}
            marginTop={2}
            borderRadius={"10px"}
            overflow="auto"
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
            <Post />
            <Post />
            <Post />
            <Post />
        </Box>
    );
}
