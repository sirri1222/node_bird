import {Button, Form, Input} from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import Link from "next/dist/client/link";
import { useCallback, useState } from "react";
import styled from 'styled-components'



const ButtonWrapper = styled.div`
margin-top : 10px `
const LoginForm = ({setisLoggedIn})=>{
    const [id, setId] =useState('')
    const [password, setPassword] =useState('')
    // 컴포넌트에 PROPS로 넘기는함수는 usecallback 사용을 해라 최적화
    const onChangeaId =useCallback((e)=>{ 
        setId(e.target.value);
    },[])
    const onChangePassword =useCallback((e)=>{ 
        setPassword(e.target.value);
    },[])
    const onSubmitForm = useCallback(()=>{
        console.log(id, password);
        setisLoggedIn(true);

    },[id, password])
    
    return <Form onFinish={onSubmitForm}>
        <div>
            <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeaId} required />
        </div>
        <div>
            <label htmlFor="user-id">비밀번호</label>
        <br />
        <Input name="user-passowrd" value={password} onChange={onChangePassword} required />
        </div>
        <ButtonWrapper>
            <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
       <Link href="/signup"><a><Button>회원가입</Button></a></Link>
        </ButtonWrapper>
        </Form>
}

export default LoginForm;