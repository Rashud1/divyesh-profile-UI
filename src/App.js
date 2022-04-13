import './App.css'
import Intro from './componenets/intro/intro.js'
import About from './componenets/about/About.js'
import ProjectList from './componenets/ProjectList/projectList.js'
import Contact from './componenets/contact/Contact'
import Skills from './componenets/skills/Skills'

function App() {
  return (
    <div className="main">
      <Intro />
      <About />
      <ProjectList />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
