import React, { Component } from 'react';
import { Switch,Route, Redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './components/navbar'
import Tenders from './components/Tenders';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Footer from './components/footer';
import Terms from './components/Terms';
import HomePage from './components/HomePage'




class App extends React.Component {
  constructor(props){
    super(props)
    this.state={apiResponse: ""}
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
    return(
     
      <React.Fragment>
         <ToastContainer/>
      <Navigation /> 
      <main className="container">
        
        <Switch>
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={SignUp} />
          <Route path="/terms" component={Terms} />
          <Route path="/profile" component={Tenders} />
          <Route path="/home" component={HomePage} />
          <Redirect from="/" exact to="/home" />
          
         
           
        </Switch>
       
        
      </main>
      <Footer />
      </React.Fragment>
     
    );
  }
}
export default App;