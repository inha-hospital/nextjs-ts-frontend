import Link from "next/link";

const Nav = () => {
    return (
        <>
            <div>네비게이션</div>
            <Link href="/">홈</Link>
            <Link href="/member/login">로그인</Link>
            <Link href="/member/signup">회원가입</Link>
        </>
    );
};
export default Nav;
