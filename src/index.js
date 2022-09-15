import React from 'react';
import ReactDOM from 'react-dom/client';
// Routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Store
import { Provider } from 'react-redux';
import { store } from './redux/configStore';

import App from './App';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Login from './pages/Login';
import Search from './pages/Search';
import Carts from './pages/Carts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<App />}>
            <Route index element={<Home/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='profile' element={<Profile/>}/>
            <Route path='login' element={<Login/>} />
            <Route path='search' element={<Search/>} />
            <Route path='carts' element={<Carts/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
);

