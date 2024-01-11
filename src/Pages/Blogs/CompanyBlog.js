import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import HeroSectionBlog from "../../Components/HeroSection2/HeroSectionBlog";
import BlogSection from "../../Components/BlogSection";

function CompanyBlog() {
  return (
    <>
      <Header />
      <HeroSectionBlog />
      <BlogSection
        sectionHeading={"Setback to IT Exports In Pakistan"}
        img={"assets/img/blog/800x600.gif"}
        content={
          "Pakistan’s IT industry has become noteworthy in the past few years due to high IT and ITes export services. Pakistan’s economic survey for 2020 -2021 has revealed that the annual growth rate for IT and related services reached 18.85%, which accounts for the highest growth rate for any industry in the region. This unprecedented surge in IT exports helped shape the future goals for the fiscal year 2021-2022 at 3.5 billion dollars. \n \n Unfortunately, it has been expected that Pakistan would be unable to achieve this target as the IT exports of the country have decreased by 27% from February 2021 to till date. Multiple factors are playing their part in this negative growth. They constitute a sudden change of tax regime for the IT industry, delayed cash reward distribution and little incentives, special technology zone enablement, delay in implementation of the PM package announced in January 2022, and political instability in the country.  \n \n All the mentioned factors put a block in the way of foreign investment and investors become hesitant to invest in a country where policymaking is not taken seriously. Hence, Pakistan needs to look into its policies toward one of the fastest growing industry so that the IT industry makes progress by leaps and bounds and add sufficient revenue to the country’s crippling economy."
        }
      />
      <Footer />
    </>
  );
}

export default CompanyBlog;
