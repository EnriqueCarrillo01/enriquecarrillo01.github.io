import './index.scss'
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import Loader from 'react-loaders'
  import {FaNodeJs, FaBootstrap} from 'react-icons/fa'
  import {SiPostgresql} from 'react-icons/si'


const Animation = () => {
    return (
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FaNodeJs/>
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
              <SiPostgresql/>
            </div>
            <div className="face6">
              <FaBootstrap/>
            </div>
          </div>
          <Loader type="pacman" />
    </div>
    )
}

export default Animation