/* Hier handelt es sich um die click-function der geschweiften Klammern im Code! */
let singleOpenBracket = "<p class='openBracket'>{</p>";
let singleCloseBracket = "<p class='closeBracket'>}</p>";
let fullBrackets = '<p class="fullBrackets">{...}</p>';

function openAccordion(e) {
    e.stopPropagation();
    console.log(e)
    let clickedElement = e.srcElement.closest(".accordion-trigger-container");
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

window.onload = function () {

    var elements = document.getElementsByClassName("accordion-trigger-container");
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.addEventListener("click", openAccordion);
    }

}

/* Hier handelt es sich um die click-function um das Startbild auf hidden zu setzen und den
   Content des jeweiligen links anzuzeigen. */
var input = document.getElementById("showHideOne");
console.log(input);
input.addEventListener("click", function (e) {
    var box1 = e.closest(".sub-accordion-container").getElementById("projects-content");

    if(box1.style.display == "none")
    {
        box1.style.display = "block";
    }
    else
    {
        box1.style.display = "none";
    }
});
document.getElementById("showHideTwo").addEventListener("click", function () {
    var box2 = document.getElementsByClassName("text-container").document.getElementById("aboutMe-content").childNodes;
    if (box2.style.display == "none") {
        box2.style.display = "block";
    } else {
        box2.style.display = "none";
    }
});
document.getElementById("showHideThree").addEventListener("click", function () {
    var box3 = document.getElementsByClassName("text-container").document.getElementById("contacts-content").childNodes;
    if (box3.style.display == "none") {
        box3.style.display = "block";
    } else {
        box3.style.display = "none";
    }
});


/*
document.addEventListener("DOMContentLoaded", function(event){
    var trigger = document.getElementById('')
});

var rm = function(){
    jQuery('.accordion-trigger-container .accordion-trigger').html('{...}');
    jQuery('#added').remove();
    jQuery('.accordion-trigger-container').children('.sub-accordion-container').toggleClass('active');
}


//jQuery
//Haupt-Container wird beim klicken auf die Funktionsklammern aufgeklappt und geschlossen
jQuery(document).ready(function(){
    jQuery(".accordion-trigger-container .accordion-trigger").click(function(e){
        //$(this).find("code").css("display", "inline-block");
        if (!jQuery(this).parent('.accordion-trigger-container').children('.sub-accordion-container').hasClass('active')){
            jQuery('#added').remove();
            jQuery(this).html('{');
            jQuery(this).parent('.accordion-trigger-container').append("<code class='accordion-trigger' id='added' onclick='rm();'>}</code>");
        }
        else {
            jQuery(this).html('{...}');
            jQuery('#added').remove();
        }


        jQuery(this).parent('.accordion-trigger-container').children('.sub-accordion-container').toggleClass('active');
    });


//Unter-Container wird beim hovern über die Funktionsklammer aufgeklappt und geschlossen
    jQuery(".sub-accordion-trigger-container .sub-accordion-trigger").hover(function(e){

            if (!jQuery(this).parent('.sub-accordion-trigger-container').children('.text-container').hasClass('active')){
                jQuery('#added').remove();
                jQuery(this).html('{');
                jQuery(this).parent('.sub-accordion-trigger-container').append("<code class='sub-accordion-trigger' id='added' hover='rm();'>}</code>");
            }
            else {
                jQuery(this).html('{...}');
                jQuery('#added').remove();
            }


            jQuery(this).parent('.sub-accordion-trigger-container').children('.text-container').toggleClass('active');
        });

//function-name soll ein klick Button / Event sein, was den user zu einer neuen detailierteren Seite des Reiters bringt.



});
*/



