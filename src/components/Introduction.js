import React from 'react'
import '../assets/css/about_style.css'
import myImage from '../assets/images/my_image.webp'

export const Introduction = () => {
    return (
        <section id="about" className="about-section contents">
            <div id="container" className="container-fluid">
                <h1 className=" text-left text-uppercase heads">About Me <span style={{"fontSize": "0.8rem"}}>Who I am</span></h1>
                <div className="row m-3">
                    <div className="about-intro pt-2">
                        <p className="name text-white mb-2" style={{ " fontFamily": " Cambria, Georgia, serif"}}>Hi! I'm Akshant Jain!</p>
                        <span className="line mt-0 mb-4"/>
                        <img src={myImage} className="headshot" alt="Me"/>
                        <p className="text-white-50 mb-3" style={{ "fontFamily": "Gotham,Helvetica,Arial,sans-serif"}}>
                            I'm a fourth year student at University of Illinois at Chicago studying Computer Science with minor in mathematics. I have
                            experience in developing and designing computer softwares and web applications from simple basic programs to progressive and responsice web applications and websites.
                            I love to create software to enhance user experience and solve real world problems in a creative ways.
                    <br/><br/>
                                I like learning new development languages to create user experiences with clean, efficient, and scalable code. I
                                consider work an ongoing education, and I'm always looking for opportunities to work people who are willing to share
                                their knowledge and skills so that we could develop better things. At the end of the day, my primary goal is to learn and help people with their
                                problems in a virtual and creative way through my skills and knowledge.
                    <br/><br/>
                                    I am also interested in learning Artificial Intelligence and Machine Learning to find a way to develop programs in a much easier and
                                    productive manner.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
