import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SimpleSidebar from "./Components/sidebar";

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
    ConnectionProvider,
    WalletProvider,
} from "@solana/wallet-adapter-react";
import {
    WalletModalProvider,
    WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import {
    LedgerWalletAdapter,
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
    SolletExtensionWalletAdapter,
    SolletWalletAdapter,
    TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import React, { FC, ReactNode, useMemo } from "react";
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
    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
    const network = WalletAdapterNetwork.Devnet;

    // You can also provide a custom RPC endpoint.
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
    // Only the wallets you configure here will be compiled into your application, and only the dependencies
    // of wallets that your users connect to will be loaded.
    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
            new SlopeWalletAdapter(),
            new SolflareWalletAdapter({ network }),
            new TorusWalletAdapter(),
            new LedgerWalletAdapter(),
            new SolletWalletAdapter({ network }),
            new SolletExtensionWalletAdapter({ network }),
        ],
        [network]
    );

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
            <WalletMultiButton /></Flex>
        </div>
    );
};
