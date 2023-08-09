import { Form } from "antd";

const PostForm = () => {
  return (
    <Form
      style={{ margin: "10px 0 20px" }}
      encType="multipart/form-data"
      onFinish={onSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={148}
      ></Input.TextArea>
    </Form>
  );
};

export default PostForm;
