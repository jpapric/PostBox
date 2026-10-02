import { Alert, Card, Empty, List, Spin, Typography } from "antd";
import ConsoleLogger from "../../../components/Console.Logger";

export function Posts({ posts, isLoading, error, helloMessage }) {
  return (
    <>
      <ConsoleLogger message={helloMessage} componentName="Posts" />
      {isLoading ? (
        <Spin />
      ) : error ? (
        <Alert
          type="error"
          showIcon
          message="Failed to load posts"
          description={error}
        />
      ) : (
        <List
          grid={{ gutter: 16 }}
          dataSource={posts}
          renderItem={(post) => (
            <List.Item>
              <Card
                title={
                  <Typography.Title level={4}>{post.title}</Typography.Title>
                }
                hoverable
              >
                <Typography.Paragraph>{post.body}</Typography.Paragraph>
              </Card>
            </List.Item>
          )}
        />
      )}
    </>
  );
}
