import React, {useState, useEffect} from 'react'
import '../assets/css/projects_style.css'

export const Projects = () => {
    const [isExpanded, setIsExpanded] = useState(false)

    let classes = ["covid_tracker", "home_security", "personal_v1", "tic_tac_toe", "baccarat_game"];
    let each_description = null;

    const expandFunction = (e) => {
        e.preventDefault()
        const index = e.currentTarget.getAttribute('value')
        console.log(index)
        if (each_description === null)   return;
        if (isExpanded && each_description[index].classList.contains(classes[index])) {
            each_description[index].classList.remove(classes[index]);
            each_description[index].classList.add("minimize");
            setIsExpanded(false)
            return;
        }
        else if (isExpanded) {
            for (let i = 0; i < each_description.length; ++i) {
                if (each_description[i].classList.contains(classes[i])) {

                    each_description[i].classList.remove(classes[i]);
                    each_description[i].classList.add("minimize");
                }
            }
        }

        each_description[index].classList.remove("minimize");
        each_description[index].classList.add(classes[index]);
        setIsExpanded(true)
    }

    useEffect(() => {
        each_description = document.querySelectorAll(".projects-section .each .project-description");
        
    })

    return (
        <section id="projects" className="projects-section contents">
            <div className="container-fluid">
                <h1 className="text-left text-uppercase heads mb-2">Projects <span style={{"fontSize": "0.8rem"}}>What I have done</span></h1>
                <div className="row">
                    <div className="wrapper container mb-3 mt-3">

                        <div className="row each clickable-section">
                            <div className="container-fluid d-flex each-area py-3 px-4" value={0} onClick={expandFunction}>
                                <div className="img webapp"></div>
                                <p className="font-weight-light project-head">COVID-19 Tracker</p>
                                <p className="duration ml-2">April - May 2020</p>
                                <section className="info-links ml-auto">
                                    <a className="view_link" href="https://akshantjain-it202projects.github.io/it202-project4/" target="_blank" rel="noopener noreferrer"><i
                                        className="devicon-chrome-plain weblinks"></i></a>
                                    <a className="repo_link" href="https://github.com/Akshantjain-it202projects/it202-project4" target="_blank" rel="noopener noreferrer"><i
                                        className="devicon-github-plain weblinks"></i></a>
                                </section>
                            </div>
                            <div className="project-description minimize">
                                <div className="description text-justify">
                                    <ul>
                                        <li>The web app provides data about the COVID-19 cases worldwide.</li>
                                        <li>The main idea of the project was provide the number of cases for each country.</li>
                                        <li>The data provides the data with graphical visualization to the visitors.</li>
                                        <li>The app/website allows visitor to filter countries.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="row each clickable-section">
                            <div className="container-fluid d-flex each-area py-3 px-4" value={1} onClick={expandFunction}>
                                <div className="img security"></div>
                                <p className="font-weight-light project-head">Home Security System</p>
                                <p className="duration ml-2">September - December 2019</p>
                                <section className="info-links ml-auto">
                                    <a className="repo_link" href="https://github.com/Akshantjain/Home-Security-System" target="_blank" rel="noopener noreferrer"><i className="devicon-github-plain weblinks"></i></a>
                                </section>
                            </div>
                            <div className="project-description minimize">
                                <div className="description text-justify">
                                    <ul>
                                        <li>The project was a part of <em>Computer Design Course</em> (CS 362) of UIC from <em>Fall 2019 </em>
                                    Semester.
                                </li>
                                        <li>This was a group project of three members. </li>
                                        <li>The main idea of the project was to design and create a prototype of home security system.</li>
                                        <li>The prototype is able to detect threats which could take place in a house in your absence.</li>
                                        <li>Potential threats which system could detect includes theft, invade, smoke, fire, gas andlights.</li>
                                        <li>The system is protected by a password which is unique every time you enable the system.</li>
                                        <li>The security system is coded in C++ on Arduino and other hardwares.</li>
                                    </ul>
                                </div>

                                <div className="mb-4 ml-3">
                                    <p className="m-0 mb-1 p-0 text-left text-white-50 subhead"><span className="fa fa-tools px-1 "></span>Hardware and Concepts used:</p>
                                    <div className="horizontal-scroll px-2">
                                        <a target="_blank" rel="noopener noreferrer" href="https://learn.sparkfun.com/tutorials/what-is-an-arduino/all">Arduino UNO (3)</a>
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.arduino.cc/en/Tutorial/MasterWriter">I2C
                                    Communication</a>
                                        <a target="_blank" rel="noopener noreferrer" href="https://learn.adafruit.com/lesson-0-getting-started/breadboard">
                                            BreadBoard (3)</a>
                                        <a target="_blank" rel="noopener noreferrer" href="https://learn.pimoroni.com/tutorial/170pt-projects/anatomy-of-a-mini-breadboard">
                                            Mini BreadBoard (1)</a>
                                        <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Nine-volt_battery"> Batteries (3)</a>
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.arduino.cc/en/Tutorial/HelloWorld"> 16x2 LCD Display
                                    (3)</a>
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.arduino.cc/en/tutorial/blink"> LED Lights (4)</a>
                                        <a target="_blank" rel="noopener noreferrer"
                                            href="https://www.instructables.com/id/How-to-use-a-photoresistor-or-photocell-Arduino-Tu/">
                                            Photoresistor (1)</a>
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.arduino.cc/en/tutorial/potentiometer"> Potentiometer
                                    (3)</a>
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.arduino.cc/en/tutorial/button"> Pin Buttons (2)</a>
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.tutorialspoint.com/arduino/arduino_ultrasonic_sensor.htm">Ultrasonic
                                    Sensor (1)</a>
                                        <a target="_blank" rel="noopener noreferrer" href="https://playground.arduino.cc/Code/Keypad/">4x4 Keypad (1)</a>
                                        <a target="_blank" rel="noopener noreferrer"
                                            href="https://create.arduino.cc/projecthub/Aritro/smoke-detection-using-mq-2-gas-sensor-79c54a">Smoke
                                    Sensor (1)</a>
                                        <a target="_blank" rel="noopener noreferrer"
                                            href="https://create.arduino.cc/projecthub/SURYATEJA/use-a-buzzer-module-piezo-speaker-using-arduino-uno-89df45">
                                            Buzzers (3)</a>
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.arduino.cc/en/reference/wire"> Connecting Wires
                                    (~50)</a>
                                        <a target="_blank" rel="noopener noreferrer" href="https://learn.adafruit.com/adafruit-arduino-lesson-2-leds/resistors"> Resistors
                                    (8)</a>
                                    </div>
                                </div>
                                <div className="mb-4 ml-3">
                                    <p className="m-0 mb-1 p-0 text-left text-white-50 subhead"><span className="px-1 fa fa-file-alt"></span>Project Documents:</p>
                                    <div className="horizontal-scroll px-2">
                                        <a href="http://bit.ly/2SZ3C83" target="_blank" rel="noopener noreferrer">Initial Team and Idea</a>
                                        <a href="http://bit.ly/3c8AoeG" target="_blank" rel="noopener noreferrer">Team and Project Contract</a>
                                        <a href="http://bit.ly/2wIGSAx" target="_blank" rel="noopener noreferrer">Updated Design Document</a>
                                        <a href="http://bit.ly/2SY0FEQ" target="_blank" rel="noopener noreferrer">Project Presentation</a>
                                        <a href="http://bit.ly/2PrJo4V" target="_blank" rel="noopener noreferrer">Final Design Document</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row each clickable-section">
                            <div className="container-fluid d-flex each-area py-3 px-4" value={2} onClick={expandFunction}>
                                <div className="img web"></div>
                                <p className="font-weight-light project-head">Personal Website v1</p>
                                <p className="duration ml-2">July - August 2019</p>
                                <section className="info-links ml-auto">
                                    <a className="view_link" href="http://akshantjain.github.io/v1/" target="_blank"
                                        rel="noopener noreferrer"><i className="devicon-chrome-plain weblinks"></i></a>
                                    <a className="repo_link" href="https://github.com/Akshantjain/v1" target="_blank"
                                        rel="noopener noreferrer"><i className="devicon-github-plain weblinks"></i></a>
                                </section>
                            </div>
                            <div className="project-description minimize">
                                <div className="description text-justify">
                                    <ul>
                                        <li>The project was the first version of my personal website.</li>
                                        <li>The wesite was my first step towards web development and web design.</li>
                                        <li>The website was made using the HTML, CSS and a bit of JavaScript</li>
                                        <li>The website was hosted and deployed using GitHub Pages.</li>
                                        <li>The brand new version (current) of my website is now in public.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="row each clickable-section">
                            <div className="container-fluid d-flex each-area py-3 px-4" value={3} onClick={expandFunction}>
                                <div className="img game"></div>
                                <p className="font-weight-light project-head">Tic Tac Toe Game</p>
                                <p className="duration ml-2">November 2019</p>
                                <section className="info-links ml-auto">
                                    <a className="repo_link" href="https://github.com/Akshantjain/Tic-Tac-Toe-Game" target="_blank" rel="noopener noreferrer"><i className="devicon-github-plain weblinks"></i></a>
                                </section>
                            </div>
                            <div className="project-description minimize">
                                <div className="description text-justify">
                                    <ul>
                                        <li>This project was a part of <em>Software Design Course</em> (CS 342) of UIC from <em>Fall 2019 </em>Semester.</li>
                                        <li>This was a group project of three members.</li>
                                        <li>Coded the games in Java and JavaFX using server and client threads.</li>
                                        <li>Coded the game in multiplayer mode where players play against an algorithm .</li>
                                        <li>Worked on Front-end and client thread in the projects.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="row each clickable-section">
                            <div className="container-fluid d-flex each-area py-3 px-4" value={4} onClick={expandFunction}>
                                <div className="img game"></div>
                                <p className="font-weight-light project-head">Baccarat Game</p>
                                <p className="duration ml-2">September 2019</p>
                                <section className="info-links ml-auto">
                                    <a className="repo_link" href="https://github.com/Akshantjain/Baccarat-Game" target="_blank"
                                        rel="noopener noreferrer"><i className="devicon-github-plain weblinks"></i></a>
                                </section>
                            </div>
                            <div className="project-description minimize">
                                <div className="description text-justify">
                                    <ul>
                                        <li>This project was a part of <em>Software Design Course</em> (CS 342) of UIC from <em>Fall 2019 </em>
                                    Semester.
                                </li>
                                        <li>The game follows the traditional casino baccarat game rules.</li>
                                        <li>The game allows user to make a bet on Player, Bank, Tie or more than as well.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    
                        <a href="https://github.com/Akshantjain?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <div className="row each pt-3 pb-3 px-5 clickable-section">
                                <div className="container d-flex">
                                    <div className="img folder ml-auto"></div>
                                    <p className="font-weight-light project-head mr-auto" style={{ "fontFamily": "Gotham, Helvetica, Arial, sans-serif"}}>More Projects</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
