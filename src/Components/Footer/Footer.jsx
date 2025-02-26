/* Footer.jsx */
import React from 'react';
import './Footer.css';
import logo from '../Assets/logo.png'; // You'll need a logo image
import instagram_icon from '../Assets/instagram_icon.png'; // Social media icons
import whatsapp_icon from '../Assets/whatsapp_icon.png';


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Zindar Market Logo" />
        <p>ZINDAR MARKET</p>
      </div>
      
      <div className="footer-links">
        <div className="footer-links-column">
          <h3>SHOP</h3>
          <a href="/collections/new">New Arrivals</a>
          <a href="/collections/bestsellers">Bestsellers</a>
          <a href="/collections/sale">Sale Items</a>
          <a href="/collections/all">All Products</a>
        </div>
        
        <div className="footer-links-column">
          <h3>CATEGORIES</h3>
          <a href="/category/clothing">Clothing</a>
          <a href="/category/electronics">Electronics</a>
          <a href="/category/home">Home & Living</a>
          <a href="/category/beauty">Health & Beauty</a>
        </div>
        
        <div className="footer-links-column">
          <h3>CUSTOMER CARE</h3>
          <a href="/track-order">Track Your Order</a>
          <a href="/returns">Returns & Exchanges</a>
          <a href="/shipping">Shipping Information</a>
          <a href="/faq">FAQ</a>
        </div>
        
        <div className="footer-links-column">
          <h3>ABOUT US</h3>
          <a href="/about">Our Story</a>
          <a href="/blog">Blog</a>
          <a href="/careers">Careers</a>
          <a href="/contact">Contact Us</a>
          
          <div className="footer-social-icons">
            <div className="footer-social-icon">
              <img src={instagram_icon} alt="Instagram" />
            </div>
            <div className="footer-social-icon">
              <img src={whatsapp_icon} alt="WhatsApp" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-copyright">
        <p>© 2025 Zindar Market. All Rights Reserved.</p>
        <p>
          <a href="/privacy" style={{ color: '#b3b3b3', marginRight: '15px' }}>Privacy Policy</a>
          <a href="/terms" style={{ color: '#b3b3b3' }}>Terms of Service</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;