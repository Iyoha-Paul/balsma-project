import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ""}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<NotFound />} />

        {/* <Route path="/create" element={<TodoInput />} /> */}
        {/* <Route path="/edit/:id" element={<EditTodo />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
