import './index.css'

const Header = () => {
  console.log('Header')
  return (
    <div className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="websiteLogo"
      />

      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png "
        alt="nav logout"
        className="nav-logout-icon"
      />
      <div className="nav-items-container">
        <ul className="list-container">
          <li className="nav-items">Home</li>
          <li className="nav-items">Products</li>
          <li className="nav-items">Cart</li>
        </ul>
        <button type="button" className="logout-button">
          Logout
        </button>
      </div>
    </div>
  )
}
export default Header
