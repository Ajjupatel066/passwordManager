import './index.css'

const PasswordItem = props => {
  const {eachPassword, showPassword, deletePassword} = props
  const {id, website, username, password} = eachPassword

  const onDeletePassword = () => {
    deletePassword(id)
  }

  return (
    <li className="saved-password-card">
      <div className="initial-container">
        <p className="initial-text">{username[0].toUpperCase()}</p>
      </div>
      <div className="Details">
        <p className="saved-text">{website}</p>
        <p className="saved-text">{username}</p>
        {showPassword ? (
          <p className="saved-text">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars"
          />
        )}
      </div>
      <button
        type="button"
        data-testid="delete"
        onClick={onDeletePassword}
        className="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default PasswordItem
