import './Footer.css';
import logo from './imagens/Logo.png';
import FacebookIcon from './imagens/FacebookIcon.png';
import GithubIcon from './imagens/GithubIcon.png';
import InstagramIcon from './imagens/InstagramIcon.png';
import LinkedInIcon from './imagens/LinkedInIcon.png';
import TwitterIcon from './imagens/TwitterIcon.png';

function Footer() {
    return (
        <footer className='Footer'>
            <div className="section1">
                <img className='logo' src={logo} alt=" " />

                <div className='MenuSection1'>
                    <a href='@'>Support</a>
                    <a href='@'>Term of service</a>
                    <a href='@'>License</a>  
                </div>
            </div>

            <div className="section2">
                <div className='MenuSection2'>
                    <a href='@'>Auctions</a>
                    <a href='@'>Roadmap</a>
                    <a href='@'>Discover</a>
                    <a href='@'>Community</a>
                </div>
                <div>
                    <button type='button' className = 'ButtonSection2'>My account</button>
                </div>
                <div className = 'IconsSection2'>
                    <img className='icon' src={FacebookIcon} alt=" " />
                    <img className='icon' src={GithubIcon} alt=" " />
                    <img className='icon' src={InstagramIcon} alt=" " />
                    <img className='icon' src={LinkedInIcon} alt=" " />
                    <img className='icon' src={TwitterIcon} alt=" " />
                </div>
            </div>

            <div className="section3">
                <div className = 'TextSection3'>
                    Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis.
                </div>    

                <div className = 'DivMainSection3'>
                <form action="" method="post" className = 'FormSection3'>
                    <input type="text" name="pesquisa" className = 'inputText' placeholder="Newsletter"/>

                    <input type="submit" value="Sign in"  className = 'inputSubmit'/>
                </form>
                </div>
               
            </div>       
        </footer>
    );
}

export default Footer;