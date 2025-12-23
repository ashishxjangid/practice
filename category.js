    document.querySelectorAll('input[name="heading"]').forEach((input) => {
        if(input.checked && input.value==="h1"){            
            previewField.style.fontSize="2em";
        }
        if(input.checked && input.value==="h2"){            
            previewField.style.fontSize="1.5em";
        }
        if(input.checked && input.value==="h3"){            
            previewField.style.fontSize="1.17em";
        }
    })
    document.querySelectorAll('input[name="fontStyle"]').forEach((input) => {
        if(input.checked && input.value==="Italic"){            
            previewField.style.fontStyle="italic";
        }
        if(input.checked && input.value==="Bold"){            
            previewField.style.fontWeight="bold";
        }
        if(input.checked && input.value==="Underline"){            
            previewField.style.textDecoration= "underline";
        }
    })
})

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Live Text Editor</title>
<style>
    #preview {
        border: 1px solid #ccc;
        min-height: 100px;
        padding: 10px;
        margin-top: 10px;
    }
</style>
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
<input type="text" id="inputText" placeholder="Type here...">
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
        let element = document.createElement(getHeading());

        element.textContent = newText;

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

function getHeading() {
    const selected = document.querySelector('input[name="heading"]:checked');
    return selected ? selected.value : "span";
}
