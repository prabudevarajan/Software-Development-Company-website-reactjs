import React from "react";
import { ServicesPageText } from "./data";
import './style.css';
import mobileapp from '../../assets/images/mobile-app.png';
import digitalmarket from '../../assets/images/digital-market.png';
import arvr from '../../assets/images/ar-vr.png';
import enterprisesolution from '../../assets/images/enterprise-solution.png';
import uiux from '../../assets/images/ui-ux.png';
import webdevelopment from '../../assets/images/web-development.png';

export default function Services(){
    return(
        <>
        <section id="services" class="services">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>{ServicesPageText.pageTitle}</h2>
          <p>{ServicesPageText.pageTitleSub}</p>
        </div>

        <div class="row">
          <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div class="icon">
                  <i class="bx bxl-dribbble"></i>
                  <img src={mobileapp} />
                  </div>
              <h4 class="title"><a href="">{ServicesPageText.services1}</a></h4>
              <p class="description">{ServicesPageText.servicesDes}</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div class="icon"><i class="bx bx-file"></i>
              <img src={webdevelopment} /></div>
              <h4 class="title"><a href="">{ServicesPageText.services2}</a></h4>
              <p class="description">{ServicesPageText.servicesDes} </p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div class="icon"><i class="bx bx-tachometer"></i>
              <img src={uiux} />
              </div>
              <h4 class="title"><a href="">{ServicesPageText.services3}</a></h4>
              <p class="description">{ServicesPageText.servicesDes}</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div class="icon"><i class="bx bx-world"></i>
              <img src={enterprisesolution} />
              </div>
              <h4 class="title"><a href="">{ServicesPageText.services4}</a></h4>
              <p class="description">{ServicesPageText.servicesDes} </p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div class="icon"><i class="bx bx-world"></i>
              <img src={arvr} />
              </div>
              <h4 class="title"><a href="">{ServicesPageText.services5}</a></h4>
              <p class="description">{ServicesPageText.servicesDes} </p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div class="icon"><i class="bx bx-world"></i>
              <img src={digitalmarket} />
              </div>
              <h4 class="title"><a href="">{ServicesPageText.services6}</a></h4>
              <p class="description">{ServicesPageText.servicesDes} </p>
            </div>
          </div>

        </div>

      </div>
    </section>
    

        </>
    )
}

