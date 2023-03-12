import React from 'react'
import About from './about'
import Port from './portfolio'
import Contact from './contact'
import Nav from './navbar'
import Home from './home';
import Service from './service'
import Footer from './footer'
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'

function App(){
    return <Router>
       
         <Nav/>
         <Switch>
        <Route exact path='/'>
<Home/>
<Footer className={{marginTop:'60px'}}/>
        </Route>
        <Route path='/about'>
<About/>
<Footer/>
        </Route>
       <Route path='/service'>
<Service/>
<Footer/>
        </Route>
       <Route path='/Port'>
<Port/>
<Footer/>
       </Route>
       <Route path='/contact'>
<Contact/>
<Footer/>
       </Route>
       </Switch>
       </Router>
       
    
    
}
export default App;