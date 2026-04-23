const uploadFoto = document.getElementById("uploadFoto");
const foto = document.getElementById("foto");
const mensagem = document.getElementById("mensagem");

uploadFoto.addEventListener("change", function () {
    const arquivo = uploadFoto.files[0];

    if (arquivo) {
        foto.src = URL.createObjectURL(arquivo);
    }
});

function verificarCracha() {
    const nome = document.getElementById("nome").value;
    const nascimento = document.getElementById("nascimento").value;
    const cpf = document.getElementById("cpf").value;

    if (
        uploadFoto.files.length === 0 ||
        nome === "" ||
        nascimento === "" ||
        cpf === ""
    ) {
        mensagem.textContent = "Não está preenchido";
        mensagem.className = "erro";
    } else {
        mensagem.textContent = "Crachá preenchido com sucesso";
        mensagem.className = "certo";
    }
}