export const Footer = ({data}) => {
    const links = data.links;
    return (
        <section id="contact" className=" bg-gray-100 bg-top bg-cover py-2 space-y-5 js-show-on-scroll" data-show="up">
            <div className="px-4 lg:mx-auto w-full divide-y divide-gray-300">
                <div className="container mx-auto py-5 lg:flex">
                    <div className="text-center lg:text-left js-show-on-scroll" data-show="left">
                        <a target="_blank" rel="noopner noreferrer" href="https://github.com/Akshantjain/personalWebsite/tree/v4.0" className="mr-auto text-left font-light text-gray-700 text-xs hover:text-black hover:font-bold transition-all ease-in-out duration-500 hover:underline font-robotoSlab">Designed and Developed by Akshant Jain<br />Copyright &copy; Akshant Jain 2021</a>
                    </div>
                    <div className="pt-3 text-center lg:py-0 ml-auto js-show-on-scroll"data-show="right">
                        <a target="_blank" rel="noopener noreferrer" tabIndex="-1" aria-label="social-email" href={links.email} className="text-2xl mx-4 text-gray-500 transition-all ease-in-out duration-500 hover:text-red-500 far fa-envelope">{' '}</a>
                        <a target="_blank" rel="noopener noreferrer" tabIndex="-1" aria-label="social-github" href={links.github} className="text-2xl mx-4 text-gray-500 transition-all ease-in-out duration-500 hover:text-black fab fa-github">{' '}</a>
                        <a target="_blank" rel="noopener noreferrer" tabIndex="-1" aria-label="social-linkedin" href={links.linkedIn} className="text-2xl mx-4 text-gray-500 transition-all ease-in-out duration-500 hover:text-blue-500 fab fa-linkedin-in">{' '}</a>
                        <a target="_blank" rel="noopener noreferrer" tabIndex="-1" aria-label="social-facebook" href={links.facebook} className="text-2xl mx-4 text-gray-500 transition-all ease-in-out duration-500 hover:text-blue-700 fab fa-facebook-f">{' '}</a>
                        <a target="_blank" rel="noopener noreferrer" tabIndex="-1" aria-label="social-whatsapp" href={links.whatsapp} className="text-2xl mx-4 text-gray-500 transition-all ease-in-out duration-500 hover:text-green-500 font-bold fab fa-whatsapp">{' '}</a>
                    </div>
                </div>
                <div className="container mx-auto py-5 flex">
                    <div className="mr-auto self-center px-3 font-caveat font-bold text-gray-900 dark:text-white text-4xl rounded-2xl js-show-on-scroll" data-show="left">AJ</div>
                    <p className="font-sign px-3 text-4xl text-gray-900 dark:text-white drop-shadow-2xl subpixel-antialiased font-normal tracking-normal leading-tight js-show-on-scroll" data-show="right">Akshant Jain</p>
                </div>
            </div>
        </section>
    )
}
