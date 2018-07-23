import React from 'react'

export default class CocktailFilter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <h3>Search Cocktails</h3>
        <input type='search' placeholder="Search here" onChange={this.props.handleChange} value={this.props.query}/>
      </div>
    )
  }
}
