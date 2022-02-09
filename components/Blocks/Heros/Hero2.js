import React from 'react'

const Hero2 = () => {
  return (
    <section className='hero-wrapper hero-2'>
      <div className='hero-slider-2 owl-carousel owl-theme'>
        <div
          className='single-slide bg-cover'
          style={{ backgroundImage: "url('assets/img/home2/hero1.jpg')" }}
        >
          <div className='container'>
            <div className='row'>
              <div className='col-12 pe-lg-5 col-xxl-7 col-lg-9'>
                <div className='hero-contents pe-lg-3'>
                  <h1
                    className='wow fadeInLeft animated'
                    data-wow-duration='1.3s'
                  >
                    we build Your Dream
                  </h1>
                  <p
                    className='pe-lg-5 wow fadeInLeft animated'
                    data-wow-duration='1.3s'
                    data-wow-delay='.4s'
                  >
                    Busico is a construction and architecture environmentally
                    most responsible for any kinds of themes.
                  </p>
                  <a
                    href='contact.html'
                    className='theme-btn me-sm-4 wow fadeInLeft'
                    data-wow-duration='1.2s'
                    data-wow-delay='.8s'
                  >
                    contact us
                  </a>
                  <a
                    href='projects.html'
                    className='theme-btn wow fadeInLeft'
                    data-wow-duration='1.2s'
                    data-wow-delay='.6s'
                  >
                    our portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='single-slide bg-cover'
          style={{ backgroundImage: "url('assets/img/home2/hero2.jpg')" }}
        >
          <div className='container'>
            <div className='row'>
              <div className='col-12 pe-lg-5 col-xxl-7 col-lg-9'>
                <div className='hero-contents pe-lg-3'>
                  <h1>we make Dream home</h1>
                  <p className='pe-lg-5'>
                    Busico is a construction and architecture environmentally
                    most responsible for any kinds of themes.
                  </p>
                  <a href='contact.html' className='theme-btn me-sm-4'>
                    contact us
                  </a>
                  <a href='projects.html' className='theme-btn'>
                    our portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero2
