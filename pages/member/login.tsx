import { Box, Button, Heading, TextField, Text } from "@radix-ui/themes";
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
          <Form.Message match="valueMissing" asChild>
            <Text color="red">이메일을 입력해주세요.</Text>
          </Form.Message>
          <Form.Message match="typeMismatch" asChild>
            <Text color="red">이메일 형식이 아닙니다.</Text>
          </Form.Message>
          <Form.Control asChild>
            <TextField.Input type="email" required placeholder="이메일" />
          </Form.Control>
        </Form.Field>
        <Form.Field name="password">
          <Form.Message match="valueMissing" asChild>
            <Text color="red">비밀번호를 입력해주세요.</Text>
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
