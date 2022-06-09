import React, { FunctionComponent } from 'react'
import Image from 'next/image'

interface ShowcaseCardProps {
    showcases: any;
    img1: any;
    img2: any;
    img3: any;
    avatar: any;
    username: any;
    categories: any;
    collectionValue: any;
}

const ShowcaseCard: FunctionComponent<ShowcaseCardProps> = ({ showcases, img1, img2, img3, avatar, username, categories, collectionValue }) => {
    console.log('showcases', showcases)
    let dollars = new Intl.NumberFormat(`en-US`, {
        currency: `USD`,
        style: "currency",
      }).format(collectionValue);
  return (
    <>
    <div className="showcase-card">
        <div className="showcase-card-content">
            <div className="showcase-cover-imgs">
                <div>
                    <Image
                        src={img1}
                        alt={'collection-sample'}
                        height={60}
                        width={60}
                        objectFit={"contain"}
                    />
                </div>
                <div className='bottom-cards'>
                    <div className='card-1'>
                        <Image
                            src={img2}
                            alt={'collection-sample'}
                            height={60}
                            width={60}
                            objectFit={"contain"}
                        />
                    </div>
                    <div>
                        <Image
                            src={img3}
                            alt={'collection-sample'}
                            height={60}
                            width={60}
                            objectFit={"contain"}
                        />
                    </div>
                </div>
            </div>
            <div className="showcase-card-labels">
                <div className='showcase-avatar-title'>
                    <Image 
                        src={avatar}
                        alt={'profile-avatar'}
                        height={25}
                        width={25}
                        className={'profile-avatar'}
                    />
                    <div className="profile-username">{username}</div> 
                </div>
                <div className="collection-categories">{categories.join(' · ')}</div>
            </div>
        </div>
        <div className="showcase-card-value">
            {dollars}
        </div>
    </div>
    </>
  )
}

export default ShowcaseCard