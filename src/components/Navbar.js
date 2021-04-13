import favicon from '../assets/favicon/logo512.png'

function Navbar() {
    return (
        <>
            <nav className="bg-gray-100 fixed w-full shadow z-50">
                <div className="container mx-auto flex full-width py-5 px-3">
                    <div className="mr-auto self-center px-3 py-1 font-caveat text-black dark:text-white text-4xl rounded-2xl">AJ</div>
                    <div className="flex flex-row space-x-6 py-3 justify-end font-robotoSlab antialiased">
                        <a className="transition-all duration-500 ease-linear hover:underline" href="#aboutMe">About Me</a>
                        <a className="transition-all hover:underline" href="#coursework">Coursework & Skills</a>
                        <a className="transition-all hover:underline" href="#experience">Experience</a>
                        <a className="transition-all hover:underline" href="#projects">Projects</a>
                        <a className="transition-all hover:underline" href="#resume">Resume</a>
                        <a className="transition-all hover:underline" href="#contact">Contact</a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;