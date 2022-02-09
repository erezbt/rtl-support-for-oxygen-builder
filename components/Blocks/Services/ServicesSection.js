import React from 'react'

const ServicesSection = () => {
  return (
    <section className='our-service-wrapper section-padding bg-gray'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-12'>
            <div className='block-contents text-center'>
              <div className='section-title'>
                <h5>Service</h5>
                <span>Featured Service</span>
                <h2>What We Do</h2>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-xl-4 col-md-6 col-12'>
            <div className='single-service-card'>
              <div
                className='service-cover-img bg-cover'
                style={{ backgroundImage: "url('assets/img/home2/s1.jpg')" }}
              ></div>
              <div className='content'>
                <div className='icon-title'>
                  <div className='icon'>
                    <i className='flaticon-construction-site'></i>
                  </div>
                  <div className='service-title'>
                    <h4>
                      <a href='services-details.html'>
                        BUILDING REPAIR & CONSTRUCTION
                      </a>
                    </h4>
                  </div>
                </div>
                <p>
                  We commit ourselves to complete all projects within the
                  timeline set with our honorable clients.
                </p>
                <a href='services-details.html' className='read-more'>
                  Read More <i className='fal fa-arrow-right'></i>
                </a>
              </div>
            </div>
          </div>
          <div className='col-xl-4 col-md-6 col-12'>
            <div className='single-service-card'>
              <div
                className='service-cover-img bg-cover'
                style={{ backgroundImage: "url('assets/img/home2/s2.jpg')" }}
              ></div>
              <div className='content'>
                <div className='icon-title'>
                  <div className='icon'>
                    <i className='flaticon-sketch'></i>
                  </div>
                  <div className='service-title'>
                    <h4>
                      <a href='services-details.html'>
                        Any Kind project Planning
                      </a>
                    </h4>
                  </div>
                </div>
                <p>
                  Thousands of successful projects we are one of the most
                  trusted construction companies.
                </p>
                <a href='services-details.html' className='read-more'>
                  Read More <i className='fal fa-arrow-right'></i>
                </a>
              </div>
            </div>
          </div>
          <div className='col-xl-4 col-md-6 col-12'>
            <div className='single-service-card'>
              <div
                className='service-cover-img bg-cover'
                style={{ backgroundImage: "url('assets/img/home2/s3.jpg')" }}
              ></div>
              <div className='content'>
                <div className='icon-title'>
                  <div className='icon'>
                    <i className='flaticon-house-plan'></i>
                  </div>
                  <div className='service-title'>
                    <h4>
                      <a href='services-details.html'>
                        Office, Home Interior Design
                      </a>
                    </h4>
                  </div>
                </div>
                <p>
                  We have a proven record of best result of building and
                  reputable company in the United States.
                </p>
                <a href='services-details.html' className='read-more'>
                  Read More <i className='fal fa-arrow-right'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
