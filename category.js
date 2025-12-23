<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="main">
        <div id="filters">
            <label><input type="radio" name="heading" value="h1">H1</label>
            <label><input type="radio" name="heading" value="h2">H2</label>
            <label><input type="radio" name="heading" value="h3">H3</label>
               
            <label><input type="checkbox" name="fontStyle" value="Italic">Italic</label>
            <label><input type="checkbox" name="fontStyle" value="Bold">Bold</label>
            <label><input type="checkbox" name="fontStyle" value="Underline">Underline</label>
   
        </div>
        <input type="text" id="inputText">
        <div id="preview"></div>
    </div>
    

    <script src="app.js"></script>
</body>
</html>


const inputField= document.querySelector("#inputText");
const previewField= document.querySelector("#preview");

inputField.addEventListener("input", ()=> {
    previewField.textContent= inputField.value;

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

