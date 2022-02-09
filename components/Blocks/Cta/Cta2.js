import React from 'react'

const Cta2 = () => {
  return (
    <section className='cta-wrapper style-2 cta-theme-bg'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-8 col-xl-7 offset-xl-1 col-12'>
            <div className='cta-text align-items-center d-md-flex text-center text-md-start'>
              <i className='flaticon-email'></i>
              <h2>Looking for a quality Architect for your project?</h2>
            </div>
          </div>
          <div className='col-md-4 text-center text-md-end'>
            <a href='contact.html' className='theme-btn border-btn text-center'>
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta2
