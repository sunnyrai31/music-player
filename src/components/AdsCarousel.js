import React, {Component} from 'react';
//import slider from '../Branding/slider1.jpg'
class AdsCarousel extends Component{
   render(){
        var cardList  = [
                {title:"card title 1 ", displayText:"card1 testing", src:"https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"},
                {title:"card title 2 ", displayText:"card2 testing", src:"https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"},
                {title:"card title 3", displayText:"card3 testing", src:"https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"},
                {title:"card title 4", displayText:"card4 testing", src:"https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"},
                {title:"card title 5", displayText:"card5 testing", src:"https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"},
                {title:"card title 6", displayText:"card6 testing", src:"https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"},
                {title:"card title 7", displayText:"card7 testing", src:"https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"}
             ];
        var category = ["Fav", "Similar", "repeat"]; 

        var card = cardList.map((card, index ) =>{
                return (
                        <div className="col-md-3" style={{float:"left"}} key={'carousel'+ index}
                        >
                                <div className="card mb-2">
                                        <img className="card-img-top"
                                        src="{card.src}" alt=""/>
                                        <div className="card-body">
                                                <h4 className="card-title">{card.title}</h4>
                                                <p className="card-text">{card.displayText}</p>
                                                <a className="btn btn-primary" href="#/card">Button</a>
                                        </div>
                                </div>
                        </div>
                )
        });
           return (

                   <div className="Adscarousel">
                           <div className="container my-4">
                                   <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
                                           <div className="controls-top">
                                                   <a className="btn-floating" href="#multi-item-example" data-slide="prev"><i className="fas fa-chevron-left"></i></a>
                                                   <a className="btn-floating" href="#multi-item-example" data-slide="next"><i
                                                           className="fas fa-chevron-right"></i></a>
                                           </div>
                                           <ol className="carousel-indicators">
                                                   <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
                                                   <li data-target="#multi-item-example" data-slide-to="1"></li>
                                           </ol>
                                           <div className="carousel-inner" role="listbox">
                                                   <div className="carousel-item active">
                                                        {card.map(item=>{
                                                                return item
                                                        })}
                                                   </div>
                                           </div>
                                   </div>
                           </div>
                   </div>
           )
   }
}
export default AdsCarousel;
