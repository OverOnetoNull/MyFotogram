


// Bubbling





function noPropagation(event) {
  event.stopPropagation();

 
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
 
  "sunset-5429861_640",
  "water-4873775_1280"
];



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
      >
    `;
  }
}


    // Globaler Index


    let currentIndex = 0;

  //open Dialog  with  Array-Index

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

 

   