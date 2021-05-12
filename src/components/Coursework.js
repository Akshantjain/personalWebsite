import { BookOpenIcon } from '@heroicons/react/outline'
import { Fragment } from 'react';

export const Coursework = ({data}) => {
    return (
        <section id="skills" className=" mt-2 py-2 pb-3 md:pb-10 lg:pb-20 space-y-10">
            <div className="container mx-auto rounded-2xl bg-gray-100 shadow-2xl
                            transform scale-95">
                <div className="container mx-auto rounded-2xl py-7 bg-yellow-500 shadow-2xl
                                origin-center transform rotate-0 md:rotate-1
                                transition-transform ease-in duration-200
                                hover:rotate-0">
                    <div className="scale-95 container transform origin-center rotate-0 md:-rotate-2 
                                    transition-transform ease-in duration-200
                                    hover:rotate-0
                                    bg-white rounded-2xl shadow-2xl">
                        <div className="text-4xl font-sans flex flex-row-reverse lg:flex-row font-bold rounded-t-2xl p-10 bg-yellow-200 shadow z-50  text-yellow-900">
                            <p className="ml-4 lg:ml-auto">Coursework & Skills</p>
                            <BookOpenIcon className="h-10 w-auto mb-1 ml-0 lg:ml-4 " />
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3">
                            <div className="font-head py-5 px-10 leading-10 col-span-1 text-left lg:text-right text-2xl font-semibold text-yellow-900
                                            bg-yellow-50 border-b-2 border-yellow-100 ">Programming Languages</div>
                            <div className=" container py-5 px-10 text-xl leading-10 col-span-2 border-b-2 border-yellow-100">
                                {data.knowledge.map((val, key) => {
                                    return <Fragment key={key}>{val}{key !== data.knowledge.length-1 ? ',' : ''} </Fragment>;
                                })}
                            </div>
                            <div className="font-head py-5 px-10 leading-10 col-span-1 text-left lg:text-right text-2xl font-semibold text-yellow-900
                                            bg-yellow-50 border-b-2 border-yellow-100">Computer Science</div>
                            <div className=" container py-5 px-10 text-xl leading-10 col-span-2 border-b-2 border-yellow-100">
                                <p className="mb-3"> {data.computerScience} </p>
                                <p> {data.skills} </p>
                                </div>
                            <div className="font-head py-5 px-10 leading-10 col-span-1 text-left lg:text-right text-2xl font-semibold text-yellow-900
                                            bg-yellow-50 border-b-2 border-yellow-100">Tools & Technologies</div>
                            <div className=" container py-5 px-10 text-xl leading-10 col-span-2 border-b-2 border-yellow-100">{data.toolsAndTech}</div>
                            <div className="font-head py-5 px-10 leading-10 col-span-1 text-left lg:text-right text-2xl font-semibold text-yellow-900
                                            bg-yellow-50 rounded-bl-2xl">Mathematics</div>
                            <div className=" container py-5 px-10 text-xl leading-10 col-span-2">{data.mathematics}</div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}