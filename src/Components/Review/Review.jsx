const Review = ({ DataReviews }) => {
  if (!DataReviews) {
    return <div className="review">No review available</div>;
  }

  return ( 
          <div className="review border rounded p-3 my-3 shadow-sm">
            <h5 className="mb-1">{DataReviews.name}</h5>
            <p className="text-muted" style={{ fontSize: '14px' }}>{DataReviews.date}</p>
            <p className="fst-italic">"{DataReviews.review}"</p>
            <p className="text-warning mb-0">Rating: {'⭐'.repeat(DataReviews.rating)}</p>
          </div> 
  );
};

export default Review;
