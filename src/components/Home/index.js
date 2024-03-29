import {useState} from 'react'
import LogoTitle from '../../assets/images/logo-e.png'
import {Link} from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Logo from  './Logo'

const Home = () => {
    const [letterClass /*setLetterClass*/] = useState('text-animate')
    const nameArray =['h', 'i', 's',]
    const jobArray =['s','o', 'f', 't', 'w', 'a', 'r','e',' ', ' d', 'e', 'v', 'o', 'l', 'o', 'p', 'e', 'r']


/*useEffect(() => {
    return setTimeout(() => {
        setLetterClass('text-animate-hover')
    },4000)
    }, [])
*/
    return(
        <div className = 'container home-page'>
            <div className = 'text-zone'>
                <h1>
                <span className = {letterClass}>H</span>
                <span className = {`${letterClass} _12`}>i</span>
                <br/>
                <span className = {`${letterClass} _13`}>I</span>
                <span className = {`${letterClass} _14`}>'m</span> 
                <img src = {LogoTitle} alt = 'developer' />

                <AnimatedLetters letterClass = {letterClass}
                strArray ={nameArray}
                idx ={15}/>
                <br/>

                <AnimatedLetters letterClass = {letterClass}
                strArray = {jobArray}
                idx ={18}/>

                </h1>
                <h2> Blockchain Developer / Fullstack Developer </h2>
                <Link to ='/contact' className = 'flat-button'> CONTACT ME </Link>  
            </div>
        <Logo />
        </div>
    ) 
}
export default Home
