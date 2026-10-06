import { createRoot } from "react-dom/client";
import { PostsContainer } from "../features/posts/components/PostsContainer";
import ConsoleLogger from "../components/ConsoleLogger";
import { StrictMode } from "react";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import { SinglePostContainer } from "../features/single-post/components/SinglePostContainer";
import { Routes, Route } from "react-router-dom";

function App() {
  const helloMessage = "Hello from";
  return (
    <>
      <BrowserRouter>
        <StrictMode>
          <ConsoleLogger message={helloMessage} componentName="App" />
          <Header helloMessage={helloMessage} />
          <Routes>
            <Route
              path="/"
              element={<PostsContainer helloMessage={helloMessage} />}
            />
            <Route
              path="/posts"
              element={<PostsContainer helloMessage={helloMessage} />}
            />
            <Route
              path="/posts/:postId"
              element={<SinglePostContainer helloMessage={helloMessage} />}
            />
          </Routes>
        </StrictMode>
      </BrowserRouter>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
