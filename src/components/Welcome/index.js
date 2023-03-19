// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  onSubscribe = () => {
    this.setState(prevState => ({
      isSubscribe: false,
    }))
  }

  onSubscribed = () => {
    this.setState(prevState => ({
      isSubscribe: true,
    }))
  }

  isSubscribe = () => {
    const {isSubscribe} = this.state
    // let finalValue
    if (isSubscribe === true) {
      return (
        <button className="btn" type="submit" onClick={this.onSubscribe}>
          Subscribe
        </button>
      )
    }
    return (
      <button className="btn" type="submit" onClick={this.onSubscribed}>
        Subscribed
      </button>
    )
  }

  render() {
    return (
      <div className="container">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        {this.isSubscribe()}
      </div>
    )
  }
}

export default Welcome
