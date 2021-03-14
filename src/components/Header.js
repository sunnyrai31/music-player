import React, {Component} from 'react';
class Header extends Component{
  render (){
    var menus = ['Home', 'Explore', 'Library'];
    var menu = menus.map(function(name, index){
                    return <button  type="button" key ={index} className="btn btn-transparent store-font">{name}</button>;
                  });

    return (
      <div className="app-header">
        <div className="navbar navbar-expand-lg navbar-light">
          <div className="col-sm-4">
            <button type="button" className="btn btn-transparent store-font">Store</button>
          </div>
          <div className="col-md-4">
              {menu}
          </div>
          <div className="col-sm-4" style={{display:"flex"}}>
          <form className="form-inline">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-transparent my-2 my-sm-0 store-font" type="submit">Search</button>
            </form>
            <button type="button" className="btn btn-transparent store-font">Profile</button>
          </div>
        </div>
      </div>
      
    )
  }
}
export default Header;