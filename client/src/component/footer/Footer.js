import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "./footer.scss"


const Footer = () => {
  return (
    <div className='footer'>
        <h5>Get in touch</h5>
        
        <div className='buttons'>
         <div className='circle-btn-div'>
             <a rel="noopener" target="_blank"  href='https://www.linkedin.com/in/osita-chisom-80726419a' ><div className='circle-btn' ><LinkedInIcon className='icon' /></div></a>
             <a rel="noopener" target="_blank"  href='https://twitter.com/Chuchom99?t=5HsC4adJOg6CSduaB9zM_g&s=09' ><div className='circle-btn' ><TwitterIcon className='icon' /></div></a>
             <a rel="noopener" target="_blank"  href="https://github.com/Chuchom99"><div className='circle-btn' ><GitHubIcon className='icon' /></div></a>
             <a rel="noopener" target="_blank"  href="mailto:ositachisom7@gmail.com?subject=Subject%20Here&body=Hello%20Chisom%20I%20saw%20portfolio"><div className='circle-btn' ><EmailIcon className='icon' /></div></a>
         </div>
         <p>© Copyright Osita Chisom</p>
        </div>
    </div>
  )
}

export default Footer