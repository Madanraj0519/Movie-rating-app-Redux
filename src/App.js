import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className='container'>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/movie/:imdbID' Component={MovieDetails}/>
          <Route Component={PageNotFound} />
        </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
