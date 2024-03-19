import {
  FaMapLocationDot,
  FaCalendarDays,
  FaWeightScale,
  FaTextHeight,
} from "react-icons/fa6";

import bannerImg from "../../assets/banner.png";
import bannerBgImg from "../../assets/banner-bg.jpg";

import Card from "../contents/Card";

const Content = () => {
  const bannerBg = {
    backgroundImage: `url(${bannerBgImg})`,
  };
  return (
    <>
      <section className="banner-section bg_img" style={bannerBg}>
        <div className="banner-shape shape-1"></div>
        <div className="banner-shape shape-2"></div>
        <div className="banner-shape shape-3"></div>
        <div className="banner-shape shape-4"></div>
        <div className="banner-shape shape-5"></div>
        <div className="banner-shape shape-6"></div>
        <div className="container">
          <div className="banner-content wow fadeInLeft" data-wow-duration="1s">
            <h1 className="title">
              <span className="text-theme d-block">i am</span> Robando kal
            </h1>

            <a href="#About-me" className="custom-button">
              About me
            </a>
            <a href="#My-wallet" className="custom-button">
              My wallet
            </a>
          </div>
          <div
            className="banner-thumb wow fadeInUp"
            data-wow-delay=".5s"
            data-wow-duration="1s"
          >
            <img src={bannerImg} alt="banner" />
          </div>
        </div>
      </section>
      <div id="informationSection" className="information-section mt--103">
        <div className="container">
          <div className="row justify-content-center mb-30-none">
            <Card
              title="Training Center"
              subTitle="Sao Paulo, Brazil"
              icon={<FaMapLocationDot />}
              classColor="one"
            />
            <Card
              title="Date of Birth"
              subTitle="30th August 1992"
              icon={<FaCalendarDays />}
              classColor="two"
            />
            <Card
              title="Weight"
              subTitle="85kg / 8500000 cg"
              icon={<FaWeightScale />}
              classColor="three"
            />
            <Card
              title="Height"
              subTitle="174cm / 68.5039 inch"
              icon={<FaTextHeight />}
              classColor="four"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
