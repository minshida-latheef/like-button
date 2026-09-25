// Get elements from HTML
const likeButton = document.getElementById("likeButton");
const heart = document.getElementById("heart");
const likeText = document.getElementById("likeText");
const likeCount = document.getElementById("likeCount");

// Store the like count
let count = 0;

// Run when the button is clicked
likeButton.addEventListener("click", function () {

    // Check whether the button is already liked
    const isLiked = likeButton.classList.contains("liked");

    if (isLiked) {

        // Unlike
        likeButton.classList.remove("liked");

        heart.textContent = "♡";
        likeText.textContent = "Like";

        count--;

    } else {

        // Like
        likeButton.classList.add("liked");

        heart.textContent = "♥";
        likeText.textContent = "Liked";

        count++;
    }

    // Update the count on the page
    likeCount.textContent = count;
});