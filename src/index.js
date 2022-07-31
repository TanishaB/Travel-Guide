import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import {Container, Nav, Navbar} from 'react-bootstrap';
import About from './About';
import ContactUs from './ContactUs';
import Home from './Home';
import Destination from './Destination';
import East from './East';
import West from './West';
import Central from './Central';
import NorthEast from './NorthEast';
import North from './North';
import South from './South';

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

*/

const routing=(
  <>
   <BrowserRouter>
   
      <Navbar bg="warning" variant="dark">
        <Container >
          <Navbar.Brand href="/"  className='text-dark'>Travel Guide</Navbar.Brand>
          <Nav className="me-auto">
          <NavLink id='navlink' to='/'>Home</NavLink>&nbsp;&nbsp;
          <NavLink id='navlink' to='/Destination'>Destination</NavLink>&nbsp;&nbsp;
          <NavLink id='navlink' to='/About'>About Us</NavLink>&nbsp;&nbsp;
          <NavLink id='navlink' to='/ContactUs'>Contact Us</NavLink>&nbsp;&nbsp;
          
          </Nav>
        </Container>
      </Navbar>

    <Routes>
      <Route path='/'element={<Home/>}></Route>
      <Route path='Destination'element={<Destination/>}></Route>
      <Route path='About'element={<About/>}></Route>
      <Route path='ContactUs'element={<ContactUs/>}></Route>
      <Route path="East" element={<East/>}></Route>
      <Route path="West" element={<West/>}></Route>
      <Route path="Central" element={<Central/>}></Route>
      <Route path="NorthEast" element={<NorthEast/>}></Route>
      <Route path="North" element={<North/>}></Route>
      <Route path="South" element={<South/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
)


ReactDOM.render(routing, document.getElementById('root'));
reportWebVitals();

