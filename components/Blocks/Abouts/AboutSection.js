import React from 'react'

const AboutSection = () => {
  return (
    <section className='about-section section-padding'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-xl-6 col-12 pe-xl-0'>
            <div
              className='about-cover-bg bg-cover me-xl-5'
              style={{
                backgroundImage: "url('assets/img/home2/about-cover.jpg')",
              }}
            >
              <div className='our-experience-years'>
                <div className='year-outline'>
                  <h2>30</h2>
                </div>
                <p>
                  Years <span>Experience</span>
                </p>
              </div>
            </div>
          </div>
          <div className='col-xl-6 mt-5 mt-lg-0 col-12'>
            <div className='block-contents'>
              <div className='section-title'>
                <span>About Company</span>
                <h2>We Always Think On Your Dream</h2>
              </div>
              <blockquote>
                Construction actually recommends for content specifically the
                people for the house keywords is popular.
              </blockquote>
            </div>

            <p>
              You should only pick the keywords that are both popular with
              people and ones that you’re also able to rank for. Brian Dean
              actually recommends creating content specifically for the people
              for the house.
            </p>

            <a href='about.html' className='theme-btn mt-35'>
              read more
            </a>
          </div>
        </div>
      </div>
      <h2 className='section-rotate-title d-none d-xxl-block'>ABOUT</h2>
    </section>
  )
}

export default AboutSection
