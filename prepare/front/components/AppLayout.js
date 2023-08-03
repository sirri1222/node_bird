const AppLayout = ({children})=>{
    return <div>
        <div>
            <Link href="/">노드버드</Link>
            <Link href="/profile">프로필</Link>
            <Link href="/signup">회원가입</Link>
        </div>
        {children}
    </div>
};
AppLayout.propsTypes = {
    children: propsTypes.node.isRequired,
}
export default AppLayout;