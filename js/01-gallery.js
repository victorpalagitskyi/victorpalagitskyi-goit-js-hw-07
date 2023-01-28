import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox'
const makeImageMarkup = image => {
    return `
    <div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>`
 }

const makeGallaryTable = galleryItems.map(makeImageMarkup).join("")

const galleryEl = document.querySelector(".gallery")
galleryEl.insertAdjacentHTML('afterbegin', makeGallaryTable)

galleryEl.addEventListener("click", onSelectedImg)
function onSelectedImg(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return
  }
  
  console.log(e.target);
  const bigImg = basicLightbox.create(
    ` <img src="${e.target.dataset.source}"
    width ="800"
    height ="600" >`
  )
  document.addEventListener("keydown", function (e)
  {
    if (e.key === "Escape") { 
      bigImg.onclose()
  } })
 
  bigImg.show()
  
}
