import React from 'react';
import myProfile from './assets/myProfile.jpg';


function AboutMe(props) {

    // const myRef2 = useRef(null)
    // const executeScroll = () => scrollToRef(myRef)
    // const executeScroll2 = () => scrollToRef(myRef2)

    return (
        <div ref={props.myRef} id="aboutMe" class="row container aboutMe mx-auto">
                <div class="col-lg-6">
                    <img class="rndImg" src={myProfile} alt="my picture"/>
                </div>
                <div class="col-lg-6 text-center">
                    <h2 class="pinkTxt" >About Me</h2>
                    <p class="">Hi I'm Sara, A full stackweb developer with a background in architecture. I absolutely love being able to combine my knack for design and logic based problem solving to bring abstract ideas to functional and user friendly websites. I am passionate about programing with key interest in both designs and animations.</p>
                    <div class="d-flex justify-content-center mt-4">
                        <div class="myBtn text-center" >SHOW PROJECT</div>
                    </div>
                </div>
            </div>
    )
}

export default AboutMe
