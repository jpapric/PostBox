import ConsoleLogger from "../../../components/ConsoleLogger";
import {
  Alert,
  Button,
  Spin,
  Typography,
  List,
  Divider,
  Card,
  Avatar,
  Tag,
} from "antd";
import { ArrowLeftOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export function SinglePost({
  singlePostData,
  usersData,
  isLoading,
  error,
  helloMessage,
}) {
  const user = usersData.find(
    (candidate) => candidate.id === singlePostData?.userId,
  );

  const comments = singlePostData?.comments ?? [];
  return (
    <>
      <ConsoleLogger message={helloMessage} componentName="SinglePost" />
      <Link to="/">
        <Button icon={<ArrowLeftOutlined />}>Back to posts</Button>
      </Link>

      {isLoading ? (
        <Spin
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "300px",
          }}
        />
      ) : error ? (
        <Alert
          type="error"
          showIcon
          message="Failed to load posts"
          description={error}
        />
      ) : (
        <div style={{ maxWidth: 760, margin: "25px auto", padding: "0 16px" }}>
          <>
            <Card
              style={{
                borderRadius: "20px",
                color: "blue",
                borderColor: "#5aaee6",
              }}
            >
              <div>
                <Avatar
                  size="small"
                  icon={<UserOutlined />}
                  style={{
                    margin: 5,
                    color: "#0958D9",
                    backgroundColor: "#E6F4FF",
                    borderColor: "#5aaee6",
                  }}
                />
                <Tag color="blue">{user?.name ?? "Unknown user"}</Tag>
              </div>
              <Typography.Title level={3} style={{ marginTop: 0 }}>
                {singlePostData.title}
              </Typography.Title>

              <Typography.Paragraph
                style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 0 }}
              >
                {singlePostData.body}
              </Typography.Paragraph>
            </Card>

            <Divider>Comments ({comments.length})</Divider>

            <Card>
              <List
                dataSource={comments}
                locale={{ emptyText: "No comments yet" }}
                renderItem={(comment) => (
                  <List.Item key={comment.id}>
                    <div>
                      <Typography.Text strong>{comment.name}</Typography.Text>

                      <Typography.Text
                        type="secondary"
                        style={{ margin: "10px" }}
                      >
                        {comment.email}
                      </Typography.Text>
                      <Typography.Paragraph style={{ marginTop: 8 }}>
                        {comment.body}
                      </Typography.Paragraph>
                    </div>
                  </List.Item>
                )}
              />
            </Card>
          </>
        </div>
      )}
    </>
  );
}
