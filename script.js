function generateNumber() {
    const minInput = document.querySelector(".input-min");
    const maxInput = document.querySelector(".input-max");
    const resultElement = document.getElementById("result");

    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);

    if (isNaN(min) || isNaN(max)) {
        alert("Por favor, insira valores numéricos válidos para mínimo e máximo.");
        return;
    }

    if (min >= max) {
        alert("O valor mínimo deve ser menor que o valor máximo.");
        return;
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    // Exibindo o número gerado no elemento <p>
    resultElement.textContent = ` ${randomNumber}`;
    resultElement.style.display = "block";
}
