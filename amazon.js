window.addEventListener("load", () => {
  console.log("page is fully loaded");
  createGallery();
});

function createGallery() {

  const gallery = document.createElement("div");
  gallery.id = "duplicate-gallery";
  gallery.style = `
    margin:100px;
  `;

  gallery.innerHTML = `
    <ul class="feature-image" style="margin-bottom:30px;"></ul>

    <ul class="thumbnails-images"
        style="
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:30px;
          list-style:none;
          padding:0;
          width:650px;
          margin-left:200px;
        ">
    </ul>

  `;

  document.body.append(gallery);

  const style = document.createElement("style");
  style.textContent = `
    .hidden { display:none !important; }

    #duplicate-gallery .feature-image {
      list-style:none; margin:0; padding:0;
    }

    .border {
      box-shadow:0 0 0 1.5px black !important;
    }
  `;
  document.head.append(style);

  const thumbnailSlides = document.querySelectorAll("#desktop-4 .feed-carousel-card");
  const thumbnailsContainer = gallery.querySelector(".thumbnails-images");

  thumbnailSlides.forEach(slide => {
    const clone = slide.cloneNode(true);
    clone.style.width = "170px";
    clone.style.cursor = "pointer";
    thumbnailsContainer.append(clone);
  });


  const featureSlides = document.querySelectorAll("#desktop-4 .feed-carousel-card");
  const featureContainer = gallery.querySelector(".feature-image");

  featureSlides.forEach((slide, index) => {
    const clone = slide.cloneNode(true);
    clone.style.width = "400px";
    clone.style.marginLeft = "480px";

    if (index !== 0) clone.classList.add("hidden");

    featureContainer.append(clone);
  });

  const featureImages = featureContainer.querySelectorAll("li");
  const thumbnailButtons = thumbnailsContainer.querySelectorAll("li");

  thumbnailButtons.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
      featureImages.forEach(f => f.classList.add("hidden"));
      featureImages[index].classList.remove("hidden");
      e.preventDefault();

      thumbnailButtons.forEach(b => b.classList.remove("border"));
      thumbnailButtons[index].classList.add("border");
    });
  });

}
