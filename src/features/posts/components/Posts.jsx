import { Alert, Card, Empty, List, Spin, Typography } from "antd";
import ConsoleLogger from "../../../components/Console.Logger";
import { Users } from "../../users/components/Users";
import "../../../css/posts.css";

export function Posts({ posts, users, isLoading, error, helloMessage }) {
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
          className="posts-list"
          grid={{ gutter: 16 }}
          dataSource={posts}
          renderItem={(post) => {
            const user = users.find(
              (candidate) => candidate.id === post.userId,
            );

            return (
              <>
                <List.Item>
                  <Users user={user} helloMessage={helloMessage} />
                  <Card
                    className="post-card"
                    title={
                      <Typography.Title level={4} ellipsis={{ rows: 2 }}>
                        {post.title}
                      </Typography.Title>
                    }
                    hoverable
                  >
                    <Typography.Paragraph ellipsis={{ rows: 2 }}>
                      {post.body}
                    </Typography.Paragraph>
                  </Card>
                </List.Item>
              </>
            );
          }}
        />
      )}
    </>
  );
}
