function buscarCEP() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');

    if (cep.length !== 8) {
        alert('CEP inválido. Informe os 8 dígitos.');
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert("CEP não encontrado.");
                return;
            }

            document.getElementById('endereco').value = `${data.logradouro} - ${data.localidade}/${data.uf}`;

            if (data.bairro.toLowerCase() === "lagoa azul") {
                document.getElementById('bairro').value = "Lagoa Azul";
            } else {
                document.getElementById('bairro').value = "";
                alert("O bairro informado não é Lagoa Azul. Por favor, utilize um CEP correspondente.");
            }
        })
        .catch(error => {
            console.error("Erro ao buscar o CEP:", error);
            alert("Erro ao buscar o CEP. Tente novamente mais tarde.");
        });
}

// Garante que apenas números sejam digitados no campo CEP
document.addEventListener("DOMContentLoaded", () => {
    const cepInput = document.getElementById("cep");
    cepInput.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });
});


document.getElementById("meuFormulario").addEventListener("submit", function(event) {
event.preventDefault(); // Evita o envio tradicional do formulário
    
// Aqui você pode processar os dados se quiser
// Exemplo: const email = document.getElementById("email").value;

// Redireciona para outra página
window.location.href = "obrigado.html";
});