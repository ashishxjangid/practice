window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    initChanges();
});

function initChanges() {

    const newGallery = document.createElement("div");
    newGallery.id = "duplicate-gallery";
    newGallery.style.margin = "50px";
    newGallery.style.display= "grid";
    newGallery.style.gridTemplateColumns= "1fr 1fr";
    newGallery.style.gridAutoRows= "auto";  
    newGallery.style.gap= "20px";  

    newGallery.innerHTML = `
      <ul class="feature-image" style="margin-bottom:30px;"></ul>

      <div class="rightSide">
        <select class="myDropdown" style="width:90px; padding:10px; margin-top:85px; border:1px solid #ccc; border-radius:5px; background-color: #f8f8f8; font-size: 16px;">
          <option>White</option>
          <option>Black</option>
          <option>Red</option>
          <option>Yellow</option>
          <option>All</option>
        </select>
      </div>

      <ul class="thumbnails-images" 
          style="
            display: grid; 
            grid-template-columns: 1fr 1fr 1fr 1fr; 
            gap:10px; 
            list-style: none; 
            padding:0;
            width: 600px;
            transform: translateX(150px);
          ">
      </ul>
    `;

    document.body.append(newGallery);

    const thumbnailSlides = document.querySelectorAll(".thumbnail-list__item.slider__slide");

    const mainFeature = document.querySelector("#duplicate-gallery .feature-image");

    const allThumbnails = document.querySelector("#duplicate-gallery .thumbnails-images");

    thumbnailSlides.forEach((li) => {
        const clone = li.cloneNode(true);
        clone.style.width = "140px";
        clone.style.cursor = "pointer";
        allThumbnails.appendChild(clone);
    });

    const style = document.createElement("style");
    style.textContent = `
      .hidden {
        display: none !important;
      }

      #duplicate-gallery .feature-image {
        list-style: none !important;
        margin: 0;
        padding: 0;
      }
      #duplicate-gallery .thumbnails-images li button[aria-current="true"] {
        box-shadow: 0 0 0 1.5px black !important;
      }
    `;
    document.head.appendChild(style);

    const featureSlides = document.querySelectorAll(".product__media-item");

    featureSlides.forEach((slide, index) => {
        const clone = slide.cloneNode(true);
        clone.style.width = "400px";
        clone.style.marginLeft = "250px";
       

        if (index !== 0) clone.classList.add("hidden");

        mainFeature.appendChild(clone);
    });

    const featureLists = document.querySelectorAll("#duplicate-gallery .feature-image li");
    const thumbnailLists = document.querySelectorAll("#duplicate-gallery .thumbnails-images li button");

    thumbnailLists.forEach((thumb, index) => {
        thumb.addEventListener("click", () => {
            featureLists.forEach((f) => {
                f.classList.add("hidden");
            });

            featureLists[index].classList.remove("hidden");

            thumbnailLists.forEach(t => t.removeAttribute("aria-current"));

            thumb.setAttribute("aria-current", "true");
            
        });
    });

    //Dropdown feature
    featureSlides[0].setAttribute("color", "White");
    featureSlides[1].setAttribute("color", "All");
    featureSlides[8].setAttribute("color", "Red");
    featureSlides[3].setAttribute("color", "Black");
    featureSlides[17].setAttribute("color", "Yellow");
    
    const dropdown = document.querySelector("#duplicate-gallery .myDropdown");

    dropdown.addEventListener("change", () => {

        const selectedColor = dropdown.value;

        featureLists.forEach(f => f.classList.add("hidden"));

        thumbnailLists.forEach(t => t.removeAttribute("aria-current"));

        featureSlides.forEach((slide, index) => {
            const slideColor = slide.getAttribute("color");

            if (slideColor === selectedColor) {

                featureLists[index].classList.remove("hidden");
                     
                thumbnailLists[index].setAttribute("aria-current", "true"); 
                                
            }
        });
    });

    //Title
    const title= document.querySelector("#ProductInfo-template--18242047181044__main .product__title h1").cloneNode(true);

    const priceInfo= document.querySelector("#ProductInfo-template--18242047181044__main #price-template--18242047181044__main").cloneNode(true);

    document.querySelector("#duplicate-gallery .rightSide").prepend(title);
    title.style.color = "#bd9494ff";
    title.style.fontFamily = "fantasy";
    title.style.fontStyle= "italic";

    document.querySelector("#duplicate-gallery .rightSide h1").after(priceInfo);
    priceInfo.querySelector(".price__container").style.setProperty("color", "#2e608aff", "important");

    //Description
    const description= document.querySelector(".product__description").cloneNode(true);
    newGallery.append(description);
    description.style.color = "black";
    description.style.marginTop = "100px";

    //message box
    const messageBox= document.createElement("div");
    messageBox.style.marginLeft= "650px";

    messageBox.innerHTML = `
      <input type="text" id="userNameInput" placeholder="Enter your name"
             style="padding:8px; border:1px solid #ccc; border-radius:5px;">
      <button id="greetBtn" 
              style="padding:8px 12px; margin-left:10px; cursor:pointer; border-radius:5px; background-color: #cef5ef;">
          Get Message
      </button>
      <button id="clearBtn"
              style="padding:8px 12px; margin-left:5px; cursor:pointer; border-radius:5px; background-color: #f7cbce;">
          Clear
      </button>    
      <p id="greetMessage" style="margin-top:10px; font-size:20px; font-weight: 400; color:black; "></p>
    `;

    newGallery.before(messageBox);

    const greetBtn = document.querySelector("#greetBtn");
    const clearBtn = document.querySelector("#clearBtn");
    const nameInput = document.querySelector("#userNameInput");
    const greetMsg = document.querySelector("#greetMessage");

    greetBtn.addEventListener("click", () => {

      const name = nameInput.value.trim();
      if(name === ""){
        greetMsg.textContent = `Please enter your name!`;
      }
      else{
        greetMsg.textContent = `Hello ${name}, welcome to our website!`;
        nameInput.value= "";
      }
    });

    clearBtn.addEventListener("click", ()=> {
      nameInput.value= "";
      greetMsg.textContent = "";
    });

    //Bottom container
    const items = document.querySelectorAll(".grid.product-grid .grid__item .card__information");
    const bottomContainer = document.createElement("div");
    document.body.append(bottomContainer);
    bottomContainer.style.width = "400px";
    bottomContainer.style.height = "400px";

    items.forEach(item => {
      const clonedDiv = item.cloneNode(true);
      bottomContainer.append(clonedDiv);
    });

}

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    initChanges();
});

function initChanges() {

    const newGallery = document.createElement("div");
    newGallery.id = "duplicate-gallery";
    newGallery.style.margin = "50px";
    newGallery.style.display= "grid";
    newGallery.style.gridTemplateColumns= "1fr 1fr";
    newGallery.style.gridAutoRows= "auto";  
    newGallery.style.gap= "20px";  

    newGallery.innerHTML = `
      <ul class="feature-image" style="margin-bottom:30px;"></ul>

      <div class="rightSide">
        <select class="myDropdown" style="width:90px; padding:10px; margin-top:85px; border:1px solid #ccc; border-radius:5px; background-color: #f8f8f8; font-size: 16px;">
        </select>
      </div>

      <ul class="thumbnails-images" 
          style="
            display: grid; 
            grid-template-columns: 1fr 1fr 1fr 1fr; 
            gap:10px; 
            list-style: none; 
            padding:0;
            width: 600px;
            transform: translateX(150px);
          ">
      </ul>
    `;

    document.body.append(newGallery);

    const thumbnailSlides = document.querySelectorAll(".thumbnail-list__item.slider__slide");

    const mainFeature = document.querySelector("#duplicate-gallery .feature-image");

    const allThumbnails = document.querySelector("#duplicate-gallery .thumbnails-images");

    thumbnailSlides.forEach((li) => {
        const clone = li.cloneNode(true);
        clone.style.width = "140px";
        clone.style.cursor = "pointer";
        allThumbnails.appendChild(clone);
    });

    const style = document.createElement("style");
    style.textContent = `
      .hidden {
        display: none !important;
      }

      #duplicate-gallery .feature-image {
        list-style: none !important;
        margin: 0;
        padding: 0;
      }
      #duplicate-gallery .thumbnails-images li button[aria-current="true"] {
        box-shadow: 0 0 0 1.5px black !important;
      }
    `;
    document.head.appendChild(style);

    const featureSlides = document.querySelectorAll(".product__media-item");

    featureSlides.forEach((slide, index) => {
        const clone = slide.cloneNode(true);
        clone.style.width = "400px";
        clone.style.marginLeft = "250px";
       

        if (index !== 0) clone.classList.add("hidden");

        mainFeature.appendChild(clone);
    });

    const featureLists = document.querySelectorAll("#duplicate-gallery .feature-image li");
    const thumbnailLists = document.querySelectorAll("#duplicate-gallery .thumbnails-images li button");

    thumbnailLists.forEach((thumb, index) => {
        thumb.addEventListener("click", () => {
            featureLists.forEach((f) => {
                f.classList.add("hidden");
            });

            featureLists[index].classList.remove("hidden");

            thumbnailLists.forEach(t => t.removeAttribute("aria-current"));

            thumb.setAttribute("aria-current", "true");
            
        });
    });

    //Create Dropdown
    const dropdown = document.querySelector("#duplicate-gallery .myDropdown");

    function createDropdown(){
      const buttons= (document.querySelectorAll(".js.product-form__input")[0]).querySelectorAll("input");

      buttons.forEach(button => {
        const option =document.creatElement('option');
        option.value= button.getAttribute("value");
        option.textContent= button.getAttribute("value");
        dropdown.append(option);
      })
      
    }

    //Dropdown feature
    featureSlides[0].setAttribute("color", "White");
    featureSlides[1].setAttribute("color", "All");
    featureSlides[8].setAttribute("color", "Red");
    featureSlides[3].setAttribute("color", "Black");
    featureSlides[17].setAttribute("color", "Yellow");
    

    dropdown.addEventListener("change", () => {

        const selectedColor = dropdown.value;

        featureLists.forEach(f => f.classList.add("hidden"));

        thumbnailLists.forEach(t => t.removeAttribute("aria-current"));

        featureSlides.forEach((slide, index) => {
            const slideColor = slide.getAttribute("color");

            if (slideColor === selectedColor) {

                featureLists[index].classList.remove("hidden");
                     
                thumbnailLists[index].setAttribute("aria-current", "true"); 
                                
            }
        });
    });

    //Title
    const title= document.querySelector("#ProductInfo-template--18242047181044__main .product__title h1").cloneNode(true);

    const priceInfo= document.querySelector("#ProductInfo-template--18242047181044__main #price-template--18242047181044__main").cloneNode(true);

    document.querySelector("#duplicate-gallery .rightSide").prepend(title);
    title.style.color = "#bd9494ff";
    title.style.fontFamily = "fantasy";
    title.style.fontStyle= "italic";

    document.querySelector("#duplicate-gallery .rightSide h1").after(priceInfo);
    priceInfo.querySelector(".price__container").style.setProperty("color", "#2e608aff", "important");

    //Description
    const description= document.querySelector(".product__description").cloneNode(true);
    newGallery.append(description);
    description.style.color = "black";
    description.style.marginTop = "100px";

    //message box
    const messageBox= document.createElement("div");
    messageBox.style.marginLeft= "650px";

    messageBox.innerHTML = `
      <input type="text" id="userNameInput" placeholder="Enter your name"
             style="padding:8px; border:1px solid #ccc; border-radius:5px;">
      <button id="greetBtn" 
              style="padding:8px 12px; margin-left:10px; cursor:pointer; border-radius:5px; background-color: #cef5ef;">
          Get Message
      </button>
      <button id="clearBtn"
              style="padding:8px 12px; margin-left:5px; cursor:pointer; border-radius:5px; background-color: #f7cbce;">
          Clear
      </button>    
      <p id="greetMessage" style="margin-top:10px; font-size:20px; font-weight: 400; color:black; "></p>
    `;

    newGallery.before(messageBox);

    const greetBtn = document.querySelector("#greetBtn");
    const clearBtn = document.querySelector("#clearBtn");
    const nameInput = document.querySelector("#userNameInput");
    const greetMsg = document.querySelector("#greetMessage");

    greetBtn.addEventListener("click", () => {

      const name = nameInput.value.trim();
      if(name === ""){
        greetMsg.textContent = `Please enter your name!`;
      }
      else{
        greetMsg.textContent = `Hello ${name}, welcome to our website!`;
        nameInput.value= "";
      }
    });

    clearBtn.addEventListener("click", ()=> {
      nameInput.value= "";
      greetMsg.textContent = "";
    });

    //Bottom container
    const items = document.querySelectorAll(".grid.product-grid .grid__item .card__information");
    const bottomContainer = document.createElement("div");
    document.body.append(bottomContainer);
    bottomContainer.style.width = "400px";
    bottomContainer.style.height = "400px";

    items.forEach(item => {
      const clonedDiv = item.cloneNode(true);
      bottomContainer.append(clonedDiv);
    });

}

// 3- latest code
window.addEventListener("load", () => {
  console.log("page is fully loaded");
  initChanges();
});

function initChanges() {

  // ---------------------- Create Main Gallery ----------------------
  const gallery = document.createElement("div");
  gallery.id = "duplicate-gallery";
  gallery.style = `
    margin:50px;
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:20px;
  `;

  gallery.innerHTML = `
    <ul class="feature-image" style="margin-bottom:30px;"></ul>

    <div class="rightSide">
      <select class="myDropdown" style="width:90px; padding:10px; margin-top:85px;">
        <option>White</option>
        <option>Black</option>
        <option>Red</option>
        <option>Yellow</option>
        <option>All</option>
      </select>
    </div>

    <ul class="thumbnails-images"
        style="
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:10px;
          list-style:none;
          padding:0;
          width:600px;
          transform:translateX(150px);
        ">
    </ul>
  `;

  document.body.append(gallery);

  // ---------------------- Add CSS ----------------------
  const style = document.createElement("style");
  style.textContent = `
    .hidden { display:none !important; }

    #duplicate-gallery .feature-image {
      list-style:none; margin:0; padding:0;
    }

    #duplicate-gallery .thumbnails-images li button[aria-current="true"] {
      box-shadow:0 0 0 1.5px black !important;
    }
  `;
  document.head.append(style);

  // ---------------------- Clone Thumbnails ----------------------
  const thumbnailSlides = document.querySelectorAll(".thumbnail-list__item.slider__slide");
  const thumbnailsContainer = gallery.querySelector(".thumbnails-images");

  thumbnailSlides.forEach(slide => {
    const clone = slide.cloneNode(true);
    clone.style.width = "140px";
    clone.style.cursor = "pointer";
    thumbnailsContainer.append(clone);
  });

  // ---------------------- Clone Feature Images ----------------------
  const originalFeatures = document.querySelectorAll(".product__media-item");
  const featureContainer = gallery.querySelector(".feature-image");

  originalFeatures.forEach((slide, index) => {
    const clone = slide.cloneNode(true);
    clone.style = "width:400px; margin-left:250px;";
    if (index !== 0) clone.classList.add("hidden");
    featureContainer.append(clone);
  });

  const featureImages = featureContainer.querySelectorAll("li");
  const thumbnailButtons = thumbnailsContainer.querySelectorAll("li button");

  // ---------------------- Thumbnail Click Logic ----------------------
  thumbnailButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      featureImages.forEach(img => img.classList.add("hidden"));
      featureImages[index].classList.remove("hidden");

      thumbnailButtons.forEach(b => b.removeAttribute("aria-current"));
      btn.setAttribute("aria-current", "true");
    });
  });

  // ---------------------- Set Colors ----------------------
  originalFeatures[0].setAttribute("color", "White");
  originalFeatures[1].setAttribute("color", "All");
  originalFeatures[8].setAttribute("color", "Red");
  originalFeatures[3].setAttribute("color", "Black");
  originalFeatures[17].setAttribute("color", "Yellow");

  // ---------------------- Dropdown Filter ----------------------
  const dropdown = gallery.querySelector(".myDropdown");

  dropdown.addEventListener("change", () => {
    const color = dropdown.value;

    featureImages.forEach(f => f.classList.add("hidden"));
    thumbnailButtons.forEach(b => b.removeAttribute("aria-current"));

    originalFeatures.forEach((slide, index) => {
      if (slide.getAttribute("color") === color) {
        featureImages[index].classList.remove("hidden");
        thumbnailButtons[index].setAttribute("aria-current", "true");
      }
    });
  });

  // ---------------------- Title & Price ----------------------
  const title = document.querySelector(".product__title h1").cloneNode(true);
  const price = document.querySelector("#price-template--18242047181044__main").cloneNode(true);

  gallery.querySelector(".rightSide").prepend(title);
  title.style = "color:#bd9494ff; font-family:fantasy; font-style:italic;";
  title.after(price);

  price.querySelector(".price__container")
       .style.setProperty("color", "#2e608aff", "important");

  // ---------------------- Description ----------------------
  const description = document.querySelector(".product__description").cloneNode(true);
  description.style = "color:black; margin-top:100px;";
  gallery.append(description);

  // ---------------------- Greeting Box ----------------------
  const msgBox = document.createElement("div");
  msgBox.style.marginLeft = "650px";
  msgBox.innerHTML = `
    <input id="userNameInput" placeholder="Enter your name" style="padding:8px;">
    <button id="greetBtn" style="padding:8px 12px;">Get Message</button>
    <button id="clearBtn" style="padding:8px 12px;">Clear</button>
    <p id="greetMessage" style="margin-top:10px; font-size:20px;"></p>
  `;
  gallery.before(msgBox);

  const nameInput = msgBox.querySelector("#userNameInput");
  const greetMsg = msgBox.querySelector("#greetMessage");

  msgBox.querySelector("#greetBtn").addEventListener("click", () => {
    const name = nameInput.value.trim();
    greetMsg.textContent = name ? `Hello ${name}, welcome to our website!` : "Please enter your name!";
    nameInput.value = "";
  });

  msgBox.querySelector("#clearBtn").addEventListener("click", () => {
    nameInput.value = "";
    greetMsg.textContent = "";
  });

  // ---------------------- Bottom Container ----------------------
  const items = document.querySelectorAll(".grid.product-grid .grid__item .card__information");
  const bottom = document.createElement("div");
  bottom.style = "width:400px; height:400px;";
  document.body.append(bottom);

  items.forEach(item => bottom.append(item.cloneNode(true)));
}

