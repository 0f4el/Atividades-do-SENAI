async function chamarAPI(URL){
    try {
        const resp = await fetch(URL)
        console.log(resp);
        if (resp.status === 200) {
            const obj = await resp.json();
            console.log(obj);
            console.log("--------------------------------");
            console.log("Propriedades de cada objeto:");
            console.log(Object.keys(obj[0]));
            console.log("--------------------------------");

            // Exibe os primeiros 5 itens
            for (let i = 0; i < 5; i++) {
                console.log(`Item ${i + 1}:`);
                console.log(JSON.stringify(obj[i], null, 2));
                console.log(" ");
            }
        }

    } catch (error) {
        console.log("Deu erro na requisição: " + error);
    }
}


chamarAPI("https://jsonplaceholder.typicode.com/posts");

console.log("Informações jsonplacehodler");
console.log("UserId: Id do usuário \n id: Id do post \n title: Título do post \n body: Conteúdo do post");
console.log(" ");