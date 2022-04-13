import React from 'react'
import './about.css'
import SecondPhoto from '../../img/second.picture.jpeg'

export default function about() {
  return (
    <div className="b">
      <div className="a">
        <div className="a-left">
          <div className="a-card bg"></div>

          <div className="a-card">
            <img src={SecondPhoto} alt="" className="a-image" />
          </div>
        </div>

        <div className="a-right">
          <div className="line">
            <div className="wrapper1">
              <div className="a-title">About Me</div>

              <div className="a-sub">
                A recent Master graduate in IT currently looking for an entry
                level role to start my career in this field. Determine to learn
                different IT principles which includes various techniques and
                methods that help businesses or any firm to thrive
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
