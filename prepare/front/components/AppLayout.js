import PropTypes from 'prop-types';
import Link from 'next/link'
import { Col, Menu, Row } from 'antd';

const AppLayout = ({children})=>{
    return <div>
      <Menu mode="horizontal">          
            <Menu.Item>
                 <Link href="/">
                <a>노드버드</a></Link>
                </Menu.Item>             
            <Menu.Item> 
                 <Link href="/profile"><a>프로필</a></Link>
                 </Menu.Item>              
            <Menu.Item> 
                 <Link href="/signup"><a>회원가입</a></Link>
                 </Menu.Item> 
      </Menu>

        <Row gutter={6}>
<Col xs={24} md={6}>왼쪽메뉴</Col>
<Col xs={24} md={12}> {children}</Col>
<Col xs={24} md={6}>오른쪽메뉴
<a href='' target='_blank' rel=''></a></Col>


        </Row>
        {children}
    </div>
};
AppLayout.PropTypes = {
    children: PropTypes.node.isRequired,
};
export default AppLayout;