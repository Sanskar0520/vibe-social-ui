import idl from "../idl.json";

import React, { useState } from "react";
import {
    Box,
    Button,
    Flex,
    Input,
    Text,
    Textarea,
    VStack,
} from "@chakra-ui/react";
import { Program, Provider, web3 } from "@project-serum/anchor";
import { Connection, PublicKey } from "@solana/web3.js";

const programID = new PublicKey(idl.metadata.address);
const network = "http://127.0.0.1:8899";
const opts = {
    preflightCommitment: "processed",
};

function Vibe() {
    const [vibetopic, setVibeTopic] = useState("");
    const [vibetext, setVibe] = useState("");

    let handleInputChange = (e) => {
        let inputValue = e.target.value;
        setVibe(inputValue);
    };

    const getProvider = () => {
        const connection = new Connection(network, opts.preflightCommitment);
        const provider = new Provider(
            connection,
            window.solana,
            opts.preflightCommitment
        );
        return provider;
    };

    let createVibe = async () => {
        try {
            const provider = getProvider();
            const program = new Program(idl, programID, provider);

            const vibe = web3.Keypair.generate();

            await program.rpc.createVibe(vibetopic, vibetext, {
                accounts: {
                    vibe: vibe.publicKey,
                    author: program.provider.wallet.publicKey,
                    systemProgram: web3.SystemProgram.programId,
                },
                signers: [vibe],
            });

            const createdVibe = await program.account.vibe.fetch(
                vibe.publicKey
            );

            console.log(createdVibe);
        } catch (e) {
            console.log("Error Creating Vibe: ", e);
        }
    };

    return (
        <VStack spacing={4}>
            <Input
                width={700}
                mx={6}
                mt={4}
                color={"white"}
                placeholder="Topic"
                size="md"
                value={vibetopic}
                onChange={(e) => {
                    setVibeTopic(e.target.value);
                }}
            />
            <Textarea
                value={vibetext}
                onChange={handleInputChange}
                width={700}
                mx={6}
                mt={4}
                placeholder="What's Happening?"
                size="md"
                color={"white"}
                resize={"none"}
            />

            <VStack width={"full"} alignItems={"flex-end"}>
                <Button
                    mt={2}
                    colorScheme="purple"
                    size="md"
                    w={20}
                    onClick={createVibe}
                >
                    Post
                </Button>
            </VStack>
        </VStack>
    );
}

export default Vibe;
