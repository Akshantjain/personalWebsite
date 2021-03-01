import React from 'react'
import '../assets/css/experience_style.css'

export const Experience = () => {
    return (
        <section id="experience" className="experience-section content ">
            <div className="container-fluid">
                <h1 className="text-left text-uppercase heads mb-2">Experience <span style={{fontSize: "0.8rem", minWidth: "176px"}}>What I Have learned</span></h1>

                <div className="row">
                    <div className="wrapper mt-1">
                        <div className="container each">
                            <div className="row py-2 mx-3">
                                <div className="ex-heads">
                                    <div className="img college"></div>
                                    <p className="text-uppercase d-inline-block text-white head_p">Education<span className="line" style={{width: "80%"}}></span></p>
                                </div>
                                <div className="mt-1 ex-para">
                                    <p className="text-white mb-0 head_p">University of Illinois at Chicago (UIC)</p>
                                    <span className="line" style={{width: "50%", height: "1px"}}></span>
                                    <p className="text-white ml-1 mb-0 para-p" style={{ "fontFamily": "Cambria, Georgia, serif"}}>
                                        Bachelor of Science in Computer Science with Minor in Mathematics
                                </p>
                                    <p className="text-white-50 ml-3 para-p">
                                        Junior Year<br/>
                                            Graduation Expected: May 2021<br/>
                                                Honors: Dean's List
                                </p>
                            </div>
                        </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="wrapper">
                                <div className="container each">
                                    <div className="row py-2 mx-3">
                                        <div className="ex-heads">
                                            <div className="img course"></div>
                                            <p className="text-uppercase d-inline-block text-white head_p">Coursework<span className="line"
                                                style={{width: "80%"}}></span></p>
                                        </div>
                                        <div className="mt-1 ex-para">
                                            <p className="text-white mb-0 head_p">University of Illinois at Chicago (UIC)</p>
                                            <span className="line" style={{width: "50%", height: "1px"}}></span>
                                            <ul className="text-white-50 para-p" style={{listStyleType: "square"}}>
                                                <li>Program Design I and Program Design II</li>
                                                <li>Data Structures</li>
                                                <li>Programming Design and Implementations</li>
                                                <li>Software and Computer Design</li>
                                                <li>Web and Multimedia Technology</li>
                                                <li>Software Development for Mobile Platforms</li>
                                            </ul>

                                            <p className="text-white mb-0 head_p">Harvard University Online Course</p>
                                            <span className="line" style={{width: "40%", height: "1px"}}></span>
                                            <ul className="text-white-50 para-p" style={{listStyleType: "square"}}>
                                                <li>CS50: Introduction to Computer Science</li>
                                                <li>CS50: Introduction to Artificial Intelligence with Python</li>
                                            </ul>

                                            <p className="text-white mb-0 head_p">Coursera Online Courses</p>
                                            <span className="line" style={{width: "30%", height: "1px"}}></span>
                                            <ul className="text-white-50 para-p" style={{listStyleType: "square"}}>
                                                <li>Front-End Web Development with React</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="wrapper">
                                <div className="container each">
                                    <div className="row py-2 mx-3">
                                        <div className="ex-heads">
                                            <div className="img connect"></div>
                                            <p className="text-uppercase d-inline-block text-white head_p">Professional Affiliations<span className="line"
                                                style={{width: "80%"}}></span></p>
                                        </div>
                                        <div className="mt-1 ex-para ">
                                            <p className="text-white mb-0 head_p">Association for Computing Machinery (ACM)</p>
                                            <span className="line" style={{width: "50%", height: "1px"}}></span>
                                            <p className="text-white-50 ml-1 mb-0 para-p">
                                                Member of ACM UIC and International since January 2020.
                                </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </section>
    )
}
