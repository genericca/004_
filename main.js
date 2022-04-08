const qas = document.querySelectorAll(".questions-and-answers li");

qas.forEach(qa => {
    const expandButton = qa.querySelector(".question-container button");
    const answerContainer = qa.querySelector(".answer-container");
    let expanded;

    expanded = false;
    expandButton.addEventListener("click", () => {
        if (expanded) {
            answerContainer.style.display = "none";
            expandButton.style.backgroundImage = "url('plus.png')";
        }
        else {
            answerContainer.style.display = "flex";   
            expandButton.style.backgroundImage = "url('minus.png')";
        }
        expanded = !expanded;
    });
});