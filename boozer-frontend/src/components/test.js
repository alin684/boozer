import React from 'react'

URL = "http://localhost:3001/api/v1/cocktails/"

const CocktailDetail = props => {

  let cocktail

  fetch(URL + `${props.cocktail.id}`)
    .then(res => res.json())
    .then(json => {
        cocktail = json;
        console.log(cocktail)
      })

  return (
    <div className="deets">
      <h1>{cocktail.name}</h1>
      <h4>{cocktail.description}</h4>
      <p>{cocktail.instructions}</p>
      <h3>Ingredients</h3>
      <ul>
        {cocktail.name}
      </ul>
    </div>
  )
}

export default CocktailDetail;

import React from 'react'

URL = "http://localhost:3001/api/v1/cocktails/"

export default class CocktailDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cocktail: []
    }
  }

  componentDidMount() {
    fetch(URL + `${this.props.cocktail.id}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          cocktail: json
        })
      })
  }

  render(){
    return (

      <div className="deets">
        <h1>{this.state.cocktail.name}</h1>
        <h4>{this.state.cocktail.description}</h4>
        <p>{this.state.cocktail.instructions}</p>
        <h3>Ingredients</h3>
        <ul>
          {this.state.cocktail.name}
        </ul>
      </div>
    )
  }
}

import React from 'react'

URL = "http://localhost:3001/api/v1/cocktails/"

const CocktailDetail = props => {



  return (
    <div className="deets">
      <h1>{props.cocktail.name}</h1>
      <h4>{props.cocktail.description}</h4>
      <p>{props.cocktail.instructions}</p>
      <h3>Ingredients</h3>
      <ul>
        {props.cocktail.name}
      </ul>
    </div>
  )
}

export default CocktailDetail;
