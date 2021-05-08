import { useEffect } from 'react'
import myImage from '../assets/images/my_image.jpg'
// import headerImage from '../assets/images/header.jpg'
export const Header = ({data}) => {
    const aboutMe = data.aboutMe;

    useEffect(() => {
        document.getElementById("myImage").classList.add("-translate-x-8", "translate-y-8")
    }, [])

    return (aboutMe && 
            <header className="font-sans mx-auto grid grid-cols-3 dark:bg-gray-800 gap-4 h-screen pt-5 min-h-60 place-items-center">
                <div className="mt-32 ml-5">
                        <p className="font-caveat text-2xl">Hi, I am</p>
                        <p className="font-caveat text-7xl underline text-black dark:text-white drop-shadow-2xl subpixel-antialiased font-semibold tracking-normal leading-tight">{aboutMe.name}</p>
                        <p className="font-caveat text-right text-xl text-gray-700 dark:text-gray-300 antialiased font-semibold">{aboutMe.headline}</p>
                </div>
                <div className="bg-gradient-to-b from-blue-300 to-blue-800 bg-opacity-50
                                dark:shadow-inner w-9/12
                                rounded-3xl shadow-2xl self-end col-span-2">
                    <img src={myImage} alt="Me" id="myImage" 
                        className="scale-99 opacity-95 h-auto w-auto transition-transform ease-in delay-300 duration-700 
                                    transform hover:-translate-x-2 hover:translate-y-2
                                    shadow-2xl rounded-3xl" />
                </div>
                <a href="#aboutMe" className="animate-bounce col-span-3 text-xl px-3 py-1 rounded-full hover:bg-gray-50 ">&#8595;</a>
            </header>
    )
}
