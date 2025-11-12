const botaoCarregar = document.getElementById("postCarregado");
const campoBusca = document.getElementById("busca");
const postsContainer = document.getElementById("postsContainer");

let todosOsPosts = [];

// Buscar
async function buscarPosts() {
  try {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts");
    const dados = await resposta.json();
    todosOsPosts = dados;
    renderizarPosts(todosOsPosts);
  } catch (erro) {
    postsContainer.innerHTML = "<p>Erro ao carregar posts.</p>";
    console.error("Erro:", erro);
  }
}

// Renderizar
function renderizarPosts(posts) {
  postsContainer.innerHTML = "";

  if (posts.length === 0) {
    postsContainer.innerHTML = "<p>Nenhum post encontrado.</p>";
    return;
  }

  posts.forEach(post => {
    const card = document.createElement("div");
    card.classList.add("postCard");

    card.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    `;

    postsContainer.appendChild(card);
  });
}

// Filtro

campoBusca.addEventListener("input", (e) => {
  const termo = e.target.value.toLowerCase();
  const filtrados = todosOsPosts.filter(post => 
    post.title.toLowerCase().includes(termo)
  );
  renderizarPosts(filtrados);
});



botaoCarregar.addEventListener("click", buscarPosts);
