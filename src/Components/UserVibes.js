import idl from "../idl.json";
import Post from "./Post";

import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Program, Provider, web3 } from "@project-serum/anchor";
import { Connection, PublicKey } from "@solana/web3.js";
import bs58 from "bs58";

const programID = new PublicKey(idl.metadata.address);
const network = "http://127.0.0.1:8899";
const opts = {
    preflightCommitment: "processed",
};

function UserVibes() {
    const getProvider = () => {
        const connection = new Connection(network, opts.preflightCommitment);
        const provider = new Provider(
            connection,
            window.solana,
            opts.preflightCommitment
        );
        return provider;
    };

    useEffect(async () => {
        try {
            const provider = getProvider();
            const program = new Program(idl, programID, provider);

            const vibes = await program.account.vibe.all([
                {
                    memcmp: {
                        offset: 8,
                        bytes: program.provider.wallet.publicKey,
                    },
                },
            ]);

            console.log(vibes);
        } catch (e) {
            console.log(e);
        }
    }, []);

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
