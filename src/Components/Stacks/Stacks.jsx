import './stacks.css'

import Html from '../../assets/vscode-icons_file-type-html.svg'
import CSS from '../../assets/vscode-icons_file-type-css.svg'
import Js from '../../assets/vscode-icons_file-type-js-official.svg'
import React from '../../assets/logos_react.svg'
import Node from '../../assets/Node.js_logo.svg'
// import Bootstrap from '../../assets/logos_bootstrap.svg'

export default function Stacks(){
    return(
        <>
        <div className="stacks" id='stacks'>
            <h1 className='s-h1'> My Tech Stack </h1>
            <p className='s-p'>  Technologies I’ve been working with recently </p>

            <div className='stack-list'>
                <img src={Html} alt='' />
                <img src={CSS} alt='' />
                <img src={Js} alt='' />
                <img src={React} alt='' />
                <img src={Node} alt='' />
                {/* <img src={Bootstrap} alt='' /> */}
            </div>
            </div>
        </>
    )
}