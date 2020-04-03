import React from 'react'
import AboutMe from './AboutMe';
function HomePage() {
    // const aboutStyle= {
    //     height: '100vh',
    //     backgroundImage: 'url("./assets/backgroundPortfolio.png");',
    //     backgroundSize: 'cover',
    //     backgroundPostition: 'center' 
    // }
    return (
        <div>
            <div class="jumbotron jumbotron-fluid hero" >
                <div class="container hero1" >
                <div class="heroContext text-right" >
                    <h1 class="display-4 heroHead" >SARA MUNIR</h1>
                    <div class="d-flex justify-content-end mt-4">
                        <p class="heroSubTxt">A full stackweb developer with a background in architecture.</p>
                    </div>
                    <div class="d-flex justify-content-end mt-4">
                        <div class="myBtn text-center" >READ MORE</div>
                    </div>
                </div>
                </div>
            </div>
            <AboutMe />
            
        </div>

    )
}

export default HomePage
