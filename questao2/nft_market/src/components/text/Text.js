import './Text.css';
import logo from './imagens/Frame.png'
import squares from './imagens/Squares.png'
import Nike from './imagens/Nike.png'
import Ritter_Sport from './imagens/Ritter_Sport.png'
import Adidas from './imagens/Adidas.png'
import New_Holland from './imagens/New_Holland.png'

function Text() {
    return (
        <><div className='Text'>
            <div className='subTitle'>
                Non Fungible Tokens
            </div>
            <div className='logo'>
                <img className='square' src={squares} alt=" " />
                <img className='logo' src={logo} alt=" " />
            </div>
            <div className='subTitle'>
                Discover, collect and sell
            </div>
        </div>
        <div className='logotypes'>
            <img src={Nike} alt="Nike"></img>
            <img src={Ritter_Sport} alt=" "></img>
            <img src={Adidas} alt=" "></img>
            <img src={New_Holland} alt=" "></img>        
        </div>
        </>

    );
}

export default Text;


