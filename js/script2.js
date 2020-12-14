window.onload = function () {

    /*
  -Der Start-
  Diese Funktion gibt es für das Dropdown-Menu (Directory)
  */


    let dropdown = document.getElementById('dropbtn');
    let dropdownInner = document.getElementById('myDropdown');
    dropdown.addEventListener("click", function () {
        dropdownInner.classList.toggle('show');
    })

    /*
    -Das Ende-
    Diese Funktion gibt es für das Dropdown-Menu (Directory)
    */


    /*
    -Der Start-
    Diese Funktion bewirkt, dass die einzelnen Tags mit einer click-funktion aufgeklappt werden können.
    */
    /*    var elements = document.getElementsByClassName("container1");
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            element.addEventListener("click", openAccordion);
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
        }*/

    /*
    -Das Ende-
    Diese Funktion bewirkt, dass die einzelnen Tags mit einer click-funktion aufgeklappt werden können.
    */

    /*
    -Der Start-
    Diese Funktion bewirkt, dass das Terminal mit der Maus nach oben gezogen werden kann (vergrößern)
    */
    /*bindSizables();

    function bindSizables() {
        let sizableElements = document.getElementsByClassName("sizable");
        for (let i = 0; i < sizableElements.length; i++) {
            const element = sizableElements[i];
            element.addEventListener("pointerdown", handlePointerDown);
            element.addEventListener("pointerup", handlePointerDown);
            element.addEventListener("pointerleave", handlePointerDown);
            element.addEventListener("focusout", handlePointerDown);
        }
        let bottomToTopElements = document.getElementsByClassName("bottomToTop");
        for (let i = 0; i < bottomToTopElements.length; i++) {
            const element = bottomToTopElements[i];
            element.addEventListener("pointermove", bottomToTop);
        }
        let leftToRightElements = document.getElementsByClassName("leftToRight");
        for (let i = 0; i < leftToRightElements.length; i++) {
            const element = leftToRightElements[i];
            element.addEventListener("pointermove", leftToRight);
        }
    }

    let touchableArea = 50;

    let pointerDown = false;

    function handlePointerDown(e) {
        if (e.type == "pointerdown") {
            if (e.offsetY < touchableArea && e.srcElement.classList.contains("bottomToTop")) {
                pointerDown = true;
            } else if (e.srcElement.clientWidth - e.offsetX < touchableArea && e.srcElement.classList.contains("leftToRight")) {
                pointerDown = true;
            }
        } else {
            pointerDown = false;
        }
    }

    function bottomToTop(e) {
        if (pointerDown) {
            let boxLowerEdge = e.srcElement.offsetTop + e.srcElement.clientHeight;
            let newSize = boxLowerEdge - (e.clientY - touchableArea / 2);
            newSize = newSize / e.srcElement.parentNode.clientHeight * 100;
            e.srcElement.style.height = newSize + "%";
        }
    }

    function leftToRight(e) {
        if (pointerDown) {
            let difference = e.offsetX + touchableArea / 2;
            let relativeToParent = difference / e.srcElement.parentNode.clientWidth * 100;
            e.srcElement.style.width = relativeToParent + "%";
        }
    }*/

    /*
    -Das Ende-
    Diese Funktion bewirkt, dass das Terminal mit der Maus nach oben gezogen werden kann (vergrößern)
    */


}


