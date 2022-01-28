import { getChainOptions, WalletProvider } from "@terra-money/wallet-provider";

import { ConnectSample } from "components/ConnectSample";
import { CW20TokensSample } from "components/CW20TokensSample";
import { NetworkSample } from "components/NetworkSample";
import { QuerySample } from "components/QuerySample";
import { SignBytesSample } from "components/SignBytesSample";
import { SignSample } from "components/SignSample";
import { TxSample } from "components/TxSample";
import React from "react";
import ReactDOM from "react-dom";
import Home from "./screens/Home";
import "./style.css";

import "./styles/app.sass";

function App() {
  return (
    <>
      <Home />
      <ConnectSample />
    </>
  );
}

getChainOptions().then((chainOptions) => {
  ReactDOM.render(
    <WalletProvider {...chainOptions}>
      <App />
    </WalletProvider>,
    document.getElementById("root")
  );
});
