import "./App.css";
import idl from "./idl.json";

import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { Program, Provider, web3 } from "@project-serum/anchor";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    WalletAdapterNetwork,
    WalletNotConnectedError,
} from "@solana/wallet-adapter-base";
import {
    ConnectionProvider,
    WalletProvider,
    useWallet,
    useConnection,
} from "@solana/wallet-adapter-react";
import {
    WalletModalProvider,
    WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import React, { FC, ReactNode, useEffect, useMemo, useState } from "react";
import Dashboard from "./Pages/Dashboard";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import AccDetails from "./Pages/AccDetails";
import Profile from "./Pages/Profile";
import Explore from "./Pages/Explore";

require("@solana/wallet-adapter-react-ui/styles.css");

const programID = new PublicKey(idl.metadata.address);
const network = "http://127.0.0.1:8899";
const opts = {
    preflightCommitment: "processed",
};

function App() {
    const [web3Provider, setProvider] = useState(null);
    const [web3Program, setProgram] = useState(null);

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
        const provider = getProvider();
        const program = new Program(idl, programID, provider);
        try {
            setProvider(provider);
            setProgram(program);
            // console.log(provider);
            // console.log(program);
        } catch (e) {
            console.log(e);
        }
    }, []);

    return (
        <Context>
            <Box className="App" bg={useColorModeValue("#11263E")}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route
                            path="/profile"
                            element={
                                <Profile
                                    provider={web3Provider}
                                    program={web3Program}
                                />
                            }
                        />
                        <Route path="/deets" element={<AccDetails />} />
                        <Route
                            path="/explore"
                            element={
                                <Explore
                                    provider={web3Provider}
                                    program={web3Program}
                                />
                            }
                        />
                    </Routes>
                </BrowserRouter>
            </Box>
        </Context>
    );
}

export default App;

const Context: FC<{ children: ReactNode }> = ({ children }) => {
    const network = WalletAdapterNetwork.Devnet;

    const endpoint = "http://127.0.0.1:8899";

    const wallets = useMemo(() => [new PhantomWalletAdapter()], [network]);

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export const Content = () => {
    return (
        <div className="Button">
            <Flex marginLeft={12} borderRadius={"20px"}>
                <WalletMultiButton />
            </Flex>
        </div>
    );
};
