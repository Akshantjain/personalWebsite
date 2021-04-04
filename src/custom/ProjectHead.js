import React from 'react'

export const ProjectHead = (data) => {
    return (
        <>
            <div className={data.data.iconClass}></div>
            <p className="font-weight-light project-head">{data.data.heading}</p>
            <p className="duration ml-auto">{data.data.timeFrame}</p>
        </>
    )
}
