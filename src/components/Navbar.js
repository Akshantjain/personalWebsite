import { Fragment, useEffect, useState } from "react";
import classNames from 'classnames'

function Navbar({data}) {
    const navItems = data.navigation;
    const [show, setshow] = useState(false);

    const handleScroll = (e) => {
        if (window.pageYOffset > window.innerHeight-50) {
            document.getElementById("navbar").classList.remove("bg-opacity-25");
            document.getElementById("navbar").classList.add("bg-opacity-100");
        } else {
            document.getElementById("navbar").classList.add("bg-opacity-25");
            document.getElementById("navbar").classList.remove("bg-opacity-100");
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });


    return (
        <Fragment>
            <nav id="navbar" className={classNames({ "bg-opacity-25": !show }, { " bg-opacity-100": show },"bg-gray-100 fixed w-full shadow z-50 transition-colors duration-300 ease-linear  js-show-on-scroll")} data-show="down">
                <div className="container mx-auto flex-none lg:flex flex-row full-width transition ease-linear duration-900 transform scale-90 py-3 px-3">
                    <div className="z-50 container mx-auto flex flex-row">
                        <div className="mr-auto self-center px-3 py-1 font-caveat text-black dark:text-white text-4xl rounded-2xl js-show-on-scroll" data-show="left">
                            <a href="#home">
                                AJ
                            </a>
                        </div>
                        <button onClick={() => setshow(!show)} className="p-2 bg-gray-50 space-y-1 border-2 ring-transparent rounded-md block lg:hidden">
                            <div className={classNames("border-2 border-gray-300 w-7 h-1 rounded-sm transform transition-all duration-200 ease-linear")}></div>
                            <div className={classNames("border-2 border-gray-300 w-7 h-1 rounded-sm transform transition-all duration-200 ease-linear",)}></div>
                            <div className={classNames("border-2 border-gray-300 w-7 h-1 rounded-sm transform transition-all duration-200 ease-linear")}></div>
                        </button>
                    </div>
                    <div className={classNames('z-0 flex-none space-y-5 lg:space-y-0 lg:flex lg:flex-row space-x-0 lg:space-x-6 py-3 justify-end text-base font-sans font-semibold antialiased text-gray-700 transition-all duration-700 ease-in-out', { '-mt-68 invisible': !show }, 'lg:mt-0  lg:visible js-show-on-scroll')} data-show="right">
                        {navItems.map((val, key) => {
                            return <p key={key}>
                                <a className="hover:underline" onClick={() => setshow(false)} href={val.link}>{val.title}</a>
                                </p>
                        })}
                    </div>
                </div>
            </nav>
        </Fragment>
    );
}

export default Navbar;