import {Component} from 'react'

import {formatDistanceToNow} from 'date-fns'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem/index'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentsDetailsList: [],
    name: '',
    comment: '',
    date: '',
    count: 0,
  }

  checkLikeBtn = id => {
    this.setState(prevState => ({
      commentsDetailsList: prevState.commentsDetailsList.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  postComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newDate = formatDistanceToNow(new Date())
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      date: newDate,
      isLiked: false,
    }
    this.setState(prevState => ({
      commentsDetailsList: [...prevState.commentsDetailsList, newComment],
      count: prevState.count + 1,
      name: '',
      comment: '',
    }))
  }

  deleteComment = id => {
    this.setState(prevState => ({
      commentsDetailsList: prevState.commentsDetailsList.filter(
        each => each.id !== id,
      ),
      count: prevState.count - 1,
    }))
  }

  addName = event => {
    this.setState({name: event.target.value})
  }

  addComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {name, comment, commentsDetailsList, count} = this.state
    return (
      <div className="bg-container">
        <h1>Comments</h1>
        <div className="top-section">
          <div className="comments-form-container">
            <p>Say something about 4.0 Technologies</p>
            <form className="form-container" onSubmit={this.postComment}>
              <input
                type="text"
                value={name}
                placeholder="Your Name"
                className="input-name"
                onChange={this.addName}
              />
              <textarea
                type="textarea"
                value={comment}
                placeholder="Your Comment"
                className="textarea-comment"
                onChange={this.addComment}
              />
              <div>
                <button type="submit" className="submit-btn">
                  Add Comment
                </button>
              </div>
            </form>
          </div>
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="cmt-image"
            />
          </div>
        </div>
        <hr />

        <ul className="comments-container">
          <div className="cmt-head-container">
            <div className="count-comments">
              <p>{count}</p>
            </div>
            <p>Comments</p>
          </div>
          {commentsDetailsList.map(eachComment => (
            <CommentItem
              eachComment={eachComment}
              key={eachComment.id}
              checkLikeBtn={this.checkLikeBtn}
              deleteComment={this.deleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
