import { Link } from "react-router-dom";
import "./index.scss"
import Animation from '../Animation/index.js'
const home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone"></div>
            <h1 className="">Hi, <br/> I'm Enrique,<br/> Web Developer.</h1>
            <h2>Front End / Back End / Data Bases</h2>
            <Link to="/contact" className="btn btn-outline-success"> CONTACT ME</Link>
            <Animation/>
            
        </div>
    );
}


export default home;