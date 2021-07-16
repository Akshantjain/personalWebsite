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

    useEffect(() => {
        const callback = function (entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    switch(entry.target.dataset.show) {
                        case 'right':
                            entry.target.classList.add("animate-fadeSlideInRight");
                            break;
                        case 'left':
                            entry.target.classList.add("animate-fadeSlideInLeft");
                            break;
                        case 'up':
                            entry.target.classList.add("animate-fadeSlideInUp");
                            break;
                        case 'down':
                            entry.target.classList.add("animate-fadeSlideInDown");
                            break;
                        case 'top':
                            entry.target.classList.add("animate-fadeSlideInTop");
                            break;
                        case 'bottom':
                            entry.target.classList.add("animate-fadeSlideInBottom");
                            break;
                        default:
                            break;
                    }
                }
            });
        };

        const observer = new IntersectionObserver(callback);
        const targets = document.querySelectorAll(".js-show-on-scroll");
        targets.forEach(function (target) {
            observer.observe(target);
        });
    }, [])

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
