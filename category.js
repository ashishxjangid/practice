<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div style="display:flex;">
        <div id="products"></div>
        <div id="categories">
            <label><input type="radio" name="category" value="all" /> all</label>
            <label><input type="radio" name="category" value="fruits" /> fruits</label>
            <label><input type="radio" name="category" value="vegetables" /> vegetables</label>
            <label><input type="radio" name="category" value="flowers" /> flowers</label>
        </div>
    </div>

    <script src="app.js"></script>
</body>
</html>


const productsContainer= document.querySelector("#products");
productsContainer.style="display: grid; grid-template-columns: 1fr 1fr 1fr; margin:100px; margin-left:200px; width:50%;"

const categoriesContainer= document.querySelector("#categories");
categoriesContainer.style= "display:flex; flex-direction:column; width:8%; height:150px; font-size:22px; border:1px solid black; margin:100px; gap:15px; padding:10px;"

const urls= ["https://t4.ftcdn.net/jpg/15/35/16/15/240_F_1535161513_RbGU7j2y57MNn0zPo7FkZOmalMkJc6Nz.jpg", "https://t4.ftcdn.net/jpg/16/02/65/69/240_F_1602656907_xoKlqjchznolmPXK9HRik4KR2f3WCzTj.jpg",
    "https://t4.ftcdn.net/jpg/18/20/50/85/240_F_1820508506_9tprllQQL8sspsYr9bbu39NfStxlUJxp.jpg","https://t4.ftcdn.net/jpg/05/37/04/61/240_F_537046123_s8JVn2NrClPQDOryhSm8jonYZPfIzPRX.jpg",
    "https://t3.ftcdn.net/jpg/03/02/13/68/240_F_302136848_Dhf0FUEKTIIRyMeCdBfJVVxavVSh4zM8.jpg","https://t4.ftcdn.net/jpg/15/75/79/01/240_F_1575790148_AwGDvhJcTps0p9vkiXL7WQFyYxzqvREk.jpg",
    "https://t3.ftcdn.net/jpg/15/70/15/32/240_F_1570153220_ZUNnZHIATpIgKit4VGdxURi1IuOIWBE6.jpg","https://t3.ftcdn.net/jpg/16/76/54/70/240_F_1676547044_NmPuDm37Agk0d52l79Dx4Lo3HLpjqhw9.jpg",
    "https://t3.ftcdn.net/jpg/05/68/96/92/240_F_568969200_FBwvEKlu4AFx1nfUYFv6yAENCBrvv9TE.jpg"
];

urls.forEach((url) => {    
    const img= document.createElement("img");
    img.className= "all";
    img.src= url;
    img.width= "200";
    productsContainer.append(img);
})


function displayProducts(products){
    document.querySelectorAll("#products .all").forEach(i => i.style.display= "none");

    products.forEach((product) => {
        product.style.display= "block";
    })
}

document.querySelectorAll("#categories input").forEach((input) => {
    input.addEventListener("change", ()=> {
        if(input.checked){
            const items= document.querySelectorAll(`.${input.value}`);
            displayProducts(items);
        }
    })
})
