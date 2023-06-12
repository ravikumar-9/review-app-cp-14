// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReview: 0}

  onLeftClick = () => {
    const {activeReview} = this.state
    if (activeReview >= 1) {
      this.setState(prevState => ({activeReview: prevState.activeReview - 1}))
    }
    if (activeReview === 0) {
      this.setState(prevState => ({activeReview: prevState.activeReview}))
    }
  }

  onRightClick = () => {
    const {activeReview} = this.state
    const {reviewsList} = this.props
    if (activeReview < reviewsList.length - 1 && activeReview >= 1) {
      this.setState(prevState => ({activeReview: prevState.activeReview + 1}))
    }
    if (activeReview === reviewsList.length - 1) {
      this.setState(prevState => ({activeReview: prevState.activeReview}))
    }
  }

  render() {
    const {activeReview} = this.state
    const {reviewsList} = this.props

    const filteredReviews = reviewsList.filter(
      eachReview => reviewsList.indexOf(eachReview) === activeReview,
    )

    console.log(filteredReviews)

    return (
      <div className="bg-container">
        <h1 className="reviews-heading">Reviews</h1>
        <div className="reviews-card-container">
          <button
            type="button"
            className="arrow-button"
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="arrow"
              alt="left arrow"
              onClick={this.onLeftClick}
            />
          </button>
          <div className="review-body">
            {filteredReviews.map(eachReview => (
              <>
                <img
                  src={eachReview.imgUrl}
                  alt={eachReview.username}
                  className="profile-image"
                />
                <p className="name" key={eachReview.username}>
                  {eachReview.username}
                </p>
                <p className="company">{eachReview.companyName}</p>
                <p className="description">{eachReview.description}</p>
              </>
            ))}
          </div>
          <button
            type="button"
            className="arrow-button"
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="arrow"
              alt="right arrow"
              onClick={this.onRightClick}
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
