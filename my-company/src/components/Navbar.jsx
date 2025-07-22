import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={
        {backgroundColor:'#fdf4e6ff', 
        color:'#333333', 
        display: 'flex', 
        justifyContent:'space-between', 
        textAlign: 'center', 
        textDecoration: 'none'}}>
        <h1 style={{marginLeft: '10px', padding: '0' , color:'#333333', fontFamily:'times-new-roman'}}>My Company</h1>
        <Link style={{textDecoration: 'none', color:'#333333', marginTop:'30px', fontFamily:'poppins, sans-serif', fontSize:'18px'}} to="/Home">Home</Link>
        <Link style={{textDecoration: 'none', color:'#333333', marginTop:'30px', fontFamily:'poppins, sans-serif', fontSize:'18px'}} to="/About">About</Link>
        <Link style={{textDecoration: 'none', color:'#333333', marginTop:'30px', fontFamily:'poppins, sans-serif', fontSize:'18px'}} to="/Services">Services</Link>
        <Link style={{textDecoration: 'none', color:'#333333', marginTop:'30px', paddingRight:'20px', fontFamily:'poppins, sans-serif', fontSize:'18px'}} to="/Contact">Contact</Link>      
    </div>
  )
}

export default Navbar
