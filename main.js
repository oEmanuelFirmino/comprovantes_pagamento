
function gerarPdf() {

    const nomePagador = document.querySelector("#nomePagador").value
    const nomeRecebedor = document.querySelector("#nomeRecebedor").value
    const data = document.querySelector("#data").value.toString()
    const valor = document.querySelector("#valor").value

    var doc = new jsPDF();


    // Texto que deve estar no PDF
    doc.text("Comprovante de pagamento", 70, 10);
    doc.text("Pago por: ", 10, 30);
    doc.text(nomePagador, 36, 30);
    doc.text("Recebido por: ", 10, 40);
    doc.text(nomeRecebedor, 47, 40);
    doc.text("Valor pago: R$", 10, 50);
    doc.text(valor, 50, 50);
    doc.text("Pago em: ", 10, 60);
    doc.text(data, 37, 60);
    // Gerar PDF
    doc.save('comprovante.pdf');
}