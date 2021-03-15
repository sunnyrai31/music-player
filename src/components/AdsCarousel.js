import React, {Component} from 'react';
import '../styling/AdsCarousel.css';
class AdsCarousel extends Component{
   render(){  
        var card = this.props.cardList.map((card, index ) =>{
                return (
                        <div className="col-md-3" style={{float:"left"}} key={'carousel'+ index}>
                                <div className="card mb-2">
                                        <img className="card-img-top"
                                        src="{card.src}" alt=""/>
                                        <div className="card-body">
                                                <h4 className="card-title">{card.title}</h4>
                                                <p className="card-text">{card.displayText}</p>
                                                <a className="btn btn-primary" href={'#/'+card.title}>Button</a>
                                        </div>
                                </div>
                        </div>
                )
        });
           return (

                   <div className="Adscarousel">
                           <label> Playlist</label>
                           {card.map(item=>{
                                        return item
                                })}
                   </div>
           )
   }
}
export default AdsCarousel;
