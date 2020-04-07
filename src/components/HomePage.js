import React , {useRef}  from 'react'
import AboutMe from './AboutMe';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop); 

function HomePage() {

    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)
    // const executeScroll2 = () => scrollToRef(myRef2)
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
                <div class="heroContext text-left" >
                    <h1 class="display-4 heroHead" >SARA MUNIR</h1>
                    <div class="d-flex justify-content-start mt-4">
                        <p class="heroSubTxt">A full stackweb developer with a background in architecture.</p>
                    </div>
                    <div class="d-flex justify-content-start mt-4">
                        <div class="myBtn text-center"  onClick={executeScroll} >READ MORE</div>
                    </div>
                </div>
                </div>
            </div>
            <AboutMe myRef={myRef} />
            
        </div>

    )
}

export default HomePage
