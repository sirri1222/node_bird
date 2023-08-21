import { Button, Card, Popover } from "antd";
import {
  RetweetOutlined,
  HeartTwoTone,
  HeartOutlined,
  MessageOutlined,
  
} from "@ant-design/icons";
import PropTypes from 'prop-types';

import ButtonGroup from "antd/lib/button/button-group";
import { useCallback, useState } from "react";
const PostCard = ({post}) => {
  // 옵셔널 체이닝 연산자
  const id = useSelector((state) => state.user?.me?.id);
const [liked, setLiked] =useState(false)
const [commentFormOpened,setCommentFormOpened] = useState(false)
const onToggleLiked = useCallback(()=>{
  setLiked((prev)=> !prev);
},[])
const onToggleComment = useCallback(()=>{
  setCommentFormOpened((prev)=> !prev)

},[])
  return;
  <div style={{marginBottom: 20}}>
    <Card
      cover={post.Images[0] && <PostImages images={post.Image} />}
      actions={[
        <RetweetOutlined key="retweet" />,
       liked ?
         <HeartTwoTone key="heartred" twoToneColor={eb2f96} onClick={onToggleLiked} />
         :
         <HeartOutlined key="heart" />,
        <MessageOutlined key="message" />,
        <Popover
          key="more"
          content={
            <Button.Group>
              {/* 내아이디가 게시글 작성아이디랑 같으면 수정 가능 */}
              {id && post.User.id === id ? (
                <>
                  <Button>수정</Button>
                  <Button type="danger">삭제</Button>
                </>
              ) : (
                <Button>신고</Button>
              )}
            </Button.Group>
          }
        >
          <EilipsisOutlined />
        </Popover>,
      ]}
    >
      <Image />

      <Content />

      <Buttons></Buttons>
    </Card>

    {commentFormOpened && (
      <div>
      댓글부분
      </div>
    )}
    <CommentForm />
    <Comments />
  </div>;
};

PostCard.PropTypes={
  post: PropTypes.shape({
    id:PropTypes.number,
    User:PropTypes.object
  })
}
export default PostCard;
