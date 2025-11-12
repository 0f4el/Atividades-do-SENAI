async function chamar10Primeiros(){
    try {
        const resp = await fetch("https://pokeapi.co/api/v2/pokemon/")
        console.log(resp);
        if (resp.status === 200) {
            const obj = await resp.json();
            console.log(obj);
            console.log("--------------------------------");
            console.log("Propriedades de cada objeto:");
            console.log(Object.keys(obj));
            console.log("--------------------------------");

            // Exibe os primeiros 10 itens
            for (let i = 0; i < 10; i++) {
                console.log(`Item ${i + 1}:`);
                console.log(JSON.stringify(obj.results[i], null, 2));
                console.log(" ");
            }
        }

    } catch (error) {
        console.log("Deu erro na requisição: " + error);
    }
}

async function chamar10Ultimos(){
    try {
        const resp = await fetch("https://pokeapi.co/api/v2/type")
        console.log(resp);
        if (resp.status === 200) {
            const obj = await resp.json();
            console.log(obj);
            console.log("--------------------------------");
            console.log("Propriedades de cada objeto:");
            console.log(Object.keys(obj));
            console.log("--------------------------------");

            // Exibe os últimos 10 itens
            for (let i = dados.results.length - 10; i < dados.results.length; i++) {
                console.log(`Item ${i + 1}:`);
                console.log(JSON.stringify(obj.results[i], null, 2));
                console.log(" ");
            }
        }

    } catch (error) {
        console.log("Deu erro na requisição: " + error);
    }
}



chamar10Primeiros();
chamar10Ultimos();
