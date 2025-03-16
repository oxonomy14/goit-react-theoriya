import { useState } from 'react'
import reactLogo from '../assets/react.svg'
//import viteLogo from 'vite.svg'
import Product from './Product'
import './App.css'

// src/App.jsx


  
  export default function App() {
    return (
      <div>
        <h1>Products</h1>
  
        <Product />
        <Product />
        <Product />
      </div>
    );
  }
  