"use client"
import Home3Banner from "@/components/banner/Home3Banner";
import Home3Blog from "@/components/blog/Home3Blog";
import Home3countdown from "@/components/countdown/Home3countdown";
import Home3Faq from "@/components/faq/Home3Faq";
import Footer2 from "@/components/footer/Footer2";
import Header1 from "@/components/header/Header1";
import LogoMarquee from "@/components/marquee/LogoMarquee";
import Home3Newslatter from "@/components/newslatter/Home3Newslatter";
import Home3PricingPlan from "@/components/pricing-plan/Home3PricingPlan";
import Home3Testimonial from "@/components/testimonial/Home3Testimonial";
import Home3Tools from "@/components/tools/Home3Tools";
import Home3WorkProcess from "@/components/workProcess/Home3WorkProcess";
import useWow from "@/hooks/useWow";


const SaasPage = () => {
  useWow()
  return (
    <>
      <Header1 />
      <Home3Banner />
      <Home3WorkProcess />
      <Home3countdown />
      <LogoMarquee />
      <Home3Testimonial />
      <Home3PricingPlan />
      <Home3Newslatter />
      <Home3Faq />
      <Home3Tools />
      <Home3Blog />
      <Footer2 />
    </>
  );
};

export default SaasPage;
