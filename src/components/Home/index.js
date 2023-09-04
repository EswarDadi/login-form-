import {Component} from 'react'

import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="icons-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="icons"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png "
            alt="nav products"
            className="icons"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="icons"
          />
        </div>
        <div className="cards-container">
          <div>
            <h1 className="heading">
              Clothes That Get YOU <br />
              Noticed
            </h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className="image2"
            />
            <p className="paragraph">
              Fashion is part of the daily air and it does not quite help that
              it changes <br />
              all the time.Clothes have always been a marker of the era and we
              are in <br />a revolution .Your fashion makes you been seen and
              heard that way you
              <br /> are.So,celebrate the seasons new and exciting fashion in
              your own
              <br /> way.
            </p>
            <button type="button" className="shop-now-button">
              Shop Now
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="image"
          />
        </div>
      </div>
    )
  }
}
export default Home
