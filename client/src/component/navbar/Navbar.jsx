import {useState} from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./navbar.scss"
import logo from "../../assets/images/logo.png"


const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
      }

  return (

    <div className='navbar'>
        {/* <img src={moon} className='moon' alt /> */}
        
        <div>
            {/* <img src={logo} className='logo' alt  /> */}
            <span className='logo' >BigNew</span>
        </div>

        <div className='right'>
            <div className='pages' >
                <a href="#home" onClick={() => onUpdateActiveLink('home')} >Home</a>
                <a href="#skills" onClick={() => onUpdateActiveLink('skills')} >Skills</a>
                <a href="#project" onClick={() => onUpdateActiveLink('projects')} >Projects</a>
            </div>
            <div className='buttons'>
                <div className='circle-btn-div'>
                    <a rel="noopener" target="_blank"  href='https://www.linkedin.com/in/osita-chisom-80726419a' ><div className='circle-btn' ><LinkedInIcon className='icon' /></div></a>
                    <a rel="noopener" target="_blank"  href='https://twitter.com/Chuchom99?t=5HsC4adJOg6CSduaB9zM_g&s=09' ><div className='circle-btn' ><TwitterIcon className='icon' /></div></a>
                    <a rel="noopener" target="_blank"  href="https://github.com/Chuchom99"><div className='circle-btn' ><GitHubIcon className='icon' /></div></a>

                </div>
                <div>
                    <a href="#contact" onClick={() => onUpdateActiveLink('contact')}  ><button>Get in Touch</button></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar