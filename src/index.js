import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain = "dev-41g02cvhw7lkaqep.us.auth0.com"
      clientId = "MgGeeFjkqPvWZMVwuFQeRpgMQF96msCq"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
// Form1.cs


    //Domain = "dev-41g02cvhw7lkaqep.us.auth0.com",
    //ClientId = "LO38UUhjGf3oiUEXSHPYBoaxKPPtXaqN"
