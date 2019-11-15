import React from 'react';
import Products from './components/products';



class App extends React.Component{
  constructor(props){
  super(props);
  this.state = {
    products: [],
    fruits: [],
    vegetables: []
  };

  }
  componentDidMount(){
    fetch("http://localhost:5000/products")
    .then(response => response.json())
    .then(response =>{
      this.setState({
        products: response
      });
    });

  }

  render(){
    return (
    <div>
      <h1 id = 'title'>WELCOME TO GREENS KIOSK</h1>
      <p>We sell fruits and vegetables</p>
      <Products items = {this.state.products}/>
      
    </div>
      )

    
  }
}

export default App;
