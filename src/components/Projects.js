import { TerminalIcon, CodeIcon, DesktopComputerIcon, CollectionIcon } from '@heroicons/react/outline'
import classNames from 'classnames';
import { Fragment } from 'react';
import Tooltip from '../assets/custom/Tooltip';

const LinkItems = (data) => {
    return (
        <Fragment>
            {data.url ?
                <Fragment><a className="no-underline hover:text-blue-700 hover:underline transition-all duration-200 ease-in-out" href={data.url} target="_blank" rel="noopener noreferrer">{data.text}</a>{data.separate ? ', ' : ''}</Fragment>
                :
                <span className={data.useClass} >{data.text}{data.separate ? ', ' : ''}</span>}
        </Fragment>
    )
}

export const Projects = ({data}) => {
    const project = data.projects;

    return (
        <section id="projects" className=" mt-2 pb-3 md:pb-10 lg:pb-20 space-y-10">
            <div className="container mx-auto rounded-2xl bg-gray-100 shadow-2xl
                            transform scale-95">
                <div className="container mx-auto rounded-2xl py-7 bg-red-500 shadow-2xl
                                origin-center transform rotate-0 md:rotate-1
                                transition-transform ease-in duration-200
                                hover:rotate-0">
                    <div className="scale-95 container transform origin-center rotate-0 md:-rotate-2 
                                    transition-transform ease-in duration-200
                                    hover:rotate-0
                                    bg-white rounded-2xl shadow-2xl">
                        <div className="font-sans text-4xl flex flex-row-reverse lg:flex-row font-bold rounded-t-2xl p-10 bg-red-200 shadow z-50 text-red-900">
                            <Tooltip title="Github Collection" placement="right-start">
                                <a target="_blank" rel="noopener noreferrer" href={data.links.github}>
                                    <i className="transition-all ease-in-out duration-500 hover:text-black fab fa-github"></i>
                                </a>
                            </Tooltip>
                            <p className="mr-auto lg:mr-0 ml-4 lg:ml-auto">Projects</p>
                            <TerminalIcon className="h-10 w-auto mb-1 ml-0 lg:ml-4"/>
                        </div>
                        <div className="grid grid-rows-1">
                            {project.map((value, key) => {
                                return <div key={key} className="grid grid-cols-1 lg:grid-cols-3">
                                    <div className="py-5 px-10 leading-10 col-span-1 text-left lg:text-right text-lg font-bold text-red-900 bg-red-50 border-b-2 border-red-100 grid grid-rows-2">
                                        <div>
                                            <p className="font-proHead text-2xl underline">{value.heading}</p>
                                            <p className="font-head text-xl text-red-700">{value.timeFrame}</p>
                                        </div>
                                        <div className="relative inline-flex ml-0 lg:ml-auto my-auto divide-x-2 divide-red-50 lg:mt-auto lg:my-0">
                                            <Tooltip show={value.repo_url === undefined} title="No Code Available" placement="top-end">
                                                <a
                                                    href={value.repo_url}
                                                    disabled={value.repo_url === undefined}
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    className={classNames(
                                                        "relative flex justify-start items-center rounded-l-md p-1 px-4 font-bold transition-all duration-500 ease-in-out",
                                                        { "bg-red-200 hover:bg-red-700 hover:opacity-90 hover:text-red-50": value.repo_url !== undefined },
                                                        { "bg-red-100 opacity-50": value.repo_url === undefined }
                                                    )}
                                                >
                                                    <CodeIcon className="w-6 mr-2 align-middle" />
                                                    CODE
                                                </a>
                                            </Tooltip>
                                            <Tooltip show={value.website_url === undefined} title="Not Available" placement="top-end">
                                                <a 
                                                    href={value.website_url !== undefined ? value.website_url : ""}
                                                    disabled={value.website_url === undefined} 
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    className={classNames(
                                                        "relative flex justify-start items-center rounded-r-md p-1 px-4 font-bold transition-all duration-500 ease-in-out",
                                                        { "bg-red-200 hover:bg-red-700 hover:opacity-90 hover:text-red-50": value.website_url !== undefined},
                                                        {"bg-red-100 opacity-50" : value.website_url === undefined}
                                                        )}
                                                >
                                                        <DesktopComputerIcon className="w-6 mr-2 align-middle"/>
                                                        VIEW
                                                </a>
                                            </Tooltip>
                                        </div>
                                    </div>
                                    <div className="container py-5 px-10 text-xl leading-10 col-span-2 border-b-2 border-red-100">
                                        <ul className="list-outside list-disc border-gray-100"><span className="font-semibold">Description:</span>
                                            {value.description.map((val, k) => {
                                                return <li className="ml-6 " key={k}>{val}</li>
                                            })}
                                        </ul>
                                        {value.listItems.map((items, listKeys) => {
                                            if (items.title === "Project Links") return <Fragment key={listKeys}></Fragment>;
                                            return <p key={listKeys} className="py-1 border-t border-gray-400 last:border-t-0"> <span className="font-semibold">{items.title}: </span>
                                                {items.items.map((item, itemKey) => {
                                                    return <LinkItems key={itemKey} url={item.link} text={item.title} separate={items.items.length-1 !== itemKey}/>
                                                })}
                                            </p>
                                        })}
                                        <p></p>
                                    </div>
                                </div>
                            })}
                            <a target="_blank" rel="noopener noreferrer" href={data.links.github}>
                                <div className="flex justify-start items-center w-100 transition-all duration-300 ease-linear bg-red-100 rounded-b-2xl font-head text-3xl py-6 text-center text-red-900 font-semibold hover:bg-red-300">
                                    <CollectionIcon className="w-8 mr-4 ml-auto align-middle" />
                                    More Projects
                                    <span className="mr-auto"/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}