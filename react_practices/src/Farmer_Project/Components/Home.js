import React, { useEffect } from 'react'
import farm_banner from '../Images/farm.jpg'
import service_img from '../Images/service.jpeg'
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {

  useEffect(() => {
    document.title = "Harvestigation - Home"
  }, [])
  return (
    <div className='Home_box'>
      <section className='section'>
        <h1 className="header_title text-center">
          <span>Welcome To Crop <b className='brandname'>Harvestigation</b> Company </span>
        </h1>
      </section>
      <section className='header section'>
        <div className="header_content_section">
          <h2>Harvestigation</h2>
          <h4 className='letter_spacing'>
            Get Informed Decisions About Your Farming Strategy.
          </h4>
          <br />
          <h4 className='letter_spacing'>
            Here Are Some Questions We'll Answer
          </h4>
          <br />
          <p>1. What crop to plant here?</p>
          <p>2. What fertilizer to use?</p>
          <p>3. Which disease do your crop have?</p>
          <br />
        </div>
      </section>
      <section className='section m-top'>
        <h1 className="header_title text-center">
          <span><b className='brandname'>Harvestigation</b> Improves Growth of Crops by 85.99%</span>
          {/* <span style={{ "marginTop": "1rem", "display": "inline-block" }}><img className='tractor' width={80} src="https://cdn-icons-png.flaticon.com/512/3665/3665077.png" alt="" /></span> */}
        </h1>
      </section>
      <section className='all_equipments'>
        <div className="equip"><img src="https://tse2.explicit.bing.net/th?id=OIP.EK7UHP0cJxcJCZMuBkMLhAHaE7&pid=Api&P=0" alt="" /></div>
        <div className="equip"><img src="https://tse2.mm.bing.net/th?id=OIP.-s2YVSCWaOicm_pwt5m0RAHaFP&pid=Api&P=0" alt="" /></div>
        <div className="equip"><img src="https://tse3.mm.bing.net/th?id=OIP.qryfWFOpzhQUCIGhG38cVgHaES&pid=Api&P=0" alt="" /></div>
        <div className="equip"><img src="https://cdn.wikifarmer.com/wp-content/uploads/2019/05/Growing-Eggplant-for-Profit.jpg" alt="" /></div>
      </section>
      <Container maxWidth="lg">
        <section className='section m-top'>
          <h1 className="text-center">
            <span>Our Service!</span>
          </h1>
        </section>
        <section id='Our_service' className='section m-top'>
          <div className="left">
            <img src="https://harvestify.herokuapp.com/static/images/s3.jpg" alt="" />
          </div>
          <div className="right">
            <h4>
              Best Crop Harvesting and Cultivation Technique!<span><img src="https://cdn-icons-png.flaticon.com/512/3442/3442648.png" alt="crop" className='flat_icon_img' /></span>
            </h4>
            <br />
            <h2 className='letter_spacing'>
              CROP
            </h2>
            <br />
            <p>
              Recommendation about the type of crops to be cultivated which is best suited
              for the respective conditions.
            </p>
            <Link to="/activate_crop"><Button className='mui_btn' variant="text">lets Get Started</Button></Link> 
          </div>
        </section>
      </Container>


    </div>
  )
}

export default Home
