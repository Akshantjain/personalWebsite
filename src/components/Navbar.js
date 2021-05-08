import { Fragment, useState } from "react";
import classNames from 'classnames'

function Navbar({data}) {
    const navItems = data.navigation;
    const [show, setshow] = useState(false)
    return (
        <Fragment>
            <nav className="bg-gray-100 fixed w-full shadow z-50">
                <div className="container mx-auto flex-none lg:flex flex-row full-width transition ease-linear duration-900 transform scale-90 py-4 px-3">
                    <div className="z-50 container mx-auto flex flex-row">
                        <div className="mr-auto self-center px-3 py-1 font-caveat text-black dark:text-white text-4xl rounded-2xl">AJ</div>
                        <button onClick={() => setshow(!show)} className="p-2 bg-gray-50 space-y-1 border-2 ring-transparent rounded-md block lg:hidden">
                            <div className={classNames("border-2 border-gray-300 w-7 h-1 rounded-sm transform transition-all duration-200 ease-linear")}></div>
                            <div className={classNames("border-2 border-gray-300 w-7 h-1 rounded-sm transform transition-all duration-200 ease-linear", )}></div>
                            <div className={classNames("border-2 border-gray-300 w-7 h-1 rounded-sm transform transition-all duration-200 ease-linear")}></div>
                        </button>
                    </div>
                    <div className={classNames('z-0 flex-none space-y-5 lg:space-y-0 lg:flex lg:flex-row space-x-0 lg:space-x-6 py-3 justify-end text-base font-sans font-semibold antialiased text-gray-700 transition-all duration-700 ease-in-out', { '-mt-64 invisible': !show }, 'lg:mt-0  lg:visible')}>
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