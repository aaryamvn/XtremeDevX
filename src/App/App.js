import './App.css';
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'


import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/work">
            {/* <Work /> */}
          </Route>
          <Route path="*">
            <h1>Page not found!</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;