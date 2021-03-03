import React from 'react'

export const LinkItems = (data) => {
    return (
        <a href={data.href} target="_blank" rel="noopener noreferrer">{data.text}</a>
    )
}
