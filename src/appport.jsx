import React from 'react'
import About from './about'
import Port from './portfolio'
import Contact from './contact'
import Nav from './navbar'
import Home from './home';

import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'

function App(){
    return <Router>
       
         <Nav/>
         <Switch>
        <Route exact path='/'>
<Home/>
        </Route>
        <Route path='/about'>
<About/>
        </Route>
       
       <Route path='/Port'>
<Port/>
       </Route>
       <Route path='/contact'>
<Contact/>
       </Route>
       </Switch>
      
       </Router>
       
    
    
}
export default App;