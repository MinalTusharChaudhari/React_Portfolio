import React from 'react'
import './portfolio.css'
// import SURVEY from '../../assets/survey_form_ss.png'
import TOUR from '../../assets/tour_travel_ss.png'
import PRODUCT from '../../assets/productlanding.png'
import PORTFOLIO from '../../assets/htmlportfolio.png'
import TODO from '../../assets/todolist.png'
import ELEARN from '../../assets/elearning.png'
import TRIBUTE from '../../assets/tributepage.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'></div>
          <img src={PRODUCT} alt="" className='surveyimg'/>
          <h3>Product Landing Page</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/MinalTusharChaudhari/Product_Landing_Page" className='btn' target='_blank' rel="noreferrer">Github</a>

            
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'></div>
          <img src={TOUR} alt="" className='surveyimg'/>
          <h3>Tours And Travels Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn github' target='_blank' rel="noreferrer">Github</a>

            
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'></div>
          <img src={PORTFOLIO} alt="" className='surveyimg'/>
          <h3>Portfolio Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>

            
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'></div>
          <img src={TODO} alt="" className='surveyimg'/>
          <h3>To Do List Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>

            
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'></div>
          <img src={ELEARN} alt="" className='surveyimg'/>
          <h3>E-Learning Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>

            
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'></div>
          <img src={TRIBUTE} alt="" className='surveyimg'/>
          <h3>Tribute Page</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>

            
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio