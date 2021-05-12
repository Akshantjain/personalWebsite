import { DocumentTextIcon } from '@heroicons/react/outline'

export const Resume = ({data}) => {
    return (
        <section id="resume" className="bg-indigo-900">
            <a target="_blank" rel="noopener noreferrer" href={data.links.resume} >
                <div className="group hover:text-gray-300 container flex mx-auto py-10 text-4xl font-bold text-gray-100 shadow-inner">                
                        <DocumentTextIcon className="h-10 w-auto mb-1 mr-4 ml-auto" />
                        <p className="mr-auto">Resume</p>
                </div>
            </a>
        </section>
    )
}
