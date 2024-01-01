import "@radix-ui/themes/styles.css";
// modules
import type { AppProps } from "next/app";
import { Theme, ThemePanel } from "@radix-ui/themes";
import NavTop from "components/nav-top";
import { RecoilRoot } from "recoil";

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
        <NavTop />
        <Component {...pageProps} />
        {/* <ThemePanel /> */}
      </Theme>
    </RecoilRoot>
  );
}

export default MyApp;
