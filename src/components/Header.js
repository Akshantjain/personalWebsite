import { useEffect } from 'react'
import myImage from '../assets/images/my_image.webp'

export const Header = () => {

    useEffect(() => {
        document.getElementById("myImage").classList.add("-translate-x-8", "translate-y-8")
    }, [])

    return (
            <header className="font-sans mx-auto grid grid-cols-2 bg-white dark:bg-gray-800 gap-4 h-screen pt-5 min-h-60 place-items-center space-y-5">
                <div className="mt-28">
                        <p>Hi, my name is</p>
                        <p className="font-caveat text-7xl underline text-black dark:text-white drop-shadow-2xl subpixel-antialiased font-medium tracking-normal leading-tight">Akshant Jain</p>
                        <p className="font-caveat text-right text-xl text-gray-700 dark:text-gray-300 font-medium antialiased">Web and Software Developer</p>
                </div>
                <div className="bg-gradient-to-b from-blue-300 to-blue-800 bg-opacity-50
                                dark:shadow-inner
                                rounded-3xl shadow-2xl self-end">
                    <img src={myImage} alt="Me" id="myImage" 
                        className="scale-99 transition-transform ease-in delay-300 duration-900 
                                    transform hover:-translate-x-3 hover:translate-y-3
                                    shadow-2xl rounded-3xl w-96 h-auto" />
                </div>
                <a href="#aboutMe" className="animate-bounce col-span-2 text-xl px-3 py-1 rounded-full hover:bg-gray-50 ">&#8595;</a>
            </header>
    )
}
