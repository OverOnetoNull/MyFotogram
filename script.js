// Bubbling

function noPropagation(event) {
  event.stopPropagation();
}

let pictures = [
  "dominicana_Palm_Beach",
  "Mystic_Water",
  "red_Sky_Boat",
  "Sail_from_Sun",
  "Sail_from_Sun_three",
  "Sail_from_Sun_two",
  "Sunny_Coast",
  "Sunrise_Beach_jump",
  "Sunrise_Beach",
  "Sunset_Fields",
  "watch_Sun_GoBy",
];

// Global setting for Index

let currentIndex = 0;

let lastFocusedElement = null;

const dialogRef = document.getElementById("myDialog");
const contentRef = document.getElementById("my_content");
const dialogImg = document.getElementById("DialogImgID");

// Open the Dialog
function openDialog() {
  dialogRef.showModal();
  dialogRef.classList.add("opened");
}

// Close the Dialog
function closeDialog() {
  dialogRef.close();
  dialogRef.classList.remove("opened");

  if (lastFocusedElement) {
    lastFocusedElement.focus(); // Return focus to the last focused element
  }
}

function openImage(index) {
  lastFocusedElement = document.activeElement; // Save the last focused element

  currentIndex = index; //  Take clicked img in the current Index
  updateDialogImage(); //  Update the Picture
  openDialog(); //      Open the Dialog

  trapFocusInDialog(); //  Trap the Focus in the Dialog
}

// Includes the Array List  in the Elements

function containsElement(array, element) {
  return array.includes(element);
}

function galleryImageTemplate(name, index) {
  return `
    <img
      onclick="openImage(${index})"
      class="gallery-img"
      src="./img/pictures/${name}.jpg"
      tabindex="0"
      data-index="${index}"
    >
  `;
}

function initArrays() {
  const contentRef = document.getElementById("my_content");
  contentRef.innerHTML = "";

  for (
    let indexPictures = 0;
    indexPictures < pictures.length;
    indexPictures++
  ) {
    contentRef.innerHTML += galleryImageTemplate(
      pictures[indexPictures],
      indexPictures,
    );
  }
}

//create Dialog IMG s with  Array-Index

function containsElement(array, element) {
  return array.includes(element);
}

// The right Mect Button change the index 1+
// and if thr current index is bigger
// it will change index to 0 (start of array)

function nextImage() {
  currentIndex++;

  if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }

  updateDialogImage();
}

//change like in next Button but minus index
// and if index sets smaller then 0 (array start)
// it will set index on -1 (array end)

function prevImage() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = pictures.length - 1;
  }

  updateDialogImage();
}

// set the dialog Image in the form of indexed Picture

function updateDialogImage() {
  const dialogImg = document.getElementById("DialogImgID");
  const titleEl = document.getElementById("dialogImageTitle");

  const imageName = pictures[currentIndex];

  dialogImg.src = `./img/pictures/${imageName}.jpg`;
  dialogImg.alt = imageName;

  titleEl.textContent = imageName.replaceAll("_", " ");
}

// solution set keybord to click Buttons

// for WCAG Konformity

// Set Enter ForClick

document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;

  const active = document.activeElement;

  if (!active || !active.classList.contains("gallery-img")) return;

  event.preventDefault();

  const index = Number(active.dataset.index);

  if (Number.isNaN(index)) {
    active.click();
    return;
  }
  openImage(index);
});

// Set Escape For Click

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  if (dialogRef && dialogRef.open) {
    closeDialog();
  }
});

function getFocusableElements(container) {
  const selector = `
    button, [href], input, select,
    textarea, [tabindex]:not([tabindex="-1"])
  `;
  return container.querySelectorAll(selector);
}

function focusFirst(elements) {
  if (!elements.length) return;
  elements[0].focus();
}

function handleTabCycle(event, first, last) {
  if (event.key !== "Tab") return;

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  }

  if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function trapFocusInDialog() {
  const elements = getFocusableElements(dialogRef);
  if (!elements.length) return;

  const first = elements[0];
  const last = elements[elements.length - 1];

  focusFirst(elements);

  dialogRef.addEventListener("keydown", (e) => handleTabCycle(e, first, last));
}

document.addEventListener("DOMContentLoaded", initArrays);
