import React from 'react'
import { NavBar, Header, Resume, Contact, Footer} from '../components'
import '../assets/css/main_style.css'

export const MainLayout = ({children}) => {
    return (
        <>
                <NavBar />
                <Header />
                {children}
                <Resume />
                <Contact />
                <Footer/>
        </>
    )
}
