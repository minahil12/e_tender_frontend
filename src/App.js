import React, { Component } from 'react';
import { Switch,Route, Redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './components/navbar'
import Tenders from './components/Tenders';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Logout from './components/Logout';
import SignUp from './components/SignUp';
import Footer from './components/footer';
import Terms from './components/Terms';
import HomePage from './components/HomePage'
import auth from './services/authServices'



class App extends React.Component {
  constructor(props){
    super(props)
    this.state={apiResponse: ""}
  }

  componentDidMount(){
    const user = auth.getCurrentUser();
    this.setState({user})
    
  }

  callAPI(){
    fetch("http://127.0.0.1:8000/api/")
    .then(res=> res.text())
    .then(res=> this.setState({apiResponse: res}));
  }

  componentWillMount(){
    this.callAPI();
  }
  render(){
    const {user} = this.state;
    return(
     
      <React.Fragment>
         <ToastContainer/>
      <Navigation user={user}/> 
      
        
        <Switch>
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={SignUp} />
          <Route path="/terms" component={Terms} />
          <Route path="/tenders" component={Tenders} />
          <Route path="/home" component={HomePage} />
          <Route path="/logout" component={Logout} />
          <Redirect from="/" exact to="/home" />
          
         
           
        </Switch>
       
        
     
      <Footer />
      </React.Fragment>
     
    );
  }
}
export default App;