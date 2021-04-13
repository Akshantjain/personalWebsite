export const Footer = () => {
    return (
        <section id="footer" className="bg-gray-100 mt-2 py-2 space-y-5">
            <div className="container mx-auto w-full divide-y divide-gray-300">
                <div className="container mx-auto py-5 flex">
                    <a target="_blank" rel="noopner noreferrer" href="https://github.com/Akshantjain/personalWebsite/tree/v4.0" className="mr-auto text-left font-light text-gray-700 text-xs hover:text-black hover:font-bold transition-all ease-in-out duration-500 ">Designed and Developed by Akshant Jain<br />Copyright &copy; Akshant Jain 2021</a>
                    <p className="ml-auto">
                        <a target="_blank" rel="noopener noreferrer" href="mailto:akshant.jain2@gmail.com">
                            <i class="text-2xl mx-4 text-gray-500 transition-all ease-in-out duration-500 hover:text-red-500 fas fa-paper-plane"></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Akshantjain">
                            <i class="text-2xl mx-4 text-gray-500 transition-all ease-in-out duration-500 hover:text-black fab fa-github"></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/Akshantjain">
                            <i class="text-2xl mx-4 text-gray-500 transition-all ease-in-out duration-500 hover:text-blue-500 fab fa-linkedin-in"></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/akshant.jain/">
                            <i class="text-2xl mx-4 text-gray-500 transition-all ease-in-out duration-500 hover:text-blue-700 fab fa-facebook-f"></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://wa.me/13125610879?text=I'm%20interested%20in%20developing%20a%20site%20with%20you.">
                            <i class="text-2xl mx-4 text-gray-500 transition-all ease-in-out duration-500 hover:text-green-500 font-bold fab fa-whatsapp"></i>
                        </a>
                    </p>
                </div>
                <div className="container mx-auto py-5 flex">
                    <div className="mr-auto self-center px-3 font-caveat text-black dark:text-white text-4xl rounded-2xl">AJ</div>
                    <p className="font-caveat px-3 text-4xl text-black dark:text-white drop-shadow-2xl subpixel-antialiased font-normal tracking-normal leading-tight">Akshant Jain</p>

                </div>
            </div>
        </section>
    )
}
