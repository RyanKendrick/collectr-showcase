import React, { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

const ProfileHeader: FunctionComponent = () => {
  return (
    <>
      <div className="header-container">
        <div className="subheader-container">
          <a href="https://www.getcollectr.com">
            Want to start tracking your collection? Download
            &quot;Collectr&quot; TODAY. Available on IOS and Android.
          </a>
        </div>
        <div className="title-container">
          <Link href="https://showcase.getcollectr.com">
            <a>
              <Image
                src={
                  "https://www.getcollectr.com/marketing-website/images/collectr_logo-removebg---copy-p-500.png"
                }
                height={103}
                width={500}
                alt={"COLLECTR"}
              />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
