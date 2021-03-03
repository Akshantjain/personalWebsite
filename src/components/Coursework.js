import React from 'react'
import '../assets/css/skills_style.css'
 
export const Coursework = (props) => {
    const data = props.data
    return (
        <>
        <section id="skills" className="skill-section contents ">
            {data &&
            <div className="container-fluid">
                <h1 className="text-left text-uppercase heads mb-2">Coursework and Skills <span style={{fontSize: "0.8rem"}}>What I Know</span></h1>
                <div className="row m-auto">
                    <div className="wrapper mb-4 mt-1 pt-2">
                        <div className="mb-2">
                            <div className="img idea mb-3"></div>
                            <p className="head_p text-uppercase d-inline-block text-white">knowledge <span className="line" style={{width: "80%"}}></span></p><br></br>
                            {data.knowledge && data.knowledge.map((value, key) => {
                                return <span className="text-white-50" key={key} style={{ 'fontFamily': 'Gotham,Helvetica,Arial,sans-serif', 'fontSize': '1rem'}}>{value}, </span>
                            })}
                    </div>
                        <div className=" pt-4 pb-3 row border-secondary border-top">
                            <div className="col text-white border-secondary skill-row">
                                <div className="img code"></div>
                                <p className="head_p text-uppercase d-inline-block">computer science (UIC)<span className="line" style={{width: "80%"}}></span></p>
                                <p className="para text-white-50">
                                    {data.computerScience}
                            </p>
                            </div>
                            <div className="col text-white border-secondary skill-row">
                                <div className="img skill"></div>
                                <p className="head_p text-uppercase d-inline-block">Skills<span className="line" style={{width: "80%"}}></span></p>
                                <p className="para text-white-50">
                                    {data.skills}
                            </p>
                            </div>
                        </div>
                        <div className="row pt-4 pb-3 border-secondary border-top">
                            <div className="col text-white border-secondary skill-row">
                                <div className="img math"></div>
                                <p className="head_p text-uppercase d-inline-block">Mathematics<span className="line" style={{width: "80%"}}></span></p>
                                <p className="para text-white-50">
                                    {data.mathematics}
                            </p>
                            </div>
                            <div className="col text-white skill-row">
                                <div className="img tech"></div>
                                <p className="head_p text-uppercase d-inline-block">Tools and Technologies<span className="line" style={{width: "80%"}}></span></p>
                                <p className="para text-white-50">
                                    {data.toolsAndTech}
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </section>
        </>
    )
}
