import './index.css'

const InputItem = props => {
  const {inputDetails} = props
  const {userEntryResult, charactersLength} = inputDetails

  return (
    <li className="list-items">
      <p className="text">
        {userEntryResult} : {charactersLength}
      </p>
    </li>
  )
}

export default InputItem
