const footer = document.querySelector('footer');

const newGallery = document.createElement('div');
newGallery.id = "duplicate-gallery";
newGallery.style.margin = "50px";

newGallery.innerHTML = `
  <div class="feature-image" style="margin-bottom:30px;"></div>

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

const thumbnailImages = document.querySelectorAll('.thumbnail-list__item.slider__slide');

const featureImage = document.querySelector('.product__media-item.grid__item.slider__slide.is-active.scroll-trigger.animate--fade-in');

const bigFeature = document.querySelector('#duplicate-gallery .feature-image');

const featureClone = featureImage.cloneNode(true);
featureClone.style.width = "400px";    
featureClone.style.display = "block";    
featureClone.style.marginLeft = "625px"; 

bigFeature.appendChild(featureClone);

const thumbs = document.querySelector('#duplicate-gallery .thumbnails-images');

thumbnailImages.forEach(li => {
  const clone = li.cloneNode(true);
  clone.style.width = "140px";
  clone.style.cursor = "pointer";
  thumbs.appendChild(clone);
});
