import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import nin from  "../../assets/images/91.png"
import etet from  "../../assets/images/88.png"
import etfi from  "../../assets/images/85.png"
import curve from  "../../assets/images/curve.png"
import glow from  "../../assets/images/glow.png"


import "./skills.scss";

const Skills = () => {
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
    
  return (
    <div className='skills' id="skills" >
      <img src={curve} className='glow' alt='' />
        <div className='box' >
        <div>
        <h1>Skills</h1>
        <p className='big'>From understanding your requirements, designing a blueprint and delivering 
        the final product, <br/> I do everything that falls in between these lines.</p>
        <p className='small'>From understanding your requirements, designing a blueprint and delivering 
        the final product, I do everything that falls in between these lines.</p>

        </div>
        <Carousel 
        swipeable={true}
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        responsive={responsive} 
        infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={etfi} alt="Image" />
                                <h5>React js (ES6+)</h5>
                            </div>
                            <div className="item">
                                <img src={etfi} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={nin} alt="Image" />
                                <h5>HTML & CSS</h5>
                            </div>
                            <div className="item">
                                <img src={etfi} alt="Image" />
                                <h5>Node & Express.js </h5>
                            </div>
                            <div className="item">
                                <img src={etet} alt="Image" />
                                <h5>Restfull API</h5>
                            </div>
                            <div className="item">
                                <img src={etfi} alt="Image" />
                                <h5>MongoDB & SQL</h5>
                            </div>
                            <div className="item">
                                <img src={nin} alt="Image" />
                                <h5>Git</h5>
                            </div>


                        </Carousel>
        </div>
    </div>
  )
}

export default Skills