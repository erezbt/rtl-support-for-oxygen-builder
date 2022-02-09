import React from 'react'

const Loader = () => {
  return (
    <div id='preloader' className='preloader'>
      <div className='animation-preloader'>
        <div className='spinner'></div>
        <div className='txt-loading'>
          <span data-text-preloader='B' className='letters-loading'>
            B
          </span>
          <span data-text-preloader='U' className='letters-loading'>
            U
          </span>
          <span data-text-preloader='S' className='letters-loading'>
            S
          </span>
          <span data-text-preloader='I' className='letters-loading'>
            I
          </span>
          <span data-text-preloader='C' className='letters-loading'>
            C
          </span>
          <span data-text-preloader='O' className='letters-loading'>
            O
          </span>
        </div>
        <p className='text-center'>Loading</p>
      </div>
      <div className='loader'>
        <div className='row'>
          <div className='col-3 loader-section section-left'>
            <div className='bg'></div>
          </div>
          <div className='col-3 loader-section section-left'>
            <div className='bg'></div>
          </div>
          <div className='col-3 loader-section section-right'>
            <div className='bg'></div>
          </div>
          <div className='col-3 loader-section section-right'>
            <div className='bg'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader
