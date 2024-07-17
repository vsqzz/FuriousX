// File: js/search.js

function searchItems() {
    let input = document.getElementById('search-input').value.toLowerCase();
    let items = document.getElementsByClassName('catalog-item');

    for (let i = 0; i < items.length; i++) {
        if (items[i].innerText.toLowerCase().includes(input)) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}
