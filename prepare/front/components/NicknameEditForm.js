import { Form, Input } from "antd";
import {useMemo} from 'react'
const NicknameEditForm = ()=>{

    const style = useMemo(()=>({marginBottom:'20px', border:'1px solid #d9d9d9', padding:'20px' }),[])
    return <Form style={style}>
        <Input.Search />
    </Form>
}
export default NicknameEditForm;