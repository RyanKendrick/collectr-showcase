import React, { FunctionComponent } from "react";
import Image from "next/image";

interface ProductCardProps {


  categoryGroup: string;
  categoryName: string;
  productImage: string;
  productName: string;
  gradeId: any;
  gradeCompany: any;
  openModal: any;
  productPrice: any;
}

const ProductCard: FunctionComponent<ProductCardProps> = ({
  categoryGroup,
  categoryName,
  productImage,
  productName,
  openModal,
  gradeId,
  gradeCompany,
  productPrice
}) => {

  let marketValue = new Intl.NumberFormat(`en-US`, {
    currency: `USD`,
    style: "currency",
  }).format(productPrice);

  return (

    <>
      <div className="product-container">
        <div>
          <Image
            src={productImage}
            width={150}
            height={150}
            alt={"product"}
            objectFit={"contain"}
            className={"product-image"}
            id={productName}
            onClick={openModal}
          />
        </div>
        <br />
        {gradeId === null && <div className="grade-id"></div>}

        {parseInt(gradeCompany) <= 12 && (
          <div className="grade-id">
            <Image
              src={
                "https://www.getcollectr.com/public-assets/images/psa_icon.jpg"
              }
              alt="grade-id"
              height={17}
              width={35}
            />
            {gradeId}
          </div>
        )}
        {parseInt(gradeCompany) >= 13 && parseInt(gradeCompany) <= 32 && (
          <div className="grade-id">
            <Image
              src={
                "https://www.getcollectr.com/public-assets/images/bgs_icon.jpg"
              }
              alt="grade-id"
              height={17}
              width={35}
            />
            {gradeId}
          </div>
        )}
        {parseInt(gradeCompany) >= 33 && parseInt(gradeCompany) <= 52 && (
          <div className="grade-id">
            <Image
              src={
                "https://www.getcollectr.com/public-assets/images/cgc_icon.jpg"
              }
              alt="grade-id"
              height={17}
              width={35}
            />
            {gradeId}
          </div>
        )}

        <div className="product-title">{productName}</div>
        <div className="product-subtitle">{categoryName}</div>
        <div className="product-subtitle">{categoryGroup}</div>
        <div className="product-subtitle"><b>{marketValue}</b></div>
      </div>
    </>
  );
};

export default ProductCard;
