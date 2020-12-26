window.onload = function () {

    /*
  -Der Start-
  Diese Funktion gibt es für das Dropdown-Menu (directory)
  */

    let dropdown = document.getElementById('dropbtn');
    let dropdown1 = document.getElementById('dropbtnCSS');
    let dropdown2 = document.getElementById('dropbtnJS');
    let dropdown3 = document.getElementById('dropbtnSRC');
    let dropdownInner = document.getElementById('myDropdown');
    let dropdownInner1 = document.getElementById('myDropdownCSS');
    let dropdownInner2 = document.getElementById('myDropdownJS');
    let dropdownInner3 = document.getElementById('myDropdownSRC');
    dropdown.addEventListener("click", function () {
        dropdownInner.classList.toggle('show');
    })
    dropdown1.addEventListener("click", function () {
        dropdownInner1.classList.toggle('show');
    })
    dropdown2.addEventListener("click", function () {
        dropdownInner2.classList.toggle('show');
    })
    dropdown3.addEventListener("click", function () {
        dropdownInner3.classList.toggle('show');
    })

    /*
    -Das Ende-
    Diese Funktion gibt es für das Dropdown-Menu (directory)
    */

    /*
    -Der Start-
    Diese Funktion klappt das directory ein und vergrößert den CodeEditor!
    */

    let editorWrapper = document.getElementsByClassName('editor-wrapper')[0];
    let container = document.getElementById('wholeContainer');
    let directoryContainer = document.getElementById('directoryButton');
    directoryContainer.addEventListener("click", function () {
        container.classList.toggle('hideFilePath');
    });

    /*
    -Das Ende-
    Diese Funktion klappt  das directory ein und vergrößert den CodeEditor!
    */

    /*
    -Der Start-
    Diese Funktion bewirkt, dass die einzelnen Tags mit einer click-funktion aufgeklappt werden können.
    */
 /*   document.addEventListener('click', function (e) {
        if (hasClass(e.target, 'fullBrackets')) {
            // .fullBrackets clicked
            var elementsFullBrackets = document.getElementsByClassName("fullBrackets");
            for (let i = 0; i < elementsFullBrackets.length; i++) {
                const element = elementsFullBrackets[i];
                element.addEventListener("click", openAccordion);
            }
        } else if (hasClass(e.target, 'openBracket')) {
            var elementsOpenBracket = document.getElementsByClassName("openBracket");
            for (let i = 0; i < elementsOpenBracket.length; i++) {
                const element = elementsOpenBracket[i];
                element.addEventListener("click", openAccordion);
            }
        } else if (hasClass(e.target, 'closeBracket')) {
            var elementsCloseBracket = document.getElementsByClassName("closeBracket");
            for (let i = 0; i < elementsCloseBracket.length; i++) {
                const element = elementsCloseBracket[i];
                element.addEventListener("click", openAccordion);
            }
        }
    }, false);

    function hasClass(elem, className) {
        return elem.className.split(' ').indexOf(className) > -1;
    }
*/

    var elementsFullBrackets = document.getElementsByClassName("fullBrackets");
    for (let i = 0; i < elementsFullBrackets.length; i++) {
        const element = elementsFullBrackets[i];
        element.addEventListener("click", openAccordion);
    }
   /* var elementsOpenBracket = document.getElementsByClassName("openBracket");
    for (let i = 0; i < elementsOpenBracket.length; i++) {
        const element = elementsOpenBracket[i];
        element.addEventListener("click", openAccordion);
    }
    var elementsCloseBracket = document.getElementsByClassName("closeBracket");
    for (let i = 0; i < elementsCloseBracket.length; i++) {
        const element = elementsCloseBracket[i];
        element.addEventListener("click", openAccordion);
    } */

    let singleOpenBracket = "<p class='openBracket'>{</p>";
    let singleCloseBracket = "<p class='closeBracket'>}</p>";
    let fullBrackets = '<p class="fullBrackets">{...}</p>';

    function openAccordion(e) {

        let clickedElement = e.srcElement.closest(".innerAccordion");
        let bracketContainer = e.srcElement.closest('.bracketContainer');
        if (!clickedElement.classList.contains('active')) {
            clickedElement.classList.add('active');
            clickedElement.getElementsByClassName("fullBrackets")[0].remove();
            clickedElement.insertAdjacentHTML("beforeend", singleCloseBracket);
            bracketContainer.insertAdjacentHTML("afterbegin", singleOpenBracket);

        } else {
            clickedElement.classList.remove('active');
            clickedElement.insertAdjacentHTML("beforeend", fullBrackets);
            clickedElement.getElementsByClassName("openBracket")[0].remove();
            clickedElement.getElementsByClassName("closeBracket")[0].remove();
        }
    }

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


