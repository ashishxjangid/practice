const footer = document.querySelector('footer');

const newGallery = document.createElement('div');
newGallery.id = "my-duplicate-gallery";
newGallery.style.marginTop = "50px";

newGallery.innerHTML = `
  <div class="duplicate-feature-image" style="margin-bottom:30px;"></div>

  <ul class="duplicate-thumbnails" 
      style="display:flex; flex-wrap:wrap; gap:10px; list-style:none; padding:0;">
  </ul>
`;

footer.insertAdjacentElement("afterend", newGallery);

const thumbnailSlides = document.querySelectorAll('.thumbnail-list__item.slider__slide');

const targetFeature = document.querySelector('.product__media-item.grid__item.slider__slide.is-active.scroll-trigger.animate--fade-in');

const bigFeatureContainer = document.querySelector('#my-duplicate-gallery .duplicate-feature-image');

const bigClone = targetFeature.cloneNode(true);
bigClone.style.maxWidth = "400px";    
bigClone.style.display = "block";      

bigFeatureContainer.appendChild(bigClone);

const thumbsContainer = document.querySelector('#my-duplicate-gallery .duplicate-thumbnails');

thumbnailSlides.forEach(li => {
  const clone = li.cloneNode(true);
  clone.style.width = "80px";
  clone.style.cursor = "pointer";
  thumbsContainer.appendChild(clone);
});
