import React from 'react'
import '../assets/css/skills_style.css'

export const Coursework = () => {
    return (
        <section id="skills" className="skill-section contents ">
            <div className="container-fluid">
                <h1 className="text-left text-uppercase heads mb-2">Coursework and Skills <span style={{fontSize: "0.8rem"}}>What I Know</span></h1>
                <div className="row m-auto">
                    <div className="wrapper mb-4 mt-1 pt-2">
                        <div className="mb-2">
                            <div className="img idea mb-3"></div>
                            <p className="head_p text-uppercase d-inline-block text-white">knowledge: <span className="line" style={{width: "80%"}}></span></p>
                            <i id="java" onmouseenter="colorin(0)" onmouseout="colorout(0)" className="devicon-java-plain-wordmark java"></i>
                            <i id="cpp" onmouseenter="colorin(1)" onmouseout="colorout(1)" className="devicon-cplusplus-line cplusplus"></i>
                            <i id="python" onmouseenter="colorin(2)" onmouseout="colorout(2)" className="devicon-python-plain-wordmark python"></i>
                            <i id="mysql" className="devicon-mysql-plain-wordmark mysql"></i>
                            <i id="android" onmouseenter="colorin(3)" onmouseout="colorout(3)" className="devicon-android-plain-wordmark android"></i>
                            <i id="html" onmouseenter="colorin(4)" onmouseout="colorout(4)" className="devicon-html5-plain-wordmark html"></i>
                            <i id="css" onmouseenter="colorin(5)" onmouseout="colorout(5)" className="devicon-css3-plain-wordmark css"></i>
                            <i id="jscript" className="devicon-javascript-plain javascript"></i>
                            <i id="boot" className="devicon-bootstrap-plain-wordmark bootstrap"></i>
                            <i id="react" onmouseenter="colorin(6)" onmouseout="colorout(6)" className="devicon-react-original-wordmark react"></i>
                            <i id="gitlogo" onmouseenter="colorin(7)" onmouseout="colorout(7)" className="devicon-github-plain-wordmark git"></i>
                            {/* <!-- <span className="line line-center line2 mt-2 line_knowledge" style="height: 1px"></span> --> */}
                    </div>
                        <div className=" pt-4 pb-3 row border-secondary border-top">
                            <div className="col text-white border-secondary skill-row">
                                <div className="img code"></div>
                                <p className="head_p text-uppercase d-inline-block">computer science (UIC)<span className="line" style={{width: "80%"}}></span></p>
                                <p className="para text-white-50">
                                    Using Programming languages like Java, C++, etc. along with web development,
                                    I am passionate about combining these two different developments to develop new softwares and programs to enhance
                                    user experience and make provide more functionalities.
                            </p>
                            </div>
                            <div className="col text-white border-secondary skill-row">
                                <div className="img skill"></div>
                                <p className="head_p text-uppercase d-inline-block">Skills<span className="line" style={{width: "80%"}}></span></p>
                                <p className="para text-white-50">
                                    While pursiung my bachelor's degree, I have come acroos different programming languages as well as web languages.
                                    I have a good experience with programming languages namely JAVA, C++, Python, SQL, and web languages like HTML, CSS, JavaScript and Bootstrap.
                            </p>
                            </div>
                        </div>
                        <div className="row pt-4 pb-3 border-secondary border-top">
                            <div className="col text-white border-secondary skill-row">
                                <div className="img math"></div>
                                <p className="head_p text-uppercase d-inline-block">Mathematics<span className="line" style={{width: "80%"}}></span></p>
                                <p className="para text-white-50">
                                    Along with pursing my computer science degree, I also opted for mathematics as a minor. I love solving math problems
                                    in my free time and also love to help my peers and solve problems with them.
                            </p>
                            </div>
                            <div className="col text-white skill-row">
                                <div className="img tech"></div>
                                <p className="head_p text-uppercase d-inline-block">Tools and Technologies<span className="line" style={{width: "80%"}}></span></p>
                                <p className="para text-white-50">
                                    Coming across the number of languages, I know some tools and technologies like Github, Git, Chrome Dev Tools, etc.
                                    I am trying to know about some more technologies using which I could have some better programming experience
                                    and help my peers to use them as well.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
