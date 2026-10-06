import { Typography } from "antd";
import ConsoleLogger from "./ConsoleLogger";
import { Link } from "react-router-dom";

export default function Header({ helloMessage }) {
  return (
    <header className="posts-header">
      <ConsoleLogger message={helloMessage} componentName="Header" />
      <Link to="/" style={{ textDecoration: "none" }}>
        <Typography.Title
          level={2}
          style={{ textAlign: "center", width: "100%", color: "#5aaee6" }}
        >
          PostBox
        </Typography.Title>
      </Link>
    </header>
  );
}
