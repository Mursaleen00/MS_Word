
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

function cap_sml(e) {
    if (textarea.style.textTransform == "uppercase") {
        textarea.style.textTransform = "lowercase";
    }
    else {
        textarea.style.textTransform = "uppercase";
    }
}

function colorChange(e) {
    let color = e.value;
    textarea.style.color = color;
}

window.addEventListener('load'), ()=>{
    textarea.value = "";
}





