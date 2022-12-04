import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

// import { PersistGate } from "redux-persist/integration/react";

// import { store, persistor } from "./redux/store";

import "./index.css";
import App from "./App";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Provider store={store}>
        <BrowserRouter>
          {/* <PersistGate persistor={persistor}> */}
          <App />
          {/* </PersistGate> */}
        </BrowserRouter>
      </Provider>
    </ThirdwebProvider>
  </>
);
