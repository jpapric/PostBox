import { useEffect, useState } from "react";
import getPosts from "../api/getPosts";
import { Posts } from "./Posts";
import ConsoleLogger from "../../../components/Console.Logger";

export function PostsContainer({ helloMessage }) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        const res = await getPosts();
        setPosts(res);
      } catch (requestError) {
        setError(requestError.message);
      }
    }

    setIsLoading(false);
    loadPosts();
  }, []);

  return (
    <>
      <ConsoleLogger message={helloMessage} componentName="PostsContainer" />
      <Posts
        posts={posts}
        isLoading={isLoading}
        error={error}
        helloMessage={helloMessage}
      />
    </>
  );
}
