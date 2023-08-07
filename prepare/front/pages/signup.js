import { Button, Checkbox, Form, Input } from "antd";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import useinput from "../hooks/useinput";
import { useCallback, useState } from "react";

const Signup = () => {
  const [id, onChangeId] = useinput("");

  const [password, onChangePassword] = useinput("");
  const [passwordCheck, onPasswordCheck] = useState("");
  const [passwordError, onPasswordError] = useState(false);

  const [nickname, onChangeNickname] = useinput("");
  const onChangePasswordCheck = useCallback(() => {});
  const onSubmit = useCallback(
    (e) => {
      if (password !== passwordCheck) {
        return onPasswordError(true);
        if (!term) {
          return setTermError(true);
        }
      }
    },
    [password, passwordCheck, term]
  );
  const [term, setTerm] = useState("");
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  });
  return (
    <div>
      <AppLayout>
        <Head>
          <title>회원가입 페이지</title>
        </Head>
        <Form onFinish={onSubmit}>
          <div>
            <label htmlFor="user-id">아이디</label>
            <br />
            <Input
              name="user-id"
              value={id}
              required
              onChange={onChangeId}
            ></Input>
          </div>
          <div>
            <label htmlFor="user-nickname">닉네임</label>
            <br />
            <Input
              name="user-nickname"
              value={nickname}
              required
              onChange={onChangeNickname}
            ></Input>
          </div>
          <div>
            <label htmlFor="user-password">비밀번호</label>
            <br />
            <Input
              name="user-password"
              value={password}
              required
              onChange={onChangePassword}
            ></Input>
          </div>
          <div>
            <label htmlFor="user-passwordcheck">비밀번호확인</label>
            <br />
            <Input
              name="user-passwordcheck"
              value={passwordCheck}
              required
              onChange={onChangePasswordCheck}
            ></Input>
          </div>
          <div>
            <Checkbox name="user-term" checked={term} onChange={onChangeTerm}> 
            개인정보 수집에 동의합니다</Checkbox>
            {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
          </div>
          <div style={{marginTop: 10}}>
            <Button type="primary" htmlType="submit"></Button>
          </div>
        </Form>
      </AppLayout>
    </div>
  );
};

export default Signup;
