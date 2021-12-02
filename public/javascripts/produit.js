document.addEventListener("DOMContentLoaded", function(event) {
    plusButton = document.querySelector("#plusButton");
    minusButton = document.querySelector("#minusButton");
    quantityText = document.querySelector("#quantityText");

    activeImage = document.querySelector("#activeImage");
    imagesGallery = document.querySelectorAll(".image-gallery-element");

    reviewInput = document.querySelector("#avis");

    quantity = 1;

    const Review = {
        date: Date,
        review: String
    }

    function updateQuantity() {
        quantityText.value = quantity;
    }

    plusButton.addEventListener('click', e => {
        quantity++;
        updateQuantity();
    });

    minusButton.addEventListener('click', e => {
        if (quantity > 1) {
            quantity--;
            updateQuantity();
        }
    });

    imagesGallery.forEach(image => {
        image.addEventListener('click', e => {;
            oldActive = activeImage.src;
            activeImage.src = image.src;
            image.src = oldActive;
        })
    });

    reviewInput.addEventListener('keyup', e => {
        if (e.keyCode == 13) {
            if (reviewInput.value.length > 5) {
                newReview = Object.create(Review);
                newReview.date = Date.now();
                newReview.review = reviewInput.value;
                console.log(newReview);
                reviewInput.value = '';
            } else {
                console.log('Un avis constructif de moins de 6 caractères ? Vraiment ?');
            }
        }
    });






});