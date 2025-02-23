
// alert(`this is an alert `)

 class NewList {
    constructor(){
        this.userText = document.getElementById('input');
        const addedButton = document.getElementById('addButton');
        addedButton.addEventListener('click', () => {
            let value = this.userText.value;
            if(value === ""){
                alert('Please enter a valid text:');
            } 
        });
        return this.userText;
    }

    // addText(input){
    //     // let input = 'favourite food'
    //     let addedButton = document.getElementById("addButton");
    //     addedButton.addEventListener('click', () => {
    //         let clonedText = document.querySelector('input');
    //         clonedText.innerHTML = input.value;
    //         this.userText.appendChild(clonedText); 
    //         let clonedImage = document.createElement('img');
    //         clonedImage.innerHTML = '<img src="delete.png" alt="delete">';
    //         this.userText.appendChild(clonedImage); 
    //         console.log(clonedText);
    //     });

        
    //     return this.userText;
    // }

    // removeText(){
    //     addEventListener('click', () => {
    //         return this.userText;
    //     });
    //     return this.userText;
    // }
 }

let input = document.getElementById('input');
let deleteButton = document.getElementById('deleteText');
let listDiv = document.querySelector('.list-item')
let addedButton = document.getElementById('addButton');

const addedList = new NewList();

addedList

