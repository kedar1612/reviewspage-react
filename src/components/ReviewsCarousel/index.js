// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeIndexReviews: 0,
  }

  onClickRightArrow = () => {
    const {activeIndexReviews} = this.state
    const {reviewsList} = this.props

    if (activeIndexReviews < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeIndexReviews: prevState.activeIndexReviews + 1,
      }))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="companyName">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickLeftArrow = () => {
    const {activeIndexReviews} = this.state

    if (activeIndexReviews > 0) {
      this.setState(prevState => ({
        activeIndexReviews: prevState.activeIndexReviews - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeIndexReviews} = this.state
    const currentReviewDetails = reviewsList[activeIndexReviews]

    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            className="arrow-button"
            type="button"
            testid="leftArrow"
            onClick={this.onClickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left Arrow"
            />
          </button>
          {this.renderActiveReview(currentReviewDetails)}
          <button
            className="arrow-button"
            type="button"
            testid="rightArrow"
            onClick={this.onClickRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              alt="right Arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
