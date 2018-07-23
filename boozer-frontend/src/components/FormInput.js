import React from 'react'

export default class FormInput extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      ingredient_name: this.props.proportion.ingredient_name,
      amount: this.props.proportion.amount,
      index: this.props.index
    }
  }

  render() {
    return(
      <div className="newIngredient">
        <p>
          <label>Ingredient Name</label>
          <input type="text" value={this.props.proportion.ingredient_name} onChange={this.props.addIngredientInfo} />
        </p>
        <p>
          <label>Amount</label>
          <input type="text" value={this.props.proportion.amount} onChange={this.props.addIngredientInfo} />
        </p>

      </div>
    )
  }
}
