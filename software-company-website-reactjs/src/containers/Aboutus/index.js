import React from "react";
import "./style.css";
import countsimg from '../../assets/images/counts-img.svg'
import 'boxicons';
import { AboutPageText } from "./data";
import { Icon } from '@iconify/react';

export default function Aboutus() {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>{AboutPageText.pageTitle}</h2>
          </div>

          <div className="row content">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
              <p>
                {AboutPageText.pageDes1}
              </p>
              <ul>
                <li>
                <Icon icon="ri:check-double-line" /> {AboutPageText.pageDesList1}
                </li>
                <li>
                <Icon icon="ri:check-double-line" /> {AboutPageText.pageDesList2}
                </li>
                <li>
                <Icon icon="ri:check-double-line" /> {AboutPageText.pageDesList3}
                </li>
              </ul>
            </div>
            <div
              className="col-lg-6 pt-4 pt-lg-0"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <p>
               {AboutPageText.pageDes2}
              </p>
              <a href="#" className="btn-learn-more">
                {AboutPageText.pageButton}
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End About Us Section --> */}


      {/* <!-- ======= Counts Section ======= --> */}
    <section id="counts" className="counts">
      <div className="container">

        <div className="row">
          <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
            <img src={countsimg} alt="" className="img-fluid"/>
          </div>

          <div className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay="300">
            <div className="content d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-emoji-smile"></i>
                    <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="1" className="purecounter"></span>
                    <p><strong>Happy Clients</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                  </div>
                </div>

                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-journal-richtext"></i>
                    <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" className="purecounter"></span>
                    <p><strong>Projects</strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan</p>
                  </div>
                </div>

                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-clock"></i>
                    <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1" className="purecounter"></span>
                    <p><strong>Years of experience</strong> aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel</p>
                  </div>
                </div>

                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-award"></i>
                    <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
                    <p><strong>Awards</strong> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End .content--> */}
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End Counts Section --> */}

    </>
  );
}
