/*Iteración 2: Modificando el DOM
2.1 Inserta dinamicamente en un html un div vacio con javascript.*/
let addDiv = document.querySelector("h2")
let newDiv = document.createElement('div');
//console.log(newDiv);


/*2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.*/
function divWithP() {
    let myDiv = document.createElement('div');
    document.body.appendChild(myDiv);
    let myP = document.createElement('p');
    myP.appendChild(myP);
}
divWithP();

/*2.3 Inserta dinamicamente en un html un div que contenga 6(loop del 0 al - 6) p utilizando un loop con javascript.*/
const newDivThere = document.querySelector('.there')

for (let i = 0; i < 6; i++) {
    let newDivTwo = document.createElement('p');
    let addItems = document.createTextNode(`loop`);
    newItem.appendChild(newContent);
    newDivThere.appendChild(newItem)
    
}

/*2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.*/
let addText = document.querySelector('.addText')
addText.innerHTML = "<p>Soy dinámico</p>"

/*2.5 Inserta en el h2 con la clase .fn-insert-here (con corchetes) el texto 'Wubba Lubba dub dub'.*/

/*2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.*/
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];


/*2.7 Elimina todos los nodos que tengan la clase .fn-remove-me*/

/*2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.*/

/*2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here*/
function addText() {
  let elements = document.getElementsByClassName("fn-insert-here");
  for (const element of elements) {
    const newP = document.createElement("p");
    newP.textContent = "Voy dentro!";
    element.insertAdjacentElement("beforeend", newP);
  }
}