import { useEffect, useState } from "react";
import getPostById from "../api/getPostById";
import getUsers from "../../posts/api/getUsers";
import { SinglePost } from "./SinglePost";
import { useParams } from "react-router-dom";
import ConsoleLogger from "../../../components/ConsoleLogger";

export function SinglePostContainer({ helloMessage }) {
  const { postId } = useParams();
  const [singlePostData, setSinglePostData] = useState();
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);

      try {
        const [singlePostData, usersData] = await Promise.all([
          getPostById(postId),
          getUsers(),
        ]);
        setSinglePostData(singlePostData);
        setUsersData(usersData);
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
        componentName="SinglePostContainer"
      />
      <SinglePost
        singlePostData={singlePostData}
        usersData={usersData}
        isLoading={isLoading}
        error={error}
        helloMessage={helloMessage}
      />
    </>
  );
}
