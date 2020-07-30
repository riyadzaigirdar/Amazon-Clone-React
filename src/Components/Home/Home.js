import React from 'react'
import './Home.css'
import banner from './banner.jpg'

function Home() {
    return (
        <div className="app__home">
            <img className="app__home__banner" src={banner} alt="banner"></img>
        </div>
    )
}

export default Home