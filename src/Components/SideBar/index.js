import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoW from '../../assets/images/negro.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import {FaLinkedin, FaGithub, FaTelegram} from 'react-icons/fa'

const SideBar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoW} alt='Logo'/>
            </Link>
            <nav>
                <NavLink 
                    exact="true" 
                    activeclassname="active" 
                    
                    to="/">
                    <FontAwesomeIcon className="icono" icon={faHome} color="white" />
                </NavLink>
                <NavLink 
                    exact="true" 
                    activeclassname="active"
                    className="about-link"
                    to="/about">
                    <FontAwesomeIcon className="icono" icon={faUser} color="white" />
                </NavLink>
                <NavLink 
                    exact="true" 
                    activeclassname="active" 
                    className="contact-link"
                    to="/contact">
                    <FontAwesomeIcon className="icono" icon={faEnvelope} color="white" />
                </NavLink>
            </nav>

                <ul className='lastDiv'>
                    <li>
                <a href="https://www.linkedin.com/in/emilio-enrique-carrillo-calder%C3%B3n-6a78b722b/" target='_blank' rel='noreferrer'>
                    <FaLinkedin />
                </a>
                    </li>
                    <li>
                <a href="https://github.com/EnriqueCarrillo01" target='_blank' rel='noreferrer'>
                   <FaGithub />
                </a>
                    </li>
                    <li>
                    <a href="https://t.me/EnriqueDCarrillo" target='_blank' rel='noreferrer'>
                        <FaTelegram />
                        </a>
                    </li>
                </ul>

        </div>
    )
}

export default SideBar;