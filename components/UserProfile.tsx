import React, { FunctionComponent } from "react";
import Image from "next/image";
import CircularProgress from "@mui/material/CircularProgress";

interface UserInfoProps {
  userAvatar: string;
  userName: string;
  portfolioValue: string;
  totalCards: string;
  totalSealed: string;
  totalGraded: string;
  collectorBadge: any;
  verified: boolean;
}

const UserProfile: FunctionComponent<UserInfoProps> = ({
  userAvatar,
  userName,
  portfolioValue,
  totalCards,
  totalSealed,
  totalGraded,
  collectorBadge,
  verified,
}) => {
  const setBadge = async () => {
    if (parseFloat(totalSealed) > parseFloat(totalCards)) {
      collectorBadge =
        "https://www.getcollectr.com/public-assets/images/sealed-collectr-icon.png";
    } else if (parseFloat(totalGraded) / parseFloat(totalCards) > 0.5) {
      collectorBadge =
        "https://www.getcollectr.com/public-assets/images/graded-collectr-icon.png";
    } else {
      collectorBadge =
        "https://www.getcollectr.com/public-assets/images/raw-cards-collectr-icon.png";
    }
  };
  setBadge();

  return (
    <>
      {!userAvatar && <CircularProgress />}
      {userAvatar && (
        <>
          <div className="badge-icon">
            <Image
              src={collectorBadge ? collectorBadge : "/loading.gif"}
              width={100}
              height={100}
              alt={"collector badge"}
              className={"collector-badge"}
            />
          </div>
          <div className="user-info-container">
            <div className="column">
              <div>
                <Image
                  src={userAvatar ? userAvatar : "/loading.gif"}
                  alt={"user avatar"}
                  width={100}
                  height={100}
                  className={"user-avatar"}
                />
              </div>
              <span className="user-name">
                <div className="profile-name">{userName}</div>
                {verified === true && (
                  <Image
                    src={'/correct.png'}
                    alt={'user verified'}
                    height={15}
                    width={15}
                  />
                )}
                </span>
              <span>Estimated Portfolio Value (USD)</span>
              <span className="number">{portfolioValue}</span>
            </div>
            <div className="row">
              <div className="row-container">
                <span>Total Cards</span>
                <br />
                <span className="number">{totalCards}</span>
              </div>
              <div className="row-container">
                <span>Total Sealed</span>
                <br />
                <span className="number">{totalSealed}</span>
              </div>
              <div className="row-container">
                <span>Total Graded</span>
                <br />
                <span className="number">{totalGraded}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UserProfile;

// Props: userAvatar, userName, portfolioValue, totalCards, totalSealed, totalGraded
