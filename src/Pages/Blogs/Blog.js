import React from "react";
import BlogMain from "../../Components/BlogMain/BlogMain";
import BlogMainHero from "../../Components/BlogMainHero/BlogMainHero";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import HeroSection from "../../Components/HeroSection/HeroSection";
import HeroSectionBlog from "../../Components/HeroSection2/HeroSectionBlog";
import "./Blogs.css";

function Blog() {
  return (
    <>
      <Header />
      <BlogMainHero />
      <BlogMain />
      <Footer />
    </>
  );
}

export default Blog;
