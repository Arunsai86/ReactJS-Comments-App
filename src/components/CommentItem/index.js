import './index.css'

const CommentItem = props => {
  const {eachComment, checkLikeBtn, deleteComment} = props
  const clickBtnLike = () => {
    checkLikeBtn(eachComment.id)
  }

  const clickDeleteBtn = () => {
    deleteComment(eachComment.id)
  }

  const likedImageSrc = eachComment.isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const btnClassName = eachComment.isLiked ? 'liked' : ''

  return (
    <li>
      <div className="c-container">
        <div className="profile-log">
          <p>{eachComment.name[0]}</p>
        </div>
        <div className="profile-details-container">
          <div className="name-date-c">
            <h1 className="name">{eachComment.name}</h1>
            <p>{eachComment.date}</p>
          </div>
          <p>{eachComment.comment}</p>
        </div>
      </div>
      <div className="like-Section">
        <div className="like">
          <button
            className={`like-btn ${btnClassName}`}
            type="button"
            onClick={clickBtnLike}
          >
            <img src={likedImageSrc} alt="liked" className="like-class" />
          </button>

          <p className={btnClassName}>Like</p>
        </div>
        <button
          className="delete-btn"
          type="button"
          data-testid="delete"
          onClick={clickDeleteBtn}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
