function createGallery(){

    const gallery = document.createElement("div");
    document.body.append(gallery);
    gallery.style= "display: grid; grid-template-columns:1.4fr 1fr;"

    const productGallery = document.createElement("div");
    const productDetails = document.createElement("div");
    gallery.append(productGallery);
    gallery.append(productDetails);
    
    //Gallery
    productGallery.style= "display: grid; grid-template-columns:1fr 1fr; margin-top:100px; margin-left:270px; gap:10px;"
    productGallery.className= "product-gallary";

    const gallerySlides= document.querySelectorAll(".gallary-item");
    
    gallerySlides.forEach((slide, index) => {
        const clone= slide.cloneNode(true);
        if(index%3 === 0){
            clone.style.gridColumn= "1 / -1";        
        }
        if(clone.querySelector("a")){
          clone.querySelector("a").remove();
        }
        productGallery.append(clone);
    })

    //Details
    productDetails.style= "display:flex; flex-direction:column; margin:100px 300px 0 50px; gap:10px;"

    const title= document.querySelector(".product-title.alt-font.h-5").cloneNode(true);
    title.style= "font-size:26px;"
    productDetails.append(title);

    const price= document.querySelector(".price__regular").cloneNode(true);
    price.style= "font-weight:bold; font-size:25px;"
    productDetails.append(price);

    productDetails.append(document.querySelector(".live-visitors").cloneNode(true));
    productDetails.append(document.querySelector(".sold-product-count.normal-collection").cloneNode(true));

    
    //Color buttons
    let colorLabel;
    function createColorLabel(){
      colorLabel = document.createElement("span");
      colorLabel.textContent = "Color: ";
      productDetails.append(colorLabel);
    }
    createColorLabel();

    const slides= document.querySelectorAll(".product-gallary .gallary-item");
    slides[1].setAttribute("color", "Black");
    slides[2].setAttribute("color", "Black");
    slides[3].setAttribute("color", "Black");
    slides[4].setAttribute("color", "Gold");
    slides[5].setAttribute("color", "Gold");
    slides[6].setAttribute("color", "Gold");
    slides[7].setAttribute("color", "Silver");
    slides[8].setAttribute("color", "Silver");
    slides[9].setAttribute("color", "Silver");

    const colorButtons = document.createElement("div");
    colorButtons.style= "display: flex; gap:10px;";

    function createColorBtns() {

        const buttons = document.querySelectorAll(".js.product-form__input")[0].querySelectorAll("input");

        buttons.forEach((btn, index) => {
          
          const label = document.createElement("label");
          label.style = `
            width: 80px;
            height: 40px;        
            border: 2px solid #ccc;
            border-radius: 25px;
            cursor: pointer;
            display: flex;
            justify-content:center;
            align-items:center;
            font-size:20px;
          `;
          label.textContent= btn.value;
            
          const input = document.createElement("input");
          input.type = "radio";
          input.name = btn.name;
          input.value = btn.value;
          input.style.display = "none";

          label.addEventListener("click", () => {
            input.checked = true;

            colorButtons.querySelectorAll("label").forEach(b => {
                b.style.border = "2px solid #ccc";
            });
            label.style.border = "1px solid black";
            
            colorLabel.textContent= `Color: ${btn.value}`;
            
            const targetSection = document.querySelector(`[color=${btn.value}]`);

            targetSection.scrollIntoView({
                behavior: 'smooth', 
                block: 'start'      
            });
          });

          label.append(input);
          colorButtons.append(label);
        });
    }

    createColorBtns();
    productDetails.append(colorButtons);


    //Model
    const modelLabel = document.createElement("span");
    modelLabel.textContent = "Model";
    modelLabel.style = "margin-top:20px;";
    productDetails.append(modelLabel);

    const modelDropdown= document.createElement("select");
    modelDropdown.style= "width: 173px; padding-left:1px; text-align:center;";
    productDetails.append(modelDropdown);

    function createOptions(val){
      const option =document.createElement('option');
      option.value= val;
      option.textContent= val;
      modelDropdown.append(option);
    }
    createOptions("All");
    createOptions("iPhone 14 Plus");
    createOptions("iPhone 14 Pro");
    createOptions("iPhone 14 Pro Max");

    //Model feature
    slides[1].setAttribute("model", "iPhone 14 Plus");
    slides[2].setAttribute("model", "iPhone 14 Pro");
    slides[3].setAttribute("model", "iPhone 14 Pro Max");
    slides[4].setAttribute("model", "iPhone 14 Plus");
    slides[5].setAttribute("model", "iPhone 14 Pro");
    slides[6].setAttribute("model", "iPhone 14 Pro Max");
    slides[7].setAttribute("model", "iPhone 14 Plus");
    slides[8].setAttribute("model", "iPhone 14 Pro");
    slides[9].setAttribute("model", "iPhone 14 Pro Max");

    modelDropdown.addEventListener("change", () => {
      const model= modelDropdown.value;
      const selected = colorButtons.querySelector(`input[name="Color"]:checked`);

      slides.forEach((slide, index) => {
        if(slide.getAttribute("model")=== model && slide.getAttribute("color")=== selected.value){
          const cloned= slide.cloneNode(true);
          productGallery.replaceChild(cloned, productGallery.firstElementChild)
          cloned.style.gridColumn= "1 / -1";  
        }
      })
    })

    //Size dropdown
    const sizeLabel = document.createElement("span");
    sizeLabel.textContent = "Size";
    sizeLabel.style = "margin-top:15px;";
    productDetails.append(sizeLabel);

    const sizeDropdown= document.querySelector(".variant-option.select").cloneNode(true);
    sizeDropdown.style= "width: 110px";
    productDetails.append(sizeDropdown);

    //Other
    productDetails.append(document.querySelector(".cus-gift-wrap").cloneNode(true));
    productDetails.append(document.querySelector(".action-btn.d-flex").cloneNode(true));
    productDetails.append(document.querySelector(".shopify-payment-button").cloneNode(true));
    productDetails.append(document.querySelector(".addon-buttons.d-sm-flex").cloneNode(true));
    productDetails.append(document.querySelector(".shipping-info").cloneNode(true));
    

    //Bottom container
    // const textSlides= document.querySelectorAll(".row .swiper-wrapper .swiper-slide.product-box .product-footer a");
    // const box= document.createElement("div");

    // textSlides.forEach((slide)=> {
    //   const clone= document.createElement("div");
    //   clone.innerText= slide.textContent;
    //   box.append(clone);
    // })
    // document.querySelector("#shopify-section-template--20934766231796__product_recommendations_VWrWrh").after(box);
    // box.style= "display:flex; flex-direction:row; justify-content:center; margin-bottom:50px; gap:50px;"
    
}

window.addEventListener("load", () => {
  console.log("Page has loaded");
  createGallery();
});
