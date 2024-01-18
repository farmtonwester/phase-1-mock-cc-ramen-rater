// write your code here 
function getRamens() {
    fetch("http://localhost:3000/ramens")
    .then(resp => resp.json())
    .then(data => console.log(data));
}
getRamens()

