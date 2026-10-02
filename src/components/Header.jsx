import { Typography } from "antd";
import ConsoleLogger from "./Console.Logger";

export default function Header({ helloMessage }) {
  return (
    <header className="posts-header">
      <ConsoleLogger helloMessage componentName="Header" />
      <Typography.Title level={2}>Posts</Typography.Title>
    </header>
  );
}
