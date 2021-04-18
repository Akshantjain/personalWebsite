function Navbar({data}) {
    const navItems = data.navigation;
    return (
        <>
            <nav className="bg-gray-100 fixed w-full shadow z-50">
                <div className="container mx-auto flex full-width transition ease-linear duration-900 transform scale-90 hover:scale-100 py-5 px-3">
                    <div className="mr-auto self-center px-3 py-1 font-caveat text-black dark:text-white text-4xl rounded-2xl">AJ</div>
                    <div className="flex flex-row space-x-6 py-3 justify-end font-robotoSlab antialiased">
                        {navItems.map((val, key) => {
                            return <a key={key} className="hover:underline" href={val.link}>{val.title}</a>
                        })}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;