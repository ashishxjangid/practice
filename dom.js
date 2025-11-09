//Style Paragraph
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>JS DOM paragraph style</title>
</head> 
<body>
<p id ='text'>JavaScript Exercises - w3resource</p> 

<div>
<button id="jsstyle" onclick="js_style()">Style</button>
</div>

</body>
</html>

//JS code
function js_style() 
{
    text.style.fontSize = "14pt";
    text.style.fontFamily = "Comic Sans MS";
    text.style.color = "green";
}


//Paragraph Background Color

<!DOCTYPE html>
<html>

<head>
<meta charset=utf-8 />
<title>Set the background color of a paragraph</title>
</head>

<body>
<input type="button" value="Click to set paragraph background color" onclick="set_background()">
<p>w3resource JavaScript Exercises</p>
<p>w3resource PHP Exercises</p> 
</body>
</html>

//JS code
function set_background() {

    docBody = document.getElementsByTagName("body")[0];
    myBodyElements = docBody.getElementsByTagName("p");
    
    myp1 = myBodyElements[0];
    myp1.style.background = "rgb(255,0,0)";

    myp2 = myBodyElements[1];
    myp2.style.background = "rgb(255,255,0)";
}
