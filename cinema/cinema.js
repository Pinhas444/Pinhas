const botoes = document.querySelectorAll("button");
const carrinhoList = document.getElementById("carrinho");
const totalSpan = document.getElementById("total");

let total = 0;

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        const nome = botao.dataset.nome;
        const preco = Number(botao.dataset.preco);

        const li = document.createElement("li");
        li.textContent = `${nome} - R$ ${preco}`;

        const btnRemover = document.createElement("button");
        btnRemover.textContent = "Remover";
        btnRemover.classList.add("remover");

        btnRemover.addEventListener("click", () => {
            li.remove();
            total -= preco;
            totalSpan.textContent = total;
        });

        li.appendChild(btnRemover);
        carrinhoList.appendChild(li);

        total += preco;
        totalSpan.textContent = total;
    });
});