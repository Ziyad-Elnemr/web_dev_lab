import React from "react";

const Display = ({
  title,
  year,
  rating,
  comments,
  onRemove,
  onAddRating,
  onCommenting,
}) => {
  return (
    <div className="movie-card" data-testid="movie-card">
      <h2 className="movie-title">
        {title} <span className="movie-year">({year})</span>
      </h2>
      <p className="movie-rating">
        Rating: <span className="badge rating-badge">{rating || "N/A"}</span>
      </p>
      <p className="movie-comments">
        Comments: {comments.length ? comments.join(", ") : "No comments yet"}
      </p>
      <div className="card-actions">
        <button className="btn btn-danger" onClick={onRemove}>
          Remove
        </button>
        <button className="btn btn-secondary" onClick={onAddRating}>
          Add Rating
        </button>
        <button className="btn btn-accent" onClick={onCommenting}>
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default Display;
