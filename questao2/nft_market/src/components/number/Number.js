import './Number.css';
import artistIcon from './imagens/ArtistsIcon.png';
import ArtWorksIcon from './imagens/Artworks Icon.png';
import UserIcon from './imagens/UserIcon.png';
import Walleticon from './imagens/WalletIcon.png';
function Number() {
    return (
        <div>
            <hr className='divider'></hr>
            <div className='numbers'>
                <div className='item'>
                    <img className='icon' src={UserIcon} alt=" " />
                    <h1 className='number'>300K</h1>
                    <h1 className='text'>Users Active</h1>
                </div>
                <div className='item'>
                    <img className='icon' src={ArtWorksIcon} alt=" " />
                    <h1 className='number'>52,5K</h1>
                    <h1 className='text'>Artworks</h1>
                </div>
                <div className='item'>
                    <img className='icon' src={artistIcon} alt=" " />
                    <h1 className='number'>17,5K</h1>
                    <h1 className='text'>Artists</h1>
                </div>
                <div className='item'>
                    <img className='icon' src={Walleticon} alt=" " />
                    <h1 className='number'>35.58K</h1>
                    <h1 className='text'>ETH Spent</h1>
                </div>
            </div>
        </div>
    );
}

export default Number;