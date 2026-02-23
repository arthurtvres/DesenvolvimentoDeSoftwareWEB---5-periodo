const botaoTema = document.getElementById("temaBtn");

botaoTema.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        botaoTema.innerText = "☀️ Light Mode";
    } else {
        botaoTema.innerText = "🌙 Dark Mode";
    }
});

const form = document.getElementById("formContato");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const pokemon = document.getElementById("pokemonFav").value;

    console.log("Nome:", nome);
    console.log("Pokémon favorito:", pokemon);

    document.getElementById("mensagem").innerText =
        `Daora ${nome}, ${pokemon} é um ótimo pokémon!`;
});

