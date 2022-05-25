import React, { FunctionComponent } from 'react'
import Image from 'next/image'

interface UserInfoProps {
  userAvatar: string;
  userName: string;
  portfolioValue: number;
  totalCards: string;
  totalSealed: string;
  totalGraded: string;
}


const UserProfile: FunctionComponent<UserInfoProps> = ({ userAvatar, userName, portfolioValue, totalCards, totalSealed, totalGraded }) => {
  return (
    <>
        <div className='user-info-container'>
            <div className="column">
              <div>
                  <Image
                      src={userAvatar ? userAvatar : '/loading.gif'}
                      alt={'user avatar'}
                      width={100}
                      height={100}
                      className={'user-avatar'}
                  />
              </div>
              <span>{userName}</span>
              <span>Estimated Portfolio Value (USD)</span>
              <span>${portfolioValue}</span>
            </div>
            <div className="row">
              <div>
                <span>Total Cards</span><br/>
                <span>{totalCards}</span>
              </div>
              <div>
                <span>Total Sealed</span><br/>
                <span>{totalSealed}</span>
              </div>
              <div>
                <span>Total Graded</span><br />
                <span>{totalGraded}</span>
              </div>
            </div>
        </div>
    </>
  )
}

export default UserProfile

// Props: userAvatar, userName, portfolioValue, totalCards, totalSealed, totalGraded 