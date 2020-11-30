/*
-Der Start-
Diese Funktion bewirkt, dass die einzelnen Tags mit einer click-funktion aufgeklappt werden können.
*/

window.onload = function () {

    var elements = document.getElementsByClassName("container1");
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.addEventListener("click", openAccordion);
    }

}

let singleOpenBracket = "<p class='openBracket'>{</p>";
let singleCloseBracket = "<p class='closeBracket'>}</p>";
let fullBrackets = '<p class="fullBrackets">{...}</p>';

function openAccordion(e) {
    let clickedElement = e.srcElement.closest("accordionContainer");
    if (!clickedElement.classList.contains('active')) {
        clickedElement.classList.add('active');
        clickedElement.insertAdjacentHTML("afterbegin", singleOpenBracket);
        clickedElement.insertAdjacentHTML("beforeend", singleCloseBracket);
        clickedElement.getElementsByClassName("fullBrackets")[0].remove();
    } else {
        clickedElement.classList.remove('active');
        clickedElement.insertAdjacentHTML("afterbegin", fullBrackets);
        clickedElement.getElementsByClassName("openBracket")[0].remove();
        clickedElement.getElementsByClassName("closeBracket")[0].remove();
    }
}

/*
-Das Ende-
Diese Funktion bewirkt, dass die einzelnen Tags mit einer click-funktion aufgeklappt werden können.
*/