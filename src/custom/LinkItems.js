import React from 'react'

export const LinkItems = (data) => {
    return (
        <>
        { data.url ? 
        <a href={data.url} className={data.useClass ? data.useClass : ""} target="_blank" rel="noopener noreferrer">{data.text}</a>
        : 
        <span className={data.useClass} >{data.text}</span>}
        </>
    )
}
