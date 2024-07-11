function addNote(){
    const noteinput = document.getElementById(('noteinput'))
    const notelist = document.getElementById('notelist')
    if(noteinput.value.trim()!== ""){
        const newNote = document.createElement('li');
        newNote.textContent = noteinput.value;
        notelist.appendChild(newNote);
        noteinput.value = "";
    }
    else{
        alert("Por favor,escriva¿¿ba una nota antes de agregar.");
    }
}