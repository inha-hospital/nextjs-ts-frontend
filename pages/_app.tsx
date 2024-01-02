import type { AppProps } from "next/app";
import "styles/globals.css";
import "styles/main.css";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";
import { RecoilRoot } from "recoil";
import LayoutPages from "components/layout/pages";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <Theme
                appearance="dark"
                accentColor="crimson"
                grayColor="sand"
                radius="large"
                scaling="95%"
            >
                <LayoutPages depth="main">
                    <Component {...pageProps} />
                    {/* <ThemePanel /> */}
                </LayoutPages>
            </Theme>
        </RecoilRoot>
    );
}

export default MyApp;
