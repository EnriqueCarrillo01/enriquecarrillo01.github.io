import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Layout from './Components/Layout/index.js'
import Home from './Components/Home/index.js'
import About from './Components/About/About.js'
import WorkExperience from './Components/WorkExperience/index.js'
import { useParams } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="WorkExperience" element={<WorkExperience/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
