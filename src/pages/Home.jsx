import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import left from '../assets/home-left.png'
import top from '../assets/home-top.png'
import '../styles/Home.css'
import { ArrowRight } from 'react-bootstrap-icons';
import bottom from '../assets/bottom.png'
const Home = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <div className="purple-container">
                    <div className="center-content">
                        <img src={top} alt="Top Image" />
                    </div>
                    <div className="bottom-content">
                        <img src={left} alt="Right Image" />
                        <div className='single__paragraph'>
                            <p> With our concierge shipping services, you don't have to be a specialist in shipping, your assigned shipping liaison becomes an extension of your team. You will be assigned a dedicated concierge service representative to assist you with any questions or concerns you or your customers may have throughout the entirety of the shipping process.</p>
                            <p style={{ marginTop: "20px" }}> Your liaison can assist with any claims, supply orders, rerouting of packages and last-minute address changes</p>
                            <p style={{ color: "orange", marginTop: "50px" }}>Learn more about benefits of a live liason <ArrowRight /></p>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <img src={bottom} alt ="bottom" style={{height:"500px"}}/>
            </div>
            <div style={{margin:"10px"}}>
                <Footer />
            </div>
        </div>
    )
}

export default Home