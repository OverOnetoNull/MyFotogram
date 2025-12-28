

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



let fruits = [1, 2, 3, 4, 5];

function containsElement(array, element) {
    return array.includes(element);

}


function initArrays(){
    let contentRef = document.getElementById('my_content');
    contentRef.innerHTML = "";

    for (let indexFruits = 0; indexFruits < fruits.length; indexFruits++) {
   
   
        contentRef.innerHTML += `<p>+ ${fruits[indexFruits]}</p>`;
    
      }
    
   }
    



// Liste


// let Liste = [1, 2, 3, 4, 5];


// let displayElement = document.getElementById("main_Repeater");


// let getElementById = Liste.getElementById("main_Repeater");

// {
//     displayElement.innerHTML = "<img src='./img/pictures/eins.jpg'></img>";
// }



// let mainElement = document.getElementById("ID_Main");
// let displayElement = document.getElementById("ID_Display");
