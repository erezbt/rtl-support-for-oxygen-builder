import React from 'react'

const MainHeader = () => {
  return (
    <header className='header-wrap header-2'>
      <div className='header-top-bar text-white d-none d-sm-block'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-9 col-sm-9'>
              <ul className='top-left-content'>
                <li>
                  <i className='flaticon-paper-plane'></i> Info@example.com
                </li>
                <li>
                  <i className='flaticon-map'></i> Jones Street, New York, USA
                </li>
              </ul>
            </div>
            <div className='col-lg-2 col-sm-3 text-end'>
              <div className='top-social-icons'>
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

      <div className='main-header-wrapper'>
        <div className='container-fluid align-items-center justify-content-between d-flex'>
          <div className='logo'>
            <a href='index.html'>
              <img src='assets/img/logo-color.png' alt='logo' />
            </a>
          </div>
          <div className='main-menu d-none d-lg-block'>
            <ul>
              <li>
                <a href='index.html'>
                  Home <i className='fal fa-plus'></i>
                </a>
                <ul className='sub-menu'>
                  <li>
                    <a href='index.html'>homepage 1</a>
                  </li>
                  <li>
                    <a href='index-2.html'>homepage 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='services.html'>Services</a>
              </li>
              <li>
                <a href='projects.html'>portfolio</a>
              </li>
              <li>
                <a href='#'>
                  Pages <i className='fal fa-plus'></i>
                </a>
                <ul className='sub-menu'>
                  <li>
                    <a href='about-2.html'>about 2</a>
                  </li>
                  <li>
                    <a href='team.html'>team</a>
                  </li>
                  <li>
                    <a href='faq.html'>faq</a>
                  </li>
                  <li>
                    <a href='projects.html'>projects</a>
                  </li>
                  <li>
                    <a href='projects-2.html'>projects 2</a>
                  </li>
                  <li>
                    <a href='pricing.html'>Pricing</a>
                  </li>
                  <li>
                    <a href='pricing-2.html'>Pricing 2</a>
                  </li>
                  <li>
                    <a href='services-2.html'>services 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='news.html'>News</a>
              </li>
              <li>
                <a href='contact.html'>Contact</a>
              </li>
            </ul>
          </div>
          <div className='d-inline-block d-lg-none'>
            <div className='mobile-nav-wrap'>
              <div id='hamburger'>
                <i className='fal fa-bars'></i>
              </div>

              <div className='mobile-nav'>
                <button type='button' className='close-nav'>
                  <i className='fal fa-times-circle'></i>
                </button>
                <nav className='sidebar-nav'>
                  <ul className='metismenu' id='mobile-menu'>
                    <li>
                      <a className='has-arrow' href='#'>
                        Homes
                      </a>
                      <ul className='sub-menu'>
                        <li>
                          <a href='index.html'>Homepage 1</a>
                        </li>
                        <li>
                          <a href='index-2.html'>Homepage 2</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href='services.html'>Services</a>
                    </li>
                    <li>
                      <a href='projects.html'>portfolio</a>
                    </li>
                    <li>
                      <a className='has-arrow' href='#'>
                        Pages
                      </a>
                      <ul className='sub-menu'>
                        <li>
                          <a href='faq.html'>faq</a>
                        </li>
                        <li>
                          <a href='services-details.html'>services details</a>
                        </li>
                        <li>
                          <a href='team.html'>Team</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href='news.html'>News</a>
                    </li>
                    <li>
                      <a href='contact.html'>Contact</a>
                    </li>
                  </ul>
                </nav>

                <div className='action-bar'>
                  <a href='mailto:modinatheme@gmail.com'>
                    <i className='fal fa-envelope'></i>info@webmail.com
                  </a>
                  <a href='tel:123-456-7890'>
                    <i className='fal fa-phone'></i>987-098-098-09
                  </a>
                  <a href='contact.html' className='d-btn theme-btn'>
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className='overlay'></div>
          </div>
          <div className='right-elements d-none d-xl-flex d-flex align-items-center'>
            <div className='search-icon'>
              <a href='#' className='search-btn'>
                <i className='fas fa-search'></i>
              </a>
              <div className='search-box'>
                <form action='#'>
                  <input type='text' placeholder='Search' />
                  <button type='submit'>
                    <i className='fal fa-search'></i>
                  </button>
                </form>
              </div>
            </div>
            <div className='call-action'>
              <span>Call For Support</span>
              <p>+5 282 350 360</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader
