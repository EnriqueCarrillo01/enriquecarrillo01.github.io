import './About.scss'
import { Link, useParams } from 'react-router-dom'

const About = () => {
    return (
        <div className='container2'>
            <div>
            <h1>ABOUT ME</h1>
            <p>I’m a bilingual Mexican (English and Spanish) software developer, I’m 20 years old, and I have knowledge mainly in web development. I enjoy learning and teaching because that is the best way to solidify our knowledge. 
                My motivation is simple, I love what I do, I love to code, and all this programming world, for that reason 
                I spend my time programming and learning more about this as a hobby too. 
                I can move alone to another country and am ready to work.</p>
            </div>
            <div>
            <h2>EDUCATION</h2>
                <ul>
                    <li>
                        <h3><bold>University</bold></h3>
                         <p>Universidad Autónoma De Chihuahua</p>
                         <p>I’m currently a software engineering student (I study online so i can work in other country)</p>
                    </li>
                    <li>
                        <h3><bold>Bootcamp</bold></h3>
                        <p>In this Bootcamp, I learn mainly about technologies for web development, for instance:  JAVASCRIPT, REACT, HTML, CSS, AJAX, JQUERY, EXPRESS, NODEJS, SQLITE, POSTGRESQL, SEQUELIZE, REDUX, REACT-REDUX, JEST, WEBPACK,BABEL.</p>
                    </li>
                    <li>
                        <h3><bold>Courses</bold></h3>
                        <p>This is basically my main source of knowledge, hundreds(or thousands) of hours spent on courses and reading documentation.</p>
                        <p>Freecodecamp:</p>
                        <ol>
                            <li>Legacy Responsive Web Design</li>
                            <li>New Responsive Web Design</li>
                            <li>JavaScript Algorithms and Data Structures</li>
                            <li>Front End Development Libraries</li>
                        </ol>
                        <p>And a lot more but the others instead of giving me a certification, gave me only the knowledge</p>
                    </li>
                </ul>
                <div className='buttonWrapper'>
                <Link to="/WorkExperience" className="btn btn-outline-success"> Work Experience</Link>
                </div>
            </div>
        </div>
    )
}
export default About