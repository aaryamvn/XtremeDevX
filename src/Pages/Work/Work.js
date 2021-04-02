import React, { useEffect, useState } from 'react'
import Nav from '../../Components/Nav/Nav'
import ProjectCard from '../ProjectCard/ProjectCard'
import './Work.css'
import data from '../../data.json'

const Work = () => {
    const [repos, setRepos] = useState([])
    useEffect(() => {
        setRepos(data)
    }, [])
    return (
        <div className="work">
            <div className="container">
                <Nav />
                <div className="work__project_cards">
                    {repos.map((repo, index) => {
                        return <ProjectCard {...repo} key={index} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Work
