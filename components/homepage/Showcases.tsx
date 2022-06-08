import React, { FunctionComponent } from 'react'
import ShowcaseCard from './ShowcaseCard'

interface ShowcasesProps {
    showcases: any;
}
const Showcases: FunctionComponent<ShowcasesProps> = ({ showcases }) => {
    console.log('showcases.tsx data', showcases)
     
  return (
    <>
    <div className="showcases-title">
        <div className="showcase-bold-title">Popular</div>&nbsp;showcases you&apos;ll love
    </div>
    <div className="showcases-container">
        
        {showcases.map((item: any) => (
            <>
                <ShowcaseCard
                    showcases={item}
                    img1={item.image_1_url}
                    img2={item.image_2_url}
                    img3={item.image_3_url}
                    avatar={item.profile_photo_url}
                    username={item.display_name}
                    categories={item.categories}
                    collectionValue={item.total_value}
                />
            </>
        ))}
    </div>
    </>
  )
}

export default Showcases