// Get the necessary DOM elements
const ramenMenu = document.getElementById("ramen-menu");
const ramenName = document.getElementById("ramen-name");
const ramenRestaurant = document.getElementById("ramen-restaurant");
const ramenRating = document.getElementById("ramen-rating");
const ramenComment = document.getElementById("ramen-comment");
const newRamenForm = document.getElementById("new-ramen-form");

// Ramen data
const ramens = [
  {
    id: 1,
    name: "Shoyu Ramen",
    restaurant: "Ichiran",
    image: "shoyu.jpg",
    rating: 5,
    comment: "Delicious!",
  },
  {
    id: 2,
    name: "Miso Ramen",
    restaurant: "Menya",
    image: "miso.jpg",
    rating: 4,
    comment: "Very flavorful!",
  },
  {
    id: 3,
    name: "Tonkotsu Ramen",
    restaurant: "Ramen-ya",
    image: "tonkotsu.jpg",
  },
];

// Display ramen images
ramens.forEach((ramen) => {
  const img = document.createElement("img");
  img.src = ramen.image;
  img.alt = ramen.name;
  img.addEventListener("click", () => showRamenDetails(ramen));
  ramenMenu.appendChild(img);
});

// Show ramen details
function showRamenDetails(ramen) {
  ramenName.textContent = ramen.name;
  ramenRestaurant.textContent = `Restaurant: ${ramen.restaurant}`;
  ramenRating.textContent = `Rating: ${ramen.rating}/5`;
  ramenComment.textContent = `Comment: ${ramen.comment}`;
}

// Handle new ramen form submission
newRamenForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newRamen = {
    id: ramens.length + 1,
    name: newRamenForm.elements.name.value,
    restaurant: newRamenForm.elements.restaurant.value,
    image: newRamenForm.elements.image.value,
    rating: newRamenForm.elements.rating.value,
    comment: newRamenForm.elements.comment.value,
  };

  ramens.push(newRamen);

  const newRamenImg = document.createElement("img");
  newRamenImg.src = newRamen.image;
  newRamenImg.alt = newRamen.name;
  newRamenImg.addEventListener("click", () => showRamenDetails(newRamen));
  ramenMenu.appendChild(newRamenImg);

  newRamenForm.reset();
});

// Display the details for the first ramen automatically on page load
showRamenDetails(ramens[0]);
