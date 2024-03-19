import { ImProfile, ImStatsBars } from "react-icons/im";
import { PiSoccerBall } from "react-icons/pi";

import AboutImg from "../../assets/about.png";

const About = () => {
  return (
    <section id="about-me" className="about-section padding-top oh padding-bottom">
      <div className="container">
        <div className="section-header margin-olpo">
          <h2 className="title">
            <span className="shape">
              <span>About</span>
            </span>{" "}
            <span>Me</span>
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <p className="header-para">
              Contrary to popular belief, Lorem Ipsum is not simply random
              text. It has roots in a piece of classNameical Latin literature from
              45 BC, making it over 2000 year Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one
              of the more obscure Latin words, consectetur
            </p>
            <div className="about-area">
              <div className="item wow fadeInUp">
                <div className="icon">
                  <ImProfile />
                </div>
                <div className="content">
                  <h5 className="title">
                    <span>Biography</span>
                  </h5>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply
                    random text. It hB making it over
                  </p>
                </div>
              </div>
              <div className="item wow fadeInUp">
                <div className="icon">
                  <ImStatsBars />
                </div>
                <div className="content">
                  <h5 className="title">
                    <span>Stats</span>
                  </h5>
                  <p>Club football: 694 matches, 650 goals</p>
                </div>
              </div>
              <div className="item wow fadeInUp">
                <div className="icon">
                  <PiSoccerBall />
                </div>
                <div className="content">
                  <h5 className="title">
                    <span>Clubs</span>
                  </h5>
                  <ul>
                    <li>Santos FC (1956-1974)</li>
                    <li>New York Cosmos (1975-1977)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 wow fadeInRight d-none d-lg-block"
            data-wow-delay=".5s"
            data-wow-duration="1s"
          >
            <div className="about-thumb">
              <img src={AboutImg} alt="about" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
