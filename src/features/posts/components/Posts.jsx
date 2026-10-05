import { Alert, Card, List, Spin, Typography } from "antd";
import ConsoleLogger from "../../../components/Console.Logger";
import { Users } from "../../users/components/Users";
import "../../../css/posts.css";
import { Link } from "react-router-dom";

export function Posts({ posts, users, isLoading, error, helloMessage }) {
  return (
    <>
      <ConsoleLogger message={helloMessage} componentName="Posts" />

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
        <List
          className="posts-list"
          dataSource={posts}
          renderItem={(post) => {
            const user = users.find(
              (candidate) => candidate.id === post.userId,
            );

            return (
              <>
                <List.Item>
                  <Link to={`/posts/${post.id}`} className="post-card-link">
                    <Card
                      style={{
                        borderRadius: "20px",
                        color: "blue",
                        borderColor: "#5aaee6",
                        paddingTop: "5px",
                      }}
                      className="post-card"
                      title={
                        <div>
                          <Users user={user} helloMessage={helloMessage} />
                          <Typography.Title
                            level={4}
                            ellipsis={{ rows: 2 }}
                            style={{ margin: "3px" }}
                          >
                            {post.title}
                          </Typography.Title>
                        </div>
                      }
                      hoverable
                    >
                      <Typography.Paragraph ellipsis={{ rows: 3 }}>
                        {post.body}
                      </Typography.Paragraph>
                    </Card>
                  </Link>
                </List.Item>
              </>
            );
          }}
        />
      )}
    </>
  );
}
