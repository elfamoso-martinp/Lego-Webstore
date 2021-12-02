document.addEventListener("DOMContentLoaded", function(event) {
    products = document.querySelectorAll(".product");
    for (let i = 0; i < products.length; i++) {
        product = products[i];
        quantity = product.getElementsByClassName('quantity')[0];
        price = product.getElementsByClassName('price')[0];
        console.log("L'élément " + i + " a pour quantité " + quantity.textContent + " avec un prix unitaire de " + price.textContent);
    }

    products.forEach(item => {
        delButton = item.getElementById('delButton');
        quantity = item.getElementsByClassName('quantity')[0];
        delButton.addEventListener('click', event => {
            if (quantity.textContent == 1) {

            } else {
                quantity.innerHtml = quantity.textContent++;
            }
        });
    });



});