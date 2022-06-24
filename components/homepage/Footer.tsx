import React, { FunctionComponent } from "react";
import Image from "next/image";

const Footer: FunctionComponent = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-content">
          
            <div className="footer-logo">
              <a href="https://www.getcollectr.com">
                <Image
                  src={'https://www.getcollectr.com/marketing-website/images/collectr_logo-removebg---copy-p-500.png'}
                  width={200}
                  height={45}
                  alt={'collectr-icon'}
                  objectFit="contain"
                />
              </a>
            </div>
       
          <div className="footer-links">
            <span>Contact Us</span><br/>
            <a href="mailto:contact@getcollectr.com">contact@getcollectr.com</a><br/>
            <a href="http://discord.gg/PxzhbDzFUt">Discord</a><br/>
            <a href="http://instagram.com/getcollectr">Instagram</a>
          </div>
          <div className="footer-links">
            <span>Legal</span><br/>
            <a href="https://www.getcollectr.com/marketing-website/terms-conditions.html">Terms &amp; Conditions</a><br/>
            <a href="https://www.getcollectr.com/marketing-website/privacy-policy.html">Privacy Policy</a><br/>
          </div>
            <div className="empty-div"></div>
        </div>
          <div className="footer-divider"></div>
        <div className="footer-copyright">
          <div>&copy; Collectr. All rights reserved</div>
        </div>
      </div>
    </>
  );
};


export default Footer;