import Script from 'next/script'
import React from 'react'

const MainFooter = () => {
  return (
    <>
      <footer className='footer-2 footer-wrap'>
        <div className='footer-widgets-wrapper text-white'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-3 pe-xl-0 col-sm-6 col-12'>
                <div className='single-footer-wid site_info_widget'>
                  <div className='wid-title'>
                    <h3>Get In Touch</h3>
                  </div>
                  <div className='contact-us'>
                    <div className='single-contact-info'>
                      <div className='icon'>
                        <i className='fal fa-phone'></i>
                      </div>
                      <div className='contact-info'>
                        <p>+673 853 605 985</p>
                        <p>908 9098 987 98</p>
                      </div>
                    </div>
                    <div className='single-contact-info'>
                      <div className='icon'>
                        <i className='fal fa-envelope'></i>
                      </div>
                      <div className='contact-info'>
                        <p>info@example.com</p>
                        <p>info@webexample.com</p>
                      </div>
                    </div>
                    <div className='single-contact-info'>
                      <div className='icon'>
                        <i className='fal fa-map-marker-alt'></i>
                      </div>
                      <div className='contact-info'>
                        <p>
                          7300-7398 Colonial Rd, Brooklyn, <br />
                          NY 11209
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-sm-6 offset-xl-1 col-xl-3 ps-xl-5 col-12'>
                <div className='single-footer-wid'>
                  <div className='wid-title'>
                    <h3>Quick Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href='about.html'>About Company</a>
                    </li>
                    <li>
                      <a href='services.html'>Communication Services</a>
                    </li>
                    <li>
                      <a href='services.html'>Internet of Things</a>
                    </li>
                    <li>
                      <a href='services.html'>Product Development</a>
                    </li>
                    <li>
                      <a href='services.html'>Industrial Automation</a>
                    </li>
                    <li>
                      <a href='contact.html'>Payment Getway</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-sm-6 col-xl-4 offset-xl-1 col-12'>
                <div className='single-footer-wid newsletter_widget'>
                  <div className='wid-title'>
                    <h3>Our Footprint</h3>
                  </div>
                  <div className='map-location'>
                    <img src='assets/img/footer-map.png' alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='footer-cta-wrapper'>
          <div className='container'>
            <div className='footer-cta-bg-wrapper'>
              <div className='row justify-content-around align-items-center'>
                <div className='col-lg-3 col-md-3 col-12'>
                  <div className='footer-logo'>
                    <a href='index.html'>
                      <img src='assets/img/footer-logo.png' alt='logo' />
                    </a>
                  </div>
                </div>
                <div className='col-lg-4 col-md-5 ps-lg-0 offset-lg-1 col-12'>
                  <div className='footer-middle-text mt-4 mb-4 mt-md-0 mb-md-0 text-white'>
                    <p>
                      Become an innovative entrepreneurial & empowered company
                      constantly creating mission to be a world className
                      construction company.
                    </p>
                  </div>
                </div>
                <div className='col-md-4 col-lg-4 col-12'>
                  <div className='footer-social-icon ms-lg-5 text-lg-md-end'>
                    <a href='#'>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a href='#'>
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a href='#'>
                      <i className='fab fa-instagram'></i>
                    </a>
                    <a href='#'>
                      <i className='fab fa-linkedin-in'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='footer-bottom'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-md-6 col-12 text-center text-md-left'>
                <div className='copyright-info'>
                  <p>
                    &copy; 2022 Copyright By <a href='index.html'>Busico</a>.
                    All Rights Reserved
                  </p>
                </div>
              </div>
              <div className='col-md-6 col-12'>
                <div className='footer-menu mt-3 mt-md-0 text-center text-md-end'>
                  <ul>
                    <li>
                      <a href='#'>Teams & Conditions</a>
                    </li>
                    <li>
                      <a href='#'>Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Script src='/assets/js/modernizr.min.js'></Script>
      <Script src='/assets/js/jquery.easing.js'></Script>
      <Script src='/assets/js/popper.min.js'></Script>
      <Script src='/assets/js/bootstrap.min.js'></Script>
      <Script src='/assets/js/isotope.pkgd.min.js'></Script>
      <Script src='/assets/js/imageload.min.js'></Script>
      <Script src='/assets/js/scrollUp.min.js'></Script>
      <Script src='/assets/js/owl.carousel.min.js'></Script>
      <Script src='/assets/js/magnific-popup.min.js'></Script>
      <Script src='/assets/js/counterup.min.js'></Script>
      <Script src='/assets/js/wow.min.js'></Script>
      <Script src='/assets/js/metismenu.js'></Script>
      <Script src='/assets/js/ajax-mail.js'></Script>
      <Script src='/assets/js/active.js'></Script>
    </>
  )
}

export default MainFooter
