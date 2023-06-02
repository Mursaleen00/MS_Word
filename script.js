
let textarea = document.getElementById('textarea');

// Fone Size
function fontSize(e) {
    let value = e.value;
    textarea.style.fontSize = value + "px";
}


// Bold
function bold(e) {
    if (textarea.style.fontWeight == "bold") {
        textarea.style.fontWeight = "normal"
    }
    else {
        textarea.style.fontWeight = "bold"
    }
}

// Italic
function italic(e) {
    if (textarea.style.fontStyle == "italic") {
        textarea.style.fontStyle = "normal"
    }
    else {
        textarea.style.fontStyle = "italic"
    }
}

// Underline
function underline(e) {
    if (textarea.style.textDecoration == "underline") {
        textarea.style.textDecoration = "none"
    }
    else {
        textarea.style.textDecoration = "underline"
    }
}

// Text Align Left
function alignLeft(e) {
    textarea.style.textAlign = "left"
}

// Text Align Center
function alignCenter(e) {
    textarea.style.textAlign = "center"
}


// Text Align Right
function alignRight(e) {
    textarea.style.textAlign = "right"
}



// Remove Text
function textHide(e) {
    textarea.style.textTransform = "capitalize";
    textarea.style.textAlign = "left";
    textarea.style.textDecoration = "none";
    textarea.style.fontStyle = "normal";
    textarea.style.fontWeight = "normal";
    textarea.value = "";
}



// Strickthrough
function Strickthrough(e) {
    if (textarea.style.textDecoration == "line-through") {
        textarea.style.textDecoration = "none"
    }
    else {
        textarea.style.textDecoration = "line-through"
    }
}

// Overline
function overline(e) {
    if (textarea.style.textDecoration == "overline") {
        textarea.style.textDecoration = "none"
    }
    else {
        textarea.style.textDecoration = "overline"
    }
}



// Uppercase
function uppercase(e) {
    textarea.style.textTransform = "uppercase";
}


// Lowercase
function lowercase(e) {
    textarea.style.textTransform = "lowercase";
}


// Capitalize
function capitalize(e) {
    textarea.style.textTransform = "capitalize";
}


// Color Change
function colorChange(e) {
    let color = e.value;
    textarea.style.color = color;
}


// Revers
function revers(e) {
    let splite = textarea.value.split("").reverse().join("");
    textarea.value = splite;
}



// Font Style
function font(e) {
    let selectElement = document.querySelector('#selectFont');
    output = selectElement.value;
    textarea.style.fontFamily = output;
    console.log(output);
}


