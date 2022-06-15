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
            <Image
              alt="social-icon"
              src={"https://www.svgrepo.com/show/271189/instagram.svg"}
              width={15}
              height={15}
            />
            <Image
              alt="social-icon"
              src={"https://www.svgrepo.com/show/271189/instagram.svg"}
              width={15}
              height={15}
            />
            <Image
              alt="social-icon"
              src={"https://www.svgrepo.com/show/271189/instagram.svg"}
              width={15}
              height={15}
            />
            <Image
              alt="social-icon"
              src={"https://www.svgrepo.com/show/271189/instagram.svg"}
              width={15}
              height={15}
            />
            <Image
              alt="social-icon"
              src={"https://www.svgrepo.com/show/271189/instagram.svg"}
              width={15}
              height={15}
            />
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
