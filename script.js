
let textarea = document.getElementById('textarea');


function fontSize(e) {
    let value = e.value;
    textarea.style.fontSize = value + "px";
}



function bold(e) {
    if (textarea.style.fontWeight == "bold") {
        textarea.style.fontWeight = "normal"
    }
    else {
        textarea.style.fontWeight = "bold"
    }
}


function italic(e) {
    if (textarea.style.fontStyle == "italic") {
        textarea.style.fontStyle = "normal"
    }
    else {
        textarea.style.fontStyle = "italic"
    }
}


function underline(e) {
    if (textarea.style.textDecoration == "underline") {
        textarea.style.textDecoration = "none"
    }
    else {
        textarea.style.textDecoration = "underline"
    }
}


function alignLeft(e) {
    textarea.style.textAlign = "left"
}


function alignCenter(e) {
    textarea.style.textAlign = "center"
}

function alignRight(e) {
    textarea.style.textAlign = "right"
}

function textHide(e) {
    textarea.style.textTransform = "capitalize";
    textarea.style.textAlign = "left";
    textarea.style.textDecoration = "none";
    textarea.style.fontStyle = "normal";
    textarea.style.fontWeight = "normal";
    textarea.value = "";
}

function Strickthrough(e) {
    if (textarea.style.textDecoration == "line-through") {
        textarea.style.textDecoration = "none"
    }
    else {
        textarea.style.textDecoration = "line-through"
    }
}


function overline(e) {
    if (textarea.style.textDecoration == "overline") {
        textarea.style.textDecoration = "none"
    }
    else {
        textarea.style.textDecoration = "overline"
    }
}




function uppercase(e) {
    textarea.style.textTransform = "uppercase";
}

function lowercase(e) {
    textarea.style.textTransform = "lowercase";
}

function capitalize(e) {
    textarea.style.textTransform = "capitalize";
}

function colorChange(e) {
    let color = e.value;
    textarea.style.color = color;
}


function revers(e) {
    let splite = textarea.value.split("").reverse().join("");
    textarea.value = splite;
}


function font(e){
   let selectElement = document.querySelector('#selectFont');
   output = selectElement.value;
   textarea.style.fontFamily = output;
   console.log(output);
}


