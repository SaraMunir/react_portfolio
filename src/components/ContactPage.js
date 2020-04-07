import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import mapImg from './assets/torontoMap.jpg';
function ContactPage() {
    const imgStyle= {width: "100%", height: "80vh", objectFit: "cover"}
    return (
        <div>
            <div class="bodyContained">
                <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
                    <div class="container myBox">
                        <div class="row mx-auto myMy ">
                            <img class="col-lg-6" src={mapImg} alt="weather app" style={imgStyle}/>
                            <div class="col-lg-6 text-center contactMe">
                                <h2 class="mt-3">Contact Me</h2>
                                <form class="card-body mt-4">
                                    <div class="form-group text-left">
                                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Your Name"/>
                                    </div>
                                    <div class="form-group  text-left">
                                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email Address"/>
                                    </div>
                                    <div class="form-group text-left">
                                        <label for="exampleFormControlTextarea1">Enter your Message</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <div class="d-flex justify-content-center mt-5">
                                        <a class="myBtn text-center" href="#">SUBMIT</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    )
}

export default ContactPage
