import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import BlogDetail from "./Pages/BlogDetail";
import Favourite from "./Pages/Favourite";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/blog/:postId" element={<BlogDetail />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
