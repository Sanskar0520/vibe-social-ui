import "./App.css";
import "./idl.json";

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

function App() {
    return (
        <Context>
            <Box className="App" bg={useColorModeValue("#11263E")}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/deets" element={<AccDetails />} />
                        <Route path="/explore" element={<Explore />} />
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
