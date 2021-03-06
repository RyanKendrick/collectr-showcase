import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Header from "../components/homepage/Header";
import Footer from "../components/homepage/Footer";
import HtmlHead from "../components/homepage/HtmlHead";
import HeroBanner from "../components/homepage/HeroBanner";
import Showcases from "../components/homepage/Showcases";
import Categories from "../components/homepage/Categories";
import axios from "axios";

const Home: NextPage = () => {
  const [bannerImages, setBannerImages] = useState([]);
  const [showcases, setShowcases] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://djk9wkkysj.execute-api.us-east-1.amazonaws.com/data/showcase/hero-banner"
      )
      .then((banners) => {
        setBannerImages(banners.data.data);
      });
    axios
      .get(
        "https://djk9wkkysj.execute-api.us-east-1.amazonaws.com/data/showcase?offset=0&limit=4"
      )
      .then((showcases) => {
        setShowcases(showcases.data.data);
      });
    axios
      .get(
        "https://djk9wkkysj.execute-api.us-east-1.amazonaws.com/data/showcase/categories"
      )
      .then((categories) => {
        setCategories(categories.data.data);
      });
  }, []);

  return (
    <>
      <HtmlHead />
      <Header />
      <HeroBanner images={bannerImages} />
      <Showcases showcases={showcases} />
      <Categories categories={categories} />
      <Footer />
    </>
  );
};

export default Home;

// https://djk9wkkysj.execute-api.us-east-1.amazonaws.com/data/showcase - get all showcases, accepts query params: filters, offset and limit

// this route can populate the first 6 showcases on home page, then when you click view all, you can use same route with offset and larger limit
// https://djk9wkkysj.execute-api.us-east-1.amazonaws.com/data/showcase/hero-banner
// List of hero banner images to display with links that on click take you somewhere
// https://djk9wkkysj.execute-api.us-east-1.amazonaws.com/data/showcase/categories
// List of categories to display as filters. FYI the category_id is what will be used when running the first route above passing in categori_id in filter query param to filter out i.e.
// ?filters=3&offset=0&limit=50
// https://djk9wkkysj.execute-api.us-east-1.amazonaws.com/data/showcase?filter=2
