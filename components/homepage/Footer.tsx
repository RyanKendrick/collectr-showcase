import React, { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: FunctionComponent = () => {
  return (
    <>
      <div className="footer">
        <div className="discord-link">
          <Link href="https://discord.gg/PxzhbDzFUt">
            Join our Discord Community
          </Link>
        </div>
        <div className="footer-bottom">
          <div className="social-icons">
            <a href="https://www.facebook.com/getcollectr" target="_blank" rel="noreferrer" className="icon-bg">
              <Image
                alt="social-icon"
                src={"/facebook.png"}
                width={30}
                height={30}
              />
            </a>
            <a href="https://www.instagram.com/getcollectr/" target="_blank" rel="noreferrer" className="icon-bg">
              <Image
                alt="social-icon"
                src={"/instagram.png"}
                width={30}
                height={30}
              />
            </a>
            <a href="https://twitter.com/getcollectrapp" target="_blank" rel="noreferrer" className="icon-bg">
              <Image
                alt="social-icon"
                src={"/twitter.png"}
                width={30}
                height={30}
              />
            </a>
          </div>
          <div className="footer-labels">
            <div className="footer-title">contact@getcollectr.com</div>
            <div className="copyright">
              Copyright © 2022 Collectr. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
