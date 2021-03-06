import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/ProfileHeader";
import UserProfile from "../components/UserProfile";
import Collection from "../components/Collection";
import Modal from "../components/Modal";
import CircularProgress from "@mui/material/CircularProgress";
import ProfileHead from "../components/Head";
import ProfileFooter from "../components/ProfileFooter";

const Profile: NextPage = () => {
  type productList = {
    product_name: any;
    image_url: any;
  };

  type categories = {
    catelog_category_name: any;
  };

  const [userAvatar, setUserAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const [portfolioValue, setPortfolioValue] = useState("");
  const [totalCards, setTotalCards] = useState("");
  const [totalSealed, setTotalSealed] = useState("");
  const [totalGraded, setTotalGraded] = useState("");
  const [productList, setProductList] = useState<productList[]>([]);
  const [collectorBadge, setCollectorBadge] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [categories, setCategories] = useState<categories[]>([])
  const [productOne, setProductOne] = useState("")
  const newArray = Array.from(new Set(categories))
  let offset = 0;
  let limit = 52;
  let hittingApi = false;
  const handleScroll = async (e: any) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
        e.target.documentElement.scrollHeight &&
      hittingApi == false
    ) {
      hittingApi = true;
      setIsLoading(true);
      offset += 52;
      await loadMoreProducts();
      hittingApi = false;
      // window.scrollTo(0, 1500);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 7500);
  };

  const loadMoreProducts = async () => {
    const params = new URLSearchParams(window.location.search);
    let referenceId = params.get("id");
    await axios
      .get(
        `https://djk9wkkysj.execute-api.us-east-1.amazonaws.com/data/showcase/${referenceId}?offset=${offset}&limit=${limit}`
      )
      .then((response) => {
        setProductList((productList) => [
          ...productList,
          ...response.data.products,
        ]);
      });
  };

  const openModal = (e: any) => {
    for (let i in productList) {
      if (productList[i].product_name === e.target.id)
        setSelectedImage(productList[i].image_url);
    }
  };

  const closeModal = () => {
    setSelectedImage("");
  };

  // For live
  // const params = new URLSearchParams(window.location.search)
  // let referenceId = params.get('id')
  // axios.get(`https://djk9wkkysj.execute-api.us-east-1.amazonaws.com/data/showcase/${referenceId}?offset=${offset}&limit=${limit}`)

  // For dev
  // https://djk9wkkysj.execute-api.us-east-1.amazonaws.com/data/showcase/18afaa5e-c0f5-4942-9a5c-5ad8980782ec?offset=${offset}&limit=${limit}

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    let referenceId = params.get("id");
    axios
      .get(
        `https://djk9wkkysj.execute-api.us-east-1.amazonaws.com/data/showcase/${referenceId}?offset=${offset}&limit=${limit}`
      )
      .then((response) => {
        console.log('profile data res', response.data)
        setUserAvatar(response.data.profile_photo);
        setUserName(response.data.user);
        let dollars = new Intl.NumberFormat(`en-US`, {
          currency: `USD`,
          style: "currency",
        }).format(response.data.portfolio_value[0].price);
        setPortfolioValue(dollars);
        setTotalCards(response.data.total_cards);
        setTotalSealed(response.data.total_sealed);
        setTotalGraded(response.data.total_graded);
        setProductList(response.data.products);
        setProductOne(response.data.products[0])
        setVerified(response.data.verified);
        for (let i in response.data.products) {
         setCategories((categories) => [...categories, response.data.products[i].catalog_category_name])
        }
  
      })
      .catch((err) => {
        window.location.href = "/404";
      });
    window.addEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ProfileHead
        categories={newArray.join(', ')} 
        userName={userName} />
      <Header />
      <UserProfile
        userAvatar={userAvatar}
        userName={userName}
        portfolioValue={portfolioValue}
        totalCards={totalCards}
        totalSealed={totalSealed}
        totalGraded={totalGraded}
        collectorBadge={collectorBadge}
        verified={verified}
      />
      <Collection collectionList={productList} openModal={openModal} />
      {isLoading && <CircularProgress />}
      {selectedImage && (
        <Modal selectedImage={selectedImage} closeModal={closeModal} />
      )}
      <ProfileFooter 
        user={userName}
        collectibles={newArray.join(', ')}
        productOne={productOne}
        totalItems={totalCards}
        totalGradedCards={totalGraded}
        totalSealedProducts={totalSealed}
      />
    </>
  );
};

export default Profile;
