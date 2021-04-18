import { OfficeBuildingIcon } from '@heroicons/react/outline'

export const Experience = ({data}) => {
    const education = data.education.undergraduate;
    const internship = data.internship;
    const affiliations = data.affiliations;
    return (
        <section id="experience" className="mt-2 py-2 pb-20 space-y-10">
            <div className="container mx-auto rounded-2xl bg-gray-100 shadow-2xl 
                            transform scale-95">
                <div className="container mx-auto rounded-2xl py-7 bg-green-500 shadow-2xl
                                origin-center transform -rotate-1
                                transition-transform ease-in duration-200
                                hover:rotate-0">
                    <div className="scale-95 container transform origin-center rotate-2 
                                    transition-transform ease-in duration-200
                                    hover:rotate-0
                                    bg-white rounded-2xl shadow-2xl">
                        <div className="text-4xl flex font-bold rounded-t-2xl p-10 bg-green-200 shadow text-green-900">
                            <OfficeBuildingIcon className="h-9 w-auto mb-1 mr-4" />
                            <p>Experience</p>
                        </div>
                        <div className="grid grid-cols-3">
                            <div className="py-5 px-10 leading-10 col-span-1 text-right text-2xl font-semibold text-green-900
                                            bg-green-50 border-b-2 border-green-100">
                                Education
                            </div>
                            <div className="container py-5 px-10 text-xl leading-10 col-span-2 border-b-2 border-green-100">
                                <p className="text-2xl font-medium underline">{education.university}</p>
                                <p className="text-md text-gray-500 font-medium">{education.degree}</p>
                                <ul className="ml-6 list-outside list-disc">
                                    <li>{education.year}</li>
                                    <li>Expected: {education.graduation}</li>
                                    <li>Honors: {education.honors.map((value, key) => { return <>{value}</> })}</li>
                                </ul>
                                </div>
                            <div className="py-5 px-10 leading-10 col-span-1 text-right text-2xl font-semibold text-green-900
                                            bg-green-50 border-b-2 border-green-100">
                                                Internship
                                            </div>
                            <div className="container py-5 px-10 text-xl leading-10 col-span-2 border-b-2 border-green-100">
                                <p className="text-2xl font-medium underline">{internship.company}</p>
                                <p className="text-md text-gray-500 font-medium">{internship.role} | {internship.time}</p>
                                <ul className="ml-6 list-outside list-disc">
                                    {internship.description.map((value, key) => {
                                        return <li key={key}>{value}</li>
                                    })}
                                </ul>
                            </div>
                            <div className="py-5 px-10 leading-10 col-span-1 text-right text-2xl font-semibold text-green-900
                                            bg-green-50 border-b-2 border-green-100">
                                                Courses
                                            </div>
                            <div className="container py-5 px-10 text-xl leading-10 col-span-2 border-b-2 border-green-100">
                                <ul className="ml-6 list-outside list-disc">
                                    {education.coursework.map((value, key) => {
                                        return <li key={key}>{value}</li>
                                    })}
                                </ul>
                            </div>
                            <div className="py-5 px-10 leading-10 col-span-1 text-right text-2xl font-semibold text-green-900
                                            bg-green-50 rounded-bl-2xl">Affiliations</div>
                            <div className="container py-5 px-10 text-xl leading-10 col-span-2">
                                <p className="text-2xl font-medium underline">{affiliations.organisation}</p>
                                <p className="text-md text-gray-500 font-medium">{affiliations.duration}</p>
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