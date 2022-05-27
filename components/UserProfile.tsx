import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import CircularProgress from '@mui/material/CircularProgress'

interface UserInfoProps {
  userAvatar: string;
  userName: string;
  portfolioValue: number;
  totalCards: string;
  totalSealed: string;
  totalGraded: string;
  collectorBadge: any;
}


const UserProfile: FunctionComponent<UserInfoProps> = ({ userAvatar, userName, portfolioValue, totalCards, totalSealed, totalGraded, collectorBadge }) => {
  return (
    <>
        {!userAvatar && (
          <CircularProgress />
        )}
        {userAvatar && (
          <>
            <div className='badge-icon'>
            <Image
                src={collectorBadge ? collectorBadge : '/loading.gif'}
                width={100}
                height={100}
                alt={'collector badge'}
                className={'collector-badge'}
              />
                  </div>
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
              <span>{userName ? userName : <div>Loading...</div>}</span>
              <span>Estimated Portfolio Value (USD)</span>
              <span>{portfolioValue ? `$${portfolioValue}` : <div>Loading...</div>}</span>
            </div>
            <div className="row">
              <div className='row-container'>
                <span>Total Cards</span><br/>
                <span>{totalCards}</span>
              </div>
              <div className='row-container'>
                <span>Total Sealed</span><br/>
                <span>{totalSealed}</span>
              </div>
              <div className='row-container'>
                <span>Total Graded</span><br />
                <span>{totalGraded}</span>
              </div>
            </div>
                  </div>
          </>
        )}
        
    </>
  )
}

export default UserProfile

// Props: userAvatar, userName, portfolioValue, totalCards, totalSealed, totalGraded 