import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', isError: false, errorMsg: ''}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({isError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    console.log(response)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUserName = () => {
    const {username} = this.state

    return (
      <div>
        <label htmlFor="userId" className="label-element">
          USERNAME
        </label>
        <br />
        <input
          type="text"
          placeholder="Username"
          id="userId"
          value={username}
          className="input-element"
          onChange={this.onChangeUserName}
        />
      </div>
    )
  }

  renderPassword = () => {
    const {password} = this.state
    return (
      <div>
        <label htmlFor="password" className="label-element">
          PASSWORD
        </label>
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          id="password"
          className="input-element"
          onChange={this.onChangePassword}
        />
      </div>
    )
  }

  render() {
    const {isError, errorMsg} = this.state
    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo1"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-login"
        />
        <form onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          {this.renderUserName()}
          {this.renderPassword()}
          <button type="submit" className="login-button">
            Login
          </button>
          {isError ? <p className="error-msg">{`* ${errorMsg}`}</p> : ''}
        </form>
      </div>
    )
  }
}
export default LoginForm
