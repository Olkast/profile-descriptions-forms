import React from 'react';
import './App.module.scss';
import MainPage from "./components/Pages/MainPage/MainPage";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import FirstStep from "./components/Pages/FirstStep/FirstStep";
import SecondStep from "./components/Pages/SecondStep/SecondStep";
import ThirdStep from "./components/Pages/ ThirdStep/ ThirdStep";


function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/firstStep' element={<FirstStep />}/>
            <Route path='/secondStep' element={<SecondStep />}/>
            <Route path='/thirdStep' element={<ThirdStep />}/>
          </Routes>
        </div>
      </Router>
  )}

export default App;

