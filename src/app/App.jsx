import { createRoot } from "react-dom/client";
import { PostsContainer } from "../features/posts/components/PostsContainer";
import ConsoleLogger from "../components/Console.Logger";
import { StrictMode } from "react";

function App() {
  return (
    <>
      <StrictMode>
        <ConsoleLogger componentName="App" />
        <PostsContainer />
      </StrictMode>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
