import idl from "../idl.json";
import Post from "./Post";

import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Program, Provider, web3 } from "@project-serum/anchor";
import { Connection, PublicKey } from "@solana/web3.js";

function UserVibes({ provider, program }) {
    const [isConnected, setIsConnected] = useState(false);
    // const getProvider = () => {
    //     const connection = new Connection(network, opts.preflightCommitment);
    //     const provider = new Provider(
    //         connection,
    //         window.solana,
    //         opts.preflightCommitment
    //     );
    //     return provider;
    // };

    const wallet = useWallet();

    const showVibes = async () => {
        if (wallet.connected) {
            const vibes = await program.account.vibe.all([
                {
                    memcmp: {
                        offset: 8,
                        bytes: wallet.publicKey,
                    },
                },
            ]);
            console.log(vibes);
        } else {
            console.log("Wallet not yet connected");
        }
    };

    useEffect(async () => {
        try {
            await showVibes();
        } catch (e) {
            console.log(e);
        }
    }, [wallet]);

    return (
        <Box
            borderRight="1px"
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
            <Heading as={"h2"} color="white" fontSize={20}>
                Your Vibes
            </Heading>
            <Post />
            <Post />
            <Post />
        </Box>
    );
}

export default UserVibes;
