import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

const galleryMarkUp = galleryItems
  .map(
    (el) => `
	 <a class="gallery__item" href="${el.original}">
	 <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
  </a>
	`
  )
  .join("");

galleryRef.innerHTML = galleryMarkUp;

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
