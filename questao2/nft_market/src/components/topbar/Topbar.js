import React from 'react';
import './Topbar.css';
//import './../../App.css';
import logo from './imagens/Logo.png'

function TopBar() { 
 return (
    <div className='Topbar'>
        
      <div className='Logo'>
        <img src={logo} alt=" " />
      </div>
        
      <div className='Menu'>
        <a href='@'>
          Auctions
        </a>
        
        <a href='@'>
          Roadmap
        
        </a>
        <a href='@'>
          Discover
        </a>  
          
        <a href='@'>
          Community
        </a>  
        
        
      </div>

      <div className="ButtonRight">
        <button type='button'>
          Contact
        </button>
        <button type='button'>
          My account
        </button>
      </div>
    </div>
  );
}

export default TopBar;
