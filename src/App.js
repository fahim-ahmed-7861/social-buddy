import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from './Components/Details/Details';


function App() {
  return (
    <div >

      <Header></Header>
     

      <Router>

        <Switch>
          <Route path="/home">

          <a src='/home'> <Home></Home></a>
           

          </Route>
        
      
          <Route exact path="/">

          <a src='/home'> <Home></Home></a>

          </Route>

          <Route path="/Details/:id">

            <Details></Details>

          </Route>

          <Route path="*">

            <NotFound></NotFound>



          </Route>

        </Switch>

      </Router>



    </div>
  );
}

export default App;
