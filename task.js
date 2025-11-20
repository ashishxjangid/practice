window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    initChanges();
});

function initChanges() {

    const newGallery = document.createElement("div");
    newGallery.id = "duplicate-gallery";
    newGallery.style.margin = "50px";

    newGallery.innerHTML = `
      <ul class="feature-image" style="margin-bottom:30px;"></ul>

      <div class="rightSide">
        <select class="myDropdown" style="width:90px; padding:10px; border:1px solid #ccc; border-radius:5px; background-color: #f8f8f8; font-size: 16px;">
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
        //clone.style.width = "400px";
       

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

    document.querySelector("#duplicate-gallery .rightSide h1").after(priceInfo);
}

//style
.parent {
    display: grid;
    grid-template-columns: 1fr 1fr;   /* 2 columns */
    grid-auto-rows: auto;             /* rows grow by content */
    gap: 20px;                         /* optional spacing */
}
//input
<div class="nameBox" style="margin-top:20px;">
    <input type="text" id="userNameInput" placeholder="Enter your name"
           style="padding:8px; border:1px solid #ccc; border-radius:5px;">
    <button id="greetBtn" 
            style="padding:8px 12px; margin-left:5px; cursor:pointer; border-radius:5px;">
        Submit
    </button>
    <p id="greetMessage" style="margin-top:10px; font-size:18px; font-weight:500;"></p>
</div>

// Greeting Feature
const greetBtn = document.querySelector("#greetBtn");
const nameInput = document.querySelector("#userNameInput");
const greetMsg = document.querySelector("#greetMessage");

greetBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();

    if (name === "") {
        greetMsg.textContent = "Please enter your name.";
        return;
    }

    greetMsg.textContent = `Hello ${name}, welcome to our website!`;
});

