
import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import News from './components/News';
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";
import Home from './components/Home';

const App =()=> {
  // apiKey=process.env.news_api_1
  const [progress, setprogress] = useState(0)
  const  setProgress=(progress)=>{
  setprogress(progress);
}
    return (
      <div>
<Router>
        <Navbar/>
        <LoadingBar
        height={4}
                color='#f11946'
                progress={progress}     
        />
        <Routes>
        <Route exact path="/" element={ <Home  setProgress={setProgress} key="home"   pagesize={6}/>}/>
       
        <Route exact path="/general" element={ <News setProgress={setProgress}   key="general" pagesize={9} country="in" category="general"/>}/>
        <Route exact path="/business" element={ <News setProgress={setProgress}   key="business" pagesize={9} country="in" category="business"/>}/>
        <Route exact path="/science" element={ <News setProgress={setProgress}   key="science" pagesize={9} country="in" category="science"/>}/>
        <Route exact path="/entertainment" element={ <News setProgress={setProgress}   key="entertainment" pagesize={9} country="in" category="entertainment"/>}/>
        <Route exact path="/health" element={ <News setProgress={setProgress}   key="health" pagesize={9} country="in" category="health"/>}/>
        <Route exact path="/sports" element={ <News setProgress={setProgress}   key="sports" pagesize={9} country="in" category="sports"/>}/>
        <Route exact path="/technology" element={ <News setProgress={setProgress}   key="technology" pagesize={9} country="in" category="technology"/>}/>
        </Routes>
</Router>
      </div>

    )
  }

export default App
