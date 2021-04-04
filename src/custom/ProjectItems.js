import React from 'react'
import { LinkItems } from './LinkItems'

export const ProjectItems = (props) => {
    let data = props.data
    return (
        <>
            <div className="description text-justify">
                <ul>
                    {data.description && data.description.map((val, index) => {
                        return <li key={index}>{val}</li>
                    })}
                </ul>
            </div>

            {data.listItems && data.listItems.map((val, index) => {
                return <div key={index} className="mb-3 ml-3">
                        <p className="m-0 mb-1 p-0 text-left text-white-50 subhead">
                            <span className={val.icon}></span>
                            {val.title}
                        </p>
                        <div className="horizontal-scroll px-2">
                            {val.items && val.items.map((item, key) => {
                                return <LinkItems useClass={val.useClass} key={key} url={item.link} text={item.title} />
                            })}
                        </div>
                    </div>
            })}
        </>
    )
}