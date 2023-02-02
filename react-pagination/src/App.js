import React, { useState } from "react";
import Pagination from "./components/Pagination";
import { Form, Route, Routes } from "react-router-dom";
import Page from "./components/Page";

function App() {
  const [currentPage, setCurrentPage] = useState();
  return (
    <div className="">
      <Routes>
        <Route path="/page/:id" element={<Page />} />
      </Routes>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
