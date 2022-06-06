import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import CircularProgress from '@mui/material/CircularProgress'

interface UserInfoProps {
  userAvatar: string;
  userName: string;
  portfolioValue: string;
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
              <span className='user-name'>{userName}</span>
              <span>Estimated Portfolio Value (USD)</span>
              <span className='number'>{portfolioValue}</span>
            </div>
            <div className="row">
              <div className='row-container'>
                <span>Total Cards</span><br/>
                <span className='number'>{totalCards}</span>
              </div>
              <div className='row-container'>
                <span>Total Sealed</span><br/>
                <span className='number'>{totalSealed}</span>
              </div>
              <div className='row-container'>
                <span>Total Graded</span><br />
                <span className='number'>{totalGraded}</span>
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