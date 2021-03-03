import React from 'react'
import '../assets/css/resume_style.css'
import download from '../assets/images/download.webp'

export const Resume = (props) => {
    let data = props.data
    return (
        <>
        <section id="resume" className="">
            {data &&
            <a className="block-btn" href={data.links.resume} target="_blank" rel="noopener noreferrer">
                <span className="text">View my full resume</span>
                <img className="icon" src={download} alt="download resume"/>
            </a>}
        </section>
        </>
    )
}
