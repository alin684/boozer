import React from 'react';
// import FormInput from './FormInput.js'

URL = "http://localhost:3001/api/v1/cocktails/";

export default class CocktailForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      name: "",
      description: "",
      instructions: "",
      proportions: [
        {
          ingredient_name: "",
          amount: ""
        }
      ]
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.passCreateCocktailFunc(this.state)
    event.target.reset()
    this.setState({
      name: "",
      description: "",
      instructions: ""
    })
  }

  addEmptyIngredient = (event) => {
    event.preventDefault()
    this.setState({
      proportions: [...this.state.proportions, {ingredient_name: "", amount: ""}]
    })
  }

  addIngredientInfo  = (index) => (event) => {
    const newProportions = this.state.proportions.map((proportion, sidx) => {
      if (index !== sidx) return proportion;
      return { ...proportion, [event.target.name]: event.target.value };
    });

    this.setState({
      proportions: newProportions
    });
  }

  render(){
    return (
      <div className="cocktailFormerino">
        <form onSubmit={this.handleSubmit}>
          <h1>Create a Cocktail</h1>
          <p>
            <label>Name:</label>
            <input type="text" name="name" placeholder="" value={this.state.name} onChange={this.handleChange} />
          </p>
          <p>
            <label>Description:</label>
            <input type="text" name="description" placeholder="" value={this.state.description} onChange={this.handleChange} /></p>
          <p>
            <label>Instructions:</label>
            <input type="text" name="instructions" placeholder="" value={this.state.instructions} onChange={this.handleChange} />
          </p>
          <p>
            <h3>Proportions</h3>
            {this.state.proportions.map((proportion, index) =>
              <div className="newIngredient">
                <p>
                  <label>Ingredient Name:</label>
                  <input type="text" name="ingredient_name" placeholder="" value={this.state.proportions.ingredient_name} onChange={this.addIngredientInfo(index)} />
                </p>
                <p>
                  <label>Amount:</label>
                  <input type="text" name="amount" placeholder="" value={this.state.proportions.amount} onChange={this.addIngredientInfo(index)} />
                </p>

              </div>
            )}
          </p>
          <p>
            <button className="plus-button" onClick={this.addEmptyIngredient}>+</button>
          </p>
          <p>
            <button className="submitButton" type="submit">Sounds gross</button>
          </p>
        </form>
      </div>
    )
  }
}
