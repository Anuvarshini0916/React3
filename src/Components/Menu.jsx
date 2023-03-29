import React, { Component } from 'react'
import "../Components/Menu.css"
import SubMenu from './SubMenu';
import pic1 from "../images/coffee.png"

export default class Menu extends Component {
    state={Posts:[
      {title:" Latte/Iced Latte"},
      {title:"Cafe'sCappuccino"},
      {title:"Spcl Macchiato"},
      {title:"Affogato coffee"},
    ]}
  render() {
    return (
      <section id='menu'>
        <div className='innerMenu'>
        <h1>A's MENU</h1>
        <div className=''>
        <p><SubMenu img={pic1} title={this.state.Posts[0].title} description={this.state.Posts[0].description} price="  $5" /></p>
        <SubMenu img={pic1} title={this.state.Posts[1].title} description={this.state.Posts[1].description} price="$9" />
        <SubMenu img={pic1} title={this.state.Posts[2].title} description={this.state.Posts[2].description} price="  $10" />
        <SubMenu img={pic1} title={this.state.Posts[3].title} description={this.state.Posts[3].description} price="  $7" />
        </div>
        </div>
      </section>
    )
  }
}
