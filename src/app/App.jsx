import { createRoot } from "react-dom/client";
import { PostsContainer } from "../features/posts/components/PostsContainer";
import ConsoleLogger from "../components/Console.Logger";
import { StrictMode } from "react";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import { SinglePostContainer } from "../features/single-post/components/SinglePostContainer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <StrictMode>
          <ConsoleLogger componentName="App" />
          <Header />
          <Routes>
            <Route path="/" element={<PostsContainer />} />
            <Route path="/posts" element={<PostsContainer />} />
            <Route path="/posts/:postId" element={<SinglePostContainer />} />
          </Routes>
        </StrictMode>
      </BrowserRouter>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
