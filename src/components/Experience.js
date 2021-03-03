import React, { useEffect } from 'react'
import '../assets/css/experience_style.css'

export const Experience = (props) => {
    const data = props.data
    return (
        <>
        <section id="experience" className="experience-section content ">
            {data &&
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
                                    <p className="text-white mb-0 head_p">{data.education.undergraduate.university}</p>
                                    <span className="line" style={{width: "50%", height: "1px"}}></span>
                                    <p className="text-white ml-1 mb-0 para-p" style={{ "fontFamily": "Cambria, Georgia, serif"}}>
                                        {data.aboutMe.major} with {data.aboutMe.minor}
                                </p>
                                    <p className="text-white-50 ml-3 para-p">
                                        {data.education.undergraduate.year}<br/>
                                        Graduation Expected: {data.education.undergraduate.graduation}<br/>
                                        Honors: {data.education.undergraduate.honors.map((value, key) => {
                                            return <span key={key}>{value}</span>
                                        })}
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
                                            <div className="img work"></div>
                                            <p className="text-uppercase d-inline-block text-white head_p">Internship<span className="line"
                                                style={{width: "80%"}}></span></p>
                                        </div>
                                        <div className="mt-1 ex-para">
                                            <p className="text-white mb-0 head_p">{data.internship.company}</p>
                                            <span className="line" style={{width: "50%", height: "1px"}}></span>
                                            <p className="text-white ml-1 mb-0 para-p" style={{ "fontFamily": "Cambria, Georgia, serif" }}>
                                                {data.internship.role} | {data.internship.time}
                                            </p>
                                            <ul className="text-white-50 para-p" style={{listStyleType: "square"}}>
                                                {data.internship && data.internship.description.map((value, key) => {
                                                    return <li key={key}>{value}</li>
                                                })}
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
                                            <div className="img course"></div>
                                            <p className="text-uppercase d-inline-block text-white head_p">Coursework<span className="line"
                                                style={{ width: "80%" }}></span></p>
                                        </div>
                                        <div className="mt-1 ex-para">
                                            <p className="text-white mb-0 head_p">University of Illinois at Chicago (UIC)</p>
                                            <span className="line" style={{ width: "50%", height: "1px" }}></span>
                                            <ul className="text-white-50 para-p" style={{ listStyleType: "square" }}>
                                            {data.education.undergraduate.coursework && 
                                                data.education.undergraduate.coursework.map((value, key) => {
                                                    return <li key={key}>{value}</li>
                                                })}
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
                                            <p className="text-uppercase d-inline-block text-white head_p">Affiliations<span className="line"
                                                style={{width: "80%"}}></span></p>
                                        </div>
                                        <div className="mt-1 ex-para ">
                                            <p className="text-white mb-0 head_p">{data.affiliations.organisation}</p>
                                            <span className="line" style={{width: "50%", height: "1px"}}></span>
                                            <p className="text-white ml-1 mb-0 para-p" style={{ "fontFamily": "Cambria, Georgia, serif" }}>
                                                {data.affiliations.duration}
                                            </p>
                                            <p className="text-white-50 ml-1 mb-0 para-p">
                                                {data.affiliations.role}
                                </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
        </section>
        </>
    )
}
