import logo from './logo.svg';
import './App.css';
import './css/sb-admin-2.min.css'
import SideBar from './sidebar';
import TopBar from './Topbar';
import DashBoard from './dashboard';
import User from './Users';
import{BrowserRouter,Routes,Route} from "react-router-dom"
import CreateUser from './CreateUser';
import Login from './Login';
import Portal from './Portal';
import Products from './Products';
import CreateProduct from './CreateProduct';
import React from 'react';

function App() {
  return (
    
    <BrowserRouter>
    
    <Routes>  
         <Route path="/" element={<Login/>}/>
         <Route path="/portal" element={<Portal/>}>
         <Route path="dashboard" element={<DashBoard/>}/>
         <Route path="users" element={<User/>}/>
         <Route path="createuser" element={<CreateUser/>}/>
         <Route path="products" element={<Products/>} />
         <Route path="createproduct" element={<CreateProduct/>}/>
         </Route>
    </Routes> 
   
   </BrowserRouter>
  );
}

export default App;
