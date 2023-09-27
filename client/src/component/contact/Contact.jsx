import ws from "../../assets/images/ws.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "./contact.scss";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from "react";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SendIcon from '@mui/icons-material/Send';


const Contact = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        msg: "",
      });
      const [buttonText, setButtonText] = useState('Send');
      const [status, setStatus] = useState({});

      const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
      
      const handleClick = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:5000/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(inputs),
        });
        setButtonText("Send");
        let result = await response.json();
        setInputs({
          name: "",
          email: "",
          msg: "",
  
        })
        if (result.code == 200) {
          setStatus({ succes: true, message: 'Message sent successfully'});
        } else {
          setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
        }      
      };
      
    
  return (
    <div className='contact' id="contact" >
        <div className='left' >
            <>
            <TrackVisibility>
            {({ isVisible }) => 
            <img src={ws} alt=' ' className={`img-anime ${isVisible ? "animate__animated animate__zoomIn" : ""}`} />
            }
            </TrackVisibility>
            </>
        </div>
        <div className="right">
                <h2>Get in touch</h2>
                <form>
                    <span>Name</span>
                    <div className="input" >
                    <PersonIcon className="icon" />
                    <input
                      type="text"
                      placeholder="Enter name"
                      name="name"
                      onChange={handleChange}
                    />
                    </div>                       
                    <span>Email</span>
                    <div className="input" >
                    <EmailIcon className="icon" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      onChange={handleChange}
                    />
                    </div>
                    <span>Username</span>
                    <div className="input" >
                    <ChatBubbleIcon className="icon" />
                    <textarea
                      rows={5}
                      className="text"
                      type="text"
                      placeholder="Enter your username"
                      name="msg"
                      onChange={handleChange}
                    />
                    </div>
                    <button disabled onClick={handleClick} >Currently disabled</button>                   
                    {/* <button onClick={handleClick} >{buttonText} <SendIcon /></button>                    */}
                </form>
                 <div className="log" >
                    {/* <button>Login</button>                     */}
                 </div>
            </div>
    </div>
  )
}

export default Contact