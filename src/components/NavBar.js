import React from 'react'
import '../assets/css/navbar_style.css'
import favicon from '../assets/images/favicon2.webp'

export const NavBar = (props) => {
    let data = props.data
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            {data &&
            <div className="container-fluid mx-3 appearonload">
                <a className="navbar-brand js-scroll-trigger ml-1" href="#page-top"><img className="main-logo" alt="Logo" src={favicon}/></a>
                <button 
                    className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                    aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        {data.navigation && data.navigation.map((value, key) => {
                            return <li className="nav-item" key={key}>
                                <a className="nav-link js-scroll-trigger" href={value.link}>{value.title}</a>
                            </li>
                        })}
                    </ul>
                </div>
            </div>}
        </nav>
        </>
    )
}
