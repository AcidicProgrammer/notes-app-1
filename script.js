// function buy() {
//     let payment = document.querySelector("#payment").value;
//     let stock = parseInt(document.querySelector("#stock").innerHTML);
//     // document.getElementById("soda-list").innerHTML += "<li>" + payment; // TEST to add contents to list
//     if(this.payment.value > 1.25) {
//         let change = this.payment.value - 1.25;
//         if(this.stock.innerHTML == 0) {
//             alert("There is no more soda left");
//             document.querySelector("#soda1").disabled = true;
//         }
//         else {
//             alert("Successfully purchased drink 1!");
//             stock--;
//             this.stock.innerHTML = stock;
//             this.payment.value = change.toFixed(2);
//         }
//     }
//     else if(this.payment.value == 1.25) {
//         let change = this.payment.value - 1.25;
//         stock--;
//         this.stock.innerHTML = stock;
//         alert("Successfully purchased drink 1!")
//         return this.payment.value = 0;
//     }
//     else if(this.payment.value == "") {
//         return alert("Please input a payment amount");
//     }

    // else {
    //     alert("You don't have enough to buy this drink.");
    // }
// }

// Code for notes app
// var random_key = Math.floor(Math.random());
// function createNote() {
//     let note_title = document.getElementById("title").value;
//     let note_description = document.getElementById("description").value;
//     let notes_container = document.getElementById("notes-container").innerHTML;
//     if(note_title == "" && note_description == "") {
//         return alert("Please input some text in the required fields");
//     }
//     else {
//     let displayNotes;
//     displayNotes = `<div class = "notes">
//     <h1>${note_title}</h1>
//     <hr>
//     <p>${note_description}</p>
//     <input type = "button" value = "Delete Note" onclick = "deleteNote(this)" class = "btn-style">
//     </div>`;
//     document.getElementById("notes-container").innerHTML += displayNotes;
//     localStorage.setItem(random_key, document.getElementById("notes-container").innerHTML);
//     random_key = localStorage.getItem(random_key);
//   }
// }


// Code for notes app

let notesArray = [];
const addNotes = (ev) => {
    ev.preventDefault();  //to stop the form submitting
    let notes_container = document.getElementById("notes-container").innerHTML;
    let notes_title = document.getElementById("title").value;
    let notes_description = document.getElementById("description").value;

    if(notes_title == "" || notes_description == "") {
        return alert("Please fill in the required fields");
    }

    let notes_created = {
        title: document.getElementById('title').value,
        description: document.getElementById('description').value
    }
    notesArray.push(notes_created);
    document.forms[0].reset(); 

    localStorage.setItem('Notes', JSON.stringify(notesArray));

    let displayNotes = `<div class = "notes">
    <h1>${notes_created.title}</h1>
    <hr>
    <p>${notes_created.description}</p>
    <input type = "button" value = "Delete Note" onclick = "deleteNote(this)" class = "btn-style">
    </div>`;
    document.getElementById("notes-container").innerHTML += displayNotes;
}
document.addEventListener('DOMContentLoaded', () => {
document.getElementById('notesBtn').addEventListener('click', addNotes);
});

// Make the notes appear on the page on page load
// Maybe add an edit note option
// Add a delete button that deletes the specific note you chose + from local storage