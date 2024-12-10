import React, { useState } from "react";
import "./display.css";

function DisplayData() {
  const [username, setUsername] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState('⭐');
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username || !reviewText || !rating) {
      alert("Please fill in all fields.");
      return;
    }

    const newReview = {
      id: Date.now(),
      username,
      reviewText,
      rating,
    };

    setReviews([...reviews, newReview]);

    setUsername("");
    setReviewText("");
    setRating('⭐');
  };

  return (
    <div className="App">
      <h1>Submit Your Review</h1>

      <form onSubmit={handleSubmit} className="review-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="reviewText">Review Text:</label>
          <textarea
            id="reviewText"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating (1-5):</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            required
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>

        <button type="submit">Submit Review</button>
      </form>

      <div className="reviews-list">
        <h2>Submitted Reviews</h2>
        {reviews.length === 0 ? (
          <p>No reviews yet. Be the first to submit one!</p>
        ) : (
          reviews.map((review) => (
            <div key={review.id} className="review-card">
              <h3>{review.username}</h3>
              <p>{review.reviewText}</p>
              <p>Rating: {review.rating}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default DisplayData;