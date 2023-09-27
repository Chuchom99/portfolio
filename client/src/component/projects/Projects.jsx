import {useState} from 'react';
import {Link} from "react-router-dom"
import pro1 from "../../assets/images/grava.png"
import pro2 from "../../assets/images/bank.png"
import pro3 from "../../assets/images/ai.png"
import pro4 from "../../assets/images/music.png"
import pro5 from "../../assets/images/tin.png"
import pro6 from "../../assets/images/pro1.png"
import pro7 from "../../assets/images/avatar.png"
import "./project.scss"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Pro from '../projectCard/Pro';

const Projects = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    
    const pro = [
        {id: 1, title: "Investment app", imgUrl: pro1, url: "https://6512b82326684b007f0be068--startling-croissant-3eff8c.netlify.app/" },
        {id: 2, title: "Bank app", imgUrl: pro2, url: "https://ezunu.onrender.com/" },
        {id: 3, title: "Video chat app", imgUrl: pro3,  },
        {id: 4, title: "Music player", imgUrl: pro4, url: "https://vybex.netlify.app/" },
        {id: 5, title: "Landing page", imgUrl: pro5, },
        {id: 6, title: "Portfolio", imgUrl: pro6, },
        {id: 7, title: "Chat avater", imgUrl: pro7, },
         ];
         const [noOfCoin, setNoOfCoin]= useState(6);
         const slice = pro.slice(0, noOfCoin);
         function viewMore() {
          setNoOfCoin(noOfCoin + noOfCoin)
        }

  return (
    <div className='projects' id='project' >
        <div>
            <h2>Projects</h2>
            <p>Code craftsmanship in action: My Project Showcase</p>
        </div>
        <TrackVisibility>
        {({ isVisible }) =>
        <>
        <div className={`pro-div ${isVisible ? "animate__animated " : ""}`}>
          {
            slice.map((item, i) => (
              
              <Pro key={item.id} item={item}   />
              ))
            }
        </div>
        <div>
        <button onClick={viewMore}>See More  <ArrowForwardIosIcon /> </button>

        </div>
        </>
        }
        </TrackVisibility>
    </div>
  )
}

export default Projects