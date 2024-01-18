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

