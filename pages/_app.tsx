import "@radix-ui/themes/styles.css";
// modules
import type {AppProps} from "next/app";
import {Theme, ThemePanel} from "@radix-ui/themes";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <Theme
            appearance="dark"
            accentColor="crimson"
            grayColor="sand"
            radius="large"
            scaling="95%">
            <Component {...pageProps} />
            <ThemePanel />
        </Theme>
    );
}

export default MyApp;
