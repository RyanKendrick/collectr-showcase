import React, { FunctionComponent } from 'react'

interface ProfileFooterProps {
    user: any;
    collectibles: any;
    productOne: any;
    totalItems: any;
    totalGradedCards: any;
    totalSealedProducts: any;
}

const ProfileFooter: FunctionComponent<ProfileFooterProps> = ({ 
    user, 
    collectibles, 
    productOne, 
    totalItems,
    totalGradedCards,
    totalSealedProducts,

}) => {

    return (
    <>
        <div className="profile-footer">
            <div className="section1">
                <span>
                    Collectr powers {user}&apos;s portfolio collection of&nbsp; 
                    {collectibles}!&nbsp; 
                    With Collectr, you can track 
                    your entire collection from the comfort of your couch.&nbsp;
                </span><br/><br/>
                <span>
                {user} most valuable card is a {productOne.product_name}.&nbsp; 
                {user} has a total of {totalItems} items in their collection,&nbsp; 
                including {totalItems} raw cards, {totalGradedCards} graded 
                cards, and {totalSealedProducts} sealed products.
                </span>
            </div>
        </div>
    </>
  )
}

export default ProfileFooter
