import React, {useState, useEffect} from 'react'
import '../assets/css/projects_style.css'
import { ProjectHead } from '../custom/ProjectHead'
import { ProjectItems } from '../custom/ProjectItems'

export const Projects = (props) => {
    const data = (props.data)

    const [isExpanded, setIsExpanded] = useState(false)

    let classes = ["covid_tracker", "home_security", "personal_v1", "tic_tac_toe", "baccarat_game"];
    let each_description = null;

    

    const expandFunction = (e) => {
        e.preventDefault()
        const index = e.currentTarget.getAttribute('value')
        if (each_description === null)   return;
        if (isExpanded && each_description[index].classList.contains(classes[index])) {
            each_description[index].classList.remove(classes[index]);
            each_description[index].classList.add("minimize");
            setIsExpanded(false)
            return;
        }
        else if (isExpanded) {
            for (let i = 0; i < each_description.length; ++i) {
                if (each_description[i].classList.contains(classes[i])) {
                    each_description[i].classList.remove(classes[i]);
                    each_description[i].classList.add("minimize");
                }
            }
        }

        each_description[index].classList.remove("minimize");
        each_description[index].classList.add(classes[index]);
        setIsExpanded(true)
    }

    useEffect(() => {
        each_description = document.querySelectorAll(".projects-section .each .project-description");
    })

    return (
        <>
        <section id="projects" className="projects-section contents">
            {data &&
            <div className="container-fluid">
                <h1 className="text-left text-uppercase heads mb-2">Projects <span style={{"fontSize": "0.8rem"}}>What I have done</span></h1>
                <div className="row">
                    <div className="wrapper container mb-3 mt-3">
                        {data.projects && data.projects.map((value, key) => {
                            return  <div className="row each clickable-section" key={key}>
                                    <div className="container-fluid d-flex each-area py-3 px-4" value={key} onClick={expandFunction}>
                                        <ProjectHead data={value}/>
                                    </div>
                                    <div className="project-description minimize para">
                                        <ProjectItems data={value} />
                                    </div>
                                </div>
                        })}
                        <a href={data.links.repos} target="_blank" rel="noopener noreferrer">
                            <div className="row each pt-3 pb-3 clickable-section">
                                <div className="container d-flex">
                                    <div className="img folder ml-auto"></div>
                                    <p className="font-weight-light project-head mr-auto" style={{ "fontFamily": "Gotham, Helvetica, Arial, sans-serif"}}>More Projects</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>}
        </section>
        </>
    )
}