
import React, { Component } from 'react'
import './App.css'

import Introductory from './Component/Introductory'

import Navbar  from './Component/Navbar'



class App extends Component {
render() { 
  return ( 
    <div>
        <Navbar/>
        <Introductory/>
       
       

    </div>  
   );

}}


export default App;