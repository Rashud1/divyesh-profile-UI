import React from 'react'
import './skills.css'
import { IoLogoHtml5 } from 'react-icons/io'
import { FaCss3Alt } from 'react-icons/fa'
import { GrReactjs } from 'react-icons/gr'
import { SiJavascript } from 'react-icons/si'
import { GrNode } from 'react-icons/gr'
import { SiMongodb } from 'react-icons/si'

export default function Skills() {
  return (
    <>
      <div className="left">
        <div className="heading">Skills</div>
        <div className="wrapper">
          <div className="left-column">
            <div className="skill-item">
              <div className="skill-icon">
                <IoLogoHtml5 />
              </div>
              <h6>HTML5</h6>
            </div>
            <div className="skill-item">
              <div className="skill-icon">
                <FaCss3Alt />
              </div>
              <h6>CSS</h6>
            </div>
            <div className="skill-item">
              <div className="skill-icon">
                <GrReactjs />
              </div>
              <h6>React</h6>
            </div>
            <div className="skill-item">
              <div className="skill-icon">
                <SiJavascript />
              </div>
              <h6>Javascript</h6>
            </div>
            <div className="skill-item">
              <div className="skill-icon">
                <GrNode />
              </div>
              <h6>Node JS</h6>
            </div>
            <div className="skill-item">
              <div className="skill-icon">
                <SiMongodb />
              </div>
              <h6>Mongo DB</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
