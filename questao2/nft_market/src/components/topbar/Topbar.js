import './Topbar.css';
import logo from './imagens/Logo.png'

function TopBar() { 
 return (
    <div className='Topbar'>

      <div className='Logo'>
        <img src={logo} alt=" " />
      </div>
        
      <div className='Menu'>
        <a href='@'>Auctions</a>
        <a href='@'>Roadmap</a>
        <a href='@'>Discover</a>  
        <a href='@'>Community</a>
      </div>

      <div className="ButtonRight">
        <button type='button' className = 'button1'>Contact</button>
        <button type='button' className = 'button2'>My account</button>
      </div>
      
    </div>
  );
}

export default TopBar;
