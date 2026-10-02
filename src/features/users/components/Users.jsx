import { Tag } from "antd";
import ConsoleLogger from "../../../components/Console.Logger";

export function Users({ user, helloMessage }) {
  return (
    <>
      <ConsoleLogger message={helloMessage} componentName="Users" />
      <Tag color="blue">User: {user?.name ?? "Unknown user"}</Tag>
    </>
  );
}
