import React from 'react';

const Display = ({ title, year, rating, comments, onRemove, onAddRating ,onCommenting }) => {
    return (
        <div>
            <h2>{title} ({year})</h2>
            <p>Rating: {rating}</p>
            <p>Comments: {comments.join(", ")}</p>
            <button onClick={onRemove}>Remove</button>
            <button onClick={onAddRating}>Add Rating</button>
            <button onClick={onCommenting}>Add Comment</button>
        </div>
    );
}

export default Display;
