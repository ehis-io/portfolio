import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import {useState /*, useEffect*/} from 'react'
import {
      faBtc,
      faCss3,
      faGitAlt,
      faHtml5,
      faJsSquare,
      faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
const About =() => {
    const [letterClass, setLetterClass]= useState('text-animate')

   /* useEffect(() =>{
        return setTimeout(() =>{
            setLetterClass('text-animate-hover')
        }, 3000)}, [])
*/
    return (
		<>
        <div className = 'container about-page'>
        <div className = 'text-zone'>
        <h1>
        <AnimatedLetters
        letterClass={letterClass}
        strArray = {['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
         idx ={1.5} />
        </h1>
			


        <p>
			I'm very passionate software developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
        </p>

         <p align="LEFT">
            I'm naturally curious, and perpetually working on
            improving my skills one problem at a time.
          </p>

          <p>
            If I need to define myself in one sentence that would
			 be a science nerd, audio engineering enthusiast, and tech-obsessed!!!
          </p>

        </div>

		 <div className="stage-cube-cont">
          <div className="cubespinner">

            <div className="face1">
              <FontAwesomeIcon icon={faBtc} color="#ff9900" />
            </div>

            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>

            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>

            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>

            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>

            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>

          </div>
        </div>
	</div>
	<Loader type = 'pacman' />
	</>
    )
}

export default About
