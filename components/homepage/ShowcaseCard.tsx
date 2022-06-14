import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ShowcaseCardProps {
    showcases: any;
    img1: any;
    img2: any;
    img3: any;
    avatar: any;
    username: any;
    categories: any;
    collectionValue: any;
    refId: any;
}

const ShowcaseCard: FunctionComponent<ShowcaseCardProps> = ({ img1, img2, img3, avatar, username, categories, collectionValue, refId }) => {
    let dollars = new Intl.NumberFormat(`en-US`, {
        currency: `USD`,
        style: "currency",
      }).format(collectionValue);


    const screenWidth = screen.width * 0.0625
    const mobileWidth = 35
    // document.addEventListener('')

    const defaultImg = 'https://www.svgrepo.com/show/20/user.svg'
  return (
    <>
    <Link href={`/profile?id=${refId}`} passHref>
        <a href="" target='_blank' rel="noopener noreferrer">
            <div className='showcase-card'>
                <div className="showcase-card-content">
                    <div className="showcase-cover-imgs">
                        <div>
                            {screenWidth > mobileWidth && (
                                <Image
                                    src={img1}
                                    alt={'collection-sample'}
                                    height={90}
                                    width={90}
                                    objectFit={"contain"}
                                    className={'card-image'}
                                />
                            )}
                            {screenWidth < mobileWidth && (
                                <Image
                                    src={img1}
                                    alt={'collection-sample'}
                                    height={100}
                                    width={100}
                                    objectFit={"contain"}
                                    className={'card-image'}
                                />
                            )}
            
                        </div>
                        <div className='bottom-cards'>
                            <div className='card-1'>
                            {screenWidth > mobileWidth && (
                                <Image
                                src={img2}
                                alt={'collection-sample'}
                                height={90}
                                width={90}
                                objectFit={"contain"}
                                id={'card-image'}
                                />
                            )}
                            {screenWidth < mobileWidth && (
                                <Image
                                src={img2}
                                alt={'collection-sample'}
                                height={100}
                                width={100}
                                objectFit={"contain"}
                                id={'card-image'}
                                />
                            )}
                            </div>
                            <div>
                            {screenWidth > mobileWidth && (
                                <Image
                                src={img3}
                                alt={'collection-sample'}
                                height={90}
                                width={90}
                                objectFit={"contain"}
                                className={'card-image'}
                            />
                            )}
                            {screenWidth < mobileWidth && (
                                <Image
                                src={img3}
                                alt={'collection-sample'}
                                height={100}
                                width={100}
                                objectFit={"contain"}
                                className={'card-image'}
                            />
                            )}
            
                            </div>
                        </div>
                    </div>
                    <div className="showcase-card-labels">
                        <div className='showcase-avatar-title'>
                            <Image
                                src={avatar ? avatar : defaultImg}
                                alt={'profile-avatar'}
                                height={25}
                                width={25}
                                className={'profile-avatar'}
                            />
                            <div className="profile-username">{username}</div>
                        </div>
                        <div className="collection-categories">{categories.slice(0, 4).join(' · ')}</div>
                    </div>
                </div>
                <div className="showcase-card-value">
                    {dollars}
                </div>
            </div>
        </a>
    </Link>
    </>
  )
}

export default ShowcaseCard