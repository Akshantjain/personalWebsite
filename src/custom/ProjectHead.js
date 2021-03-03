import React from 'react'

export const ProjectHead = (data) => {
    return (
        <>
            <div className={data.data.iconClass}></div>
            <p className="font-weight-light project-head">{data.data.heading}</p>
            <p className="duration ml-2">{data.data.timeFrame}</p>
            <section className="info-links ml-auto">
                {data.data.website_url ? <a className="view_link" href={data.data.website_url} target="_blank" rel="noopener noreferrer"><i
                    className="devicon-chrome-plain weblinks"></i></a> : null}
                {data.data.repo_url ? <a className="repo_link" href={data.data.repo_url} target="_blank" rel="noopener noreferrer"><i
                    className="devicon-github-plain weblinks"></i></a> : null}
            </section>
        </>
    )
}
