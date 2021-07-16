import { OfficeBuildingIcon } from '@heroicons/react/outline'
import { Fragment } from 'react';

export const Experience = ({data}) => {
    const education = data.education.undergraduate;
    const internship = data.internship;
    const affiliations = data.affiliations;
    return (
        <section id="experience" className=" mt-2 py-2 pb-3 md:pb-10 lg:pb-20 space-y-10 js-show-on-scroll" data-show="left">
            <div className="container mx-auto rounded-2xl bg-gray-100 shadow-2xl 
                            transform scale-95">
                <div className="container mx-auto rounded-2xl py-7 bg-green-500 shadow-2xl
                                origin-center transform rotate-0 md:-rotate-1
                                transition-transform ease-in duration-200
                                hover:rotate-0">
                    <div className="scale-95 container transform origin-center rotate-0 md:rotate-2 
                                    transition-transform ease-in duration-200
                                    hover:rotate-0
                                    bg-white rounded-2xl shadow-2xl">
                        <div className="font-sans text-4xl flex font-bold rounded-t-2xl p-10 bg-green-200 shadow text-green-900">
                            <OfficeBuildingIcon className="h-9 w-auto mb-1 mr-4" />
                            <p className="js-show-on-scroll" data-show="right">Experience</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3">
                            <div className="font-head py-5 px-10 leading-10 col-span-1 text-left lg:text-right text-2xl font-semibold text-green-900
                                            bg-green-50 border-b-2 border-green-100">
                                <span className="js-show-on-scroll" data-show="left">Education</span>
                            </div>
                            <div className="container py-5 px-10 text-xl leading-10 col-span-2 border-b-2 border-green-100 js-show-on-scroll" data-show="right">
                                <p className="text-2xl font-semibold font-proHead underline">{education.university}</p>
                                <p className="text-md text-gray-500 font-semibold">{education.degree}</p>
                                <ul className="ml-6 list-outside list-disc">
                                    <li>Graduated: {education.graduation}</li>
                                    <li>Honors: {education.honors.map((value, key) => { return <Fragment key={key}>{value}</Fragment> })}</li>
                                </ul>
                                </div>
                            <div className="font-head py-5 px-10 leading-10 col-span-1 text-left lg:text-right text-2xl font-semibold text-green-900
                                            bg-green-50 border-b-2 border-green-100">
                                                <span className="js-show-on-scroll" data-show="left">Internship</span>
                                            </div>
                            <div className="container py-5 px-10 text-xl leading-10 col-span-2 border-b-2 border-green-100 js-show-on-scroll" data-show="right">
                                <p className="font-proHead text-2xl font-semibold underline">{internship.company}</p>
                                <p className="text-md text-gray-500 font-semibold">{internship.role} | {internship.time}</p>
                                <ul className="ml-6 list-outside list-disc">
                                    {internship.description.map((value, key) => {
                                        return <li key={key}>{value}</li>
                                    })}
                                </ul>
                            </div>
                            <div className="font-head py-5 px-10 leading-10 col-span-1 text-left lg:text-right text-2xl font-semibold text-green-900
                                            bg-green-50 border-b-2 border-green-100">
                                                <span className="js-show-on-scroll" data-show="left">Courses</span>
                                            </div>
                            <div className="container py-5 px-10 text-xl leading-10 col-span-2 border-b-2 border-green-100 js-show-on-scroll" data-show="right">
                                <ul className="ml-6 list-outside list-disc">
                                    {education.coursework.map((value, key) => {
                                        return <li key={key}>{value}</li>
                                    })}
                                </ul>
                            </div>
                            <div className="font-head py-5 px-10 leading-10 col-span-1 text-left lg:text-right text-2xl font-semibold text-green-900
                                            bg-green-50 rounded-bl-2xl">
                                                <span className="js-show-on-scroll" data-show="left">Affiliations</span>
                                            </div>
                            <div className="container py-5 px-10 text-xl leading-10 col-span-2 js-show-on-scroll" data-show="right">
                                <p className="text-2xl font-semibold font-proHead underline">{affiliations.organisation}</p>
                                <p className="text-md text-gray-500 font-semibold">{affiliations.duration}</p>
                                <ul className="ml-6 list-outside list-disc">
                                    <li>{affiliations.role}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}