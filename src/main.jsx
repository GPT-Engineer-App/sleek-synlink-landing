import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    50: "#e8f0fe",
    100: "#bed0fd",
    200: "#93affc",
    300: "#6790fc",
    400: "#3b70fb",
    500: "#1f56e0",
    600: "#173db3",
    700: "#102586",
    800: "#080e59",
    900: "#00042d",
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
