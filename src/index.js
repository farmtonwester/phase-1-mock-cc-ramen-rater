// write your code here 
const ramenContainer = document.getElementById('ramen-menu');

function getRamens() {
    fetch("http://localhost:3000/ramens")
    .then(resp => resp.json())
    .then(data => data.forEach(renderRamens));
}
getRamens()
//fetch ramens
//create img for each ramen and append it to the DOM 
//renderRamens will replace the console.log within getRamens

function renderRamens(ramen) {
    const ramenImg = document.createElement('img');
    ramenImg.src = ramen.image
    ramenImg.alt = `${ramen.name} image`;

    ramenContainer.append(ramenImg);

}

//render details for ramen when clicked (add) and append to div ""