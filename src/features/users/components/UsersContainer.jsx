import { useEffect, useState } from "react";
import getUsers from "../api/getPosts";
import { Users } from "./Users";
import ConsoleLogger from "../../../components/Console.Logger";

export function UsersContainer({ helloMessage }) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadUsers() {
      try {
        const res = await getUsers();
        setUsers(res);
      } catch (requestError) {
        setError(requestError.message);
      }
    }

    setIsLoading(false);
    loadUsers();
  }, []);

  return (
    <>
      <ConsoleLogger message={helloMessage} componentName="UsersContainer" />
      <Users
        users={users}
        isLoading={isLoading}
        error={error}
        helloMessage={helloMessage}
      />
    </>
  );
}
