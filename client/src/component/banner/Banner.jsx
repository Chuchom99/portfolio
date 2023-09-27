import React from 'react'
import Lottie from "lottie-react";
import "./banner.scss";
import globe from  "../../assets/images/glo2.png";
import pluto from  "../../assets/images/pluto.png";
import space from  "../../assets/anime/animation_lmgd1j87.json";
import le from "../../assets/images/le.png";
import bar1 from "../../assets/images/bar1.png";
import sat from "../../assets/images/sat.png";
import { TypeAnimation } from 'react-type-animation';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import moon from "../../assets/images/moon.png"


const Banner = () => {
  return (
    <div className="banner" id='home' >
      
        <Lottie className='space' animationData={space} />
        <img src={le} className='le' alt='' />
        <img src={globe} className='globe' alt='' />
        <img src={pluto} className='pluto' alt='' />
        <img src={sat} className='sat' alt='' /> 
        <img src={moon} className='moon' alt="" />
   


        <div className='desc' >
        <img src={bar1} className='bar1 bar' alt='' />
          <TypeAnimation
          sequence={[
            "{ '_Osita Chisom's portfolio' }",
            1000, 
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '1em', display: 'inline-block' }}
          repeat={Infinity}
        />
        <div className='dev' >
        <span className='sm-sp' >I am a fullstack</span>
        <span className='sm-sp' >web developer</span>
        <img src={bar1} className='bar2 bar' alt='' />
        </div>
        <p className='big' >This is where my imagination takes flight and where <br/>
         I showcase my journey through web dev and beyond</p>
         <p className='small'>This is where my imagination takes flight and where
         I showcase my journey through web dev and beyond</p>

        <button>Lets connect
          <KeyboardArrowRightOutlinedIcon />
        </button>
        </div>
    </div>
  )
}

export default Banner