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
    verified: boolean;
}

const ShowcaseCard: FunctionComponent<ShowcaseCardProps> = ({ img1, img2, img3, avatar, username, categories, collectionValue, refId, verified }) => {
    let dollars = new Intl.NumberFormat(`en-US`, {
        currency: `USD`,
        style: "currency",
      }).format(collectionValue);


    const defaultImg = 'https://www.getcollectr.com/public-assets/images/anon-collectr.png?imwidth=128'
  return (
    <>
    <Link href={`/profile?id=${refId}`} passHref>
        <a href="" target='_blank' rel="noopener noreferrer">
            <div className='showcase-card'>
                <div className="showcase-card-content">
                    <div className="showcase-cover-imgs">
                        <div>
                            <Image
                                src={img1}
                                alt={'collection-sample'}
                                height={100}
                                width={100}
                                objectFit={"contain"}
                                className={'card-image'}
                            />
                        </div>
                        <div className='bottom-cards'>
                            <div className='card-1'>
                                <Image
                                src={img2}
                                alt={'collection-sample'}
                                height={100}
                                width={100}
                                objectFit={"contain"}
                                id={'card-image'}
                                />
                            </div>
                            <div>
                            <Image
                                src={img3}
                                alt={'collection-sample'}
                                height={100}
                                width={100}
                                objectFit={"contain"}
                                className={'card-image'}
                            />
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
                            {verified === true && (
                            <Image 
                                src={'/correct.png'}
                                alt={'user verified'}
                                width={15}
                                height={15}
                            />
                            )}
                            
                        </div>
                        <div className="collection-categories">{categories.slice(0, 4).join(' ?? ')}</div>
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