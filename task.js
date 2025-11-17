window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    initChanges();
});

function initChanges() {
    const footer = document.querySelector("footer");

    const newGallery = document.createElement("div");
    newGallery.id = "duplicate-gallery";
    newGallery.style.margin = "50px";

    newGallery.innerHTML = `
      <ul class="feature-image" style="margin-bottom:30px;"></ul>

      <ul class="thumbnails-images" 
          style="
            display: grid; 
            grid-template-columns: 1fr 1fr 1fr 1fr; 
            gap:10px; 
            list-style: none; 
            padding:0;
            margin-left: 550px;
            width: 600px;
          ">
      </ul>
    `;

    footer.after(newGallery);

    const thumbnailImages = document.querySelectorAll(".thumbnail-list__item.slider__slide");

    const bigFeature = document.querySelector("#duplicate-gallery .feature-image");

    const thumbs = document.querySelector("#duplicate-gallery .thumbnails-images");

    thumbnailImages.forEach((li) => {
        const clone = li.cloneNode(true);
        clone.style.width = "140px";
        clone.style.cursor = "pointer";
        thumbs.appendChild(clone);
    });

    const style = document.createElement("style");
    style.textContent = `
      .hidden {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    const allFeatures = document.querySelectorAll(".product__media-item");

    allFeatures.forEach((slide, index) => {
        const clone = slide.cloneNode(true);
        clone.style.width = "400px";
        clone.style.display = "block";
        clone.style.marginLeft = "625px";

        if (index !== 0) clone.classList.add("hidden");

        bigFeature.appendChild(clone);
    });

    const featureSlides = document.querySelectorAll("#duplicate-gallery .feature-image li");
    const newThumbs = document.querySelectorAll("#duplicate-gallery .thumbnails-images li");

    newThumbs.forEach((thumb, index) => {
        thumb.addEventListener("click", () => {
            featureSlides.forEach((f) => {
                f.classList.add("hidden");
            });

            featureSlides[index].classList.remove("hidden");
        });
    });
}
