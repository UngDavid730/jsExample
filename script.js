let pokemonNumber = Math.floor(Math.random() * 1025);
let search = apiCall(pokemonNumber);


async function apiCall(pokemonNumber) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`;
    console.log(apiUrl);
    const response = await fetch(apiUrl);
    const data = await response.json();
    search = data;
    await console.log(show());
}

function show(){
    var maincard = document.getElementById("maincard");
    var newData = `
       <center>
       <img src = "${search.sprites.front_default}" width='30%' position ="absolute">
       <form onSubmit ="check()">
            <input  id="pokemonName" placeholder="Name">
            </form>
       </center>`
    maincard.innerHTML = newData;
    return maincard;

}
function check(){
    event.preventDefault();
    if(pokemonName.value.toLowerCase() != search.name ){
        console.log(document.getElementById("pokemonName").value)
    }
    else{
        location.reload();
    }

}
