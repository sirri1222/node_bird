import { Form, Input } from "antd";
import AppLayout from "../components/AppLayout";
import Head from "next/head";

const Signup = () => {

    const [id, setId]=useState('')
    const onChangeId = useCallback((e)=>{
        setId(e.target.value)
    },[])
    const [password, setPassword]=useState('')
    const onChangePassword = useCallback((e)=>{
        setPassword(e.target.value)
    },[])
    const [Nickname, setNickname]=useState('')
    const onChangeNickname = useCallback((e)=>{
        setNickname(e.target.value)
    },[])
  const onSubmit = useCallback(() => {}, []);
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
        </Form>
      </AppLayout>
    </div>
  );
};

export default Signup;
