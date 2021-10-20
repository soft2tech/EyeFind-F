import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import './app.css'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import TravelPage from './pages/Travel'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/eyetravel">
              <TravelPage />
            </Route>
          </Switch>
      </Router>
    </>
  )
}

export default App;
