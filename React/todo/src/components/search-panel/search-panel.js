import React, {Component} from 'react'
import './search-panel.css'

class SearchPanel extends Component {
  state = {
    term: ''
  }

  onSearchChange = (event) => {
    const term = event.target.value
    this.setState({term})
    this.props.onSearchChange(term)
  }

  render () {
    return (
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        onChange={this.onSearchChange}
        value={this.state.term}
      />
    )
  }
}

export default SearchPanel