import Review from './Review';

const ReviewData = [
    {
        id: 1,
        name: 'Sai Bharath Muthoju',
        review: 'Best ice cream in town! Highly recommend their seasonal flavors.',
        rating: 5,
        date: '2025-05-08',
    },
    {
        id: 2,
        name: 'Jahnavi Shikha',
        review: 'I tried the Belgian chocolate and was instantly hooked...',
        rating: 5,
        date: '2025-10-19',
    },
    {
        id: 3,
        name: 'Srivalli Nookala',
        review: 'The strawberry swirl is bursting with fresh flavor...',
        rating: 4,
        date: '2025-07-27',
    },
    {
        id: 4,
        name: 'Indu Chirra',
        review: 'SoftRich Ice Cream made our family night extra special...',
        rating: 5,
        date: '2025-06-15',
    },
    {
        id: 5,
        name: 'Yesasya Parri',
        review: 'Their Butterscotch Bliss is pure magic...',
        rating: 5,
        date: '2025-08-20',
    },
    
];

const ReviewList = () => {
    // Split reviews into pairs
    const reviewPairs = [];
    for (let i = 0; i < ReviewData.length; i += 2) {
        reviewPairs.push(ReviewData.slice(i, i + 2));
    }

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Customer Reviews</h2>
            {reviewPairs.map((pair, index) => (
                <div className="row" key={index}>
                    {pair.map((review) => (
                        <div className="col-md-6" key={review.id}>
                            <Review DataReviews={review} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ReviewList;
