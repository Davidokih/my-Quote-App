import React from 'react'
import Home from './components1/Home/Home';
import PostPage from './components1/PostPage/PostPage';
import Header from './components1/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStates from './components1/GlobalStates';

function App() {
  return (
    <GlobalStates>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/postPage' element={<PostPage />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </GlobalStates>
  );
}

export default App;
