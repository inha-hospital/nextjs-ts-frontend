import * as Form from "@radix-ui/react-form";
import { Button, TextField, Text } from "@radix-ui/themes";

const Root = Form.Root;
interface FieldProps {
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  children?: React.ReactNode;
}
function Field({
  name,
  type = "text",
  required = false,
  placeholder = "",
  children
}: FieldProps) {
  return (
    <Form.Field name={name}>
      {children}
      <Form.Control asChild>
        <TextField.Input type={type} required={required} placeholder={placeholder} />
      </Form.Control>
    </Form.Field>
  )
}
interface MessageProps extends Form.FormMessageProps {
  message: string;
}
function Message({ message, ...props }: MessageProps) {
  return (
    <Form.Message match={props.match} asChild>
      <Text color="red">{message}</Text>
    </Form.Message>
  )
}
interface SubmitProps {
  text: string;
}
function Submit({ text }: SubmitProps) {
  return (
    <Form.Submit asChild>
      <Button type="submit">{text}</Button>
    </Form.Submit>
  )
}

export {
  Root,
  Field,
  Message,
  Submit
}