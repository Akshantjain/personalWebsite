import React from 'react'
import '../assets/css/masthead_style.css'

export const Header = () => {
    return (
        <header className="masthead ">
            <div className="container d-flex h-75 align-items-center pt-5 appearonload">
                <div className="mx-auto text-center">
                    <h1 className="mx-auto text-uppercase text-white">Akshant Jain</h1>
                    <div className="divider d-none" style={{"backgroundColor:": "transparent"}}></div>
                    <h2 className="text-white mx-auto">Aspiring Software and Web Developer</h2>
                </div>
            </div>
        </header>
    )
}
