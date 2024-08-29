function calculateFinalAmount() {
    const amount = parseFloat(document.getElementById('amount').value);
    const paymentMethod = document.getElementById('paymentMethod').value;
    const installments = document.getElementById('installments').value; // Lê como string

    let increasePercentage = 0;

    // Definindo o percentual de aumento baseado na forma de pagamento e número de parcelas
    if (paymentMethod === 'pix') {
        increasePercentage = 0;
    } else if (paymentMethod === 'visa_mastercard') {
        if (installments === "Débito") {
            increasePercentage = 1.37; // Aplicando a porcentagem de débito corretamente
        } else if (installments === "1") {
            increasePercentage = 3.15;
        } else if (installments === "2") {
            increasePercentage = 5.39;
        } else if (installments === "3") {
            increasePercentage = 6.12;
        } else if (installments === "4") {
            increasePercentage = 6.85;
        } else if (installments === "5") {
            increasePercentage = 7.57;
        } else if (installments === "6") {
            increasePercentage = 8.28;
        } else if (installments === "7") {
            increasePercentage = 8.99;
        } else if (installments === "8") {
            increasePercentage = 9.69;
        } else if (installments === "9") {
            increasePercentage = 10.38;
        } else if (installments === "10") {
            increasePercentage = 11.06;
        } else if (installments === "11") {
            increasePercentage = 11.74;
        } else if (installments === "12") {
            increasePercentage = 12.40;
        }
    } else if (paymentMethod === 'other') {
        if (installments === "Débito") {
            increasePercentage = 2.58; // Aplicando a porcentagem de débito corretamente
        } else if (installments === "1") {
            increasePercentage = 4.91;
        } else if (installments === "2") {
            increasePercentage = 6.47;
        } else if (installments === "3") {
            increasePercentage = 7.20;
        } else if (installments === "4") {
            increasePercentage = 7.92;
        } else if (installments === "5") {
            increasePercentage = 8.63;
        } else if (installments === "6") {
            increasePercentage = 9.33;
        } else if (installments === "7") {
            increasePercentage = 10.03;
        } else if (installments === "8") {
            increasePercentage = 10.72;
        } else if (installments === "9") {
            increasePercentage = 11.41;
        } else if (installments === "10") {
            increasePercentage = 12.08;
        } else if (installments === "11") {
            increasePercentage = 12.75;
        } else if (installments === "12") {
            increasePercentage = 13.41;
        }
    }

    // Calculando o valor final com a fórmula
    const finalAmount = amount + (amount * (increasePercentage / 100));
    document.getElementById('finalAmount').textContent = `R$ ${finalAmount.toFixed(2)}`;
}
