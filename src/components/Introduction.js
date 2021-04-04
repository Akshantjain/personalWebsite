import React from 'react'
import '../assets/css/about_style.css'
import myImage from '../assets/images/my_image.webp'

export const Introduction = (props) => {
    const data = props.data
    return (
        <>
        <section id="about" className="about-section contents">
            {data &&
            <div id="container" className="container-fluid">
                <h1 className=" text-left text-uppercase heads">About Me <span style={{"fontSize": "0.8rem"}}>Who I am</span></h1>
                <div className="row m-3">
                    <div className="about-intro pt-2 mt-4">
                        <p className="name text-white mb-2" style={{ " fontFamily": " Cambria, Georgia, serif"}}>Hi! I'm {data.aboutMe.name}!</p>
                        <span className="line mt-0 mb-4"/>
                        <img src={myImage} className="headshot" alt="Me"/>
                        <p className="text-white-50 mb-3 para" style={{ "fontFamily": "Gotham,Helvetica,Arial,sans-serif"}}>
                            {data.introduction && data.introduction.map((value) => {
                                return <>{value} <br></br><br></br></>
                            })}
                        </p>
                    </div>
                </div>
            </div>}
        </section>
        </>
    )
}
