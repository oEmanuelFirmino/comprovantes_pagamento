const nomePagador = document.querySelector("#nomePagador").value
const nomeRecebedor = document.querySelector("#nomeRecebedor").value
const data = document.querySelector("#data").value.toString()
const valor = document.querySelector("#valor").value

function gerarPdf() {

    var doc = new jsPDF();

    // Texto que deve estar no PDF
    doc.text("Comprovante de pagamento", 70, 10);
    doc.text(nomePagador, 10, 30);
    doc.text(nomeRecebedor, 10, 40);
    doc.text(valor, 10, 50);
    doc.text(data, 10, 60);
    // Gerar PDF
    doc.save('comprovante.pdf');
}