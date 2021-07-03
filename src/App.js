
import Navigation from './Navigation'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Detail from './Pages/Detail'
import { useEffect } from 'react'
import { connect } from 'react-redux'



function App() {
    useEffect(function () {

        fetch('https://jsonplaceholder.typicode.com/post')
        .then(response=> response.json())
        .then(json => propos.dispatch({type : "GET_POSTS", payload : json}))

    }, [])

    return (
        <>
    <Router>

        <Navigation />

       
            <Switch>
          
              <Route parth="/detail">
                  
                 <Detail/>
              </Route>
        
              <Route parth="/contacto/:id">
                 <Contact/>
              </Route>

              <Route parth="/">
                <Home/>
              </Route>

          </Switch>
        
    </Router>
        
        </>
    )
}

export default connect() (App)