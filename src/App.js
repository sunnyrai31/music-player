import React, {Component} from 'react';
import Header from './components/Header';
import AdsCarousel  from './components/AdsCarousel'
// import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component{
  render (){
    var cardList  = [
      {title:"card-title-1 ", displayText:"card1 testing", src:"https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"},
      {title:"card-title-2 ", displayText:"card2 testing", src:"https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"},
      {title:"card-title-3", displayText:"card3 testing", src:"https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"},
      {title:"card-title-4", displayText:"card4 testing", src:"https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"},
      {title:"card-title-5", displayText:"card5 testing", src:"https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"},
      {title:"card-title-6", displayText:"card6 testing", src:"https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"},
      {title:"card-title-7", displayText:"card7 testing", src:"https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"}
   ];
    return (
      <div className="app-container">
        <Header></Header>
        <AdsCarousel cardList={cardList}></AdsCarousel>
        <AdsCarousel cardList={cardList}></AdsCarousel>
        <AdsCarousel cardList={cardList}></AdsCarousel>
        <AdsCarousel cardList={cardList}></AdsCarousel>
      </div>
      
    )
  }
}
export default App;