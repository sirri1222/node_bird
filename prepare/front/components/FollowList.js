import { Button, List } from "antd";

List
const FollowList = ({header, data})=>{
    return
    <List 
    size="small"
    style={{marginBottom: 20}}
    grid={{gutter: 4,xs:2, md:3}}
    header={<div>header</div>}
    loadMore={<div style={{textAlign: 'center', margin:'10px 0'}}
    bordered
dataSource = {data}
renderItem = {(item)=>(
    <List.Item style={{marginTop:20}}></List.Item>
)}
><Button>더보기</Button> </div>} />

}

export default FollowList;