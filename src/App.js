import React, {Component} from 'react';
import Header from './components/Header';
import AdsCarousel  from './components/AdsCarousel'
// import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component{
  render (){
    return (
      <div className="app-container">
        <Header></Header>
        <AdsCarousel></AdsCarousel>
      </div>
      
    )
  }
}
export default App;