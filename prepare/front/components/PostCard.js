import { Avatar, Button, Card, Comment, List, Popover } from "antd";
import {
  RetweetOutlined,
  HeartTwoTone,
  HeartOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import PropTypes from "prop-types";

import ButtonGroup from "antd/lib/button/button-group";
import { useCallback, useState } from "react";
const PostCard = ({ post }) => {
  // 옵셔널 체이닝 연산자
  const id = useSelector((state) => state.user?.me?.id);
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const onToggleLiked = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);
  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);
  return;
  <div style={{ marginBottom: 20 }}>
    <Card
      cover={post.Images[0] && <PostImages images={post.Image} />}
      actions={[
        <RetweetOutlined key="retweet" />,
        liked ? (
          <HeartTwoTone
            key="heartred"
            twoToneColor={eb2f96}
            onClick={onToggleLiked}
          />
        ) : (
          <HeartOutlined key="heart" />
        ),
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
        <CommentForm post={post} />
        <List
          header={` ${post.Comments.length}개의 댓글`}
          itemLayout="horizontal"
          dataSource={post.Comments}
          renderItem={(item) => (
            <li>
              {" "}
              <Comment
                author={item.User.nickname}
                avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                content={item.content}
              ></Comment>
            </li>
          )}
        ></List>
      </div>
    )}
  </div>;
};

PostCard.PropTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
  }),
};
export default PostCard;
