import React from 'react';
import weatherImg from './assets/weatherApp.jpg'
import groupImg from './assets/43069.jpg'
import foodImg from './assets/cookingForDummies.png';
import ScrollAnimation from 'react-animate-on-scroll';

function ProjectPage() {
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
                <ScrollAnimation animateIn="slideInRight" animateOut='slideOutLeft'>
                    <div class="row container mx-auto myBox">
                        <div  class="col-lg-6 text-center pt-4">
                            <h2 class="mt-3">
                            Cooking For Dummies
                            </h2>
                            <p>This web application is designed to take a user step by step through any recipe found on the internet. The user is able to save their favourite recipes and access them later. User is provided with nutritional information.
                            </p>
                            <div class="d-flex justify-content-center mt-4">
                                <a class="myBtn text-center" href="https://stephanieblom.github.io/Project-1/">LIVE DEMO</a>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <img src={foodImg} alt="food app image"/>
                        </div>
                    </div>        
                </ScrollAnimation>    
                <ScrollAnimation animateIn="slideInLeft" animateOut='slideOutRight'>
                    <div class="row container mx-auto myBox">
                        <div class="col-lg-6">
                            <img src={weatherImg} alt="weather app image"/>
                        </div>
                        <div  class="col-lg-6 text-center pt-4">
                            <h2 class="mt-3">
                            Weather Dashboard
                            </h2>
                            <p>This weather app allows users to search for a city with current and future weather conditions for that city. Users are able to add to the search history and also retrive the data when they visit the app again. The user can delete the cities from the search history
                            </p>
                            <div class="d-flex justify-content-center mt-4">
                                <a class="myBtn text-center" href="https://saramunir.github.io/Weather-Dashboard/">LIVE DEMO</a>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>    
            </div>
        </div>
    )
}

export default ProjectPage
