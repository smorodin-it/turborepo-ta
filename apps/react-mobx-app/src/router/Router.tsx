import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

interface RouterProps {
  a?: any;
}

const Router = (props: RouterProps): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<>TEST</>} />
        <Route path={"*"} element={<div>Nothing here...</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
