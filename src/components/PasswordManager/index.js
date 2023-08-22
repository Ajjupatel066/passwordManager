import {Component} from 'react'
import {v4} from 'uuid'

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

  deletePassword = id => {
    const {passwordsList} = this.state
    const updatedPasswordList = passwordsList.filter(
      eachPassword => id !== eachPassword.id,
    )

    this.setState({passwordsList: updatedPasswordList})
  }

  onClickAddButton = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state

    const newPassword = {
      id: v4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    }))
  }

  onChangeSearchInput = event => {
    event.preventDefault()
    const {passwordsList} = this.state
    const updatedList = passwordsList.filter(
      eachPassword =>
        event.target.value.toLowerCase() === eachPassword.website.toLowerCase(),
    )

    this.setState({
      searchPassword: event.target.value,
      passwordsList: updatedList,
    })
  }

  onChangeWebsiteInput = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsernameInput = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {
      passwordsList,
      showPassword,
      websiteInput,
      usernameInput,
      passwordInput,
      searchPassword,
    } = this.state

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
          <form className="add-password-form" onSubmit={this.onClickAddButton}>
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
                value={websiteInput}
                onChange={this.onChangeWebsiteInput}
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
                value={usernameInput}
                onChange={this.onChangeUsernameInput}
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
                value={passwordInput}
                onChange={this.onChangePasswordInput}
                placeholder="Enter Password"
                className="input-box"
              />
            </div>
            <div className="button-container">
              <button className="add-btn" type="submit">
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
                value={searchPassword}
                onChange={this.onChangeSearchInput}
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
              onChange={this.onClickShowPassword}
              className="check-box"
            />
            <label htmlFor="showPassword" className="text">
              Show passwords
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
            <ul className="saved-password-list">
              {passwordsList.map(eachPassword => (
                <PasswordItem
                  key={eachPassword.id}
                  eachPassword={eachPassword}
                  showPassword={showPassword}
                  deletePassword={this.deletePassword}
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
