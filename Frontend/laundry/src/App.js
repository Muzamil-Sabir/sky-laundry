import logo from './logo.svg';
import './App.css';
import Home from './home';
import About from './about';
import Services from './services';
import Contact from './contact';
import Login from './login';
import Dashboard from './dashboard';
import Sidebar from './sidebar';
import Header from './header';
import Footer from './footer';
import Booking from './booking';
import Addservice from './addservice';
import Viewallservices from './viewallservices';
import Users from './users';
import Editservice from './editservice';
import Placeorder from './placeorder';
import Acceptedbookings from './acceptedbookings';
import Completedbookings from './completedbookings';
import Addmachine from './addmachine';
import Showmachines from './showmachines';
import Editmachine from './editmachine';
import Confirmbooking from './confirmbooking';
import Register from './register';
import Logout from './logout';
import Newuser from './newuser';
import Reports from './reports';
import Rjectedbookings from './rejectedbookings';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Rejectedbookings from './rejectedbookings';
import Suggestions from './suggestions';
function App() {
  return (
    <div className="">
      <Router>
        <Switch>
               <Route exact path="/" component={Home}/>
               <Route exact path="/about" component={About}/>
               <Route exact path="/services" component={Services}/>
               <Route exact path="/login" component={Login}/>
               <Route exact path="/register" component={Register}/>
               <Route exact path="/logout" component={Logout}/>
               <Route exact path="/contact" component={Contact}/>
              <Route   component={DefaultComponent}/>
              </Switch>
       
      
        </Router>
    </div>
  );
}


const DefaultComponent = () => (
  <div>
 
 <Sidebar/>
 <Header/>
 
        
        <Switch>
        
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/booking" component={Booking}/>
        <Route exact path="/addservice" component={Addservice}/>
        <Route exact path="/viewallservices" component={Viewallservices}/>
        <Route exact path="/users" component={Users}/>
        <Route exact path="/editservice" component={Editservice}/>
        <Route exact path="/placeorder" component={Placeorder}/>
        <Route exact path="/acceptedbookings" component={Acceptedbookings}/>
        <Route exact path="/completedbookings" component={Completedbookings}/>
        <Route exact path="/addmachine" component={Addmachine}/>
        <Route exact path="/showmachines" component={Showmachines}/>
        <Route exact path="/editmachine" component={Editmachine}/>
        <Route exact path="/confirmbooking" component={Confirmbooking}/>
        <Route exact path="/newuser" component={Newuser}/>
        <Route exact path="/reports" component={Reports}/>
        <Route exact path="/rejectedbookings" component={Rejectedbookings}/>
        <Route exact path="/suggestions" component={Suggestions}/>

    
   
            
      </Switch>
      <Footer/>
  
  </div>
)
export default App;
