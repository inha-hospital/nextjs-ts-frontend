import Head from "next/head";
import NavTop from "components/ui/nav-top";
import { Box } from "@radix-ui/themes";

interface LayoutProps {
    children: React.ReactNode;
    depth?: string;
}
const LayoutPages: React.FC<LayoutProps> = ({ children, depth }) => {
    return (
        <>
            <Head>
                <title>inha hospital</title>
                <meta name="description" content="인하대 긴급수혈" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            {depth === "main" ? (
                <Box className="layout layout-main">
                    <NavTop />
                    {children}
                </Box>
            ) : depth === "sub" ? (
                <Box className="layout layout-sub">{children}</Box>
            ) : (
                <Box className="layout">{children}</Box>
            )}
        </>
    );
};
export default LayoutPages;
