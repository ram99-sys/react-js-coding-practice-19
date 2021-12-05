import {Component} from 'react'

import './index.css'

import '../../App'

import BrowserHistoryItem from '../BrowserHistoryItem'

class BrowserHistoryApp extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistoryTab = id => {
    console.log(id)
  }

  findingListCount = filteredResults => {
    if (filteredResults.length === 0) {
      return <h1>There is no history to show</h1>
    }
    return (
      <ul className="browser-history-items-container">
        {filteredResults.map(eachHistoryItem => (
          <BrowserHistoryItem
            key={eachHistoryItem.id}
            historyDetails={eachHistoryItem}
            deleteHistoryTab={this.deleteHistoryTab}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {searchInput} = this.state
    const {initialHistoryList} = this.props
    const filteredResults = initialHistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const historyClassName =
      filteredResults.length === 0 ? 'no-history-heading' : null

    return (
      <div className="browser-history-container">
        <div className="app-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-bar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
            <input
              type="search"
              className="input-element"
              placeholder="Search history"
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        <div className={`body-container ${historyClassName}`}>
          {this.findingListCount(filteredResults)}
        </div>
      </div>
    )
  }
}

export default BrowserHistoryApp
