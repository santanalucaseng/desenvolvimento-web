function startQuiz() {
    document.getElementById("intro").classList.add("d-none");
    document.getElementById("quiz").classList.remove("d-none");
}

function finishQuiz() {
    let score = 0;

    // Pergunta 1
    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === "1") score++;

    // Pergunta 2 (checkbox)
    const q2 = document.querySelectorAll('input[name="q2"]:checked');
    if (q2.length === 1 && q2[0].value === "1") score++;

    // Pergunta 3
    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === "1") score++;

    // Exibir resultado
    const result = document.getElementById("result");
    result.classList.remove("d-none");

    result.innerHTML = `Você acertou <span class="text-warning">${score}</span> de 3 perguntas!`;
}
