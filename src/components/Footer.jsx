import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Instagram, Twitter } from 'react-bootstrap-icons';
import '../styles/Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-grid">
          <div className="footer-column">
            <h5 className="footer-title">Say goodbye to shipping woes and say hello to the Ship Cause Pros.</h5>
            <div className="social">
              <Facebook size={30} className="icon" />
              <Instagram size={30} className="icon" />
              <Twitter size={30} className="icon" />
            </div>
          </div>
          <div className="footer-column">
            <h5 className="footer-title">Links</h5>
            <ul className="footer-links">
              <li>Contact</li>
              <li>Integrations</li>
              <li>Features</li>
              <li>Blog</li>
              <li>Quick Quote</li>
            </ul>
          </div>
          <div className="footer-column">
            <h5 className="footer-title">Resources</h5>
            <ul className="footer-links">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="footer-column">
            <h5 className="footer-title">Action</h5>
            <ul className="footer-links">
              <li>Signup</li>
              <li>Login</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="footer-column">
            <div className="social-icons">
              <Facebook size={30} className="icon" />
              <span className="facebook-community-text">Join our Facebook community</span>
            </div>
          </div>
        </div>
        <hr style={{width:"900px"}}/>
        <div>
          &copy; 2023 Ship Clause
        </div>
      </footer>
      

    );
};

export default Footer;
