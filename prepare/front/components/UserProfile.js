import { Avatar, Card } from "antd";
import {useCallback} from 'react'
const UserProfile = ({setisLoggedIn})=>{

    const onLogOut = useCallback(()=>{
        setisLoggedIn(false)
    },[])
    return <Card
    actions={
        [
            <div key="twit">짹짹<br />0</div>,
            <div key="followings">팔로잉<br />0</div>,
            <div key="folloer">팔로워<br />0</div>
        ]
    }
    > 
    <Card.Meta
    avatar={<Avatar>hyunji</Avatar>}
    title="HYUNJI SON" />
        <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
}

export default UserProfile;