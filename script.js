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

const dialogRef = document.getElementById("myDialog");
const TabLeft = document.getElementById("tabLeft");

// Open the Dialog
function openDialog() {
  dialogRef.showModal();
  dialogRef.classList.add("opened");

  document.getElementById("tabLeft").setAttribute("tabindex", "0");
}

// Close the Dialog
function closeDialog() {
  dialogRef.close();
  dialogRef.classList.remove("opened");

  document.getElementById("tabLeft").setAttribute("tabindex", "-1");
}

function openImage(index) {
  currentIndex = index; //  Take clicked img in the current Index
  updateDialogImage(); //  Update the Picture
  openDialog(); //      Open the Dialog
}

// Includes the Array List  in the Elements

function containsElement(array, element) {
  return array.includes(element);
}

function initArrays() {
  let contentRef = document.getElementById("my_content");

  contentRef.innerHTML = "";

  // edit the img in index Picked element

  for (
    let indexPictures = 0;
    indexPictures < pictures.length;
    indexPictures++
  ) {
    contentRef.innerHTML += `
      
  
    <img onclick="openImage(${indexPictures})"

      
        class="gallery-img"
         src="./img/pictures/${pictures[indexPictures]}.jpg"
        
        
     >
   

    `;
  }
}

// Global setting for Index

let currentIndex = 0;

//create Dialog IMG s with  Array-Index

function showImageFromArray(index) {
  currentIndex = index;
  const dialogImg = document.getElementById("DialogImgID");
  dialogImg.src = `./img/pictures/${pictures[currentIndex]}.jpg`;
  dialogImg.alt = pictures[currentIndex];
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
  dialogImg.src = `./img/pictures/${pictures[currentIndex]}.jpg`;
  dialogImg.alt = pictures[currentIndex];
}

// solution set enter to click Buttons
// for WCAG Konformity

// SetEnterForClick

// document.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     const active = document.activeElement;

//     if (active && active.hasAttribute("tabindex")) {
//       active.click();
//     }
//   }
// });

// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key

// window.addEventListener("keydown", (event) => {
//   if (event.defaultPrevented) {
//     return; // Do nothing if the event was already processed
//   }

//   switch (event.key) {
//     case "ArrowLeft":
//       // Vorheriges Bild anzeigen
//       prevImage();
//       break;
//     case "ArrowRight":
//       // Nächstes Bild anzeigen
//       nextImage();
//       break;
//     case "Enter":
//       // Dialog schließen (für Barrierefreiheit)
//       return;
//       break;
//     default:
//       return; // Quit when this doesn't handle the key event.
//   }

//   // Cancel the default action to avoid it being handled twice
//   event.preventDefault();
// });
