import './About.css'

// import ProfileImg from '../../assets/50353683 1.png'
import ProfileImg from '../../assets/my_image.jpg'

export default function About(){
    return(
        <>
            <div className='about' id='about'>
                
                    < h2 class='aboutText'>
                        Hi 👋, <br/>
                        My name is 
                        <span className='name'> Rafee&apos;ah Adeola Hussein</span>.
                        I build things for web. I also make the website more interactive with web animations. 
                    I can provide clean code and pixel perfect design. I am good at making responsive design.
                    </h2>


                    <div>
                    <img src={ProfileImg} alt=""className='aboutIMg' />
                </div>

            </div>
            <div className='myCv'>
      <a href="./Rafeeah-Adeola-Hussein-CV.pdf" download>
        <button className='download-button'>Download My Resume</button>
      </a>
    </div>
        </>
    )
}