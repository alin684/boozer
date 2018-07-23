import React from 'react'

URL = "http://localhost:3001/api/v1/cocktails/"

export default class CocktailDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cocktail: [],
      proportions: []
    }
  }

  getTheStuff(id){
    fetch(URL + `${id}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          cocktail: json,
          proportions: json.proportions
        })
      })
  }

  componentDidMount() {
    this.getTheStuff(this.props.cocktail.id)
  }

  componentWillReceiveProps(nextProps){
    this.getTheStuff(nextProps.cocktail.id)
  }

  render(){

    return (

      <div className="deets">
        <h1>{this.state.cocktail.name}</h1>
        <h4>{this.state.cocktail.description}</h4>
        <p>{this.state.cocktail.instructions}</p>
        <h3>Proportions</h3>
        <ul>
        {this.state.proportions.map( ingredient => <li key={ingredient.id}>{ingredient.ingredient_name}: {ingredient.amount}</li>)}
        </ul>
      </div>
    )
  }
}
