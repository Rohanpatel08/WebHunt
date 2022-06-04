import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar'; 
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App =()=> {
  const pageSize = 9;
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        />
        <Routes>
          <Route exact path="/" element = {<News setProgress={setProgress} apiKey={apiKey} key="general" pagesize = {pageSize} country = "in" category = "general"/>}/>
          <Route exact path="/business" element = {<News setProgress={setProgress} apiKey={apiKey} key="business" pagesize = {pageSize} country = "in" category = "business"/>}/>
          <Route exact path="/entertainment" element={ <News setProgress={setProgress} apiKey={apiKey} key="entertainment" pagesize={9} country="in" category="entertainment"/>}/>
          <Route exact path="/general" element={ <News setProgress={setProgress} apiKey={apiKey} key="general" pagesize={9} country="in" category="general"/>}/>
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pagesize={9} country="in" category="health"/>}/>
          <Route exact path="/science"element={<News setProgress={setProgress} apiKey={apiKey} key="science" pagesize={9} country="in" category="science"/>}/>
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pagesize={9} country="in" category="sports"/>}/>
          <Route exact path="/technology" element={ <News setProgress={setProgress} apiKey={apiKey} key="technology" pagesize={9} country="in" category="technology"/>}/>
        </Routes>
        {/* Hello World from Rohan Bangoriya */}
        </Router>
      </div>
    )
}

export default App;