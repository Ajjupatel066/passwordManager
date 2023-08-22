import {Component} from 'react'

import PasswordItem from '../PasswordItem'

import './index.css'

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    showPassword: false,
    searchPassword: '',
  }

  render() {
    const {passwordsList, showPassword} = this.state

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="password-manager-container">
          <img
            className="password-manager-img"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
          />
          <form className="add-password-form">
            <h1 className="password-form-title">Add New Password</h1>
            <div className="input-container">
              <div className="icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="website-img"
                />
              </div>
              <input
                type="text"
                placeholder="Enter Website"
                className="input-box"
              />
            </div>

            <div className="input-container">
              <div className="icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="website-img"
                />
              </div>
              <input
                type="text"
                placeholder="Enter Username"
                className="input-box"
              />
            </div>

            <div className="input-container">
              <div className="icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="website-img"
                />
              </div>
              <input
                type="password"
                placeholder="Enter Password"
                className="input-box"
              />
            </div>
            <div className="button-container">
              <button className="add-btn" type="button">
                Add
              </button>
            </div>
          </form>
        </div>

        <div className="saved-password-container">
          <div className="saved-password-header">
            <div className="container">
              <h1 className="header-title">Your Passwords</h1>
              <div className="span-count">
                <p className="count">{passwordsList.length}</p>
              </div>
            </div>
            <div className="search-box">
              <div className="icon-box">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-icon"
                />
              </div>
              <input
                type="search"
                className="search-input"
                placeholder="Search"
              />
            </div>
          </div>
          <hr className="hr-line" />
          <div className="show-password-container">
            <input
              type="checkbox"
              id="showPassword"
              value={showPassword}
              className="check-box"
            />
            <label htmlFor="showPassword" className="text">
              Show Passwords
            </label>
          </div>
          {passwordsList.length === 0 ? (
            <div className="no-password-container">
              <img
                className="no-password-img"
                alt="no passwords"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              />
              <p className="header-title">No Passwords</p>
            </div>
          ) : (
            <ul>
              {passwordsList.map(eachPassword => (
                <PasswordItem
                  eachPassword={eachPassword}
                  showPassword={showPassword}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
