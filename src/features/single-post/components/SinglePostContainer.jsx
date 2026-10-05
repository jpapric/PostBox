import { useEffect, useState } from "react";
import getPostById from "../api/getPostById";
import getUsers from "../../users/api/getUsers";
import { SinglePost } from "./SinglePost";
import { useParams } from "react-router-dom";
import ConsoleLogger from "../../../components/Console.Logger";

export function SinglePostContainer({ helloMessage }) {
  const { postId } = useParams();
  const [singlePostData, setSinglePostData] = useState();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);

      try {
        const [singlePostsData, usersData] = await Promise.all([
          getPostById(postId),
          getUsers(),
        ]);
        setSinglePostData(singlePostsData);
        setUsers(usersData);
      } catch (requestError) {
        setError(requestError.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, [postId]);

  return (
    <>
      <ConsoleLogger
        message={helloMessage}
        componentName="SinglePost Container"
      />
      <SinglePost
        singlePostData={singlePostData}
        users={users}
        isLoading={isLoading}
        error={error}
        helloMessage={helloMessage}
      />
    </>
  );
}
