// Aggiungere un testo inserito dall'utente tramite prompt

const wrapperButtons = document.querySelector(".buttons");
const btnPar = document.querySelector(".button-include");
const secondButton = document.querySelector(".second-button");

const newParagraph = document.createElement("p");
newParagraph.className = "new-paragraph";
btnPar.after(newParagraph);

const userWritten = () => {
    const insert = prompt ("Inserisci qui il tuo testo!");
    newParagraph.textContent = insert;
}

btnPar.addEventListener( "click", userWritten );


// Creare un elemento unordered list `<ul>` e un `<button>` all'interno del vostro HTML.
// Il click sul button andrà a creare un figlio `<li>` all'interno del padre `<ul>`.

// PSEUDO CODE
// - CREO UN INPUT TEXT SOTTO IL PARAGRAFO
// - QUANDO L'UTENTE SCRIVE E PREME INVIO IL TESTO POPOLA UN LI
// - EVENTO RIPETUTO

const todoList = document.querySelector(".todo-list");
const todoBtn = document.querySelector(".btn-todo");
const inputList = document.querySelector(".input-list");

const newLi = document.createElement("li");
newLi.className = "todo-item";
todoList.after(newLi);

const updateInput = () => {
    newLi.style.listStyle = "inside";
    newLi.textContent = inputList.value;
}

todoBtn.addEventListener( "click", updateInput);







