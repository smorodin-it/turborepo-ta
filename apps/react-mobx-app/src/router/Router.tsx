import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpPage from '../pages/SignUpPage';

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<SignUpPage />} />
        <Route path={'*'} element={<div>Nothing here...</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
