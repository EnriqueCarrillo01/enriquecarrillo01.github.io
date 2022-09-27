import './index.scss'
import TheRock from '../../assets/images/therock.png'
import { Link } from 'react-router-dom'
import { useParams, useNavigate} from 'react-router-dom'

const WorkExperience = () => {
    const navigate = useNavigate()
    return <div className='TheRockGod'>
        <img src={TheRock} alt='TheRock'/>
        <p><strong>Note:</strong> I don't know if you are having a bad moment, so I just wanted to make a funny moment.</p>
        <button className='btn btn-warning' onClick={() => navigate(-1)}>Go Back</button>
    </div>
}

export default WorkExperience