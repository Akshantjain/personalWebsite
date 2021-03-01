import React from 'react'
import '../assets/css/resume_style.css'
import download from '../assets/images/download.webp'

export const Resume = () => {
    return (
        <section id="resume" className="">
            <a className="block-btn" href="https://drive.google.com/file/d/1I-usmLkQJg0-YmzGa6qrcD4MPZzsN5Ae/view" target="_blank" rel="noopener noreferrer">
                <span className="text">View my full resume</span>
                <img className="icon" src={download} alt="download resume"/>
            </a>
        </section>
    )
}
