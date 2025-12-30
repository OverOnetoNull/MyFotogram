

const dialogRef = document.getElementById("myDialog");
 



// Öffnet den Dialog
function openDialog() {
  dialogRef.showModal();
  dialogRef.classList.add("opened");
}
  

// Schließt den Dialog
function closeDialog() {
    dialogRef.close();
    dialogRef.classList.remove("opened");
}


function openImage(index) {
  currentIndex = index;   //  Das ausgewählte Bild
  updateDialogImage();    //  Bild setzen
  openDialog();       //  Dialog öffnen
}




let fruits = [
  "ai-generated-8756365_1280",
  "boat-4868355_640",
  "boat-7497807_640",
  "boat-7497809_640",
  "coast-6917777_640",
  "dominicana-4620393_640",
  "sea-4994010_640",
  "sun-4475490_640",
  "sun-5039871_640",
  // "sun-5223711_1280",
  "sunset-5429861_640",
  "water-4873775_1280"
];


// Includes the Array List  in the Element  s

function containsElement(array, element) {
    return array.includes(element);

}


function initArrays() {
  let contentRef = document.getElementById('my_content');

  contentRef.innerHTML = "";


  for (let indexFruits = 0; indexFruits < fruits.length; indexFruits++) {
    contentRef.innerHTML += `
      <img
        class="my_content"
        src="./img/pictures/${fruits[indexFruits]}.jpg"
        onclick="openImage(${indexFruits})"
      >
    `;
  }
}





   
    


    // Globaler Index


let currentIndex = 0;

  //Dialog öffnen mit Array-Index

function showImageFromArray(index) {
  currentIndex = index;
    
  const dialogImg = document.getElementById("DialogImgID");
  dialogImg.src = `./img/pictures/${fruits[currentIndex]}.jpg`;
  dialogImg.alt = fruits[currentIndex];
  
}



function nextImage() {

     currentIndex++;

  if (currentIndex >= fruits.length) {
     currentIndex = 0;
  }

  updateDialogImage();
}



function prevImage() {
  currentIndex--;

  if (currentIndex < 0) {
      currentIndex = fruits.length - 1;
  }

  updateDialogImage();
}

function updateDialogImage() {
  const dialogImg = document.getElementById("DialogImgID");
  dialogImg.src = `./img/pictures/${fruits[currentIndex]}.jpg`;
  dialogImg.alt = fruits[currentIndex];
}

 

   