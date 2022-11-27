import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

const galleryMarkUp = galleryItems
  .map(
    (el) => `
	<div class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</div>
	`
  )
  .join("");

galleryRef.innerHTML = galleryMarkUp;

galleryRef.addEventListener("click", openModalGallery);

function openModalGallery(e) {
  e.preventDefault();
  const instance = basicLightbox.create(
    `<img src='${e.target.dataset.source}'/>`
  );
  instance.show();
}
