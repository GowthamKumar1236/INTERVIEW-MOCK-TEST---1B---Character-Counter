import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import InputItem from '../InputItem'

import './index.css'

class CharacterCounter extends Component {
  state = {
    inputList: [],
    inputItem: '',
  }

  onChangeInput = event => {
    this.setState({inputItem: event.target.value})
  }

  onAddInput = event => {
    event.preventDefault()
    const {inputItem} = this.state
    const latestInput = {
      id: uuidv4(),
      userEntryResult: inputItem,
      charactersLength: inputItem.length,
    }
    // console.log(latestInput)

    this.setState(prevState => ({
      // eslint-disable-next-line
      inputList: [...prevState.inputList, latestInput],
      inputItem: '',
    }))
  }

  renderInput = () => {
    const {inputList} = this.state
    return inputList.length === 0 ? (
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
        className="boss-img"
      />
    ) : (
      inputList.map(eachItem => (
        <InputItem inputDetails={eachItem} key={eachItem.id} />
      ))
    )
  }

  render() {
    const {inputItem} = this.state

    return (
      <div className="bg-container">
        <div className="left-container">
          <div className="result-card-container">
            <h1 className="description">Count the characters like a Boss...</h1>
          </div>
          <ul className="result-items">{this.renderInput()}</ul>
        </div>
        <div className="right-container">
          <h1 className="heading">Character Counter</h1>
          <form className="form-input-container" onSubmit={this.onAddInput}>
            <input
              type="text"
              className="input-box"
              placeholder="Enter the characters here"
              onChange={this.onChangeInput}
              value={inputItem}
            />
            <button className="add-btn" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
