import React from 'react'
import '../assets/css/masthead_style.css'

export const Header = (props) => {
    let data = props.data
    return (
        <>
        <header className="masthead ">
            {data &&
            <div className="container d-flex h-75 align-items-center pt-5 appearonload">
                <div className="mx-auto text-center">
                    <h1 className="mx-auto text-uppercase text-white">{data.aboutMe.name}</h1>
                    <div className="divider d-none" style={{"backgroundColor:": "transparent"}}></div>
                    <h2 className="text-white mx-auto">{data.aboutMe.headline}</h2>
                </div>
            </div>}
        </header>
        </>
    )
}
