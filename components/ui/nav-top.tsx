import Link from "next/link";
import { Button, Flex, Text } from "@radix-ui/themes";

const NavTop = () => {
    return (
        <Flex className="nav-top" align="center">
            <Link href="/">
                <Text as="p" className="logo" mr="9">
                    INHA BLOOD
                </Text>
            </Link>
            <Flex className="menus" gap="5" mr="auto">
                <Link href="/">홈</Link>
                <Link href="/counter">카운터</Link>
                <Link href="/board">게시판</Link>
            </Flex>
            <Flex className="users" gap="1">
                <Link href="/member/login">
                    <Button size="3">로그인</Button>
                </Link>
                <Link href="/member/signup">
                    <Button size="3">회원가입</Button>
                </Link>
            </Flex>
        </Flex>
    );
};
export default NavTop;
