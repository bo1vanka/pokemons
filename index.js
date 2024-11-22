
async function fetchData(){

    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
         
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();

        const pokemonSprite = data.sprites.front_default;
        const pokemonType = data.types.map(typeInfo => typeInfo.type.name).join(", ");
        const pokemonWeight = data.weight;  
        const pokemonHeight = data.height;


        const imgElement = document.getElementById("pokemonSprite");
        const weightElement = document.getElementById("pokemonWeight");
        const typeElement = document.getElementById("pokemonType");
        const heightElement = document.getElementById("pokemonHeight");


        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        weightElement.textContent = `Weight: ${pokemonWeight / 10} kg`;
        heightElement.textContent = `Height: ${pokemonHeight / 10} m  `;
        typeElement.textContent = `Type: ${pokemonType}`;
        





    }
    catch(error){
        console.error(error);
    }
}