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
// let text = document.querySelector('')
 let text = document.querySelector('#notetext')

// let displaytext = text.value


addnotebuttn.addEventListener('click', function(){
    let noteEl = document.createElement('div')
    let textEl = document.createElement('p')
    noteEl.classList.add('note')

      textEl.innerHTML = text.value
        

    // // console.log(addnotebuttn)
    // let notebox = document.createElement('div')
    // notebox.classList.add('sample-note')
    // // console.log(notebox)  
    // console.log(text)    
    // finalnote.appendChild(notebox)
    // console.log(finalnote)

    finalnote.appendChild(noteEl)
    noteEl.appendChild(textEl)
    console.log(finalnote)
    console.log(noteEl)
})






// make a feature to create notes 
// store note after clicking create
// store notes when clicking create button
//  - 