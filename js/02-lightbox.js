import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector(".gallery");

function createGalleryItemMarkup(item) {
  const { description, preview, original } = item;
  
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
}

function createGalleryMarkup(items) {
  return items.map(createGalleryItemMarkup).join("");
}

galleryContainer.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));

new SimpleLightbox('.gallery a',
  {
    captionDelay: 250,
    captionsData: "alt",
  }
);

console.log(galleryItems);
