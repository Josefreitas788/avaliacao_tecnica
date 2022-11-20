import './Header.css';
import squares from './imagens/Squares.png'
import Vector from './imagens/Vector.png'
import Vector2 from './imagens/Vector2.png'
import Nike from './imagens/Nike.png'
import Ritter_Sport from './imagens/Ritter_Sport.png'
import Adidas from './imagens/Adidas.png'
import New_Holland from './imagens/New_Holland.png'

function Header() {
    return (
        <div className='Text'>
            <div className='subTitle'>
                Non Fungible Tokens
            </div>
            <div className='TextCenter'>
                <img className='square' src={squares} alt=" " />
                <div className='logo'>
                    <div className='logoIcon'>
                        <h1 className='title'>A new NFT</h1>
                        <img src={Vector} alt="Imagem"></img>
                    </div>
                    <div className='logoIcon'>
                        <img src={Vector2} alt="Imagem"></img>
                        <h1 className='title'>Experience</h1>
                    </div>
                </div>
            </div>
            <div className='subTitle'>
                Discover, collect and sell
            </div>
            <div className='logotypes'>
                <img src={Nike} alt="Nike"></img>
                <img src={Ritter_Sport} alt="Ritter_Sport"></img>
                <img src={Adidas} alt="Adidas"></img>
                <img src={New_Holland} alt="New_Holland"></img>
            </div>
        </div>
    );
}
export default Header;