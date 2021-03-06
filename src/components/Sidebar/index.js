import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/logo-e.png'
import LogoSubtitle from '../../assets/images/me.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faUser, faEnvelope, } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons'
const Sidebar =() => (
    <div className ='nav-bar'>
        <Link className ='logo' to ='/'>
            <img src ={LogoS} alt = 'logo'/>
            <img className = 'sub-logo' src ={LogoSubtitle} alt = 'Ehis'/>
        </Link>
        <nav>
            <NavLink exact ='true' activeclassname ='active' to = '/'>
                <FontAwesomeIcon icon= {faHome} color= '#4d4d4e'/>
            </NavLink>

            <NavLink exact ='true' activeclassname ='active' className =' about-link' to = '/about'>
                <FontAwesomeIcon icon= {faUser} color= '#4d4d4e'/>
            </NavLink>
             <NavLink exact ='true' activeclassname ='active' className = 'contact-link' to = '/contact'>
                <FontAwesomeIcon icon= {faEnvelope} color= '#4d4d4e'/>
            </NavLink>

        </nav>
    <ul>
    <li>
    <a
    target ='blank'
    rel = 'noreferrer'
    href ='https://linkedin.com/in/ehis-fidelis/'
    >
    
    <FontAwesomeIcon icon={faLinkedin} color ='#4d4d4e'/>
    </a>
    </li>

     <li>
    <a
    target ='blank'
    rel = 'noreferrer'
    href ='https://github.com/dutchman-io/'
    >
    
    <FontAwesomeIcon icon={faGithub} color ='#4d4d4e'/>
    </a>
    </li>
    

    <li>
    <a
    target ='blank'
    rel = 'noreferrer'
    href ='https://twitter.com/dutchman_io/'
    >
    
    <FontAwesomeIcon icon={faTwitter} color ='#4d4d4e'/>
    </a>
    </li>
    
    
    
    </ul>  
    </div>
)

export default Sidebar
