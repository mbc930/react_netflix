import React from 'react';
import Nav from './components/Nav.js';
import Footer from './components/Footer';
import './App.css'
import {Outlet, Route, Routes} from 'react-router-dom';
import MainPage from './pages/Mainpage/index.js';
import DetailPage from './pages/Detailpage/index.js';
import SearchPage from './pages/Searchpage/index.js';


function Layout() {
  return (
    <div>
      <Nav></Nav>

      <Outlet></Outlet>
      
      <Footer></Footer>

    </div>
  );
}

function App() {
  return(
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<MainPage></MainPage>}></Route>
          <Route path=':movieId' element={<DetailPage></DetailPage>}></Route>
          <Route path='search' element={<SearchPage></SearchPage>}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
