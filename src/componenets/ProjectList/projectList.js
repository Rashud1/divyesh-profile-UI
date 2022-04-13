import React from 'react'
import './projectList.css'
import Projects from '../Projects/Projects.js'
import { myProjects } from '../../data'

export default function ProjectList() {
  return (
    <div className="p1">
      <div className="pl-texts">
        <h1 className="pl-title">Projects</h1>
        <p className="projects-text">
          As a beginner, I have completed some of the projects to explore more
          about coding.
        </p>
      </div>
      <div className="p1-lists">
        {myProjects.map((item) => (
          <Projects key={item.id} img={item.img} />
        ))}
      </div>
    </div>
  )
}
