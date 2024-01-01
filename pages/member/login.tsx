import { Box, Heading } from "@radix-ui/themes";
import { Root, Field, Message, Submit } from "components/form";

const Login = () => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  }
  return (
    <Box>
      <Heading size='6'>로그인</Heading>
      <Root onSubmit={onSubmit}>
        <Field name="이메일" type="email" required placeholder="이메일">
          <>
            <Message match="valueMissing" message="이메일을 입력해주세요." />
            <Message match="typeMismatch" message="이메일 형식이 아닙니다." />
          </>
        </Field>
        <Field name="비밀번호" type="password" required placeholder="비밀번호">
          <Message match="valueMissing" message="비밀번호를 입력해주세요." />
        </Field>
        <Submit text="로그인" />
      </Root>
    </Box>
  );
};
export default Login;
