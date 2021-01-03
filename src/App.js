import Data from './Data';
import React, {Component} from 'react';
import './App.css'
import Animation from './Animation';

class App extends Component{
  constructor(props){
    super(props);
    this.updateSearchItemAndFoodResult = this.updateSearchItemAndFoodResult.bind(this);
    this.runAnimation = this.runAnimation.bind(this);
    this.state = {
      dropDown: [
        "vegetables", 
        "cereals",
        "tubers",
        "fruits",
        "fish"
      ],
      foodList: Data(), 
      foodResult: [],
      searchItem: ""
    }
  }
  runAnimation(){
    Animation();
  }
  updateSearchItemAndFoodResult(event){
    const updatedFoodResult = this.state.foodList.filter((item)=>{
      return event.target.value.toLowerCase() === item.type.toLowerCase();
    });

    this.setState({
      searchItem: event.target.value,
      foodResult: updatedFoodResult
    });
  }
  render(){
    return (
      <div className="wrapper">
        <label htmlFor="select" className="label">Search</label>
        <select
        className="select"
        value={this.state.searchItem}
        id="select"
        onChange={(event)=>{ this.updateSearchItemAndFoodResult(event) }}
        onBlur={(event)=>{ this.updateSearchItemAndFoodResult(event) }}>
          <option value="none" className="option">none</option>
          {
            this.state.dropDown.map((option)=>{
              return (
                <option value={option} className="option">{option}</option>
              )
            })
          }
        </select>
        <div className="container">
          <div className="heading-container">
            {
              (()=>{
                if(this.state.foodResult[0]){
                  setTimeout(this.runAnimation, 0)
                  return (
                    <h1 className="group-heading">{this.state.foodResult[0].type}</h1>
                  )
                }
              })()
            }
          </div>
          {
            this.state.foodResult.map((item)=>{
              return (
                <section className="section">
                  <h2 className="specific-heading">{item.species}</h2>
                  <article className="article">{item.description}</article>
                </section>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default App;