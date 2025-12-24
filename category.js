<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Live Text Editor</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>

<div id="filters">
    <label><input type="radio" name="heading" value="h1"> H1</label>
    <label><input type="radio" name="heading" value="h2"> H2</label>
    <label><input type="radio" name="heading" value="h3"> H3</label>
    <br><br>
    <label><input type="checkbox" value="bold"> Bold</label>
    <label><input type="checkbox" value="italic"> Italic</label>
    <label><input type="checkbox" value="underline"> Underline</label>
</div>

<br>
<textarea id="inputText"></textarea>
<div id="preview"></div>

<script src="app.js"></script>
</body>
</html>



const input = document.getElementById("inputText");
const preview = document.getElementById("preview");

let lastValue = "";

input.addEventListener("input", () => {
    const currentValue = input.value;

    // Find only newly typed text
    const newText = currentValue.slice(lastValue.length);

    if (newText) {
        let element = document.createElement("span");

        element.textContent = newText;
        
        const selected = document.querySelector('input[name="heading"]:checked');
        if(selected){
            element.classList.add(selected.value);
        }
        // Apply font styles
        document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
            if (cb.checked) {
                if (cb.value === "bold") element.style.fontWeight = "bold";
                if (cb.value === "italic") element.style.fontStyle = "italic";
                if (cb.value === "underline") element.style.textDecoration = "underline";
            }
        });

        preview.appendChild(element);
    }

    lastValue = currentValue;
});


 #preview {
    border: 1px solid #ccc;
    min-height: 100px;
    width: 700px;
}

#inputText {
    width: 700px;
    height: 100px;
}

.h1 { font-size: 2em; font-weight: bold; }
.h2 { font-size: 1.5em; font-weight: bold; }
.h3 { font-size: 1.17em; font-weight: bold; }

const input = document.getElementById("inputText");
const preview = document.getElementById("preview");

let lastValue = "";
let currentLine = document.createElement("p");
let currentSpan = null;
let lastStyleKey = "";

preview.appendChild(currentLine);

input.addEventListener("input", () => {
    const value = input.value;

    // New line
    if (value.endsWith("\n")) {
        currentLine = document.createElement("p");
        preview.appendChild(currentLine);
        currentSpan = null;
        lastValue = value;
        return;
    }

    const newText = value.slice(lastValue.length);
    if (!newText) return;

    const styleKey = getStyleKey();

    // Create new span ONLY if style changed
    if (!currentSpan || styleKey !== lastStyleKey) {
        currentSpan = document.createElement("span");
        applyStyles(currentSpan);
        currentLine.appendChild(currentSpan);
        lastStyleKey = styleKey;
    }

    currentSpan.textContent += newText;
    lastValue = value;
});

function getStyleKey() {
    const heading = document.querySelector


    const inputField= document.querySelector("#inputText");
const previewField= document.querySelector("#preview");

let lastValue = "";

inputField.addEventListener("input", ()=> {
   
    const currentValue= inputField.value;
    
    const newText = currentValue.slice(lastValue.length);

    if(newText){

        //Heading style
        let element= document.createElement(applyHeading());
        element.style.display= "inline";
        element.textContent = newText;

        //Font style
        document.querySelectorAll('input[name="fontStyle"]').forEach((fontBtn) => {
            if(fontBtn.checked){
                if(fontBtn.value==="Italic"){            
                    element.style.fontStyle="italic";
                }
                if(fontBtn.value==="Bold"){            
                    element.style.fontWeight="bold";
                }
                if(fontBtn.value==="Underline"){            
                    element.style.textDecoration= "underline";
                }
            }
        })
        previewField.append(element);
    }

    lastValue= currentValue;
})

function applyHeading() {
    const selected = document.querySelector('input[name="heading"]:checked');
    return selected ? selected.value : "span";
}
