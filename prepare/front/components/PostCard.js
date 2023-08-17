import { Button, Card, Popover } from "antd";
import {
  RetweetOutlined,
  EilipsisOutlined,
  HeartOutlined,
  MessageOutlined,
} from "@ant-design";
import useSelection from "antd/lib/table/hooks/useSelection";
import ButtonGroup from "antd/lib/button/button-group";
const PostCard = () => {
  // 옵셔널 체이닝 연산자
  const id = useSelector((state) => state.user?.me?.id);

  return;
  <div>
    <Card
      cover={post.Images[0] && <PostImages images={post.Image} />}
      actions={[
        <RetweetOutlined key="retweet" />,
        <HeartOutlined key="heart" />,
        <MessageOutlined key="message" />,
        <Popover
          key="more"
          content={
            <Button.Group>
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
    <CommentForm />
    <Comments />
  </div>;
};

export default PostCard;
