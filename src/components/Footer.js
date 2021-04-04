import React from 'react'
import '../assets/css/footer_style.css'
export const Footer = (props) => {
    const data = props.data
    return (
        <>
        <footer className="bg-black small text-center contents text-white-50 " style={{"paddingTop": "30px"}}>
            {data &&
            <div className="container">
                <a className="text-white-50" href={data.links.website_repo} target="_blank" rel="noopener noreferrer">Designed and Developed by {data.aboutMe.name} <br/>
                    Copyright &copy; {data.aboutMe.name} 2020</a>
            </div>}
        </footer>
        </>
    )
}
