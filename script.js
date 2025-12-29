

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




function containsElement(array, element) {
    return array.includes(element);

}


function initArrays(){
    let contentRef = document.getElementById('my_content');
    contentRef.innerHTML = "";

    for (let indexFruits = 0; indexFruits < fruits.length; indexFruits++) {
   
           contentRef.innerHTML += `<img class="my_content" src="./img/pictures/${fruits[indexFruits]}.jpg"></img>`;
       
        
    
      }
    
   }
   
    


    


 

   
// DialogImgID

// Liste


// let Liste = [1, 2, 3, 4, 5];


// let displayElement = document.getElementById("main_Repeater");


// let getElementById = Liste.getElementById("main_Repeater");

// {
//     displayElement.innerHTML = "<img src='./img/pictures/eins.jpg'></img>";
// }



// let mainElement = document.getElementById("ID_Main");
// let displayElement = document.getElementById("ID_Display");
