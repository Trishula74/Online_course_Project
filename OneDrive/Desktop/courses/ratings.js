
const ratingsData = [
    { rating: 5, review: "Great course!", reviewer: "John Doe" },
    { rating: 4, review: "Very informative.", reviewer: "Jane Smith" }
    
];


function calculateAverageRating(ratings) {
    const totalRating = ratings.reduce((acc, rating) => acc + rating.rating, 0);
    return (totalRating / ratings.length).toFixed(1);
}


function displayRatings(ratings) {
    const averageRating = calculateAverageRating(ratings);
    document.getElementById('averageRatingValue').textContent = averageRating;

    const ratingsSummary = document.getElementById('ratingsSummary');
    ratings.forEach(rating => {
        const stars = "&#9733;".repeat(rating.rating) + "&#9734;".repeat(5 - rating.rating);
        const ratingValue = rating.rating.toFixed(1);
        const ratingHTML = <div class="starRating"><span class="stars">${stars}</span><span class="ratingValue">${ratingValue}</span></div>;
        ratingsSummary.insertAdjacentHTML('beforeend', ratingHTML);
    });
}


function displayReviews(reviews) {
    const reviewList = document.getElementById('reviewList');
    reviews.forEach(review => {
        const reviewHTML = `
            <li>
                <div class="review">
                    <div class="reviewRating">&#9733;${review.rating}</div>
                    <div class="reviewContent">
                        <h3>${review.review}</h3>
                        <p>${review.reviewer}</p>
                    </div>
                </div>
            </li>
        `;
        reviewList.insertAdjacentHTML('beforeend', reviewHTML);
    });
}


displayRatings(ratingsData);
displayReviews(ratingsData);