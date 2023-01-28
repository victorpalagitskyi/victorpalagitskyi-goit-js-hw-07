import { galleryItems } from './gallery-items.js';
const makeImageMarkup = image => {
    return `
    <a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>
  `
 }

const makeGallaryTable = galleryItems.map(makeImageMarkup).join("")

const galleryEl = document.querySelector(".gallery")
galleryEl.insertAdjacentHTML('afterbegin', makeGallaryTable)


let gallery = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionsDelay: 250,

});

console.log(galleryItems)