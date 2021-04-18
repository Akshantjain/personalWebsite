import { TerminalIcon } from '@heroicons/react/outline'
import classNames from 'classnames';

const LinkItems = (data) => {
    console.log(data.separate)
    return (
        <>
            {data.url ?
                <a className="hover:text-blue-500 hover:underline hover:font-medium" href={data.url} target="_blank" rel="noopener noreferrer">{data.text}{data.separate ? ', ' : ''}</a>
                :
                <span className={data.useClass} >{data.text}{data.separate ? ', ' : ''}</span>}
        </>
    )
}

export const Projects = ({data}) => {
    const project = data.projects;
    return (
        <section id="projects" className="mt-2 py-2 pb-20 space-y-10">
            <div className="container mx-auto rounded-2xl bg-gray-100 shadow-2xl
                            transform scale-95">
                <div className="container mx-auto rounded-2xl py-7 bg-red-500 shadow-2xl
                                origin-center transform rotate-1
                                transition-transform ease-in duration-200
                                hover:rotate-0">
                    <div className="scale-95 container transform origin-center -rotate-2 
                                    transition-transform ease-in duration-200
                                    hover:rotate-0
                                    bg-white rounded-2xl shadow-2xl">
                        <div className="text-4xl flex font-bold rounded-t-2xl p-10 bg-red-200 shadow z-50  text-red-900">
                            <a target="_blank" rel="noopener noreferrer" href={data.links.github}>
                                <i className="transition-all ease-in-out duration-500 hover:text-black fab fa-github"></i>
                            </a>
                            <p className="ml-auto">Projects</p>
                            <TerminalIcon className="h-10 w-auto mb-1 ml-4" />
                        </div>
                        <div className="grid grid-rows-1">
                            {project.map((value, key) => {
                                return <div key={key} className="grid grid-cols-3">
                                    <div className={classNames(
                                            "py-5 px-10 leading-10 col-span-1 text-right text-lg font-semibold text-red-900 bg-red-50 border-b-2 border-red-100"
                                        )}>
                                        <span className="text-2xl underline">{value.heading}</span><br />
                                        <span className="text-red-700">{value.timeFrame}</span>
                                    </div>
                                    <div className={classNames(
                                            "container py-5 px-10 text-xl leading-10 col-span-2 divide-y-2 divide-solid divide-gray-100 border-b-2 border-red-100"
                                        )}>
                                        <ul className="list-outside list-disc"><span className="font-semibold">Description:</span>
                                            {value.description.map((val, k) => {
                                                return <li className="ml-6 " key={k}>{val}</li>
                                            })}
                                        </ul>
                                        {value.listItems.map((items, listKeys) => {
                                            return <p key={listKeys} className="py-1"> <span className="font-semibold">{items.title}: </span>
                                                {items.items.map((item, itemKey) => {
                                                    return <LinkItems key={itemKey} url={item.link} text={item.title} separate={items.items.length-1 !== itemKey}/>
                                                })}
                                            </p>
                                        })}
                                        <p></p>
                                    </div>
                                </div>
                            })}
                            <a target="_blank" rel="noopener noreferrer" href={data.links.github}><div className="transition-all duration-300 ease-linear bg-red-50 rounded-b-2xl text-3xl py-6 text-center text-red-900 font-semibold hover:bg-red-200">
                                More Projects
                            </div></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}