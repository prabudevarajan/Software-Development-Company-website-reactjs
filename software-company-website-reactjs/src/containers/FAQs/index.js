import React from "react";
import { FaqsPage } from "./data";
import './style.css';

export default function FAQs(){
    return(
        <>
         <section id="faq" className="faq">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>{FaqsPage.pageTitle}</h2>
        </div>

        <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-5">
            <i className="ri-question-line"></i>
            <h4>{FaqsPage.faq1Ques}</h4>
          </div>
          <div className="col-lg-7">
            <p>{FaqsPage.faq1Ans} </p>
          </div>
        </div>
        {/* <!-- End F.A.Q Item--> */}

        <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
          <div className="col-lg-5">
            <i className="ri-question-line"></i>
            <h4>{FaqsPage.faq2Ques}</h4>
          </div>
          <div className="col-lg-7">
            <p>{FaqsPage.faq2Ans} </p>
          </div>
        </div>
        {/* <!-- End F.A.Q Item--> */}

        <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
          <div className="col-lg-5">
            <i className="ri-question-line"></i>
            <h4>{FaqsPage.faq3Ques}</h4>
          </div>
          <div className="col-lg-7">
            <p>{FaqsPage.faq3Ans}    </p>
          </div>
        </div>
        {/* <!-- End F.A.Q Item--> */}

        <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
          <div className="col-lg-5">
            <i className="ri-question-line"></i>
            <h4>{FaqsPage.faq4Ques}</h4>
          </div>
          <div className="col-lg-7">
            <p>{FaqsPage.faq4Ans} </p>
          </div>
        </div>
        {/* <!-- End F.A.Q Item--> */}

        <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="500">
          <div className="col-lg-5">
            <i className="ri-question-line"></i>
            <h4>{FaqsPage.faq5Ques}</h4>
          </div>
          <div className="col-lg-7">
            <p>{FaqsPage.faq5Ans}   </p>
          </div>
        </div>
        {/* <!-- End F.A.Q Item--> */}

      </div>
    </section>
    {/* <!-- End F.A.Q Section --> */}

        </>
    )
}