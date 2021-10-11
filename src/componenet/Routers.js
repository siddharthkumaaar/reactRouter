import React from 'react'
import {Route,Switch,Link} from 'react-router-dom'
import About from './About'
import Contactus from './Contactus'
import Home from './Home'
import Technology from './Technology'

export default function Routers() {
    return (
        <div>
            <Link to='/'>Home</Link><br />
            <Link to='/about'>About</Link><br />
            <Link to='/contactus'>Contact Us</Link><br />
            <Link to='/tech'>Technology</Link>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/contactus' component={Contactus}/>
                <Route path='/tech' component={Technology}/>
            </Switch>
        </div>
    )
}
