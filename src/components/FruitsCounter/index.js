import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoesCount: 0, bananaCount: 0}

  onClickEatMango = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  onClickEatBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoesCount, bananaCount} = this.state

    return (
      <div className="fruit-container">
        <div className="inner-container">
          <h1 className="heading">
            Bob ate <span className="value">{mangoesCount}</span> mangoes{' '}
            <span className="value">{bananaCount}</span> bananas
          </h1>

          <div className="fruit-card">
            <div className="mango-card">
              <img
                alt="mango"
                className="mango-image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <button
                type="button"
                className="button-style"
                onClick={this.onClickEatMango}
              >
                Eat Mango
              </button>
            </div>

            <div className="mango-card">
              <img
                alt="banana"
                className="mango-image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <button
                type="button"
                className="button-style"
                onClick={this.onClickEatBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
