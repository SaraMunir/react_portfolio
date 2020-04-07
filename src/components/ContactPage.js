import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import groupImg from './assets/43069.jpg';
function ContactPage() {
    return (
        <div>
            <div class="bodyContained">
                <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
                    <div class="row container mx-auto myBox">
                        <div class="col-lg-6">
                            <img src={groupImg} alt="weather app image" style={{width: "100%"}}/>
                        </div>
                        <div class="col-lg-6 text-center pt-4">
                            <h2 class="mt-3">
                            Fitness Tracker
                            </h2>
                            <p>Fitness Diaries is a full-stack web application that uses MVC design pattern with local server-side API. The application is designed for people who are conscious about their health and follow a fitness regime or lose weight with a socializing aspect. The app addresses the need of having some friends around who can motivate and cheer you up in your fitness journey instead of a showcasing a plain list of exercises and diet plans. It's concise compared to social networking channels and broader than chat applications.
                            </p>
                            <div class="d-flex justify-content-center mt-4">
                                <a class="myBtn text-center" href="https://fitness-diaries.herokuapp.com/">LIVE DEMO</a>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    )
}

export default ContactPage
