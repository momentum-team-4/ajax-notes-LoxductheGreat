window.addEventListener('load', function(){
    fetch('http://localhost:3000/notes/')
    .then(response => response.json())
    .then(data => {console.log(data)})
})


// added elements
let addnotebuttn = document.querySelector('#create-note')
let addnotebar = document.querySelector('#addnotebar')
// let notesDiv = document.querySelector('#notes')
let finalnote = document.querySelector('#note-board')




addnotebuttn.addEventListener('click', function(){
    console.log(addnotebuttn)
    let notebox = document.createElement('div')
    notebox.classList.add('sample-note')
    console.log(notebox)

    finalnote.appendChild(notebox)
    console.log(finalnote)

})






// make a feature to create notes 
// store note after clicking create
// store notes when clicking create button
//  - 