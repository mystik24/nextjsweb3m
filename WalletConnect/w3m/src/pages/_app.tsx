import "@/styles/globals.css";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import Header from "../pages/components/Header"
import { WagmiConfig } from "wagmi";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import {
	arbitrum,
	avalanche,
	bsc,
	fantom,
	gnosis,
	mainnet,
	optimism,
	polygon,
} from "wagmi/chains";

const chains = [
	mainnet,
	polygon,
	avalanche,
	arbitrum,
	bsc,
	optimism,
	gnosis,
	fantom,
];

// 1. Get projectID at https://cloud.walletconnect.com

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";

const metadata = {
	name: "Next Starter Template",
	description: "A Next.js starter template with Web3Modal v3 + Wagmi",
	url: "https://web3modal.com",
	icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({ wagmiConfig, projectId, chains });

export default function App({ Component, pageProps }: AppProps) {
	const [ready, setReady] = useState(false);
	const [activeTab, setActiveTab] = useState(1);

	// Funzione per cambiare il tab attivo
	const changeTab = (tabNumber: number) => {
		setActiveTab(tabNumber);
	};
	useEffect(() => {
		setReady(true);
	}, []);
	return (


		<>

			<div className="App" >
				<Header />
				<div className="content">
					<div>
						{ready ? (
							<WagmiConfig config={wagmiConfig}>

								<div>
									<Component {...pageProps} />
								</div>
							</WagmiConfig>
						) : null}
					</div>
					<img src="url_della_tua_immagine.jpg" alt="Descrizione" className="main-photo" />
				</div>
				<div>
				</div>
				{/* Altri componenti o contenuti possono seguire qui */}
				<div className="tab-headers">
					<button onClick={() => changeTab(1)}>Tab 1</button>
					<button onClick={() => changeTab(2)}>Tab 2</button>
					<button onClick={() => changeTab(3)}>Tab 3</button>
				</div>
				<div className="tab-content">
					{activeTab === 1 && (
						// Contenuto per il Tab 1
						<div className="tab-element">
							<div>Contenitore 1 - Tab 1</div>
							<div>Contenitore 2 - Tab 1</div>
							<div>Contenitore 3 - Tab 1</div>
							<div>Contenitore 4 - Tab 1</div>
							<div>Contenitore 5 - Tab 1</div>
						</div>
					)}
					{activeTab === 2 && (
						// Contenuto per il Tab 2
						<div className="tab-content">
							<div>Contenitore 1 - Tab 2</div>
							<div>Contenitore 2 - Tab 2</div>
							<div>Contenitore 3 - Tab 2</div>
							<div>Contenitore 4 - Tab 2</div>
							<div>Contenitore 5 - Tab 2</div>
						</div>
					)}
					{activeTab === 3 && (
						// Contenuto per il Tab 3
						<div className="tab-content">
							<div>Contenitore 1 - Tab 3</div>
							<div>Contenitore 2 - Tab 3</div>
							<div>Contenitore 3 - Tab 3</div>
							<div>Contenitore 4 - Tab 3</div>
							<div>Contenitore 5 - Tab 3</div>
						</div>
					)}
				</div>
				{/* Altri componenti o contenuti possono seguire qui */}
			</div>


		</>
	);
}
