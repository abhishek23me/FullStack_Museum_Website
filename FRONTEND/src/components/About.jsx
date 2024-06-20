import React from "react";
import { Container, Row, Col } from "reactstrap";
import about1 from "../Images/images4.jpg";
import about2 from "../Images/images2.jpg";
import about3 from "../Images/img2.jpg";
import about4 from "../Images/images3.jpg";
// import Navbar from "./Navbar";
// import Footer from "./Footer";


const About = () => {
  return (
  <>
  {/* <Navbar/> */}
    <section className="py-5" style={{background: "linear-gradient(to right, rgb(0 0 0), rgb(0 0 0 / 79%), rgb(0 0 0))",height:"82vh"}}>
      <div style={{maxWidth:"1375px"}} className="container">
        <div className="row gx-4 align-items-center justify-content-between">
          <div  className="col-md-5" width="900px">
            <div className="mt-5 mt-md-0">
              <h2 style={{marginBottom:"20px"}} className="display-5 fw-bold ">About Us</h2>
              <p className="lead" style={{fontSize:"16px"}}>
              India's cultural heritage is a rich tapestry woven from thousands of years of history. Across the subcontinent, countless artifacts from ancient civilizations, royal dynasties, and diverse communities tell the story of a nation steeped in tradition and innovation. From intricate sculptures and vibrant paintings to exquisite textiles and historic coins, these treasures offer a glimpse into the artistic and technological advancements of bygone eras.             </p>
              <p className="lead" style={{fontSize:"16px"}}>
              Detailed documentation and preservation efforts ensure that the significance of each artifact is well-understood and appreciated. Interactive and multimedia presentations enhance the experience, making the rich history accessible and engaging for all. Exploring India's cultural heritage provides a profound connection to the past, revealing the depth and diversity of a nation that continues to captivate and inspire.              </p >
            </div>
          </div>
          <div style={{width: "600px",
        margin: "30px 20px"}} className="col-md-6 offset-md-1 order-1 order-md-2">
            <div className="row gx-2 gx-lg-3">
              <div className="col-6">
                <div className="mb-2">
                  <img className="img-fluid rounded-3" src={about1} />
                </div>
              </div>
              <div className="col-6">
                <div className="mb-2">
                  <img className="img-fluid rounded-3" src={about2} />
                </div>
              </div>
              <div className="col-6">
                <div class="mb-2">
                  <img className="img-fluid rounded-3" src={about3} />
                </div>
              </div>
              <div className="col-6">
                <div className="mb-2">
                  <img className="img-fluid rounded-3" src={about4} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* <Footer/> */}
    </section>
    </>
  );
};

export default About;
