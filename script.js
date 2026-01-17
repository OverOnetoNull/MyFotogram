


// Bubbling


function noPropagation(event) {
  event.stopPropagation();

 
}


let fruits = [
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
  "watch_Sun_GoBy"
  
];



const dialogRef = document.getElementById("myDialog");
 
// Open the Dialog
function openDialog() {
  dialogRef.showModal();
  dialogRef.classList.add("opened");
}
  

// Close the Dialog
function closeDialog() {
    dialogRef.close();
    dialogRef.classList.remove("opened");
}


function openImage(index) {
  currentIndex = index;   //  Take clicked img in the current Index
  updateDialogImage();    //  Update the Picture
  openDialog();       //      Open the Dialog 
}



// Includes the Array List  in the Elements

function containsElement(array, element) {
    return array.includes(element);

}


function initArrays() {


  let contentRef = document.getElementById('my_content');

  contentRef.innerHTML = "";

// edit th img in index Picked element


  for (let indexFruits = 0; indexFruits < fruits.length; indexFruits++) {
    contentRef.innerHTML += `
      <img
        class="gallery-img"
         src="./img/pictures/${fruits[indexFruits]}.jpg"
           onclick="openImage(${indexFruits})"
             tabindex="0"
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
  dialogImg.src = `./img/pictures/${fruits[currentIndex]}.jpg`;
  dialogImg.alt = fruits[currentIndex];
  
}

// The tight Mect Button change the index 1+ 
// and if th current index is bigger 
// it will change index to 0 (start of array)

 


function nextImage() {

     currentIndex++;

  if (currentIndex >= fruits.length) {
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
      currentIndex = fruits.length - 1;
  }

  updateDialogImage();
}

function updateDialogImage() {





  // set the dialog Image in the form of indexed Picture 
  
  const dialogImg = document.getElementById("DialogImgID");
  dialogImg.src = `./img/pictures/${fruits[currentIndex]}.jpg`;
  dialogImg.alt = fruits[currentIndex];
}

 


// solution set enter to click Buttons 
// for WCAG Konformity

// SetEnterForClick

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const active = document.activeElement;

    if (active && active.hasAttribute("tabindex")) {
      active.click();
    }
    


  }
});









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
//        return;
//       break;
//     default:
//       return; // Quit when this doesn't handle the key event.
//   }

//   // Cancel the default action to avoid it being handled twice
//   event.preventDefault();
// });
