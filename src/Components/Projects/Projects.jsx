import './Projects.css'

import Calculator from '../../assets/face.png'
import Link from '../../assets/akar-icons_link-chain.png'
import GithubP from '../../assets/akar-icons_github-fill.png'
import { FaGithub , FaLink } from 'react-icons/fa'
import RecipeImg from '../../assets/Recipe-image.png'
import QuotesImg from '../../assets/Quote-image.png'

export default function Projects(){
    return(
        <>
            <h3 className='s-h1'> Projects </h3>
            {/* <p className='s-p'>  Things I’ve built so far </p> */}

            <div className='project' id='project'>
              <div className="projectContainer">
                <div className="projectBox">
                    <img
                        src={Calculator}
                        alt= ''
                        className="projectImg"
                    />

                    <div className="card-content">
                        <p className='card-paragraph'>
                           HTML , JavaScript, CSS
                        </p>

                        <div className="card-links">
                        <a href="https://herdeyhorlarh.github.io/myCalculator/" className="cardLink">github <FaGithub className='GithubP'/> </a>
                     <a href="https://github.com/herdeyhorlarh/myCalculator" className="cardLink"> live <FaLink  className='Link'/> </a>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="projectContainer">
                <div className="projectBox">
                    <img
                        src={QuotesImg}
                        alt="Card Image"
                        className="projectImg"
                    />
                    

                    <div className="card-content">
                    <p className='card-paragraph'>
                           HTML , JavaScript, CSS
                        </p>
                        <div className="card-links">
                        <a href="https://github.com/herdeyhorlarh/quotesGenerator" className="cardLink">github <FaGithub className='GithubP'/> </a>
                     <a href="https://quotes-generator-mu.vercel.app/" className="cardLink"> live <FaLink  className='Link'/> </a>
                        </div>
                    </div>
                </div>
                </div>

                <div className="projectContainer">
                <div className="projectBox">
                    <img
                        src={RecipeImg}
                        alt="Card Image"
                        className="projectImg"
                    />
                    

                    <div className="card-content">
                    
                    <p className='card-paragraph'>
                           HTML , JavaScript, CSS
                        </p>

                        <div className="card-links">
                        <a href="https://github.com/herdeyhorlarh/recipeApp" className="cardLink">github <FaGithub className='GithubP'/> </a>
                     <a href="https://recipe-app-lemon-theta.vercel.app/" className="cardLink"> live <FaLink  className='Link'/> </a>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </>
    )
}