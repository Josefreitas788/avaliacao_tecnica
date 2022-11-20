import './TextImageSection.css'
import imagem from './imagens/imagem.png';

function TextImageSection(){
    return(
        <div className='SectionMain'>
            <div className='SectionLeft'>
                <div className='DivText'>
                    <p className='paragraph1'>Overline</p>

                    <h1>Sapien ipsum scelerisque convallis fusce</h1>

                    <p className='paragraph2'>Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
                </div>

                <div className="DivButton">
                    <button type='button' className = 'buttonLeft'>Get started</button>
                    <button type='button' className = 'buttonRight'>Learn more</button>
                </div>
            </div>

            <div className='SectionRight'>
                <img src={imagem} alt=" " />
            </div>
        </div>
    );
}

export default TextImageSection;