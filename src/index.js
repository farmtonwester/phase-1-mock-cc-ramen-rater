// write your code here 
const ramenContainer = document.getElementById('ramen-menu');

function getRamens() {
    fetch("http://localhost:3000/ramens")
    .then(resp => resp.json())
    .then(data => data.forEach(renderRamens));
}
getRamens()
//fetch ramens
//create img for each ramen and append it to the DOM in ramen-menu 


function renderRamens(ramen) {
    const ramenImg = document.createElement('img');
    ramenImg.src = ramen.image
    ramenImg.alt = `${ramen.name} image`;
    
    ramenImg.addEventListener('click', () => moveToDetails(ramen))

    ramenContainer.append(ramenImg);

}

//render details for ramen when clicked and append to div ""

//build out callback function to append ramenImg to #ramen-detail, takes the ramen object that was clicked as argument
function moveToDetails(ramen) { 
    const ramenName = document.querySelector('.name')
    ramenName.textContent = ramen.name
    const ramenImage = document.querySelector('.detail-image')
    ramenImage.src = ramen.image
    const ramenRestaurant = document.querySelector('.restaurant')
    ramenRestaurant.textContent = ramen.restaurant
    //console.log(ramen)
    const ratingDisplay = document.querySelector("#rating-display")
    const commentDisplay = document.querySelector('#comment-display')
    ratingDisplay.textContent = ramen.rating
    commentDisplay.textContent = ramen.comment 
}

//Next goal is to render new ramen after submitting the new-ramen form

//how do i grab info from the form submission and make that a new ramenObj, which i can pass to renderRamens
const newRamenForm = document.getElementById('new-ramen')
newRamenForm.addEventListener('submit', handleNewRamenSubmission)

function handleNewRamenSubmission(event) {
    event.preventDefault();
    console.log(event);
    const newRamenObj = {
        name: newRamenName,
        restaurant: newRamenRestaurant,
        image: newRamenImage,
        rating: newRamenRating,
        comment: newRamenComment
    }

    const newRamenName = event.target.name.value
    const newRamenRestaurant = event.target.restaurant.value
    const newRamenImage = event.target.image.value
    const newRamenRating = event.target.rating.value
    const newRamenComment = event.target.new-comment.value

    
    renderRamens(newRamenObj)

}