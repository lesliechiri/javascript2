import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import './App.css'



class App extends React.Component{

    render(){
        return(
          <div>
            <Navbar/>
            <Home/>
          </div>
        );
    }
}

export default App;