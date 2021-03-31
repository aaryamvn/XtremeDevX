import React from 'react'
import './HomeBanner.css'

const HomeBanner = () => {
    return (
        <div className="HomeBanner">
            <div className="HomeBanner__sub">
                <div className="fd-row">
                    <img src="https://avatars.githubusercontent.com/u/63039748?v=4" alt="" draggable="false" className="HomeBanner__profilepic" />
                    <h1 className="HomeBanner__title">
                        I'm the <span className="emphasis-1">XtremeDevX</span>.
                    </h1>
                    <span className="HomeBanner__location">
                        <i className="fal fa-map-marker-alt"></i> Bangalore, India
                    </span>
                    <p className="HomeBanner__content">A passionate 14 year old full stack developer.</p>
                    <div className="HomeBanner__links">
                        <a className="HomeBanner__link HomeBanner__link-icon" href="https://twitter.com/XtremeDevX" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                        <a className="HomeBanner__link HomeBanner__link-icon" href="https://www.linkedin.com/in/tejas-ravishankar-3a8898209/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a className="HomeBanner__link HomeBanner__link-icon" href="https://github.com/XtremeDevX" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                        <a className="HomeBanner__link HomeBanner__link-icon" href="mailto:xtremedevx@gmail.com"><i className="fas fa-envelope"></i></a>
                        <a className="HomeBanner__link HomeBanner__link-text" href="/about">About <i className="fal fa-arrow-right"></i></a>
                        <a className="HomeBanner__link HomeBanner__link-text" href="/work">Work <i className="fal fa-arrow-right"></i> </a>
                        <a className="HomeBanner__link HomeBanner__link-text" href="/work">Blog <i className="fal fa-arrow-right"></i> </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner
