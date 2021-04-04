import React from 'react'
import '../assets/css/contact_style.css'

export const Contact = (props) => {
    const data = props.data
    return (
        <> 
            <section className="contact-section bg-black contents " id="contact">
                {data &&
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fab fa-github text-primary mb-2"/>
                                    <h4 className="text-uppercase m-0">GitHub</h4>
                                    <hr className="my-4"/>
                                    <div className="small text-black-50">
                                        <a href={data.links.github} target="_blank" rel="noopener noreferrer">{data.links.github}</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="text-primary mb-3">
                                        {/* <!-- The Google logo code has been taken from "developers.google.com" website using Chrome Dev Tools --> */}
                                        <svg className="google-colored abcRioButtonSvghu" version="1.1" xmlns="http://www.w3.org/2000/svg" width="15px" height="16px" viewBox="0 0 48 48">
                                            <g>
                                                <path fill="#EA4335"
                                                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z">
                                                </path>
                                                <path fill="#4285F4"
                                                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z">
                                                </path>
                                                <path fill="#FBBC05"
                                                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z">
                                                </path>
                                                <path fill="#34A853"
                                                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z">
                                                </path>
                                                <path fill="none" d="M0 0h48v48H0z"></path>
                                            </g>
                                        </svg>
                                        {/* <!-- The Google Logo code from "developers.google.com ends here" --> */}
                                    </i>
                                    <h4 className="text-uppercase mt-1">Gmail</h4>
                                    <hr className="my-4"/>
                                    <div className="small text-black-50">
                                        <a href={data.links.email} target="_blank" rel="noopener noreferrer">Email Me</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fab fa-linkedin text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">LinkedIn</h4>
                                    <hr className="my-4"/>
                                    <div className="small text-black-50">
                                        <a href={data.links.linkedIn} target="_blank" rel="noopener noreferrer" >{data.links.linkedIn}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="social d-flex justify-content-center">
                        <a href={data.links.email} target="_blank" rel="noopener noreferrer" className="mx-2 google">
                            {/* <!-- The Google logo code has been taken from "developers.google.com" website using Chrome Dev Tools --> */}
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15px" height="16px" viewBox="0 0 48 48">
                                <g>
                                    <path fill="#EA4335"
                                        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z">
                                    </path>
                                    <path fill="#4285F4"
                                        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z">
                                    </path>
                                    <path fill="#FBBC05"
                                        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z">
                                    </path>
                                    <path fill="#34A853"
                                        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z">
                                    </path>
                                    <path fill="none" d="M0 0h48v48H0z"></path>
                                </g>
                            </svg>
                            {/* <!-- The Google Logo code from "developers..com ends here" --> */}
                    </a>

                        <a href={data.links.linkedIn} target="_blank" rel="noopener noreferrer" className="mx-2 linkedin">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href={data.links.github} target="_blank" rel="noopener noreferrer" className="mx-2 github">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href={data.links.facebook} target="_blank" rel="noopener noreferrer" className="mx-2 fb">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href={data.links.whatsapp} target="_blank" rel="noopener noreferrer" className="mx-2 whatsapp">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>

                </div>}
            </section>
        </>
    )
}
