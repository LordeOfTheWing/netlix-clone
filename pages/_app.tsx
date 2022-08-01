import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Authprovider } from "../hooks/useAuth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Authprovider>
      <Component {...pageProps} />;
    </Authprovider>
  );
}

export default MyApp;
