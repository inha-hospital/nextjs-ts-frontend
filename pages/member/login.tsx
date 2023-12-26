import { Box, Button, Heading, TextField } from "@radix-ui/themes";
import * as Form from "@radix-ui/react-form";

const login = () => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  }
  return (
    <Box>
      <Heading size='6'>로그인</Heading>
      <Form.Root onSubmit={onSubmit}>
        <Form.Field name="email">
          <Form.Message match="valueMissing" color="red">
            이메일을 입력해주세요.
          </Form.Message>
          <Form.Message match="typeMismatch">
            이메일 형식이 아닙니다.
          </Form.Message>
          <Form.Control asChild>
            <TextField.Input type="email" required placeholder="이메일" />
          </Form.Control>
        </Form.Field>
        <Form.Field name="password">
          <Form.Message match="valueMissing">
            비밀번호를 입력해주세요.
          </Form.Message>
          <Form.Control asChild>
            <TextField.Input type="password" required placeholder="비밀번호" />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <Button type="submit" >Submit</Button>
        </Form.Submit>
      </Form.Root>
    </Box>
  );
};
export default login;
