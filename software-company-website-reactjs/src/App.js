// import { Route, Switch } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Aboutus from './containers/Aboutus';
import Services from './containers/Services';
import Portfolio from './containers/Portfolio';
import Team from './containers/Team';
import Contactus from './containers/Contactus';
import Home from './containers/Home';
import Prices from './containers/Prices';
import Notfound from './containers/Notfound';
import FAQs from './containers/FAQs';

function App() {
  return (
<Router>
  <div className="App">
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>
         <Route exact path="/aboutus" component={Aboutus}/>
         <Route exact path="/services" component={Services}/>
         <Route exact path="/portfolio" component={Portfolio}/>
         <Route exact path="/team" component={Team}/>
         <Route exact path="/prices" component={Prices}/>
         <Route exact path="/FAQs" component={FAQs}/>
         <Route exact path="/contactus" component={Contactus}/>
         <Route exact component={Notfound}/>
      </Switch>
  </div>
</Router>

    );
}

export default App;
