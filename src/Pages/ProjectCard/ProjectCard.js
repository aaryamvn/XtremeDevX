import React from 'react'
import './ProjectCard.css'

const ProjectCard = (props) => {
    return (
        <div className={props.title === "Electric" ? "project_card card project_card__border" : "project_card card"} onClick={() => window.location.href = props.link}>
            <div class="card-body">
                <h1 className="project__card_title card-title">{props.title}</h1>
                <p className="project__card_description card-text">
                    {props.description}
                </p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
                <div className="project__card_technologies">
                    {props.languages}
                </div>
                <div className="project__card_collaborators d-flex">
                    {props.contributorAvatars.map(avatarUrl => {
                        return <img src={avatarUrl} alt="" className="project__card_collaborator" />
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
