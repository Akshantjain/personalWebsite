export const Footer = ({data}) => {
    const links = data.links;
    return (
        <section id="contact" className="bg-gray-100 py-2 space-y-5">
            <div className="container px-4 lg:mx-auto w-full divide-y divide-gray-300">
                <div className="container mx-auto py-5 lg:flex">
                    <div className="text-center lg:text-left">
                        <a target="_blank" rel="noopner noreferrer" href="https://github.com/Akshantjain/personalWebsite/tree/v4.0" className="mr-auto text-left font-light text-gray-700 text-xs hover:text-black hover:font-bold transition-all ease-in-out duration-500 hover:underline font-robotoSlab">Designed and Developed by Akshant Jain<br />Copyright &copy; Akshant Jain 2021</a>
                    </div>
                    <div className="pt-3 text-center lg:py-0 ml-auto">
                        <a target="_blank" rel="noopener noreferrer" href={links.email}>
                            <i className="text-2xl mx-4 text-gray-500 transition-all ease-in-out duration-500 hover:text-red-500 far fa-envelope"></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href={links.github}>
                            <i className="text-2xl mx-4 text-gray-500 transition-all ease-in-out duration-500 hover:text-black fab fa-github"></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href={links.linkedIn}>
                            <i className="text-2xl mx-4 text-gray-500 transition-all ease-in-out duration-500 hover:text-blue-500 fab fa-linkedin-in"></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href={links.facebook}>
                            <i className="text-2xl mx-4 text-gray-500 transition-all ease-in-out duration-500 hover:text-blue-700 fab fa-facebook-f"></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href={links.whatsapp}>
                            <i className="text-2xl mx-4 text-gray-500 transition-all ease-in-out duration-500 hover:text-green-500 font-bold fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
                <div className="container mx-auto py-5 flex">
                    <div className="mr-auto self-center px-3 font-caveat font-bold text-gray-900 dark:text-white text-4xl rounded-2xl">AJ</div>
                    <p className="font-sign px-3 text-4xl text-gray-900 dark:text-white drop-shadow-2xl subpixel-antialiased font-normal tracking-normal leading-tight">Akshant Jain</p>
                </div>
            </div>
        </section>
    )
}
