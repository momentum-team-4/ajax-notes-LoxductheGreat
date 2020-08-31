


window.addEventListener('load', function(){
    fetch('http://localhost:3000/notes/')
    .then(response => response.json())
    .then(data => {console.log(data)

        for(i = 0; i < data.length; i++){
            
        let noteEl = document.createElement('div')
        let textEl = document.createElement('p')
        noteEl.classList.add('note')
          textEl.innerHTML = data[i].body
        finalnote.appendChild(noteEl)
        noteEl.appendChild(textEl)
        console.log(finalnote)
        console.log(noteEl)}
        })
})


// added elements
let addnotebuttn = document.querySelector('#create-note')
let addnotebar = document.querySelector('#addnotebar')
let finalnote = document.querySelector('#note-board')
 



addnotebuttn.addEventListener('click',
    addnote )


function addnote(){
    let text = document.querySelector('#notetext')
    fetch('http://localhost:3000/notes/',{
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({"body": text.value})
})
        .then(response => response.json())
        .then(data => {console.log(data)})
    



}




    





 