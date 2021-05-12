import { useEffect } from 'react'
// import myImage from '../assets/images/my_image.jpg'
// import headerImage from '../assets/images/header.jpg'
export const Header = ({data}) => {
    const aboutMe = data.aboutMe;

    useEffect(() => {
        setTimeout(() => {
            document.getElementById("line").classList.remove("w-80");
            document.getElementById("line").classList.add("w-8");
            setTimeout(() => {
                document.getElementById("line").classList.add("w-80");
                document.getElementById("line").classList.remove("w-8");
                document.getElementById("name").classList.remove("text-transparent");
                document.getElementById("headline").classList.add("text-gray-700");
            }, 1000);
        }, 200);
    }, [])

    return (aboutMe && 
            <header id="home" className="bg-header bg-white bg-cover bg-top bg-blend-color bg-opacity-0 lg:bg-fixed font-sans dark:bg-gray-800 h-screen place-self-center mx-auto px-4">
                <div className="h-full flex flex-wrap content-center">
                    <p 
                        id="name" 
                        className="transition-all duration-900 ease-linear 
                        w-full font-name uppercase text-center text-transparent text-5xl 
                        md:text-6xl dark:text-white drop-shadow-2xl subpixel-antialiased 
                        font-semibold tracking-widest leading-tight bg-clip-text"
                    >
                        {aboutMe.name}
                    </p>
                    <span id="line" className="mx-auto bg-white w-80 h-1 mt-4 mb-1 transition-all duration-900 ease-in-out rounded-md"/>
                    <p id="headline" className="transition-all uppercase duration-900 ease-linear w-full font-caveat text-2xl text-center text-transparent dark:text-gray-300 antialiased font-semibold">{aboutMe.headline}</p>
                </div>
            </header>
    )
}
