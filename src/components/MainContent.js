import { useEffect } from 'react'
import { Coursework } from './Coursework'
import { Experience } from './Experience'
import { Footer } from './Footer'
import { Header } from './Header'
import { Introduction } from './Introduction'
import Navbar from './Navbar'
import { Projects } from './Projects'
import { Resume } from './Resume'

export const MainContent = ({data}) => {

    return (
        <main className="font-desc bg-gray-100">
            <Navbar data={data} />
            <Header data={data} />
            <Introduction data={data} />
            <Coursework data={data} />
            <Experience data={data} />
            <Projects data={data} />
            <Resume data={data} />
            <Footer data={data} />
        </main>
    )
}
