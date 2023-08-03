import PropTypes from 'prop-types';
import Link from 'next/link'
import {Menu} from 'antd'
const AppLayout = ({children})=>{
    return <div>
        <Menu node="horizontal">
            <Menu.item>
                 <Link href="/"><a>노드버드</a></Link>
                 </Menu.item>
           
            <Menu.item>
                <Link href="/profile"><a>프로필</a></Link>
                </Menu.item>

            <Menu.item>
                <Link href="/signup"><a>회원가입</a></Link>
                </Menu.item>
            
        </Menu>
        {children}
    </div>
};
AppLayout.PropTypes = {
    children: PropTypes.node.isRequired,
};
export default AppLayout;