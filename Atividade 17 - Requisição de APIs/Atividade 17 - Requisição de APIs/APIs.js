async function chamarAPI(URL){
    try {
        const resp = await fetch(URL)
        console.log(resp);
        if (resp.status === 200){
            const obj = await resp.json();
            console.log(obj)
            console.log("--------------------------------");
        }
    } catch (error) {
        console.log("Deu erro na requisição: " + error);
    }
}


chamarAPI("https://pokeapi.co/api/v2/type");
chamarAPI("https://api.adviceslip.com/advice");
chamarAPI("https://wizard-world-api.herokuapp.com/elixirs");

console.log("Informações PokeAPI");
console.log("Count: Número de Tipos \nnext: Link para próxima página \nprevious: Link para página anterior \nresults: Array com os tipos de Pokémon");
console.log("name: 'nome do tipo' \nurl: 'link para mais informações do tipo'");
console.log(" ");

console.log("Informações Advice Slip API");
console.log("slip: Objeto com o conselho \n id: 'identificador do conselho' \nadvice: 'texto do conselho'");
console.log(" ")

console.log("Informações Wizard World API");
console.log("id: 'identificador do elixir' \nname: 'nome do elixir' \neffect: 'efeito do elixir' \ningredients: Array com os ingredientes do elixir \ncharacter: Array com os personagens que usam o elixir");
console.log(" ");