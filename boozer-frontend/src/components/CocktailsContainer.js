import React from 'react'
import { Route, Link } from 'react-router-dom'
import CocktailDetail from './CocktailDetail.js'
import CocktailForm from './CocktailForm.js'
import CocktailFilter from './CocktailFilter.js'


const URL = 'http://localhost:3001/api/v1/cocktails'

export default class CocktailsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      cocktails: [],
      query: ""
    }
  }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(json => {
        this.setState({
          cocktails: json
        })
      })
  }

  makeNewCocktail = (cocktail) => {
    fetch(URL, {
      method: 'POST',
      headers: ({
        'content-type': 'application/json',
        'accept': 'application/json'
      }),
      body: JSON.stringify(cocktail)
    })
      .then(res => res.json())
      .then(json => {
        this.setState({
          cocktails: [...this.state.cocktails, json]
        })
      })
  }

  renderCocktailList = () => {
    const filteredCocktails = this.state.cocktails.filter(cocktail => cocktail.name.toLowerCase().includes(this.state.query) || cocktail.description.toLowerCase().includes(this.state.query) || cocktail.instructions.toLowerCase().includes(this.state.query))
    return filteredCocktails.map(cocktail => <li key={cocktail.id}> <Link to={`/cocktails/${cocktail.id}`}>{cocktail.name}</Link></li>)
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value.toLowerCase()
    })
  }

  render(){
    debugger
    return (
      <div>
        <div className='parentContainer'>
          <div className='sidebarList'>
            <ul className='sidebar_ul'>
              <CocktailFilter handleChange={this.handleChange} query={this.state.query} />
              {this.renderCocktailList()}
            </ul>

          </div>
          <Route path='/cocktails/:id' render={
            (renderProps) => {
              const id = renderProps.match.params.id
              const cocktail = this.state.cocktails.find(cocktail => cocktail.id === parseInt(id))
              return !cocktail ? null : <CocktailDetail cocktail={cocktail} />
            }
          } />
          <div>
            <CocktailForm passCreateCocktailFunc={this.makeNewCocktail} />
          </div>
        </div>
      </div>
    )
  }
}
