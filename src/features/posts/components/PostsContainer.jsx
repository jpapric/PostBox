import { useEffect, useMemo, useState } from "react";
import getPosts from "../api/getPosts";
import getUsers from "../api/getUsers";
import { Posts } from "./Posts";
import ConsoleLogger from "../../../components/ConsoleLogger";
import { Input } from "antd";

export function PostsContainer({ helloMessage }) {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);

      try {
        const [postsData, usersData] = await Promise.all([
          getPosts(),
          getUsers(),
        ]);
        setPosts(postsData);
        setUsers(usersData);
      } catch (requestError) {
        setError(requestError.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  const filteredPosts = useMemo(() => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    if (!normalizedSearchTerm) {
      return posts;
    }

    return posts.filter((post) => {
      const user = users.find((candidate) => candidate.id === post.userId);

      return (
        post.title.toLowerCase().includes(normalizedSearchTerm) ||
        post.body.toLowerCase().includes(normalizedSearchTerm) ||
        user?.name?.toLowerCase().includes(normalizedSearchTerm)
      );
    });
  }, [posts, searchTerm, users]);

  return (
    <>
      <ConsoleLogger message={helloMessage} componentName="PostsContainer" />
      <div style={{ maxWidth: 720, margin: "0 auto 20px" }}>
        <Input
          size="large"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Posts
        posts={filteredPosts}
        users={users}
        isLoading={isLoading}
        error={error}
        helloMessage={helloMessage}
      />
    </>
  );
}
