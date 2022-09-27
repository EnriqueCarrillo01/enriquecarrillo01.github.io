
import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar';
import './index.scss';
import Waves from './waves.js'


const Layout = () => {
    return (
    <div className='page'>
    <SideBar />
    <Outlet/>
    <Waves />
    </div>
    )
    
}
export default Layout;